"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedBlueBackground from '@/components/ui/animatedBlueBackground';

const RobotIATransitionPage = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 35);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
            className="fixed inset-0 bg-[#1a027d] flex flex-col items-center justify-center z-50 overflow-hidden"
        >
            <AnimatedBlueBackground />
            
            <div className="relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-3xl md:text-5xl font-bold text-white mb-8"
                >
                    Vous entrez dans un nouvel univers
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-[#00C2FF] mt-4 text-sm font-mono"
                >
                    Initialisation du pôle IA... {progress}%
                </motion.p>
            </div>
        </motion.div>
    );
};

export default RobotIATransitionPage;