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
            display.style.color = '#2ecc71';
        } else if (currentModifier < 0) {
            display.innerText = `${currentModifier}`;
            display.style.color = '#e74c3c';
        } else {
            display.innerText = '+0';
            display.style.color = '#ffcc00';
        }
    }
}

// --- ABILITÀ E EFFETTI NELLA TENDINA (PURA CONSULTAZIONE MEMO) ---
function renderAbilitiesSummary() {
    const container = document.getElementById('abilities-summary-list');
    if (!container) return;

    if (party.length === 0) {
        container.innerHTML = "<p style='color:#777; font-size:12px; text-align:center; padding: 10px;'>Nessuna carta attiva in campo.</p>";
        return;
    }

    const passiveCards = party.filter(c => {
        const t = c.type.toLowerCase();
        return t.includes("leader") || t.includes("mostro");
    });

    const activeCards = party.filter(c => c.type.toLowerCase().includes("eroe"));

    let html = "";

    // SEZIONE PASSIVA (LEADER & MOSTRI)
    html += `<div class="ability-section-title passive-title">🛡️ Effetti Passivi (Leader & Mostri)</div>`;
    if (passiveCards.length === 0) {
        html += `<p style='color:#666; font-size:11px; margin:4px 0 12px 8px;'>Nessun effetto passivo attivo.</p>`;
    } else {
        passiveCards.forEach(card => {
            const isLeader = card.type.toLowerCase().includes("leader");
            const icon = isLeader ? "👑" : "🐲";
            
            html += `
                <div class="ability-memo-item passive-card-item">
                    <div class="ability-memo-header">
                        <span class="ability-card-name">${icon} ${card.name}</span>
                        <span class="passive-badge">PASSIVA</span>
                    </div>
                    <div class="ability-memo-effect">${card.effect || "Nessun effetto specificato."}</div>
                </div>
            `;
        });
    }

    // SEZIONE ATTIVA (EROI)
    html += `<div class="ability-section-title active-title" style="margin-top: 14px;">⚡ Abilità Eroi</div>`;
    if (activeCards.length === 0) {
        html += `<p style='color:#666; font-size:11px; margin:4px 0 12px 8px;'>Nessun eroe nel party.</p>`;
    } else {
        activeCards.forEach(card => {
            const equippedItems = party.filter(c => 
                c.equippedToId === card.instanceId && !c.changesClassTo
            );
            const itemCount = equippedItems.length;

            let notificationBadge = "";
            let itemReminderText = "";

            if (itemCount > 0) {
                const itemNames = equippedItems.map(i => i.name).join(', ');
                notificationBadge = `<span class="equip-item-dot" title="Equipaggiato: ${itemNames}">●${itemCount > 1 ? `<sup>${itemCount}</sup>` : ''}</span>`;
                itemReminderText = `<div class="equip-reminder-note">🎒 <em>Controlla effetto equipaggiamento (${itemNames})</em></div>`;
            }

            html += `
                <div class="ability-memo-item active-card-item">
                    <div class="ability-memo-header">
                        <span class="ability-card-name">⚔️ ${card.name}</span>
                        ${notificationBadge}
                    </div>
                    <div class="ability-memo-effect">${card.effect || "Nessun effetto specificato."}</div>
                    ${itemReminderText}
                </div>
            `;
        });
    }

    container.innerHTML = html;
}

function toggleCardAbility(instanceId) {
    const card = party.find(c => c.instanceId === instanceId);
    if (card) {
        card.abilityUsed = !card.abilityUsed;
        renderAbilitiesSummary();
    }
}