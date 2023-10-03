// src/pages/portfolio.tsx
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import PortfolioLink from '../components/PortfolioLink';
import { PortfolioItem } from '@/types';
import '../../styles/styles.scss';

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    // Fetch portfolio data from the JSON file
    fetch('/data/portfolio.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the data to check if it's loaded
        setPortfolioItems(data);
      })
      .catch((error) => console.error('Error fetching portfolio data:', error));
  }, []);

  return (
    <div>
      <Header />
      <h1>Portfolio</h1>
      <div className='portfolio-list'>
        {portfolioItems.map((item, index) => (
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
