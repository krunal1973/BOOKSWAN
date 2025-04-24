import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Contact Us</h1>

      <div style={{ marginTop: '30px' }}>
        <h2 style={{ textAlign: 'center' }}>Get in Touch</h2>

        <p>If you have any questions or need support, feel free to contact us using the form below:</p>

        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ display: 'block' }}>Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '10px', borderRadius: '5px' }} 
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block' }}>Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '10px', borderRadius: '5px' }} 
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="message" style={{ display: 'block' }}>Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              rows="5" 
              style={{ width: '100%', padding: '10px', borderRadius: '5px' }} 
            />
          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
              type="submit" 
              style={{
                padding: '10px 15px',
                backgroundColor: '#C5A992',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
