import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Profile {
  id: string;
  name: string;
  role: string;
  email: string;
  phone?: string;
  linkedin_url?: string;
  github_url?: string;
  bio?: string;
  profile_image_url?: string;
  cv_url?: string;
}

export interface Skill {
  id: string;
  category: string;
  skill_name: string;
  icon?: string;
  color?: string;
  bg_color?: string;
  display_order: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon?: string;
  color?: string;
  bg_color?: string;
  github_url?: string;
  live_url?: string;
  metrics?: Array<{ label: string; value: string }>;
  display_order: number;
}

export interface Experience {
  id: string;
  type: 'work' | 'education';
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  icon?: string;
  color?: string;
  bg_color?: string;
  display_order: number;
}

export interface Leadership {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  icon?: string;
  color?: string;
  bg_color?: string;
  display_order: number;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credential_url?: string;
  icon?: string;
  color?: string;
  bg_color?: string;
  display_order: number;
}

export const usePortfolioData = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [leadership, setLeadership] = useState<Leadership[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch profile
        const { data: profileData, error: profileError } = await supabase
          .from('profile')
          .select('*')
          .single();
        
        if (profileError) throw profileError;
        setProfile(profileData);

        // Fetch skills
        const { data: skillsData, error: skillsError } = await supabase
          .from('skills')
          .select('*')
          .order('category, display_order');
        
        if (skillsError) throw skillsError;
        setSkills(skillsData || []);

        // Fetch projects
        const { data: projectsData, error: projectsError } = await supabase
          .from('projects')
          .select('*')
          .order('display_order');
        
        if (projectsError) throw projectsError;
        const formattedProjects = (projectsData || []).map(project => ({
          ...project,
          metrics: typeof project.metrics === 'string' 
            ? JSON.parse(project.metrics) 
            : Array.isArray(project.metrics) 
              ? project.metrics 
              : []
        }));
        setProjects(formattedProjects);

        // Fetch experiences
        const { data: experiencesData, error: experiencesError } = await supabase
          .from('experience')
          .select('*')
          .order('display_order');
        
        if (experiencesError) throw experiencesError;
        const formattedExperiences = (experiencesData || []).map(exp => ({
          ...exp,
          type: exp.type as 'work' | 'education'
        }));
        setExperiences(formattedExperiences);

        // Fetch leadership
        const { data: leadershipData, error: leadershipError } = await supabase
          .from('leadership')
          .select('*')
          .order('display_order');
        
        if (leadershipError) throw leadershipError;
        setLeadership(leadershipData || []);

        // Fetch certifications
        const { data: certificationsData, error: certificationsError } = await supabase
          .from('certifications')
          .select('*')
          .order('display_order');
        
        if (certificationsError) throw certificationsError;
        setCertifications(certificationsData || []);

      } catch (err) {
        console.error('Error fetching portfolio data:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    profile,
    skills,
    projects,
    experiences,
    leadership,
    certifications,
    loading,
    error,
  };
};