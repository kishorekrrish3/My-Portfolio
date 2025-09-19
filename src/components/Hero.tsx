import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import profileImage from "@/assets/kishore-profile.jpg";

const Hero = () => {
  const handleDownloadCV = () => {
    // This would typically download a PDF file
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual CV file path
    link.download = 'Kishore_P_Resume.pdf';
    link.click();
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Kishore P
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
                Software Application Developer
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                A highly motivated Computer Science student specializing in AI and Robotics. 
                Passionate about applying innovative solutions to problems and contributing to 
                impactful, scalable projects.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={scrollToContact}
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-hover"
                >
                  Get In Touch
                </Button>
                <Button 
                  onClick={handleDownloadCV}
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Download CV
                </Button>
              </div>

              {/* Contact Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:kidkrrish3@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="hidden sm:inline">kidkrrish3@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kishore-p-vitc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/kishorekrrish3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-hero bg-gradient-card">
                <img
                  src={profileImage}
                  alt="Kishore P - Software Developer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;