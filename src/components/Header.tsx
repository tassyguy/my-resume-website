// src/components/Header.tsx
import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {

  return (
    <header className="navbar">
      <div className="logo">
        <Link href="/">
          <Image src="/images/logo-dark.png" alt="My logo" width={40} height={40} className="logoImage"/>
        </Link>
      </div>
      <nav className={'nav-items'}>
        <ul>
          <li>
            <Link href="/"><span className="material-icons header-icon">face</span>About</Link>
          </li>
          <li>
            <Link href="/work-experience"><span className="material-icons header-icon">business_center</span>Work</Link>
          </li>
          <li>
            <Link href="/education"><span className="material-icons header-icon">school</span>Education</Link>
          </li>
          <li>
            <Link href="/portfolio"><span className="material-icons header-icon">code</span>Portfolio</Link>
          </li>
          {/*<div>
            <Link href="/references" className="hover:underline">References</Link>
          </div>*/}
        </ul>
      </nav>
      <div className="repo-logo">
        <Link href="https://github.com/tassyguy/my-resume-website">
          <Image src="/logos/Github.svg" alt="GitHub Logo" width={40} height={40} className="repo-image"/>
        </Link>
      </div>
    </header>
    
  );
};

export default Header;