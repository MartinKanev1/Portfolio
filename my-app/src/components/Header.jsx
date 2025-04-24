import React from 'react';
import '../Styles/Header.css';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo-button">
        <div className="logo">My Portfolio</div>
      </Link>
      <nav className="nav-links">
      <Link to="/projects">Projects</Link>
        <Link to="/technologies">Technologies</Link>
        <Link to="/about-me">About Me</Link>
      </nav>
      <div className="social-icons">
      <IconButton
  component="a"
  href="https://www.linkedin.com/in/martin-kanev-a92375362/"
  target="_blank"
  rel="noopener noreferrer"
  size="small"
  sx={{ color: 'white' }}
>
  <LinkedInIcon />
</IconButton>

<IconButton
  component="a"
  href="https://github.com/MartinKanev1"
  target="_blank"
  rel="noopener noreferrer"
  size="small"
  sx={{ color: 'white' }}
>
  <GitHubIcon />
</IconButton>

      </div>
    </header>
  );
};

export default Header;