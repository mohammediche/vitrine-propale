"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from "next/image";
import { 
  Linkedin, 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import { footerLinks } from '@/constants/navigationLinks';
import { useNavigate } from '@/hooks/useNavigate';

const Footer = () => {
    const { navigateTo } = useNavigate();

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', color: 'hover:text-blue-400', url: 'https://www.linkedin.com/company/katech-web/' },
    { icon: Facebook, name: 'Facebook', color: 'hover:text-blue-600', url: 'https://www.facebook.com/profile.php/?id=61556774205064' },
    { icon: Instagram, name: 'Instagram', color: 'hover:text-pink-500', url: 'https://www.instagram.com/katech.fr?igsh=MXRra24yZXJueWxlbA==' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
               <Link href="/home">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <Image
                    src="/logo-katech-light.png"
                    alt="KATECH Logo"
                    width={120}
                    height={32}
                    className="h-8 w-auto"
                />
                </motion.div>
              </Link>
              <p className="text-gray-400 mt-4 leading-relaxed">
                 Partenaire stratégique en transformation digitale, combinant vision et exécution. Nous transformons les processus en solutions digitales intelligentes.
              </p>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>123 Avenue des Champs-Élysées, 75008 Paris</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <span>contact@katech.fr</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold text-white mb-4 block">Services</span>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.id}>
                  <Link
                    href={`/services/${link.id}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold text-white mb-4 block">Entreprise</span>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold text-white mb-4 block">Ressources</span>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  {link.path === '#' ? (
                    <button
                      onClick={() => navigateTo(`/services/${link.name}`)}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.path}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold text-white mb-4 block">Légal</span>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigateTo(link.path)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 KATECH. Tous droits réservés. Conçu avec passion pour l&apos;excellence.
            </p>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.button
                  key={index}
                  onClick={() => window.open(social.url, '_blank')}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-700`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
