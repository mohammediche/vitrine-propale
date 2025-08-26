"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles, Sun, Moon } from 'lucide-react';
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { services } from '@/constants/navigationLinks';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setServicesMenuOpen(false);
  }

  const handleNavClick = (link: string) => {
    router.push(link);
  };
  
  const navLinkClasses = "text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-amber-400 transition-colors duration-300 font-medium";
  const activeNavLinkClasses = "text-blue-600 dark:text-amber-400";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/home" onClick={closeAllMenus} className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/logo.svg"
                alt="KATECH Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
            />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-grow items-center justify-center space-x-5">
            <Link href="/home" className={`${navLinkClasses} ${pathname === '/home' ? activeNavLinkClasses : ''}`}>
              Accueil
            </Link>
            <div className="relative" onMouseEnter={() => setServicesMenuOpen(true)} onMouseLeave={() => setServicesMenuOpen(false)}>
              <button className={`flex items-center gap-1 ${navLinkClasses} ${pathname.includes('/services/') ? activeNavLinkClasses : ''}`}>
                Services <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {isServicesMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4"
                  >
                    <ul className="space-y-1">
                      {services.map(service => (
                        <li key={service.id}>
                          <Link
                            href={`/services/${service.id}`}
                            className={`flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 ${pathname === `/services/${service.id}` ? 'bg-blue-100 dark:bg-gray-700 font-semibold' : ''}`}
                            onClick={() => setServicesMenuOpen(false)}
                          >
                           <div className="flex items-center gap-3">
                             <service.icon className="w-5 h-5 text-blue-500 dark:text-amber-400" />
                             <span className="text-sm">{service.name}</span>
                           </div>
                            {service.isPremium && (
                               <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, type: 'spring' }}
                                className="flex items-center gap-1 text-xs bg-amber-100 text-amber-600 dark:bg-amber-400/20 dark:text-amber-400 px-2 py-1 rounded-full"
                               >
                                 <Sparkles size={12}/>
                                 Premium
                               </motion.div>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
             <Link href="/about" className={`${navLinkClasses} ${pathname === '/about' ? activeNavLinkClasses : ''}`}>
              À propos
            </Link>
            <Link href="/newsletters" className={`${navLinkClasses} ${pathname === '/newsletters' ? activeNavLinkClasses : ''}`}>
                Newsletters
            </Link>
                          <Link href="/recrutement/orientation" className={`${navLinkClasses} ${pathname === '/recrutement/orientation' || pathname.startsWith('/recrutement') ? activeNavLinkClasses : ''}`}>
                Recrutement
              </Link>
                          <Link href="/contact" className={`${navLinkClasses} ${pathname === '/contact' ? activeNavLinkClasses : ''}`}>
                Contact
              </Link>
          </div>

          <div className="hidden md:flex items-center space-x-2 flex-shrink-0">
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleNavClick('Découvrez Propal')}
              className="btn-secondary rounded-[12px] text-xs px-3"
            >
              Découvrez Propale
            </Button>
            <Button
              size="sm"
              onClick={() => handleNavClick('Prendre RDV')}
              className="btn-primary pulse-animation rounded-[12px] text-xs px-3"
            >
              Prendre RDV
            </Button>
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              className="text-gray-800 dark:text-gray-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-lg p-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              <Link href="/home" className="text-left text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-amber-400 transition-colors duration-300" onClick={closeAllMenus}>Accueil</Link>
              <div>
                <button onClick={() => setServicesMenuOpen(!isServicesMenuOpen)} className="w-full flex justify-between items-center text-left text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-amber-400 transition-colors duration-300">
                  Services <ChevronDown size={16} className={`transition-transform ${isServicesMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                {isServicesMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 mt-2 space-y-2 overflow-hidden"
                  >
                    {services.map(service => (
                      <Link key={service.id} href={`/services/${service.id}`} className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-amber-400" onClick={closeAllMenus}>
                        <service.icon className="w-4 h-4" />
                        <span>{service.name}</span>
                         {service.isPremium && <span className="text-xs text-amber-500">(Premium)</span>}
                      </Link>
                    ))}
                  </motion.div>
                )}
                </AnimatePresence>
              </div>
              <Link href="/about" className="text-left text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-amber-400 transition-colors duration-300" onClick={closeAllMenus}>À propos</Link>
              <Link href="/newsletters" className="text-left text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-amber-400 transition-colors duration-300" onClick={closeAllMenus}>Newsletters</Link>
              <Link href="/recrutement/orientation" className="text-left text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-amber-400 transition-colors duration-300" onClick={closeAllMenus}>Recrutement</Link>
              <Link href="/contact" className="text-left text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-amber-400 transition-colors duration-300" onClick={closeAllMenus}>Contact</Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button variant="outline" onClick={() => handleNavClick('Découvrez Propal')} className="btn-secondary rounded-[12px]">Découvrez Propale</Button>
                <Button onClick={() => handleNavClick('Prendre RDV')} className="btn-primary rounded-[12px]">Prendre RDV</Button>
              </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;