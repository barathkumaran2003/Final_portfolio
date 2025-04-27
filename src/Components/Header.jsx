import React, { useState, useEffect } from 'react';
import './portfoliohome.css';
import './PortfolioAnimation.js';
import './Navigation.js';
import profile from '../../public/profile-pic (5).png';

function Header () {
    const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  document.body.className = darkMode ? 'dark-mode' : '';
}, [darkMode]);

  return (
    <>
        <div className="sticky">
            <div className="sticky2">
                <img src={profile} alt="ab" className="profile"/>
                <div style={{display:'flex'}}>
                    <p className="profile_name">
                        <samp> BARATHKUMARAN K S</samp>
                    </p>
                    <button 
  onClick={() => setDarkMode(!darkMode)} 
  className="dark-toggle"
>
  {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
</button>

                </div>
                <div className="nav-links">
                    <li className="home_list">
                        <ul><a href="" className="lists"><samp>HOME</samp></a></ul>
                        <ul><a href="#ABOUT" className="lists"><samp>ABOUT</samp></a></ul>
                        <ul><a href="#PROJECT" className="lists"><samp>PROJECT</samp></a></ul>
                        <ul><a href="#CONTACT" className="lists"><samp>CONTACT</samp></a></ul>
                    </li>
                </div>
            </div>
        </div>
    </>
  )
}
export default Header;
