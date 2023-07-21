import React, { useState } from 'react';
import '../../../App.css';


export const DescriptionForm = () => {
  const [formData, setFormData] = useState({
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.description]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <form className='desc-form' onSubmit={handleSubmit}>
      <textarea type="text" name="message" placeholder='Add description' value={formData.message} onChange={handleChange} />
    </form>
    <button className='submit-btn' type="submit">Close</button>
</>
  );
};

