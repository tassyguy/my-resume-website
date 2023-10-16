import React from 'react';
import { PortfolioLinkProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioLink: React.FC<PortfolioLinkProps> = ({
  name,
  link,
  icon,
  description,
}) => {
  return (
    <div className='portfolio-item'>
      <div className='portfolio-icon portfolio-content'>
        <Image src={icon} alt={`${name} Icon`} width={48} height={48} className="portfolio-vector"/>
        {/* <img src={icon} alt={`${name} Icon`} /> */}
      </div>
      <div className='portfolio-content'>
        <h3 className={'portfolio-header'}><Link href={link} target='_blank' rel='noopener noreferrer'>{name}</Link></h3>
        <div className='portfolio-details'>
        <p className='portfolio-description'>{description}</p>
      </div>
      </div>
    </div>
  );
};

export default PortfolioLink;
