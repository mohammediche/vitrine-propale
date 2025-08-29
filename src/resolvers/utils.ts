import { z } from 'zod';

export const FieldErrorMessage = {
  required: 'Ce champ est requis.',
  shouldChoose: 'Veuillez sélectionner une option.',
  emailNotValid: 'Email non valide',
};

export const requiredString = () => z.string().min(1, FieldErrorMessage.required);

export const emailValidator = z.string().refine(
  (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  FieldErrorMessage.emailNotValid
);