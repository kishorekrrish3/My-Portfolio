import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap, Brain, Shield } from "lucide-react";
import { usePortfolioData } from "@/hooks/usePortfolioData";

const Projects = () => {
  const { projects, loading } = usePortfolioData();

  const iconMap: { [key: string]: any } = {
    Brain,
    Zap,
    Shield,
    Github,
  };

  return (
    <section id="projects" className="py-20 bg-project-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions leveraging AI, machine learning, and modern web technologies 
              to solve real-world problems.
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gradient-card rounded-xl p-6 shadow-card">
                    <div className="h-12 w-12 bg-muted rounded-lg mb-4"></div>
                    <div className="h-6 bg-muted rounded mb-3"></div>
                    <div className="h-16 bg-muted rounded mb-4"></div>
                    <div className="h-8 bg-muted rounded mb-4"></div>
                    <div className="space-y-2 mb-6">
                      {[1, 2, 3].map((j) => (
                        <div key={j} className="h-4 bg-muted rounded"></div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <div className="h-8 bg-muted rounded flex-1"></div>
                      <div className="h-8 bg-muted rounded flex-1"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const Icon = iconMap[project.icon || 'Brain'] || Brain;
              return (
                <div
                  key={project.title}
                  className="bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Icon */}
                  <div className={`p-3 rounded-lg ${project.bg_color} w-fit mb-4`}>
                    <Icon className={`w-8 h-8 ${project.color}`} />
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="flex gap-4 mb-4">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <div className={`text-lg font-bold ${project.color}`}>
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-background rounded text-xs font-medium text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.live_url && project.live_url !== "#" && (
                      <Button
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;