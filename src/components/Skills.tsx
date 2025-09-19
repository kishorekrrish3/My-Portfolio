import { Code2, Database, Cloud, Users, Settings, Palette } from "lucide-react";
import { usePortfolioData } from "@/hooks/usePortfolioData";

const Skills = () => {
  const { skills, loading } = usePortfolioData();

  const iconMap: { [key: string]: any } = {
    Code2,
    Settings,
    Cloud,
    Users,
    Database,
    Palette,
  };

  // Group skills by category
  const skillCategories = skills.reduce((acc, skill) => {
    const existing = acc.find(cat => cat.title === skill.category);
    if (existing) {
      existing.skills.push(skill.skill_name);
    } else {
      acc.push({
        title: skill.category,
        icon: iconMap[skill.icon || 'Code2'] || Code2,
        skills: [skill.skill_name],
        color: skill.color || "text-primary",
        bgColor: skill.bg_color || "bg-primary/10",
      });
    }
    return acc;
  }, [] as Array<{
    title: string;
    icon: any;
    skills: string[];
    color: string;
    bgColor: string;
  }>);

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

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gradient-card rounded-xl p-6 shadow-card">
                    <div className="h-8 bg-muted rounded mb-4"></div>
                    <div className="space-y-2">
                      {[1, 2, 3].map((j) => (
                        <div key={j} className="h-6 bg-muted rounded"></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;