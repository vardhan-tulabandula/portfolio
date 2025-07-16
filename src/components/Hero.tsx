import { ArrowDown, Code, Database, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScroll } from '@/hooks/useScroll';

interface HeroProps {
  profileData: {
    name: string;
    title: string;
    subtitle: string;
    location: string;
    bio: string;
    resume: string;
    email: string;
    profilePhoto: string;
  };
}

const Hero = ({ profileData }: HeroProps) => {
  const { isHeroVisible } = useScroll();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-30">
        <Code className="h-8 w-8 text-primary animate-float" />
      </div>
      <div className="absolute top-40 right-20 opacity-30">
        <Database className="h-6 w-6 text-accent animate-float" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-40 left-20 opacity-30">
        <Brain className="h-10 w-10 text-primary animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 relative">
            <div className={`profile-photo-hero transition-all duration-500 ease-in-out ${
              isHeroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}>
              <img
                src={profileData.profilePhoto}
                alt={profileData.name}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {profileData.name}
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 font-medium">
            {profileData.title}
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            {profileData.subtitle}
          </p>
          
          <div className="flex items-center justify-center text-sm text-muted-foreground mb-8">
            <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
            {profileData.location}
          </div>
          
          <p className="text-base sm:text-lg text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {profileData.bio}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-glow"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;