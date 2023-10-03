// pages/about.tsx
import React from 'react';
import Header from '../components/Header';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <section className="p-4">
        <h1 className="text-2xl font-semibold mb-4">About Me</h1>

        {/* Introduction */}
        <p>
          Hi, I'm [Your Name], a seasoned software engineer with a passion for crafting innovative web
          solutions. I bring [X] years of experience in [Your Key Expertise Areas].
        </p>

        {/* Professional Background */}
        <section className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Professional Background</h2>
          <p>
            I graduated from [Your University] with a [Your Degree] in [Your Major/Field]. Since then, I've
            worked at [Your Previous Companies] and gained experience in [Relevant Technologies].
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Technical Skills</h2>
          <ul className="list-disc list-inside">
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>SQL and NoSQL databases</li>
            {/* Add more skills */}
          </ul>
        </section>

        {/* Professional Achievements */}
        <section className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Professional Achievements</h2>
          <ul className="list-disc list-inside">
            <li>Successfully led a team of developers in a high-impact project that [Achievement Details].</li>
            <li>Received the [Specific Award] for [Reason].</li>
            {/* Add more achievements */}
          </ul>
        </section>

        {/* Work Philosophy */}
        <section className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Work Philosophy</h2>
          <p>
            I believe in [Your Work Philosophy]. I prioritize collaboration, agile development, and delivering
            robust and scalable solutions.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p>Email: [Your Email Address]</p>
          <p>LinkedIn: [Your LinkedIn Profile]</p>
          {/* Add more contact information */}
        </section>

        {/* Call to Action */}
        <section className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Let&apos;s Connect!</h2>
          <p>If you&apos;re interested in collaborating or have any questions, feel free to reach out. I&apos;m always
            open to new opportunities and partnerships.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2">
            Connect with Me
          </button>
        </section>
      </section>
    </div>
  );
};

export default AboutPage;
