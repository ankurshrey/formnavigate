import React, { useState } from 'react';
import FormNavigation from './component/FormNavigation';
import DynamicForm from './component/DynamicForm';
import formConfig from './config/formConfig';


const App = () => {
  const [activeFormId, setActiveFormId] = useState(formConfig.forms[0].id);

  return (
    <div>
      <h1>Multi-Form Example</h1>
      <FormNavigation
        forms={formConfig.forms}
        activeFormId={activeFormId}
        setActiveFormId={setActiveFormId}
      />
      <DynamicForm forms={formConfig.forms} activeFormId={activeFormId} />
    </div>
  );
};

export default App;
