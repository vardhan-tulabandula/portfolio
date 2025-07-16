import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScroll } from '@/hooks/useScroll';

interface NavbarProps {
  profileData: {
    name: string;
    github: string;
    linkedin: string;
    email: string;
    resume: string;
    profilePhoto: string;
  };
}

const Navbar = ({ profileData }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isNavbarVisible } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Profile Photo */}
          <div className="flex items-center space-x-3">
            {/* Animated Profile Photo */}
            <div className={`profile-photo-nav overflow-hidden transition-all duration-500 ease-in-out ${
              isNavbarVisible ? 'w-10 h-10 opacity-100' : 'w-0 h-0 opacity-0'
            }`}>
              <img
                src={profileData.profilePhoto}
                alt={profileData.name}
                className="w-full h-full object-cover rounded-full border-2 border-primary/30"
              />
            </div>
            
            {/* Logo */}
            <div className="font-bold text-xl text-primary">
              {/* {profileData.name.split(' ').map(name => name[0]).join('')} */}
              Vishnu
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href={profileData.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href={`mailto:${profileData.email}`}>
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={profileData.resume} target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border border-border rounded-lg mt-2 p-4 animate-fade-in">
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="border-t border-border pt-4 flex flex-wrap gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href={profileData.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href={`mailto:${profileData.email}`}>
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={profileData.resume} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;