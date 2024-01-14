# Using Libraries to Make Forms

## React Hook Form

https://react-hook-form.com/get-started

`npm install react-hook form`

### Schema Validation with Zod

Involves utilising another library, Zod.

https://github.com/react-hook-form/resolvers#zod

`npm install zod @hookform/resolvers`

```jsx
const hookFormSubmit = (data) => {
  console.log(data);
};
```

```jsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolver";
import * zod from 'zod';

// creating schema that represents our form, this is where all our validation goes
// 'data' is everything you'd set up in the schema
  // use zod if you don't want the default browser error messages
    // this means you can get rid of the type="email" to remove default validation
    // .refine() is a function that takes all the form data as an argument
      // here, you can add all extra validation

const schema = z.object({
  username: z.string().min(5, { message: "Must be at least 4 characters long" }),
  email: z.string().email({ message: "Must be a valid email" }),
  password: z.string().min(6, { message: "Password must be 6 characters long"}),
  passwordConfirm: z.string(),
}).refine((data) => data.passwordConfirm === data.password, {
  message: "Passwords must be the same",
  path: ["passwordConfirm"] });

const HookForm = ({ hookFormSubmit }) => {

  // you don't need to add e.preventDefault(), it's done automatically by react hook form
  // destructuring the methods from the useForm object

    // register creates an object for inputs you add register to
      // the object has the name of the input (key) and the value
      // we add register to inputs we care about

    // handleSubmit is the function that you define to do what you want with your data

    // formState: { errors } allows us to see what is wrong with the form
      // you can pass 'required' and a corresponding error message
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: zodResolver(schema),
                defaultValues: {
                                username: "Marielle",
                                email: "marielle@test.com"
                               }
              }
  );

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(hookFormSubmit)}>
      <div>
        <label htmlForm="usernameInput">Username: </label>
        <input type="text" id="usernameInput" {
                                                ...register("username"),
                                                // { required: = "Username is required" }
                                              }/>
        { errors.username && <small>{ errors.username }</small> }
      </div>

      <div>
        <label htmlForm="emailInput">Email: </label>
        <input id="emailInput" {...register("email")}/>
        { errors.email && <small>{ errors.email }</small> }
      </div>

      <div>
        <label htmlForm="passwordInput">Password: </label>
        <input type="password" id="passwordInput" {...register("password")} />
      </div>

      <div>
        <label htmlForm="passwordConfirmInput">Password Confirm: </label>
        <input type="password" id="passwordConfirmInput" {...register("passwordConfirm")} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
```
