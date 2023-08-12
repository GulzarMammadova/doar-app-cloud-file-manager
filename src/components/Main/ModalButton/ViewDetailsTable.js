import React, { useState } from 'react';
import '../../../App.css';
import { useTranslation } from "react-i18next";


export const DescriptionForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <form className='desc-form' onSubmit={handleSubmit}>
    <textarea
          type="text"
          name="description" 
          placeholder={t("modalDetailsDesc.addDesc")}
          value={formData.description}
          onChange={handleChange}
        />
    </form>
</>
  );
}; 

