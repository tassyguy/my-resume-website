// src/components/Header.tsx
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// import Image from 'next/image';

import '@material/web/tabs/tabs.js';
import '@material/web/tabs/primary-tab.js';
import '@material/web/tabs/secondary-tab.js';
import '@material/web/icon/icon.js';

const Header: React.FC = () => {
  return (
    <md-tabs>
      <md-primary-tab id="home"><Link href="/"><md-icon slot="icon">piano</md-icon>Home</Link></md-primary-tab>
      <md-primary-tab id="about"><Link href="/about">About</Link></md-primary-tab>
      <md-primary-tab id="workExperience"><Link href="/work-experience">Work Experience</Link></md-primary-tab>
      <md-primary-tab id="education"><Link href="/education">Education</Link></md-primary-tab>
      <md-primary-tab id="portfolio"><Link href="/portfolio">Portfolio</Link></md-primary-tab>
      <md-primary-tab id="references"><Link href="/references">References</Link></md-primary-tab>
    </md-tabs>
  );
};

export default Header;