/*
 * Purpose: Provides a form for creating an account with the service.
 */

import { use, useState } from "react";
import { Status, StatusState } from "./Status";
import { Account, AccountContext } from "../contexts/Account";
import FormField from "./FormField";
import H from "./H";
import Button from "./Button";
import useStateStore from "../hooks/useStateStore";

function Register({ className: passedClasses }) {
  const { setAccount } = use(AccountContext);
  const defaultRegisterStatus = new StatusState(
    "Registration is not yet supported. " +
      "No account will be created and you will be signed in as a guest."
  );
  const [registerStatus, setRegisterStatus] = useState(defaultRegisterStatus);
  const [formValues, setFormValue] = useStateStore({
    username: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <section
      className={`space-y-3 text-ut-orange bg-midnight-green p-1.5 ${passedClasses ? passedClasses : ""}`}
    >
      <H.L3>Register</H.L3>
      <form
        className="grid grid-cols-2 space-y-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="username">Username:</label>
        <FormField.Text.User
          required
          onChange={(e) => setFormValue(e.target.name, e.target.value)}
          name="username"
        />
        <label htmlFor="email">Email:</label>
        <FormField.Email
          required
          onChange={(e) => setFormValue(e.target.name, e.target.value)}
          name="email"
        />
        <label htmlFor="confirmEmail">Confirm Email:</label>
        <FormField.Email
          required
          disabled={formValues.email.length === 0}
          onChange={(e) => setFormValue(e.target.name, e.target.value)}
          name="confirmEmail"
        />
        <label htmlFor="password">Password:</label>
        <FormField.Password.New
          required
          onChange={(e) => setFormValue(e.target.name, e.target.value)}
          name="password"
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <FormField.Password.New
          required
          disabled={formValues.password.length === 0}
          onChange={(e) => setFormValue(e.target.name, e.target.value)}
          name="confirmPassword"
        />
        <Status className="col-span-full mx-auto" state={registerStatus} />
        <Button.Primary className="col-span-full mx-auto" type="submit">
          Register
        </Button.Primary>
      </form>
    </section>
  );

  async function handleSubmit(e) {
    e.preventDefault();

    let newRegisterStatus = defaultRegisterStatus;

    if (formValues.email != formValues.confirmEmail) {
      newRegisterStatus = new StatusState(
        "The Confirmation Email doesn't match the provided Email.",
        false
      );
    } else if (formValues.password != formValues.confirmPassword) {
      newRegisterStatus = new StatusState(
        "The Confirmation Password doesn't match the provided Password.",
        false
      );
    } else {
      let newAccount = Account.constructGuest();

      try {
        await newAccount.authenticate();
        setAccount(newAccount);
      } catch (error) {
        newRegisterStatus = new StatusState(error.message, false);
      }
    }

    setRegisterStatus(newRegisterStatus);
  }
}

export default Register;
