// pages/education.tsx
import React from 'react';
import {EducationExperience} from '@/components';
import {educationData} from '../../../data';
import Header from '@/components/Header';
import '../../../styles/styles.scss';
import ContentContainer from '@/components/ContentContainer/ContentContainer';

const BetaPage: React.FC = () => {
  return (
    <>
        <h1 className='section-header'>Beta Page (under construction)</h1>
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
        <h3>Things we should add to this page</h3>
        <ul>
            <li>Test stuff</li>
        </ul>
    </>
  );
};

export default BetaPage;
