import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { emailValidator, requiredString } from './utils';

// Schéma de validation pour le formulaire robot IA
export const robotFormSchema = z.object({
  name: requiredString()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères'),
  email: emailValidator,
  company: requiredString()
    .min(2, 'Le nom de l\'entreprise doit contenir au moins 2 caractères')
    .max(100, 'Le nom de l\'entreprise ne peut pas dépasser 100 caractères')
    .optional(),
  message: requiredString()
    .min(20, 'Votre message doit contenir au moins 20 caractères')
    .max(1000, 'Votre message ne peut pas dépasser 1000 caractères'),
});

// Type TypeScript dérivé du schéma
export type RobotFormData = z.infer<typeof robotFormSchema>;

// Resolver pour React Hook Form
export const robotFormResolver = zodResolver(robotFormSchema); 