import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/kishorekrrish3",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/kishore-p-vitc/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:kidkrrish3@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo/Name */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Kishore P
            </h3>
            <p className="text-background/70 mt-2">
              Software Application Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mb-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background/10 rounded-lg hover:bg-background/20 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="border-t border-background/20 pt-6 w-full">
            <p className="text-background/70 text-sm flex items-center justify-center gap-2">
              © {currentYear} Kishore P. Made with <Heart className="w-4 h-4 text-red-500" /> using React & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;