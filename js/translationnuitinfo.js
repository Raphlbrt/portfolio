const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        portfolio_learning: "Learning Portfolio",
        project_context: "Context",
        project_progress: "Project Progress",
        technical_challenges: "Technical Challenges",
        skills_acquired: "Skills Acquired",
        conclusion: "Conclusion",

        // Project specific
        project_title: "Nuit de l'Info 2025 - NIRD Quiz",
        first_place_badge: "🏆 1st place in the Hair'Gonomie challenge (72 participating teams)",
        context_text_p1: "The Nuit de l'Info is a national hackathon taking place over an entire night (December 4-5, 2025). I formed a team of two developers with Alexandre SIMONGIOVANNI to create a web application raising awareness about planned obsolescence and sustainable alternatives (Linux, free software) for educational institutions.",
        context_text_p2: "We took on the \"Hair'Gonomie\" challenge proposed by CAPCOD, which invited us to radically rethink the ergonomics of an interface by breaking established conventions. Our concept: transform the interface itself into a living metaphor of obsolescence, making it progressively degrade to make users feel the problem rather than just talking about it.",

        progress_list: [
            "<strong>Radial circular navigation</strong> eliminating position biases of vertical lists",
            "<strong>System of 17 cumulative degradations</strong> worsening with each wrong answer",
            "<strong>Abolition of going back</strong> to reflect the irreversibility of obsolescence",
            "<strong>\"System health\" bar</strong> regressing instead of a progress bar",
            "<strong>7 levels of progressive degradation</strong> simulating system aging",
            "<strong>Simulated Chrome 404 page</strong> as the final state of total obsolescence",
            "<strong>Vanilla technologies</strong> (HTML5, CSS3, pure JavaScript) for rapid iteration",
            "<strong>Modern initial design</strong> (glassmorphism, gradients) making degradation more striking"
        ],

        challenges_list: [
            "<strong>Balance friction/usability</strong>: create a degraded but functional interface",
            "<strong>Cascading CSS architecture</strong>: manage cumulative degradations without conflicts",
            "<strong>Development under pressure</strong>: rapid decisions and prioritization in a timed context",
            "<strong>Assumed accessibility compromises</strong>: justify discomfort as a pedagogical tool"
        ],

        skills_list: [
            "<strong>Inverted design thinking and subversive UX</strong>",
            "<strong>Advanced CSS architecture and cumulative effects</strong>",
            "<strong>Rapid development and decision-making under pressure</strong>",
            "<strong>Experiential pedagogy and interactive storytelling</strong>",
            "<strong>Intensive pair collaboration</strong>"
        ],

        conclusion_text: "Our approach won first place in the Hair'Gonomie challenge among 72 teams, validating our concept of interface as a pedagogical vector. By intentionally creating user friction, we transformed a simple quiz into an immersive experience: the user does not read about planned obsolescence, they live it and feel it. This achievement perfectly illustrates the NIRD project's mission of raising awareness about responsible and sustainable digital issues.",

        see_on_github: "View on GitHub",
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
        portfolio_learning: "Portfolio d'apprentissage",
        project_context: "Contexte",
        project_progress: "Déroulement du projet",
        technical_challenges: "Défis techniques",
        skills_acquired: "Compétences acquises",
        conclusion: "Conclusion",

        // Project specific
        project_title: "Nuit de l'Info 2025 - NIRD Quiz",
        first_place_badge: "🏆 1ère place du défi Hair'Gonomie (72 équipes participantes)",
        context_text_p1: "La Nuit de l'Info est un hackathon national se déroulant sur une nuit entière (4-5 décembre 2025). J'ai formé une équipe de deux développeurs avec Alexandre SIMONGIOVANNI pour créer une application web sensibilisant à l'obsolescence programmée et aux alternatives durables (Linux, logiciels libres) pour les établissements scolaires.",
        context_text_p2: "Nous avons relevé le défi \"Hair'Gonomie\" proposé par CAPCOD, qui nous invitait à repenser radicalement l'ergonomie d'une interface en cassant les conventions établies. Notre concept : transformer l'interface elle-même en métaphore vivante de l'obsolescence, en la faisant se dégrader progressivement pour faire ressentir le problème plutôt que d'en parler.",

        progress_list: [
            "<strong>Navigation circulaire radiale</strong> éliminant les biais de position des listes verticales",
            "<strong>Système de 17 dégradations cumulatives</strong> s'aggravant à chaque mauvaise réponse",
            "<strong>Abolition du retour arrière</strong> pour refléter l'irréversibilité de l'obsolescence",
            "<strong>Barre de \"santé du système\"</strong> régressant au lieu d'une barre de progression",
            "<strong>7 niveaux de dégradation progressive</strong> simulant le vieillissement d'un système",
            "<strong>Page 404 Chrome simulée</strong> comme état final d'obsolescence totale",
            "<strong>Technologies vanilla</strong> (HTML5, CSS3, JavaScript pur) pour une itération rapide",
            "<strong>Design moderne initial</strong> (glassmorphism, gradients) rendant la dégradation plus frappante"
        ],

        challenges_list: [
            "<strong>Équilibre friction/utilisabilité</strong> : créer une interface dégradée mais fonctionnelle",
            "<strong>Architecture CSS en cascade</strong> : gérer l'accumulation des dégradations sans conflits",
            "<strong>Développement sous pression</strong> : décisions rapides et priorisation dans un contexte chronométré",
            "<strong>Compromis d'accessibilité assumés</strong> : justifier l'inconfort comme outil pédagogique"
        ],

        skills_list: [
            "<strong>Design thinking inversé et UX subversive</strong>",
            "<strong>Architecture CSS avancée et effets cumulatifs</strong>",
            "<strong>Développement rapide et prise de décision sous pression</strong>",
            "<strong>Pédagogie expérientielle et narration interactive</strong>",
            "<strong>Collaboration intensive en binôme</strong>"
        ],

        conclusion_text: "Notre approche a remporté la première place du défi Hair'Gonomie parmi 72 équipes, validant notre concept d'interface comme vecteur pédagogique. En créant intentionnellement de la friction utilisateur, nous avons transformé un simple quiz en expérience immersive : l'utilisateur ne lit pas sur l'obsolescence programmée, il la vit et la ressent. Cette réalisation illustre parfaitement la mission du projet NIRD de sensibilisation aux enjeux du numérique responsable et durable.",

        see_on_github: "Voir sur GitHub",
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

            // Gestion des listes
            if (element.tagName === 'UL') {
                const translationKey = translations[lang][key];
                if (Array.isArray(translationKey)) {
                    element.innerHTML = '';
                    translationKey.forEach(item => {
                        const li = document.createElement('li');
                        li.innerHTML = item; // Using innerHTML to support <strong> tags
                        li.className = 'challenge-list';
                        element.appendChild(li);
                    });
                }
            }
            // Gestion des éléments de liste individuels
            else if (element.tagName === 'LI') {
                const keys = key.split('.');
                let translation = translations[lang];
                for (const k of keys) {
                    translation = translation[k];
                }
                if (translation) {
                    element.innerHTML = translation; // Using innerHTML to support <strong> tags
                }
            }
            // Gestion du texte normal
            else {
                const translation = translations[lang][key];
                if (translation) {
                    element.textContent = translation;
                }
            }
        });
    }

    languageSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    // Charge la langue sauvegardée ou par défaut
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'fr';
    languageSelect.value = savedLanguage;
    updateContent(savedLanguage);
});
