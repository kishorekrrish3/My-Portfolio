import { Award, Users, Badge, ExternalLink } from "lucide-react";
import { usePortfolioData } from "@/hooks/usePortfolioData";

const Leadership = () => {
  const { leadership, certifications, loading } = usePortfolioData();

  const iconMap: { [key: string]: any } = {
    Users,
    Badge,
    Award,
  };

  return (
    <section id="leadership" className="py-20 bg-skill-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Leadership & <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Demonstrating leadership skills and continuous learning through professional certifications.
            </p>
          </div>

          {/* Leadership Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Leadership Experience</h3>
            {loading ? (
              <div className="grid grid-cols-1 gap-8">
                <div className="animate-pulse">
                  <div className="bg-gradient-card rounded-xl p-8 shadow-card">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-muted rounded-xl"></div>
                      <div className="flex-1">
                        <div className="h-6 bg-muted rounded mb-4"></div>
                        <div className="h-16 bg-muted rounded mb-4"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[1, 2, 3, 4].map((j) => (
                            <div key={j} className="h-4 bg-muted rounded"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8">
                {leadership.map((item, index) => {
                  const Icon = iconMap[item.icon || 'Users'] || Users;
                return (
                  <div
                    key={index}
                    className="bg-gradient-card rounded-xl p-8 shadow-card hover:shadow-hover transition-all duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <div className={`p-4 rounded-xl ${item.bg_color} flex-shrink-0`}>
                        <Icon className={`w-8 h-8 ${item.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-foreground mb-1">
                              {item.title}
                            </h4>
                            <h5 className={`text-lg font-semibold ${item.color} mb-2`}>
                              {item.organization}
                            </h5>
                          </div>
                          <span className="text-muted-foreground font-medium">{item.period}</span>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                  </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Professional Certifications</h3>
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gradient-card rounded-xl p-6 shadow-card">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-muted rounded-lg"></div>
                        <div className="flex-1">
                          <div className="h-5 bg-muted rounded mb-2"></div>
                          <div className="h-4 bg-muted rounded"></div>
                        </div>
                      </div>
                      <div className="h-12 bg-muted rounded mb-4"></div>
                      <div className="h-4 bg-muted rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {certifications.map((cert, index) => {
                  const Icon = iconMap[cert.icon || 'Badge'] || Badge;
                return (
                  <div
                    key={index}
                    className="bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${cert.bg_color} flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${cert.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                          {cert.title}
                        </h4>
                        <div className="flex items-center justify-between">
                          <span className={`font-semibold ${cert.color}`}>
                            {cert.issuer}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {cert.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>
                    
                    {cert.credential_url && cert.credential_url !== "#" && (
                      <a
                        href={cert.credential_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Credential
                      </a>
                    )}
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

export default Leadership;