"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  size: number;
  duration: number;
  delay: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  color: string;
  opacity: number;
}

const AnimatedBlueBackground = ({ className = "" }) => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {        
        // Générer les particules uniquement côté client
        const generatedParticles = Array.from({ length: 70 }).map((_, i) => ({
            id: i,
            size: Math.random() * 2 + 0.5,
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 10,
            startX: Math.random() * 100,
            startY: Math.random() * 100,
            endX: (Math.random() - 0.5) * 300,
            endY: (Math.random() - 0.5) * 300,
            color: Math.random() > 0.3 ? '#EBC390' : '#FFFFFF',
            opacity: Math.random() * 0.5 + 0.1,
        }));
        
        setParticles(generatedParticles);
    }, []);

    return (
        <div className={`absolute inset-0 w-full h-full overflow-hidden animated-background ${className}`}>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        left: `${particle.startX}%`,
                        top: `${particle.startY}%`,
                        backgroundColor: particle.color,
                        opacity: particle.opacity,
                    }}
                    animate={{
                        x: [0, particle.endX, 0],
                        y: [0, particle.endY, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};

export default AnimatedBlueBackground;