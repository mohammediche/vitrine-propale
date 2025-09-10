import { Building2, BookOpenCheck, Cpu, Bot, School, Megaphone } from 'lucide-react';

export const services = [
    { id: 'structuration-jeune-entreprise', name: "Structuration & Jeune entreprise", icon: Building2,calComId: 3227876, duration: 60,  }, 
    { id: 'conseil-audit', name: "Conseil & Audit", icon: BookOpenCheck,calComId: 3227875,  duration: 60, },
    { id: 'services-informatiques', name: "Services Informatiques", icon: Cpu ,calComId: 3260707,duration: 60},
    { id: 'robot-intelligent', name: "Robot Intelligent", icon: Bot, isPremium: true ,calComId: 3260717,duration: 60 },
    { id: 'formation', name: "Formation", icon: School ,calComId: 3260720,duration: 60 },
    { id: 'marketing-communication', name: "Marketing & Communication", icon: Megaphone ,calComId: 3260725,duration: 60 }
  ];

export const company = [
    { name: 'À propos', path: '/about' },
    { name: 'Notre équipe', path: '/about#equipe' },
    { name: 'Recrutement', path: '/recrutement' },
    { name: 'Contact', path: '/contact' }
  ];
export const resources = [
    { name: 'Newsletters', path: '/newsletters' },
    { name: 'Blog', path: '/newsletters' },
    { name: 'Études de cas', path: '#' },
    { name: 'FAQ', path: '/home#faq' }
  ];
  export const legal = [
    { name: "Mentions légales", path: "/legal/mentions-legales" },
    { name: "Politique de confidentialité", path: "/legal/politique-de-confidentialite" },
    { name: "Conditions d'utilisation", path: "/legal/conditions-utilisation" },
    { name: "Politique de Cookies", path: "/legal/politique-cookies" },
    { name: "RGPD", path: "/legal/rgpd" },
  ];
  
export const footerLinks = {
    services,
    company,
    resources,
    legal
}