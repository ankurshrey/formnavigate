import * as Yup from "yup";

const generateValidationSchema = (formFields) => {
    const validationSchema = Yup.object().shape(
        formFields.reduce((schema, field) => {
            let fieldSchema;

            switch (field.type) {
                case "text":
                    fieldSchema = Yup.string();
                    break;
                case "number":
                    fieldSchema = Yup.number();
                    break;
                case "email":
                    fieldSchema = Yup.string().email(`${field.label} must be a valid email`);
                    break;

                default:
                    fieldSchema = Yup.string(); // Default to string if type is not recognized
            }

            if (field.required) {
                fieldSchema = fieldSchema.required(`${field.label} is required`);
            }

            if (field.min !== undefined) {
                fieldSchema = fieldSchema.min(field.min, `${field.label} must be at least ${field.min}`);
            }

            if (field.max !== undefined) {
                fieldSchema = fieldSchema.max(field.max, `${field.label} must be at most ${field.max}`);
            }

            schema[field.name] = fieldSchema;
            return schema;
        }, {})
    );
    return validationSchema;
};

export default generateValidationSchema;
