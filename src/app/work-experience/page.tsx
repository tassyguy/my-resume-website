// src/pages/work-experience.tsx
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import workExperiences from '../../../data/workExperience.json';
import '../../../styles/styles.scss';

const WorkExperience: React.FC = () => {
  return (
    <div>
      <Header />
      <h1 className='section-header'>Work Experience</h1>
      {workExperiences.map((employer, index) => (
        <div key={index}>
          <h2 className='section-header'>{employer.employerName}</h2>
          {employer.jobs.map((job, jobIndex) => (
            <div key={jobIndex}>
              <h3>{job.title}</h3>
              <p>
                {job.startDate} - {job.endDate}
              </p>
              <div>
                <h4>Responsibilities:</h4>
                <ul>
                  {job.responsibilities.map((responsibility, resIndex) => (
                    <li key={resIndex}>{responsibility}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Skills:</h4>
                <ul>
                  {job.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
