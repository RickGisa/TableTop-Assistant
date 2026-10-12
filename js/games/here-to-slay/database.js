// Database delle carte con immagini
const CARDS_DATABASE = [
    { 
        id: "mavrick",
        name: "Mavrick il Coraggioso", 
        type: "Party Leader - Guerriero", 
        class: "guerriero",
        image: "https://images.placeholders.dev/?width=300&height=400&text=Mavrick&bgColor=%23c0392b&textColor=%23ffffff",
        effect: "Ogni volta che tiri i dadi per l'effetto di una carta Eroe Guerriero, aggiungi +1 al tuo tiro." 
    },
    { 
        id: "ombra",
        name: "L'Ombra Implacabile", 
        type: "Party Leader - Ladro", 
        class: "ladro",
        image: "https://images.placeholders.dev/?width=300&height=400&text=Ombra&bgColor=%238e44ad&textColor=%23ffffff",
        effect: "Puoi tirare i dadi per rubare 1 carta dalla mano di un avversario spendendo 1 PA." 
    },
    { 
        id: "lama-fulminea",
        name: "Lama Fulminea", 
        type: "Eroe - Guerriero", 
        class: "guerriero",
        image: "https://images.placeholders.dev/?width=300&height=400&text=Lama+Fulminea&bgColor=%23e74c3c&textColor=%23ffffff",
        effect: "7+: Distruggi un Eroe nel party di un avversario." 
    },
    { 
        id: "scudo-benedetto",
        name: "Scudo Benedetto", 
        type: "Oggetto", 
        class: "oggetto",
        image: "https://images.placeholders.dev/?width=300&height=400&text=Scudo+Benedetto&bgColor=%23f39c12&textColor=%23ffffff",
        effect: "L'Eroe equipaggiato non può essere distrutto o rubato dalle abilità avversarie." 
    },
    { 
        id: "drago-ombre",
        name: "Drago delle Ombre", 
        type: "Mostro", 
        class: "mostro",
        image: "https://images.placeholders.dev/?width=300&height=400&text=Drago+delle+Ombre&bgColor=%232c3e50&textColor=%23ffffff",
        effect: "Requisiti: 2 Eroi.\nEffetto Sconfitta: Scegli un giocatore che deve scartare 2 carte." 
    },
    // --- EROE CON 2 SLOT OGGETTO ---
    {
        name: "Eroe Speciale 2-Slot",
        type: "Eroe",
        class: "guerriero",
        maxSlots: 2, // <-- Questo eroe può reggere fino a 2 oggetti!
        effect: "Questo eroe possiede una capacità unica e può essere equipaggiato con un massimo di 2 oggetti contemporaneamente.",
        image: "Media/placeholder.png"
    },
    // --- OGGETTO CHE CAMBIA CLASSE ---
    {
        name: "Maschera del Mago",
        type: "Oggetto",
        changesClassTo: "mago", // <-- Quando equipaggiato, trasforma la classe dell'eroe in Mago!
        effect: "Equipaggia questo oggetto a un Eroe. La sua classe diventa Mago fintanto che questo oggetto è equipaggiato.",
        image: "Media/placeholder.png"
    }
];