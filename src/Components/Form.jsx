import React, { useState } from "react";
import styles from "../Styles/Form.module.css"

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
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName" className={styles.label}>Nombre completo:</label>
        <input type="text" name="fullName" placeholder='Full Name' id='fullName' className={styles.input} value={formData.fullName} onChange={handleOnChange} />
        <label htmlFor="email" className={styles.label}>Email:</label>
        <input type="text" name="email" id="email" placeholder="Email" className={styles.input} value={formData.email} onChange={handleOnChange} />
        <input type="submit" value="Submit" className={styles.button} />
      </form>
      <div className={styles.alert}>{formData.alert}</div>
    </div>
  );
};

export default Form;
