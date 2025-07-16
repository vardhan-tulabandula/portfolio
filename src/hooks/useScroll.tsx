import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ScrollContextType {
  isHeroVisible: boolean;
  isNavbarVisible: boolean;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    const heroElement = document.getElementById('home');
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsHeroVisible(isVisible);
        setIsNavbarVisible(!isVisible);
      },
      {
        threshold: 0.3, // Trigger when 30% of hero is visible
        rootMargin: '-100px 0px 0px 0px' // Offset for smoother transition
      }
    );

    observer.observe(heroElement);

    return () => observer.disconnect();
  }, []);

  return (
    <ScrollContext.Provider value={{ isHeroVisible, isNavbarVisible }}>
      {children}
    </ScrollContext.Provider>
  );
};