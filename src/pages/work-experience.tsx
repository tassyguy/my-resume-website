// src/pages/work-experience.tsx
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Employer } from '../types';
import '../../styles/styles.scss';

const WorkExperience = () => {
  const [workExperiences, setWorkExperiences] = useState<Employer[]>([]);

  useEffect(() => {
    // Fetch work experience data from the JSON file
    fetch('/data/workExperience.json')
      .then((response) => response.json())
      .then((data) => setWorkExperiences(data))
      .catch((error) =>
        console.error('Error fetching work experience data:', error)
      );
  }, []);

  return (
    <div>
      <Header />
      <h1>Work Experience</h1>
      {workExperiences.map((employer, index) => (
        <div key={index}>
          <h2>{employer.employerName}</h2>
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
