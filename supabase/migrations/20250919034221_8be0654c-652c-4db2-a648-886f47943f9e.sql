-- Create profile table for basic information
CREATE TABLE public.profile (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  linkedin_url TEXT,
  github_url TEXT,
  bio TEXT,
  profile_image_url TEXT,
  cv_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create skills table
CREATE TABLE public.skills (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL,
  skill_name TEXT NOT NULL,
  icon TEXT,
  color TEXT,
  bg_color TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  technologies TEXT[] NOT NULL DEFAULT '{}',
  icon TEXT,
  color TEXT,
  bg_color TEXT,
  github_url TEXT,
  live_url TEXT,
  metrics JSONB DEFAULT '[]',
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create experience table
CREATE TABLE public.experience (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('work', 'education')),
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  location TEXT NOT NULL,
  period TEXT NOT NULL,
  description TEXT NOT NULL,
  achievements TEXT[] DEFAULT '{}',
  icon TEXT,
  color TEXT,
  bg_color TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create leadership table
CREATE TABLE public.leadership (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  organization TEXT NOT NULL,
  period TEXT NOT NULL,
  description TEXT NOT NULL,
  achievements TEXT[] DEFAULT '{}',
  icon TEXT,
  color TEXT,
  bg_color TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create certifications table
CREATE TABLE public.certifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  issuer TEXT NOT NULL,
  date TEXT NOT NULL,
  description TEXT NOT NULL,
  credential_url TEXT,
  icon TEXT,
  color TEXT,
  bg_color TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leadership ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certifications ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read access (since this is a portfolio site)
CREATE POLICY "Allow public read access to profile" ON public.profile FOR SELECT USING (true);
CREATE POLICY "Allow public read access to skills" ON public.skills FOR SELECT USING (true);
CREATE POLICY "Allow public read access to projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access to experience" ON public.experience FOR SELECT USING (true);
CREATE POLICY "Allow public read access to leadership" ON public.leadership FOR SELECT USING (true);
CREATE POLICY "Allow public read access to certifications" ON public.certifications FOR SELECT USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profile_updated_at BEFORE UPDATE ON public.profile FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_skills_updated_at BEFORE UPDATE ON public.skills FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON public.projects FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_experience_updated_at BEFORE UPDATE ON public.experience FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_leadership_updated_at BEFORE UPDATE ON public.leadership FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_certifications_updated_at BEFORE UPDATE ON public.certifications FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial profile data
INSERT INTO public.profile (name, role, email, phone, linkedin_url, github_url, bio, profile_image_url, cv_url) VALUES 
('Kishore P', 'Software Application Developer', 'kidkrrish3@gmail.com', NULL, 'https://www.linkedin.com/in/kishore-p-vitc/', 'https://github.com/kishorekrrish3', 'A highly motivated Computer Science student specializing in AI and Robotics. Passionate about applying innovative solutions to problems and contributing to impactful, scalable projects.', '/src/assets/kishore-profile.jpg', '#');

-- Insert skills data
INSERT INTO public.skills (category, skill_name, icon, color, bg_color, display_order) VALUES 
('Programming Languages', 'Python', 'Code2', 'text-primary', 'bg-primary/10', 1),
('Programming Languages', 'Java', 'Code2', 'text-primary', 'bg-primary/10', 2),
('Programming Languages', 'JavaScript', 'Code2', 'text-primary', 'bg-primary/10', 3),
('Programming Languages', 'C', 'Code2', 'text-primary', 'bg-primary/10', 4),
('Programming Languages', 'C++', 'Code2', 'text-primary', 'bg-primary/10', 5),
('Programming Languages', 'C#', 'Code2', 'text-primary', 'bg-primary/10', 6),
('Frameworks & Libraries', 'React', 'Settings', 'text-accent', 'bg-accent/10', 1),
('Frameworks & Libraries', 'Node.js', 'Settings', 'text-accent', 'bg-accent/10', 2),
('Frameworks & Libraries', 'TensorFlow', 'Settings', 'text-accent', 'bg-accent/10', 3),
('Frameworks & Libraries', 'TailwindCSS', 'Settings', 'text-accent', 'bg-accent/10', 4),
('Frameworks & Libraries', 'DSA', 'Settings', 'text-accent', 'bg-accent/10', 5),
('Frameworks & Libraries', 'OOP', 'Settings', 'text-accent', 'bg-accent/10', 6),
('Tools & Platforms', 'Git', 'Cloud', 'text-purple-600', 'bg-purple-600/10', 1),
('Tools & Platforms', 'GitHub', 'Cloud', 'text-purple-600', 'bg-purple-600/10', 2),
('Tools & Platforms', 'Docker', 'Cloud', 'text-purple-600', 'bg-purple-600/10', 3),
('Tools & Platforms', 'Kubernetes', 'Cloud', 'text-purple-600', 'bg-purple-600/10', 4),
('Tools & Platforms', 'AWS', 'Cloud', 'text-purple-600', 'bg-purple-600/10', 5),
('Tools & Platforms', 'GCP', 'Cloud', 'text-purple-600', 'bg-purple-600/10', 6),
('Tools & Platforms', 'Linux', 'Cloud', 'text-purple-600', 'bg-purple-600/10', 7),
('Tools & Platforms', 'API', 'Cloud', 'text-purple-600', 'bg-purple-600/10', 8),
('Tools & Platforms', 'MongoDB', 'Cloud', 'text-purple-600', 'bg-purple-600/10', 9),
('Tools & Platforms', 'MySQL', 'Cloud', 'text-purple-600', 'bg-purple-600/10', 10),
('Tools & Platforms', 'AppWrite', 'Cloud', 'text-purple-600', 'bg-purple-600/10', 11),
('Tools & Platforms', 'Figma', 'Cloud', 'text-purple-600', 'bg-purple-600/10', 12),
('Soft Skills', 'Agile', 'Users', 'text-orange-500', 'bg-orange-500/10', 1),
('Soft Skills', 'Scrum', 'Users', 'text-orange-500', 'bg-orange-500/10', 2),
('Soft Skills', 'Team Leadership', 'Users', 'text-orange-500', 'bg-orange-500/10', 3),
('Soft Skills', 'Design', 'Users', 'text-orange-500', 'bg-orange-500/10', 4),
('Soft Skills', 'Communication', 'Users', 'text-orange-500', 'bg-orange-500/10', 5),
('Soft Skills', 'Responsibility', 'Users', 'text-orange-500', 'bg-orange-500/10', 6);

-- Insert projects data
INSERT INTO public.projects (title, description, technologies, icon, color, bg_color, github_url, live_url, metrics, display_order) VALUES 
('Automated Grading System using EasyOCR & Semantic Similarity', 'AI-driven system that uses EasyOCR and NLP to automatically grade student assessments, achieving 95% accuracy and reducing manual evaluation time by 70%.', '{"Python", "EasyOCR", "NLP", "TensorFlow", "Machine Learning"}', 'Brain', 'text-primary', 'bg-primary/10', 'https://github.com/kishorekrrish3', '#', '[{"label": "Accuracy", "value": "95%"}, {"label": "Time Saved", "value": "70%"}]', 1),
('AI-Powered Emotional Virtual Assistant for System Insights', 'Innovative virtual assistant that performs emotion detection and provides real-time system health metrics, leading to a 60% improvement in user engagement.', '{"Python", "Computer Vision", "React", "Node.js", "APIs"}', 'Zap', 'text-accent', 'bg-accent/10', 'https://github.com/kishorekrrish3', '#', '[{"label": "Engagement", "value": "+60%"}, {"label": "Real-time", "value": "100%"}]', 2),
('Multimodal Real-Time Violence Detection', 'Advanced machine learning model for real-time violence detection using audio and visual cues, achieving 90% precision in identifying violent behaviors.', '{"Python", "Computer Vision", "Audio Processing", "Deep Learning"}', 'Shield', 'text-purple-600', 'bg-purple-600/10', 'https://github.com/kishorekrrish3', '#', '[{"label": "Precision", "value": "90%"}, {"label": "Real-time", "value": "✓"}]', 3);

-- Insert experience data
INSERT INTO public.experience (type, title, company, location, period, description, achievements, icon, color, bg_color, display_order) VALUES 
('work', 'Software Developer Intern', 'VitaData', 'Remote - Chennai, India', 'May 2025 - Present', 'Developed a React-based healthcare portal that cut onboarding time by 35%. Focused on creating intuitive user interfaces and optimizing application performance.', '{"Reduced user onboarding time by 35%", "Built responsive healthcare portal using React", "Collaborated with cross-functional teams remotely"}', 'Briefcase', 'text-primary', 'bg-primary/10', 1),
('education', 'Bachelor of Technology', 'Computer Science Engineering', 'Vellore Institute of Technology, Chennai', '2022 - 2026', 'Specializing in AI and Robotics with a strong foundation in computer science fundamentals, data structures, algorithms, and machine learning.', '{"Current CGPA: 8.21/10", "Specialization in AI and Robotics", "General Secretary of AI Club"}', 'GraduationCap', 'text-accent', 'bg-accent/10', 2);

-- Insert leadership data
INSERT INTO public.leadership (title, organization, period, description, achievements, icon, color, bg_color, display_order) VALUES 
('General Secretary', 'AI Club at VIT Chennai', '2023 - 2024', 'Coordinated over 20 events including workshops, hackathons, and technical seminars focused on artificial intelligence and machine learning.', '{"Organized 20+ AI/ML focused events", "Led a team of 15+ club members", "Increased club membership by 150%", "Managed budget of ₹50,000+ for events"}', 'Users', 'text-primary', 'bg-primary/10', 1);

-- Insert certifications data
INSERT INTO public.certifications (title, issuer, date, description, credential_url, icon, color, bg_color, display_order) VALUES 
('Scrum Fundamentals Certified (SFC)', 'ScrumStudy', '2024', 'Comprehensive understanding of Scrum framework, roles, events, and artifacts for agile project management.', '#', 'Badge', 'text-accent', 'bg-accent/10', 1),
('The Complete Full-Stack Web Development Bootcamp', 'Udemy', '2024', 'Intensive course covering HTML, CSS, JavaScript, React, Node.js, databases, and deployment strategies.', '#', 'Badge', 'text-purple-600', 'bg-purple-600/10', 2),
('AWS Certified Cloud Practitioner', 'Amazon Web Services', '2024', 'Foundational understanding of AWS cloud services, security, and pricing models.', '#', 'Badge', 'text-orange-500', 'bg-orange-500/10', 3),
('Foundational C# Certification', 'Microsoft', '2023', 'Core programming concepts in C# including object-oriented programming, data structures, and algorithms.', '#', 'Badge', 'text-green-600', 'bg-green-600/10', 4);