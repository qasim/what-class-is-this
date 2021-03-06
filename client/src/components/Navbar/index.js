import React from 'react';
import githubLogo from './../../static/images/github-logo.svg';
import './style.css';

const Navbar = () => (
  <div className="app__navbar">
    <div className="navbar__container">
      <div className="container__name">
        <a href="/" title="What Class Is This??">logo</a>
      </div>
      <div className="container__logo--right">
        <a href="https://github.com/kshvmdn/what-class-is-this" title="GitHub">
          <img src={githubLogo} alt="logo" />
        </a>
      </div>
    </div>
  </div>
);

export default Navbar
