import { zodResolver } from '@hookform/resolvers/zod';
import zod from 'zod';
import { requiredString, emailValidator } from './utils';

export const spontaneousApplicationValidator = zod.object({
  fullName: requiredString().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: emailValidator,
  phone: requiredString().min(10, 'Le numéro de téléphone doit contenir au moins 10 chiffres'),
  resume: zod.any().refine((file) => file !== null, 'Le CV est obligatoire'),
  message: zod.string().optional(),
});

export type SpontaneousApplicationData = zod.infer<typeof spontaneousApplicationValidator>;
export const spontaneousApplicationResolver = zodResolver(spontaneousApplicationValidator); 