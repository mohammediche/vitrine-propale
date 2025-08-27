import { Building2, BookOpenCheck, Cpu, Bot, School, Megaphone } from 'lucide-react';

export const servicesData = {
  'structuration-jeune-entreprise': {
    icon: Building2,
    name: "Structuration & Jeune entreprise",
    tagline: "De l'idée à la licorne, nous bâtissons des fondations solides pour votre succès.",
    whyUs: {
      title: "Pourquoi nous choisir pour structurer votre entreprise ?",
      description: "Lancer une entreprise est un marathon, pas un sprint. Nous vous apportons l'expertise nécessaire pour éviter les pièges courants, mettre en place des processus efficaces et préparer votre entreprise à une croissance exponentielle.",
      advantages: [
        "Planification stratégique et business plan robuste.",
        "Mise en place de la structure juridique et financière optimale.",
        "Accès à un réseau d'experts et de premiers investisseurs.",
        "Coaching personnalisé des fondateurs."
      ]
    },
    testimonial: {
      text: "KATECH a été fondamental dans le lancement de notre startup. Leur approche structurée nous a permis de sécuriser notre premier tour de table en moins de 6 mois.",
      author: "Julien P., CEO de NeoConnect"
    },
    cases: [
      { slug: "lancement-fintech", title: "Lancement d'une Fintech", description: "Accompagnement de A à Z, de l'idée à la première levée de fonds.", content: "Le projet consistait à accompagner une jeune pousse dans le secteur de la Fintech. Notre mission a couvert la validation du concept, l'élaboration d'un business plan détaillé, la constitution de l'équipe fondatrice et la préparation du pitch deck. Grâce à notre réseau, nous avons facilité les introductions auprès de business angels et de fonds de capital-risque, menant à une levée de fonds réussie de 1,2 million d'euros en seed." },
      { slug: "structuration-medtech", title: "Structuration d'une MedTech", description: "Mise en place des process de conformité et de la stratégie de go-to-market.", content: "Pour cette startup MedTech, l'enjeu principal était la mise en conformité avec les réglementations européennes (MDR). Nous avons mis en place un système de management de la qualité (SMQ) et piloté le processus de certification CE. Parallèlement, nous avons défini une stratégie de go-to-market ciblée vers les hôpitaux et les cliniques spécialisées, aboutissant à des contrats pilotes avec trois établissements majeurs." },
      { slug: "croissance-saas-b2b", title: "Croissance d'un SaaS B2B", description: "Optimisation du funnel d'acquisition et structuration de l'équipe commerciale.", content: "Nous avons aidé une entreprise SaaS B2B à passer de 10 à 50 clients en 18 mois. Notre intervention s'est concentrée sur l'optimisation du marketing digital (SEO, Inbound) et la structuration de l'équipe de vente. Nous avons mis en place un CRM, défini des KPIs clairs et formé les commerciaux aux techniques de vente modernes." },
      { slug: "pivot-marketplace", title: "Pivot stratégique d'une marketplace", description: "Analyse de marché et redéfinition du business model pour atteindre la rentabilité.", content: "Face à une stagnation de la croissance, nous avons mené un audit stratégique complet pour cette marketplace. L'analyse a révélé la nécessité d'un pivot vers un modèle de commission plus élevé, ciblant une niche plus spécifique. Nous avons accompagné le changement de A à Z, de la communication aux ajustements techniques, permettant à l'entreprise d'atteindre le seuil de rentabilité en 9 mois." }
    ]
  },
  'conseil-audit': {
    icon: BookOpenCheck,
    name: "Conseil & Audit",
    tagline: "Une vision claire pour des décisions éclairées et une performance optimisée.",
    whyUs: {
      title: "Pourquoi nous confier votre conseil et audit ?",
      description: "Un regard extérieur et expert est crucial pour identifier les angles morts et les opportunités cachées. Nos audits vont au-delà des chiffres pour vous fournir une feuille de route stratégique actionnable.",
      advantages: [
        "Analyse 360° de votre entreprise (financier, opérationnel, stratégique).",
        "Identification des leviers de croissance prioritaires.",
        "Recommandations concrètes et plan d'action détaillé.",
        "Benchmark concurrentiel approfondi."
      ]
    },
    testimonial: {
      text: "L'audit de KATECH a été un électrochoc positif. Nous avons redéfini notre stratégie et augmenté notre rentabilité de 20% en un an.",
      author: "Carine M., Directrice Générale de InnovaPlus"
    },
     cases: [
      { slug: "audit-pme-industrielle", title: "Audit stratégique d'une PME industrielle", description: "Identification de nouveaux marchés et optimisation des coûts.", content: "Nous avons réalisé un audit complet pour une PME du secteur métallurgique. L'analyse a mis en lumière une forte dépendance à un seul secteur client. Nos recommandations ont inclus une diversification vers le secteur aéronautique et un plan d'optimisation des processus de production. Résultat : une augmentation de 15% du chiffre d'affaires et une marge brute améliorée de 5 points." },
      { slug: "conseil-transformation-digitale", title: "Conseil en transformation digitale", description: "Accompagnement d'un groupe de retail vers l'omnicanal.", content: "Un groupe de distribution traditionnel nous a sollicités pour l'accompagner dans sa transition vers l'omnicanal. Notre mission a été de définir la feuille de route stratégique, de sélectionner les outils technologiques (PIM, OMS) et de piloter le changement en interne. Le projet a permis d'unifier l'expérience client et d'augmenter les ventes en ligne de 40% la première année." }
    ]
  },
  'services-informatiques': {
    icon: Cpu,
    name: "Services Informatiques",
    tagline: "Votre infrastructure technologique, notre expertise. L'innovation au service de votre croissance.",
    whyUs: {
        title: "Pourquoi choisir nos services informatiques ?",
        description: "Dans un monde digital, votre SI est le cœur de votre réacteur. Nous concevons, développons et maintenons des solutions robustes, évolutives et sécurisées qui soutiennent vos ambitions.",
        advantages: [
            "Développement d'applications web et mobiles sur-mesure.",
            "Expertise en architecture Cloud et DevOps.",
            "Cybersécurité et protection des données.",
            "Maintenance et support proactifs."
        ]
    },
    testimonial: {
        text: "L'équipe de KATECH a développé notre plateforme SaaS avec une efficacité redoutable. Leur expertise technique est sans égale.",
        author: "Marc D., CTO de CloudFlow"
    },
    cases: [
      { slug: "developpement-marketplace", title: "Développement d'une marketplace", description: "Plateforme e-commerce complexe avec gestion de milliers de transactions.", content: "Nous avons conçu et développé de bout en bout une marketplace B2C. Les défis techniques incluaient un système de paiement sécurisé avec séquestre, un algorithme de matching personnalisé et une architecture scalable sur AWS pour gérer les pics de trafic. La plateforme a atteint 10 000 utilisateurs actifs en 6 mois." },
      { slug: "migration-cloud", title: "Migration vers le Cloud", description: "Modernisation de l'infrastructure d'une PME pour plus de flexibilité.", content: "Une PME avec une infrastructure vieillissante on-premise a fait appel à nous pour sa migration vers le cloud. Nous avons orchestré la transition vers Microsoft Azure, en modernisant les applications et en instaurant une culture DevOps. Le résultat : une réduction de 30% des coûts d'infrastructure et une agilité décuplée pour le déploiement de nouvelles fonctionnalités." }
    ]
  },
  'robot-intelligent': {
    icon: Bot,
    name: "Robot Intelligent",
    tagline: "L'intelligence artificielle au service de votre performance. Automatisez, analysez, prédisez.",
    whyUs: {
        title: "Pourquoi intégrer nos solutions d'IA ?",
        description: "L'IA n'est plus de la science-fiction. C'est un levier de compétitivité majeur. Nous vous aidons à intégrer des solutions d'IA pragmatiques qui automatisent les tâches, enrichissent vos données et améliorent la prise de décision.",
        advantages: [
            "Automatisation des processus métier (RPA).",
            "Analyse prédictive et modélisation de données.",
            "Développement de chatbots et assistants virtuels.",
            "Solutions de vision par ordinateur."
        ]
    },
    testimonial: {
        text: "Le robot intelligent développé par KATECH a réduit nos coûts de traitement de 30% et a éliminé les erreurs humaines. Révolutionnaire !",
        author: "Sophie L., Directrice des Opérations chez LogiPro"
    },
    cases: [
      { slug: "automatisation-service-client", title: "Automatisation du service client", description: "Mise en place d'un chatbot intelligent pour un grand e-commerçant.", content: "Pour un leader du e-commerce, nous avons développé un chatbot capable de gérer 80% des demandes clients de niveau 1 (suivi de commande, retours, questions produits). Intégré aux systèmes internes, il fournit des réponses instantanées et personnalisées 24/7, améliorant la satisfaction client de 25% et réduisant la charge de travail des agents." },
      { slug: "analyse-predictive-ventes", title: "Analyse prédictive des ventes", description: "Modèle de machine learning pour anticiper la demande d'un distributeur.", content: "Un grand distributeur souhaitait optimiser sa gestion de stocks. Nous avons construit un modèle de Machine Learning qui analyse les données de ventes historiques, les facteurs saisonniers, les tendances du marché et les données météo pour prédire la demande à 3 mois. La précision du modèle (95%) a permis de réduire les ruptures de stock de 60% et les surstocks de 40%." }
    ]
  },
  'formation': {
    icon: School,
    name: "Formation",
    tagline: "Investissez dans votre capital le plus précieux : vos équipes. Compétences d'aujourd'hui, succès de demain.",
     whyUs: {
        title: "Pourquoi former vos équipes avec KATECH ?",
        description: "La compétence est le moteur de l'innovation. Nous proposons des formations sur-mesure, animées par des experts de terrain, pour faire monter en puissance vos collaborateurs sur les sujets clés de la transformation d'entreprise.",
        advantages: [
            "Programmes personnalisés adaptés à votre contexte.",
            "Formateurs experts et praticiens reconnus.",
            "Formats innovants (workshops, bootcamps, coaching).",
            "Focus sur l'application pratique et le ROI."
        ]
    },
    testimonial: {
        text: "La formation en leadership de KATECH a transformé nos managers. Nous avons vu un impact direct sur l'engagement des équipes.",
        author: "David G., DRH de BuildIt"
    },
    cases: [
      { slug: "formation-culture-data", title: "Formation à la culture data", description: "Acculturation de l'ensemble des collaborateurs d'une banque.", content: "Dans le cadre d'un plan de transformation majeur, nous avons conçu et déployé un programme de formation à la data pour 500 collaborateurs d'une banque de détail. Le programme, alliant e-learning, workshops et un projet fil rouge, a permis de démystifier la data et d'initier une culture data-driven à tous les niveaux de l'organisation." },
      { slug: "bootcamp-vente-startup", title: "Bootcamp de vente pour startup", description: "Formation intensive pour l'équipe commerciale d'une jeune pousse SaaS.", content: "Nous avons organisé un bootcamp de 3 jours pour l'équipe commerciale d'une startup SaaS. Au programme : social selling, techniques de closing, gestion des objections et utilisation avancée du CRM. Les résultats ont été immédiats avec une augmentation de 35% du taux de conversion des prospects en clients le trimestre suivant." }
    ]
  },
  'marketing-communication': {
    icon: Megaphone,
    name: "Marketing & Communication",
    tagline: "Construisez une marque forte, engagez votre audience et multipliez votre impact.",
    whyUs: {
        title: "Pourquoi nous confier votre marketing et communication ?",
        description: "Avoir un excellent produit ne suffit pas. Il faut le faire savoir. Nous élaborons et mettons en œuvre des stratégies de marketing et de communication percutantes qui génèrent de la notoriété, de l'engagement et des leads qualifiés.",
        advantages: [
            "Stratégie de marque et positionnement.",
            "Marketing digital (SEO, SEA, Content, Social Media).",
            "Relations publiques et influence.",
            "Création de contenus à forte valeur ajoutée."
        ]
    },
    testimonial: {
        text: "KATECH a redéfini notre stratégie de marque et a piloté une campagne qui a triplé notre trafic qualifié. Des résultats spectaculaires.",
        author: "Émilie T., Directrice Marketing de GlowUp Cosmetics"
    },
    cases: [
      { slug: "lancement-marque-d2c", title: "Lancement d'une marque D2C", description: "Stratégie 360° pour une nouvelle marque de cosmétiques bio.", content: "Pour le lancement d'une marque de cosmétiques bio en D2C (Direct-to-Consumer), nous avons élaboré la plateforme de marque, créé l'identité visuelle et le site e-commerce. Nous avons ensuite déployé une stratégie de lancement mixant marketing d'influence, campagnes sur les réseaux sociaux et relations presse. La marque a dépassé ses objectifs de vente de 50% sur les 6 premiers mois." },
      { slug: "inbound-marketing-editeur-logiciel", title: "Inbound marketing pour un éditeur de logiciel", description: "Génération de leads qualifiés via une stratégie de contenu.", content: "Un éditeur de logiciel B2B peinait à générer des leads. Nous avons mis en place une stratégie d'inbound marketing complète : création d'un blog expert, production de livres blancs, webinaires et mise en place de scénarios de marketing automation. Cette stratégie a permis de multiplier par 4 le nombre de leads qualifiés par mois et de réduire le coût d'acquisition de 45%." }
    ]
  }
};