// https://react.dev/reference/react/useActionState

import { use, useActionState, useState } from "react";
import Status from "./Status";
import { Account, AccountContext, AccountStatus } from "./Account";

function Login() {
  const { setAccount } = use(AccountContext);
  const defaultAccountStatus = new AccountStatus(
    "Registration is not yet supported. Please login as a guest."
  );

  ///const [msg, setMsg] = useState(defaultMsg);
  const [accountStatus, formAction, isPending] = useActionState(
    handleSubmit,
    defaultAccountStatus
  );
  const [isGuest, setGuest] = useState(true);

  return (
    <section className="space-y-3 text-yellow-400 bg-green-700 py-1.5">
      <h2 className="text-center font-bold text-xl">Login</h2>
      <form action={formAction} className="grid grid-cols-2 space-y-3">
        <label htmlFor="username">Username:</label>
        <input
          autoFocus
          autoComplete="username"
          className="bg-yellow-200 border-black border-2 disabled:bg-gray-400"
          disabled={isGuest}
          type="text"
          name="username"
        />
        <label htmlFor="password">Password:</label>
        <input
          autoComplete="current-password"
          className="bg-yellow-200 border-black border-2 disabled:bg-gray-400"
          disabled={isGuest}
          type="password"
          name="password"
        />
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
        {isPending ? (
          <Loading />
        ) : (
          <Status
            className="col-span-full mx-auto"
            msg={accountStatus.message}
            isErr={!accountStatus.success}
          />
        )}

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
