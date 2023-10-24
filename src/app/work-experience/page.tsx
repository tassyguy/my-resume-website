// src/pages/work-experience.tsx
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import workExperiences from '../../../data/workExperience.json';
import '../../../styles/styles.scss';
import ContentContainer from '@/components/ContentContainer/ContentContainer';

const WorkExperience: React.FC = () => {
  return (
    <>
      <h1 className='section-header'>Work Experience</h1>
      <p className='work-subheader'>Places I&apos;ve work at or for.</p>
      {workExperiences.map((employer, index) => (
        <div key={index}>
          <h2 className='section-header'>{employer.employerName}</h2>
          {employer.jobs.map((job, jobIndex) => (
            <div key={jobIndex}>
              <h3 className={'job-info'}>{job.title}</h3>
              <p>
                {job.startDate} - {job.endDate}
              </p>
              <div>
                <h4 className={'job-info'}>Responsibilities:</h4>
                <ul>
                  {job.responsibilities.map((responsibility, resIndex) => (
                    <li key={resIndex}>{responsibility}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={'job-info'}>Skills:</h4>
                <ul>
                  {job.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {index !== workExperiences.length - 1 && <div className='job-section'></div>}
        </div>
      ))}
    </>
  );
};

export default WorkExperience;
