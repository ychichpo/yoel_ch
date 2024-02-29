document.addEventListener("DOMContentLoaded", function() {
    // Récupérez tous les liens
    var links = document.querySelectorAll(".work-menu-perso a");

    // Ajoutez un gestionnaire d'événements à chaque lien
    links.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            // Obtenez la classe associée au lien cliqué
            var category = e.target.innerHTML.toLowerCase();

            // Montrez ou masquez les projets en fonction de la catégorie
            var projects = document.querySelectorAll(".project");
            projects.forEach(function(project) {
                if (project.classList.contains(category)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});
