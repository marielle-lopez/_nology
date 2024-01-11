import { useRef, useState } from "react";

import styles from "./RefForm.module.scss";

const RefForm = () => {
  const formRef = useRef(null);
  const [errors, setErrors] = useState(null);

  const validateForm = (data) => {
    const errorObj = {
      username: [],
      email: [],
      password: [],
      passwordConfirm: [],
    };

    if (data.username === "") {
      errorObj.username.push("Username field cannot be empty");
    }

    if (data.email === "") {
      errorObj.email.push("Email field cannot be empty");
    }

    if (data.password === "") {
      errorObj.password.push("Password field cannot be empty");
    }

    if (data.passwordConfirm !== data.password) {
      errorObj.passwordConfirm.push("Password confirm field cannot be empty");
    }

    if (Object.values(errorObj).some((arr) => arr.length > 0)) {
      setErrors(errorObj);
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const dataToSendToBackend = Object.fromEntries(formData);
    const isValid = validateForm(dataToSendToBackend);

    if (isValid) {
      setErrors(null);
      formRef.current.reset();
    }
  };

  return (
    <form className={styles.form_wrapper} onClick={handleSubmit} ref={formRef}>
      <div>
        <div className={styles.input_wrapper}>
          <label htmlFor="username">Username</label>
          <input type="text" id="usernameInput" name="username" />
        </div>
        {errors?.username?.[0] &&
          errors.username.map((error) => (
            <p className={styles.error_msg}>{error}</p>
          ))}
      </div>
      <div>
        <div className={styles.input_wrapper}>
          <label htmlFor="email">Email</label>
          <input type="email" id="emailInput" name="email" />
        </div>
        {errors?.email?.[0] &&
          errors.email.map((error) => (
            <p className={styles.error_msg}>{error}</p>
          ))}
      </div>
      <div>
        <div className={styles.input_wrapper}>
          <label htmlFor="password">Password</label>
          <input type="password" id="passwordInput" name="password" />
        </div>
        {errors?.password?.[0] &&
          errors.password.map((error) => (
            <p className={styles.error_msg}>{error}</p>
          ))}
      </div>
      <div>
        <div className={styles.input_wrapper}>
          <label htmlFor="passwordConfirm">Password Confirm</label>
          <input
            type="password"
            id="passwordConfirmInput"
            name="passwordConfirm"
          />
        </div>
        {errors?.passwordConfirm?.[0] &&
          errors.passwordConfirm.map((error) => (
            <p className={styles.error_msg}>{error}</p>
          ))}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RefForm;
