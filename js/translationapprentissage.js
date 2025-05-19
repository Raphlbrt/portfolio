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
        nav_realiser: "\"Develop\" Competency",
        nav_optimiser: "\"Optimize\" Competency",
        nav_administrer: "\"Administer\" Competency",
        nav_conclusion: "Conclusion",

        // Introduction section
        intro_title: "Reflective Analysis of Level 2 Competencies",
        intro_p1: "In this essential section of my portfolio, I present a reflective and critical analysis of the competencies acquired during my Bachelor's degree in Computer Science with a specialization in IAMSI (Integration of Applications and Management of Information Systems). I will focus particularly on the three competencies that culminate at level 2 in this program, demonstrating through concrete evidence and structured argumentation how I developed and validated these learning outcomes.",
        intro_p2: "This approach is part of a rigorous documentation of my professional development trajectory, where each competency is linked to tangible evidence from my various professional experiences.",
        intro_p3: "In the IAMSI program, three competencies stop at level 2:",
        intro_competence1: "<strong>Develop</strong> (Level 2: Starting from requirements and going all the way to a complete application)",
        intro_competence2: "<strong>Optimize</strong> (Level 2: Selecting appropriate algorithms to solve a given problem)",
        intro_competence3: "<strong>Administer</strong> (Level 2: Deploying services in a network architecture)",

        // Realiser (Develop) section
        realiser_title: "1. \"Develop\" Competency (Level 2)",

        realiser_ac1_title: "LC1: Develop and implement functional and non-functional specifications from requirements",
        realiser_ac1_ce: "respecting the needs described by the client (EC1.01)",
        realiser_ac1_projet1_title: "E-commerce Project",
        realiser_ac1_projet1_text: "As a lead developer, I had to analyze client requirements and transform them into precise functional specifications. The <strong>shopping cart management system</strong> I developed illustrates this competency: starting from a general need (\"dynamic quantity management\"), I developed detailed specifications including automatic price updates, stock management, and user notifications.",
        realiser_ac1_projet2_title: "DSIN Internship - SA.P.I.E.N.S Migration",
        realiser_ac1_projet2_text: "I had to translate the SAPIENS system migration needs into precise technical specifications. The complexity of the project taught me to break down a global problem into distinct functional components and establish implementation priorities.",

        realiser_ac2_title: "LC2: Apply accessibility and ergonomic principles",
        realiser_ac2_ce: "respecting the needs described by the client (EC1.01)",
        realiser_ac2_projet1_title: "Controversy Project",
        realiser_ac2_projet1_text: "This project on privacy and national security made me aware of the importance of accessibility. I designed a responsive interface with particular attention to readability and intuitive navigation. This experience made me understand that ergonomics is not just a \"plus\" but a fundamental requirement to ensure an inclusive user experience.",
        realiser_ac2_projet2_title: "Charlie's Festival Adventure",
        realiser_ac2_projet2_text: "I integrated universal design principles to ensure the accessibility of festival information, particularly in the design of tournament registration modules. This attention reinforced my conviction that ergonomics is a fundamental aspect of any user-centered development.",

        realiser_ac3_title: "LC3: Adopt good design and programming practices",
        realiser_ac3_ce: "ensuring code quality and documentation (EC1.04)",
        realiser_ac3_projet1_title: "'Trains' Game Development",
        realiser_ac3_projet1_text: "I implemented a rigorous MVC architecture, with a clear separation of responsibilities between the different layers of the application. This experience allowed me to fully appreciate the benefits of good software architecture: increased maintainability, simplicity of testing, and ease of evolution.",
        realiser_ac3_projet2_title: "DSIN Internship",
        realiser_ac3_projet2_text: "I adopted rigorous quality standards for the Drupal 7 to Drupal 10 migration. The meticulous documentation of each module and the application of consistent naming conventions significantly facilitated the understanding and maintenance of the code by other developers.",

        realiser_ac4_title: "LC4: Verify and validate application quality through testing",
        realiser_ac4_ce: "choosing appropriate technical resources (EC1.06)",
        realiser_ac4_projet1_title: "CTFD Project for Yggame",
        realiser_ac4_projet1_text: "I implemented a comprehensive testing strategy for the cybersecurity challenges I developed. This methodical approach allowed me to identify and correct potential flaws before deployment, ensuring the reliability of the challenges offered to participants.",
        realiser_ac4_projet2_title: "E-commerce Project",
        realiser_ac4_projet2_text: "I implemented unit and integration tests to validate the functioning of the authentication system and shopping cart. This approach made me understand the crucial importance of testing in the development cycle, not only to detect bugs but also to document the expected behavior of the system.",

        // Optimiser (Optimize) section
        optimiser_title: "2. \"Optimize\" Competency (Level 2)",

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
        optimiser_ac3_projet2_title: "CTFD Project",
        optimiser_ac3_projet2_text: "By developing SQL injection and cookie manipulation challenges, I had to understand vulnerabilities to better exploit them in an educational context. This approach gave me a unique perspective on the issues of code and data security.",
        optimiser_ac3_projet3_title: "DSIN Internship",
        optimiser_ac3_projet3_text: "I implemented encryption mechanisms for sensitive data and secured interaction with the university LDAP. These practical experiences consolidated my understanding of the fundamental principles of computer security.",

        optimiser_ac4_title: "LC4: Evaluate the environmental and societal impact of proposed solutions",
        optimiser_ac4_ce: "justifying choices and validating results (EC2.04)",
        optimiser_ac4_projet1_title: "Controversy Project",
        optimiser_ac4_projet1_text: "This project offered me the opportunity to reflect on the ethical and societal implications of digital technologies, particularly regarding the tension between privacy and national security. This reflection made me aware of the importance of a responsible approach in technological development.",
        optimiser_ac4_projet2_title: "Charlie's Festival Adventure",
        optimiser_ac4_projet2_text: "We integrated an environmental dimension by optimizing the technical infrastructure to reduce the carbon footprint of the event. This approach made me aware of developers' responsibility in designing sustainable solutions.",

        // Administrer (Administer) section
        administrer_title: "3. \"Administer\" Competency (Level 2)",

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
        administrer_ac3_projet2_title: "Database for Music Streaming",
        administrer_ac3_projet2_text: "I set up access control and confidentiality mechanisms compliant with industry best practices, particularly regarding compliance with personal data protection regulations.",
        administrer_ac3_projet3_title: "DSIN Internship",
        administrer_ac3_projet3_text: "I had to rigorously apply security standards in force in the university context, particularly for academic data management and LDAP synchronization. This experience made me understand the importance of aligning security practices with existing regulatory frameworks.",

        // Conclusion section
        conclusion_title: "Conclusion",
        conclusion_p1: "The reflective analysis of my journey regarding these three fundamental competencies of the Bachelor's degree in Computer Science has allowed me to become aware of the progress made and skills acquired. Each project has contributed specifically to my professional development, confronting me with various challenges and pushing me to adopt innovative approaches to solve them.",
        conclusion_p2: "The diversity of application contexts, from academic projects to professional experiences during internships, has allowed me to develop a nuanced and in-depth understanding of these competencies. I particularly appreciated how each new experience enriched and transformed my understanding of theoretical concepts, anchoring them in a practical and complex reality.",
        conclusion_p3: "I consider that I have reached a satisfactory level in these three level 2 competencies, while remaining aware that professional development is an ongoing process. The solid foundations acquired during this journey constitute an excellent springboard for my future professional experiences and my evolution in the field of computer science."
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
        nav_realiser: "Compétence \"Réaliser\"",
        nav_optimiser: "Compétence \"Optimiser\"",
        nav_administrer: "Compétence \"Administrer\"",
        nav_conclusion: "Conclusion",

        // Introduction section
        intro_title: "Analyse Réflexive des Compétences Niveau 2",
        intro_p1: "Dans cette section essentielle de mon portfolio, je propose une analyse réflexive et critique des compétences acquises durant mon parcours en BUT Informatique parcours IAMSI (Intégration d'Applications et Management du Système d'Information). Je m'attacherai particulièrement aux trois compétences qui culminent au niveau 2 dans ce parcours, en démontrant par des preuves concrètes et une argumentation structurée comment j'ai développé et validé ces apprentissages.",
        intro_p2: "Cette démarche s'inscrit dans une perspective de documentation rigoureuse de ma trajectoire de développement professionnel, où chaque compétence est mise en relation avec des traces tangibles issues de mes différentes mises en situation professionnelle.",
        intro_p3: "Dans le parcours IAMSI, trois compétences s'arrêtent au niveau 2 :",
        intro_competence1: "<strong>Réaliser</strong> (Niveau 2 : Partir des exigences et aller jusqu'à une application complète)",
        intro_competence2: "<strong>Optimiser</strong> (Niveau 2 : Sélectionner les algorithmes adéquats pour répondre à un problème donné)",
        intro_competence3: "<strong>Administrer</strong> (Niveau 2 : Déployer des services dans une architecture réseau)",

        // Realiser section
        realiser_title: "1. Compétence \"Réaliser\" (Niveau 2)",

        realiser_ac1_title: "AC1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
        realiser_ac1_ce: "en respectant les besoins décrits par le client (CE1.01)",
        realiser_ac1_projet1_title: "Projet E-commerce",
        realiser_ac1_projet1_text: "En tant que développeur principal, j'ai dû analyser les besoins exprimés par le client et les transformer en spécifications fonctionnelles précises. Le <strong>système de gestion de panier</strong> que j'ai développé illustre cette compétence : partant d'un besoin général (\"gestion dynamique des quantités\"), j'ai élaboré des spécifications détaillées incluant la mise à jour automatique des prix, la gestion des stocks et les notifications utilisateur.",
        realiser_ac1_projet2_title: "Stage DSIN - Migration SA.P.I.E.N.S",
        realiser_ac1_projet2_text: "J'ai dû traduire les besoins de migration du système SAPIENS en spécifications techniques précises. La complexité du projet m'a appris à décomposer un problème global en composantes fonctionnelles distinctes et à établir des priorités d'implémentation.",

        realiser_ac2_title: "AC2 : Appliquer des principes d'accessibilité et d'ergonomie",
        realiser_ac2_ce: "en respectant les besoins décrits par le client (CE1.01)",
        realiser_ac2_projet1_title: "Projet Controverse",
        realiser_ac2_projet1_text: "Ce projet sur la vie privée et la sécurité nationale m'a sensibilisé à l'importance de l'accessibilité. J'ai conçu une interface responsive avec une attention particulière à la lisibilité et à la navigation intuitive. Cette expérience m'a fait comprendre que l'ergonomie n'est pas un \"plus\" mais une exigence fondamentale pour garantir une expérience utilisateur inclusive.",
        realiser_ac2_projet2_title: "Charlie's Festival Adventure",
        realiser_ac2_projet2_text: "J'ai intégré des principes de design universel pour garantir l'accessibilité de l'information relative au festival, notamment dans la conception des modules d'inscription aux tournois. Cette attention a renforcé ma conviction que l'ergonomie est un aspect fondamental de tout développement centré utilisateur.",

        realiser_ac3_title: "AC3 : Adopter de bonnes pratiques de conception et de programmation",
        realiser_ac3_ce: "en veillant à la qualité du code et à sa documentation (CE1.04)",
        realiser_ac3_projet1_title: "Développement du jeu 'Trains'",
        realiser_ac3_projet1_text: "J'ai implémenté une architecture MVC rigoureuse, avec une séparation claire des responsabilités entre les différentes couches de l'application. Cette expérience m'a permis d'apprécier pleinement les bénéfices d'une bonne architecture logicielle : maintenabilité accrue, simplicité des tests, et facilité d'évolution.",
        realiser_ac3_projet2_title: "Stage DSIN",
        realiser_ac3_projet2_text: "J'ai adopté des standards de qualité rigoureux pour la migration Drupal 7 vers Drupal 10. La documentation méticuleuse de chaque module et l'application de conventions de nommage cohérentes ont considérablement facilité la compréhension et la maintenance du code par d'autres développeurs.",

        realiser_ac4_title: "AC4 : Vérifier et valider la qualité de l'application par les tests",
        realiser_ac4_ce: "en choisissant les ressources techniques appropriées (CE1.06)",
        realiser_ac4_projet1_title: "Projet CTFD pour Yggame",
        realiser_ac4_projet1_text: "J'ai mis en place une stratégie de tests exhaustive pour les défis de cybersécurité que j'ai développés. Cette approche méthodique m'a permis d'identifier et de corriger des failles potentielles avant le déploiement, garantissant ainsi la fiabilité des défis proposés aux participants.",
        realiser_ac4_projet2_title: "Projet E-commerce",
        realiser_ac4_projet2_text: "J'ai implémenté des tests unitaires et d'intégration pour valider le fonctionnement du système d'authentification et du panier d'achat. Cette démarche m'a fait comprendre l'importance cruciale des tests dans le cycle de développement, non seulement pour détecter les bugs, mais aussi pour documenter le comportement attendu du système.",

        // Optimiser section
        optimiser_title: "2. Compétence \"Optimiser\" (Niveau 2)",

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
        optimiser_ac3_projet2_title: "Projet CTFD",
        optimiser_ac3_projet2_text: "En développant des défis d'injection SQL et de manipulation de cookies, j'ai dû comprendre les vulnérabilités pour mieux les exploiter dans un cadre éducatif. Cette démarche m'a fourni une perspective unique sur les enjeux de sécurisation du code et des données.",
        optimiser_ac3_projet3_title: "Stage DSIN",
        optimiser_ac3_projet3_text: "J'ai mis en œuvre des mécanismes de chiffrement pour les données sensibles et sécurisé l'interaction avec le LDAP universitaire. Ces expériences pratiques ont consolidé ma compréhension des principes fondamentaux de la sécurité informatique.",

        optimiser_ac4_title: "AC4 : Évaluer l'impact environnemental et sociétal des solutions proposées",
        optimiser_ac4_ce: "en justifiant les choix et validant les résultats (CE2.04)",
        optimiser_ac4_projet1_title: "Projet Controverse",
        optimiser_ac4_projet1_text: "Ce projet m'a offert l'opportunité de réfléchir aux implications éthiques et sociétales des technologies numériques, notamment concernant la tension entre vie privée et sécurité nationale. Cette réflexion m'a sensibilisé à l'importance d'une démarche responsable dans le développement technologique.",
        optimiser_ac4_projet2_title: "Charlie's Festival Adventure",
        optimiser_ac4_projet2_text: "Nous avons intégré une dimension environnementale en optimisant l'infrastructure technique pour réduire l'empreinte carbone de l'événement. Cette approche m'a fait prendre conscience de la responsabilité des développeurs dans la conception de solutions durables.",

        // Administrer section
        administrer_title: "3. Compétence \"Administrer\" (Niveau 2)",

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
        administrer_ac3_projet2_title: "Base de Données pour Streaming Musical",
        administrer_ac3_projet2_text: "J'ai mis en place des mécanismes de contrôle d'accès et de confidentialité conformes aux bonnes pratiques du secteur, notamment en ce qui concerne le respect des réglementations sur la protection des données personnelles.",
        administrer_ac3_projet3_title: "Stage DSIN",
        administrer_ac3_projet3_text: "J'ai dû appliquer rigoureusement les normes de sécurité en vigueur dans le contexte universitaire, notamment pour la gestion des données académiques et la synchronisation avec le LDAP. Cette expérience m'a fait comprendre l'importance d'aligner les pratiques de sécurisation avec les cadres réglementaires existants.",

        // Conclusion section
        conclusion_title: "Conclusion",
        conclusion_p1: "L'analyse réflexive de mon parcours concernant ces trois compétences fondamentales du BUT Informatique m'a permis de prendre conscience du chemin parcouru et des compétences acquises. Chaque projet a contribué de manière spécifique à mon développement professionnel, me confrontant à des défis variés et me poussant à adopter des approches innovantes pour les résoudre.",
        conclusion_p2: "La diversité des contextes d'application, des projets académiques aux expériences professionnelles en stage, m'a permis de développer une compréhension nuancée et approfondie de ces compétences. J'ai particulièrement apprécié comment chaque nouvelle expérience venait enrichir et transformer ma compréhension des concepts théoriques, les ancrant dans une réalité pratique et complexe.",
        conclusion_p3: "Je considère avoir atteint un niveau satisfaisant dans ces trois compétences de niveau 2, tout en restant conscient que le développement professionnel est un processus continu. Les bases solides acquises durant ce parcours constituent un excellent tremplin pour mes futures expériences professionnelles et mon évolution dans le domaine de l'informatique."
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