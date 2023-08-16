import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import formConfig from "../config/formConfig";
import generateValidationSchema from "./validation/formValidation";

const DynamicForm = ({ activeFormId }) => {
  const activeForm = formConfig.forms.find((form) => form.id === activeFormId);

  if (!activeForm) {
    return <div>Form not found.</div>;
  }

  const validationSchema = generateValidationSchema(activeForm.fields);

  return (
    <Formik
      initialValues={{}}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values); // Form data after validation
        // You can perform further actions here, like form submission
      }}
    >
      <Form>
        {activeForm.fields.map((field) => (
          <div key={field.name}>
            <label>{field.label}</label>
            <Field
              type={field.type}
              name={field.name}
              required={field.required}
            />
            <ErrorMessage
              name={field.name}
              component="div"
              className="error"
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default DynamicForm;
