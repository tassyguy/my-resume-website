// src/components/EducationExperience.tsx
import React from 'react';
import { EducationExperienceProps } from '@/types';

const EducationExperience: React.FC<EducationExperienceProps> = ({
  name,
  startDate,
  endDate,
  major,
  minor,
  description,
  coursework,
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">
        {startDate} - {endDate}
      </p>
      <p>
        <span className="font-semibold">Major:</span> {major}
      </p>
      {minor && (
        <p>
          <span className="font-semibold">Minor:</span> {minor}
        </p>
      )}
      <p className="mt-2">{description}</p>
      <p className="mt-2">
        <span className="font-semibold">Relevant Coursework:</span> {coursework}
      </p>
    </div>
  );
};

export default EducationExperience;
