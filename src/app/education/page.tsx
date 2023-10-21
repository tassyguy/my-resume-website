// pages/education.tsx
import React from 'react';
import EducationExperience from '@/components/EducationExperience';
import educationData from '../../../data/education.json';
import Header from '@/components/Header';
import '../../../styles/styles.scss';
import ContentContainer from '@/components/ContentContainer/ContentContainer';

const EducationPage: React.FC = () => {
  return (
    <div>
      <Header/>
      <ContentContainer>
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
      </ContentContainer>
    </div>
  );
};

export default EducationPage;
