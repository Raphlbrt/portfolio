const translations = {
    en: {
        // Navigation and general elements
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        portfolio_learning: "Learning Portfolio",
        portfolio_title: "Learning Portfolio",
        footer_copyright: "© Copyright Raphaël Lambert 2025 | Designed by Raphaël Lambert",

        // Navigation sidebar
        nav_introduction: "Introduction",
        nav_niveau2: "Level 2 Competencies",
        nav_niveau3: "Level 3 Competencies",
        nav_optimiser: "\"Optimize\" Competency",
        nav_administrer: "\"Administer\" Competency",
        nav_gerer: "\"Manage\" Competency",
        nav_conclusion: "Conclusion",
        realiser_nav: "Realize",
        conduire_nav: "Lead",
        collaborer_nav: "Collaborate",

        // Accordion titles
        niveau2_section_title: "Level 2 Competencies - Semesters 1-4 (Optimize · Administer · Manage)",
        niveau3_section_title: "Level 3 Competencies - Semesters 5-6 (Realize · Lead · Collaborate)",

        // Introduction section
        intro_title: "Reflective Analysis of Competencies",
        intro_p1: "In this essential section of my portfolio, I present a reflective and critical analysis of the competencies acquired during my Bachelor's degree in Computer Science with a specialization in IAMSI (Integration of Applications and Management of Information Systems). I document my development trajectory through concrete evidence from all my professional experiences.",
        intro_p2: "This approach is part of a rigorous documentation of my professional development trajectory, where each competency is linked to tangible evidence from my various professional experiences.",
        intro_p3: "In the IAMSI program, three competencies stop at level 2:",
        intro_competence1: "<strong>Optimize</strong> (Level 2: Selecting appropriate algorithms to solve a given problem)",
        intro_competence2: "<strong>Administer</strong> (Level 2: Deploying services in a network architecture)",
        intro_competence3: "<strong>Manage</strong> (Level 2: Optimize a database, interact with an application and implement security)",
        intro_p4: "Three competencies reach level 3 at the end of the program:",
        intro_competence4: "<strong>Realize</strong> (Level 3: Adapt applications across multiple platforms embedded, web, mobile, IoT…)",
        intro_competence5: "<strong>Lead</strong> (Level 3: Participate in the design and implementation of an information system project)",
        intro_competence6: "<strong>Collaborate</strong> (Level 3: Manage a computer science team)",

        // Réaliser (Realize) - Level 3
        realiser_title: "1. Realize - Level 3",
        realiser_subtitle: "Adapt applications across multiple platforms (embedded, web, mobile, IoT…) - EC1.01 · EC1.03 · EC1.04 · EC1.06",
        realiser_ac1_title: "LC1 - Choose and implement adapted architectures",
        realiser_ac1_ce: "EC1.06 | choosing appropriate technical resources · EC1.04 | ensuring code quality",
        realiser_ac1_p1_title: "Mirukai - Full-stack Next.js Architecture",
        realiser_ac1_p1_text: "On Mirukai, I designed the entire architecture alone: Next.js 16 App Router to unify frontend and API Routes, PostgreSQL for the catalogue (~3,500 anime), Redis for multi-level cache (TTL 1h, rate limiting) and Docker Compose for service isolation. Each choice was deliberate: iron-session for encrypted sessions, native Node.js scrypt for timing-safe hashing. This architecture supports two independent environments (prod/dev) on the same Proxmox infrastructure.",
        realiser_ac1_p2_title: "Capital Wars - MVCS Architecture and Plugin System",
        realiser_ac1_p2_text: "On Capital Wars, we designed an MVCS architecture on Symfony 6.4 with a central architectural choice: the modular plugin system. Each plugin implements SOLID interfaces (PluginBilanContributorInterface, PluginResultatContributorInterface, DecisionsContribute), ensuring the core remains stable while extensions are independent. Dynamic activation via JSON and the make:plugin command illustrate an architecture designed for adaptability.",
        realiser_ac2_title: "LC2 - Evolve an existing application",
        realiser_ac2_ce: "EC1.01 | respecting client requirements · EC1.04 | ensuring code quality",
        realiser_ac2_p1_title: "DSIN Internship - SA.P.I.E.N.S Migration from Drupal 7 to Drupal 10",
        realiser_ac2_p1_text: "The DSIN internship is the most direct evidence of this LC: evolving a production application, critical for thousands of users, without interrupting service. The migration involved deep architectural redesign (rewriting modules in Symfony API, migrating hooks to Event Listeners) while preserving all business features. I applied a rigorous approach: legacy code audit, incremental migration, regression testing and change documentation.",
        realiser_ac2_p2_title: "Capital Wars - Iterative Evolution Over One Year",
        realiser_ac2_p2_text: "Capital Wars was developed throughout the 2025-2026 academic year (S5+S6), requiring continuous evolution of an existing codebase each sprint. The plugin system was the response to this challenge: rather than modifying the core, the Stock Market, Chat, HR and PESTEL Events plugins were grafted onto a stable architecture. PHPUnit tests, GitHub Actions CI/CD and SonarQube analysis (60% coverage) ensured quality at each evolution.",
        realiser_ac3_title: "LC3 - Integrate solutions into a production environment",
        realiser_ac3_ce: "EC1.06 | choosing appropriate technical resources · EC1.03 | applying algorithmic principles",
        realiser_ac3_p1_title: "Mirukai - Continuous Deployment on Self-hosted Infrastructure",
        realiser_ac3_p1_text: "Mirukai is in real production at mirukai.rlbrt.fr. A push to main triggers GitHub Actions, which builds the Docker image, pushes it to GHCR, then deploys via SSH on the Proxmox CT with no downtime (docker compose up --no-deps). Nginx handles Let's Encrypt SSL and routing to prod (port 8080) and staging (port 8081). This LC3 is the most concrete: the application is public, maintained and continuously deployed not a pedagogical exercise.",
        realiser_ac3_p2_title: "DSIN Internship - Integration in a Critical University Environment",
        realiser_ac3_p2_text: "Integrating the SAPIENS migration into a production university SI required permanent availability. Integration with the UM LDAP, Ivanti API and Apogée system required mastery of integration protocols in an institutional environment far more constraining than an academic context. Each migrated component was validated in staging before production deployment.",

        // Conduire (Lead) - Level 3
        conduire_title: "2. Lead - Level 3",
        conduire_subtitle: "Participate in the design and implementation of an information system project - EC5.01 · EC5.02 · EC5.03 · EC5.04",
        conduire_ac1_title: "LC1 - Measure the economic, societal and technological impacts of an IT project",
        conduire_ac1_ce: "EC5.03 | promoting ethical, responsible and sustainable management · EC5.04 | adopting a proactive approach",
        conduire_ac1_p1_title: "DSIN Internship - Institutional Impact of the SAPIENS Migration",
        conduire_ac1_p1_text: "The SA.P.I.E.N.S migration had measurable impacts. Technological: moving from Drupal 7 (end of support) to Drupal 10, eliminating security risks. Societal: the platform manages computer rooms and digital exams for thousands of students - an outage would directly impact studies. Economic: rationalizing infrastructure reduces DSI team maintenance load long-term. I integrated this impact dimension into every decision, prioritizing service continuity over speed.",
        conduire_ac1_p2_title: "Mirukai - Evaluating Impacts in a Personal Project",
        conduire_ac1_p2_text: "On Mirukai, I faced real economic and ethical impacts: Gemini 2.0 Flash calls have a per-token cost, justifying the Groq fallback and aggressive caching. On personal data: anime lists reveal sensitive cultural preferences - I deliberately minimized storage and secured sessions (iron-session, scrypt). These conscious ethical choices guided the architecture as much as technical constraints.",
        conduire_ac2_title: "LC2 - Integrate an IT project into an organization's information system",
        conduire_ac2_ce: "EC5.01 | communicating effectively with project stakeholders · EC5.02 | respecting legal rules",
        conduire_ac2_p1_title: "DSIN Internship - Integration into the University of Montpellier's IS",
        conduire_ac2_p1_text: "SAPIENS fits into a complex university SI ecosystem: synchronization with the UM LDAP (centralized authentication), Ivanti API (hardware inventory), Apogée system (student data) and pedagogical databases. Each connection respected institutional security protocols and GDPR constraints. Understanding business uses before migrating by communicating with DSI teams guided priorities and prevented regressions.",
        conduire_ac2_p2_title: "Capital Wars - Design of an Integrated Game IS",
        conduire_ac2_p2_text: "Capital Wars constitutes a complete information system: ~20 interconnected entities with strict integration rules between core and plugins. Designing this IS as a team of 4 required clear interfaces between functional domains, versioned Doctrine migrations, and continuous communication via Discord and GitHub. Preliminary specification (class diagrams, E-R schema) ensured IS consistency throughout the year.",
        conduire_ac3_title: "LC3 - Adapt an information system",
        conduire_ac3_ce: "EC5.04 | adopting a proactive, creative and critical approach · EC5.02 | respecting current standards",
        conduire_ac3_p1_title: "DSIN Internship - Adapting SAPIENS Without Service Interruption",
        conduire_ac3_p1_text: "Adapting a production IS is fundamentally different from creating one. On SAPIENS, each adaptation rewriting a Drupal 7 hook to a Drupal 10 Event Listener, migrating a custom module had to maintain strict compatibility with existing business processes. The proactive approach: identify upstream modules without Drupal 10 equivalents, propose alternatives, document gaps and validate with the DSI team before implementation.",
        conduire_ac3_p2_title: "Mirukai - Resilient Incremental Adaptation",
        conduire_ac3_p2_text: "Mirukai illustrates IS adaptation through successive additions: the JustWatch module was grafted via a lazy sync mechanism without core redesign; LLMs were integrated without making them service prerequisites (graceful degradation if unavailable). This ability to extend the IS resiliently - each added component degrades gracefully if absent is directly transferable in a professional context.",

        // Collaborer (Collaborate) - Level 3
        collaborer_title: "3. Collaborate - Level 3",
        collaborer_subtitle: "Manage a computer science team - EC6.01 · EC6.02 · EC6.03 · EC6.04",
        collaborer_ac1_title: "LC1 - Organize and share digital monitoring",
        collaborer_ac1_ce: "EC6.04 | developing effective communication · EC6.02 | supporting IT evolution",
        collaborer_ac1_p1_title: "Mirukai - Autonomous and Structured Technology Watch",
        collaborer_ac1_p1_text: "Mirukai was not built with pre-known technologies: Next.js 16 App Router, Tailwind CSS v4, Gemini 2.0 Flash, Groq, and the unofficial JustWatch API (discovered by analyzing network requests). The watch was permanent and structured following changelogs, LLM announcements, exploring unofficial documentation. It directly influenced choices: switching from Tailwind v3 to v4, adding the Groq fallback following observed Gemini instability. MIRUKAI_PROJECT.md centralizes infrastructure state, roadmaps and decisions.",
        collaborer_ac1_p2_title: "Nuit de l'Info 2025 - Accelerated Watch Under Constraint",
        collaborer_ac1_p2_text: "The Nuit de l'Info is an extreme exercise in monitoring and adaptation: in 24h, you must identify technologies suited to the imposed challenge, evaluate their feasibility in the available time, and share this information with the team. This pressure reveals the ability to organize effective monitoring when time is the main constraint directly applicable in a company during project technical scoping phases.",
        collaborer_ac2_title: "LC2 - Identify digital innovation economy challenges",
        collaborer_ac2_ce: "EC6.03 | ensuring respect for legal constraints · EC6.04 | developing collaborative communication",
        collaborer_ac2_p1_title: "Capital Wars - Simulation of Digital Innovation Economic Issues",
        collaborer_ac2_p1_text: "Capital Wars simulates a complete business economy: investment decisions, R&D, marketing and financing in a competitive market. Modeling the Stock Market Plugin (hostile takeover, credit rating AAA→D, stock split) and PESTEL Events (political, economic, social, technological, environmental, legal risks) required understanding these real mechanisms before implementing them tangible learning of digital innovation economics.",
        collaborer_ac2_p2_title: "Mirukai - Business Models of Generative AI",
        collaborer_ac2_p2_text: "Integrating LLMs in production confronted me with AI economics: per-token pricing (Gemini), cost/quality strategy (cheaper Groq but less precise), cache impact on costs (translations persisted in DB). I also reflected on dependence on proprietary APIs: a Google pricing change could force architectural redesign justifying the fallback design from the start.",
        collaborer_ac3_title: "LC3 - Guide IT change management within an organization",
        collaborer_ac3_ce: "EC6.01 | working within a multidisciplinary team · EC6.02 | supporting IT evolution",
        collaborer_ac3_p1_title: "DSIN Internship - Supporting Migration for DSI Teams",
        collaborer_ac3_p1_text: "Guiding change on SAPIENS meant being the technical intermediary between DSI management decisions and concrete implementation. This involved: explaining to non-technical teams the implications of moving from Drupal 7 to 10, documenting changes for functional administrators, and defending architecture choices (incremental vs big bang migration) with my internship supervisor. This cross-functional communication between technical and business is at the heart of this LC.",
        collaborer_ac3_p2_title: "Capital Wars - Plugin System as Change Strategy",
        collaborer_ac3_p2_text: "Capital Wars' plugin architecture is a response to a change management problem: how to evolve a pedagogical game without forcing each teacher to completely revamp their scenarios? The 3 preset packs (Basic, Standard, Advanced) allow progressive adoption. Designing technology to facilitate its adoption understanding M. Chollet's needs and translating them into architectural constraints goes beyond pure technical work.",
        collaborer_ac4_title: "LC4 - Support IT project management",
        collaborer_ac4_ce: "EC6.01 | working within a multidisciplinary team · EC6.04 | developing collaborative communication",
        collaborer_ac4_p1_title: "Capital Wars - Agile Scrum Management Over One Year",
        collaborer_ac4_p1_text: "Capital Wars is the project where management was most structured: Agile Scrum over one year, team of 4 developers with differentiated roles. GitHub backlog with priority tags, Kanban board, daily standups, sprint reviews and bi-weekly retrospectives. Each plugin was under a lead developer's responsibility; cross-code reviews and automated Discord notifications (CI/CD, tests, merges) maintained team synchronization. I contributed to structuring these practices and enforcing them over time.",
        collaborer_ac4_p2_title: "MyAvatar &amp; Nuit de l'Info - Management Under Constrained Conditions",
        collaborer_ac4_p2_text: "MyAvatar (team of 4, Symfony) and Nuit de l'Info 2025 (24h hackathon) tested management in very different contexts. On MyAvatar, coordinating task distribution between CRUD, permissions, REST API and frontend. On Nuit de l'Info, rapid prioritization decisions and ability to redirect the team when a technical track wasn't working. These two complementary experiences illustrate the flexibility of management depending on context.",

        // Updated conclusion
        conclusion_p6: "<strong>On Level 3 competencies</strong>, Realize finds its most concrete evidence in Mirukai in production and the SAPIENS migration two real applications with real constraints. Lead relies on the DSIN internship as the central evidence, complemented by Capital Wars IS design. Collaborate is built on one year of Agile management on Capital Wars, enriched by the complementary contexts of MyAvatar and Nuit de l'Info.",
        conclusion_p7: "This portfolio reflects a coherent three-year trajectory: each project, academic or personal, was an opportunity to go beyond technical execution and develop a reflective stance understanding why a decision is made, measuring its consequences, and communicating it to stakeholders. This stance defines, beyond technical skills, a level 3 IT professional.",

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
        footer_copyright: "© Copyright Raphaël Lambert 2025 | Designed by Raphaël Lambert",

        // Navigation sidebar
        nav_introduction: "Introduction",
        nav_niveau2: "Compétences Niveau 2",
        nav_niveau3: "Compétences Niveau 3",
        nav_optimiser: "Compétence \"Optimiser\"",
        nav_administrer: "Compétence \"Administrer\"",
        nav_gerer: "Compétence \"Gérer\"",
        nav_conclusion: "Conclusion",
        realiser_nav: "Réaliser",
        conduire_nav: "Conduire",
        collaborer_nav: "Collaborer",

        // Accordion titles
        niveau2_section_title: "Compétences Niveau 2 - Semestres 1-4 (Optimiser · Administrer · Gérer)",
        niveau3_section_title: "Compétences Niveau 3 - Semestres 5-6 (Réaliser · Conduire · Collaborer)",

        // Introduction section
        intro_title: "Analyse Réflexive des Compétences",
        intro_p1: "Dans cette section essentielle de mon portfolio, je propose une analyse réflexive et critique des compétences acquises durant mon parcours en BUT Informatique parcours IAMSI (Intégration d'Applications et Management du Système d'Information). Je documente ma trajectoire de développement en mobilisant des traces concrètes issues de l'ensemble de mes mises en situation professionnelle.",
        intro_p2: "Cette démarche s'inscrit dans une perspective de documentation rigoureuse de ma trajectoire de développement professionnel, où chaque compétence est mise en relation avec des traces tangibles issues de mes différentes mises en situation professionnelle.",
        intro_p3: "Dans le parcours IAMSI, trois compétences s'arrêtent au niveau 2 :",
        intro_competence1: "<strong>Optimiser</strong> (Niveau 2 : Sélectionner les algorithmes adéquats pour répondre à un problème donné)",
        intro_competence2: "<strong>Administrer</strong> (Niveau 2 : Déployer des services dans une architecture réseau)",
        intro_competence3: "<strong>Gérer</strong> (Niveau 2 : Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité)",
        intro_p4: "Trois compétences atteignent le niveau 3 en fin de formation :",
        intro_competence4: "<strong>Réaliser</strong> (Niveau 3 : Adapter des applications sur un ensemble de supports embarqué, web, mobile, IoT…)",
        intro_competence5: "<strong>Conduire</strong> (Niveau 3 : Participer à la conception et à la mise en œuvre d'un projet système d'information)",
        intro_competence6: "<strong>Collaborer</strong> (Niveau 3 : Manager une équipe informatique)",

        // Réaliser - Niveau 3
        realiser_title: "1. Réaliser - Niveau 3",
        realiser_subtitle: "Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…) - CE1.01 · CE1.03 · CE1.04 · CE1.06",
        realiser_ac1_title: "AC1 - Choisir et implémenter les architectures adaptées",
        realiser_ac1_ce: "CE1.06 | en choisissant les ressources techniques appropriées · CE1.04 | en veillant à la qualité du code",
        realiser_ac1_p1_title: "Mirukai - Architecture full-stack Next.js",
        realiser_ac1_p1_text: "Sur Mirukai, j'ai conçu seul l'architecture complète : Next.js 16 App Router pour unifier frontend et API Routes, PostgreSQL pour le catalogue (~3 500 animés), Redis pour le cache multi-niveaux (TTL 1h, rate limiting) et Docker Compose pour l'isolation des services. Chaque choix était délibéré : <code>iron-session</code> pour les sessions chiffrées, <code>scrypt</code> natif Node.js pour le hachage timing-safe. Cette architecture supporte deux environnements indépendants (prod/dev) sur la même infrastructure Proxmox.",
        realiser_ac1_p2_title: "Capital Wars - Architecture MVCS et système de plugins",
        realiser_ac1_p2_text: "Sur Capital Wars, nous avons conçu une architecture MVCS sur Symfony 6.4 avec un choix architectural central : le système de plugins modulaires. Chaque plugin implémente des interfaces SOLID (PluginBilanContributorInterface, PluginResultatContributorInterface, DecisionsContribute), garantissant que le noyau reste stable tandis que les extensions sont indépendantes. L'activation dynamique via JSON et la commande <code>make:plugin</code> illustrent une architecture pensée pour l'adaptabilité.",
        realiser_ac2_title: "AC2 - Faire évoluer une application existante",
        realiser_ac2_ce: "CE1.01 | en respectant les besoins décrits par le client · CE1.04 | en veillant à la qualité du code",
        realiser_ac2_p1_title: "Stage DSIN - Migration SA.P.I.E.N.S de Drupal 7 vers Drupal 10",
        realiser_ac2_p1_text: "Le stage DSIN est la trace la plus directe de cet AC : faire évoluer une application existante en production, critique pour des milliers d'utilisateurs, sans interrompre le service. La migration impliquait une refonte architecturale profonde (réécriture des modules en API Symfony, migration des hooks vers des Event Listeners) tout en préservant toutes les fonctionnalités métier. J'ai appliqué une démarche rigoureuse : audit du code legacy, migration incrémentale, tests de non-régression et documentation des changements.",
        realiser_ac2_p2_title: "Capital Wars - Évolution itérative sur un an",
        realiser_ac2_p2_text: "Capital Wars a été développé sur l'intégralité de l'année académique 2025–2026 (S5 + S6), ce qui a impliqué de faire évoluer continuellement une base de code existante à chaque sprint. Le système de plugins a été la réponse à ce défi : plutôt que modifier le noyau, les plugins Bourse, Chat, RH et Événements PESTEL ont été greffés sur une architecture stable. Les tests PHPUnit, le CI/CD GitHub Actions et l'analyse SonarQube (couverture 60 %) assuraient la qualité à chaque évolution.",
        realiser_ac3_title: "AC3 - Intégrer des solutions dans un environnement de production",
        realiser_ac3_ce: "CE1.06 | en choisissant les ressources techniques appropriées · CE1.03 | en appliquant les principes algorithmiques",
        realiser_ac3_p1_title: "Mirukai - Déploiement continu sur infrastructure auto-hébergée",
        realiser_ac3_p1_text: "Mirukai est en production réelle sur mirukai.rlbrt.fr. Un push sur <code>main</code> déclenche GitHub Actions, qui construit l'image Docker, la pousse sur GHCR, puis déploie par SSH sur le CT Proxmox sans downtime (<code>docker compose up --no-deps</code>). Nginx assure le SSL Let's Encrypt et le routage vers prod (port 8080) et staging (port 8081). Cet AC3 est le plus concret : l'application est publique, maintenue et déployée en continu.",
        realiser_ac3_p2_title: "Stage DSIN - Intégration en environnement universitaire critique",
        realiser_ac3_p2_text: "Intégrer la migration SAPIENS dans un SI universitaire en production imposait une exigence de disponibilité permanente. L'intégration avec le LDAP de l'UM, l'API Ivanti et le système Apogée a nécessité une maîtrise des protocoles d'intégration en environnement institutionnel. Chaque composant migré était validé en staging avant déploiement sur la production.",

        // Conduire - Niveau 3
        conduire_title: "2. Conduire - Niveau 3",
        conduire_subtitle: "Participer à la conception et à la mise en œuvre d'un projet système d'information - CE5.01 · CE5.02 · CE5.03 · CE5.04",
        conduire_ac1_title: "AC1 - Mesurer les impacts économiques, sociétaux et technologiques d'un projet informatique",
        conduire_ac1_ce: "CE5.03 | en sensibilisant à une gestion éthique, responsable et durable · CE5.04 | en adoptant une démarche proactive",
        conduire_ac1_p1_title: "Stage DSIN - Impact institutionnel de la migration SAPIENS",
        conduire_ac1_p1_text: "La migration de SA.P.I.E.N.S avait des impacts mesurables. Technologique : passage de Drupal 7 (fin de support) à Drupal 10, éliminant les risques de sécurité. Sociétal : la plateforme gère les salles informatiques et les examens numériques pour des milliers d'étudiants - une interruption aurait des conséquences directes sur les études. Économique : rationaliser l'infrastructure réduit la charge de maintenance des équipes DSI à long terme. J'ai intégré cette dimension d'impact dans chaque décision, priorisant la continuité de service sur la rapidité.",
        conduire_ac1_p2_title: "Mirukai - Évaluation des impacts dans un projet personnel",
        conduire_ac1_p2_text: "Sur Mirukai, j'ai été confronté à des impacts économiques et éthiques réels : les appels Gemini 2.0 Flash ont un coût par token, ce qui a justifié le fallback Groq et le cache agressif. Côté données personnelles, les listes d'animés révèlent des préférences culturelles sensibles - j'ai délibérément minimisé le stockage et sécurisé les sessions (iron-session, scrypt). Ces choix éthiques conscients ont guidé l'architecture autant que les contraintes techniques.",
        conduire_ac2_title: "AC2 - Savoir intégrer un projet informatique dans le système d'information d'une organisation",
        conduire_ac2_ce: "CE5.01 | en communiquant efficacement avec les différents acteurs · CE5.02 | en respectant les règles juridiques",
        conduire_ac2_p1_title: "Stage DSIN - Intégration au SI de l'Université de Montpellier",
        conduire_ac2_p1_text: "SAPIENS s'inscrit dans un écosystème SI universitaire complexe : synchronisation avec le LDAP de l'UM (authentification centralisée), l'API Ivanti (inventaire matériel), le système Apogée (données étudiantes) et les bases de données pédagogiques. Chaque connexion respectait les protocoles de sécurité institutionnels et les contraintes RGPD. Comprendre les usages métier avant de migrer en communicant avec les équipes de la DSIN a guidé les priorités et évité les régressions.",
        conduire_ac2_p2_title: "Capital Wars - Conception d'un SI de jeu intégré",
        conduire_ac2_p2_text: "Capital Wars constitue un système d'information complet : ~20 entités interconnectées avec des règles d'intégration strictes entre noyau et plugins. Concevoir ce SI en équipe de 4 a impliqué des interfaces claires entre domaines fonctionnels, des migrations Doctrine versionnées et une communication continue via Discord et GitHub. La démarche de spécification préalable (diagrammes de classes, schéma E-R) a assuré la cohérence du SI sur toute l'année.",
        conduire_ac3_title: "AC3 - Savoir adapter un système d'information",
        conduire_ac3_ce: "CE5.04 | en adoptant une démarche proactive, créative et critique · CE5.02 | en respectant les normes en vigueur",
        conduire_ac3_p1_title: "Stage DSIN - Adapter SAPIENS sans interrompre le service",
        conduire_ac3_p1_text: "Adapter un SI en production est fondamentalement différent de le créer. Sur SAPIENS, chaque adaptation réécriture d'un hook Drupal 7 en Event Listener Drupal 10, migration d'un module custom devait maintenir la compatibilité avec les processus métier existants. La démarche proactive : identifier en amont les modules sans équivalent Drupal 10, proposer des alternatives, documenter les écarts et les valider avec l'équipe DSI avant implémentation.",
        conduire_ac3_p2_title: "Mirukai - Adaptation incrémentale résiliente",
        conduire_ac3_p2_text: "Mirukai illustre l'adaptation d'un SI par ajouts successifs : le module JustWatch a été greffé via un mécanisme de sync lazy sans refonte du cœur ; les LLMs ont été intégrés sans les rendre prérequis (dégradation gracieuse si indisponibles). Cette capacité à étendre le SI de façon résiliente est directement transférable en contexte professionnel.",

        // Collaborer - Niveau 3
        collaborer_title: "3. Collaborer - Niveau 3",
        collaborer_subtitle: "Manager une équipe informatique - CE6.01 · CE6.02 · CE6.03 · CE6.04",
        collaborer_ac1_title: "AC1 - Organiser et partager une veille numérique",
        collaborer_ac1_ce: "CE6.04 | en développant une communication efficace · CE6.02 | en accompagnant les évolutions informatiques",
        collaborer_ac1_p1_title: "Mirukai - Veille technologique autonome et structurée",
        collaborer_ac1_p1_text: "Mirukai n'a pas été construit avec des technologies connues d'avance : Next.js 16 App Router, Tailwind CSS v4, Gemini 2.0 Flash, Groq, et l'API non-officielle JustWatch (découverte par analyse des requêtes réseau). La veille a été permanente et structurée suivi des changelogs, des annonces LLM, exploration de documentation non officielle. Elle a directement influencé les choix : passage de Tailwind v3 à v4, ajout du fallback Groq suite à une instabilité Gemini. Le fichier MIRUKAI_PROJECT.md centralise l'état de l'infrastructure, des roadmaps et des décisions.",
        collaborer_ac1_p2_title: "Nuit de l'Info 2025 - Veille accélérée sous contrainte",
        collaborer_ac1_p2_text: "La Nuit de l'Info est un exercice extrême de veille et d'adaptation : en 24h, il faut identifier les technologies adaptées au défi imposé, évaluer leur faisabilité dans le temps imparti, et partager ces informations avec l'équipe. Cette mise sous pression révèle la capacité à organiser une veille efficace quand le temps est la contrainte principale.",
        collaborer_ac2_title: "AC2 - Identifier les enjeux de l'économie de l'innovation numérique",
        collaborer_ac2_ce: "CE6.03 | en veillant au respect des contraintes juridiques · CE6.04 | en développant une communication collaborative",
        collaborer_ac2_p1_title: "Capital Wars - Simulation des enjeux économiques de l'innovation",
        collaborer_ac2_p1_text: "Capital Wars simule une économie d'entreprise complète : décisions d'investissement, R&D, marketing et financement dans un marché concurrentiel. Modéliser le Plugin Bourse (OPA hostile, notation de crédit AAA→D, split d'actions) et les Événements PESTEL a nécessité de comprendre ces mécanismes réels avant de les implémenter apprentissage tangible des enjeux économiques de l'innovation numérique.",
        collaborer_ac2_p2_title: "Mirukai - Modèles économiques de l'IA générative",
        collaborer_ac2_p2_text: "Intégrer des LLMs en production m'a confronté aux enjeux économiques de l'IA : tarification au token (Gemini), stratégie coût/qualité (Groq moins cher mais moins précis), impact du cache sur les coûts (traductions persistées en BDD). J'ai également réfléchi à la dépendance envers des APIs propriétaires : un changement tarifaire pourrait contraindre une refonte ce qui a justifié le fallback dès la conception.",
        collaborer_ac3_title: "AC3 - Guider la conduite du changement informatique au sein d'une organisation",
        collaborer_ac3_ce: "CE6.01 | en inscrivant sa démarche dans une équipe pluridisciplinaire · CE6.02 | en accompagnant les évolutions",
        collaborer_ac3_p1_title: "Stage DSIN - Accompagner la migration pour les équipes de la DSIN",
        collaborer_ac3_p1_text: "Guider le changement sur SAPIENS signifiait être l'interlocuteur technique entre les décisions DSI et l'implémentation. Cela impliquait : expliquer aux équipes non-techniques les implications de passer de Drupal 7 à 10, documenter les changements pour les administrateurs fonctionnels, et défendre des choix d'architecture auprès de mon tuteur. Cette communication pluridisciplinaire entre technique et métier - est au cœur de cet AC.",
        collaborer_ac3_p2_title: "Capital Wars - Le système de plugins comme stratégie de changement",
        collaborer_ac3_p2_text: "L'architecture de plugins de Capital Wars est une réponse à un problème de conduite du changement : comment faire évoluer un jeu pédagogique sans imposer à chaque enseignant une refonte complète de ses scénarios ? Les 3 packs prédéfinis (Basic, Standard, Advanced) permettent une adoption progressive. Concevoir la technologie pour faciliter son adoption dépasse la technique pure.",
        collaborer_ac4_title: "AC4 - Accompagner le management de projet informatique",
        collaborer_ac4_ce: "CE6.01 | en inscrivant sa démarche dans une équipe pluridisciplinaire · CE6.04 | en développant une communication collaborative",
        collaborer_ac4_p1_title: "Capital Wars - Management Agile Scrum sur un an",
        collaborer_ac4_p1_text: "Capital Wars est le projet où le management a été le plus structuré : Agile Scrum sur un an, équipe de 4 développeurs aux rôles différenciés. Backlog GitHub avec tags de priorité, tableau Kanban, daily standups, sprint reviews et rétrospectives bimensuelles. Chaque plugin était sous la responsabilité d'un développeur référent ; les revues de code croisées et les notifications Discord automatisées maintenaient la synchronisation. J'ai contribué à structurer ces pratiques et à les faire respecter sur la durée.",
        collaborer_ac4_p2_title: "MyAvatar &amp; Nuit de l'Info - Management en conditions contraintes",
        collaborer_ac4_p2_text: "MyAvatar (équipe de 4, Symfony) et la Nuit de l'Info 2025 (hackathon 24h) ont mis à l'épreuve le management dans des contextes très différents. Sur MyAvatar, coordination de la répartition des tâches entre CRUD, permissions, API REST et frontend. Sur la Nuit de l'Info, décisions rapides de priorisation et capacité à réorienter l'équipe quand une piste ne fonctionnait pas.",

        // Conclusion mise à jour
        conclusion_p6: "<strong>Sur les compétences de Niveau 3</strong>, Réaliser trouve sa preuve la plus concrète dans Mirukai en production et la migration SAPIENS deux applications réelles avec des contraintes réelles. Conduire s'appuie sur le stage DSIN comme trace centrale, complété par la conception du SI de Capital Wars. Collaborer repose sur un an de management Agile sur Capital Wars, enrichi par les contextes complémentaires de MyAvatar et de la Nuit de l'Info.",
        conclusion_p7: "Ce portfolio témoigne d'une trajectoire cohérente sur trois ans : chaque projet, académique ou personnel, a été l'occasion de dépasser l'exécution technique pour développer une posture réflexive comprendre pourquoi une décision est prise, mesurer ses conséquences, et la communiquer aux parties prenantes. C'est cette posture qui définit, au-delà des compétences techniques, un professionnel de l'informatique de niveau 3.",

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