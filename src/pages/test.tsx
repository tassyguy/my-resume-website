// pages/education.tsx
import React from 'react';
import Header from '@/components/Header';
import Button from '@/components/Button';
import '../../styles/styles.scss';
import '@material/web/button/outlined-button.js';
import '@material/web/fab/fab.js';
import '@material/web/icon/icon.js';

const TestPage: React.FC = () => {
  return (
    <div>
      <Header/>
      <h1 className='section-header'>Test Page for new components</h1>
      <p>This page is unlisted as it is used for testing UI components I am thinking of using.</p>
      <Button/>
    </div>
  );
};

export default TestPage;