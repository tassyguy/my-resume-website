// pages/index.tsx
import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Link from 'next/link';
import '../../styles/styles.scss';


const Home: React.FC = () => { // Get the section ID from the URL

  return (
    <div>
      <Header />
      <h1 className='section-header'>Simon Phillips</h1>
      <Image src='/images/me.jpg' alt='A picture of me' width={400} height={400} />
       <p>Welcome to my website! This site is currently under construction so be cautioned.</p>
              <p>This site was built using Next.JS, TypeScript, React, SCSS, and deployed using GitHub Actions.</p>
              <Link href='https://github.com/tassyguy/my-resume-website'>Check out the repo for this website here!</Link>
              <p>Current site roadmap:</p>
              <ul className='features'>
                <li>✅Write site in Next.JS</li>
                <li>✅Add routing to pages</li>
                <li>✅Add SCSS to Webpack loader</li>
                <li>✅Add Prettier for code cleanup</li>
                <li>✅Convert codebase to TypeScript</li>
                <li>✅Use JSON to dynamically load data on Work, Portfolio, and Education page</li>
                <li>✅Deploy website to GitHub Pages for hosting</li>
                <li>✅Edit DNS to use custom website URL</li>
                <li>✅Refactor to modern Next.JS file layout</li>
                <li>🔲Add Material Design</li>
                <li>🔲Add accessibility features</li>
                <li>🔲Proper mobile browser support</li>
                <li>🔲Allow for custom theme switching</li>
                <li>🔲Light/dark mode support</li>
                <li>🔲Add and password-protect References page</li>
                <li>🔲Reduce file size of project</li>
              </ul>
    </div>
  );
};

export default Home;
