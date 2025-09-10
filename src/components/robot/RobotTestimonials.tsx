"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { testimonials } from '@/constants/robot';

const RobotTestimonials = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        ),
      5000 // Change slide every 5 seconds
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const currentTestimonial = testimonials[index];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative max-w-4xl mx-auto w-full overflow-hidden"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Ils nous font confiance</h2>
        <p className="text-xl text-gray-400 mt-4">Des résultats concrets pour des partenaires ambitieux.</p>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/50 border border-[#00C2FF]/20 rounded-3xl p-8 md:p-12 relative"
        >
          <Quote className="absolute top-8 right-8 w-24 h-24 text-[#00C2FF]/10" />
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#00C2FF]" fill="#00C2FF" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed italic">
              &ldquo;{currentTestimonial.text}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <Image
                src={currentTestimonial.image}
                alt={`Photo de ${currentTestimonial.name}`}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#00C2FF]"
              />
              <div>
                <p className="font-bold text-white text-lg">{currentTestimonial.name}</p>
                <p className="text-gray-400">{currentTestimonial.position}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-[#00C2FF] w-8' : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default RobotTestimonials; 