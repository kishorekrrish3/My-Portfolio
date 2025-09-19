import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap, Brain, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Automated Grading System using EasyOCR & Semantic Similarity",
      description: "AI-driven system that uses EasyOCR and NLP to automatically grade student assessments, achieving 95% accuracy and reducing manual evaluation time by 70%.",
      technologies: ["Python", "EasyOCR", "NLP", "TensorFlow", "Machine Learning"],
      icon: Brain,
      color: "text-primary",
      bgColor: "bg-primary/10",
      metrics: [
        { label: "Accuracy", value: "95%" },
        { label: "Time Saved", value: "70%" },
      ],
      githubUrl: "https://github.com/kishorekrrish3",
      liveUrl: "#",
    },
    {
      title: "AI-Powered Emotional Virtual Assistant for System Insights",
      description: "Innovative virtual assistant that performs emotion detection and provides real-time system health metrics, leading to a 60% improvement in user engagement.",
      technologies: ["Python", "Computer Vision", "React", "Node.js", "APIs"],
      icon: Zap,
      color: "text-accent",
      bgColor: "bg-accent/10",
      metrics: [
        { label: "Engagement", value: "+60%" },
        { label: "Real-time", value: "100%" },
      ],
      githubUrl: "https://github.com/kishorekrrish3",
      liveUrl: "#",
    },
    {
      title: "Multimodal Real-Time Violence Detection",
      description: "Advanced machine learning model for real-time violence detection using audio and visual cues, achieving 90% precision in identifying violent behaviors.",
      technologies: ["Python", "Computer Vision", "Audio Processing", "Deep Learning"],
      icon: Shield,
      color: "text-purple-600",
      bgColor: "bg-purple-600/10",
      metrics: [
        { label: "Precision", value: "90%" },
        { label: "Real-time", value: "✓" },
      ],
      githubUrl: "https://github.com/kishorekrrish3",
      liveUrl: "#",
    },
  ];

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

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Icon */}
                  <div className={`p-3 rounded-lg ${project.bgColor} w-fit mb-4`}>
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
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl !== "#" && (
                      <Button
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
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
        </div>
      </div>
    </section>
  );
};

export default Projects;