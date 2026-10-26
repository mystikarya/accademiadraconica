/* Accademia Draconica — meditazioni guidate, draghi archetipi e quiz finale. */

/* ───────────── Meditazioni ───────────── */
const MEDITATIONS = [
  {
    id: "respiro", icon: "lotus", title: "Il respiro del drago", minutes: 5,
    desc: "Il ritmo 4-4-6 per calmare corpo e mente.",
    cycle: [["Inspira", 4], ["Trattieni", 4], ["Espira", 6]],
    script: [
      "Siediti comodo, con la schiena morbida e le mani sulle ginocchia.",
      "Chiudi gli occhi. Senti il peso del corpo sulla sedia.",
      "Segui la sfera: si apre quando inspiri, si richiude quando espiri.",
      "Con ogni espirazione lascia andare un po’ di tensione dalle spalle.",
      "Immagina che il tuo respiro sia il respiro di un grande drago addormentato.",
      "Ora respira come preferisci. Resta ancora un momento in silenzio.",
      "Muovi lentamente le dita. Quando vuoi, riapri gli occhi."
    ]
  },
  {
    id: "grotta", icon: "gem", title: "La grotta del drago", minutes: 10,
    desc: "Il viaggio guidato verso il tuo drago interiore.",
    cycle: [["Inspira", 5], ["Espira", 7]],
    script: [
      "Respira lentamente. Costruisci un luogo che ami: una montagna al tramonto, un bosco, una scogliera.",
      "Senti la luce sulla pelle, il vento, i suoni. Questo è il tuo santuario: potrai tornare qui in ogni momento.",
      "Davanti a te inizia un sentiero. Lo percorri senza fretta, fino all’ingresso di una grotta.",
      "Hai con te una piccola fiamma. Entri piano. L’aria è fresca, la pietra tiepida.",
      "In fondo, nello spazio più profondo, senti una presenza. Non cercare di capire: accoglila.",
      "Inchinati con rispetto e chiedi: «Che cosa vuoi mostrarmi?». Resta in ascolto: un’immagine, una sensazione, anche il silenzio.",
      "Ringrazia il tuo drago per ciò che ti ha dato, anche se ti sembra poco.",
      "Risali il sentiero fino al santuario. Senti i piedi a terra, il respiro, le mani.",
      "Quando sei pronto, riapri gli occhi e bevi un bicchiere d’acqua."
    ]
  },
  {
    id: "fiamma", icon: "fire", title: "Il Drago della Fiamma", minutes: 6,
    desc: "Accendi coraggio e slancio. Per iniziare, decidere, lasciar andare.",
    cycle: [["Inspira", 4], ["Trattieni", 2], ["Espira", 6]],
    script: [
      "Porta l’attenzione al centro del petto. Immagina una piccola brace calda.",
      "A ogni inspirazione la brace si fa più viva. A ogni espirazione il calore si espande.",
      "Il Drago della Fiamma è davanti a te, dorato e rosso. Non brucia: illumina.",
      "Chiedigli: che cosa è pronto a finire, perché io possa ricominciare?",
      "Lascia che il fuoco bruci ciò che non serve più: un peso, un’abitudine, una paura.",
      "Senti il coraggio nelle gambe, nelle braccia, nel respiro.",
      "Ringrazia la Fiamma. Lascia la brace viva, ma piccola e sotto controllo. Torna al corpo."
    ]
  },
  {
    id: "abisso", icon: "drop", title: "Il Drago dell’Abisso", minutes: 6,
    desc: "Ascolta le emozioni e lascia scorrere. Per guarire e perdonare.",
    cycle: [["Inspira", 4], ["Espira", 8]],
    script: [
      "Immagina un lago profondo, immobile, sotto un cielo di luna.",
      "Ti siedi sulla riva. L’acqua è calma. Ogni respiro è un’increspatura leggera.",
      "Dalle profondità sale il Drago dell’Abisso: blu e argento, silenzioso.",
      "Chiedigli: che cosa sento davvero, sotto ciò che dovrei sentire?",
      "Lascia che le emozioni salgano e scorrano senza giudicarle, come onde.",
      "Immagina che l’acqua lavi ciò che pesa e lo porti via.",
      "Ringrazia l’Abisso. Senti la terra sotto di te, e torna alla stanza."
    ]
  },
  {
    id: "radice", icon: "leaf", title: "Il Drago della Radice", minutes: 6,
    desc: "Radicati, calmati, costruisci. Per i momenti in cui senti instabilità.",
    cycle: [["Inspira", 4], ["Trattieni", 4], ["Espira", 4]],
    script: [
      "Sentiti pesante, come una pietra antica. Le gambe sono radici che scendono nella terra.",
      "Ogni espirazione scende più in profondità, fino a toccare un cuore caldo e sicuro.",
      "Il Drago della Radice è accanto a te, verde muschio e bronzo, immobile come una collina.",
      "Chiedigli: che cosa voglio custodire? E che cosa sto solo trattenendo per paura?",
      "Senti la stabilità salire dalle radici fino al petto, come linfa.",
      "Dì a te stesso: ho tutto il tempo che serve per costruire ciò che conta.",
      "Ringrazia la Radice. Muovi i piedi, le mani, e torna lentamente."
    ]
  },
  {
    id: "vento", icon: "wind", title: "Il Drago del Vento", minutes: 6,
    desc: "Chiarezza, respiro ampio e visione. Per decidere, scrivere, vedere meglio.",
    cycle: [["Inspira", 5], ["Espira", 5]],
    script: [
      "Immagina di essere in cima a una montagna, all’alba. L’aria è limpida.",
      "Ogni respiro è un vento fresco che entra e porta via i pensieri.",
      "Il Drago del Vento plana su di te, argento e lilla. Le sue ali tagliano le nuvole.",
      "Chiedigli: che cosa vedrei se guardassi la mia vita da qui?",
      "Osserva la situazione che ti preoccupa dall’alto. Che forma ha? Dov’è il passaggio?",
      "Poi, per un momento, atterra. Senti il suolo, il corpo, il cuore.",
      "Ringrazia il Vento. Respira profondo, apri gli occhi."
    ]
  },
  {
    id: "sera", icon: "moon", title: "Gratitudine della sera", minutes: 6,
    desc: "Chiudi la giornata con calma e riconoscenza.",
    cycle: [["Inspira", 4], ["Espira", 8]],
    script: [
      "Lascia che la giornata scorra davanti a te, come una pellicola lenta.",
      "Trova un momento in cui sei stato presente. Ringrazia.",
      "Trova un momento difficile. Non giudicarlo: osservalo con gentilezza.",
      "Trova una persona, un luogo o un gesto per cui sei grato.",
      "Il tuo drago veglia sul tuo sonno. Non hai nulla da fare, nulla da dimostrare.",
      "Fai un respiro lungo e lascia andare ciò che non puoi cambiare stanotte."
    ]
  }
];

/* ───────────── Draghi archetipi ───────────── */
const DRAGONS = {
  fiamma: {
    id: "fiamma", name: "Il Drago della Fiamma", title: "Il Trasformatore",
    element: "Fuoco", direction: "Sud", season: "Estate", hours: "Mezzogiorno",
    colors: "Rosso, oro, arancio", stone: "Corniola, occhio di tigre", med: "fiamma",
    accent: "#ff7a2a", accentHi: "#ffc56e",
    motto: "Ciò che brucia con verità illumina.",
    essence: [
      "Sei una persona che accende. Dove arrivi, l’aria cambia: porti slancio, passione e il coraggio di dire «cominciamo». Il tuo drago è il Drago della Fiamma: l’energia che spezza ciò che è fermo, che purifica e che riaccende. Le tradizioni lo associano al sole di mezzogiorno e al Sud.",
      "Hai bisogno di sentire che ciò che fai ha un senso. Sai dire di no, sai rialzarti, sai trascinare gli altri. Tendi a vivere le cose con intensità: quando ami, ami con tutto; quando ti arrabbi, si vede."
    ],
    gifts: ["Coraggio e iniziativa", "Passione e carisma", "Capacità di ricominciare", "Onestà diretta"],
    shadow: "Il fuoco senza misura brucia anche ciò che ami. La tua ombra è l’impulsività, la collera che parte prima del pensiero, la tendenza a consumarti e a bruciare ponti. Ogni tanto, la tua più grande magia è aspettare un respiro prima di rispondere.",
    love: "Nelle relazioni sei appassionata o appassionato, leale, trascinante. Hai bisogno di sincerità e di stimoli. Impara a lasciare spazio anche al silenzio dell’altro, e a distinguere un dissenso da un attacco.",
    work: "Eccelli nelle partenze, nelle crisi, nei progetti che richiedono coraggio. Ti serve un alleato Radice per portare le cose in fondo e un po’ di Abisso per ascoltare davvero chi lavora con te.",
    grow: ["Prima di rispondere a caldo, fai tre respiri lunghi.", "Dedica un giorno a settimana alla cura: dormi, cammina, stai in silenzio.", "Chiedi a qualcuno di fidato dove rischi di bruciare troppo in fretta."],
    mantra: "Brucio ciò che finisce, accendo ciò che nasce."
  },
  abisso: {
    id: "abisso", name: "Il Drago dell’Abisso", title: "Il Guaritore",
    element: "Acqua", direction: "Ovest", season: "Autunno", hours: "Tramonto",
    colors: "Blu profondo, argento, verde-acqua", stone: "Labradorite, acquamarina", med: "abisso",
    accent: "#3fb7d8", accentHi: "#a5e8ff",
    motto: "Nel profondo c’è ciò che guarisce.",
    essence: [
      "Sei una persona che sente. Il tuo drago è il Drago dell’Abisso: vive nei laghi profondi, nei sogni, nella memoria. Capisci le atmosfere prima delle parole, cogli ciò che gli altri non dicono, porti calma dove c’è tensione. Le tradizioni lo associano all’Ovest, al tramonto, all’autunno.",
      "Hai un mondo interiore ricchissimo, fatto di immagini, ricordi e intuizioni. Spesso gli altri si confidano con te senza sapere perché. La tua forza è la profondità."
    ],
    gifts: ["Intuizione e sensibilità", "Empatia e ascolto", "Capacità di guarire e consolare", "Immaginazione e creatività"],
    shadow: "L’acqua senza argini sommerge. La tua ombra è assorbire le emozioni degli altri, perderti nei ricordi, rifugiarti nei sogni quando il mondo si fa duro. Può capitare di confondere ciò che senti tu con ciò che sentono gli altri.",
    love: "Sei presente, premurosa o premuroso, capace di intimità vera. Hai bisogno di sicurezza emotiva. Impara a dire i tuoi bisogni prima che si trasformino in silenzio e rancore.",
    work: "Sei prezioso nei ruoli di cura, ascolto, arte, scrittura, mediazione. Ti serve un alleato Fiamma per trasformare l’intuizione in azione e Radice per proteggere le tue energie.",
    grow: ["Disegna confini chiari: dopo aver ascoltato, fai un gesto che «ti lava» (una doccia, una camminata).", "Tieni un diario dei sogni: sono un tuo linguaggio.", "Scegli una cosa da fare oggi, anche piccola, senza aspettare di sentirti pronto."],
    mantra: "Sento senza affondare, accolgo senza perdermi."
  },
  radice: {
    id: "radice", name: "Il Drago della Radice", title: "Il Guardiano",
    element: "Terra", direction: "Nord", season: "Inverno", hours: "Mezzanotte",
    colors: "Verde muschio, bruno, ocra", stone: "Ossidiana, diaspro, quarzo fumé", med: "radice",
    accent: "#8bbf4a", accentHi: "#d4eaa0",
    motto: "Ciò che ha radici, resiste a ogni inverno.",
    essence: [
      "Sei una persona che tiene. Il tuo drago è il Drago della Radice: il più paziente, quello che veglia su ciò che dura. Dove arrivi si crea stabilità: sai fare le cose con cura, mantenere le promesse, costruire passo dopo passo. Le tradizioni lo associano al Nord, alla mezzanotte, all’inverno.",
      "Hai un rapporto profondo con il corpo, con la casa, con la natura. Dai valore alla lealtà e alla concretezza. Gli altri si sentono al sicuro vicino a te, anche quando non lo dicono."
    ],
    gifts: ["Affidabilità e pazienza", "Senso pratico e cura", "Lealtà e senso di appartenenza", "Resistenza alle difficoltà"],
    shadow: "La terra senza movimento si indurisce. La tua ombra è la rigidità: testardaggine, possesso, paura del cambiamento, difficoltà a chiedere aiuto. A volte confondi il custodire con il trattenere.",
    love: "Sei fedele, presente, un porto sicuro. Hai bisogno di prevedibilità e di gesti concreti. Impara a lasciare spazio alle sorprese e a dire con le parole ciò che esprimi con i fatti.",
    work: "Sei un pilastro in ogni squadra: porti a termine, organizzi, cura i dettagli. Ti serve un alleato Vento per aprire nuove prospettive e Fiamma per osare quando è il momento.",
    grow: ["Ogni settimana, cambia una piccola abitudine, solo per allenare la flessibilità.", "Chiedi aiuto una volta al mese: è una forma di fiducia.", "Cammina all’aperto, anche dieci minuti: il tuo drago ama il suolo vero."],
    mantra: "Sono radice che sostiene e albero che cresce."
  },
  vento: {
    id: "vento", name: "Il Drago del Vento", title: "Il Saggio",
    element: "Aria", direction: "Est", season: "Primavera", hours: "Alba",
    colors: "Argento, lilla, azzurro chiaro", stone: "Fluorite, quarzo ialino, selenite", med: "vento",
    accent: "#b69cff", accentHi: "#e6dcff",
    motto: "Chi vede lontano, sceglie con libertà.",
    essence: [
      "Sei una persona che vede. Il tuo drago è il Drago del Vento: plana in alto, osserva, collega. Hai curiosità, intelligenza, senso dell’umorismo e un bisogno profondo di libertà. Le tradizioni lo associano all’Est, all’alba, alla primavera.",
      "Ami capire. Colleghi idee lontane, spieghi con chiarezza, sai cambiare prospettiva. Ti senti stretto quando le cose sono rigide o ripetitive."
    ],
    gifts: ["Chiarezza e visione d’insieme", "Parola e comunicazione", "Curiosità e adattabilità", "Libertà di pensiero"],
    shadow: "L’aria senza terra si disperde. La tua ombra è il distacco: restare nella testa, razionalizzare le emozioni, cambiare strada prima di impegnarsi davvero. Ogni tanto la scelta più magica è atterrare.",
    love: "Sei leggero, stimolante, attento alla mente dell’altro. Hai bisogno di libertà e conversazione. Impara a restare quando le emozioni si fanno profonde, invece di spostarti verso nuove idee.",
    work: "Eccelli in ricerca, comunicazione, insegnamento, strategia. Ti serve un alleato Radice per portare a termine e Abisso per ascoltare ciò che non si può dire con le parole.",
    grow: ["Scrivi per dieci minuti ogni giorno senza fermarti: ti riporta al corpo.", "Quando decidi qualcosa, aggiungi sempre un passo concreto e una data.", "Pratica un gesto fisico lento: yoga, camminata, giardinaggio."],
    mantra: "Vedo lontano e torno a casa."
  }
};

/* ───────────── Quiz: Scopri il tuo drago ───────────── */
/* Ogni risposta assegna un punto a un drago: f = Fiamma, a = Abisso, r = Radice, v = Vento */
const QUIZ = [
  {
    q: "Un imprevisto stravolge i tuoi piani. Qual è la tua prima reazione?",
    o: [
      ["f", "Mi muovo subito: trovo una soluzione e agisco."],
      ["a", "Sento un’onda di emozioni, poi capisco cosa mi dice."],
      ["r", "Mi fermo, valuto con calma e riorganizzo passo dopo passo."],
      ["v", "Guardo la situazione dall’alto e cerco una prospettiva nuova."]
    ]
  },
  {
    q: "Quale paesaggio ti chiama di più?",
    o: [
      ["f", "Un vulcano al tramonto, con la lava che brilla."],
      ["a", "Un lago nascosto sotto la luna."],
      ["r", "Una foresta antica, con radici enormi e muschio."],
      ["v", "Una cima altissima, battuta dal vento."]
    ]
  },
  {
    q: "Che cosa ti fa sentire davvero vivo?",
    o: [
      ["f", "Sfidare i miei limiti e vincere una prova."],
      ["a", "Un momento di connessione profonda con qualcuno."],
      ["r", "Costruire qualcosa che dura, con le mie mani."],
      ["v", "Scoprire un’idea nuova che cambia il modo di vedere."]
    ]
  },
  {
    q: "In un gruppo, di solito sei quello o quella che…",
    o: [
      ["f", "Prende l’iniziativa e accende l’entusiasmo."],
      ["a", "Capisce cosa prova ciascuno e offre ascolto."],
      ["r", "Organizza, si assicura che tutto funzioni."],
      ["v", "Porta idee, collega persone, fa domande intelligenti."]
    ]
  },
  {
    q: "Quando sei stressato, che cosa ti aiuta di più?",
    o: [
      ["f", "Muovermi: sport, corsa, qualcosa di intenso."],
      ["a", "Stare da solo, piangere se serve, ascoltare musica."],
      ["r", "Cucinare, riordinare, camminare nella natura."],
      ["v", "Scrivere, parlare con qualcuno, mettere in ordine i pensieri."]
    ]
  },
  {
    q: "Qual è la tua più grande paura?",
    o: [
      ["f", "Spegnermi, perdere la mia forza e il mio slancio."],
      ["a", "Essere ferito e non essere compreso."],
      ["r", "Perdere ciò che ho costruito e la sicurezza."],
      ["v", "Restare intrappolato, senza libertà né scelta."]
    ]
  },
  {
    q: "Se potessi avere un dono magico, quale sceglieresti?",
    o: [
      ["f", "Il coraggio di affrontare qualsiasi sfida."],
      ["a", "Il potere di guarire il dolore degli altri."],
      ["r", "La capacità di proteggere chi amo."],
      ["v", "La capacità di comprendere ogni linguaggio e ogni idea."]
    ]
  },
  {
    q: "Quale stagione senti più tua?",
    o: [
      ["f", "L’estate: luce piena, calore, energia."],
      ["a", "L’autunno: nostalgia, profondità, trasformazione."],
      ["r", "L’inverno: silenzio, radici, riposo."],
      ["v", "La primavera: risveglio, inizi, possibilità."]
    ]
  },
  {
    q: "Come prendi una decisione importante?",
    o: [
      ["f", "Ascolto l’istinto e mi butto."],
      ["a", "Aspetto di sentire che «è giusto» dentro di me."],
      ["r", "Raccolgo i fatti, confronto i rischi, pondero a lungo."],
      ["v", "Analizzo le alternative e immagino gli scenari."]
    ]
  },
  {
    q: "Di fronte a un drago nella grotta, tu…",
    o: [
      ["f", "Lo guardo negli occhi e gli dico che sono pronto."],
      ["a", "Resto in silenzio, lascio che mi senta."],
      ["r", "Mi siedo, appoggio la mano a terra e aspetto."],
      ["v", "Gli faccio una domanda sul mondo."]
    ]
  }
];
