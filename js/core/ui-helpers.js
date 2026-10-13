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