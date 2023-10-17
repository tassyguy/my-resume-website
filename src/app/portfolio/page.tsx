// src/pages/portfolio.tsx
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import '../../../styles/styles.scss';
import PortfolioGrid from '@/components/Portfolio/Grid/PortfolioGrid';

const Portfolio: React.FC = () => {
  return (
    <div>
      <Header />
      <h1 className='section-header'>Portfolio</h1>
      <p className='portfolio-subheader'>Some portfolio links of mine.</p>
      <PortfolioGrid/>
    </div>
  );
};

export default Portfolio;
