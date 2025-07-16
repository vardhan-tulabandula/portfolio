import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FooterProps {
  profileData: {
    name: string;
    github: string;
    linkedin: string;
    email: string;
  };
}

const Footer = ({ profileData }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">{profileData.name}</h3>
            <p className="text-muted-foreground">
              AI & Data Science Enthusiast passionate about building innovative solutions 
              that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
            © {currentYear} {profileData.name}. All rights reserved.
          </p>
          <div className="flex items-center text-muted-foreground text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>using React & Vite</span>
          </div>
        </div>

        {/* Back to top button */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="hover:bg-primary hover:text-primary-foreground"
          >
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;