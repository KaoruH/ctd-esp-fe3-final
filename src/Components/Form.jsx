import React, { useState } from "react";

const Form = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    alert: "",
  });

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isNameValid = validName(formData.fullName);
    const isEmailValid = validEmail(formData.email);
    const isInputComplete = completeInput(formData);

    if (isEmailValid && isInputComplete && isNameValid) {
      setFormData({
        fullName: "",
        email: "",
        alert: `Gracias ${formData.fullName}, te contactaremos lo antes posible vía email`,
      });
    } else {
      setFormData({
        fullName: "",
        email: "",
        alert: "Por favor verifique su información nuevamente",
      });
    }
  }

  const completeInput = ({ fullName, email }) => {
    return (fullName && email);
  }

  const validName = (fullName) => {
    const withOutSpace = fullName.trim();

    return (withOutSpace.length > 5);
  }

  const validEmail = (email) => {
    const withOutSpace = email.trim();
  
    return (withOutSpace.includes("@"))
  
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label  >Nombre completo:</label>
        <input type="text" name="fullName" placeholder='Full Name' id='fullName' value={formData.fullName} onChange={handleOnChange} />
        <label f>Email:</label>
        <input type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleOnChange} />
        <input type="submit" value="Submit" />
      </form>
      <div>{formData.alert}</div>
    </div>
  );
};

export default Form;
