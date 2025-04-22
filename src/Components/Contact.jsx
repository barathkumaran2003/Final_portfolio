import React, { useState } from 'react';
import './PortfolioAnimation.js';
import './Navigation.js';

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value,
    };
  
    try {
      const response = await fetch('https://contact-form-backend-2-cks6.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };
  

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <label className="clabel"> First name </label><br/>
      <input type="text" id="name" placeholder="Enter Name" required className="cinput"  /><br/>
      
      <label className="clabel"> Email </label><br/>
      <input type="email" id="email" placeholder="Enter Email" required className="cinput"  /><br/>
      
      <label className="clabel"> Phone Number </label><br/>
      <input type="text" id="phone" placeholder="Enter Phone Number" required className="cinput"  /><br/>
      
      <label className="clabel"> Message </label><br/>
      <textarea id="message" placeholder="Message" required className="cinput" ></textarea><br/>
      
      <button type="submit" className="cbutton">SUBMIT</button>
    </form>
  );
}

export default Contact;
