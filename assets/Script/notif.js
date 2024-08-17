// Fonction pour afficher le bandeau
function showBanner(message) {
    const banner = document.getElementById('banner');
    document.getElementById('banner-message').textContent = message;
    banner.style.display = 'block'; // Afficher le bandeau
}

// Fonction pour fermer le bandeau
function closeBanner() {
    document.getElementById('banner').style.display = 'none'; // Cacher le bandeau
}

// Exemple d'affichage du bandeau après 1 seconde
setTimeout(() => {
    showBanner('Bienvenue ! Le site est en bêta. Pour toute demande ou pour signaler un bug, veuillez rejoindre notre Discord !');
}, 1000);