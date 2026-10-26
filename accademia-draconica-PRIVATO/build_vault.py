#!/usr/bin/env python3
"""
Accademia Draconica — costruisce il "vault" cifrato con i contenuti del corso.

Uso:
    python3 build_vault.py            # aggiorna il vault con gli utenti di users.txt
    python3 build_vault.py --rotate   # come sopra, ma cambia la chiave principale
                                      # (usalo quando RIMUOVI un utente: chi era già dentro viene scollegato)

users.txt: una riga per utente, nel formato   nomeutente:password
(righe vuote e righe che iniziano con # vengono ignorate)

Serve:  pip install cryptography
Poi carica su GitHub SOLO la cartella accademia-draconica-SITO (mai questa cartella!).
"""
import base64, hashlib, json, os, sys, unicodedata
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes

ITER = 300_000
HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.join(HERE, "..", "accademia-draconica-SITO")
b64 = lambda b: base64.b64encode(b).decode()

def norm_user(u):
    return unicodedata.normalize("NFKC", u.strip()).lower()

def tag(u):
    return hashlib.sha256(("tag:" + norm_user(u)).encode()).digest()[:8].hex()

def derive(user, pwd, salt):
    kdf = PBKDF2HMAC(algorithm=hashes.SHA256(), length=32, salt=salt, iterations=ITER)
    return kdf.derive((norm_user(user) + ":" + unicodedata.normalize("NFKC", pwd)).encode())

def main():
    rotate = "--rotate" in sys.argv
    kfile = os.path.join(HERE, "master.key")
    if rotate or not os.path.exists(kfile):
        master = os.urandom(32)
        open(kfile, "wb").write(master)
        print("• Nuova chiave principale generata" + (" (rotazione)" if rotate else ""))
    else:
        master = open(kfile, "rb").read()

    code = ""
    for name in ("lessons.js", "extras.js"):
        code += open(os.path.join(HERE, "content", name), encoding="utf-8").read() + "\n;\n"

    iv = os.urandom(12)
    content = {"iv": b64(iv), "data": b64(AESGCM(master).encrypt(iv, code.encode("utf-8"), b"content"))}

    users = []
    seen = set()
    for line in open(os.path.join(HERE, "users.txt"), encoding="utf-8"):
        line = line.strip()
        if not line or line.startswith("#") or ":" not in line:
            continue
        u, p = line.split(":", 1)
        u = norm_user(u)
        if not u or not p or u in seen:
            continue
        if len(p) < 8:
            print(f"! Password troppo corta (minimo 8 caratteri) per «{u}»: saltato")
            continue
        seen.add(u)
        salt, uiv = os.urandom(16), os.urandom(12)
        wrapped = AESGCM(derive(u, p, salt)).encrypt(uiv, master, b"key")
        users.append({"tag": tag(u), "salt": b64(salt), "iv": b64(uiv), "key": b64(wrapped)})
        print(f"• Utente abilitato: {u}")

    vault = {"v": 1, "iter": ITER, "users": users, "content": content}
    out = os.path.join(SITE, "vault", "vault.json")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    json.dump(vault, open(out, "w"), separators=(",", ":"))
    print(f"\nFatto: {len(users)} utenti → {os.path.normpath(out)}")
    print("Ora carica la cartella accademia-draconica-SITO su GitHub.")

main()
