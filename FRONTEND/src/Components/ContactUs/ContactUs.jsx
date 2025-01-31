import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import './ContactUs.css'; // Corrected CSS import
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS API call to send email
    emailjs.send(
      'service_aq6y51e',        
      'template_xpiuc28',       
      formData,                 
      'NCbbFityx_OT0PNO-'            
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSuccess('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form after submission
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setError('There was an error sending your message. Please try again.');
    });
  };

  return (
    <div className="contact-us-container" data-aos="fade-up">
      <h3 data-aos="fade-up">Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <div data-aos="fade-up">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div data-aos="fade-up">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div data-aos="fade-up">
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit" data-aos="fade-up">Submit</button>
      </form>

      {/* Success or error messages */}
      {success && <div className="success-message">{success}</div>}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default ContactUs;
