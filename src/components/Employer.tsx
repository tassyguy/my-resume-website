// Employer.tsx
import React from 'react';
import { EmployerProps } from '@/types';

const Employer = ({ employerName, children }: EmployerProps) => {
  return (
    <div>
      <h3>{employerName}</h3>
      {children}
    </div>
  );
};

export default Employer;
