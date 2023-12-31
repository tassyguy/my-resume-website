// pages/references.tsx (or your relevant page)
import React from 'react';
import ReferenceProfile from '@/components/ReferencesProfile';
import referenceData from '../../../data/references.json';
import Header from '@/components/Header';
import '../../../styles/styles.scss';

const ReferencesPage: React.FC = () => {
  return (
    <div>
      <Header />
      <h1 className='section-header'>References</h1>
      {referenceData.map((reference, index) => (
        <ReferenceProfile
          key={index}
          name={reference.name}
          professionalTitle={reference.professionalTitle}
          company={reference.company}
          relationship={reference.relationship}
          email={reference.email}
          phoneNumber={reference.phoneNumber}
          description={reference.description}
        />
      ))}
    </div>
  );
};

export default ReferencesPage;
