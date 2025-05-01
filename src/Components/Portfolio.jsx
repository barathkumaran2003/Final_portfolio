import React from 'react';
import './casestudy.css';
import Footer from './Footer.jsx';

function Portfolio() {
  return (
    <>
      <div>
        <div className="sticky">
          <div className="sticky2">
            <img src="/profile-pic (5).png" alt="ab" className="profile" />
            <div>
              <p className="profile_name">
                <samp> BARATHKUMARAN K S</samp>
              </p>
            </div>
            <div className="nav-links">
              <li className="home_list">
                <ul><a href="/" className="lists"><samp>HOME</samp></a></ul>
                <ul><a href="#ABOUT" className="lists"><samp>ABOUT</samp></a></ul>
                <ul><a href="#PROJECT" className="lists"><samp>PROJECT</samp></a></ul>
                <ul><a href="#CONTACT" className="lists"><samp>CONTACT</samp></a></ul>
              </li>
            </div>
          </div>
        </div>

        <div className="bg">
          <div>
            <div className="in-animation5">
              <div className="social-icons">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="linkedin"><i className="fab fa-linkedin"></i></a><br />
                <a href="https://github.com" target="_blank" rel="noreferrer" className="github"><i className="fab fa-github"></i></a><br />
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="twitter"><i className="fab fa-twitter"></i></a><br />
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="youtube"><i className="fab fa-youtube"></i></a><br />
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>

          <div style={{ paddingTop: "160px" }}>
            <div className="blackw">
              <div className="in-animation7">
                <h1 className="head1point">Dopefolio<samp className="dot">.</samp></h1>
                <div className="in-animation4">
                  <h3 className="head12">
                  This page contains the case study of Dopefolio Open-Source Project which includes the 
                  </h3>
                  <p className="para">
                    Project Overview, My Role in this project, Tools Used and Live Links to the official product.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="button12">
            <div className="button45">
              <a href="#PROJECT"><p className='button67'>PROJECT</p></a>
            </div>
            <div className="scroll-icon">
              <samp></samp>
            </div>
          </div>
          <div style={{width:"10px", height:"50px"}}>

          </div>
        </div>

        <div className="bg1" id="ABOUT">
          <div className="in-animation7">
            <img src="/pportfolio.png" alt="pointer" className="picture" />
          </div>

          <div className="overviews">
            <div className="in-animation5">
              <h2><samp style={{ fontWeight: 'bolder' }}>Project Overview</samp></h2>
              <p style={{ marginTop: "30px", color: "gray" }}>
                <samp>Dopefolio is an Open-Source project which is a simple and clean multi-page portfolio website template for developers...</samp>
              </p>
              <p style={{ color: "gray" }}>
                <samp>It has helped many people in landing jobs & opportunities...</samp>
              </p>
              <p style={{ color: "gray" }}>
                <samp>It includes a playground link for testing theme colors...</samp>
              </p>
              <p style={{ color: "gray" }}>
                <samp>Feel free to check out the Project by visiting the Project Link.</samp>
              </p>
            </div>

            {/* <div className="in-animation6">
              <h2><samp style={{ fontWeight: 'bolder' }}>Role</samp></h2>
              <div style={{ display: "flex", marginTop: "35px" }}>
                <div style={{ marginRight: "15px" }} className="toolj"><samp>Frontend Developer</samp></div>
              </div>
            </div> */}

            <div className="in-animation5">
              <h2><samp style={{ fontWeight: 'bolder' }}>Tools used</samp></h2>
              <div style={{ display: "flex", marginTop: "35px" }}>
                <div style={{ marginRight: "15px" }} className="toolj"><samp>React.js</samp></div>
                <div style={{ marginRight: "15px" }} className="toola"><samp>HTML</samp></div>
                <div style={{ marginRight: "15px" }} className="toola"><samp>CSS</samp></div>
                <div style={{ marginRight: "15px" }} className="toolj"><samp>JavaScript</samp></div>
              </div>
              <div style={{display: 'flex', marginTop: "35px"}}>
                <div style={{ marginRight: "15px",  }} className="toolj"><samp>Node.js</samp></div>
                <div style={{ marginRight: "15px" }} className="toolj"><samp>MongoDb</samp></div>
              </div>
            </div>
          </div>

          <div className="in-animation7">
            <div className="overviewsa">
              <h2><samp style={{ fontWeight: 'bolder' }}>See Live</samp></h2>
              <div style={{ display: "flex" }}>
                <div className="buttona" style={{ backgroundColor: 'blueviolet' }}>
                  <a href="https://final-portfolio-plum.vercel.app/"><p>LIVE LINK</p></a>
                </div>
                <div className="buttona2">
                  <a href="/"><p>Go Back</p></a>
                </div>
              </div>
            </div>
          </div>
          <div style={{width:"10px", height:"50px"}}>

</div>
        </div>
        
      </div>
      
      <Footer/>
    </>
  );
}

export default Portfolio;
