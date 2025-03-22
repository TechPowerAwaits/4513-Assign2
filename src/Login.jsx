// https://react.dev/reference/react/useActionState

import { use, useActionState, useState } from "react";
import Status from "./Status";
import { Account, AccountContext, AccountStatus } from "./Account";
import FormField from "./FormField";

function Login() {
  const { setAccount } = use(AccountContext);
  const defaultAccountStatus = new AccountStatus(
    "Registration is not yet supported. Please login as a guest."
  );

  ///const [msg, setMsg] = useState(defaultMsg);
  const [accountStatus, formAction] = useActionState(
    handleSubmit,
    defaultAccountStatus
  );
  const [isGuest, setGuest] = useState(true);

  return (
    <section className="space-y-3 text-yellow-400 bg-green-700 py-1.5">
      <h2 className="text-center font-bold text-xl">Login</h2>
      <form action={formAction} className="grid grid-cols-2 space-y-3">
        <label htmlFor="username">Username:</label>
        <FormField.Text.User autoFocus disabled={isGuest} name="username" />
        <label htmlFor="password">Password:</label>
        <FormField.Password.Current disabled={isGuest} name="password" />
        <fieldset className="col-span-full">
          <input
            checked={isGuest}
            value="guest"
            type="checkbox"
            name="isGuest"
            onChange={toggleGuest}
          ></input>
          <label htmlFor="isGuest">Login as Guest</label>
        </fieldset>
        <Status
          className="col-span-full mx-auto"
          msg={accountStatus.message}
          isErr={!accountStatus.success}
        />
        <button
          className="col-span-full bg-blue-700 hover:bg-blue-400"
          type="submit"
        >
          Login
        </button>
      </form>
    </section>
  );

  async function handleSubmit(prevMsg, formData) {
    let newAccount = null;
    let newAccountStatus = defaultAccountStatus;

    if (isGuest) {
      newAccount = Account.constructGuest();
    } else {
      newAccount = new Account(
        formData.get("username"),
        formData.get("password")
      );
    }

    try {
      await newAccount.authenticate();
      setAccount(newAccount);
    } catch (error) {
      newAccountStatus = new AccountStatus(error.message, false);
    }

    return newAccountStatus;
  }

  function toggleGuest() {
    setGuest(!isGuest);
  }
}

export default Login;
