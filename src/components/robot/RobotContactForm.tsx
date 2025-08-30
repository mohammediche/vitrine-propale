"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm, Controller } from 'react-hook-form';
import { robotFormResolver, RobotFormData } from '@/resolvers/robot-form-validator';

const RobotContactForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RobotFormData>({
    resolver: robotFormResolver,
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  const onSubmit = async (data: RobotFormData) => {
    try {
      // Simulation d'envoi (remplacez par votre logique d'API)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Ici vous pouvez ajouter votre logique d'envoi (API, email, etc.)
      console.log('Projet IA soumis:', data);
      
      // Succès - réinitialise le formulaire
      reset();
      
      // Optionnel : afficher un message de succès
      alert('Votre projet IA a été soumis avec succès !');
      
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      
      // Optionnel : afficher un message d'erreur
      alert('Erreur lors de la soumission. Veuillez réessayer.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="bg-gray-800/50 backdrop-blur-sm border border-[var(--accent-gold)]/20 rounded-3xl shadow-2xl p-8 md:p-10">
        <h3 className="text-3xl font-bold mb-8 text-white">Lancez votre projet IA</h3>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nom */}
          <div>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Nom complet *"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent-gold)]/50 transition-all duration-300"
                />
              )}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="email"
                  placeholder="Email *"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent-gold)]/50 transition-all duration-300"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

          {/* Entreprise */}
          <div>
            <Controller
              name="company"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Nom de votre entreprise"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent-gold)]/50 transition-all duration-300"
                />
              )}
            />
            {errors.company && (
              <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <Textarea
                  {...field}
                  placeholder="Quels sont vos objectifs avec l&apos;IA ?"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent-gold)]/50 transition-all duration-300 resize-none"
                />
              )}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Bouton d'envoi */}
          <Button 
            type="submit" 
            size="lg" 
            disabled={isSubmitting}
            className="w-full bg-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/90 text-black font-bold text-lg py-4 rounded-xl group"
          >
            {isSubmitting ? (
              'Envoi en cours...'
            ) : (
              <>
                Demander une démo
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default RobotContactForm; 