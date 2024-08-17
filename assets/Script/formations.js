let formations = [];

// Charger le fichier JSON
fetch('https://money2make.github.io/formations/formations.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Le fichier JSON n\'a pas pu être chargé');
        }
        return response.json();
    })
    .then(data => {
        formations = data.formations; // On accède à la propriété "formations"
        afficherFormations(formations); // On appelle la fonction pour afficher les formations
    })
    .catch(error => {
        console.error('Erreur:', error);
    });

// Fonction pour afficher les formations
function afficherFormations(formations) {
    const container = document.getElementById('formations');
    container.innerHTML = ''; // Effacer le contenu précédent
    formations.forEach(formation => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.innerHTML = `
            <h3>${formation.title}</h3>
            <p>Catégorie: ${formation.category}</p>
            <p><strong>Utilisateur:</strong> ${formation.author}</p> <!-- Ajout de l'auteur -->
            <div class="tags">
                ${formation.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="${formation.Link}" target="_blank">Voir la formation</a>
        `;
        container.appendChild(item);
    });
}
// Filtrer les formations en fonction de la recherche
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredFormations = formations.filter(formation => {
        return formation.title.toLowerCase().includes(query) ||
            formation.category.toLowerCase().includes(query) ||
            formation.tags.some(tag => tag.toLowerCase().includes(query));
    });
    afficherFormations(filteredFormations);
});

// Filtrer les formations par catégorie
document.getElementById('categorySelect').addEventListener('change', function() {
    const selectedCategory = this.value;
    const filteredFormations = formations.filter(formation => {
        return selectedCategory === 'all' || formation.category.toLowerCase() === selectedCategory.toLowerCase();
    });
    afficherFormations(filteredFormations);
});