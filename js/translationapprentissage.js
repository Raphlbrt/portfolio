const translations = {
    en: {
        // Navigation and general elements
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        portfolio_learning: "Learning Portfolio",
        portfolio_title: "Learning Portfolio",
        footer_copyright: "© Copyright Raphaël Lambert 2024 | Designed by Raphaël Lambert",

        // Navigation sidebar
        nav_introduction: "Introduction",
        nav_optimiser: "\"Optimize\" Competency",
        nav_administrer: "\"Administer\" Competency",
        nav_gerer: "\"Manage\" Competency",
        nav_conclusion: "Conclusion",

        // Introduction section
        intro_title: "Reflective Analysis of Level 2 Competencies",
        intro_p1: "In this essential section of my portfolio, I present a reflective and critical analysis of the competencies acquired during my Bachelor's degree in Computer Science with a specialization in IAMSI (Integration of Applications and Management of Information Systems). I will focus particularly on the three competencies that culminate at level 2 in this program, demonstrating through concrete evidence and structured argumentation how I developed and validated these learning outcomes.",
        intro_p2: "This approach is part of a rigorous documentation of my professional development trajectory, where each competency is linked to tangible evidence from my various professional experiences.",
        intro_p3: "In the IAMSI program, three competencies stop at level 2:",
        intro_competence1: "<strong>Optimize</strong> (Level 2: Selecting appropriate algorithms to solve a given problem)",
        intro_competence2: "<strong>Administer</strong> (Level 2: Deploying services in a network architecture)",
        intro_competence3: "<strong>Manage</strong> (Level 2: Optimize a database, interact with an application and implement security)",

        // Optimiser (Optimize) section
        optimiser_title: "1. \"Optimize\" Competency (Level 2)",

        optimiser_ac1_title: "LC1: Choose complex data structures adapted to the problem",
        optimiser_ac1_ce: "formalizing and modeling complex situations (EC2.01)",
        optimiser_ac1_projet1_title: "'Trains' Game Development",
        optimiser_ac1_projet1_text: "To effectively represent the game board and railway connections, I implemented a weighted graph structure, where each node represented a city and each edge a potential connection. This approach required precise formalization and allowed me to efficiently manage optimal path calculations.",
        optimiser_ac1_projet2_title: "Database for Music Streaming",
        optimiser_ac1_projet2_text: "I designed an entity-relationship model capable of representing complex relationships between artists, albums, tracks, and playlists. The modeling of hierarchies in playlists particularly required deep thinking about the most suitable data structures.",

        optimiser_ac2_title: "LC2: Use algorithmic techniques adapted for complex problems",
        optimiser_ac2_ce: "based on reasoning schemes (EC2.03)",
        optimiser_ac2_projet1_title: "'Trains' Game",
        optimiser_ac2_projet1_text: "I implemented Dijkstra's algorithm to calculate optimal paths between cities, taking into account different optimization criteria (distance, cost, time). This implementation allowed me to understand the subtleties of graph traversal algorithms and appreciate their power in solving concrete problems.",
        optimiser_ac2_projet2_title: "CTFD Project",
        optimiser_ac2_projet2_text: "I designed several cybersecurity challenges requiring sophisticated algorithms, including a steganography challenge using PNG chunk manipulation. This experience pushed me to explore advanced algorithmic techniques and understand their application in a computer security context.",

        optimiser_ac3_title: "LC3: Understand the issues and means of securing data and code",
        optimiser_ac3_ce: "justifying choices and validating results (EC2.04)",
        optimiser_ac3_projet1_title: "E-commerce Project",
        optimiser_ac3_projet1_text: "I implemented a robust authentication system including protections against brute force attacks, and I ensured the security of transactions and user data. This work made me aware of the crucial importance of security in modern web development.",
        optimiser_ac3_projet2_title: "DSIN Internship",
        optimiser_ac3_projet2_text: "I implemented encryption mechanisms for sensitive data and secured interaction with the university LDAP. These practical experiences consolidated my understanding of the fundamental principles of computer security.",

        optimiser_ac4_title: "LC4: Evaluate the environmental and societal impact of proposed solutions",
        optimiser_ac4_ce: "justifying choices and validating results (EC2.04)",
        optimiser_ac4_projet1_title: "Controversy Project",
        optimiser_ac4_projet1_text: "This project offered me the opportunity to reflect on the ethical and societal implications of digital technologies, particularly regarding the tension between privacy and national security. This reflection made me aware of the importance of a responsible approach in technological development.",
        optimiser_ac4_projet2_title: "Charlie's Festival Adventure",
        optimiser_ac4_projet2_text: "We integrated an environmental dimension by optimizing the technical infrastructure to reduce the carbon footprint of the event. This approach made me aware of developers' responsibility in designing sustainable solutions.",

        // Administrer (Administer) section
        administrer_title: "2. \"Administer\" Competency (Level 2)",

        administrer_ac1_title: "LC1: Design and develop communicating applications",
        administrer_ac1_ce: "securing the information system (EC3.01)",
        administrer_ac1_projet1_title: "CTFD Project for Yggame",
        administrer_ac1_projet1_text: "I had to integrate the CTFd platform with Docker containers hosting the various challenges, establishing secure communication mechanisms. This experience allowed me to understand the issues of interoperability and securing exchanges between components of a distributed system.",
        administrer_ac1_projet2_title: "DSIN Internship",
        administrer_ac1_projet2_text: "I developed communication modules with external APIs (notably Ivanti for IT equipment inventory), implementing advanced authentication mechanisms and error handling. This work confronted me with the real challenges of communicating applications in a business environment.",

        administrer_ac2_title: "LC2: Use virtualized servers and network services",
        administrer_ac2_ce: "offering optimal service quality (EC3.02)",
        administrer_ac2_projet1_title: "CTFD Project",
        administrer_ac2_projet1_text: "I deployed the CTFd platform and its challenges on a VPS server using Docker, creating a modular environment where each challenge was isolated in its own container. This approach made me discover the considerable advantages of containerization in terms of flexibility, isolation, and reproducibility of environments.",
        administrer_ac2_projet2_title: "DSIN Internship",
        administrer_ac2_projet2_text: "I used the DDev tool to create a containerized development environment specific to the Drupal ecosystem. This experience allowed me to appreciate how virtualization can standardize development environments and eliminate compatibility issues.",

        administrer_ac3_title: "LC3: Secure system services and data",
        administrer_ac3_ce: "securing the information system (EC3.01) and applying current standards (EC3.03)",
        administrer_ac3_projet1_title: "E-commerce Project",
        administrer_ac3_projet1_text: "I implemented various security measures to protect sensitive user data, including an email validation system for registration and protections against brute force attacks. This work made me aware of the importance of personal data security and developers' responsibility in their protection.",
        administrer_ac3_projet2_title: "DSIN Internship",
        administrer_ac3_projet2_text: "I had to rigorously apply security standards in force in the university context, particularly for academic data management and LDAP synchronization. This experience made me understand the importance of aligning security practices with existing regulatory frameworks.",

        // Gérer (Manage) section
        gerer_title: "3. \"Manage\" Competency (Level 2)",

        gerer_ac1_title: "LC1: Optimize enterprise data models",
        gerer_ac1_ce: "respecting regulations on privacy and personal data protection (EC4.01)",
        gerer_ac1_projet1_title: "Database for Music Streaming",
        gerer_ac1_projet1_text: "I designed and optimized a complex data model for a music streaming application, integrating performance constraints and user data confidentiality. Database normalization and query optimization were at the heart of my work, while respecting personal data protection principles according to GDPR.",
        gerer_ac1_projet2_title: "DSIN Internship - SAPIENS Migration",
        gerer_ac1_projet2_text: "During the migration from Drupal 7 to Drupal 10, I restructured and optimized existing data models to improve performance and security. I particularly worked on optimizing inventory data access queries and implementing stratified cache mechanisms.",

        gerer_ac2_title: "LC2: Ensure data confidentiality (integrity and security)",
        gerer_ac2_ce: "respecting economic, societal and ecological issues (EC4.02)",
        gerer_ac2_projet1_title: "E-commerce Project",
        gerer_ac2_projet1_text: "I implemented a complete secure client data management system, including encryption of sensitive information, input data validation and the implementation of audit mechanisms to trace access to personal data. Particular attention was paid to the balance between security and performance.",
        gerer_ac2_projet2_title: "CTFD Project",
        gerer_ac2_projet2_text: "In the context of developing cybersecurity challenges, I implemented robust participant data protection mechanisms, while managing performance aspects to support a significant load of simultaneous users. This experience made me aware of data protection issues in a competitive context.",

        gerer_ac3_title: "LC3: Organize data restitution through programming and visualization",
        gerer_ac3_ce: "based on mathematical foundations (EC4.03)",
        gerer_ac3_projet1_title: "Database for Music Streaming",
        gerer_ac3_projet1_text: "I developed complex views and advanced statistical queries to analyze listening data, including calculations of median, standard deviation and correlations. These analyses were made accessible via interactive dashboards allowing clear visualization of musical trends.",
        gerer_ac3_projet2_title: "Charlie's Festival Adventure",
        gerer_ac3_projet2_text: "I designed and developed visualization tools for tracking registrations and tournament management, using graphical representation techniques to facilitate decision-making. Data was organized in the form of Gantt charts and performance graphs to optimize event planning.",

        gerer_ac4_title: "LC4: Manipulate heterogeneous data",
        gerer_ac4_ce: "ensuring consistency and quality (EC4.02)",
        gerer_ac4_projet1_title: "DSIN Internship - Data Integration",
        gerer_ac4_projet1_text: "I had to manage the integration of data from heterogeneous sources: Drupal database, Ivanti API, LDAP directory and Apogée system. This experience confronted me with the challenges of data consistency, managing different formats and synchronization between autonomous systems.",
        gerer_ac4_projet2_title: "Streaming Database Project",
        gerer_ac4_projet2_text: "I developed import and transformation mechanisms for data from heterogeneous CSV files, implementing quality controls and validation processes to ensure the consistency of integrated data. This experience taught me the importance of data quality in information systems.",

        // Conclusion section
        conclusion_title: "Conclusion",
        conclusion_p1: "The reflective analysis of my journey regarding these three fundamental competencies of the Bachelor's degree in Computer Science IAMSI program has allowed me to become aware of the progress made and skills acquired. Each project has contributed specifically to my professional development, confronting me with various challenges and pushing me to adopt innovative approaches to solve them.",
        conclusion_p2: "The diversity of application contexts, from academic projects to professional experiences during internships, has allowed me to develop a nuanced and in-depth understanding of these competencies. I particularly appreciated how each new experience enriched and transformed my understanding of theoretical concepts, anchoring them in a practical and complex reality.",
        conclusion_p3: "<strong>Regarding the \"Optimize\" competency</strong>, I have developed solid expertise in choosing and implementing complex data structures and adapted algorithms. Projects like the Trains game and cybersecurity challenges allowed me to concretely understand the issues of performance and security.",
        conclusion_p4: "<strong>For the \"Administer\" competency</strong>, my experience with containerized environments and distributed architectures has given me a clear vision of the challenges of deploying and securing modern systems. The DSIN internship and the CTFD project were particularly formative in this regard.",
        conclusion_p5: "<strong>Finally, the \"Manage\" competency</strong> proved to be a central pillar of my learning, leading me to understand the issues of data optimization, their security and their intelligent exploitation. Database projects and professional experiences allowed me to develop a holistic approach to data management.",
        conclusion_p6: "I consider that I have reached a satisfactory level in these three level 2 competencies, while remaining aware that professional development is an ongoing process. The solid foundations acquired during this journey constitute an excellent springboard for my future professional experiences and my evolution in the field of computer science, particularly in the context of application integration and information system management."
    },
    fr: {
        // Navigation and general elements
        home: "Accueil",
        about: "À propos",
        projects: "Projets",
        contact: "Contact",
        portfolio_learning: "Portfolio d'apprentissage",
        portfolio_title: "Portfolio d'Apprentissage",
        footer_copyright: "© Copyright Raphaël Lambert 2024 | Designed by Raphaël Lambert",

        // Navigation sidebar
        nav_introduction: "Introduction",
        nav_optimiser: "Compétence \"Optimiser\"",
        nav_administrer: "Compétence \"Administrer\"",
        nav_gerer: "Compétence \"Gérer\"",
        nav_conclusion: "Conclusion",

        // Introduction section
        intro_title: "Analyse Réflexive des Compétences Niveau 2",
        intro_p1: "Dans cette section essentielle de mon portfolio, je propose une analyse réflexive et critique des compétences acquises durant mon parcours en BUT Informatique parcours IAMSI (Intégration d'Applications et Management du Système d'Information). Je m'attacherai particulièrement aux trois compétences qui culminent au niveau 2 dans ce parcours, en démontrant par des preuves concrètes et une argumentation structurée comment j'ai développé et validé ces apprentissages.",
        intro_p2: "Cette démarche s'inscrit dans une perspective de documentation rigoureuse de ma trajectoire de développement professionnel, où chaque compétence est mise en relation avec des traces tangibles issues de mes différentes mises en situation professionnelle.",
        intro_p3: "Dans le parcours IAMSI, trois compétences s'arrêtent au niveau 2 :",
        intro_competence1: "<strong>Optimiser</strong> (Niveau 2 : Sélectionner les algorithmes adéquats pour répondre à un problème donné)",
        intro_competence2: "<strong>Administrer</strong> (Niveau 2 : Déployer des services dans une architecture réseau)",
        intro_competence3: "<strong>Gérer</strong> (Niveau 2 : Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité)",

        // Optimiser section
        optimiser_title: "1. Compétence \"Optimiser\" (Niveau 2)",

        optimiser_ac1_title: "AC1 : Choisir des structures de données complexes adaptées au problème",
        optimiser_ac1_ce: "en formalisant et modélisant des situations complexes (CE2.01)",
        optimiser_ac1_projet1_title: "Développement du jeu 'Trains'",
        optimiser_ac1_projet1_text: "Pour représenter efficacement le plateau de jeu et les connexions ferroviaires, j'ai implémenté une structure de graphe pondéré, où chaque nœud représentait une ville et chaque arête une connexion potentielle. Cette approche a nécessité une formalisation précise et m'a permis de gérer efficacement les calculs de chemins optimaux.",
        optimiser_ac1_projet2_title: "Base de Données pour Streaming Musical",
        optimiser_ac1_projet2_text: "J'ai conçu un modèle entité-association capable de représenter des relations complexes entre artistes, albums, morceaux et playlists. La modélisation de hiérarchies dans les playlists a particulièrement nécessité une réflexion approfondie sur les structures de données les plus adaptées.",

        optimiser_ac2_title: "AC2 : Utiliser des techniques algorithmiques adaptées pour des problèmes complexes",
        optimiser_ac2_ce: "en s'appuyant sur des schémas de raisonnement (CE2.03)",
        optimiser_ac2_projet1_title: "Jeu 'Trains'",
        optimiser_ac2_projet1_text: "J'ai implémenté l'algorithme de Dijkstra pour calculer les chemins optimaux entre les villes, en prenant en compte différents critères d'optimisation (distance, coût, temps). Cette implémentation m'a permis de comprendre les subtilités des algorithmes de parcours de graphes et d'apprécier leur puissance dans la résolution de problèmes concrets.",
        optimiser_ac2_projet2_title: "Projet CTFD",
        optimiser_ac2_projet2_text: "J'ai conçu plusieurs défis de cybersécurité nécessitant des algorithmes sophistiqués, notamment un défi de stéganographie utilisant la manipulation des chunks PNG. Cette expérience m'a poussé à explorer des techniques algorithmiques avancées et à comprendre leur application dans un contexte de sécurité informatique.",

        optimiser_ac3_title: "AC3 : Comprendre les enjeux et moyens de sécurisation des données et du code",
        optimiser_ac3_ce: "en justifiant les choix et validant les résultats (CE2.04)",
        optimiser_ac3_projet1_title: "Projet E-commerce",
        optimiser_ac3_projet1_text: "J'ai implémenté un système d'authentification robuste incluant des protections contre les attaques par force brute, et j'ai veillé à sécuriser les transactions et les données utilisateur. Ce travail m'a sensibilisé à l'importance cruciale de la sécurité dans le développement web moderne.",
        optimiser_ac3_projet2_title: "Stage DSIN",
        optimiser_ac3_projet2_text: "J'ai mis en œuvre des mécanismes de chiffrement pour les données sensibles et sécurisé l'interaction avec le LDAP universitaire. Ces expériences pratiques ont consolidé ma compréhension des principes fondamentaux de la sécurité informatique.",

        optimiser_ac4_title: "AC4 : Évaluer l'impact environnemental et sociétal des solutions proposées",
        optimiser_ac4_ce: "en justifiant les choix et validant les résultats (CE2.04)",
        optimiser_ac4_projet1_title: "Projet Controverse",
        optimiser_ac4_projet1_text: "Ce projet m'a offert l'opportunité de réfléchir aux implications éthiques et sociétales des technologies numériques, notamment concernant la tension entre vie privée et sécurité nationale. Cette réflexion m'a sensibilisé à l'importance d'une démarche responsable dans le développement technologique.",
        optimiser_ac4_projet2_title: "Charlie's Festival Adventure",
        optimiser_ac4_projet2_text: "Nous avons intégré une dimension environnementale en optimisant l'infrastructure technique pour réduire l'empreinte carbone de l'événement. Cette approche m'a fait prendre conscience de la responsabilité des développeurs dans la conception de solutions durables.",

        // Administrer section
        administrer_title: "2. Compétence \"Administrer\" (Niveau 2)",

        administrer_ac1_title: "AC1 : Concevoir et développer des applications communicantes",
        administrer_ac1_ce: "en sécurisant le système d'information (CE3.01)",
        administrer_ac1_projet1_title: "Projet CTFD pour Yggame",
        administrer_ac1_projet1_text: "J'ai dû intégrer la plateforme CTFd avec les conteneurs Docker hébergeant les différents défis, en établissant des mécanismes de communication sécurisés. Cette expérience m'a permis de comprendre les enjeux de l'interopérabilité et de la sécurisation des échanges entre composants d'un système distribué.",
        administrer_ac1_projet2_title: "Stage DSIN",
        administrer_ac1_projet2_text: "J'ai développé des modules de communication avec des API externes (notamment Ivanti pour l'inventaire du matériel informatique), en implémentant des mécanismes d'authentification avancés et de gestion des erreurs. Ce travail m'a confronté aux défis réels des applications communicantes en environnement d'entreprise.",

        administrer_ac2_title: "AC2 : Utiliser des serveurs et des services réseaux virtualisés",
        administrer_ac2_ce: "en offrant une qualité de service optimale (CE3.02)",
        administrer_ac2_projet1_title: "Projet CTFD",
        administrer_ac2_projet1_text: "J'ai déployé la plateforme CTFd et ses défis sur un serveur VPS en utilisant Docker, créant un environnement modulaire où chaque défi était isolé dans son propre conteneur. Cette approche m'a fait découvrir les avantages considérables de la conteneurisation en termes de flexibilité, d'isolation et de reproductibilité des environnements.",
        administrer_ac2_projet2_title: "Stage DSIN",
        administrer_ac2_projet2_text: "J'ai utilisé l'outil DDev pour créer un environnement de développement conteneurisé spécifique à l'écosystème Drupal. Cette expérience m'a permis d'apprécier comment la virtualisation peut standardiser les environnements de développement et éliminer les problèmes de compatibilité.",

        administrer_ac3_title: "AC3 : Sécuriser les services et données d'un système",
        administrer_ac3_ce: "en sécurisant le système d'information (CE3.01) et en appliquant les normes en vigueur (CE3.03)",
        administrer_ac3_projet1_title: "Projet E-commerce",
        administrer_ac3_projet1_text: "J'ai implémenté diverses mesures de sécurité pour protéger les données sensibles des utilisateurs, notamment un système de validation d'email pour l'inscription et des protections contre les attaques par force brute. Ce travail m'a sensibilisé à l'importance de la sécurité des données personnelles et à la responsabilité des développeurs dans leur protection.",
        administrer_ac3_projet2_title: "Stage DSIN",
        administrer_ac3_projet2_text: "J'ai dû appliquer rigoureusement les normes de sécurité en vigueur dans le contexte universitaire, notamment pour la gestion des données académiques et la synchronisation avec le LDAP. Cette expérience m'a fait comprendre l'importance d'aligner les pratiques de sécurisation avec les cadres réglementaires existants.",

        // Gérer section
        gerer_title: "3. Compétence \"Gérer\" (Niveau 2)",

        gerer_ac1_title: "AC1 : Optimiser les modèles de données de l'entreprise",
        gerer_ac1_ce: "en respectant les réglementations sur le respect de la vie privée et la protection des données personnelles (CE4.01)",
        gerer_ac1_projet1_title: "Base de Données pour Streaming Musical",
        gerer_ac1_projet1_text: "J'ai conçu et optimisé un modèle de données complexe pour une application de streaming musical, en intégrant les contraintes de performances et de confidentialité des données utilisateur. La normalisation de la base de données et l'optimisation des requêtes ont été au cœur de mon travail, tout en respectant les principes de protection des données personnelles selon le RGPD.",
        gerer_ac1_projet2_title: "Stage DSIN - Migration SAPIENS",
        gerer_ac1_projet2_text: "Lors de la migration de Drupal 7 vers Drupal 10, j'ai restructuré et optimisé les modèles de données existants pour améliorer les performances et la sécurité. J'ai particulièrement travaillé sur l'optimisation des requêtes d'accès aux données d'inventaire et la mise en place de mécanismes de cache stratifiés.",

        gerer_ac2_title: "AC2 : Assurer la confidentialité des données (intégrité et sécurité)",
        gerer_ac2_ce: "en respectant les enjeux économiques, sociétaux et écologiques (CE4.02)",
        gerer_ac2_projet1_title: "Projet E-commerce",
        gerer_ac2_projet1_text: "J'ai implémenté un système complet de gestion sécurisée des données clients, incluant le chiffrement des informations sensibles, la validation des données d'entrée et la mise en place de mécanismes d'audit pour tracer les accès aux données personnelles. Une attention particulière a été portée à l'équilibre entre sécurité et performance.",
        gerer_ac2_projet2_title: "Projet CTFD",
        gerer_ac2_projet2_text: "Dans le cadre du développement des défis de cybersécurité, j'ai mis en place des mécanismes robustes de protection des données des participants, tout en gérant les aspects de performance pour supporter une charge importante d'utilisateurs simultanés. Cette expérience m'a sensibilisé aux enjeux de protection des données dans un contexte de compétition.",

        gerer_ac3_title: "AC3 : Organiser la restitution de données à travers la programmation et la visualisation",
        gerer_ac3_ce: "en s'appuyant sur des bases mathématiques (CE4.03)",
        gerer_ac3_projet1_title: "Base de Données pour Streaming Musical",
        gerer_ac3_projet1_text: "J'ai développé des vues complexes et des requêtes statistiques avancées pour analyser les données d'écoute, incluant des calculs de médiane, d'écart-type et de corrélations. Ces analyses ont été rendues accessibles via des tableaux de bord interactifs permettant une visualisation claire des tendances musicales.",
        gerer_ac3_projet2_title: "Charlie's Festival Adventure",
        gerer_ac3_projet2_text: "J'ai conçu et développé des outils de visualisation pour le suivi des inscriptions et la gestion des tournois, en utilisant des techniques de représentation graphique pour faciliter la prise de décision. Les données étaient organisées sous forme de diagrammes de Gantt et de graphiques de performance pour optimiser la planification de l'événement.",

        gerer_ac4_title: "AC4 : Manipuler des données hétérogènes",
        gerer_ac4_ce: "en assurant la cohérence et la qualité (CE4.02)",
        gerer_ac4_projet1_title: "Stage DSIN - Intégration de données",
        gerer_ac4_projet1_text: "J'ai dû gérer l'intégration de données provenant de sources hétérogènes : base de données Drupal, API Ivanti, annuaire LDAP et système Apogée. Cette expérience m'a confronté aux défis de la cohérence des données, de la gestion des formats différents et de la synchronisation entre systèmes autonomes.",
        gerer_ac4_projet2_title: "Projet Base de Données Streaming",
        gerer_ac4_projet2_text: "J'ai développé des mécanismes d'importation et de transformation de données à partir de fichiers CSV hétérogènes, en mettant en place des contrôles de qualité et des processus de validation pour assurer la cohérence des données intégrées. Cette expérience m'a appris l'importance de la qualité des données dans les systèmes d'information.",

        // Conclusion section
        conclusion_title: "Conclusion",
        conclusion_p1: "L'analyse réflexive de mon parcours concernant ces trois compétences fondamentales du BUT Informatique parcours IAMSI m'a permis de prendre conscience du chemin parcouru et des compétences acquises. Chaque projet a contribué de manière spécifique à mon développement professionnel, me confrontant à des défis variés et me poussant à adopter des approches innovantes pour les résoudre.",
        conclusion_p2: "La diversité des contextes d'application, des projets académiques aux expériences professionnelles en stage, m'a permis de développer une compréhension nuancée et approfondie de ces compétences. J'ai particulièrement apprécié comment chaque nouvelle expérience venait enrichir et transformer ma compréhension des concepts théoriques, les ancrant dans une réalité pratique et complexe.",
        conclusion_p3: "<strong>Concernant la compétence \"Optimiser\"</strong>, j'ai développé une solide expertise dans le choix et l'implémentation de structures de données complexes et d'algorithmes adaptés. Les projets comme le jeu Trains et les défis de cybersécurité m'ont permis d'appréhender concrètement les enjeux de performance et de sécurité.",
        conclusion_p4: "<strong>Pour la compétence \"Administrer\"</strong>, mon expérience avec les environnements conteneurisés et les architectures distribuées m'a donné une vision claire des défis de déploiement et de sécurisation des systèmes modernes. Le stage DSIN et le projet CTFD ont été particulièrement formateurs à cet égard.",
        conclusion_p5: "<strong>Enfin, la compétence \"Gérer\"</strong> s'est révélée être un pilier central de mon apprentissage, m'amenant à comprendre les enjeux de l'optimisation des données, de leur sécurisation et de leur exploitation intelligente. Les projets de base de données et les expériences professionnelles m'ont permis de développer une approche holistique de la gestion des données.",
        conclusion_p6: "Je considère avoir atteint un niveau satisfaisant dans ces trois compétences de niveau 2, tout en restant conscient que le développement professionnel est un processus continu. Les bases solides acquises durant ce parcours constituent un excellent tremplin pour mes futures expériences professionnelles et mon évolution dans le domaine de l'informatique, particulièrement dans le contexte de l'intégration d'applications et du management des systèmes d'information."
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
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
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