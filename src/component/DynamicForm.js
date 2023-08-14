import React, { useState } from 'react';

const DynamicForm = ({ forms, activeFormId }) => {

  const activeForm = forms.find((form) => form.id === activeFormId);

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can perform form submission or validation here
  };

  return (
    <form onSubmit={handleSubmit}>
      {activeForm.fields.map((field) => (
        
        <div key={field.name}>
          <label>{field.label}</label>

          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
            required={field.required}
          />
        </div>
        
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
