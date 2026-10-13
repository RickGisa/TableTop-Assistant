// Database delle carte con immagini
const CARDS_DATABASE = [
    // --- PARTY LEADER ---
    { 
        id: "PL-Bard",
        name: "The Charismatic Song", 
        type: "Party Leader - Bardo", 
        class: "bardo",
        image: "media/HTS-leader/bard.png",
        effect: "Ogni volta che tiri per usare l'effetto di una carta Eroe, +1 a quel tiro."
    },
    { 
        id: "PL-Berserker",
        name: "The Raging Manticore", 
        type: "Party Leader - Berserker", 
        class: "berserker",
        image: "media/HTS-leader/berserker.png",
        effect: "Ogni volta che UCCIDI una Mostro, PESCA 2 carte."
    },
    { 
        id: "PL-Druid",
        name: "The Noble Shaman", 
        type: "Party Leader - Druido", 
        class: "druido",
        image: "media/HTS-leader/druid.png",
        effect: "1 volta per turno nel turno di ogni giocatore, puoi scegliere il tiro di un qualsiasi giocatore, -1 a quel tiro."
    },
    { 
        id: "PL-Fighter",
        name: "The Fist of Reason", 
        type: "Party Leader - Guerriero", 
        class: "fighter",
        image: "media/HTS-leader/fighter.png",
        effect: "Ogni volta che tiri per SFIDARE, +2 a quel tiro."
    },
    { 
        id: "PL-Guardian",
        name: "The Protecting Horn", 
        type: "Party Leader - Paladino", 
        class: "paladino",
        image: "media/HTS-leader/guardian.png",
        effect: "Ogni volta che giochi una carta Modificatore su un tiro, +1 oppure -1 a quel tiro."
    },
    { 
        id: "PL-Necromancer",
        name: "The Gnawing Dread", 
        type: "Party Leader - Necromante", 
        class: "necromancer",
        image: "media/HTS-leader/necromancer.png",
        effect: "1 volta per turno nel tuo turno, puoi spendere 2 punti azione per cercare una carta nella pila degli scarti e aggiungerla alla tua mano."
    },
    { 
        id: "PL-Ranger",
        name: "The Divine Arrow", 
        type: "Party Leader - Ranger", 
        class: "ranger",
        image: "media/HTS-leader/ranger.png",
        effect: "Ogni volta che tiri per ATTACCARE una carta Mostro, +1 a quel tiro. "
    },
    { 
        id: "PL-Thief",
        name: "The Shadow Claw", 
        type: "Party Leader - Ladro", 
        class: "thief",
        image: "media/HTS-leader/thief.png",
        effect: "Una volta per turno nel tuo turno, puoi spendere 1 punto azione per prendere 1 carta dalla mano di un altro giocatore."
    },
    { 
        id: "PL-Warrior",
        name: "The Piercing Howl", 
        type: "Party Leader - Combattente", 
        class: "warrior",
        image: "media/HTS-leader/warrior.png",
        effect: "Ogni volta che tiri, per ogni carta Oggetto equipaggiata a una carta Eroe nel tuo Gruppo, +1 al tuo tiro."
    },
    { 
        id: "PL-Wizard",
        name: "The Cloaked Sage", 
        type: "Party Leader - Mago", 
        class: "wizard",
        image: "media/HTS-leader/wizard.png",
        effect: "Ogni volta che giochi una carta Magia, PESCA 1 carta."
    },
    // --- MOSTRI ---
    { 
        id: "boss1",
        name: "Abyss Queen", 
        type: "Mostro", 
        class: "mostro",
        image: "media/HTS-monster/AbyssQueen.png",
        effect: "Effetto: Ogni volta che un altro giocatore gioca un Modificatore su uno dei tuoi tiri, ottieni +1 al tuo tiro." 
    },
    { 
        id: "boss2",
        name: "Anuran Cauldron", 
        type: "Mostro", 
        class: "mostro",
        image: "media/HTS-monster/AnuranCauldron.png",
        effect: "Effetto: Ogni volta che effettui un lancio di dadi, +1 al tuo tiro." 
    },
    { 
        id: "boss3",
        name: "Arctic Aries", 
        type: "Mostro", 
        class: "mostro",
        image: "media/HTS-monster/ArcticAries.png",
        effect: "Effetto: Ogni volta che effettui con successo un lancio di dadi per l'attivazione di un effetto di una carta Eroe, puoi PESCARE una carta." 
    },
    { 
        id: "boss4",
        name: "Bloodwing", 
        type: "Mostro", 
        class: "mostro",
        image: "media/HTS-monster/Bloodwing.png",
        effect: "Effetto: Ogni volta che un altro giocatore ti SFIDA, quel giocatore deve SCARTARE una carta." 
    },
    { 
        id: "boss5",
        name: "Corrupted Sabretooth", 
        type: "Mostro", 
        class: "mostro",
        image: "media/HTS-monster/CorruptedSabretooth.png",
        effect: "Effetto: Ogni volta che DISTRUGGI una carta Eroe, puoi invece RUBARE quella carta." 
    },
    { 
        id: "boss6",
        name: "Crowned Serpent", 
        type: "Mostro", 
        class: "mostro",
        image: "media/HTS-monster/CrownedSerpent.png",
        effect: "Effetto: Ogni volta che un giocatore (incluso te) gioca una carta Modificatore, puoi PESCARE una carta." 
    },
    { 
        id: "boss7",
        name: "Dark Dragon King", 
        type: "Mostro", 
        class: "mostro",
        image: "media/HTS-monster/DarkDragonKing.png",
        effect: "Effetto: Ogni volta che tiri i dadi per attivare l'effetto di una carta Eroe, +1 a quel tiro." 
    },
    { 
        id: "boss8",
        name: "Doombringer", 
        type: "Mostro", 
        class: "mostro",
        image: "media/HTS-monster/Doombringer.png",
        effect: "Effetto: Ogni volta che SACRIFICHI una carta, puoi scegliere una carta dalla pila degli scarti e aggiungerla alla tua mano." 
    },
    { 
        id: "boss9",
        name: "Dracos", 
        type: "Mostro", 
        class: "mostro",
        image: "media/HTS-monster/Dracos.png",
        effect: "Effetto: Ogni volta che una carta Eroe nel tuo Gruppo viene distrutta, puoi PESCARE una carta." 
    },
    { 
        id: "boss10",
        name: "Feral Dragon", 
        type: "Mostro", 
        class: "mostro",
        image: "media/HTS-monster/FeralDragon.png",
        effect: "Effetto: Ogni volta che un giocatore sacrifica una carta, PESCA una carta." 
    },
    { 
        id: "boss11",
        name: "Malamammoth", 
        type: "Mostro", 
        class: "mostro",
        image: "media/HTS-monster/Malamammoth.png",
        effect: "Effetto: Ogni volta che PESCHI una carta Oggetto, puoi giocarla immediatamente." 
    },
    { 
        id: "boss12",
        name: "Mega Slime", 
        type: "Mostro", 
        class: "mostro",
        image: "media/HTS-monster/MegaSlime.png",
        effect: "Effetto: Puoi spendere un punto azione extra in ogni tuo turno." 
    },
    { 
        id: "boss13",
        name: "Muscipula Rex", 
        type: "Mostro", 
        class: "mostro",
        image: "media/HTS-monster/MuscipulaRex.png",
        effect: "Effetto: Una volta per turno, nel tuo turno, puoi PESCARE una carta senza spendere un punto azione." 
    },
    { 
        id: "boss14",
        name: "Orthus", 
        type: "Mostro", 
        class: "mostro",
        image: "media/HTS-monster/Orthus.png",
        effect: "Effetto: Ogni volta che PESCHI una carta Magia, puoi giocarla immediatamente." 
    },
    { 
        id: "boss15",
        name: "Reptilian Ripper", 
        type: "Mostro", 
        class: "mostro",
        image: "media/HTS-monster/ReptilianRipper.png",
        effect: "Effetto: Ogni volta che tiri per ATTACCARE una carta Mostro, +2 al tuo tiro." 
    },
    { 
        id: "boss16",
        name: "Rex Major", 
        type: "Mostro", 
        class: "mostro",
        image: "media/HTS-monster/RexMajor.png",
        effect: "Effetto: Ogni volta che PESCHI una carta Modificatore, puoi rivelarla e PESCARE una seconda carta." 
    },
    { 
        id: "boss17",
        name: "Warworn Owlbear", 
        type: "Mostro", 
        class: "mostro",
        image: "media/HTS-monster/WarwornOwlbear.png",
        effect: "Effetto: Le carta Oggetto che giochi non posso essere sfidate." 
    },
    // --- BARDI ---
    { 
        id: "bard1",
        name: "Dodgy Dealer", 
        type: "Eroe - Bardo", 
        class: "bardo",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/bard/DodgyDealer.png",
        effect: "9+ : Scambia la tua mano con quella di un altro giocatore." 
    },
    { 
        id: "bard2",
        name: "Fuzzy Cheeks", 
        type: "Eroe - Bardo", 
        class: "bardo",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/bard/FuzzyCheeks.png",
        effect: "8+ : PESCA 1 carta e gioca 1 carta Eroe dalla tua mano immediatamente." 
    },
    { 
        id: "bard3",
        name: "Greedy Cheeks", 
        type: "Eroe - Bardo", 
        class: "bardo",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/bard/GreedyCheeks.png",
        effect: "8+ : Ogni altro giocatore deve darti 1 carta dalla sua mano." 
    },
    { 
        id: "bard4",
        name: "Lucky Bucky", 
        type: "Eroe - Bardo", 
        class: "bardo",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/bard/LuckyBucky.png",
        effect: "7+ : Prendi 1 carta dalla mano di un altro giocatore. Se è una carta Eroe, puoi giocarla immediatamente." 
    },
    { 
        id: "bard5",
        name: "Mellow Dee", 
        type: "Eroe - Bardo", 
        class: "bardo",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/bard/MellowDee.png",
        effect: "7+ : PESCA 1 carta. Se è una carta Eroe, puoi giocarla immediatamente." 
    },
    { 
        id: "bard6",
        name: "Napping Nibbles", 
        type: "Eroe - Bardo", 
        class: "bard",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/bard/NappingNibbles.png",
        effect: "2+ : Non fare nulla." 
    },
    { 
        id: "bard7",
        name: "Peanut", 
        type: "Eroe - Bardo", 
        class: "bardo",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/bard/Peanut.png",
        effect: "7+ : PESCA 2 carte." 
    },
    { 
        id: "bard8",
        name: "Tipsy Tootie", 
        type: "Eroe - Bardo", 
        class: "bardo",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/bard/TipsyTootie.png",
        effect: "6+ : Scegli 1 giocatore. RUBA 1 carta Eroe dal Gruppo di quel giocatore e sposta Tipsy Tootie nel Gruppo di quel giocatore." 
    },
    // --- BERSERKER ---
    { 
        id: "berserker1",
        name: "Annihilator", 
        type: "Eroe - Berserker", 
        class: "berserker",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/berserker/.png",
        effect: "6+ : Cerca nella pila degli scarti una carta Sfida e aggiungila alla tua mano." 
    },
    { 
        id: "berserker2",
        name: "Brawling Spirit", 
        type: "Eroe - Berserker", 
        class: "berserker",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/berserker/BrawlingSpirit.png",
        effect: "9+ : Ogni giocatore (incluso te) con più di 3 carte nel loro Gruppo devono SACRIFICARE una carta." 
    },
    { 
        id: "berserker3",
        name: "Gruesome Gladiator", 
        type: "Eroe - Berserker", 
        class: "berserker",
        maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/berserker/GruesomeGladiator.png",
        effect: "10+ : Guarda la mano di ogni giocatore. Scegli una carta dalla mano di ogni giocatore e aggiungila alla tua mano." 
    },
    { 
        id: "berserker4",
        name: "Meowntain", 
        type: "Eroe - Berserker", 
        class: "berserker",
        maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/berserker/Meowntain.png",
        effect: "6+ : SCARIFICA una carta. +5 a tutti i tuoi tiri fino alla fine del tuo turno." 
    },
    { 
        id: "berserker5",
        name: "Rapid Beast", 
        type: "Eroe - Berserker", 
        class: "berserker",
        maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/berserker/RapidBeast.png",
        effect: "6+ : SACRIFICA un qualsiasi numero di carte, poi DISTRUGGI lo stesso numero di carte." 
    },
    { 
        id: "berserker6",
        name: "Roaryal Guard", 
        type: "Eroe - Berserker", 
        class: "berserker",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/berserker/RoaryalGuard.png",
        effect: "9+ : Scegli una Classe. Fai tornare ogni carta Eroe di quella Classe nella mano dei rispettivi giocatori." 
    },
    { 
        id: "berserker7",
        name: "Unbridled Fury", 
        type: "Eroe - Berserker", 
        class: "berserker",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/berserker/UnbridledFury.png",
        effect: "8+ : DISTRUGGI una carta Eroe. Se quella carta Eroe era un Berserker, puoi spendere un punto azione extra in questo turno." 
    },
    { 
        id: "berserker8",
        name: "Vicious Wildcat", 
        type: "Eroe - Berserker", 
        class: "berserker",
        maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/berserker/ViciousWildcat.png",
        effect: "12+ : UCCIDI una qualsiasi carta Mostro, poi termina il turno." 
    },
    // --- DRUIDI ---
    { 
        id: "druid1",
        name: "Big Buckley", 
        type: "Eroe - Druido", 
        class: "druido",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/druid/BigBuckley.png",
        effect: "8- : ATTACCA una carta Mostro immediatamente. (Devi comunque rispettare i requisiti del Gruppo.)" 
    },
    { 
        id: "druid2",
        name: "Buck Omens", 
        type: "Eroe - Druido", 
        class: "druido",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/druid/BuckOmens.png",
        effect: "6- : Guarda la mano di un altro giocatore. Scegli una carta Eroe dalla loro mano (se ne hanno una) e aggiungila al tuo Gruppo." 
    },
    { 
        id: "druid3",
        name: "Doe Fellow", 
        type: "Eroe - Druido", 
        class: "druido",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/druid/DoeFellow.png",
        effect: "7- SACRIFICA una carta Eroe, poi PESCA carte fino ad avere 7 carte in mano." 
    },
    { 
        id: "druid4",
        name: "Glowing Antler", 
        type: "Eroe - Druido", 
        class: "druido",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/druid/GlowingAntler.png",
        effect: "7- : Puoi giocare fino a 2 carte Magia immediatamente." 
    },
    { 
        id: "druid5",
        name: "Maegisty", 
        type: "Eroe - Druido", 
        class: "druido",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/druid/Maegisty.png",
        effect: "7- : Fino al tuo prossimo turno, se una carta Eroe nel tuo Gruppo dovrebbe essere distrutta o sacrificata, falla invece tornare nella tua mano." 
    },
    { 
        id: "druid6",
        name: "Magus Moose", 
        type: "Eroe - Druido", 
        class: "druido",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/druid/MagusMoose.png",
        effect: "5- : Cerca nella pila degli scarti una carta Eroe e aggiungila alla tua mano, poi giocala immediatamente." 
    },
    { 
        id: "druid7",
        name: "Majestelk", 
        type: "Eroe - Druido", 
        class: "druido",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/druid/Majestelk.png",
        effect: "7- : SACRIFICA una carta Eroe. +5 o -5 ad ogni tuo prossimo tiro fino al tuo prossimo turno." 
    },
    { 
        id: "druid8",
        name: "Stagguard", 
        type: "Eroe - Druido", 
        class: "druido",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/druid/Stagguard.png",
        effect: "8- : Nessun altro giocatore può giocare carte Modificatore fino alla fine del tuo turno." 
    },
    // --- GUERRIERI ---
    { 
        id: "fighter1",
        name: "Bad Axe", 
        type: "Eroe - Guerriero", 
        class: "guerriero",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/fighter/BadAxe.png",
        effect: "8+ : DISTRUGGI una carta Eroe." 
    },
    { 
        id: "fighter2",
        name: "Bear Claw", 
        type: "Eroe - Guerriero", 
        class: "guerriero",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/fighter/BearClaw.png",
        effect: "7+ : Prendi una carta dalla mano di un altro giocatore. Se è una carta Eroe, prendi una seconda carta dalla mano di quel giocatore." 
    },
    { 
        id: "fighter3",
        name: "Beary Wise", 
        type: "Eroe - Guerriero", 
        class: "guerriero",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/fighter/BearyWise.png",
        effect: "7+ : Ogni altro giocatore deve SCARTARE una carta. Scegli una carta da quelle scartate e aggiungila alla tua mano." 
    },
    { 
        id: "fighter4",
        name: "Fury Knuckle", 
        type: "Eroe - Guerriero", 
        class: "guerriero",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/fighter/FuryKnuckle.png",
        effect: "5+ : Prendi una carta dalla mano di un altro giocatore. Se è una carta SFIDA, prendi una seconda carta dalla mano di quel giocatore." 
    },
    { 
        id: "fighter5",
        name: "Heavy Bear", 
        type: "Eroe - Guerriero", 
        class: "guerriero",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/fighter/HeavyBear.png",
        effect: "5+ : Scegli un giocatore. Quel giocatore deve SCARTARE 2 carte." 
    },
    { 
        id: "fighter6",
        name: "Pan Chucks", 
        type: "Eroe - Guerriero", 
        class: "guerriero",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/fighter/PanChucks.png",
        effect: "8+ : PESCA 2 carte. Se almeno una di quelle carte è una carta Sfida, puoi rivelarla, poi DISTRUGGI una carta Eroe." 
    },
    { 
        id: "fighter7",
        name: "Qi Bear", 
        type: "Eroe - Guerriero", 
        class: "guerriero",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/fighter/QiBear.png",
        effect: "10+ : SCARTA fino a 3 carte. Per ogni carta scartata, DISTRUGGI una carta Eroe." 
    },
    { 
        id: "fighter8",
        name: "Tough Teddy", 
        type: "Eroe - Guerriero", 
        class: "guerriero",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/fighter/ToughTeddy.png",
        effect: "4+ : Ogni giocatore con un Guerriero nel loro Gruppo, devono SCARTARE una carta." 
    },
    // --- PALADINI ---
    { 
        id: "guardian1",
        name: "Calming Voice", 
        type: "Eroe - Paladino", 
        class: "paladino",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/guardian/CalmingVoice.png",
        effect: "9+ : Le carte Eroe nel tuo Gruppo non possono essere rubate fino al tuo prossimo turno." 
    },
    { 
        id: "guardian2",
        name: "Guiding Light", 
        type: "Eroe - Paladino", 
        class: "paladino",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/guardian/GuidingLight.png",
        effect: "7+ : Cerca nella pila degli scarti una carta Eroe e aggiungila alla tua mano." 
    },
    { 
        id: "guardian3",
        name: "Holy Curselifter", 
        type: "Eroe - Paladino", 
        class: "paladino",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/guardian/HolyCurselifter.png",
        effect: "5+ : Riprendi in mano un oggetto Maledetto equipaggiato ad una carta Eroe nel tuo Gruppo." 
    },
    { 
        id: "guardian4",
        name: "Iron Resolve", 
        type: "Eroe - Paladino", 
        class: "paladino",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/guardian/IronResolve.png",
        effect: "8+ : Le carte che giochi non possono essere sfidate per il resto del turno." 
    },
    { 
        id: "guardian5",
        name: "Mighty Blade", 
        type: "Eroe - Paladino", 
        class: "paladino",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/guardian/MightyBlade.png",
        effect: "8+ : Le carte Eroe nel tuo Gruppo non possono essere distrutte fino al tuo prossimo turno." 
    },
    { 
        id: "guardian6",
        name: "Radiant Horn", 
        type: "Eroe - Paladino", 
        class: "paladino",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/guardian/RadiantHorn.png",
        effect: "6+ : Cerca nella pila degli scarti una carta Modificatore e aggiungila alla tua mano." 
    },
    { 
        id: "guardian7",
        name: "Vibrant Glow", 
        type: "Eroe - Paladino", 
        class: "paladino",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/guardian/VibrantGlow.png",
        effect: "9+ : +5 a tutti i tuoi tiri fino alla fine del turno." 
    },
    { 
        id: "guardian8",
        name: "Wise Shield", 
        type: "Eroe - Paladino", 
        class: "paladino",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/guardian/WiseShield.png",
        effect: "6+ : +3 a tutti i tuoi tiri fino alla fine del turno." 
    },
    // --- NECROMANTI ---
    { 
        id: "necromancer1",
        name: "Bark Hexer", 
        type: "Eroe - Necromante", 
        class: "necromante",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/necromancer/BarkHexer.png",
        effect: "7+ : SCARTA una carta. Ogni giocatore deve SCARTARE 2 carte." 
    },
    { 
        id: "necromancer2",
        name: "Beholden Retriever", 
        type: "Eroe - Necromante", 
        class: "necromante",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/necromancer/BeholdenRetriever.png",
        effect: "5+ : SACRIFICA una carta Eroe. Cerca nella pila degli scarti una carta Eroe o carta Oggetto e aggiungila alla tua mano, poi giocala immediatamente." 
    },
    { 
        id: "necromancer3",
        name: "Bone Collector", 
        type: "Eroe - Necromante", 
        class: "necromante",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/necromancer/BoneCollector.png",
        effect: "7+ : SACRIFICA una carta Oggetto. Cerca nella pila degli scarti una carta Eroe e aggiungila alla tua mano, poi giocala immediatamente." 
    },
    { 
        id: "necromancer4",
        name: "Boston Terror", 
        type: "Eroe - Necromante", 
        class: "necromante",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/necromancer/BostonTerror.png",
        effect: "7+ : Scegli un giocatore. Quel giocatore deve darti una carta dalla propria mano. Se non lo fanno, puoi scegliere 2 carte dalla pila degli scarti e aggiungerle alla tua mano." 
    },
    { 
        id: "necromancer5",
        name: "Grim Pupper", 
        type: "Eroe - Necromante", 
        class: "necromante",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/necromancer/GrimPupper.png",
        effect: "8+ : Ogni giocatore (incluso te) deve SACRIFICARE una carta." 
    },
    { 
        id: "necromancer6",
        name: "Hollow Husk", 
        type: "Eroe - Necromante", 
        class: "necromante",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/necromancer/HollowHusk.png",
        effect: "6+ : Guarda la mano di un altro giocatore. Scegli una carta Magia (se ne hanno una) e aggiungila alla tua mano. Puoi giocarla immediatamente." 
    },
    { 
        id: "necromancer7",
        name: "Perfect Vessel", 
        type: "Eroe - Necromante", 
        class: "necromante",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/necromancer/PerfectVessel.png",
        effect: "4+ : SACRIFICA questa carta, poi RUBA una carta Eroe." 
    },
    { 
        id: "necromancer8",
        name: "Shadow Saint", 
        type: "Eroe - Necromante", 
        class: "necromante",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/necromancer/ShadowSaint.png",
        effect: "5+ : SCARTA una carta Modificatore. Nessun altro giocatore può giocare carte Modificatore fino alla fine del turno." 
    },
    // --- RANGER ---
    { 
        id: "ranger1",
        name: "Bullseye", 
        type: "Eroe - Ranger", 
        class: "ranger",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/ranger/Bullseye.png",
        effect: "7+ : Guarda le prime 3 carte del mazzo. Aggiungine una alla tua mano, rimetti le restanti due in cima al mazzo in un qualsiasi ordine." 
    },
    { 
        id: "ranger2",
        name: "Hook", 
        type: "Eroe - Ranger", 
        class: "ranger",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/ranger/Hook.png",
        effect: "6+ : Gioca una carta Oggetto dalla tua mano immediatamente e PESCA una carta." 
    },
    { 
        id: "ranger3",
        name: "Lookie Rookie", 
        type: "Eroe - Ranger", 
        class: "ranger",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/ranger/LookieRookie.png",
        effect: "5+ : Cerca nella pila degli scarti una carta Oggetto a aggiungila alla tua mano." 
    },
    { 
        id: "ranger4",
        name: "Quick Draw", 
        type: "Eroe - Ranger", 
        class: "ranger",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/ranger/QuickDraw.png",
        effect: "8+ : PESCA 2 carte. Se almeno una di quelle carte è una carta Oggetto, puoi giocarne una immediatamente." 
    },
    { 
        id: "ranger5",
        name: "Serious Grey", 
        type: "Eroe - Ranger", 
        class: "ranger",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/ranger/SeriousGrey.png",
        effect: "9+ : DISTRUGGI un Eroe e PESCA una carta." 
    },
    { 
        id: "ranger6",
        name: "Sharp Fox", 
        type: "Eroe - Ranger", 
        class: "ranger",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/ranger/SharpFox.png",
        effect: "5+ : Guarda la mano di un altro giocatore." 
    },
    { 
        id: "ranger7",
        name: "Wildshot", 
        type: "Eroe - Ranger", 
        class: "ranger",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/ranger/Wildshot.png",
        effect: "8+ : PESCA 3 carte e SCARTA una carta." 
    },
    { 
        id: "ranger8",
        name: "Wily Red", 
        type: "Eroe - Ranger", 
        class: "ranger",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/ranger/WilyRed.png",
        effect: "10+ : PESCA carte fino ad averne 7 in mano." 
    },
    // --- LADRI ---
    { 
        id: "thief1",
        name: "Kit Napper", 
        type: "Eroe - Ladro", 
        class: "ladro",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/thief/KitNapper.png",
        effect: "9+ : RUBA una carta Eroe." 
    },
    { 
        id: "thief2",
        name: "Meowzio", 
        type: "Eroe - Ladro", 
        class: "ladro",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/thief/Meowzio.png",
        effect: "10+ : Scegli un giocatore. RUBA un Eroe da quel giocatore e prendi una carta dalla mano di quel giocatore." 
    },
    { 
        id: "thief3",
        name: "Plundering Puma", 
        type: "Eroe - Ladro", 
        class: "ladro",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/thief/PlunderingPuma.png",
        effect: "6+ : Prendi 2 carte dalla mano di un altro giocatore. Quel giocatore può PESCARE una carta." 
    },
    { 
        id: "thief4",
        name: "Shurikitty", 
        type: "Eroe - Ladro", 
        class: "ladro",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/thief/Shurikitty.png",
        effect: "9+ : DISTRUGGI una carta Eroe. Se quella carta Eroe aveva un Oggetto equipaggiato a sè, aggiungi quella carta Oggetto alla tua mano invece di metterlo nella pila degli scarti." 
    },
    { 
        id: "thief5",
        name: "Silent Shadow", 
        type: "Eroe - Ladro", 
        class: "ladro",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/thief/SilentShadow.png",
        effect: "8+ : Guarda la mano di un altro giocatore. Scegli una carta e aggiungila alla tua mano." 
    },
    { 
        id: "thief6",
        name: "Slippery Paws", 
        type: "Eroe - Ladro", 
        class: "ladro",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/thief/SlipperyPaws.png",
        effect: "6+ : Prendi 2 carte dalla mano di un altro giocatore, poi SCARTA una di quelle carte." 
    },
    { 
        id: "thief7",
        name: "Sly Pickings", 
        type: "Eroe - Ladro", 
        class: "ladro",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/thief/SlyPickings.png",
        effect: "6+ : Prendi una carta dalla mano di un altro giocatore. Se quella carta è una carta Oggetto, puoi giocarla immediatamente." 
    },
    { 
        id: "thief8",
        name: "Smooth Mimimeow", 
        type: "Eroe - Ladro", 
        class: "ladro",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/thief/SmoothMimimeow.png",
        effect: "7+ : Prendi una carta dalla mano di ogni giocatore che ha un Ladro nel Gruppo." 
    },
    // --- COMBATTENTI ---
    { 
        id: "warrior1",
        name: "Agile Dagger", 
        type: "Eroe - Combattente", 
        class: "combattente",
        maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/warrior/AgileDagger.png",
        effect: "7+ : Puoi giocare fino a 2 carte Oggetto immediatamente." 
    },
    { 
        id: "warrior2",
        name: "Blinding Blade", 
        type: "Eroe - Combattente", 
        class: "combattente",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/warrior/BlindingBlade.png",
        effect: "8+ : Scegli un qualsiasi giocatore. Rimetti tutte le carte Oggetto equipaggiate nel Gruppo di quel giocatore nella tua mano." 
    },
    { 
        id: "warrior3",
        name: "Critical Fang", 
        type: "Eroe - Combattente", 
        class: "combattente",
        maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/warrior/CriticalFang.png",
        effect: "6+ : +4 ad ogni tuo tiro per ATTACCARE una carta Mostro fino alla fine del turno." 
    },
    { 
        id: "warrior4",
        name: "Hardened Hunter", 
        type: "Eroe - Combattente", 
        class: "combattente",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/warrior/HardenedHunter.png",
        effect: "9+ : PESCA una carta per ogni carta Mostro nel Gruppo di ogni altro giocatore." 
    },
    { 
        id: "warrior5",
        name: "Looting Lupo", 
        type: "Eroe - Combattente", 
        class: "combattente",
        maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/warrior/LootingLupo.png",
        effect: "5+ : PESCA una carta per ogni carta Oggetto equipaggiata ad una carta Eroe nel tuo Gruppo." 
    },
    { 
        id: "warrior6",
        name: "Silent Shield", 
        type: "Eroe - Combattente", 
        class: "combattente",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/warrior/.png",
        effect: "6+ : Per il resto del tuo turno, se SACRIFICHI o DISTRUGGI 1 carta Eroe, puoi cercare 1 carta Eroe nella pila degli scarti e aggiungerla alla tua mano." 
    },
    { 
        id: "warrior7",
        name: "Tenacious Timber", 
        type: "Eroe - Combattente", 
        class: "combattente",
        maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/warrior/TenaciousTimber.png",
        effect: "8+ : Per ogni carta Mostro nel tuo Gruppo, RUBA 1 carta Eroe." 
    },
    { 
        id: "warrior8",
        name: "Wolfgang Pack", 
        type: "Eroe - Combattente", 
        class: "combattente",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/warrior/WolfgangPack.png",
        effect: "5+ : Per ogni altra carta Eroe nel tuo Gruppo, +1 a tutti i tuoi tiri fino alla fine del turno." 
    },
    // --- MAGHI ---
    { 
        id: "wizard1",
        name: "Bun Bun", 
        type: "Eroe - Mago", 
        class: "mago",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/wizard/BunBun.png",
        effect: "5+ : Cerca nella pila degli scarti una carta Magia e aggiungila alla tua mano." 
    },
    { 
        id: "wizard2",
        name: "Buttons", 
        type: "Eroe - Mago", 
        class: "mago",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/wizard/Buttons.png",
        effect: "6+ : Prendi una carta dalla mano di un altro giocatore. Se è una carta Magia, puoi giocarla immediatamente." 
    },
    { 
        id: "wizard3",
        name: "Fluffy", 
        type: "Eroe - Mago", 
        class: "mago",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/wizard/Fluffy.png",
        effect: "10+ : DISTRUGGI 2 carte Eroe." 
    },
    { 
        id: "wizard4",
        name: "Hopper", 
        type: "Eroe - Mago", 
        class: "mago",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/wizard/Hopper.png",
        effect: "7+ : Scegli un giocatore. Quel giocatore deve SACRIFICARE una carta Eroe." 
    },
    { 
        id: "wizard5",
        name: "Snowball", 
        type: "Eroe - Mago", 
        class: "mago",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/wizard/Snowball.png",
        effect: "6+ : PESCA una carta. Se è una carta Magia, puoi giocarla immediatamente e PESCARE una seconda carta." 
    },
    { 
        id: "wizard6",
        name: "Spooky", 
        type: "Eroe - Mago", 
        class: "mago",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/wizard/Spooky.png",
        effect: "10+ : Ogni altro giocatore deve SACRIFICARE una carta Eroe." 
    },
    { 
        id: "wizard7",
        name: "Whiskers", 
        type: "Eroe - Mago", 
        class: "mago",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/wizard/Whiskers.png",
        effect: "11+ : RUBA una carta Eroe e DISTRUGGI una carta Eroe." 
    },
    { 
        id: "wizard8",
        name: "Wiggles", 
        type: "Eroe - Mago", 
        class: "mago",
        //maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        image: "media/HTS-hero/wizard/Wiggles.png",
        effect: "10+ : RUBA una carta Eroe e tira i dadi per usare il suo effetto immediatamente." 
    },
    // --- OGGETTI ---
    { 
        id: "item1",
        name: "Biggest Ring Ever", 
        type: "oggetto", 
        class: "oggetto",
        //changesClassTo: "", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/item/BiggestRingEver.png",
        effect: "Ogni volta che tiri per usare l'effetto della carta Eroe a cui è equipaggiato, puoi SCARTARE fino a 3 carte. Per ogni carta scartata, +2 al tuo tiro." 
    },
    { 
        id: "item2",
        name: "Bottomless Bag", 
        type: "oggetto", 
        class: "oggetto",
        //changesClassTo: "", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/item/BottomlessBag.png",
        effect: "Puoi tirare per usare l'effetto della carta Eroe a cui è equipaggiata più di 1 volta per turno, spendendo 1 punto azione per ogni tiro." 
    },
    { 
        id: "item3",
        name: "Decoy Doll", 
        type: "oggetto", 
        class: "oggetto",
        //changesClassTo: "", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/item/DecoyDoll.png",
        effect: "Se la carta Eroe a cui è equipaggiata sta per essere sacrificata o distrutta, sposta invece l'Esca di Pezza nella pila degli scarti." 
    },
    { 
        id: "item4",
        name: "Even Bigger Ring", 
        type: "oggetto", 
        class: "oggetto",
        //changesClassTo: "", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/item/EvenBiggerRing.png",
        effect: "Ogni volta che tiri per usare l'effetto della carta Eroe a cui è equipaggiata, +4 a quel tiro." 
    },
    { 
        id: "item5",
        name: "Goblet of Caffeination", 
        type: "oggetto", 
        class: "oggetto",
        //changesClassTo: "", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/item/GobletofCaffeination.png",
        effect: "Se fallisci un tiro di dadi per l'attivazione dell'effetto della carta a Eroe a cui è equipaggiata, puoi SACRIFICARE questa carta, poi tira per usare quell'effetto di nuovo immediatamente." 
    },
    { 
        id: "item6",
        name: "Particularly Rusty Coin", 
        type: "oggetto", 
        class: "oggetto",
        //changesClassTo: "", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/item/ParticularlyRustyCoin.png",
        effect: "Se tiri senza successo per usare l'effetto della carta Eroe a cui è equipaggiata, PERCA 1 carta." 
    },
    { 
        id: "item7",
        name: "Really Big Ring", 
        type: "oggetto", 
        class: "oggetto",
        //changesClassTo: "", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/item/ReallyBigRing.png",
        effect: "Ogni volta che tiri per usare l'effetto della carta Eroe a cui è equipaggiata, +2 a quel tiro." 
    },
    { 
        id: "item8",
        name: "Silver Lining", 
        type: "oggetto", 
        class: "oggetto",
        //changesClassTo: "", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/item/SilverLining.png",
        effect: "Se fallisci un tiro di dadi per l'attivazione dell'effetto della carta a Eroe a cui è equipaggiata, +2 a tutti i tuoi tiri fino alla fine del turno." 
    },
    { 
        id: "item",
        name: "Temporal Hourglass", 
        type: "oggetto", 
        class: "oggetto",
        //changesClassTo: "", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/item/TemporalHourglass.png",
        effect: "Se tiri senza successo per usare l'effetto della carta Eroe a cui è equipaggiata, puoi spendere 1 punto azione extra in questo turno. " 
    },
    // --- OGGETTI MALEDETTI ---
    { 
        id: "cursed1",
        name: "Curse of the Snake's Eyes", 
        type: "Oggetto",
        subtype: "cursed",
        class: "oggetto",
        //changesClassTo: "", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/cursed/Curse of the Snake's Eyes.png",
        effect: "Ogni volta che tiri per usare l'effetto della carta Eroe a cui è equipaggiata, -2 a quel tiro." 
    },
    { 
        id: "cursed2",
        name: "Cursed Glove", 
        type: "Oggetto",
        subtype: "cursed", 
        class: "oggetto",
        //changesClassTo: "", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/cursed/Cursed Glove.png",
        effect: "Se un'altra carta Eroe nel tuo Gruppo viene rubata, sposta nel Gruppo del giocatore che l'ha rubata la carta Eroe a cui è equipaggiata questa carta. " 
    },
    { 
        id: "cursed3",
        name: "Dragon's Bile", 
        type: "Oggetto",
        subtype: "cursed",
        class: "oggetto",
        //changesClassTo: "", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/cursed/Dragon's Bile.png",
        effect: "Se tiri senza successo per usare l'effetto della carta Eroe a cui è equipaggiata, SACRIFICA una carta Eroe ." 
    },
    { 
        id: "cursed4",
        name: "Sealing Key", 
        type: "Oggetto",
        subtype: "cursed",
        class: "oggetto",
        //changesClassTo: "", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/cursed/Sealing Key.png",
        effect: "Non puoi usare l'effetto della carta Eroe a cui è equipaggiata." 
    },
    { 
        id: "cursed5",
        name: "Soul Tether", 
        type: "Oggetto",
        subtype: "cursed",
        class: "oggetto",
        //changesClassTo: "", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/cursed/Soul Tether.png",
        effect: "Se una qualsiasi carta Eroe nel tuo Gruppo viene sacrificata o distrutta, SACRIFICA la carta Eroe a cui è equipaggiata." 
    },
    { 
        id: "cursed6",
        name: "Soulbound Grimoire", 
        type: "Oggetto",
        subtype: "cursed", 
        class: "oggetto",
        //changesClassTo: "", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/cursed/Soulbound Grimoire.png",
        effect: "Tirare per usare l'effetto della carta Eroe a cui è equipaggiata, costa 2 punti azione." 
    },
    { 
        id: "cursed7",
        name: "Suspiciously Shiny Coin", 
        type: "Oggetto",
        subtype: "cursed",
        class: "oggetto",
        //changesClassTo: "", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/cursed/Suspiciously Shiny Coin.png",
        effect: "Se tiri con successo per usare l'effetto della carta Eroe a cui è equipaggiata, SCARTA 1 carta." 
    },
    // --- MASCHERE ---
    { 
        id: "bardmask",
        name: "Bard Mask", 
        type: "Oggetto",
        subtype: "mask", 
        class: "oggetto",
        changesClassTo: "bardo", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/mask/BardMask.png",
        effect: "La carta Eroe a cui è equipaggiata è considerata un Bardo invece della sua classe originale." 
    },
    { 
        id: "berserkermask",
        name: "Berserker Mask", 
        type: "Oggetto",
        subtype: "mask", 
        class: "oggetto",
        changesClassTo: "berserker", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/mask/BerserkerMask.png",
        effect: "La carta Eroe a cui è equipaggiata è considerata un Berserker invece della sua classe originale. " 
    },
    { 
        id: "druidmask",
        name: "Druid Mask", 
        type: "Oggetto",
        subtype: "mask", 
        class: "oggetto",
        changesClassTo: "druido", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/mask/DruidMask.png",
        effect: "La carta Eroe a cui è equipaggiata è considerata un Druido invece della sua classe originale. " 
    },
    { 
        id: "fightermask",
        name: "Fighter Mask", 
        type: "Oggetto",
        subtype: "mask",
        class: "oggetto",
        changesClassTo: "guerriero", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/mask/FighterMask.png",
        effect: "La carta Eroe a cui è equipaggiata è considerata un Guerriero invece della sua classe originale. " 
    },
    { 
        id: "guardianmask",
        name: "Guardian Mask", 
        type: "Oggetto",
        subtype: "mask",
        class: "oggetto",
        changesClassTo: "paladino", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/mask/GuardianMask.png",
        effect: "La carta Eroe a cui è equipaggiata è considerata un Paladino invece della sua classe originale. " 
    },
    { 
        id: "necromancermask",
        name: "Necromancer Mask", 
        type: "Oggetto",
        subtype: "mask",
        class: "oggetto",
        changesClassTo: "necromante", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/mask/NecromancerMask.png",
        effect: "La carta Eroe a cui è equipaggiata è considerata un Necromante invece della sua classe originale. " 
    },
    { 
        id: "rangermask",
        name: "Ranger Mask", 
        type: "Oggetto",
        subtype: "mask",
        class: "oggetto",
        changesClassTo: "ranger", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/mask/RangerMask.png",
        effect: "La carta Eroe a cui è equipaggiata è considerata un Ranger invece della sua classe originale. " 
    },
    { 
        id: "thiefmask",
        name: "Thief Mask", 
        type: "Oggetto",
        subtype: "mask",
        class: "oggetto",
        changesClassTo: "ladro", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/mask/ThiefMask.png",
        effect: "La carta Eroe a cui è equipaggiata è considerata un Ladro invece della sua classe originale. " 
    },
    { 
        id: "warriormask",
        name: "Warrior Mask", 
        type: "Oggetto",
        subtype: "mask",
        class: "oggetto",
        changesClassTo: "combattente", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/mask/WarriorMask.png",
        effect: "La carta Eroe a cui è equipaggiata è considerata un Combattente invece della sua classe originale. " 
    },
    { 
        id: "wizardmask",
        name: "Wizard Mask", 
        type: "Oggetto",
        subtype: "mask",
        class: "oggetto",
        changesClassTo: "mago", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        image: "media/HTS-item/mask/WizardMask.png",
        effect: "La carta Eroe a cui è equipaggiata è considerata un Mago invece della sua classe originale. " 
    },
];