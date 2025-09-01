"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AppointmentFormData } from '@/resolvers/appointment-form-validator';

interface ContactFormProps {
  control: Control<AppointmentFormData>;
  errors: FieldErrors<AppointmentFormData>;
}

const ContactForm = ({ control, errors }: ContactFormProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
        Presque terminé !
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        Veuillez renseigner vos informations.
      </p>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Nom complet *"
                  className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="email"
                  placeholder="Email *"
                  className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>
        
        <div>
          <Controller
            name="company"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Entreprise (optionnel)"
                className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
              />
            )}
          />
        </div>
        
        <div>
          <Controller
            name="details"
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                placeholder="Dites-nous en plus sur votre projet (optionnel)"
                className="w-full p-3 border rounded-lg min-h-[120px] resize-none bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
              />
            )}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm; 