let csState = {
    hp: 75,
    maxHp: 75,
    shadowPoints: 0,
    isShadowForm: false,
    selectedCharacter: null,
    spells: [null, null, null, null, null], // 5 slot
    companion: null
};

let currentCSAP = 5;
const MAX_CS_AP = 5;

function updateCSAPDisplay() {
    const display = document.getElementById('cs-ap-display');
    if (display) display.innerText = `${currentCSAP} / ${MAX_CS_AP}`;
}

function performCSAction(actionName, cost) {
    if (currentCSAP >= cost) {
        currentCSAP -= cost;
        updateCSAPDisplay();
    } else {
        alert(`Non hai abbastanza Punti Azione per eseguire "${actionName}"!`);
    }
}

function resetCSTurn() {
    currentCSAP = MAX_CS_AP;
    updateCSAPDisplay();
}

function changeCSHP(amount) {
    csState.hp = Math.max(0, csState.hp + amount);
    document.getElementById('cs-hp-display').innerText = csState.hp;
}

// --- GESTIONE FRAMMENTI OMBRA & TRASFORMAZIONE ---
function changeShadowPoints(amount) {
    const maxPoints = csState.isShadowForm ? 5 : 3;
    
    // Calcolo nuovo valore rispettando i limiti [0, maxPoints]
    csState.shadowPoints = Math.min(maxPoints, Math.max(0, csState.shadowPoints + amount));
    
    const display = document.getElementById('cs-sp-display');
    if (display) display.innerText = csState.shadowPoints;

    updateTransformButtonState();
}

function updateTransformButtonState() {
    const btnTransform = document.getElementById('btn-cs-transform');
    if (!btnTransform) return;

    if (csState.isShadowForm) {
        // Già trasformato: disabilitato permanentemente (non si torna indietro)
        btnTransform.innerText = "🔮 Forma Ombra Attiva (Definitiva)";
        btnTransform.disabled = true;
        btnTransform.style.background = "#333";
        btnTransform.style.cursor = "not-allowed";
        btnTransform.style.opacity = "0.6";
    } else {
        // Forma base: abilitato SOLO se si hanno esattamente 3 Frammenti Ombra
        if (csState.shadowPoints >= 3) {
            btnTransform.innerText = "⚡ TRASFORMA IN FORMA OMBRA!";
            btnTransform.disabled = false;
            btnTransform.style.background = "#8e44ad";
            btnTransform.style.cursor = "pointer";
            btnTransform.style.opacity = "1";
            btnTransform.classList.add('ready-transform');
        } else {
            btnTransform.innerText = `🔮 Trasforma in Forma Ombra (Richiede 3 Frammenti: ${csState.shadowPoints}/3)`;
            btnTransform.disabled = true;
            btnTransform.style.background = "#4a2d5e";
            btnTransform.style.cursor = "not-allowed";
            btnTransform.style.opacity = "0.5";
            btnTransform.classList.remove('ready-transform');
        }
    }
}

// --- TRASFORMAZIONE IN FORMA OMBRA (CONSUMA I 3 FRAMMENTI) ---
function toggleShadowForm() {
    if (!csState.selectedCharacter) {
        alert("Prima seleziona un personaggio cliccando sul riquadro a sinistra!");
        return;
    }

    if (csState.isShadowForm) return; // Non si può tornare alla forma base

    if (csState.shadowPoints < 3) {
        alert("Hai bisogno di 3 Frammenti Ombra per trasformarti!");
        return;
    }

    // Effettua la trasformazione, consuma i 3 frammenti e azzera il contatore
    csState.isShadowForm = true;
    csState.shadowPoints = 0; // Azzeramento alla trasformazione
    
    document.getElementById('cs-sp-display').innerText = csState.shadowPoints;

    const charImg = document.getElementById('cs-char-img');
    const abilityText = document.getElementById('cs-ability-text');
    const char = csState.selectedCharacter;

    if (charImg) charImg.src = char.shadowImage;
    if (abilityText) abilityText.innerHTML = `<strong>Forma Ombra 🔮</strong><br>${char.shadowAbility}`;

    updateTransformButtonState();
}

// --- SELEZIONE PERSONAGGIO ---
function openCharacterSelector() {
    let modal = document.getElementById('cs-dynamic-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'cs-dynamic-modal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }

    let itemsHtml = CS_DATABASE.characters.map((char, idx) => `
        <div class="cs-modal-item" data-idx="${idx}" style="display: flex; gap: 12px; align-items: center; background: #18181d; border: 1px solid #3a3a46; padding: 10px; border-radius: 8px; margin-bottom: 8px; cursor: pointer;">
            <div style="display: flex; gap: 6px;">
                <div style="text-align: center;">
                    <img src="${char.normalImage}" style="width: 60px; height: 80px; object-fit: cover; border-radius: 4px; border: 1px solid #8e44ad;">
                    <span style="font-size: 9px; color: #aaa; display: block;">Base</span>
                </div>
                <div style="text-align: center;">
                    <img src="${char.shadowImage}" style="width: 60px; height: 80px; object-fit: cover; border-radius: 4px; border: 1px solid #2c3e50;">
                    <span style="font-size: 9px; color: #aaa; display: block;">Ombra</span>
                </div>
            </div>
            <div style="flex: 1; text-align: left;">
                <div style="font-size: 15px; font-weight: bold; color: #ffcc00; font-family: 'Patua One', cursive, serif;">${char.name}</div>
                <div style="font-size: 11px; color: #ccc; margin-top: 4px;"><strong>Base:</strong> ${char.normalAbility}</div>
                <div style="font-size: 11px; color: #9b59b6; margin-top: 2px;"><strong>Ombra:</strong> ${char.shadowAbility}</div>
            </div>
        </div>
    `).join('');

    modal.innerHTML = `
        <div class="modal-content" style="max-width: 450px;">
            <div class="modal-title">Seleziona il Personaggio</div>
            <div style="max-height: 320px; overflow-y: auto; margin: 15px 0; padding-right: 4px;">
                ${itemsHtml}
            </div>
            <button class="btn-reset" onclick="closeCSModal()">Chiudi</button>
        </div>
    `;

    modal.querySelectorAll('.cs-modal-item').forEach((el, idx) => {
        el.onclick = () => {
            const char = CS_DATABASE.characters[idx];
            csState.selectedCharacter = char;
            csState.hp = char.baseHp;
            csState.maxHp = char.baseHp;
            csState.isShadowForm = false;
            csState.shadowPoints = 0;
            
            document.getElementById('cs-hp-display').innerText = csState.hp;
            document.getElementById('cs-sp-display').innerText = csState.shadowPoints;
            
            const imgEl = document.getElementById('cs-char-img');
            const placeholderEl = document.getElementById('cs-placeholder-text');
            if (imgEl) {
                imgEl.src = char.normalImage;
                imgEl.style.display = 'block';
            }
            if (placeholderEl) placeholderEl.style.display = 'none';

            document.getElementById('cs-ability-text').innerHTML = `<strong>Forma Normale 👤</strong><br>${char.normalAbility}`;
            updateTransformButtonState();
            closeCSModal();
        };
    });

    modal.style.display = 'flex';
}

// --- SELEZIONE SLOT CON TRACCIAMENTO COPIE MAZZO ---
// --- MODALE SELEZIONE / RIMOZIONE SLOT CON PULSANTI SUL BOTTOM BAR ---
function openSlotSelector(index, type) {
    const items = type === 'spell' ? CS_DATABASE.spells : CS_DATABASE.companions;
    const title = type === 'spell' ? `Seleziona Incantesimo (Slot ${index + 1})` : "Seleziona Companion d'Ombra";

    openCSModalWithRemoveOption(title, items, type, index, (item) => {
        if (type === 'spell') {
            csState.spells[index] = item;
        } else {
            csState.companion = item;
        }
        renderCSGrid();
        closeCSModal();
    });
}

function openCSModalWithRemoveOption(title, items, type, slotIndex, onSelectCallback) {
    let modal = document.getElementById('cs-dynamic-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'cs-dynamic-modal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }

    let itemsHtml = items.map((item, idx) => {
        let usedCopies = 0;
        if (type === 'spell') {
            usedCopies = csState.spells.filter(s => s && s.id === item.id).length;
        } else {
            usedCopies = (csState.companion && csState.companion.id === item.id) ? 1 : 0;
        }

        const maxCopies = item.copies || 1;
        const availableCopies = maxCopies - usedCopies;
        const isSelectable = availableCopies > 0;

        const costHtml = item.cost ? `<div style="font-size: 11px; color: #e67e22; margin: 2px 0 6px 0; font-weight: bold;">Costo: ${item.cost}</div>` : '';
        const copiesBadge = `<span style="float: right; font-size: 10px; color: ${isSelectable ? '#2ecc71' : '#e74c3c'}; font-weight: bold;">Disponibili: ${availableCopies} / ${maxCopies}</span>`;

        const itemStyle = isSelectable 
            ? "background: #18181d; border: 1px solid #3a3a46; cursor: pointer;" 
            : "background: #111115; border: 1px solid #222; opacity: 0.4; cursor: not-allowed;";

        return `
            <div class="cs-modal-item" data-idx="${idx}" data-selectable="${isSelectable}" style="${itemStyle} padding: 10px; border-radius: 8px; margin-bottom: 8px;">
                <div class="cs-modal-item-name">${item.name} ${copiesBadge}</div>
                ${costHtml}
                <div class="cs-modal-item-effect">${item.effect}</div>
            </div>
        `;
    }).join('');

    // Verifica se lo slot attuale ha una carta equipaggiata
    const currentEquipped = (type === 'spell') ? csState.spells[slotIndex] : csState.companion;
    const removeBtnHtml = currentEquipped ? `
        <button class="btn-reset" style="background: #c0392b; flex: 1;" onclick="removeCardFromSlot(${slotIndex}, '${type}')">
            🗑️ Rimuovi
        </button>
    ` : '';

    modal.innerHTML = `
        <div class="modal-content" style="max-width:380px;">
            <div class="modal-title">${title}</div>
            <div style="max-height:280px; overflow-y:auto; margin:15px 0; padding-right:4px;">
                ${itemsHtml}
            </div>
            <div style="display: flex; gap: 10px; margin-top: 10px;">
                <button class="btn-reset" style="flex: 1;" onclick="closeCSModal()">Chiudi</button>
                ${removeBtnHtml}
            </div>
        </div>
    `;

    modal.querySelectorAll('.cs-modal-item').forEach((el, idx) => {
        if (el.dataset.selectable === "true") {
            el.onclick = () => onSelectCallback(items[idx]);
        }
    });

    modal.style.display = 'flex';
}

function openCSModalWithCopyCheck(title, items, type, onSelectCallback) {
    let modal = document.getElementById('cs-dynamic-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'cs-dynamic-modal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }

    let itemsHtml = items.map((item, idx) => {
        // Calcola quante copie di questo item sono attualmente equipaggiate
        let usedCopies = 0;
        if (type === 'spell') {
            usedCopies = csState.spells.filter(s => s && s.id === item.id).length;
        } else {
            usedCopies = (csState.companion && csState.companion.id === item.id) ? 1 : 0;
        }

        const maxCopies = item.copies || 1;
        const availableCopies = maxCopies - usedCopies;
        const isSelectable = availableCopies > 0;

        const costHtml = item.cost ? `<div style="font-size: 11px; color: #e67e22; margin: 2px 0 6px 0; font-weight: bold;">Costo: ${item.cost}</div>` : '';
        const copiesBadge = `<span style="float: right; font-size: 10px; color: ${isSelectable ? '#2ecc71' : '#e74c3c'}; font-weight: bold;">Disponibili: ${availableCopies} / ${maxCopies}</span>`;

        const itemStyle = isSelectable 
            ? "background: #18181d; border: 1px solid #3a3a46; cursor: pointer;" 
            : "background: #111115; border: 1px solid #222; opacity: 0.4; cursor: not-allowed;";

        return `
            <div class="cs-modal-item" data-idx="${idx}" data-selectable="${isSelectable}" style="${itemStyle} padding: 10px; border-radius: 8px; margin-bottom: 8px;">
                <div class="cs-modal-item-name">${item.name} ${copiesBadge}</div>
                ${costHtml}
                <div class="cs-modal-item-effect">${item.effect}</div>
            </div>
        `;
    }).join('');

    modal.innerHTML = `
        <div class="modal-content" style="max-width:380px;">
            <div class="modal-title">${title}</div>
            <div style="max-height:300px; overflow-y:auto; margin:15px 0; padding-right:4px;">
                ${itemsHtml}
            </div>
            <button class="btn-reset" onclick="closeCSModal()">Chiudi</button>
        </div>
    `;

    modal.querySelectorAll('.cs-modal-item').forEach((el, idx) => {
        if (el.dataset.selectable === "true") {
            el.onclick = () => onSelectCallback(items[idx]);
        }
    });

    modal.style.display = 'flex';
}

// --- RENDERING GRIGLIA ---
function renderCSGrid() {
    for (let i = 0; i < 5; i++) {
        const slotEl = document.getElementById(`cs-spell-slot-${i}`);
        const spell = csState.spells[i];
        if (slotEl) {
            if (spell) {
                const imgHtml = spell.image 
                    ? `<img src="${spell.image}" style="width: 42px; height: 55px; object-fit: cover; border-radius: 4px; border: 1px solid #9b59b6; flex-shrink: 0;">` 
                    : '';

                slotEl.innerHTML = `
                    <div style="display: flex; gap: 8px; width: 100%; height: 100%; align-items: center; text-align: left; padding: 2px;">
                        ${imgHtml}
                        <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; flex: 1; overflow: hidden;">
                            <div>
                                <div style="font-weight: bold; color: #ffcc00; font-size: 11px; font-family: 'Patua One', cursive, serif; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${spell.name}</div>
                                <div style="font-size: 9px; color: #e67e22; font-weight: bold;">Costo: ${spell.cost}</div>
                            </div>
                            <div style="font-size: 9px; color: #ccc; background: #111; padding: 3px 5px; border-radius: 4px; line-height: 1.2; max-height: 32px; overflow: hidden; text-overflow: ellipsis;">${spell.effect}</div>
                        </div>
                    </div>
                `;
                slotEl.style.borderColor = "#9b59b6";
                slotEl.style.background = "#1a1a22";
            } else {
                slotEl.innerHTML = `<span>Slot Incantesimo ${i + 1}</span>`;
                slotEl.style.borderColor = "#444";
                slotEl.style.background = "#18181c";
            }
        }
    }

    const compEl = document.getElementById('cs-companion-slot');
    if (compEl) {
        if (csState.companion) {
            const comp = csState.companion;
            const imgHtml = comp.image 
                ? `<img src="${comp.image}" style="width: 42px; height: 55px; object-fit: cover; border-radius: 4px; border: 1px solid #f1c40f; flex-shrink: 0;">` 
                : '';

            compEl.innerHTML = `
                <div style="display: flex; gap: 8px; width: 100%; height: 100%; align-items: center; text-align: left; padding: 2px;">
                    ${imgHtml}
                    <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; flex: 1; overflow: hidden;">
                        <div>
                            <div style="font-weight: bold; color: #f1c40f; font-size: 11px; font-family: 'Patua One', cursive, serif; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">🐾 ${comp.name}</div>
                        </div>
                        <div style="font-size: 9px; color: #ccc; background: #111; padding: 3px 5px; border-radius: 4px; line-height: 1.2; max-height: 32px; overflow: hidden; text-overflow: ellipsis;">${comp.effect}</div>
                    </div>
                </div>
            `;
            compEl.style.borderColor = "#f1c40f";
            compEl.style.background = "#222015";
        } else {
            compEl.innerHTML = `<span>🐾 Companion d'Ombra</span>`;
            compEl.style.borderColor = "#f1c40f";
            compEl.style.background = "rgba(241, 196, 15, 0.05)";
        }
    }
}

function closeCSModal() {
    const modal = document.getElementById('cs-dynamic-modal');
    if (modal) modal.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
    updateCSAPDisplay();
    updateTransformButtonState();
    renderCSGrid();
});

// --- FUNZIONE PER RIMUOVERE/DISEQUIPAGGIARE CARTA DA UNO SLOT ---
function removeCardFromSlot(slotIndex, type) {
    if (type === 'spell') {
        csState.spells[slotIndex] = null;
    } else {
        csState.companion = null;
    }
    renderCSGrid();
    closeCSModal();
}