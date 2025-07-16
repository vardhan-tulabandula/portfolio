import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Wrench, Lightbulb } from 'lucide-react';

interface SkillsProps {
  skills: {
    languages: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
    concepts: string[];
  };
}

const Skills = ({ skills }: SkillsProps) => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: skills.languages,
      color: 'text-blue-400'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Lightbulb,
      skills: skills.frameworks,
      color: 'text-green-400'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: skills.databases,
      color: 'text-purple-400'
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: skills.tools,
      color: 'text-orange-400'
    },
    {
      title: 'Core Concepts',
      icon: Lightbulb,
      skills: skills.concepts,
      color: 'text-cyan-400'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build robust, scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.title}
                className="bg-card hover:bg-card-hover transition-all duration-300 hover:scale-[1.02] border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg text-foreground">
                    <IconComponent className={`h-5 w-5 mr-3 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-skill-badge text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default animate-fade-in"
                        style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;