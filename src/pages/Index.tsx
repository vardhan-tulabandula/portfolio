import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { ScrollProvider } from '@/hooks/useScroll';
import portfolioData from '@/data/portfolio.json';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <ScrollProvider>
      <div className="min-h-screen bg-background">
        <Navbar profileData={portfolioData.profile} />
        <Hero profileData={portfolioData.profile} />
        <About 
          profile={portfolioData.profile} 
          experience={portfolioData.experience} 
          education={portfolioData.education} 
        />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <Certifications certifications={portfolioData.certifications} />
        <ContactForm email={portfolioData.profile.email} />
        <Footer profileData={portfolioData.profile} />
      </div>
    </ScrollProvider>
  );
};

export default Index;
