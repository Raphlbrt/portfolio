const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",

        // Taquin Project Page
        project_taquin: "Taquin Game Development",
        project_context: "Context",
        project_progress: "Project Progress",
        technical_challenges: "Technical Challenges",
        skills_acquired: "Skills Acquired",
        conclusion: "Conclusion",

        context_text_p1: "As part of my computer development training, I had the fascinating opportunity to create an implementation of the famous Taquin game. This project was part of SAE 1.01, representing my first significant immersion in object-oriented programming with Java.",

        progress_text: "The approach adopted was methodical and progressive, beginning with an in-depth analysis phase of game mechanics. The construction was structured around several key stages:",
        progress_step_1: "Initial design of data structures",
        progress_step_2: "Implementation of movement algorithms",
        progress_step_3: "Development of fundamental game mechanics",
        progress_step_4: "Intensive testing and optimization phase",

        challenges_text: "The project presented several stimulating challenges:",
        challenge_1: "Efficient modeling of the game grid",
        challenge_2: "Implementation of a robust movement validation system",
        challenge_3: "Algorithm optimization for a fluid user experience",
        challenge_4: "Elegant management of game states and victory conditions",

        skills_text: "This experience allowed me to develop a range of crucial skills:",
        skill_1: "Deep mastery of Java fundamentals",
        skill_2: "Fine understanding of data structures",
        skill_3: "Ability to design and implement complex algorithms",
        skill_4: "Structured development methodology",

        conclusion_text: "This project constituted a cornerstone in my training, consolidating my programming foundations while introducing me to good software development practices.",

        see_on_gitlab: "See on GitLab",
        link_to_project: "Link to the project",
        previous_project: "← Previous Project",
        next_project: "Next Project →"
    },
    fr: {
        // Navigation
        home: "Accueil",
        about: "À propos",
        projects: "Projets",
        contact: "Contact",

        // Page Projet Taquin
        project_taquin: "Développement du Jeu de Taquin",
        project_context: "Contexte",
        project_progress: "Déroulement du Projet",
        technical_challenges: "Défis Techniques",
        skills_acquired: "Compétences Acquises",
        conclusion: "Conclusion",

        context_text_p1: "Dans le cadre de ma formation en développement informatique, j'ai eu l'opportunité fascinante de créer une implémentation du célèbre jeu du Taquin. Ce projet s'inscrivait dans la SAE 1.01, représentant ma première immersion significative dans la programmation orientée objet en Java.",

        progress_text: "L'approche adoptée fut méthodique et progressive, débutant par une phase d'analyse approfondie des mécaniques du jeu. La construction s'est articulée autour de plusieurs étapes clés :",
        progress_step_1: "Conception initiale des structures de données",
        progress_step_2: "Implémentation des algorithmes de déplacement",
        progress_step_3: "Développement des mécaniques de jeu fondamentales",
        progress_step_4: "Phase intensive de tests et d'optimisation",

        challenges_text: "Le projet a présenté plusieurs défis stimulants :",
        challenge_1: "Modélisation efficiente de la grille de jeu",
        challenge_2: "Implémentation d'un système robuste de validation des mouvements",
        challenge_3: "Optimisation des algorithmes pour une expérience utilisateur fluide",
        challenge_4: "Gestion élégante des états de jeu et des conditions de victoire",

        skills_text: "Cette expérience m'a permis de développer un éventail de compétences cruciales :",
        skill_1: "Maîtrise approfondie des fondamentaux de Java",
        skill_2: "Compréhension fine des structures de données",
        skill_3: "Capacité à concevoir et implémenter des algorithmes complexes",
        skill_4: "Méthodologie de développement structurée",

        conclusion_text: "Ce projet a constitué une pierre angulaire dans ma formation, consolidant mes bases en programmation tout en m'initiant aux bonnes pratiques du développement logiciel.",

        see_on_gitlab: "Voir sur GitLab",
        link_to_project: "Lien vers le projet",
        previous_project: "← Projet Précédent",
        next_project: "Projet Suivant →"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('languageSelect');

    function setLanguage(lang) {
        localStorage.setItem('selectedLanguage', lang);
        updateContent(lang);
    }

    function updateContent(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = translations[lang][key];
        });
    }

    languageSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    // Charge la langue sauvegardée ou par défaut
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    languageSelect.value = savedLanguage;
    updateContent(savedLanguage);
});