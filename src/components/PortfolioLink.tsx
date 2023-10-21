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
    <div className="bookmark">
      <Link href={link} className="bookmark-link">
        <Image src={icon} alt={name} width={48} height={48} className="bookmark-icon" />
        <div className="bookmark-text">
          <h3 className="site-name">{name}</h3>
          <p className="description">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioLink;
