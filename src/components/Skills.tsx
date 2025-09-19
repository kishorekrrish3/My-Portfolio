import { Code2, Database, Cloud, Users, Settings, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "Java", "JavaScript", "C", "C++", "C#"],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Frameworks & Libraries",
      icon: Settings,
      skills: ["React", "Node.js", "TensorFlow", "TailwindCSS", "DSA", "OOP"],
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Tools & Platforms",
      icon: Cloud,
      skills: ["Git", "GitHub", "Docker", "Kubernetes", "AWS", "GCP", "Linux", "API", "MongoDB", "MySQL", "AppWrite", "Figma"],
      color: "text-purple-600",
      bgColor: "bg-purple-600/10",
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Agile", "Scrum", "Team Leadership", "Design", "Communication", "Responsibility"],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-skill-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning from programming languages to cloud platforms, 
              enabling me to build scalable and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg ${category.bgColor} mr-4`}>
                      <Icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 bg-background rounded-lg text-sm font-medium text-foreground border border-border hover:border-primary transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;