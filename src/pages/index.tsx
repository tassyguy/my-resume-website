// pages/index.tsx
import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import CurrentSection from '../components/CurrentSection';
import '../../styles/styles.scss';

const Home: React.FC = () => {
  const router = useRouter();
  const { section } = router.query; // Get the section ID from the URL

  return (
    <div>
      <Header />
      <h1>Simon Phillips</h1>
      <p>Welcome to my website! This site is currently under construction so be cautioned.</p>
      <main>
        <CurrentSection sectionID={section as string} />
      </main>
    </div>
  );
};

export default Home;
