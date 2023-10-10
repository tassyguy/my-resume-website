// pages/index.tsx
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '../components/Header';
import CurrentSection from '../components/CurrentSection';
import '../../styles/styles.scss';

const Home: React.FC = () => {
  const router = useRouter();
  const { section } = router.query; // Get the section ID from the URL

  return (
    <div>
      <Header />
      <h1 className='section-header'>Simon Phillips</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <Image src='/images/me.jpg' alt='A picture of me' objectFit='contain' width={400} height={400} />
            </td>
            <td>
              <p>Welcome to my website! This site is currently under construction so be cautioned.</p>
              <p>This site was built using Next.JS, TypeScript, React, SCSS, and deployed using GitHub Actions.</p>
              <p>Current site roadmap:</p>
              <ul className='features'>
                <li>✅Write site in Next.JS</li>
                <li>✅Add routing to pages</li>
                <li>✅Add SCSS to Webpack loader</li>
                <li>✅Add Prettier for code cleanup</li>
                <li>✅Convert codebase to TypeScript</li>
                <li>✅Use JSON to dynamically load data on Work, Portfolio, and Education page</li>
                <li>✅Deploy website to GitHub Pages for hosting</li>
                <li>🔲Refactor to modern Next.JS file layout</li>
                <li>🔲Add Material Design</li>
                <li>🔲Add accessibility features</li>
                <li>🔲Allow for custom theme switching</li>
                <li>🔲Light/dark mode support</li>
                <li>🔲Add and password-protect References page</li>
                <li>🔲Reduce file size of project</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <main>
        <CurrentSection sectionID={section as string} />
      </main>
    </div>
  );
};

export default Home;
