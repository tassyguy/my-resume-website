import { ReactNode } from 'react';

// src/types.ts
export interface Job {
  title: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  skills: string[];
}

export interface Employer {
  employerName: string;
  jobs: Job[];
}

export interface PortfolioItem {
  name: string;
  link: string;
  icon: string;
  description: string;
}

export interface SectionProps {
  title: string;
  children: ReactNode;
}

export interface ContentContainerProps {
  children: ReactNode;
}

export interface PortfolioLinkProps {
  name: string;
  link: string;
  icon: string;
  description: string;
}

export interface JobProps {
  title: string;
  startDate: string;
  endDate: string;
  responsibilities: ReactNode;
  skills: ReactNode;
}

export interface EmployerProps {
  employerName: string;
  children: ReactNode;
}

export interface CurrentSectionProps {
  sectionID: string;
}

export interface EducationExperienceProps {
  name: string;
  startDate: string;
  endDate: string;
  major: string;
  minor?: string;
  description: string;
  coursework: string;
}

export interface ReferenceProfileProps {
  name: string;
  professionalTitle: string;
  company: string;
  relationship: string;
  email: string;
  phoneNumber: string;
  description: string;
}