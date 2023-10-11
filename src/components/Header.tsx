// src/components/Header.tsx
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import '@material/web/tabs/tabs.js';
import '@material/web/tabs/primary-tab.js';
import '@material/web/tabs/secondary-tab.js';
import '@material/web/icon/icon.js';

const Header: React.FC = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link href="/">
          <Image src="/images/logo-dark.jpg" alt="My logo" width={48} height={48} className="logoImage"/>
        </Link>
      </div>
      <nav className="nav-items">
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
    </header>
    
  );
};

export default Header;