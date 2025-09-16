import { Bot, BrainCircuit, Check, Cpu, ShieldCheck, Sparkles, Target } from 'lucide-react';

// Services IA
export const servicesIA = [
  { 
    icon: Bot, 
    title: "Automatisation Intelligente (RPA)", 
    description: "Libérez vos équipes des tâches répétitives. Nos robots logiciels optimisent vos processus pour une efficacité maximale." 
  },
  { 
    icon: BrainCircuit, 
    title: "Machine Learning & Prédiction", 
    description: "Transformez vos données en prédictions. Anticipez les tendances du marché, la demande client et les risques opérationnels." 
  },
  { 
    icon: Cpu, 
    title: "IA Générative & Contenu", 
    description: "Créez du contenu, des designs et du code à une vitesse inégalée. Révolutionnez votre créativité et votre production." 
  },
  { 
    icon: ShieldCheck, 
    title: "Analyse de Données & Vision", 
    description: "Extrayez des informations cruciales de vos images, vidéos et documents pour une prise de décision éclairée." 
  },
];

// Étapes du processus
export const processSteps = [
  { 
    name: "Audit & Cadrage", 
    description: "Nous analysons vos processus et identifions les cas d'usage IA à plus fort ROI." 
  },
  { 
    name: "Preuve de Concept (PoC)", 
    description: "Nous développons un prototype rapide pour valider la faisabilité et l'impact de la solution." 
  },
  { 
    name: "Développement & Intégration", 
    description: "Nous construisons la solution IA sur-mesure et l'intégrons parfaitement à votre SI existant." 
  },
  { 
    name: "Déploiement & Optimisation", 
    description: "Nous déployons la solution à grande échelle et l'optimisons en continu pour maximiser la performance." 
  },
];

// Mission, Vision, Valeur
export const missionVisionValues = [
  { 
    icon: Target, 
    title: "Notre Mission", 
    text: "Démocratiser l'IA pour toutes les entreprises, en créant des solutions pragmatiques et rentables qui génèrent un avantage concurrentiel durable." 
  },
  { 
    icon: Sparkles, 
    title: "Notre Vision", 
    text: "Devenir le partenaire de confiance pour la transformation IA, en guidant nos clients de l'expérimentation à l'industrialisation." 
  },
  { 
    icon: Check, 
    title: "Notre Valeur", 
    text: "Nous combinons expertise technique de pointe, compréhension métier approfondie et une approche éthique et responsable de l'IA." 
  }
];

// Variants d'animation
export const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

export const weightingMatrixHeaders = ["Critère", "Poids", "Score Actuel", "Impact Projeté", "Priorité"];

export const weightingMatrixRows = [
  {
    name: "Efficacité Opérationnelle",
    weight: "40%",
    score: "8.2/10",
    impact: "+15%",
    priority: "Élevée"
  },
  {
    name: "Coût de Mise en Œuvre",
    weight: "25%",
    score: "7.5/10",
    impact: "-5%",
    priority: "Moyenne"
  },
  {
    name: "Satisfaction Client",
    weight: "20%",
    score: "9.1/10",
    impact: "+12%",
    priority: "Élevée"
  },
  {
    name: "Complexité Technique",
    weight: "15%",
    score: "6.0/10",
    impact: "Neutre",
    priority: "Faible"
  }
];

export const testimonials = [
  {
    name: "Julien Moreau",
    position: "Directeur R&D, Innovatech",
    text: "L'équipe IA de KATECH a développé un algorithme prédictif qui a augmenté notre efficacité opérationnelle de 30%. Une véritable révolution pour nous.",
    company: "Innovatech",
    rating: 5,
    image: "/member2.webp"
  },
  {
    name: "Carla Rossi",
    position: "Fondatrice, LogiBot",
    text: "Leur expertise en automatisation intelligente nous a permis de réduire nos coûts de traitement de 50% en seulement 6 mois. Un partenaire indispensable.",
    company: "LogiBot",
    rating: 5,
    image: "/member1.webp"
  },
  {
    name: "David Chen",
    position: "CTO, HealthAI",
    text: "Grâce à leur solution de vision par ordinateur, la précision de nos diagnostics a fait un bond en avant. KATECH est à la pointe de la technologie.",
    company: "HealthAI",
    rating: 5,
    image: "/member4.webp",
  }
];
