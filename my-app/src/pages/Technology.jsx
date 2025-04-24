import React from 'react';
import Header from '../components/Header';
import '../Styles/Technologies.css';

import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiSpring, SiJavascript, SiMysql, SiPostgresql, SiDocker } from 'react-icons/si';

const techData = {
  Frontend: [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'React', icon: <FaReact /> },
  ],
  Backend: [
    { name: 'C#', icon: <span className="csharp">C#</span> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Spring', icon: <SiSpring /> },
  ],
  Database: [
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
  ],
  Containerization: [
    { name: 'Docker', icon: <SiDocker /> },
  ],
  Other: [
    { name: 'Git', icon: <FaGitAlt /> },
     ],
};

const Technologies = () => {
  return (
    <>
      <Header />
      <section className="technologies-section">
        <h2>Technologies I Use</h2>
        {Object.keys(techData).map((category) => (
          <div key={category} className="tech-category">
            <h3>{category}</h3>
            <div className="tech-grid">
              {techData[category].map((tech, index) => (
                <div key={index} className="tech-card">
                  <div className="tech-icon">{tech.icon}</div>
                  <div className="tech-name">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Technologies;