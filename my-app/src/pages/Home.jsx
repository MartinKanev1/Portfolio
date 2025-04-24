import React from 'react';
import Header from '../components/Header';
import '../Styles/Home.css';
import Me from "../assets/Martin.jpg";


function Home() {
  return (
    <>
      <Header />

      
      <section className="hero">
  <div className="hero-container">
    
    
    <div className="hero-image">
     <img src={Me} alt="Martin Kanev" />

    </div>

    
    <div className="hero-content">
      <h1>
        Welcome To <br />
        <span>My Personal Portfolio</span>
      </h1>
      <p>
      Hello! My name is Martin Kanev. I am passionate about technology, coding, and continuous self-improvement. I'm currently on an exciting journey to become a full-stack developer — always learning, experimenting, and building projects to grow my skills.

      Feel free to check out the sections above — “Projects”, “Technologies”, and “About” — to learn more about me and what I create!
      </p>
     

      <p className="hero-contact">
    📩 Reach me at: <a href="mailto:martin_kk@abv.bg" className="email-link">martin_kk@abv.bg</a>
  </p>
    </div>

    


  </div>

  
</section>



    </>
  );
}

export default Home;



