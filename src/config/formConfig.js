const formConfig = {
  "forms": [
    {
      "id": "form1",
      "fields": [
        {
          "name": "firstName",
          "label": "First Name",
          "type": "text",
          "required": true,
          "min": 2, 
          "max": 15, 
        },
        {
          "name": "lastName",
          "label": "Last Name",
          "type": "text",
          "required": true,
          "min": 2, 
          "max": 15,
        }
      ]
    },
    {
      "id": "form2",
      "fields": [
        {
          "name": "email",
          "label": "Email",
          "type": "email",
          "required": true,
          "min": 2, 
          "max": 15, 
        },
        {
          "name": "phoneNumber",
          "label": "Phone Number",
          "type": "number",
          "required": false,
          "min":1, 
          "max": 10, 
        }
      ]
    },
    {
      "id": "form3",
      "fields": [
        {
          "name": "phone",
          "label": "phone",
          "type": "number",
          "required": true,
          "min":1, 
          "max": 10,
        },
        {
          "name": "lastName",
          "label": "Last Name",
          "type": "text",
          "required": true,
          "min":2, 
          "max": 10,
        }
      ]
    }
  ]
}
export default formConfig;
