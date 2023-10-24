// src/pages/portfolio.tsx
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import '../../../styles/styles.scss';
import PortfolioGrid from '@/components/Portfolio/Grid/PortfolioGrid';
import ContentContainer from '@/components/ContentContainer/ContentContainer';

const Portfolio: React.FC = () => {
  return (
    <>
      <h1 className='section-header'>Portfolio</h1>
      <p className='portfolio-subheader'>Some portfolio links of mine.</p>
      <PortfolioGrid/>
    </>
  );
};

export default Portfolio;
