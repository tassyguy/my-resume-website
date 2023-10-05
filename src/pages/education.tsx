// pages/education.tsx
import React from 'react';
import EducationExperience from '../components/EducationExperience';
import educationData from '../../data/education.json';
import Header from '@/components/Header';
import '../../styles/styles.scss';

const EducationPage: React.FC = () => {
  return (
    <div>
      <Header/>
      <h1 className='section-header'>Education</h1>
      {educationData.map((education, index) => (
        <EducationExperience
          key={index}
          name={education.name}
          startDate={education.startDate}
          endDate={education.endDate}
          major={education.major}
          minor={education.minor}
          description={education.description}
          coursework={education.coursework}
        />
      ))}
    </div>
  );
};

export default EducationPage;
