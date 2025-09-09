import React, { useState } from 'react';
import Header from '../components/Header';
import '../Styles/Projects.css';
import project1 from '../assets/Kitshop1.png';
import project2 from '../assets/Kitshop2.png';
import project3 from '../assets/Kitshop3.png';
import project4 from '../assets/Kitshop4.png';
import project5 from '../assets/Kitshop5.png';
import app1 from '../assets/AutoShop1.png'
import app2 from '../assets/AutoShop2.png'
import app3 from '../assets/AutoShop3.png'
import app4 from '../assets/AutoShop4.png'
import sim1 from '../assets/sim.png'
import sim2 from '../assets/sim2.png'
import sim3 from '../assets/sim3.png'
import sim4 from '../assets/sim4.png'
import sim5 from '../assets/sim5.png'
import sim6 from '../assets/sim6.png'
import sim7 from '../assets/sim7.png'

const imageList = [project1, project2, project3, project4, project5];

const imageList2 = [app1, app2, app3, app4];

const imageList3 = [sim1, sim2, sim3, sim4, sim5, sim6, sim7];

const Projects = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImageAutoShop, setCurrentImageAutoShop] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  const handlePrevAutoShop = () => {
    setCurrentImageAutoShop((prev) =>
      prev === 0 ? imageList2.length - 1 : prev - 1
    );
  };
  
  const handleNextAutoShop = () => {
    setCurrentImageAutoShop((prev) =>
      prev === imageList2.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <Header />
      <section className="projects-section">
        <h2>My Projects</h2>

        <div className="project-card column-layout">
          
          <div className="carousel">
            <button onClick={handlePrev} className="carousel-btn left">←</button>
            <img src={imageList[currentImage]} alt="Project screenshot" className="carousel-image" />
            <button onClick={handleNext} className="carousel-btn right">→</button>
          </div>

          
          <div className="project-details below-layout">
            <h3>KitShop – Football Kit E-commerce</h3>
            <p>
              KitShop is a full-stack web application for browsing and purchasing football kits. It features secure authentication, cart & order management, user reviews, and an admin dashboard — built using Spring Boot, PostgreSQL, and React. Dessign pattern - MVC.
            </p>

            <ul className="tech-list">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>PostgreSQL</li>
              <li>Spring Security</li>
              <li>Caffeine Cache</li>
              <li>Cloudinary</li>
              <li>Docker</li>
              <li>JUnit</li>
              <li>Swagger</li>
            </ul>

            <ul className="feature-list">
              <li>🛒 Add/remove items from cart</li>
              <li>❤️ Favourites & Reviews</li>
              <li>🔎 Search & filter with Caffeine cache</li>
              <li>👤 Role-based access (User & Admin)</li>
              <li>🛠 Admin dashboard for managing products and orders</li>
              <li>📦 View & cancel orders, edit profile info</li>
              <li>🔐 Spring Security for authentication & JWT</li>
              
            </ul>

            <div className="project-links">
              <a href="https://github.com/MartinKanev1/KitShop" target="_blank" rel="noopener noreferrer">GitHub</a>
              
            </div>
          </div>
        </div>

        
          <div className="project-card column-layout">
          
          <div className="carousel">
            <button onClick={handlePrevAutoShop} className="carousel-btn left">←</button>
            <img src={imageList3[currentImageAutoShop]} alt="Project screenshot" className="carousel-image" />
            <button onClick={handleNextAutoShop} className="carousel-btn right">→</button>
          </div>



          <div className="project-details below-layout">
            <h3>Crytpo-Trading-Simulator</h3>
            <p>
             A simulated cryptocurrency trading platform built with Java, Spring Boot, React.js and PostgreSQL. Dessign pattern - MVC.
            </p>

            <ul className="tech-list">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>PostgreSQL</li>
              <li>Spring Security</li>
              <li>Cloudinary</li>
              <li>Docker</li>
              <li>JUnit</li>
              <li>Swagger</li>
            </ul>

            <ul className="feature-list">
              <li> View real-time prices of the top 20 cryptocurrencies using the Kraken WebSocket API</li>
              <li> Maintain a virtual USD account balance</li>
              <li> Buy and sell cryptocurrencies</li>
              <li>Track their portfolio holdings</li>
              <li>View transaction history including profit/loss</li>
              <li>Reset their account to the original state</li>
              <li>🔐 Spring Security for authentication & JWT</li>
              
            </ul>

            <div className="project-links">
              <a href="https://github.com/MartinKanev1/trading-sim" target="_blank" rel="noopener noreferrer">GitHub</a>
              
            </div>
          </div>
        </div>

        

          <div className="project-card column-layout">
          
          <div className="carousel">
            <button onClick={handlePrevAutoShop} className="carousel-btn left">←</button>
            <img src={imageList2[currentImageAutoShop]} alt="Project screenshot" className="carousel-image" />
            <button onClick={handleNextAutoShop} className="carousel-btn right">→</button>
          </div>

  
  <div className="project-details below-layout">
    <h3>AutoShop – Vehicle Marketplace Platform</h3>
    <p>
      AutoShop is a full-stack web application inspired by platforms like Mobile.bg and Cars.bg.
      Built with Spring Boot, React, and PostgreSQL, it allows users to register as private sellers or dealerships,
      manage listings, and search for vehicles with advanced filters. The platform supports user profiles,
      favorites, reporting tools, and admin controls. Dessign pattern - MVC.
    </p>

    <ul className="tech-list">
      <li>Java</li>
      <li>Spring Boot</li>
      <li>React</li>
      <li>JavaScript</li>
      <li>PostgreSQL</li>
      <li>Spring Security</li>
      <li>JPA Specification</li>
      <li>JUnit</li>
    </ul>

    <ul className="feature-list">
      <li>🧾 Register as private seller or dealership</li>
      <li>🚗 Post, edit, and delete car listings</li>
      <li>🔍 Search/filter by brand, model, fuel type, mileage, etc.</li>
      <li>⭐ Favorite cars and track search history</li>
      <li>📢 Report listings</li>
      <li>🛠 Admin dashboard for report handling</li>
      <li>🔍 Search history</li>
      <li>📁 Dealership logos, user profiles</li>
      <li>🔐 Auth with Spring Security</li>
    </ul>

    <div className="project-links">
      <a
        href="https://github.com/MartinKanev1/AutoShopProject"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      
    </div>
  </div>
</div>

<div className="project-card column-layout">
  

  <div className="project-details below-layout">
    <h3>HTML Crawler – Console-Based HTML Tree Editor</h3>
    <p>
      A university data structures and algorithms course project built in C#, this application parses HTML into a custom tree structure
      and enables advanced XPath-like querying, editing, node copying, and Huffman-compressed file saving/loading.
      A Windows Forms UI renders basic HTML elements via GDI.
    </p>

    <ul className="tech-list">
      <li>C#</li>
      <li>Windows Forms</li>
      <li>GDI</li>
      <li>Custom Data Structures</li>
      <li>Threads</li>
      <li>Huffman Compression</li>
    </ul>

    <ul className="feature-list">
      <li>🌳 Build tree from HTML with custom parser</li>
      <li>🔎 XPath-style queries (//, /, *, [n], @attr)</li>
      <li>⚡ BFS search </li>
      <li>⚡ Parallel search with threads</li>
      <li>✍️ In-place node editing and deep copy logic</li>
      <li>📁 Huffman compression of HTML and resources</li>
      <li>🖼 GDI-based GUI visualizing tables, images, and links</li>
      <li>🔧 All string parsing and data structures built from scratch</li>
    </ul>

    <div className="project-links">
      <a
        href="https://github.com/MartinKanev1"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </div>
</div>

<div className="project-card column-layout">
  

  <div className="project-details below-layout">
    <h3>Currency Exchange App – Full Stack Converter & History Tracker</h3>
    <p>
      A full-stack currency conversion platform built with Spring Boot, PostgreSQL, and vanilla JavaScript.
      It allows users to convert currencies, view exchange rates, and filter transaction history with powerful, flexible querying logic.
    </p>

    <ul className="tech-list">
      <li>Spring Boot</li>
      <li>PostgreSQL</li>
      <li>HTML/CSS</li>
      <li>JavaScript</li>
      <li>JPA Specification</li>
      <li>Docker</li>
      <li>JUnit</li>
      
    </ul>

    <ul className="feature-list">
      <li>💱 Real-time currency exchange rate retrieval</li>
      <li>💸 Currency conversion with transaction logging</li>
      <li>📜 Filterable transaction history (date, currency, combo)</li>
      <li>⚙️ JPA Specification + DTO for flexible filtering</li>
      <li>🧠 Caching for optimized API performance</li>
      <li>🚨 Custom exception handling with detailed messages</li>
      <li>🐳 Dockerized for local and production environments</li>
      <li>✅ Unit tested backend components</li>
    </ul>

    <div className="project-links">
      <a
        href="https://github.com/MartinKanev1/currency-exchange-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </div>
</div>

<div className="project-card column-layout">
  

  <div className="project-details below-layout">
    <h3>Impossible Tic Tac Toe – AI-Powered Game</h3>
    <p>
      A Windows Forms-based C# game with two CPU difficulty levels: Easy (random moves) and Impossible (Minimax with Alpha-Beta pruning).
      Designed to be unbeatable in the hardest mode, this project blends game logic, AI algorithms, and a simple interactive UI.
    </p>

    <ul className="tech-list">
      <li>C#</li>
      <li>Windows Forms</li>
      <li>Minimax Algorithm</li>
      <li>Alpha-Beta Pruning</li>
    </ul>

    <ul className="feature-list">
      <li>🎮 Classic Tic Tac Toe game layout and mechanics</li>
      <li>😈 Easy Mode: CPU uses random moves</li>
      <li>🧠 Impossible Mode: AI uses Minimax + Alpha-Beta pruning</li>
      <li>🪄 Simple UI built with Windows Forms</li>
      <li>⚙️ Deterministic and optimized CPU logic</li>
    </ul>

    <div className="project-links">
      <a
        href="https://github.com/MartinKanev1/Impossible-level-Tic-Tac-Toe-Project"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </div>
</div>





      </section>
    </>
  );
};

export default Projects;

