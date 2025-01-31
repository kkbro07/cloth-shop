import React, { useState, useEffect } from 'react';
import './WhatsAppChatWidget.css';
import whatsappLogo from './WhatsApp.png'; // Ensure you have a WhatsApp logo image in your project

export const WhatsAppChatWidget = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isPopupOpen) {
        document.querySelector('#whatsapp-popup').classList.add('show');
      } else {
        document.querySelector('#whatsapp-popup').classList.remove('show');
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [isPopupOpen]);

  const handleLogoClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const startChat = () => {
    const myNumber = '917621987245'; // Your number
    const message = encodeURIComponent('How can I help you?'); // Your predefined message
    const whatsappUrl = `https://wa.me/${myNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <div id="whatsapp-logo" onClick={handleLogoClick}>
        <img src={whatsappLogo} alt="WhatsApp" />
      </div>
      <div id="whatsapp-popup">
        <div id="popup-header">
          <h3>Hi there 👋</h3>
          <button id="close-popup" onClick={closePopup}>×</button>
        </div>
        <p>We are here to help. Chat with us on WhatsApp for any queries.</p>
        <input 
          type="text"
          id="phone-number"
          placeholder="Enter Your Number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <button onClick={startChat}>Send Us a Text</button>
      </div>
    </div>
  );
};
