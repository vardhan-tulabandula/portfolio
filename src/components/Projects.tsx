import { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
  projects: Array<{
    id: string;
    title: string;
    description: string;
    tech: string[];
    image: string;
    github: string;
    demo?: string;
    featured: boolean;
  }>;
}

const Projects = ({ projects }: ProjectsProps) => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter(project => {
    if (filter === 'featured') return project.featured;
    return true;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in AI, machine learning, and full-stack development.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            <Button
              variant={filter === 'all' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setFilter('all')}
              className="px-4 py-2"
            >
              All Projects
            </Button>
            <Button
              variant={filter === 'featured' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setFilter('featured')}
              className="px-4 py-2"
            >
              <Filter className="h-4 w-4 mr-2" />
              Featured
            </Button>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Show more button */}
        {filteredProjects.length > 4 && (
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2"
            >
              {showAll ? 'Show Less' : `Show All ${filteredProjects.length} Projects`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;