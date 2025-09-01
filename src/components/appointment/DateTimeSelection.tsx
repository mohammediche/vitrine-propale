"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Control, Controller, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { AppointmentFormData } from '@/resolvers/appointment-form-validator';

interface DateTimeSelectionProps {
  control: Control<AppointmentFormData>;
  setValue: UseFormSetValue<AppointmentFormData>;
  watch: UseFormWatch<AppointmentFormData>;
}

const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

const DateTimeSelection = ({ control, setValue, watch }: DateTimeSelectionProps) => {
  const watchedValues = watch();

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="flex flex-col md:flex-row gap-8"
    >
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
          Choisissez une date
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Sélectionnez le jour qui vous convient le mieux.
        </p>
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <Calendar
              selected={field.value}
              onSelect={field.onChange}
              disabled={{ before: new Date() }}
              className="rounded-md border p-0 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700"
            />
          )}
        />
      </div>
      
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
          Choisissez une heure
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          {watchedValues.date 
            ? format(watchedValues.date, 'eeee dd MMMM', { locale: fr })
            : 'Heure de Paris (CET)'
          }
        </p>
        <div className="grid grid-cols-2 gap-4">
          {timeSlots.map(time => (
            <Button
              key={time}
              type="button"
              onClick={() => setValue('time', time)}
              className={`
                justify-start transition-all duration-200 border-2
                ${watchedValues.time === time 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md hover:bg-blue-700 hover:border-blue-700' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }
              `}
            >
              <Clock className={`w-4 h-4 mr-2 ${watchedValues.time === time ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`} />
              {time}
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DateTimeSelection; 