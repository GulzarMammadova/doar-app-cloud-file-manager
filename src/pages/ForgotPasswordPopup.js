import React, { useState } from 'react';
import '../App.css';

export function ForgotPasswordPopup  ({ onClose }) {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preDefault();
    // Send email to reset password
    onClose();
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Please enter your e-mail address to get started.</label>
          <input
            type="email"
            id="email"
            placeholder='Enter your e-mail here'
            value={email}
            onChange={handleEmailChange}
          />
          <div className="button-container">
            <button type="submit" className="submit-button">Continue</button>
            <button type="button" className="cancel-button" onClick={onClose}>Go back to Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

