const formConfig ={
    "forms": [
      {
        "id": "form1",
        "fields": [
          {
            "name": "firstName",
            "label": "First Name",
            "type": "text",
            "required": true
          },
          {
            "name": "lastName",
            "label": "Last Name",
            "type": "text",
            "required": true
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
            "required": true
          },
          {
            "name": "phoneNumber",
            "label": "Phone Number",
            "type": "tel",
            "required": false
          }
        ]
      }
    ]
  }
export default formConfig;
  