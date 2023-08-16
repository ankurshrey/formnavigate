import * as Yup from "yup";

const generateValidationSchema = (formFields) => {
    const validationSchema = Yup.object().shape(
        formFields.reduce((schema, field) => {
            schema[field.name] = field.required
                ? Yup.string().required(`${field.label} is required`)
                : Yup.string();
            return schema;
        }, {})
    );
    return validationSchema;
};

export default generateValidationSchema;
