import { zodResolver } from '@hookform/resolvers/zod';
import zod from 'zod';
import { FieldErrorMessage, requiredString, emailValidator } from './utils';

export const contactFormValidator = zod.object({
  name: requiredString().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: emailValidator,
  company: zod.string().optional(),
  phone: zod.string().optional(),
  subject: requiredString().min(1, FieldErrorMessage.shouldChoose),
  message: requiredString().min(10, 'Le message doit contenir au moins 10 caractères'),
});

export type ContactFormData = zod.infer<typeof contactFormValidator>;
export const contactFormResolver = zodResolver(contactFormValidator);
