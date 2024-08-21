function showReviewPopup() {
    document.getElementById('reviewPopup').style.display = 'block';
}

function closeReviewPopup() {
    document.getElementById('reviewPopup').style.display = 'none';
}

// Afficher la popup après un certain temps ou une action
setTimeout(() => {
    showReviewPopup();
}, 300); // Affiche après 30 secondes
