import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      setErrorMessage("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Invalid email address");
      return;
    }

    console.log("Form submitted:", { name, email, message });

    setName('');
    setEmail('');
    setMessage('');
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
