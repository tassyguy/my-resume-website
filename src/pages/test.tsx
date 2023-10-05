// pages/education.tsx
import React from 'react';
import Header from '@/components/Header';
import '../../styles/styles.scss';
import '@material/web/button/outlined-button.js';

const TestPage: React.FC = () => {
  return (
    <div>
      <Header/>
      <h1 className='section-header'>Test Page for new components</h1>
      <p>This page is unlisted as it is used for testing UI components I am thinking of using.</p>
      <md-outlined-button>Back</md-outlined-button>
    </div>
  );
};

export default TestPage;