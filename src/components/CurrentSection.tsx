// src/components/CurrentSection.tsx
import React from 'react';
import AboutPage from '@/pages/about'; // Import your section components
import WorkExperience from '@/pages/work-experience';
import Education from '@/pages/education';
import Portfolio from '@/pages/portfolio';
import References from '@/pages/references';
import { CurrentSectionProps } from '@/types';

const CurrentSection: React.FC<CurrentSectionProps> = ({ sectionID }) => {
  switch (sectionID) {
    case 'about':
      return <AboutPage />;
    case 'work-experience':
      return <WorkExperience />;
    case 'education':
      return <Education />;
    case 'portfolio':
      return <Portfolio />;
    case 'references':
      return <References />;
    default:
      return null; // Handle the case where the sectionID is invalid
  }
};

export default CurrentSection;
