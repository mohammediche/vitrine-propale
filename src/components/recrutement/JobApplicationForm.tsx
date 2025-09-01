"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm, Controller } from 'react-hook-form';
import { spontaneousApplicationResolver, SpontaneousApplicationData } from '@/resolvers/spontaneous-application-validator';
import { sendRecruitmentForm } from '@/services/front/recruitment';

interface JobApplicationFormProps {
  context: 'spontaneous' | 'specific-job';
  className?: string;
}

const JobApplicationForm = ({ context, className = '' }: JobApplicationFormProps) => {
  const cvInputRef = useRef<HTMLInputElement>(null);
  const [cvFileName, setCvFileName] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'initial' | 'loading' | 'success' | 'error'>('initial');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<SpontaneousApplicationData>({
    resolver: spontaneousApplicationResolver,
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      resume: null,
      message: '',
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
      setValue('resume', file);
      setCvFileName(file.name);
    }
  };

  const onSubmit = async (data: SpontaneousApplicationData) => {
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      await sendRecruitmentForm(data);
      setSubmitStatus('success');
      reset();
      setCvFileName('');
      if (cvInputRef.current) cvInputRef.current.value = "";
      
      // Reset success status after 3 seconds
      setTimeout(() => setSubmitStatus('initial'), 5000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Erreur lors de l\'envoi. Veuillez réessayer.'
      );
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('initial');
        setErrorMessage('');
      }, 5000);
    }
  };

  const isSubmitting = submitStatus === 'loading';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          <p className="text-green-800 dark:text-green-200 font-medium">
            Candidature envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.
          </p>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
          <p className="text-red-800 dark:text-red-200 font-medium">
            {errorMessage}
          </p>
        </motion.div>
      )}
      
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
          {errors.resume && (
            <p className="text-red-500 text-sm mt-1">{getErrorMessage(errors.resume)}</p>
          )}
        </div>

        {/* Lettre de motivation */}
        <div>
          <Controller
            name="message"
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