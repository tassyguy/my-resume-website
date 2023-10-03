// Section.tsx
import React from 'react';
import { SectionProps } from '@/types';

const Section = ({ title, children }: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
