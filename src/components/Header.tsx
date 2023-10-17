// src/components/Header.tsx
import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {

  return (
    <header className="navbar">
      <div className="logo">
        <Link href="/">
          <Image src="/images/logo-dark.jpg" alt="My logo" width={48} height={48} className="logoImage"/>
        </Link>
      </div>
      <nav className={'nav-items'}>
        <ul>
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
      <div className="repo-logo">
        <Link href="https://github.com/tassyguy/my-resume-website">
          <Image src="/logos/github-mark.svg" alt="GitHub Logo" width={40} height={40} className="repo-image"/>
        </Link>
      </div>
    </header>
    
  );
};

export default Header;