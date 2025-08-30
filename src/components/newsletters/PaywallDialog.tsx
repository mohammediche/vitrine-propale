"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Unlock, Sparkles } from 'lucide-react';
import Dialog from '@/components/ui/Dialog';

interface PaywallDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const PaywallDialog: React.FC<PaywallDialogProps> = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className="p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
          <Sparkles className="h-6 w-6 text-blue-600 dark:text-accent-electric-blue" />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contenu Premium</h2>
        <p className="text-base text-gray-500 dark:text-gray-400 mb-6">
          Cet article est réservé à nos membres. Débloquez-le pour un accès immédiat et permanent à nos analyses les plus pointues.
        </p>
        
        <div className="py-4 text-center mb-6">
          <p className="text-4xl font-bold text-gray-900 dark:text-white">0,99€</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Paiement unique, accès à vie.</p>
        </div>
        
        <Button 
          onClick={onConfirm} 
          className="w-full bg-[#EBC390] text-black hover:bg-[#EBC390]/90 font-bold" 
          size="lg"
        >
          <Unlock className="mr-2 h-5 w-5" /> Débloquer l&apos;article
        </Button>
      </div>
    </Dialog>
  );
};

export default PaywallDialog; 