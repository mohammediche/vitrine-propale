"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/fr';
import { AppointmentFormData } from '@/resolvers/appointment-form-validator';

dayjs.extend(localizedFormat);
dayjs.locale('fr');

interface ConfirmationProps {
  appointmentData: AppointmentFormData;
}

const Confirmation = ({ appointmentData }: ConfirmationProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center"
    >
      <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
      <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
        Rendez-vous confirmé !
      </h2>
      <div className="flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
        <Mail className="w-5 h-5 mr-2" />
        <p>Un e-mail de confirmation a été envoyé à {appointmentData.email}</p>
      </div>
      <p className="text-gray-500 dark:text-gray-300 text-lg mb-8">
        Merci, {appointmentData.name}. Votre rendez-vous pour <br />
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          {typeof appointmentData.service === 'object' ? appointmentData.service.name : appointmentData.service}
        </span>{' '}
        est programmé le <br />
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          {appointmentData.date 
            ? dayjs(appointmentData.date).format('dddd DD MMMM YYYY')
            : ''
          }{' '}
          à {appointmentData.time}
        </span>
        .
      </p>
      
      
      <Button asChild size="lg" className="btn-primary">
        <Link href="/home">Retour à l&apos;accueil</Link>
      </Button>
    </motion.div>
  );
};

export default Confirmation; 