import React, { useEffect } from 'react';
import HeaderSection from './HeaderSection';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import FooterSection from './FooterSection';

const WelcomePage = () => {
 

  return (
    <>
      <main>
        <HeaderSection />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <FooterSection />
      </main>
    </>
  );
};

export default WelcomePage;


