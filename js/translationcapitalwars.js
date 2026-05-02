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
        project_title: "Capital Wars - Multiplayer Business Management Game",

        context_text_p1: "As part of the SAE for semester 5 of my BUT Informatique IAMSI at IUT Montpellier, I co-developed Capital Wars, a multiplayer online business management game. This project represents the most ambitious achievement of my training: designing from scratch a complete, robust, and scalable web platform over one full academic year (2025–2026).",
        context_text_p2: "Built by a team of four developers (Andriamihaja Manu, Julien Garcia, Raphaël Lambert, Alexis Michaux-Kinet), supervised by Antoine Chollet, Capital Wars simulates competition between virtual companies specialized in manufacturing. Players make strategic decisions about production, human resources, marketing, and finance in a dynamic, competitive market.",
        context_text_p3: "The core innovation is its modular plugin architecture: a stable core handles base features, while independent modules (DLC) enrich the game without impacting the main engine. This approach ensures scalability, pedagogical flexibility, and long-term maintainability.",

        phase_core_title: "Core Features",
        phase_core_desc: "Capital Wars is built on Symfony 6.4 / PHP 8.1 with Doctrine ORM and MySQL. The MVCS architecture ensures a clear separation between business entities, application logic, and Twig presentation.",

        core_list: [
            "Multiplayer lobby system: creation, administration, participant management (4 to 6 companies)",
            "Turn-based game engine: simulation of 2 to 30 management sessions of 1 to 4 hours each",
            "Decision sheet: production management, factories, human resources, financing",
            "Complete financial system: Balance Sheet, Income Statement, bank loans, Strategic Objectives",
            "Quest system and gamification: categorized missions (Economic, Social, Industrial) with XP points",
            "Administrator dashboard: real-time KPIs, user/lobby/period management and platform settings",
            "Custom error pages (404, 403, 500) and contact form with Discord webhook",
            "Floating support chat accessible on all pages"
        ],

        phase_plugins_title: "Plugin System",
        phase_plugins_desc: "The plugin architecture is the main technical value of the project. Each plugin implements SOLID interfaces (contributeToBilan, contributeToResultat, contributeToDecision) and has an automatic generation command via make:plugin. The organizer can enable/disable plugins and configure their features individually via 3 preset packs (Basic, Standard, Advanced).",

        phase_plugins_func_title: "Feature Plugins",
        phase_plugins_fun_title: "Fun Plugins",
        phase_quality_title: "Quality & Project Management",

        plugin_bourse: "Stock Market  Complete financial market: share issuance, share buyback, hostile takeover (OPA), bond issuance, stock split, credit rating (AAA → D) and dividends. Randomly generated fictitious companies feed the market.",
        plugin_chat: "Chat  Real-time messaging via AJAX polling: general lobby chat and private conversations between players. A dedicated ChatController manages message creation and retrieval.",
        plugin_placement: "Factory Placement  Three location types (Locality, Low Costy, Premiumy) influencing productivity, workforce, operations, marketing and construction coefficients. Direct impact on the Income Statement.",
        plugin_rh: "HR Characters  Job market with 9 types of special characters (HR Director, Manager, Coach, Researcher, Marketing Expert, Accountant, Headhunter, Marketing, Construction Expert). Each character provides passive or active bonuses, can be trained to level up stars and affects finances.",
        plugin_events: "Random Events (PESTEL)  Macroeconomic risk management system: 6 disasters following the PESTEL model (Political, Economic, Social, Technological, Environmental, Legal). Each disaster has specific impacts attenuated by a per-company resilience index. Configurable multi-risk insurance system.",
        plugin_hippique: "Horse Racing  Entertainment module allowing companies to bet on horse races and diversify their financial strategies.",

        quality_list: [
            "Agile Scrum methodology: sprints, daily standups, sprint reviews and retrospectives",
            "GitHub: priority-tagged backlog, Kanban board, issues and automated creation workflow",
            "PHPUnit tests with mocks and stubs, GitHub Actions CI/CD (main and development branches)",
            "SonarQube: code quality analysis with 60% coverage",
            "Discord: daily recaps, maintenance/merge/test notifications and document centralization"
        ],

        challenges_list: [
            "Designing the modular plugin architecture respecting SOLID principles: multiple interfaces (PluginBilanContributorInterface, PluginResultatContributorInterface, DecisionsContribute), dynamic activation via JSON in database and make:plugin command for automatic skeleton generation",
            "Modeling a complex database: ~20 interconnected entities (Lobby, Company, GamePeriod, Decision, Result, Balance Sheet, Loan, StrategicObjective, Factory, Quests, and all plugin entities) with strict isolation constraints between core and plugins",
            "Multi-entity financial system: automatic calculation of Income Statement and Balance Sheet at each period end by aggregating contributions from all decisions, factories and active plugins, with depreciation, interest and profit carry-forward management",
            "Stock Market plugin: duplicating Company entities into StockCompany (real or fictitious), managing variable stock prices, hostile takeovers with majority stake calculation, bonds with periodic interest and dynamic credit rating (AAA → D) impacting loan rates",
            "PESTEL Events plugin: random disaster generation based on configurable probability, multi-dimensional resilience index calculation per company, differentiated impact application based on resilience and multiple disasters per period management",
            "Real-time chat via AJAX polling without WebSocket: synchronizing public/private messages without page reload, conversation management via ChatController with JSON responses",
            "Server infrastructure: hosting two distinct services (Symfony app + MySQL DB) on personal server, Docker deployment and production environment configuration"
        ],

        skills_list: [
            "Advanced software architecture: modular design, SOLID principles, design patterns (Plugin, Strategy, Observer), responsibility separation in MVCS layers",
            "Expert Symfony 6.4: Security, Doctrine ORM, Twig Extensions, custom Form Types, console commands, Event Listeners, custom Attributes",
            "Complex data modeling: ~20-entity relational schema, versioned Doctrine migrations, query optimization and Many-to-Many relationship management with junction tables",
            "Agile Scrum project management: planned sprints, GitHub backlog, daily standups, CI/CD with GitHub Actions",
            "Software quality: PHPUnit tests (unit and functional) with mocks/stubs, SonarQube analysis (60% coverage), systematic code review",
            "Economic simulation and financial mathematics: implementation of accounting formulas (Balance Sheet, Income Statement), stock market modeling, PESTEL risk calculation and resilience indices",
            "Collaborative teamwork in a group of 4: coordination via Discord and GitHub, responsibility sharing across distinct functional domains (individual plugins) and cross-reviews"
        ],

        conclusion_text_p1: "Capital Wars is the most ambitious and complete project of my BUT Informatique journey. It allowed me to apply the full range of skills accumulated over three years: advanced software architecture, full-stack Symfony development, Agile project management, software quality practices, and collaborative teamwork in a group of 4.",
        conclusion_text_p2: "Designing the plugin system  built to respect SOLID principles while remaining open to extension  is the technical achievement I am most proud of. It demonstrates my ability to design scalable architectures that respond to complex, evolving requirements. This project, deployed and accessible in public alpha, is the concrete proof of my technical maturity as a web developer.",

        see_on_github: "View on GitHub",
        link_to_project: "Link to the project",
        link_report_tech: "Technical Report",
        link_report_plugins: "Plugins Report",
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
        project_title: "Capital Wars - Jeu de Gestion d'Entreprise Multijoueur",

        context_text_p1: "Dans le cadre de la SAE du semestre 5 de mon BUT Informatique option IAMSI à l'IUT de Montpellier, j'ai co-développé Capital Wars, un jeu de gestion d'entreprise multijoueur en ligne. Ce projet représente la réalisation la plus ambitieuse de ma formation : concevoir de A à Z une plateforme web complète, robuste et évolutive sur une durée d'un an académique (2025–2026).",
        context_text_p2: "Réalisé en équipe de quatre développeurs (Andriamihaja Manu, Julien Garcia, Raphaël Lambert, Alexis Michaux-Kinet), encadrés par M. Antoine Chollet, Capital Wars simule la concurrence entre entreprises virtuelles spécialisées dans la fabrication de produits manufacturés. Les joueurs prennent des décisions stratégiques sur la chaîne de production, les ressources humaines, le marketing et la finance dans un marché compétitif.",
        context_text_p3: "L'innovation centrale du projet est son architecture modulaire par plugins : un noyau stable gère les fonctionnalités de base, et des modules indépendants (DLC) viennent enrichir le jeu sans impacter le moteur principal. Cette approche garantit évolutivité, flexibilité pédagogique et maintenabilité à long terme.",

        phase_core_title: "Fonctionnalités du noyau",
        phase_core_desc: "Le cœur de Capital Wars repose sur Symfony 6.4 / PHP 8.1 avec Doctrine ORM et MySQL. L'architecture MVCS garantit une séparation claire entre entités métier, logique applicative et présentation via Twig.",

        core_list: [
            "Système de lobbies multijoueurs : création, administration, gestion des participants (4 à 6 entreprises)",
            "Moteur de jeu par périodes : simulation de 2 à 30 sessions de gestion de 1 à 4h chacune",
            "Feuille de décision : gestion de la production, des usines, des ressources humaines, du financement",
            "Système financier complet : Bilan, Compte de Résultat, Prêts bancaires, Objectifs Stratégiques",
            "Système de Quêtes et gamification : missions catégorisées (Économique, Social, Industriel) avec points d'XP",
            "Tableau de bord administrateur : KPIs en temps réel, gestion des utilisateurs, lobbies, périodes et paramètres",
            "Pages d'erreur personnalisées (404, 403, 500) et formulaire de contact avec webhook Discord",
            "Chat flottant de support accessible sur toutes les pages"
        ],

        phase_plugins_title: "Système de Plugins",
        phase_plugins_desc: "L'architecture de plugins est la valeur technique principale du projet. Chaque plugin implémente des interfaces SOLID (contributeToBilan, contributeToResultat, contributeToDecision) et dispose d'une commande de génération automatique via make:plugin. L'organisateur peut activer/désactiver les plugins et configurer leurs fonctionnalités individuellement via 3 packs prédéfinis (Basic, Standard, Advanced).",

        phase_plugins_func_title: "Plugins fonctionnalité",
        phase_plugins_fun_title: "Plugins fun",
        phase_quality_title: "Qualité & Gestion de Projet",

        plugin_bourse: "Bourse  Marché boursier complet : émission d'actions, rachat (share buyback), OPA hostile, émission d'obligations, fractionnement d'actions (split), notation de crédit (AAA → D) et dividendes. Les entreprises fictives générées aléatoirement alimentent le marché.",
        plugin_chat: "Chat  Messagerie temps réel par polling AJAX : chat général du lobby et conversations privées entre joueurs. Un ChatController dédié gère la création et la récupération des messages.",
        plugin_placement: "Placement des Usines  Trois types d'emplacements (Locality, Low Costy, Premiumy) influençant les coefficients de productivité, main-d'œuvre, exploitation, marketing et construction. Impact direct sur le Compte de Résultat.",
        plugin_rh: "Personnage RH  Marché de l'emploi avec 9 types de personnages spéciaux (Directeur RH, Manager, Coach, Chercheur, Publicitaire, Comptable, Chasseur de Têtes, Marketing, Expert Construction). Chaque personnage apporte des bonus passifs ou actifs, peut être formé pour monter en étoiles et affecte les finances.",
        plugin_events: "Événements Aléatoires (PESTEL)  Système de gestion des risques macroéconomiques : 6 catastrophes selon le modèle PESTEL (Politique, Économique, Social, Technologique, Environnemental, Légal). Chaque catastrophe a des impacts spécifiques atténués par un indice de résilience calculé par entreprise. Système d'assurance multi-risques configurable.",
        plugin_hippique: "Paris Hippiques  Module de divertissement permettant aux entreprises de parier sur des courses hippiques et diversifier leurs stratégies financières.",

        quality_list: [
            "Méthodologie Agile Scrum : sprints, mêlées quotidiennes, revues et rétrospectives de sprint",
            "GitHub : backlog avec tags de priorité, tableau Kanban, issues et workflow automatisé de création",
            "Tests PHPUnit avec mocks et stubs, GitHub Actions CI/CD (branches main et development)",
            "SonarQube : analyse de qualité de code avec couverture à 60%",
            "Discord : récaps journaliers, notifications de maintenance, merge, tests automatisés et centralisation des documents"
        ],

        challenges_list: [
            "Conception de l'architecture modulaire par plugins respectant les principes SOLID : interfaces multiples (PluginBilanContributorInterface, PluginResultatContributorInterface, DecisionsContribute), activation dynamique via JSON en base de données et commande make:plugin pour la génération automatique du squelette",
            "Modélisation d'une base de données complexe : ~20 entités interconnectées (Lobby, Entreprise, PeriodeDeJeu, Décision, Résultat, Bilan, Prêt, ObjectifStratégique, Usine, Quêtes, et toutes les entités des plugins) avec des contraintes d'isolation strictes entre le noyau et les plugins",
            "Système financier multi-entités : calcul automatique du Compte de Résultat et du Bilan à chaque fin de période en agrégeant les contributions de toutes les décisions, usines et plugins actifs, avec gestion des amortissements, intérêts et report de résultat",
            "Plugin Bourse : dupliquer les entités Entreprise en EntrepriseBourse (réelle ou fictive), gérer les cours boursiers variables, les OPA hostiles avec calcul de part majoritaire, les obligations avec intérêts périodiques et la notation de crédit dynamique (AAA → D) impactant les taux d'emprunt",
            "Plugin Événements PESTEL : génération aléatoire de catastrophes selon probabilité configurable, calcul des indices de résilience multi-dimensionnels par entreprise, application différenciée des impacts selon la résilience et gestion des catastrophes multiples par période",
            "Chat temps réel par polling AJAX sans WebSocket : synchronisation des messages public/privé sans rechargement de page, gestion des conversations via ChatController avec réponses JSON",
            "Infrastructure serveur : hébergement des deux services distincts (application Symfony + BDD MySQL) sur serveur personnel, déploiement Docker et configuration de l'environnement de production"
        ],

        skills_list: [
            "Architecture logicielle avancée : conception modulaire, principes SOLID, design patterns (Plugin, Strategy, Observer), séparation des responsabilités en couches MVCS",
            "Symfony 6.4 expert : Security, Doctrine ORM, Twig Extensions, Form Types personnalisés, Commandes console, Event Listeners, Attributs personnalisés",
            "Modélisation de données complexes : schéma relationnel à ~20 entités, migrations Doctrine versionnées, optimisation des requêtes et gestion des relations Many-to-Many avec tables de liaison",
            "Gestion de projet Agile Scrum : sprints planifiés, backlog GitHub, mêlées quotidiennes, intégration continue CI/CD avec GitHub Actions",
            "Qualité logicielle : tests PHPUnit (unitaires et fonctionnels) avec mocks/stubs, analyse SonarQube (couverture 60%), revue de code systématique",
            "Simulation économique et mathématiques financières : implémentation des formules comptables (Bilan, Compte de Résultat), modélisation boursière, calcul de risques PESTEL et indices de résilience",
            "Travail collaboratif en équipe de 4 : coordination via Discord et GitHub, partage de responsabilités sur des domaines fonctionnels distincts (plugins individuels) et revues croisées"
        ],

        conclusion_text_p1: "Capital Wars est le projet le plus ambitieux et complet de mon parcours en BUT Informatique. Il m'a permis de mettre en pratique l'intégralité des compétences accumulées sur trois ans : architecture logicielle avancée, développement full-stack Symfony, gestion de projet Agile, qualité logicielle et travail collaboratif en équipe de 4.",
        conclusion_text_p2: "La conception du système de plugins, pensé pour respecter les principes SOLID tout en restant accessible à l'extension, est la réalisation technique dont je suis le plus fier. Elle démontre ma capacité à concevoir des architectures évolutives répondant à des besoins complexes et changeants. Ce projet, déployé et accessible en version alpha publique, constitue la preuve concrète de ma maturité technique en tant que développeur web.",

        see_on_github: "Voir sur GitHub",
        link_to_project: "Lien vers le projet",
        link_report_tech: "Rapport Technique",
        link_report_plugins: "Rapport Plugins",
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

            // Gestion des listes avec tableau
            if (element.tagName === 'UL') {
                const translationKey = translations[lang][key];
                if (Array.isArray(translationKey)) {
                    element.innerHTML = '';
                    translationKey.forEach(item => {
                        const li = document.createElement('li');
                        li.innerHTML = item;
                        li.className = 'challenge-list';
                        element.appendChild(li);
                    });
                }
            }
            // Gestion des éléments de liste individuels (dot notation)
            else if (element.tagName === 'LI') {
                const keys = key.split('.');
                let translation = translations[lang];
                for (const k of keys) {
                    if (translation === undefined) break;
                    translation = translation[k];
                }
                if (translation) {
                    element.innerHTML = translation;
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
