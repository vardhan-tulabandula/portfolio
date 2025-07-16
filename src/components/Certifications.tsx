import { useState } from 'react';
import { Award, ExternalLink, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description: string;
  certificateUrl: string;
  verificationUrl: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications = ({ certifications }: CertificationsProps) => {
  const [hoveredCert, setHoveredCert] = useState<string | null>(null);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (certId: string, event: React.MouseEvent) => {
    setHoveredCert(certId);
    setPreviewPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredCert) {
      setPreviewPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseLeave = () => {
    setHoveredCert(null);
  };

  return (
    <section id="certifications" className="py-20 bg-muted/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise in various technologies and domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={cert.id}
              className="bg-card hover:bg-card-hover transition-all duration-300 border-border hover:border-primary/30 cursor-pointer group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={(e) => handleMouseEnter(cert.id, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <Badge variant="secondary" className="text-xs">
                    {cert.date}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                  {cert.name}
                </CardTitle>
                <CardDescription className="text-primary font-medium">
                  {cert.issuer}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex gap-2">
                  {/* <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(cert.verificationUrl, '_blank')}
                    className="flex items-center gap-1 text-xs"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Verify
                  </Button> */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1 text-xs text-muted-foreground"
                  >
                    <Eye className="h-3 w-3" />
                    Hover to preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certificate Preview Popup */}
        {hoveredCert && (
          <div
            className="fixed z-50 pointer-events-none"
            style={{
              left: `${previewPosition.x + 20}px`,
              top: `${previewPosition.y - 100}px`,
              transform: 'translateY(-50%)',
            }}
          >
            <div className="bg-card border border-border rounded-lg shadow-xl p-2 max-w-sm">
              <img
                src={certifications.find(c => c.id === hoveredCert)?.certificateUrl}
                alt="Certificate Preview"
                className="w-full h-auto rounded border border-border shadow-sm"
                style={{ maxHeight: '300px', objectFit: 'contain' }}
              />
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Certificate Preview
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;