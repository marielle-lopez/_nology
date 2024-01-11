import styles from "./RefForm.module.scss";
import { useRef, useState } from "react";

const RefForm = () => {
  const [errors, setErrors] = useState(null);
  const formRef = useRef(null);
  // 1. get a reference to the form element from the DOM
  // as an alternative, you could create useRefs to all inputs, one by one, but this would be more work

  // const usernameRef = useRef(null);

  const validateForm = (data) => {
    const errorObj = {
      username: [],
      email: [],
      password: [],
      passwordConfirm: [],
    };

    if (data.username === "") {
      errorObj.username.push("Username field is empty.");
    }

    if (data.email === "") {
      errorObj.email.push("Email field is empty.");
    }

    if (data.password === "") {
      errorObj.password.push("Password field is empty.");
    }

    if (data.passwordConfirm !== data.password) {
      errorObj.passwordConfirm.push("Password confirm must match password.");
    }

    if (Object.values(errorObj).some((error) => error.length > 0)) {
      setErrors(errorObj);
      console.log(errorObj);
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current);
    console.log(formRef);

    // 2. create a formData object from the form element
    const form = formRef.current;
    const formData = new FormData(form);
    const dataToSendToBackend = Object.fromEntries(formData);
    console.log(dataToSendToBackend);
    // console.log([...formData.entries()]);

    // console.log(usernameRef.current.value);

    const isValid = validateForm(dataToSendToBackend);
    console.log(isValid);

    if (isValid) {
      setErrors(null);
      // formSubmit(dataToSendToBackend);
      form.reset();
    }
  };

  console.log("Form re-rendered!");

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className={styles.div}>
        <label htmlFor="usernameInput">Username: </label>
        <input
          type="text"
          id="usernameInput"
          name="username"
          // ref={usernameRef}
        />
        {errors?.username?.length > 0 && (
          <p>{errors.username.map((error) => error)}</p>
        )}
      </div>
      <div className={styles.div}>
        <label htmlFor="emailInput">Email: </label>
        <input type="email" id="emailInput" name="email" />
        {errors?.email?.length > 0 && (
          <p>{errors.email.map((error) => error)}</p>
        )}
      </div>
      <div className={styles.div}>
        <label htmlFor="passwordInput">Password: </label>
        <input type="password" id="passwordInput" name="password" />
        {errors?.password?.length > 0 && (
          <p>{errors.password.map((error) => error)}</p>
        )}
      </div>
      <div className={styles.div}>
        <label htmlFor="passwordConfirmInput">Password Confirm: </label>
        <input
          type="password"
          id="passwordConfirmInput"
          name="passwordConfirm"
        />
        {errors?.passwordConfirm?.length > 0 &&
          errors.passwordConfirm.map((error) => <p>{error}</p>)}
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default RefForm;
