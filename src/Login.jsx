import { use, useState } from "react";
import Status from "./Status";
import { Account, AccountContext, AccountStatus } from "./Account";
import FormField from "./FormField";
import H from "./H";
import Button from "./Button";
import useStateStore from "./hooks/useStateStore";

function Login({ className: passedClasses }) {
  const { setAccount } = use(AccountContext);
  const defaultAccountStatus = new AccountStatus(
    "Registration is not yet supported. Please login as a guest."
  );
  const [accountStatus, setAccountStatus] = useState(defaultAccountStatus);
  const [formValues, setFormValue, toggleFormValue] = useStateStore({
    username: "",
    password: "",
    isGuest: false,
  });

  return (
    <section
      className={`space-y-3 text-ut-orange bg-midnight-green p-1.5 ${passedClasses ? passedClasses : ""}`}
    >
      <H.L3>Login</H.L3>
      <form
        className="grid grid-cols-2 space-y-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="username">Username:</label>
        <FormField.Text.User
          required
          disabled={formValues.isGuest}
          onChange={(e) => setFormValue(e.target.name, e.target.value)}
          name="username"
        />
        <label htmlFor="password">Password:</label>
        <FormField.Password.Current
          disabled={formValues.isGuest}
          onChange={(e) => setFormValue(e.target.name, e.target.value)}
          name="password"
        />
        <Status
          className="col-span-full mx-auto"
          msg={accountStatus.message}
          isErr={!accountStatus.success}
        />
        <fieldset className="col-span-full mx-auto space-x-2">
          <input
            checked={formValues.isGuest}
            value="guest"
            type="checkbox"
            name="isGuest"
            onChange={(e) => toggleFormValue(e.target.name)}
          ></input>
          <label htmlFor="isGuest">Login as Guest</label>
        </fieldset>
        <Button.Primary className="col-span-full mx-auto" type="submit">
          Login
        </Button.Primary>
      </form>
    </section>
  );

  async function handleSubmit(e) {
    e.preventDefault();

    let newAccount = null;
    let newAccountStatus = defaultAccountStatus;

    if (formValues.isGuest) {
      newAccount = Account.constructGuest();
    } else {
      newAccount = new Account(formValues.username, formValues.password);
    }

    try {
      await newAccount.authenticate();
      setAccount(newAccount);
    } catch (error) {
      newAccountStatus = new AccountStatus(error.message, false);
    }

    setAccountStatus(newAccountStatus);
  }
}

export default Login;
