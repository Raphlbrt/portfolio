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
        previous_project: "← Previous Project",
        next_project: "Next Project →",

        // Project specific
        project_title: "Mirukai - Anime Recommendation Engine",
        link_to_project: "Visit the Project",
        link_report: "Production Report",

        // Context
        context_text_p1: "Mirukai is a personal project born from my passion for anime and my desire to master the modern JavaScript ecosystem. The name comes from Japanese: Miru (見る, to watch) and Kai (界, world)  \"Find the next anime you'll love.\"",
        context_text_p2: "Built entirely alone, from design to production, Mirukai is a full-stack web application publicly accessible at mirukai.rlbrt.fr. The core challenge: intelligently recommend an anime tailored to each user by combining their AniList history, a taste vector model, and an LLM for personalized explanations.",
        context_text_p3: "This project demonstrates what academic curricula rarely teach: full technical autonomy  from stack selection to production architecture decisions  without supervision or pedagogical constraints.",

        // Recommendation engine
        phase_engine_title: "Recommendation Engine",
        phase_engine_desc: "The heart of Mirukai is a vector-based recommendation algorithm built on a PostgreSQL catalogue of ~3,500 anime, synchronized daily from the AniList API.",

        "engine_list.0": "Taste vector  Built from the user's list, a preference vector weighted by genres, tags and studios, using IDF (Inverse Document Frequency) computed across the full catalogue to prioritize specific tastes over common genres",
        "engine_list.1": "Multi-criteria scoring  Each candidate anime receives a composite score: genre similarity (×0.30), tags (×0.40), studios (×0.10), AniList community quality (×0.15), popularity (×0.05), with a penalty for disliked genres",
        "engine_list.2": "Weighted simulations  runSimulations(5, pool=30): 5 probabilistic draws from the top-30 candidates, the winner being the one with the best AniList community score  avoiding a fixed #1 anime while maintaining quality",
        "engine_list.3": "TV prequel filter  Only anime without a TV prequel are recommended, always ensuring the entry point into a franchise",
        "engine_list.4": "Adaptive user profile  Custom thresholds (excellent / good / average) calculated from mean ± std deviation on the user's scores, reflecting their personal rating scale",

        // Auth & Data
        phase_auth_title: "Authentication & Data",
        "auth_list.0": "AniList OAuth2 with 3 distinct applications (production, development, local) and a native Mirukai email/password account",
        "auth_list.1": "Encrypted sessions via iron-session (httpOnly cookies), passwords hashed with native Node.js scrypt (timing-safe)",
        "auth_list.2": "PostgreSQL catalogue of ~3,500 anime with automatic daily synchronization from AniList GraphQL",
        "auth_list.3": "JustWatch GraphQL streaming data: platforms available in France, number of seasons, lazy sync per anime or admin bulk sync",
        "auth_list.4": "Redis cache: user lists (TTL 1h), daily suggestions, rate limiting (200 req/h per user)",

        // LLM
        phase_llm_title: "LLM & Artificial Intelligence",
        "llm_list.0": "Gemini 2.0 Flash (primary)  Synopsis translation to French and personalized explanation generation based on the user's taste references",
        "llm_list.1": "Groq llama-3.1-8b (fallback)  Automatic switch if Gemini is unavailable, without service interruption",
        "llm_list.2": "pickDiverseReferences()  Smart selection of 2-4 anime from the user's list maximizing genre diversity to feed the LLM balanced references",
        "llm_list.3": "Parallel LLM calls (translation + explanation), explanation section hidden on the UI side if the LLM returns null",

        // Infrastructure
        phase_infra_title: "Infrastructure & DevOps",
        "infra_list.0": "Docker Compose stack: Next.js 16 + PostgreSQL 16 + Redis 7, hosted on a self-managed Proxmox LXC container",
        "infra_list.1": "Nginx reverse proxy with Let's Encrypt SSL (Certbot), routing to two distinct environments (prod port 8080, dev port 8081)",
        "infra_list.2": "CI/CD GitHub Actions: Docker image build → GHCR push → automated SSH deployment with no downtime (docker compose up --no-deps)",
        "infra_list.3": "Production (mirukai.rlbrt.fr) and staging (dev.mirukai.rlbrt.fr) environments managed from git branches main and dev",

        // Technical challenges
        "challenges_list.0": "Vector recommendation algorithm: taste vector with dynamic IDF over ~3,500 anime, weighted simulation system to guarantee both variety and quality  avoiding a fixed #1 candidate without degrading relevance",
        "challenges_list.1": "Cold-start handling: two distinct logic paths (vector scoring ≥10 rated anime / weighted top-popular <10 anime) transparent to the user, with coldStart: true returned in the API response to adapt the UI",
        "challenges_list.2": "JustWatch GraphQL integration (unofficial, undocumented API): technicalName-based matching, 15-day TTL, 600ms rate limiting between requests, fallback to AniList external links when data is missing",
        "challenges_list.3": "LLM resilience with dual providers: parallel translation + explanation calls, automatic Gemini → Groq failover, null cases handled by hiding the UI section rather than showing an error",
        "challenges_list.4": "Self-hosted multi-environment infrastructure: two independent Docker stacks on a single Proxmox CT, continuous deployment without downtime, secrets managed via separate .env files per environment",
        "challenges_list.5": "Multi-level cache: Redis for user lists (avoids repeated AniList calls), distributed per-user rate limiting, idempotent daily suggestions (same result if requested multiple times in a day)",

        // Skills
        "skills_list.0": "Next.js 16 App Router and TypeScript: modern full-stack architecture, REST API Routes, React components with Tailwind CSS v4, server and client state management",
        "skills_list.1": "Recommendation algorithms: weighted vector model, IDF, Monte Carlo probabilistic simulations, cold-start handling  ability to translate a product need into an implementable mathematical model",
        "skills_list.2": "Advanced API integrations: GraphQL (AniList, JustWatch), REST LLM (Gemini, Groq), OAuth2 PKCE  managing resilience, fallbacks, and rate limits",
        "skills_list.3": "Full DevOps: Docker Compose, CI/CD GitHub Actions + GHCR, automated SSH deployment, Nginx reverse proxy, Let's Encrypt SSL, Proxmox LXC administration",
        "skills_list.4": "Data management at scale: PostgreSQL with optimized queries on large catalogue, multi-purpose Redis cache strategy, asynchronous synchronization and lazy loading",
        "skills_list.5": "End-to-end technical autonomy: design, development, production deployment and maintenance of a complete project without supervision, with architecture decisions made under real constraints",

        // Conclusion
        conclusion_text_p1: "Mirukai demonstrates my ability to drive a project end-to-end, outside any academic framework: stack selection, algorithm design, third-party API integration, deployment and maintenance of a live application. Every technical decision  from the vector model to Redis as a distributed cache  was made and owned independently.",
        conclusion_text_p2: "It showcases what curricula rarely teach: solving concrete problems (cold-start, LLM latency, undocumented API) under real production constraints. This personal project, publicly accessible, is proof of my commitment beyond academic assignments and my lasting passion for web development.",
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
        previous_project: "← Projet Précédent",
        next_project: "Projet Suivant →",

        // Project specific
        project_title: "Mirukai - Moteur de Recommandation d'Animés",
        link_to_project: "Lien vers le projet",
        link_report: "Dossier de production",

        // Context
        context_text_p1: "Mirukai est un projet personnel né de ma passion pour les animés et de ma volonté de maîtriser l'écosystème JavaScript moderne. Le nom vient du japonais : Miru (見る, regarder) et Kai (界, monde)  \"Trouve le prochain animé que tu vas aimer.\"",
        context_text_p2: "Développé seul, de la conception à la mise en production, Mirukai est une application web full-stack en production accessible publiquement sur mirukai.rlbrt.fr. Le défi central : recommander intelligemment un animé adapté à chaque utilisateur en combinant son historique AniList, un modèle vectoriel de goûts et un LLM pour des explications personnalisées.",
        context_text_p3: "Ce projet illustre ce que le cursus académique n'enseigne pas directement : l'autonomie technique complète, depuis le choix de la stack jusqu'aux décisions d'architecture en production, sans encadrement ni contrainte pédagogique.",

        // Recommendation engine
        phase_engine_title: "Moteur de recommandation",
        phase_engine_desc: "Le cœur de Mirukai est un algorithme de recommandation vectoriel construit sur un catalogue PostgreSQL de ~3500 animés synchronisé quotidiennement depuis l'API AniList.",

        "engine_list.0": "Taste vector  À partir de la liste de l'utilisateur, construction d'un vecteur de préférences pondéré par genres, tags et studios, avec une pondération IDF (Inverse Document Frequency) calculée sur tout le catalogue pour valoriser les goûts spécifiques au détriment des genres communs",
        "engine_list.1": "Scoring multi-critères  Chaque animé candidat reçoit un score composé : similarité genre (×0.30), tags (×0.40), studios (×0.10), qualité communautaire AniList (×0.15), popularité (×0.05), avec pénalité sur les genres détestés",
        "engine_list.2": "Simulations pondérées  runSimulations(5, pool=30) : 5 tirages probabilistes dans le top-30 candidats, le gagnant étant celui avec le meilleur score communautaire AniList  pour éviter la répétition du même animé #1 tout en garantissant la qualité",
        "engine_list.3": "Filtre prequel TV  Seuls les animés sans préquel TV sont recommandés, garantissant toujours le point d'entrée d'une franchise",
        "engine_list.4": "Profil utilisateur adaptatif  Seuils personnalisés (excellent / bien / moyen) calculés par moyenne ± écart-type sur les notes de l'utilisateur, reflétant son échelle personnelle de notation",

        // Auth & Data
        phase_auth_title: "Authentification & Données",
        "auth_list.0": "OAuth2 AniList avec 3 applications distinctes (production, développement, local) et compte email/password natif Mirukai",
        "auth_list.1": "Sessions chiffrées via iron-session (cookies httpOnly), mots de passe hachés avec scrypt natif Node.js (timing-safe)",
        "auth_list.2": "Catalogue PostgreSQL de ~3500 animés avec synchronisation quotidienne automatique depuis AniList GraphQL",
        "auth_list.3": "Données streaming JustWatch GraphQL : plateformes disponibles en France, nombre de saisons, sync lazy par animé ou bulk admin",
        "auth_list.4": "Cache Redis : listes utilisateurs (TTL 1h), suggestions journalières, rate limiting (200 req/h par utilisateur)",

        // LLM
        phase_llm_title: "LLM & Intelligence artificielle",
        "llm_list.0": "Gemini 2.0 Flash (primaire)  Traduction des synopsis en français et génération d'explications personnalisées basées sur les références de goût de l'utilisateur",
        "llm_list.1": "Groq llama-3.1-8b (fallback)  Bascule automatique si Gemini est indisponible, sans interruption du service",
        "llm_list.2": "pickDiverseReferences()  Sélection intelligente de 2-4 animés de la liste utilisateur maximisant la diversité de genres pour alimenter le LLM avec des références équilibrées",
        "llm_list.3": "Appels LLM parallèles (traduction + explication), section explication masquée côté UI si le LLM retourne null",

        // Infrastructure
        phase_infra_title: "Infrastructure & DevOps",
        "infra_list.0": "Stack Docker Compose : Next.js 16 + PostgreSQL 16 + Redis 7, hébergée sur un conteneur LXC Proxmox auto-géré",
        "infra_list.1": "Reverse proxy Nginx avec SSL Let's Encrypt (Certbot), routage vers deux environnements distincts (prod port 8080, dev port 8081)",
        "infra_list.2": "CI/CD GitHub Actions : build image Docker → push GHCR → déploiement SSH automatisé sans downtime (docker compose up --no-deps)",
        "infra_list.3": "Environnements production (mirukai.rlbrt.fr) et staging (dev.mirukai.rlbrt.fr) gérés depuis les branches git main et dev",

        // Technical challenges
        "challenges_list.0": "Algorithme de recommandation vectoriel : construction du taste vector avec IDF dynamique sur ~3500 animés, système de simulations pondérées pour garantir variété et qualité simultanément  éviter le candidat #1 fixe sans dégrader la pertinence",
        "challenges_list.1": "Gestion du cold-start : deux logiques distinctes (scoring vectoriel ≥10 animés / top populaires pondérés <10 animés) transparentes pour l'utilisateur, avec retour coldStart: true dans la réponse API pour adapter l'UI",
        "challenges_list.2": "Intégration JustWatch GraphQL (API non officielle, non documentée) : identification du matching par technicalName, TTL 15 jours, rate limiting 600ms entre requêtes, fallback sur les liens externes AniList si données absentes",
        "challenges_list.3": "Résilience LLM avec double provider : appels parallèles traduction + explication, bascule automatique Gemini → Groq, gestion des cas null avec masquage côté UI plutôt que message d'erreur",
        "challenges_list.4": "Infrastructure multi-environnement auto-hébergée : deux stacks Docker indépendantes sur un seul CT Proxmox, déploiement continu sans interruption, gestion des secrets par fichiers .env séparés par environnement",
        "challenges_list.5": "Cache multi-niveaux : Redis pour les listes utilisateurs (évite les appels AniList répétés), rate limiting distribué par user, suggestions journalières idempotentes (même résultat si redemandé dans la journée)",

        // Skills
        "skills_list.0": "Next.js 16 App Router et TypeScript : architecture full-stack moderne, API Routes REST, composants React avec Tailwind CSS v4, gestion d'état serveur et client",
        "skills_list.1": "Algorithmes de recommandation : modèle vectoriel pondéré, IDF, simulations probabilistes Monte Carlo, gestion du cold-start  capacité à traduire un besoin métier en modèle mathématique implémentable",
        "skills_list.2": "Intégrations API avancées : GraphQL (AniList, JustWatch), REST LLM (Gemini, Groq), OAuth2 PKCE  gestion de la résilience, des fallbacks et des limites de débit",
        "skills_list.3": "DevOps complet : Docker Compose, CI/CD GitHub Actions + GHCR, déploiement SSH automatisé, Nginx reverse proxy, SSL Let's Encrypt, administration Proxmox LXC",
        "skills_list.4": "Gestion des données à l'échelle : PostgreSQL avec requêtes optimisées sur catalogue large, stratégie de cache Redis multi-usage, synchronisation asynchrone et lazy loading",
        "skills_list.5": "Autonomie technique end-to-end : conception, développement, mise en production et maintenance d'un projet complet sans supervision, avec prise de décisions d'architecture sous contraintes réelles",

        // Conclusion
        conclusion_text_p1: "Mirukai représente ma capacité à mener un projet de bout en bout, hors cadre académique : choix de la stack, conception de l'algorithme, intégration d'APIs tierces, déploiement et maintenance d'une application en production réelle. Chaque décision technique  du modèle vectoriel au choix de Redis comme cache distribué  a été prise et assumée seul.",
        conclusion_text_p2: "Il illustre ce que le cursus n'enseigne pas directement : résoudre des problèmes concrets (cold-start, latence LLM, API non documentée) avec les contraintes d'un service en production. Ce projet personnel, accessible publiquement, est la preuve de mon engagement au-delà des projets académiques et de ma passion durable pour le développement web.",
    }
};

function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("languageSelect");
    const saved = localStorage.getItem("lang") || "fr";
    if (select) select.value = saved;
    applyTranslations(saved);
    if (select) {
        select.addEventListener("change", (e) => {
            const lang = e.target.value;
            localStorage.setItem("lang", lang);
            applyTranslations(lang);
        });
    }
});
