"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm, Controller } from 'react-hook-form';
import { spontaneousApplicationResolver, SpontaneousApplicationData } from '@/resolvers/spontaneous-application-validator';

interface JobApplicationFormProps {
  context: 'spontaneous' | 'specific-job';
  className?: string;
}

const JobApplicationForm = ({ context, className = '' }: JobApplicationFormProps) => {
  const cvInputRef = useRef<HTMLInputElement>(null);
  const [cvFileName, setCvFileName] = useState('');

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<SpontaneousApplicationData>({
    resolver: spontaneousApplicationResolver,
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      cvFile: null,
      coverLetter: '',
    },
  });

  // Fonction helper pour extraire le message d'erreur
  const getErrorMessage = (error: unknown): string => {
    if (error && typeof error === 'object' && 'message' in error) {
      return error.message as string;
    }
    return 'Erreur de validation';
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('cvFile', file);
      setCvFileName(file.name);
    }
  };

  const onSubmit = async (data: SpontaneousApplicationData) => {
    try {
      // Simulation d'envoi (remplacez par votre logique d'API)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Ici vous pouvez ajouter votre logique d'envoi (API, email, etc.)
      
      
      // Succès - réinitialise le formulaire
      reset();
      setCvFileName('');
      if (cvInputRef.current) cvInputRef.current.value = "";
      
      // Optionnel : afficher un message de succès
      alert('Candidature envoyée avec succès !');
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      
      // Optionnel : afficher un message d'erreur
      alert('Erreur lors de l\'envoi. Veuillez réessayer.');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={className}
    >      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Nom complet */}
        <div>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Nom complet *"
                className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            )}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{getErrorMessage(errors.fullName)}</p>
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
                className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{getErrorMessage(errors.email)}</p>
          )}
        </div>

        {/* Téléphone */}
        <div>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="tel"
                placeholder="Téléphone *"
                className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{getErrorMessage(errors.phone)}</p>
          )}
        </div>

        {/* CV Upload */}
        <div>
          <label htmlFor="cv-upload" className="flex items-center cursor-pointer p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
            <Upload className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400"/>
            <span className="text-gray-700 dark:text-gray-300 truncate">
              {cvFileName || "Téléverser votre CV *"}
            </span>
          </label>
          <input
            id="cv-upload"
            ref={cvInputRef}
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            className="hidden"
          />
          {errors.cvFile && (
            <p className="text-red-500 text-sm mt-1">{getErrorMessage(errors.cvFile)}</p>
          )}
        </div>

        {/* Lettre de motivation */}
        <div>
          <Controller
            name="coverLetter"
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                placeholder={context === 'specific-job' ? "Lettre de motivation..." : "Votre lettre de motivation (dites-nous pourquoi vous êtes exceptionnel)..."}
                rows={4}
                className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            )}
          />
        </div>
        
        {/* Bouton d'envoi */}
        <Button 
          type="submit" 
          size="lg" 
          disabled={isSubmitting}
          className="w-full bg-[#EBC390] text-black hover:bg-[#EBC390]/90 font-bold text-lg py-4 group"
        >
          {isSubmitting ? (
            'Envoi en cours...'
          ) : (
            <>
              Envoyer ma candidature <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default JobApplicationForm; 