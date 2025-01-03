const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",

        // Hero section
        hello_iam: "Hello, I am",
        web_developer: "Web Developer",
        my_portfolio: "My Portfolio",
        contact_me: "Contact Me",

        // About section
        about_me: "About Me",
        download_cv: "Download CV",
        web_design: "Web design",

        // Services
        uiux_design: "UI/UX Design",
        frontend_dev: "Frontend Development",
        content_writing: "Content Writing",

        // Projects section
        project_title: "Projects",

        // Contact section
        contact_title: "Contact",
        tell_about_project: "Tell me about your project.",
        lets_talk: "Let's talk and work together!",
        full_name: "Full Name",
        email_address: "Email Address",
        your_message: "Your Message",
        send_message: "Send Message",

        // SAECTF Page
        project_ctfd:"Project CTFD",
        project_context: "Context",
        project_progress: "Project Progress",
        technical_challenges: "Technical Challenges",
        skills_acquired: "Skills Acquired",
        conclusion: "Conclusion",
        see_on_gitlab: "See on GitLab",
        link_to_project: "Link to the project",
        previous_project: "← Previous Project",
        next_project: "Next Project →",
        context_text_p1: "The Yggame association, active in event organization, wanted to expand its activities with a cybersecurity event. This event, a Capture The Flag (CTF), aimed to offer technical challenges allowing participants to test and deepen their cybersecurity skills. Our team of four students was tasked with designing a complete platform to manage this event and develop varied, stimulating challenges.",
        context_text_p2: "As Product Owner, I was responsible for ensuring client expectations were well understood and integrated into project development. My role involved coordinating the team, prioritizing tasks, and ensuring deliverables met the association's functional and technical needs.",
        project_progress_p1: "To meet the association's needs, we chose the CTFd platform, an open-source solution designed for CTF events. This platform was customized according to specific client requirements and deployed on a VPS server using Docker-based infrastructure. This containerization allowed us to create a modular, flexible environment, where each challenge requiring hosting could be isolated in its own container. I also developed an interface to manage these containers intuitively.",
        project_progress_p2: "Challenge management relied on a MySQL database, coupled with phpMyAdmin for simplified administration. In parallel, we worked using agile methodology, organizing our tasks and sprints via GitLab, which served as both project management and versioning platform.",
        challenges_title: "Technical Challenges Creation",
        challenges_intro: "An essential part of the project was developing varied challenges covering multiple cybersecurity domains to enrich participants' experience. Among those I created:",
        challenges_php_title: "PHP Challenges",
        challenges_php_1: "An SQL injection exercise to raise awareness about unsecured query risks.",
        challenges_php_2: "A challenge exploring cookie security, with manipulation and bypassing of a PHP authentication mechanism.",
        title_rgpd: "GDPR Quiz",
        challenges_rgpd: "An interactive challenge based on a fake privacy policy text, where JavaScript scripts prevent text copying or access to the element inspector.",
        title_drupal: "Drupal CMS",
        challenges_drupal: "A challenge exploiting an exposed JSON API to search for information in an article-type page, without authentication.",
        challenges_stego_title: "Steganography",
        challenges_stego_1: "A challenge using image metadata to hide identification information.",
        challenges_stego_2: "An advanced challenge manipulating PNG chunks with zTXT compressed data.",
        skills_text_p1: "This project allowed me to deepen my technical knowledge, particularly in infrastructure management with Docker and solution deployment on a VPS server. I also gained practical experience in developing and integrating cybersecurity challenges, exploring various domains like web security, databases, and systems.",
        skills_text_p2: "As Product Owner, I learned to translate client needs into clear, achievable specifications. This experience also helped me improve my team management and communication skills, using tools like GitLab to structure and track project progress.",
        conclusion_text: "This project was a formative experience that allowed me to work on a concrete and useful application while meeting a real client's needs. The positive feedback from the Yggame association validated our technical and organizational choices, and this success strengthened my motivation to continue my efforts in cybersecurity and developing solutions adapted to real problems."

    },
    fr: {
        // Navigation
        home: "Accueil",
        about: "À propos",
        projects: "Projets",
        contact: "Contact",

        // Hero section
        hello_iam: "Bonjour, je suis",
        web_developer: "Développeur Web",
        my_portfolio: "Mon Portfolio",
        contact_me: "Me Contacter",

        // About section
        about_me: "À Propos de Moi",
        download_cv: "Télécharger CV",
        web_design: "Web design",

        // Services
        uiux_design: "Design UI/UX",
        frontend_dev: "Développement Frontend",
        content_writing: "Rédaction de Contenu",

        // Projects section
        project_title: "Projets",

        // Contact section
        contact_title: "Contact",
        tell_about_project: "Parlez-moi de votre projet.",
        lets_talk: "Discutons et travaillons ensemble !",
        full_name: "Nom Complet",
        email_address: "Adresse Email",
        your_message: "Votre Message",
        send_message: "Envoyer le Message",

        // SAECTF Page
        project_ctfd:"Projet CTFD",
        project_context: "Contexte",
        project_progress: "Déroulement du Projet",
        technical_challenges: "Défis Techniques",
        skills_acquired: "Compétences Acquises",
        conclusion: "Conclusion",

        see_on_gitlab: "Voir sur GitLab",

        link_to_project: "Lien vers le projet",
        previous_project: "← Projet Précédent",
        next_project: "Projet Suivant →",
        context_text_p1: "L'association Yggame, active dans l'organisation d'événements, souhaitait étendre ses activités avec un événement dédié à la cybersécurité. Cet événement, un Capture The Flag (CTF), visait à proposer une série de défis techniques permettant aux participants de tester et d'approfondir leurs compétences en sécurité informatique. Notre équipe de quatre étudiants avait pour mission de concevoir une plateforme complète pour gérer cet événement et d'élaborer une série de défis variés et stimulants.",
        context_text_p2: "En tant que Product Owner, j'étais chargé de m'assurer que les attentes du client étaient bien comprises et intégrées dans le développement du projet. Mon rôle consistait à coordonner l'équipe, prioriser les tâches, et garantir que les livrables répondaient aux besoins fonctionnels et techniques de l'association.",
        project_progress_p1: "Pour répondre aux besoins de l'association, nous avons choisi d'utiliser la plateforme CTFd, une solution open-source conçue pour les événements CTF. Cette plateforme a été personnalisée en fonction des attentes spécifiques du client et déployée sur un serveur VPS en utilisant une infrastructure basée sur Docker. Cette conteneurisation nous a permis de créer un environnement modulaire et flexible, où chaque défi nécessitant un hébergement pouvait être isolé dans son propre conteneur. J'ai également développé une interface pour gérer ces conteneurs de manière intuitive.",
        project_progress_p2: "La gestion des défis s'appuyait sur une base de données MySQL, associée à l'outil phpMyAdmin pour une administration simplifiée. En parallèle, nous avons travaillé en méthode agile, organisant nos tâches et nos sprints via GitLab, qui a servi à la fois de plateforme de gestion de projet et de versionnement.",
        challenges_title: "Création des défis techniques",
        challenges_intro: "Une part essentielle du projet consistait à développer des défis variés, couvrant plusieurs domaines de la cybersécurité, pour enrichir l'expérience des participants. Parmi ceux que j'ai réalisés :",
        challenges_php_title: "Défis PHP",
        challenges_php_1: "Un exercice sur les injections SQL pour sensibiliser aux risques liés aux requêtes non sécurisées.",
        challenges_php_2: "Un défi explorant la sécurité des cookies, avec manipulation et contournement d'un mécanisme d'authentification en PHP.",
        title_rgpd: "Questionnaire RGPD",
        challenges_rgpd: "Un défi interactif basé sur un faux texte de politique de confidentialité, où des scripts JavaScript empêchent la copie du texte ou l'accès à l'inspecteur d'élément.",
        title_drupal: "CMS Drupal",
        challenges_drupal: "Un défi exploitant une API JSON exposée pour chercher des informations dans une page de type article, sans authentification.",
        challenges_stego_title: "Stéganographie",
        challenges_stego_1: "Un défi utilisant les métadonnées d'une image pour dissimuler des informations d'identification.",
        challenges_stego_2: "Un défi avancé de manipulation de chunks PNG avec des données compressées en format zTXT.",
        skills_text_p1: "Ce projet m'a permis d'approfondir mes connaissances techniques, notamment en gestion d'infrastructure avec Docker et en déploiement de solutions sur un serveur VPS. J'ai également acquis une expérience pratique dans le développement et l'intégration de défis en cybersécurité, en explorant des domaines variés comme la sécurité web, les bases de données, et les systèmes.",
        skills_text_p2: "En tant que Product Owner, j'ai appris à traduire les besoins d'un client en spécifications claires et réalisables. Cette expérience m'a également permis de perfectionner mes compétences en gestion d'équipe et en communication, en m'appuyant sur des outils comme GitLab pour structurer et suivre les progrès du projet.",
        conclusion_text: "Ce projet a été une expérience formatrice qui m'a permis de travailler sur une application concrète et utile, tout en répondant aux besoins d'un véritable client. Les retours positifs de l'association Yggame ont validé nos choix techniques et organisationnels, et cette réussite a renforcé ma motivation à poursuivre mes efforts dans le domaine de la cybersécurité et du développement de solutions adaptées aux problématiques réelles."
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