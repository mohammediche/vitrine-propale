"use client";
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RobotIAPage from './RobotIAPage';
import RobotIATransitionPage from './RobotIATransitionPage';

const RobotIAPageLoader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Reduced time for better UX

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading ? (
                <motion.div key="transition">
                    <RobotIATransitionPage />
                </motion.div>
            ) : (
                <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <RobotIAPage />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default RobotIAPageLoader;