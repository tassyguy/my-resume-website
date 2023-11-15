// pages/index.tsx
import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import LastCommitTimestamp from '@/components/LastCommitTimestamp';
import Link from 'next/link';
import '../../styles/styles.scss';
import ContentContainer from '@/components/ContentContainer/ContentContainer';


const Home: React.FC = () => { // Get the section ID from the URL

  return (
    <>
      <h1 className='section-header'>Simon Phillips</h1>
      <section className="p-4">
            {/* Introduction */}
            <p>
              Hi, I&apos;m Simon, a seasoned software engineer with a passion for crafting innovative web
              solutions. I bring 8 years of experience in JavaScript, TypeScript, Java, Node.JS, and other software platforms.
              This site was built using Next.JS, TypeScript, React, SCSS, and deployed using GitHub Actions.
            </p>
            </section>
      <div className="intro-container">
        <div className="intro-image">
          <Image src='/images/me.png' alt='A picture of me' width={400} height={400} className={'profile intro-image-tag'}/>
        </div>
        <div className="intro-text">

          {/* Professional Background */}
          <section className="mt-4">
            <h2 className="text-xl font-semibold mb-2 about">Professional Background</h2>
            <p>
              I graduated from Georgia State University with a Bachelor&apos;s degree in Computer Science. Since then, I&apos;ve
              worked at Dematic, Verison Wireless, and other places and gained experience in software development.
            </p>
          </section>
          {/* Technical Skills */}
          <section className="mt-4">
            <h2 className="text-xl font-semibold mb-2 about">Technical Skills</h2>
            <ul className="list-disc list-inside">
              <li>JavaScript, Java Spring, React, Redux, Adobe Creative Suite, Bootstrap, Adobe Photoshop, Adobe Illustrator</li>
              <li>HTML5 & CSS3, Material Design, Sketch, Microsoft Office, VirtualBox, IntelliJ, iTerm, Node.js, NPM, Angular.js</li>
              <li>Python, Adobe Experience Designer, Figma, Unix Terminal, Scrum, Agile, User Interface, User Experience, User Testing</li>
              <li>Visual Studio Code, CLI, Bash, Shell, Windows Server, Linux Server Deployment and Administration</li>
              <li>Arch Linux, ZSH, Ubuntu, Shell, Environment Files</li>
              {/* Add more skills */}
            </ul>
          </section>
        </div>
      </div>

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
          <h2 className="text-xl font-semibold mb-2 about">Work Philosophy</h2>
          <p>
            I believe in being a good employee. I prioritize collaboration, agile development, and delivering
            robust and scalable solutions.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mt-4">
          <h2 className="text-xl font-semibold mb-2 about">Let&apos;s Connect!</h2>
          <p>If you&apos;re interested in collaborating or interviewing me for a potential position, or have any questions, feel free to reach out. I&apos;m always
            open to new opportunities and partnerships.</p>
          <p>Email: <Link href="mailto:simonxphillips@gmail.com" className={'about'}>simonxphillips@gmail.com</Link></p>
          <p>LinkedIn: <Link href="linkedin.com/in/simonxphillips" className={'about'}>linkedin.com/in/simonxphillips</Link></p>
          {/* Add more contact information */}
        </section>
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
                <li>✅Light/dark mode support</li>
                <li>🔲Add and password-protect References page</li>
                <li>🔲Reduce file size of project</li>
              </ul>
    </>
  );
};

export default Home;
