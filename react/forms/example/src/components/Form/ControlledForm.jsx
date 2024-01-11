import { useState } from "react";
import styles from "./ControlledForm.module.scss";

const ControlledForm = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordConfirm, setPasswordConfirm] = useState("");

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
    console.log(formValues, "formValues");
  };

  const validateForm = (data) => {
    // check if my fields are not empty strings, if they are, form is not valid, submit button should be disabled

    if (data.username === "") {
      return false;
    }
    if (data.email === "") {
      return false;
    }
    if (data.password === "") {
      return false;
    }
    if (data.passwordInput === "" || data.passwordConfirm !== data.password) {
      return false;
    }

    return true;
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    const newValues = { ...formValues, [name]: value };
    console.log(newValues);
    setFormValues(newValues);
    const valid = validateForm(newValues);
    setIsValid(valid);
    console.log(valid);
    // could place input validation logic here or move it to its own function
  };

  console.log("Re-rendered.");

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <div className={styles.div}>
        <label htmlFor="usernameInput">Username: </label>
        <input
          type="text"
          id="usernameInput"
          name="username"
          // onChange={(e) => setUsername(e.target.value)}
          value={formValues.username}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.div}>
        <label htmlFor="emailInput">Email: </label>
        <input
          type="email"
          id="emailInput"
          name="email"
          // onChange={(e) => setEmail(e.target.value)}
          value={formValues.email}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.div}>
        <label htmlFor="passwordInput">Password: </label>
        <input
          type="password"
          id="passwordInput"
          name="password"
          // onChange={(e) => setPassword(e.target.value)}
          value={formValues.password}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.div}>
        <label htmlFor="passwordConfirmInput">Password Confirm: </label>
        <input
          type="password"
          id="passwordConfirmInput"
          name="passwordConfirm"
          // onChange={(e) => setPasswordConfirm(e.target.value)}
          value={formValues.passwordConfirm}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button type="submit" disabled={!isValid}>
          Register
        </button>
      </div>
    </form>
  );
};

export default ControlledForm;
