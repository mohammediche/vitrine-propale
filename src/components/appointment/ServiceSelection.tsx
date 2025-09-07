"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radioGroup';
import { Label } from '@/components/ui/label';
import { services } from '@/constants/navigationLinks';
import { Control, Controller } from 'react-hook-form';
import { AppointmentFormData } from '@/resolvers/appointment-form-validator';

interface ServiceSelectionProps {
  control: Control<AppointmentFormData>;
}

const ServiceSelection = ({ control }: ServiceSelectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
        Quel service vous intéresse ?
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        Cela nous aidera à préparer notre échange.
      </p>
      
      <Controller
        name="service"
        control={control}
        render={({ field }) => (
          <RadioGroup
            onValueChange={(value) => {
              const selectedService = services.find(s => s.name === value);
              field.onChange(selectedService || value);
            }}
            value={typeof field.value === 'object' ? field.value.name : field.value}
            className="space-y-4"
          >
            {services.map(service => (
              <div 
                key={service.id} 
                onClick={() => field.onChange(service)}
                className="flex items-center p-4 border rounded-lg cursor-pointer transition-colors bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-300 data-[state=checked]:bg-blue-50 dark:data-[state=checked]:bg-blue-900/50 data-[state=checked]:border-blue-500 dark:data-[state=checked]:border-blue-400"
              >
                <RadioGroupItem value={service.name} id={service.id} />
                <Label htmlFor={service.id} className="ml-4 text-lg font-medium cursor-pointer">
                  {service.name}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
      />
    </motion.div>
  );
};

export default ServiceSelection; 