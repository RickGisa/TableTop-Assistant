// --- NAVIGAZIONE SCHERMATE ---
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
}

// --- LOGICA PUNTI AZIONE (PA) ---
let currentAP = 3;

function updateAPDisplay() { 
    const display = document.getElementById('ap-display');
    if (display) display.innerText = currentAP; 
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

// --- ACCORDION A TENDINA ---
function toggleAccordion(targetId) {
    const allContents = document.querySelectorAll('.accordion-content');

    allContents.forEach(content => {
        if (content.id === targetId) {
            const isHidden = content.style.display === 'none';
            content.style.display = isHidden ? 'block' : 'none';
            
            const icon = document.getElementById(`icon-${targetId}`);
            if (icon) icon.innerText = isHidden ? '▼' : '▶';
        } else {
            content.style.display = 'none';
            const icon = document.getElementById(`icon-${content.id}`);
            if (icon) icon.innerText = '▶';
        }
    });
}