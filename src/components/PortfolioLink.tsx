import React from 'react';
import { PortfolioLinkProps } from '@/types';

const PortfolioLink: React.FC<PortfolioLinkProps> = ({
  name,
  link,
  icon,
  description,
}) => {
  return (
    <div className='portfolio-item'>
      <div className='portfolio-icon'>
        {/* <img src={icon} alt={`${name} Icon`} /> */}
      </div>
      <div className='portfolio-details'>
        <h3>{name}</h3>
        <p className='portfolio-description'>{description}</p>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default PortfolioLink;
