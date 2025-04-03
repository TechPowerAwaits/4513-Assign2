/*
 * Purpose: Provides a form for creating an account with the service.
 */

import { use, useId, useState } from "react";
import { Status, StatusState } from "./Status";
import { Account, AccountContext } from "../contexts/Account";
import FormField from "./FormField";
import H from "./H";
import Button from "./Button";

function Register({ className: passedClasses }) {
  const fieldId = useId();
  const { setAccount } = use(AccountContext);
  const defaultRegisterStatus = new StatusState(
    "Registration is not yet supported. " +
      "No account will be created and you will be signed in as a guest."
  );
  const [registerStatus, setRegisterStatus] = useState(defaultRegisterStatus);
  const [formValues, setFormValues] = useState({
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
        <label htmlFor={`${fieldId}-username`}>Username:</label>
        <FormField.Text.User
          required
          onChange={(e) => handleFieldChange(e)}
          id={`${fieldId}-username`}
          name="username"
        />
        <label htmlFor={`${fieldId}-email`}>Email:</label>
        <FormField.Email
          required
          onChange={(e) => handleFieldChange(e)}
          id={`${fieldId}-email`}
          name="email"
        />
        <label htmlFor={`${fieldId}-confirmEmail`}>Confirm Email:</label>
        <FormField.Email
          required
          disabled={formValues.email.length === 0}
          onChange={(e) => handleFieldChange(e)}
          id={`${fieldId}-confirmEmail`}
          name="confirmEmail"
        />
        <label htmlFor={`${fieldId}-password`}>Password:</label>
        <FormField.Password.New
          required
          onChange={(e) => handleFieldChange(e)}
          id={`${fieldId}-password`}
          name="password"
        />
        <label htmlFor={`${fieldId}-confirmPassword`}>Confirm Password:</label>
        <FormField.Password.New
          required
          disabled={formValues.password.length === 0}
          onChange={(e) => handleFieldChange(e)}
          id={`${fieldId}-confirmPassword`}
          name="confirmPassword"
        />
        <Status className="col-span-full mx-auto" state={registerStatus} />
        <Button.Primary className="col-span-full mx-auto" type="submit">
          Register
        </Button.Primary>
      </form>
    </section>
  );

  function handleFieldChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }
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
