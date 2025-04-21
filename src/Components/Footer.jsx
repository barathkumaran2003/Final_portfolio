import React from 'react'

function Footer(){
  return (
    <>
       <div style={{backgroundColor: 'black', display:'flex'}}>
            <div className="fot">
                <h3>
                    BARATHKUMARAN
                </h3>
                <p>
                    A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product     </p>       
            </div>
            <div className="som">
                <h3>
                    SOCIAL
                </h3>
                <div className="social-icons1">
                    <a href="https://www.linkedin.com/in/barathkumaran-k-s-8681b2246/" target="_blank" className="icon-link" id="ic1"><i className="fab fa-linkedin" ></i></a>
                    <a href="https://github.com/barathkumaran2003" target="_blank" className="icon-link" id="ic2"><i className="fab fa-github"></i></a>
                    <a href="https://www.instagram.com" target="_blank" className="icon-link" id="ic3"><i className="fab fa-instagram"></i></a>
                    <a href="https://twitter.com" target="_blank" className="icon-link" id="ic4"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.youtube.com" target="_blank" className="icon-link" id="ic5"><i className="fab fa-youtube"></i></a>
                </div>
                
            </div>
        </div>
        <div className="lie"> 
            <div className="ulline"></div>
            <p><samp>© Copyright 2024 . Made by BARATHKUMARAN</samp></p>
         </div>
    </>
  )
}
export default Footer;
