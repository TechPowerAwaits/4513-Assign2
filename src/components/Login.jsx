/*
 * Purpose: Provides a form for logging into the service.
 */

import { use, useId, useState } from "react";
import { Status, StatusState } from "./Status";
import { Account, AccountContext } from "../contexts/Account";
import FormField from "./FormField";
import H from "./H";
import Button from "./Button";
import { Link } from "react-router";

function Login({ className: passedClasses = "" }) {
  const fieldId = useId();
  const { setAccount } = use(AccountContext);
  const defaultLoginStatus = new StatusState(
    "Registration is not yet supported. Please login as a guest."
  );
  const [loginStatus, setLoginStatus] = useState(defaultLoginStatus);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    isGuest: false,
  });

  return (
    <section
      className={`space-y-3 text-ut-orange bg-midnight-green p-1.5 ${passedClasses}`}
    >
      <H.L3>Login</H.L3>
      <form
        className="grid grid-cols-2 space-y-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor={`${fieldId}-username`}>Username:</label>
        <FormField.Text.User
          required
          disabled={formValues.isGuest}
          onChange={(e) => handleFieldChange(e)}
          id={`${fieldId}-username`}
          name="username"
        />
        <label htmlFor={`${fieldId}-password`}>Password:</label>
        <FormField.Password.Current
          disabled={formValues.isGuest}
          onChange={(e) => handleFieldChange(e)}
          id={`${fieldId}-password`}
          name="password"
        />
        <Status className="col-span-full mx-auto" state={loginStatus} />
        <fieldset className="col-span-full mx-auto space-x-2">
          <input
            checked={formValues.isGuest}
            value="guest"
            type="checkbox"
            id={`${fieldId}-isGuest`}
            name="isGuest"
            onChange={() =>
              setFormValues({ ...formValues, isGuest: !formValues.isGuest })
            }
          ></input>
          <label htmlFor={`${fieldId}-isGuest`}>Login as Guest</label>
        </fieldset>
        <Button.Primary className="col-span-full mx-auto" type="submit">
          Login
        </Button.Primary>
        <Link
          className="underline visited:text-spanish-orange hover:text-sandy-brown"
          to="/register"
        >
          Don't have an account? Register here.
        </Link>
      </form>
    </section>
  );

  async function handleSubmit(e) {
    e.preventDefault();

    let newAccount = null;
    let newLoginStatus = defaultLoginStatus;

    if (formValues.isGuest) {
      newAccount = Account.constructGuest();
    } else {
      newAccount = new Account(formValues.username, formValues.password);
    }

    try {
      await newAccount.authenticate();
      setAccount(newAccount);
    } catch (error) {
      newLoginStatus = new StatusState(error.message, false);
    }

    setLoginStatus(newLoginStatus);
  }

  function handleFieldChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }
}

export default Login;
