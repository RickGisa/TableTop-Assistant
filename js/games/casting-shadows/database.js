const CS_DATABASE = {
    characters: [
        {
            id: "fritz",
            name: "Fritz il Pipistrello",
            normalImage: "https://images.placeholders.dev/?width=200&height=250&text=Fritz+Normal&bgColor=%238e44ad&textColor=%23ffffff",
            shadowImage: "https://images.placeholders.dev/?width=200&height=250&text=Fritz+Shadow&bgColor=%232c3e50&textColor=%23ffffff",
            baseHp: 75,
            shadowHp: 75,
            normalAbility: "All'inizio del tuo turno, puoi tirare 1 dado extra.",
            shadowAbility: "Ogni volta che infliggi danno, recuperi 2 HP."
        },
        {
            id: "umbra_girl",
            name: "Nyx la Custode",
            normalImage: "https://images.placeholders.dev/?width=200&height=250&text=Nyx+Normal&bgColor=%2327ae60&textColor=%23ffffff",
            shadowImage: "https://images.placeholders.dev/?width=200&height=250&text=Nyx+Shadow&bgColor=%23c0392b&textColor=%23ffffff",
            baseHp: 70,
            shadowHp: 80,
            normalAbility: "Costa 1 PA in meno viaggiare sulla mappa.",
            shadowAbility: "I tuoi attacchi con incantesimi infliggono +1 danno."
        }
    ],
    spells: [
        { 
            id: "s1", 
            name: "Dardo Fulmineo", 
            type: "Incantesimo", 
            effect: "Infliggi 2 danni a un giocatore bersaglio.", 
            cost: "2 Luce", 
            copies: 3,
            image: "https://images.placeholders.dev/?width=80&height=100&text=Dardo&bgColor=%23f1c40f&textColor=%23000"
        },
        { 
            id: "s2", 
            name: "Scudo Oscuro", 
            type: "Incantesimo", 
            effect: "Previeni fino a 3 danni subiti in questo turno.", 
            cost: "1 Ombra", 
            copies: 2,
            image: "https://images.placeholders.dev/?width=80&height=100&text=Scudo&bgColor=%238e44ad&textColor=%23fff"
        },
        { 
            id: "s3", 
            name: "Onda di Sfera", 
            type: "Incantesimo", 
            effect: "Pesca 2 carte e guadagna 1 Frammento Ombra.", 
            cost: "1 Sfera", 
            copies: 4,
            image: "https://images.placeholders.dev/?width=80&height=100&text=Onda&bgColor=%233498db&textColor=%23fff"
        }
    ],
    companions: [
        { 
            id: "c1", 
            name: "Ombra Canina", 
            type: "Companion", 
            effect: "+1 movimento quando viaggi sulla mappa.", 
            copies: 1,
            image: "https://images.placeholders.dev/?width=80&height=100&text=Cane&bgColor=%23e67e22&textColor=%23fff"
        },
        { 
            id: "c2", 
            name: "Corvo Spettro", 
            type: "Companion", 
            effect: "Immune agli effetti delle caselle trappola.", 
            copies: 1,
            image: "https://images.placeholders.dev/?width=80&height=100&text=Corvo&bgColor=%232c3e50&textColor=%23fff"
        }
    ]
};