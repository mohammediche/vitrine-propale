"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { useNavigate } from '@/hooks/useNavigate';
import Image from 'next/image';

const IntroPage = () => {
    const {navigateTo} = useNavigate();
    const [particles, setParticles] = useState<Array<{x: string, y: string, scale: number, opacity: number}>>([]);

    useEffect(() => {
        const newParticles = [...Array(30)].map(() => ({
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            scale: Math.random() * 0.5 + 0.1,
            opacity: Math.random() * 0.5
        }));
        setParticles(newParticles);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-screen w-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center text-white overflow-hidden"
        >
            <div className="absolute inset-0 opacity-20">
                {particles.map((particle, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white"
                        initial={{ 
                            x: particle.x, 
                            y: particle.y,
                            scale: particle.scale,
                            opacity: particle.opacity
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center p-6">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, duration: 1.5 }}
                    className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30"
                  >
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-medium">Conseil Transformation Digitale</span>
                </motion.div>

                 <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                 >
                    <Image
                      src="/logo.svg"
                      alt="KATECH Logo"
                      width={120}
                      height={32}
                      className="w-auto h-24 mx-auto mb-8"
                  />
                 </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    Prêt à révéler le potentiel de votre entreprise ?
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-lg text-gray-300 max-w-2xl mx-auto mb-10"
                >
                    KATECH déverrouille vos leviers stratégiques et vous conduit vers un futur plus performant.
                    Nous transformons vos processus en innovation numérique pour propulser votre performance.
                </motion.p>
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8, type: 'spring' }}
                >
                    <Button
                        onClick={()=> navigateTo('/home')} // { state: { animateRocket: true }}
                        size="lg"
                        className="bg-blue-500 text-white font-bold text-lg px-10 py-6 rounded-full group hover:bg-blue-600 shadow-lg shadow-blue-500/20"
                    >
                        Activez votre futur <Sparkles className="ml-2 w-5 h-5 group-hover:animate-ping" />
                    </Button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default IntroPage;