// --- LOGICA DI NAVIGAZIONE SCHERMATE ---
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// --- LOGICA PUNTI AZIONE (PA) ---
let currentAP = 3;
function updateAPDisplay() { 
    document.getElementById('ap-display').innerText = currentAP; 
}
function useAP(cost) {
    if (currentAP >= cost) { 
        currentAP -= cost; 
        updateAPDisplay(); 
    } else { 
        alert("Non hai abbastanza Punti Azione!"); 
    }
}
function resetTurn() { 
    currentAP = 3; 
    updateAPDisplay(); 
}

// --- VARIABILI GLOBALI PER LE CARTE ---
let selectedCardIndex = null;
let party = []; // Contiene tutte le carte attive sulla plancia con ID univoco
let activeCardIndex = null;
let victoryAchieved = false;
let currentClasses = 0;
let currentMonsters = 0;

// --- FUNZIONE DI RICERCA CARTE (ESCLUDE LE CARTE GIÀ IN PLANCIA) ---
function searchCard() {
    const query = document.getElementById('card-search').value.toLowerCase().trim();
    const resultsContainer = document.getElementById('autocomplete-list');
    resultsContainer.innerHTML = "";

    if (query.length < 2) return;

    // Estraiamo i nomi di tutte le carte attualmente presente in plancia
    const currentPartyCardNames = party.map(c => c.name.toLowerCase());

    // Filtriamo dal database solo le carte il cui nome corrisponde E che NON sono ancora in campo
    const matches = CARDS_DATABASE.filter(c => 
        c.name.toLowerCase().includes(query) && 
        !currentPartyCardNames.includes(c.name.toLowerCase())
    );

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

// --- SELEZIONE CARTA DAI RISULTATI ---
function selectCardFromSearch(card) {
    selectedCardIndex = JSON.parse(JSON.stringify(card)); // Copia pulita
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

        // Trova SOLO gli Eroi in campo (I Party Leader NON possono ricevere oggetti)
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
// --- AGGIUNGI CARTA ALLA PLANCIA (VERIFICA UNICITÀ E SLOT) ---
function addSelectedCard() {
    if (!selectedCardIndex) return;

    // 1. Controllo Unicità: verifica che la carta non sia già sulla plancia
    const alreadyInParty = party.some(c => c.name.toLowerCase() === selectedCardIndex.name.toLowerCase());
    if (alreadyInParty) {
        alert(`La carta "${selectedCardIndex.name}" è già presente sulla plancia!`);
        return;
    }

    selectedCardIndex.instanceId = 'card_' + Date.now();

    // Inizializzazione proprietà di classe per Eroi
    if (selectedCardIndex.class) {
        selectedCardIndex.classeNativa = selectedCardIndex.class;
        selectedCardIndex.classeOggetto = selectedCardIndex.class;
    }

    // Se la carta è un Oggetto
    if (selectedCardIndex.type.toLowerCase().includes("oggetto")) {
        const targetSelect = document.getElementById('equip-target-select');
        const targetId = targetSelect.value || null;

        if (!targetId) {
            alert("Devi avere ed identificare un Eroe in campo a cui equipaggiare l'Oggetto!");
            return;
        }

        const targetHero = party.find(c => c.instanceId === targetId);
        
        // Verifica bloccante: deve essere un Eroe
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

        // Se l'oggetto modifica la classe dell'eroe
        if (selectedCardIndex.changesClassTo) {
            targetHero.classeOggetto = selectedCardIndex.changesClassTo;
        }
    }

    party.push(selectedCardIndex);
    renderParty();

    // Resetta l'interfaccia
    document.getElementById('selected-card-info').style.display = 'none';
    document.getElementById('equip-selector-container').style.display = 'none';
    document.getElementById('card-search').value = "";
    selectedCardIndex = null;
}

// --- RENDERING PLANCIA DIVISA NELLE 4 SEZIONI ---
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

    // Verifica automatica delle condizioni di vittoria
    checkVictoryCondition();

    renderAbilitiesSummary();
}

// --- CREAZIONE ELEMENTO VISIVO MINI-CARD ---
function createCardElement(card) {
    const cardDiv = document.createElement('div');
    
    // Determiniamo la classe attuale (classeOggetto se modificata, altrimenti classe nativa)
    const activeClass = card.classeOggetto || card.class;
    const classColor = activeClass ? `class-${activeClass.toLowerCase()}` : '';
    
    cardDiv.className = `party-card-item ${classColor}`;
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

    // Mouse Hover su Desktop
    cardDiv.onmouseover = () => highlightLinkedCards(card, true);
    cardDiv.onmouseout = () => highlightLinkedCards(card, false);

    // Touch / Click intelligente
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

// --- EFFETTO GLOW COLLEGATO OGGETTO / EROE ---
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

// --- GESTIONE MODAL DETTAGLI ---
function openModalByInstanceId(instanceId) {
    const cardIndex = party.findIndex(c => c.instanceId === instanceId);
    if (cardIndex !== -1) {
        activeCardIndex = cardIndex;
        const card = party[cardIndex];
        document.getElementById('modal-img').src = card.image;
        document.getElementById('modal-title').innerText = card.name;
        document.getElementById('modal-type').innerText = card.type;
        document.getElementById('modal-effect').innerText = card.effect;
        document.getElementById('card-modal').style.display = 'flex';
    }
}

function closeModal() {
    document.getElementById('card-modal').style.display = 'none';
    activeCardIndex = null;
}

// --- RIMOZIONE CARTA DALLA PLANCIA ---
function removeCurrentCard() {
    if (activeCardIndex !== null && activeCardIndex < party.length) {
        const cardToRemove = party[activeCardIndex];

        // Se stiamo rimuovendo un oggetto che modificava la classe di un Eroe/Leader
        if (cardToRemove.type.toLowerCase().includes("oggetto") && cardToRemove.equippedToId) {
            const targetHero = party.find(c => c.instanceId === cardToRemove.equippedToId);
            if (targetHero && cardToRemove.changesClassTo) {
                // Verifichiamo se ci sono altri oggetti con cambio classe equipaggiati
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

// --- CONTROLLO CONDIZIONI DI VITTORIA E AGGIORNAMENTO AUTOMATICO ---
function checkVictoryCondition() {
    // 1. Calcolo Classi uniche
    const activeCards = party.filter(c => 
        c.type.toLowerCase().includes("leader") || c.type.toLowerCase().includes("eroe")
    );
    
    // Si usa 'classeOggetto' se presente, altrimenti la classe di base
    const uniqueClasses = new Set(
        activeCards.map(c => (c.classeOggetto || c.class) ? (c.classeOggetto || c.class).toLowerCase() : null).filter(Boolean)
    );
    currentClasses = uniqueClasses.size;
    
    const classesDisplay = document.getElementById('classes-display');
    if (classesDisplay) classesDisplay.innerText = currentClasses + " / 10";

    // 2. Calcolo Mostri Sconfitti
    const monstersList = party.filter(c => c.type.toLowerCase().includes("mostro"));
    currentMonsters = monstersList.length;
    
    const monstersDisplay = document.getElementById('monsters-display');
    if (monstersDisplay) monstersDisplay.innerText = currentMonsters + " / 5";

    // --- VERIFICA VITTORIA ---
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

// --- LOGICA ACCORDION (TENDINE A SCOMPARSA ESCLUSIVE) ---
function toggleAccordion(targetId) {
    const allContents = document.querySelectorAll('.accordion-content');
    const allIcons = document.querySelectorAll('.accordion-icon');

    allContents.forEach(content => {
        if (content.id === targetId) {
            // Se è quello cliccato, invertiamo la visibilità
            const isHidden = content.style.display === 'none';
            content.style.display = isHidden ? 'block' : 'none';
            
            // Aggiorna l'icona
            const icon = document.getElementById(`icon-${targetId}`);
            if (icon) icon.innerText = isHidden ? '▼' : '▶';
        } else {
            // Chiude automaticamente tutte le altre tendine
            content.style.display = 'none';
            const icon = document.getElementById(`icon-${content.id}`);
            if (icon) icon.innerText = '▶';
        }
    });
}

// --- LOGICA TRACKER MODIFICATORI ---
let currentModifier = 0;

function addModifier(val) {
    currentModifier += val;
    updateModifierDisplay();
}

function resetModifier() {
    currentModifier = 0;
    updateModifierDisplay();
}

function updateModifierDisplay() {
    const display = document.getElementById('mod-total-display');
    if (display) {
        if (currentModifier > 0) {
            display.innerText = `+${currentModifier}`;
            display.style.color = '#2ecc71'; // Verde per bonus
        } else if (currentModifier < 0) {
            display.innerText = `${currentModifier}`;
            display.style.color = '#e74c3c'; // Rosso per malus
        } else {
            display.innerText = '+0';
            display.style.color = '#ffcc00'; // Giallo neutro
        }
    }
}

// --- RENDERIZZAZIONE DINAMICA ABILITÀ & EFFETTI NELLA TENDINA ---
// --- RENDERIZZAZIONE ABILITÀ DIVISA IN SEZIONI (PASSIVE E ATTIVE) ---
function renderAbilitiesSummary() {
    const container = document.getElementById('abilities-summary-list');
    if (!container) return;

    if (party.length === 0) {
        container.innerHTML = "<p style='color:#888; font-size:12px; text-align:center;'>Nessuna carta attiva in campo.</p>";
        return;
    }

    // Separiamo le carte tra Passive (Leader e Mostri) e Attive (Eroi)
    const passiveCards = party.filter(c => {
        const t = c.type.toLowerCase();
        return t.includes("leader") || t.includes("mostro");
    });

    const activeCards = party.filter(c => c.type.toLowerCase().includes("eroe"));

    let html = "";

    // --- SEZIONE 1: ABILITÀ PASSIVE ---
    html += `<div class="ability-section-title passive-title">🛡️ Abilità Passive (Leader & Mostri)</div>`;
    if (passiveCards.length === 0) {
        html += `<p style='color:#666; font-size:11px; margin:4px 0 10px 10px;'>Nessuna abilità passiva attiva.</p>`;
    } else {
        passiveCards.forEach(card => {
            const isLeader = card.type.toLowerCase().includes("leader");
            const icon = isLeader ? "👑" : "🐲";
            
            html += `
                <div class="ability-memo-item passive-card-item">
                    <div class="ability-memo-header">
                        <span>${icon} <strong>${card.name}</strong></span>
                        <span class="passive-badge">PASSIVA</span>
                    </div>
                    <div class="ability-memo-effect">${card.effect || "Nessun effetto specificato."}</div>
                </div>
            `;
        });
    }

    // --- SEZIONE 2: ABILITÀ ATTIVE ---
    html += `<div class="ability-section-title active-title" style="margin-top: 15px;">⚡ Abilità Attive (Eroi)</div>`;
    if (activeCards.length === 0) {
        html += `<p style='color:#666; font-size:11px; margin:4px 0 10px 10px;'>Nessun eroe in campo.</p>`;
    } else {
        activeCards.forEach(card => {
            // Troviamo gli oggetti equipaggiati che NON cambiano la classe
            const equippedItems = party.filter(c => 
                c.equippedToId === card.instanceId && !c.changesClassTo
            );
            const itemCount = equippedItems.length;

            // Se ci sono oggetti, creiamo la notifica con il conteggio ed il promemoria
            let notificationBadge = "";
            let itemReminderText = "";

            if (itemCount > 0) {
                const itemNames = equippedItems.map(i => i.name).join(', ');
                notificationBadge = `<span class="equip-item-dot" title="Equipaggiato: ${itemNames}">●${itemCount > 1 ? `<sup>${itemCount}</sup>` : ''}</span>`;
                itemReminderText = `<div class="equip-reminder-note">🎒 <em>Oggetti equipaggiati (${itemCount}): controlla gli effetti degli oggetti!</em></div>`;
            }

            const isUsed = card.abilityUsed || false;
            const btnClass = isUsed ? "btn-ability-used" : "btn-ability-ready";
            const btnText = isUsed ? "Abilità Usata ✓" : "Pronta (Clicca per usare)";

            html += `
                <div class="ability-memo-item active-card-item">
                    <div class="ability-memo-header">
                        <span>⚔️ <strong>${card.name}</strong> ${notificationBadge}</span>
                    </div>
                    <div class="ability-memo-effect">${card.effect || "Nessun effetto specificato."}</div>
                    ${itemReminderText}
                    <button class="btn-ability-toggle ${btnClass}" onclick="toggleCardAbility('${card.instanceId}')">
                        ${btnText}
                    </button>
                </div>
            `;
        });
    }

    container.innerHTML = html;
}

// --- TOGGLE STATO ABILITÀ (USATA / PRONTA) ---
function toggleCardAbility(instanceId) {
    const card = party.find(c => c.instanceId === instanceId);
    if (card) {
        card.abilityUsed = !card.abilityUsed;
        renderAbilitiesSummary(); // Aggiorna la vista nella tendina
    }
}