export interface Project {
  id: string;
  title: string;
  company: string;
  category: string;
  status: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  website?: string;
  github?: string;
  githubLabel?: string;
}
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}
export interface SkillGroup {
  title: string;
  skills: string[];
}
export interface ExpertiseArea {
  title: string;
  description: string;
}
