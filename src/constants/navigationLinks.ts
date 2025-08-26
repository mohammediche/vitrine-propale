import { Building2, BookOpenCheck, Cpu, Bot, School, Megaphone } from 'lucide-react';

export const services = [
    { id: 'structuration-jeune-entreprise', name: "Structuration & Jeune entreprise", icon: Building2 },
    { id: 'conseil-audit', name: "Conseil & Audit", icon: BookOpenCheck },
    { id: 'services-informatiques', name: "Services Informatiques", icon: Cpu },
    { id: 'robot-intelligent', name: "Robot Intelligent", icon: Bot, isPremium: true },
    { id: 'formation', name: "Formation", icon: School },
    { id: 'marketing-communication', name: "Marketing & Communication", icon: Megaphone }
  ];

export const company = [
    { name: 'À propos', path: '/about' },
    { name: 'Notre équipe', path: '/about' },
    { name: 'Recrutement', path: '/recrutement' },
    { name: 'Contact', path: '/contact' }
  ];
export const resources = [
    { name: 'Newsletters', path: '/newsletters' },
    { name: 'Blog', path: '/newsletters' },
    { name: 'Études de cas', path: '#' },
    { name: 'Webinaires', path: '#' },
    { name: 'FAQ', path: '#' }
  ];
export const legal = [
    'Mentions légales',
    'Politique de confidentialité',
    'Conditions d\'utilisation',
    'Cookies',
    'RGPD'
];
export const footerLinks = {
    services,
    company,
    resources,
    legal
}