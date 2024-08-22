async function fetchPresenceCount() {
    try {
        const response = await fetch('https://discord.com/api/guilds/1276173840573272175/widget.json');
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        document.getElementById('presence-count').textContent = data.presence_count;
    } catch (error) {
        console.error('Erreur:', error);
        document.getElementById('presence-count').textContent = 'Erreur';
    }
}

// Appeler la fonction lorsque la page est chargée
document.addEventListener('DOMContentLoaded', fetchPresenceCount);
