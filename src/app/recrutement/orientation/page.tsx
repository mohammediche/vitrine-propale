"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Search, Send, Home } from 'lucide-react';
import { useNavigate } from '@/hooks/useNavigate';
import AnimatedBlueBackground from '@/components/ui/animatedBlueBackground';
import { quizData, results, QuizResult } from '@/constants/recruitment';

interface Answer {
  question: string;
  answer: string;
}

const RecruitmentOrientationPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);
  const { navigateTo } = useNavigate();

  const handleAnswer = (option: string) => {
    const newAnswer: Answer = {
      question: quizData[currentQuestion].question,
      answer: option
    };
    
    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };
  
  const calculateResult = (finalAnswers: Answer[]) => {
    // Utiliser la première réponse pour déterminer le profil principal
    const primarySkill = finalAnswers[0].answer;
    
    // Trouver le résultat correspondant ou utiliser le défaut
    const matchedResult = results[primarySkill as keyof typeof results];
    setResult(matchedResult || results.default);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const
      }
    }),
  };

  return (
    <>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen w-full bg-[#0A1F44] flex flex-col justify-center items-center p-6 text-white relative overflow-hidden"
    >
        <AnimatedBlueBackground />
        <div className="w-full max-w-3xl text-center relative z-10">
            <AnimatePresence mode="wait">
                {!result ? (
                     <motion.div
                        key={currentQuestion}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="w-full"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Quel rôle vous correspond le mieux chez KATECH ?</h1>
                        <p className="text-lg text-gray-300 mb-12">Répondez à ces quelques questions et découvrez l&apos;opportunité qui correspond à vos talents.</p>

                        <h3 className="text-2xl font-semibold mb-8 text-amber-400">{quizData[currentQuestion].question}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {quizData[currentQuestion].options.map((option, i) => (
                            <motion.button
                                key={option}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover={{ scale: 1.05, borderColor: '#EBC390' }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleAnswer(option)}
                                className="w-full text-left p-6 rounded-2xl border-2 border-white/30 bg-gray-800/50 backdrop-blur-sm shadow-lg transition-all text-lg font-semibold"
                            >
                                {option}
                            </motion.button>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                    >
                        {result.icon}
                        <p className="text-2xl md:text-3xl font-semibold mb-10 max-w-lg mx-auto">{result.message}</p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Button 
                                onClick={() => navigateTo('/recrutement#offres')}
                                size="lg" className="font-bold bg-white text-blue-600 hover:bg-gray-200">
                                <Search className="w-5 h-5 mr-2" />
                                Parcourir nos opportunités
                            </Button>
                            <Button 
                                onClick={() => navigateTo('/recrutement#candidature-spontanee')}
                                size="lg" className="bg-[#EBC390] text-black hover:bg-[#EBC390]/90 font-bold">
                                <Send className="w-5 h-5 mr-2" />
                                Candidature spontanée
                            </Button>
                        </div>
                        <Button 
                            onClick={() => navigateTo('/home')}
                            variant="link"
                            className="mt-8 text-white/80 hover:text-white"
                        >
                            <Home className="w-4 h-4 mr-2" />
                            Revenir à la page d&apos;accueil
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    </motion.div>
    </>
  );
};

export default RecruitmentOrientationPage;