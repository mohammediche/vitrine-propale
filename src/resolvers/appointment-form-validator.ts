import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { emailValidator } from './utils';

// Schéma de validation pour le formulaire de rendez-vous
export const appointmentFormSchema = z.object({
  service: z.object({
    id: z.string(),
    name: z.string(),
    calComId: z.number(),
    duration: z.number(),
  }).or(z.string().min(1, 'Veuillez sélectionner un service')),
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: emailValidator,
  company: z.string().optional(),
  details: z.string().optional(),
  date: z.date(),
  time: z.string().min(1, 'Veuillez sélectionner une heure'),
});

export type AppointmentFormData = z.infer<typeof appointmentFormSchema>;

export const appointmentFormResolver = zodResolver(appointmentFormSchema); 