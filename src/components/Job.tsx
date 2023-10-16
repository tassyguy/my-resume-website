// Job.tsx
import React from 'react';
import { JobProps } from '@/types';

const Job = ({
  title,
  startDate,
  endDate,
  responsibilities,
  skills,
}: JobProps) => {
  return (
    <div>
      <h4 className={'job-info'}>{title}</h4>
      <p>
        {startDate} - {endDate}
      </p>
      <div>
        <h5 className={'job-info'}>Responsibilities</h5>
        <ul>{responsibilities}</ul>
      </div>
      <div>
        <h5 className={'job-info'}>Skills</h5>
        <ul>{skills}</ul>
      </div>
    </div>
  );
};

export default Job;
