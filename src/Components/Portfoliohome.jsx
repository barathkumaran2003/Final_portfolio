import React from 'react';
import './portfoliohome.css';
import Header from './Header';
import Pointer from '../../public/Point expert 1.png';
import Hotel from '../../public/photal.png';
import Portfolio from '../../public/pportfolio.png';
import Motor from '../../public/pmotor.png';
import Card from '../../public/pcad.png';
import Footer from './Footer';
import Contact from './Contact';
import './PortfolioAnimation.js';
import './Navigation.js';
function Portfoliohome() {
  
 
  return (
    <>
      <div>
        <Header />
        <div className="bg">
          <div>
            <div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/barathkumaran-k-s-8681b2246/" target="_blank" rel="noopener noreferrer" className="linkedin">
                  <i className="fab fa-linkedin"></i>
                </a>
                <br />
                <a href="https://github.com/barathkumaran2003" target="_blank" rel="noopener noreferrer" className="github">
                  <i className="fab fa-github"></i>
                </a>
                <br />
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <br />
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="youtube">
                  <i className="fab fa-youtube"></i>
                </a>
                <br />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div style={{ paddingTop: '160px' }}>
            <div className="blackw">
              <div className="in-animation7">
                <h1 className="head1">HEY, I'M BARATHKUMARAN<samp className="dot">.</samp></h1>
                <div className="in-animation4">
                  <h3 className="head12">
                    A Result-Oriented Web Developer building and managing Websites and Web
                  </h3>
                  <p className="para">Applications that lead to the success of the overall product</p>
                </div>
              </div>
            </div>
          </div>

          <div className="button12">
            <div className="button">
              <a href="#PROJECT" className='link'><p>PROJECT</p></a>
            </div>
            <div className="scroll-icon">
              <span></span>
            </div>
          </div>
          <div className='bottum'>

          </div>
        </div>
        <div className="bg1" id="ABOUT">
            <div className="in-animation4">
                <h1 className="ahead">
                    <samp>
                     ABOUT ME
                    </samp> 
                 </h1>
                 <div className="underline">
    
                 </div>
                 <p className="apara">
                    <samp style={{fontFamily:'inherit'}}>Here you will find more information about me, what I do, and my current skills mostly in terms <br/> of programming and technology</samp>
                 </p>
            </div>
            
             <div className="aands" >
                <div className="in-animation5">
                    <h2> <samp style={{fontWeight:'bolder'}}>Get to know me!</samp></h2>
                    <p className="apara1"> <samp>I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</samp> </p>


                       <p style={{color:'gray'}}> <samp> I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming</samp></p>
                        
                      <p style={{color:'gray'}}><samp>  I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</samp></p>
                      <div className="button123">
                        <div className="abutton">
                            <a href="#CONTACT" target="_blank" className='abuttonlink'><p className='abuttonpara'>Contact Me</p></a>
                        </div>
                      </div>
                      
                </div>
                <div className="in-animation6">
                    <div className="stop">
                        <div>
                            <h2> <samp style={{fontWeight:'bolder'}}>My Skills</samp></h2>
                        </div>
                        <div className="sdiv1">
                            <div className="C"><samp>C</samp></div>
                            <div className="Cone"><samp>C++</samp></div>
                            <div className="java" ><samp>JAVA</samp></div>
                            <div className="html" ><samp>HTML</samp></div>
                            <div className="css" ><samp>CSS</samp></div>
                            <div className="js" ><samp>JS</samp></div>
                        </div>
                        <div className="sdiv1">
                            <div className="sql"><samp>SQL</samp></div>
                            <div className="mysql"><samp>MY SQL</samp></div>
                            <div className="jdbc"><samp>JDBC</samp></div>
                            <div className="dsa"><samp>DSA</samp></div>
                            <div className="react"><samp>React.Js</samp></div>

                        </div>
                        <div style={{display:'flex'}}>
                            <div className="spring"><samp>Spring Boot</samp></div>
                            <div className="ps"><samp>PROBLUM SOLVING</samp></div>
                        </div>
                        
                    </div>     
                </div> 
                <div style={{marginTop:'30px', width:'50px', height:'50px'}}>

                </div> 
             </div>
             <div style={{width:'50px',height:'50px'}}>

             </div>
        </div>
        <div id="PROJECT" >
            <div className="in-animation4">
                <h1 className="phead">
                    <samp style={{letterSpacing:'5px'}}>
                     PROJECTS
                    </samp> 
                 </h1>
                 <div className="underline"></div>
                    <p className="ppara">
                        <samp>Here you will find some of the personal and clients projects that I created with each project <br/> containing its own case study</samp>
                     </p>
            </div>
            <div className="in-animation7">
                <div className="adding">
                    <div>
                        <img src={Pointer} alt="" className="inm1"/>
                    </div>
                  <div className="fle">
                    <div >
                        <h3 className="phead1">
                            Point Expert
                        </h3>
                        <p className="ppara1">
                            Developed the frontend of Point.Expert, a user-friendly flight booking platform that simplifies the process of searching and reserving flights.</p>                 
                            <div className="button123">
                                <div className="pbutton">
                                    <a href="Point Expert Case Study.html"><p>CASE STUDY</p></a>
                                </div>
                            </div>
                    </div>
                 </div>
                </div>
            </div>
                <div className="in-animation7">
                    <div className="adding">
                        <div>
                            <img src={Hotel} alt="" className="inm1"/>
                        </div>
                      <div className="fle">
                        <div >
                            <h3 className="phead1">
                                Crown Template
                            </h3>
                            <p className="ppara1">
                                Crown is a web template that I created targeting the restaurant and food industry which anyone can use to present their business online.</p>
                                <div className="button123">
                                    <div className="pbutton">
                                        <a href="Hotel case study.html">
                                            <p>CASE STUDY</p>
                                        </a>
                                                                            </div>
                                </div>
                        </div>
                     </div>
                    </div>
                </div>
                <div className="in-animation7">
                    <div className="adding">
                        <div>
                            <img src={Portfolio} alt="" className="inm1"/>
                        </div>
                      <div className="fle">
                        <div >
                            <h3 className="phead1">
                                Dopefolio
                            </h3>
                            <p className="ppara1">
                                Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>
                                <div className="button123">
                                    <div className="pbutton">               
                                        <a href="PORTFOLIO CASE STUDY.html">
                                            <p>CASE STUDY</p>
                                        </a>
                                                                            </div>
                                </div>
                        </div>
                     </div>
                    </div>
                </div>
                <div className="in-animation7">
                    <div className="adding">
                        <div>
                            <img src={Motor} alt="" className="inm1"/>
                        </div>
                      <div className="fle">
                        <div >
                            <h3 className="phead1">
                                Wilsonport
                            </h3>
                            <p className="ppara1">
                                Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.                        </p>
                                <div className="button123">
                                    <div className="pbutton">               
                                        <a href="AVT casestudy.html">
                                            <p>CASE STUDY</p>
                                        </a>
                                                                            </div>
                                </div>
                        </div>
                     </div>
                    </div>
                </div>
                <div className="in-animation7">
                    <div className="adding">
                        <div>
                            <img src={Card} alt="" className="inm1"/>
                        </div>
                      <div className="fle">
                        <div >
                            <h3 className="phead1">
                                Boreal Coffee Clone
                            </h3>
                            <p className="ppara1">
                                I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend.</p>                 
                                <div className="button123">
                                    <div className="pbutton">
                                        <a href=""><p>CASE STUDY</p></a>
                                    </div>
                                </div>
                        </div>
                     </div>
                    </div>
                </div>
        </div>
        <div className="bg2" id="CONTACT"> 
            <div className="in-animation4">
                <h1 className="phead">
                    <samp style={{letterSpacing:'5px'}}>
                        CONTACT
                    </samp> 
                 </h1>
                 <div className="underline"></div>
                    <p className="ppara">
                        <samp>Feel free to Contact me by submitting the form below and I will get back to you as soon as <br/> possible</samp>
                     </p>
            </div>
            <div id="fom" className="in-animation7">
                <Contact />          
            </div>
            <div style={{width: '50px', height: '50px', marginTop:'50px'}}>

            </div>
        </div>
        <Footer/>
         
      </div>
    </>
  );
}

export default Portfoliohome;
