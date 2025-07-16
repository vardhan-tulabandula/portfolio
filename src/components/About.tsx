import { GraduationCap, Briefcase, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface AboutProps {
  profile: {
    name: string;
    bio: string;
    location: string;
  };
  experience: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
  }>;
  education: {
    degree: string;
    institution: string;
    year: string;
    gpa: string;
  };
}

const About = ({ profile, experience, education }: AboutProps) => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, experience, and passion for technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Bio Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">My Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {profile.bio}
              </p>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                {profile.location}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <GraduationCap className="h-5 w-5 mr-3 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <h4 className="font-semibold text-foreground">{education.degree}</h4>
                <p className="text-muted-foreground">{education.institution}</p>
                <p className="text-sm text-muted-foreground mt-1">{education.year}</p>
                <p className="text-sm text-primary font-medium mt-2">CGPA: {education.gpa}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
            <Briefcase className="h-6 w-6 mr-3 text-primary" />
            Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="bg-card hover:bg-card-hover transition-colors duration-300 border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{exp.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {exp.company} • {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;