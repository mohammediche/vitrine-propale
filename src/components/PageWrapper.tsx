"use client";
import React, {useEffect} from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const hideHeaderFooter = [
    '/', // IntroPage
    '/prendre-rdv',
    '/recrutement/orientation', 
    '/services/robot-intelligent',
  ];

  const shouldHideHeaderFooter = hideHeaderFooter.some(path => pathname === path);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      {children}
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};

export default PageWrapper; 