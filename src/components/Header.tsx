// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';
import '../../styles/styles.scss';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-center">
        <div className="flex items-center space-x-4">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/about">About</Link>
          </div>
          <div>
            <Link href="/work-experience">Work Experience</Link>
          </div>
          <div>
            <Link href="/education">Education</Link>
          </div>
          <div>
            <Link href="/portfolio">Portfolio</Link>
          </div>
          <div>
            <Link href="/references" className="hover:underline">References</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;