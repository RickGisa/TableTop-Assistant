let party = [];
let selectedCardIndex = null;
let activeCardIndex = null;
let victoryAchieved = false;
let currentClasses = 0;
let currentMonsters = 0;

// --- RICERCA CARTE (UNIVOCHE IN PLANCIA) ---
function searchCard() {
    const query = document.getElementById('card-search').value.toLowerCase().trim();
    const resultsContainer = document.getElementById('autocomplete-list');
    resultsContainer.innerHTML = "";

    if (query.length < 2) return;

    const currentPartyCardNames = party.map(c => c.name.toLowerCase());
    const hasLeader = party.some(c => c.type.toLowerCase().includes("leader"));

    const matches = CARDS_DATABASE.filter(c => {
        const matchesName = c.name.toLowerCase().includes(query);
        const notInParty = !currentPartyCardNames.includes(c.name.toLowerCase());
        const isLeader = c.type.toLowerCase().includes("leader");

        // Se c'è già un Leader nel party, nasconde gli altri Leader dai risultati
        if (hasLeader && isLeader) return false;

        return matchesName && notInParty;
    });

    if (matches.length === 0) {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';
        item.style.color = '#888';
        item.innerText = 'Nessuna carta trovata o carta già in campo';
        resultsContainer.appendChild(item);
        return;
    }

    matches.forEach(card => {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';
        item.innerHTML = `<strong>${card.name}</strong> <span style="font-size:11px; color:#aaa;">(${card.type})</span>`;
        item.onclick = () => selectCardFromSearch(card);
        resultsContainer.appendChild(item);
    });
}

// --- SELEZIONE E BERSAGLI DI EQUIPAGGIAMENTO ---
function selectCardFromSearch(card) {
    selectedCardIndex = JSON.parse(JSON.stringify(card));
    document.getElementById('autocomplete-list').innerHTML = "";
    document.getElementById('card-search').value = card.name;

    document.getElementById('preview-img').src = card.image;
    document.getElementById('preview-title').innerText = card.name;
    document.getElementById('preview-type').innerText = card.type;
    document.getElementById('preview-effect').innerText = card.effect;

    const equipContainer = document.getElementById('equip-selector-container');
    const equipSelect = document.getElementById('equip-target-select');

    if (card.type.toLowerCase().includes("oggetto")) {
        equipContainer.style.display = 'block';
        equipSelect.innerHTML = "";

        // Solo gli Eroi possono ricevere oggetti (i Party Leader sono esclusi)
        const validTargets = party.filter(c => c.type.toLowerCase().includes("eroe"));

        if (validTargets.length === 0) {
            equipSelect.innerHTML = "<option value=''>Nessun Eroe disponibile in campo</option>";
        } else {
            validTargets.forEach(target => {
                const equippedCount = party.filter(c => c.equippedToId === target.instanceId).length;
                const maxSlots = target.maxSlots || 1;
                const isFull = equippedCount >= maxSlots ? " (SLOT PIENI)" : "";
                
                equipSelect.innerHTML += `<option value="${target.instanceId}">${target.name} - ${equippedCount}/${maxSlots} Oggetti${isFull}</option>`;
            });
        }
    } else {
        equipContainer.style.display = 'none';
    }

    document.getElementById('selected-card-info').style.display = 'block';
}

// --- AGGIUNGI CARTA ALLA PLANCIA ---
function addSelectedCard() {
    if (!selectedCardIndex) return;

    const alreadyInParty = party.some(c => c.name.toLowerCase() === selectedCardIndex.name.toLowerCase());
    if (alreadyInParty) {
        alert(`La carta "${selectedCardIndex.name}" è già presente sulla plancia!`);
        return;
    }

    // =========================================================================
    // 🛑 CONTROLLO LIMITE PARTY LEADER (Max 1 per party)
    // =========================================================================
    if (selectedCardIndex.type.toLowerCase().includes("leader")) {
        const hasLeader = party.some(c => c.type.toLowerCase().includes("leader"));
        if (hasLeader) {
            alert("Puoi avere solo 1 Party Leader nel tuo party! Rimuovi quello attuale se desideri cambiarlo.");
            return; // Blocca l'inserimento
        }
    }
    // =========================================================================

    selectedCardIndex.instanceId = 'card_' + Date.now();

    if (selectedCardIndex.class) {
        selectedCardIndex.classeNativa = selectedCardIndex.class;
        selectedCardIndex.classeOggetto = selectedCardIndex.class;
    }

    if (selectedCardIndex.type.toLowerCase().includes("oggetto")) {
        const targetSelect = document.getElementById('equip-target-select');
        const targetId = targetSelect.value || null;

        if (!targetId) {
            alert("Devi avere ed identificare un Eroe in campo a cui equipaggiare l'Oggetto!");
            return;
        }

        const targetHero = party.find(c => c.instanceId === targetId);

        if (!targetHero || !targetHero.type.toLowerCase().includes("eroe")) {
            alert("Gli oggetti possono essere equipaggiati unicamente agli Eroi!");
            return;
        }

        const currentEquipped = party.filter(c => c.equippedToId === targetHero.instanceId).length;
        const maxSlots = targetHero.maxSlots || 1;

        if (currentEquipped >= maxSlots) {
            alert(`Impossibile equipaggiare: ${targetHero.name} ha già raggiunto il limite di ${maxSlots} oggetto/i!`);
            return;
        }

        selectedCardIndex.equippedToId = targetHero.instanceId;

        if (selectedCardIndex.changesClassTo) {
            targetHero.classeOggetto = selectedCardIndex.changesClassTo;
        }
    }

    party.push(selectedCardIndex);
    renderParty();

    document.getElementById('selected-card-info').style.display = 'none';
    document.getElementById('equip-selector-container').style.display = 'none';
    document.getElementById('card-search').value = "";
    selectedCardIndex = null;
}

// --- RENDERING PLANCIA ---
function renderParty() {
    const secLeader = document.getElementById('section-leader');
    const secHeroes = document.getElementById('section-heroes');
    const secItems = document.getElementById('section-items');
    const secMonsters = document.getElementById('section-monsters');

    secLeader.innerHTML = "";
    secHeroes.innerHTML = "";
    secItems.innerHTML = "";
    secMonsters.innerHTML = "";

    const emptyMsg = "<p style='color:#666; font-size:12px; margin:5px;'>Nessuna carta presente.</p>";

    const leaders = party.filter(c => c.type.toLowerCase().includes("leader"));
    const heroes = party.filter(c => c.type.toLowerCase().includes("eroe"));
    const items = party.filter(c => c.type.toLowerCase().includes("oggetto"));
    const monsters = party.filter(c => c.type.toLowerCase().includes("mostro"));

    if (leaders.length === 0) secLeader.innerHTML = emptyMsg;
    else leaders.forEach(c => secLeader.appendChild(createCardElement(c)));

    if (heroes.length === 0) secHeroes.innerHTML = emptyMsg;
    else heroes.forEach(c => secHeroes.appendChild(createCardElement(c)));

    if (items.length === 0) secItems.innerHTML = emptyMsg;
    else items.forEach(c => secItems.appendChild(createCardElement(c)));

    if (monsters.length === 0) secMonsters.innerHTML = emptyMsg;
    else monsters.forEach(c => secMonsters.appendChild(createCardElement(c)));

    checkVictoryCondition();
    if (typeof renderAbilitiesSummary === "function") {
        renderAbilitiesSummary();
    }
}

    // --- CREAZIONE CARD ELEMENT (CORRETTO CON SUBTYPE) ---
    function createCardElement(card) {
        const cardDiv = document.createElement('div');
    
        // Determina la classe principale (es. class-guerriero, class-oggetto)
        const activeClass = card.classeOggetto || card.class;
        const classColor = activeClass ? `class-${activeClass.toLowerCase()}` : '';
    
        // 🔧 NUOVA RIGA: Determina il subtype se presente (es. type-cursed, type-mask)
        const subTypeClass = card.subtype ? `type-${card.subtype.toLowerCase()}` : '';
    
        // 🔧 AGGIUNTO subTypeClass alla lista delle classi del div
        cardDiv.className = `party-card-item ${classColor} ${subTypeClass}`.trim();
        cardDiv.id = `element_${card.instanceId}`;

        let equipBadgeHtml = "";
            if (card.equippedToId) {
                const owner = party.find(c => c.instanceId === card.equippedToId);
                if (owner) {
                    equipBadgeHtml = `<div class="equipped-badge">🎒 a: ${owner.name}</div>`;
                }
            }

    cardDiv.innerHTML = `
        <img class="party-card-thumb" src="${card.image}" alt="${card.name}">
        <div class="party-card-name">${card.name}</div>
        ${equipBadgeHtml}
    `;

    cardDiv.onmouseover = () => highlightLinkedCards(card, true);
    cardDiv.onmouseout = () => highlightLinkedCards(card, false);

    let isHighlighted = false;
    cardDiv.onclick = () => {
        if (!isHighlighted) {
            document.querySelectorAll('.card-highlight-glow').forEach(el => el.classList.remove('card-highlight-glow'));
            highlightLinkedCards(card, true);
            isHighlighted = true;
        } else {
            highlightLinkedCards(card, false);
            isHighlighted = false;
            openModalByInstanceId(card.instanceId);
        }
    };

    return cardDiv;
}

function highlightLinkedCards(card, isHovered) {
    let targetIds = [card.instanceId];
    if (card.equippedToId) {
        targetIds.push(card.equippedToId);
    } else {
        const ownedItems = party.filter(c => c.equippedToId === card.instanceId);
        ownedItems.forEach(item => targetIds.push(item.instanceId));
    }

    targetIds.forEach(id => {
        const el = document.getElementById(`element_${id}`);
        if (el) {
            if (isHovered) el.classList.add('card-highlight-glow');
            else el.classList.remove('card-highlight-glow');
        }
    });
}

// --- RIMOZIONE CARTA ---
function removeCurrentCard() {
    if (activeCardIndex !== null && activeCardIndex < party.length) {
        const cardToRemove = party[activeCardIndex];

        if (cardToRemove.type.toLowerCase().includes("oggetto") && cardToRemove.equippedToId) {
            const targetHero = party.find(c => c.instanceId === cardToRemove.equippedToId);
            if (targetHero && cardToRemove.changesClassTo) {
                const otherModifyingItems = party.filter(c => 
                    c.equippedToId === targetHero.instanceId && 
                    c.instanceId !== cardToRemove.instanceId && 
                    c.changesClassTo
                );
                
                if (otherModifyingItems.length > 0) {
                    targetHero.classeOggetto = otherModifyingItems[otherModifyingItems.length - 1].changesClassTo;
                } else {
                    targetHero.classeOggetto = targetHero.classeNativa;
                }
            }
        }

        party.splice(activeCardIndex, 1);
        renderParty();
        closeModal();
    }
}

// --- CALCOLO VITTORIA ---
function checkVictoryCondition() {
    const activeCards = party.filter(c => 
        c.type.toLowerCase().includes("leader") || c.type.toLowerCase().includes("eroe")
    );
    
    const uniqueClasses = new Set(
        activeCards.map(c => (c.classeOggetto || c.class) ? (c.classeOggetto || c.class).toLowerCase() : null).filter(Boolean)
    );
    currentClasses = uniqueClasses.size;
    
    const classesDisplay = document.getElementById('classes-display');
    if (classesDisplay) classesDisplay.innerText = currentClasses + " / 10";

    const monstersList = party.filter(c => c.type.toLowerCase().includes("mostro"));
    currentMonsters = monstersList.length;
    
    const monstersDisplay = document.getElementById('monsters-display');
    if (monstersDisplay) monstersDisplay.innerText = currentMonsters + " / 5";

    if (!victoryAchieved) {
        if (currentClasses >= 10) {
            triggerVictory("Hai assemblato un Party con 10 Classi differenti!");
        } else if (currentMonsters >= 5) {
            triggerVictory("Hai sconfitto 5 Mostri!");
        }
    }
}

function triggerVictory(reasonText) {
    victoryAchieved = true;
    const reasonEl = document.getElementById('victory-reason');
    if (reasonEl) reasonEl.innerText = reasonText;
    const modalEl = document.getElementById('victory-modal');
    if (modalEl) modalEl.style.display = 'flex';
}

function closeVictoryModal() {
    const modalEl = document.getElementById('victory-modal');
    if (modalEl) modalEl.style.display = 'none';
}

// --- INIZIALIZZAZIONE ALL'AVVIO ---
document.addEventListener("DOMContentLoaded", () => {
    if (typeof renderParty === "function") {
        renderParty();
    }
    if (typeof updateAPDisplay === "function") {
        updateAPDisplay();
    }
});