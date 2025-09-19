import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { usePortfolioData } from "@/hooks/usePortfolioData";

const Experience = () => {
  const { experiences, loading } = usePortfolioData();

  const iconMap: { [key: string]: any } = {
    Briefcase,
    GraduationCap,
  };

  const allItems = experiences.map(exp => ({
    ...exp,
    icon: iconMap[exp.icon || 'Briefcase'] || Briefcase,
  }));

  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Experience & <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and academic background in computer science and software development.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>

            {loading ? (
              <div className="space-y-12">
                {[1, 2].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="relative flex items-start gap-8">
                      <div className="hidden md:flex w-16 h-16 bg-muted rounded-full"></div>
                      <div className="flex-1 bg-gradient-card rounded-xl p-6 shadow-card">
                        <div className="h-6 bg-muted rounded mb-3"></div>
                        <div className="h-16 bg-muted rounded mb-4"></div>
                        <div className="space-y-2">
                          {[1, 2, 3].map((j) => (
                            <div key={j} className="h-4 bg-muted rounded"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-12">
                {allItems.map((item, index) => {
                  const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="relative flex items-start gap-8"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex w-16 h-16 bg-gradient-card rounded-full shadow-card items-center justify-center relative z-10">
                      <div className={`p-3 rounded-full ${item.bg_color}`}>
                        <Icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {item.title}
                          </h3>
                          <h4 className={`text-lg font-semibold ${item.color} mb-2`}>
                            {item.company}
                          </h4>
                        </div>
                        <div className="flex flex-col md:items-end gap-1">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-medium">{item.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <div
                            key={achievementIndex}
                            className="flex items-center gap-3"
                          >
                            <div className={`w-2 h-2 rounded-full ${item.color === 'text-primary' ? 'bg-primary' : 'bg-accent'}`}></div>
                            <span className="text-foreground font-medium text-sm">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;