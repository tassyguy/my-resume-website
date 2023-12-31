// src/pages/portfolio.tsx
import React from 'react';
import PortfolioLink from '@/components/PortfolioLink';
import portfolioData from '../../../../data/portfolio.json';
import styles from './PortfolioGrid.module.scss';

const PortfolioGrid: React.FC = () => {
  return (
    <div className={styles.linksContainer}>
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
  );
};

export default PortfolioGrid;