"use client";
import React from 'react';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  isStepValid: boolean;
  isSubmitting: boolean;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
}

const NavigationButtons = ({
  currentStep,
  totalSteps,
  isStepValid,
  isSubmitting,
  onNext,
  onPrev,
  onSubmit
}: NavigationButtonsProps) => {
  if (currentStep >= totalSteps) return null;

  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t dark:border-gray-700">
      <Button
        variant="ghost"
        onClick={onPrev}
        disabled={currentStep === 1}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Précédent
      </Button>
      
      {currentStep < totalSteps - 1 ? (
        <Button
          onClick={onNext}
          disabled={!isStepValid}
        >
          Suivant
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      ) : (
        <Button
          onClick={onSubmit}
          disabled={!isStepValid || isSubmitting}
          className="bg-green-500 hover:bg-green-600"
        >
          {isSubmitting ? (
            'Confirmation...'
          ) : (
            <>
              Confirmer le RDV
              <CheckCircle className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      )}
    </div>
  );
};

export default NavigationButtons; 