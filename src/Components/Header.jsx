import React from 'react'
import './portfoliohome.css';
import profile from '../../public/profile-pic (5).png';
function Header () {
  return (
    <>
        <div className="sticky">
            <div className="sticky2">
                <img src={profile} alt="ab" className="profile"/>
                <div>
                    <p className="profile_name">
                        <samp> BARATHKUMARAN K S</samp>
                    </p>
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
