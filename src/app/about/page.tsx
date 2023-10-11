// pages/about.tsx
import React from 'react';
import Header from '@/components/Header';
import Link from 'next/link';
import '../../../styles/styles.scss';

const AboutPage: React.FC = () => {

  return (
    <div>
      <Header />
      <h1 className='section-header'>About Me</h1>
      <section className="p-4">

        {/* Introduction */}
        <p>
          Hi, I&apos;m Simon, a seasoned software engineer with a passion for crafting innovative web
          solutions. I bring 8 years of experience in JavaScript, TypeScript, Java, Node.JS, and other software platforms.
        </p>

        {/* Professional Background */}
        <section className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Professional Background</h2>
          <p>
            I graduated from Georgia State University with a Bachelor&apos;s degree in ComputerScience. Since then, I&apos;ve
            worked at Dematic, Verison Wireless, and other places and gained experience in software development.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Technical Skills</h2>
          <ul className="list-disc list-inside">
            <li>JavaScript, Java Spring, React, Redux, Adobe Creative Suite, Bootstrap, Adobe Photoshop, Adobe Illustrator</li>
            <li>HTML5 & CSS3, Material Design, Sketch, Microsoft Office, VirtualBox, IntelliJ, iTerm, Node.js, NPM, Angular.js</li>
            <li>Python, Adobe Experience Designer, Figma, Unix Terminal, Scrum, Agile, User Interface, User Experience, User Testing</li>
            <li>Visual Studio Code, CLI, Bash, Shell, Windows Server, Linux Server Deployment and Administration</li>
            <li>Arch Linux, ZSH, Ubuntu, Shell, Environment Files</li>
            {/* Add more skills */}
          </ul>
        </section>

        {/* Professional Achievements
        <section className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Professional Achievements</h2>
          <ul className="list-disc list-inside">
            <li>Successfully led a team of developers in a high-impact project that [Achievement Details].</li>
            <li>Received the [Specific Award] for [Reason].</li>
          </ul>
        </section>*/}

        {/* Work Philosophy */}
        <section className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Work Philosophy</h2>
          <p>
            I believe in being a good employee. I prioritize collaboration, agile development, and delivering
            robust and scalable solutions.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Let&apos;s Connect!</h2>
          <p>If you&apos;re interested in collaborating or interviewing me for a potential positionm, or have any questions, feel free to reach out. I&apos;m always
            open to new opportunities and partnerships.</p>
          <p>Email: <Link href="mailto:simonxphillips@gmail.com">simonxphillips@gmail.com</Link></p>
          <p>LinkedIn: <Link href="linkedin.com/in/simonxphillips">linkedin.com/in/simonxphillips</Link></p>
          {/* Add more contact information */}
        </section>
      </section>
    </div>
  );
};

export default AboutPage;
