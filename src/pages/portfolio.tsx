// src/pages/portfolio.tsx
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import PortfolioLink from '../components/PortfolioLink';
import portfolioData from '../../data/portfolio.json';
import '../../styles/styles.scss';

const Portfolio: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>Portfolio</h1>
      <p>Some portfolio links of mine.</p>
      <div className='portfolio-list'>
        {portfolioData.map((item, index) => (
          <PortfolioLink
            key={index}
            name={item.name}
            link={item.link}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
