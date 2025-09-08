"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/fr';
import { Control, Controller, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { AppointmentFormData } from '@/resolvers/appointment-form-validator';
import { CalComSlot } from '@/types/calcom';
import { calComUtils } from '@/lib/calcom';

dayjs.extend(localizedFormat);
dayjs.locale('fr');

interface DateTimeSelectionProps {
  control: Control<AppointmentFormData>;
  setValue: UseFormSetValue<AppointmentFormData>;
  watch: UseFormWatch<AppointmentFormData>;
}

// Constants
const TIMEZONE = 'Europe/Paris';

const DateTimeSelection = ({ control, setValue, watch }: DateTimeSelectionProps) => {
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const watchedValues = watch();
  const selectedService = watch('service');
  const selectedDate = watch('date');

  // Fetch available slots when date changes
  useEffect(() => {
    if (selectedDate && typeof selectedService === 'object' && selectedService?.calComId) {
      // Format date in local timezone to avoid UTC conversion issues
      const dateString = calComUtils.formatDateForAPI(selectedDate);
      fetchAvailableSlots(selectedService.calComId, dateString);
    } else {
      // Reset time slots if no date is selected
      setAvailableSlots([]);
      setValue('time', '');
    }
  }, [selectedDate, selectedService, setValue]);

  const fetchAvailableSlots = async (eventTypeId: number, date: string) => {
    setLoading(true);
    setError(null);
    
    try {
      
      // Call our API route instead of Cal.com directly (to avoid CORS)
      const response = await fetch(`/api/slots?eventTypeId=${eventTypeId}&date=${date}`);
      const result = await response.json();
            
      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch slots');
      }
      
      const slots = result.slots;
      
      if (!slots || (Array.isArray(slots) ? slots.length === 0 : Object.keys(slots).length === 0)) {
        setAvailableSlots([]);
        return;
      }

      // Cal.com now returns slots as an array directly from our API
      let allSlots: CalComSlot[] = [];
      
      if (Array.isArray(slots)) {
        // Direct array format (what our API now returns)
        allSlots = slots;
      } else {
        // Fallback for object format (shouldn't happen with our API fix)
        allSlots = Object.values(slots).flat() as CalComSlot[];
      }

      if (allSlots.length === 0) {
        setAvailableSlots([]);
        return;
      }

      // Convert Cal.com slots to HH:MM format
      const formattedSlots = allSlots.map((slot: CalComSlot) => {
        const slotDate = new Date(slot.time);
        return slotDate.toLocaleTimeString('fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: TIMEZONE
        });
      });
      
      setAvailableSlots(formattedSlots);
    } catch (error) {
      console.error('Error fetching available slots:', error);
      setError(`Impossible de charger les créneaux disponibles`);
      
      // Don't fallback to default slots, let user know there's an issue
      setAvailableSlots([]);
    } finally {
      setLoading(false);
    }
  };

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
              onSelect={(date) => {
                field.onChange(date);
                setValue('time', ''); // Reset time when date changes
              }}
              disabled={{ 
                before: new Date() // Disable dates before today
              }}
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
            ? dayjs(watchedValues.date).format('dddd DD MMMM')
            : 'Heure de Paris (CET)'
          }
        </p>
        
        {error && (
          <div className="bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 mb-4">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">{error}</p>
          </div>
        )}
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Loader2 className="w-8 h-8 animate-spin text-blue-500 mb-2" />
            <p className="text-gray-500 dark:text-gray-400">Chargement des créneaux disponibles...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {availableSlots.length > 0 ? (
              availableSlots.map(time => (
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
              ))
            ) : (
              <div className="col-span-2 text-center py-4 text-gray-500 dark:text-gray-400">
                {selectedDate 
                  ? 'Aucun créneau disponible pour cette date'
                  : 'Veuillez sélectionner une date pour voir les créneaux disponibles'
                }
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default DateTimeSelection;