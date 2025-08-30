import React from 'react';
import { Sparkles, BrainCircuit, Lightbulb, Rocket } from 'lucide-react';

// Types TypeScript
export interface QuizQuestion {
  question: string;
  options: string[];
}

export interface QuizResult {
  message: string;
  icon: React.ReactNode;
}

export interface QuizResults {
  [key: string]: QuizResult;
  default: QuizResult;
}

// Données du quiz
export const quizData: QuizQuestion[] = [
  {
    question: "Quelle est votre compétence forte ?",
    options: ["Développement / Tech", "Stratégie / Conseil", "Business / Développement", "Communication / Marketing"],
  },
  {
    question: "Dans quel domaine aimeriez-vous évoluer ?",
    options: ["Intelligence Artificielle", "Structuration & Conseil", "IT & Solutions digitales", "Marketing & Communication"],
  },
  {
    question: "Votre niveau d'expérience ?",
    options: ["Junior", "Intermédiaire", "Senior", "Expert"],
  },
];

// Résultats du quiz
export const results: QuizResults = {
  "Développement / Tech": { 
    message: "Votre esprit innovateur correspond parfaitement à notre pôle Tech. Explorez nos offres ou surprenez-nous ! 🚀", 
    icon: <Rocket className="w-12 h-12 mx-auto mb-6 text-white" /> 
  },
  "Stratégie / Conseil": { 
    message: "Votre vision stratégique est un atout majeur pour nos clients. Découvrez comment vous pouvez contribuer. ✨", 
    icon: <Lightbulb className="w-12 h-12 mx-auto mb-6 text-white" /> 
  },
  "Business / Développement": { 
    message: "Votre profil business est précieux pour accélérer notre croissance. Trouvez votre place chez KATECH ! 📈", 
    icon: <Sparkles className="w-12 h-12 mx-auto mb-6 text-white" /> 
  },
  "Communication / Marketing": { 
    message: "Vos talents sont essentiels pour faire rayonner notre vision. Rejoignez l'aventure ! 📣", 
    icon: <BrainCircuit className="w-12 h-12 mx-auto mb-6 text-white" /> 
  },
  default: { 
    message: "Votre profil est unique et nous intéresse ! Découvrez nos offres ou envoyez-nous votre candidature. 💡", 
    icon: <Sparkles className="w-12 h-12 mx-auto mb-6 text-white" /> 
  }
}; 