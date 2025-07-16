import { ExternalLink, Github, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    tech: string[];
    image: string;
    github: string;
    demo?: string;
    featured: boolean;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-card hover:bg-card-hover transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border-border">
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="default" className="bg-primary text-primary-foreground">
            <Star className="h-3 w-3 mr-1" />
            Featured
          </Badge>
        </div>
      )}

      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop&auto=format`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-skill-badge text-foreground text-xs px-2 py-1"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
          {project.demo && (
            <Button size="sm" asChild className="flex-1">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;