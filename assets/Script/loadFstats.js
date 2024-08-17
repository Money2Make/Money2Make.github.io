// Charger le nombre de formations
fetch('https://money2make.github.io/formations/formations.json')
.then(response => response.json())
.then(data => {
    const formationCount = data.formations.length;
    document.getElementById('formation-count').textContent = formationCount;
})
.catch(error => console.error('Erreur lors du chargement des statistiques:', error));