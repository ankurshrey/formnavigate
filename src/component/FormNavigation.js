import React, { useState } from 'react';

const FormNavigation = ({ forms, activeFormId, setActiveFormId }) => {
  return (
    
    <div>
      {forms.map((form) => (
        <button
          key={form.id}
          onClick={() => setActiveFormId(form.id)}
          disabled={activeFormId === form.id}
        >
          {form.id}
        </button>
      ))}

    </div>
  );
};

export default FormNavigation;
