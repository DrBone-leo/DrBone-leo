export interface BasicInfo {
  name: string;
  avatar: string; // URL or path
  titles: string[];
  birth: string;
  political: string;
  phones: string[];
  emails: string[];
  location: string;
}

export interface Education {
  period: string;
  school: string;
  college: string;
  major: string;
  degree: string;
  details?: string[];
}

export interface Experience {
  period: string;
  role: string; // Or event name for team support
  organization: string;
  description?: string;
  details?: string[];
}

export interface Project {
  title: string;
  role: string;
  level?: string; // e.g., National, Provincial
  description?: string;
}

export interface SmartSportsProject {
  title: string;
  category: string;
  goal: string;
  role: string;
  tech: string[];
  result: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  type: 'SCI' | 'CSCD' | 'Other';
  link?: string;
}

export interface IntellectualProperty {
  name: string;
  type: 'Patent' | 'Software Copyright';
  number: string;
  image?: string;
}

export interface Award {
  name: string;
  year: string;
  level: string;
  image?: string;
}