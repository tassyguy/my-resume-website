// src/components/ReferenceProfile.tsx
import React from 'react';
import { ReferenceProfileProps } from '@/types';

const ReferenceProfile: React.FC<ReferenceProfileProps> = ({
  name,
  professionalTitle,
  company,
  relationship,
  email,
  phoneNumber,
  description,
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{professionalTitle}</p>
      <p>{company}</p>
      <p className="italic">{relationship}</p>
      <p className="mt-2">
        <span className="font-semibold">Email:</span> {email}
      </p>
      <p>
        <span className="font-semibold">Phone:</span> {phoneNumber}
      </p>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default ReferenceProfile;
