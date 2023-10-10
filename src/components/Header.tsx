// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="navbar">
      <div className="logo">
        
        <Link href="/">
          {/*<Image src="/man.svg" alt="My logo" width={24} height={24} className="logoImage"/> */}🧔🏻‍♂️
        </Link>
      </div>
      <nav className="nav-items">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/work-experience">Work</Link>
          </li>
          <li>
            <Link href="/education">Education</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          {/*<div>
            <Link href="/references" className="hover:underline">References</Link>
          </div>*/}
        </ul>
      </nav>
    </header>
    
  );
};

export default Header;