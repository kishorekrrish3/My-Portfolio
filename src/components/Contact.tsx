import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kidkrrish3@gmail.com",
      href: "mailto:kidkrrish3@gmail.com",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "Available on request",
      href: "#",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: "#",
      color: "text-purple-600",
      bgColor: "bg-purple-600/10",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/kishorekrrish3",
      color: "text-foreground hover:text-primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kishore-p-vitc/",
      color: "text-foreground hover:text-primary",
    },
  ];

  const handleGetInTouch = () => {
    window.open('mailto:kidkrrish3@gmail.com', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, innovative projects, 
              or just having a chat about technology and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-gradient-card rounded-lg shadow-card hover:shadow-hover transition-all duration-300"
                      >
                        <div className={`p-3 rounded-lg ${item.bgColor}`}>
                          <Icon className={`w-5 h-5 ${item.color}`} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {item.label}
                          </p>
                          {item.href !== "#" ? (
                            <a
                              href={item.href}
                              className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-gradient-card rounded-lg shadow-card hover:shadow-hover transition-all duration-300 ${social.color}`}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-card rounded-xl p-8 shadow-card text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Ready to Collaborate?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're looking for a dedicated developer for your team, 
                  need help with a project, or want to explore innovative solutions together, 
                  I'd love to hear from you.
                </p>
              </div>
              
              <Button 
                onClick={handleGetInTouch}
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-hover"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;