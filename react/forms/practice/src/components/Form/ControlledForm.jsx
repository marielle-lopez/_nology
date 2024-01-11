import { useState, useEffect } from "react";
import styles from "./ControlledForm.module.scss";

const ControlledForm = () => {
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const [formValues, setFormValues] = useState(defaultValues);
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target; // destructure this way because e.target is an object
    const newValues = { ...formValues, [name]: value }; // [name] because we are accessing the value at the key name
    setFormValues(newValues);

    const valid = validateForm(newValues);
    setIsValid(valid);
  };

  const validateForm = (data) => {
    if (data.username === "") {
      return false;
    }

    if (data.email === "") {
      return false;
    }

    if (data.password === "") {
      return false;
    }

    if (data.passwordConfirm !== data.password) {
      return false;
    }

    return true;
  };

  return (
    <form className={styles.form_wrapper} onSubmit={handleSubmit}>
      <div className={styles.input_wrapper}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="userInput"
          name="username"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="emailInput"
          name="email"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="passwordInput"
          name="password"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="passwordConfirm">Password Confirm</label>
        <input
          type="password"
          id="passwordConfirmInput"
          name="passwordConfirm"
          onChange={handleInputChange}
        />
      </div>
      <button className={styles.register_btn} type="submit" disabled={!isValid}>
        Register
      </button>
    </form>
  );
};

export default ControlledForm;
