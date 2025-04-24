import React from 'react';
import Header from '../components/Header';
import '../Styles/AboutMe.css';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <>
      <Header />
      <section className="about-section">
        <div className="about-container">
          <h2>About Me</h2>

          <div className="about-block">
            <h3>Introduction</h3>
            <p>
            I’m Martin Kanev — currently studying Informatics and Software science, but the real grind happens outside the classroom. 
            I'm a self-taught developer who’s passionate about building full-stack apps, learning new tech, and turning ideas into code.
            </p>
          </div>

          <div className="about-block">
  <h3>Work Experience</h3>

  <div className="experience-entry">
    <h4>Web Development Workshop — Experian Bulgaria</h4>
    <span className="exp-date">September 2024</span>
    <p>
    Participated in a hands-on web development workshop organized by Experian Bulgaria.
Collaborated in a team to build a full-stack banking application, where each member was assigned a specific role.
I focused on the backend development, implementing core functionalities and APIs.
Gained practical experience working under the guidance of a professional engineer in a real-world company environment.
    </p>
    <a
      href="https://drive.google.com/file/d/1TCk_3boZN3nphXBQ5DOnThAI6nqea56t/view"
      target="_blank"
      rel="noopener noreferrer"
      className="cert-link"
    >
      View Certificate
    </a>
  </div>
</div>


          <div className="about-block">
  <h3>Education</h3>

  <div className="education-entry">
    <h4>Technical University of Sofia — Sofia, Bulgaria</h4>
    <p>Bachelor’s Degree in Informatics and Software Science</p>
    <span className="edu-date">Sept 2023 – Present</span>
  </div>

  <div className="education-entry">
    <h4>PMG “Akad. Ivan Guzelev” High School — Gabrovo, Bulgaria</h4>
    <p>Software and Hardware Science</p>
    <span className="edu-date">Sept 2018 – June 2023</span>
  </div>
</div>


          <div className="about-block">
  <h3>Skills</h3>
  <ul className="soft-skills-list">
    <li>Teamwork</li>
    <li>Communication</li>
    <li>Creative thinking and thoughtful analysis</li>
    <li>Organizing my schedule and arranging my priorities</li>
    <li>Self-motivation — facing different challenges and learning something new every day</li>
    <li>English B2 Level</li>
  </ul>

  <Link to ="/technologies" className="hero-button tech-button">View Tech Skills</Link>
</div>

          
        </div>
      </section>
    </>
  );
};

export default About;
