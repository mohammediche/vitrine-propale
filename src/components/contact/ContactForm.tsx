"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { useForm, Controller } from 'react-hook-form';
import { contactFormResolver, ContactFormData } from '@/resolvers/contact-form-validator';
import { sendContactForm } from '@/services/front/contact';

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState<'initial' | 'loading' | 'success' | 'error'>('initial');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: contactFormResolver,
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading')
    setErrorMessage('')
  
    try {
      await sendContactForm(data)
      setSubmitStatus('success')
      reset()
      // Reset success status after 5 seconds
      setTimeout(() => setSubmitStatus('initial'), 5000)
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setSubmitStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Erreur lors de l\'envoi. Veuillez réessayer.'
      )
  
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('initial')
        setErrorMessage('')
      }, 5000)
    }
  }

  const isSubmitting = submitStatus === 'loading';

  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.7 }} 
      className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl shadow-lg"
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
            Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
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
        {/* Nom */}
        <div>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Nom complet *"
                className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            )}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
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
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Entreprise */}
        <div>
          <Controller
            name="company"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Entreprise"
                className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            )}
          />
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
                placeholder="Téléphone"
                className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            )}
          />
        </div>

        {/* Sujet */}
        <div>
          <Controller
            name="subject"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              >
                <option value="" disabled>Sujet *</option>
                <option value="audit-gratuit">Audit Gratuit</option>
                <option value="conseil-strategique">Conseil Stratégique</option>
                <option value="levee-de-fonds">Levée de Fonds</option>
                <option value="autre">Autre</option>
              </Select>
            )}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
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
                placeholder="Votre message *"
                className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                rows={4}
              />
            )}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Bouton d'envoi */}
        <Button 
          type="submit" 
          size="lg" 
          disabled={isSubmitting}
          className="w-full btn-primary font-bold text-lg group"
        >
          {isSubmitting ? (
            'Envoi en cours...'
          ) : (
            <>
              Envoyer le message 
              <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm; 