import { use, useState } from "react";
import Status from "./Status";
import { Account, AccountContext, AccountStatus } from "./Account";
import FormField from "./FormField";
import H from "./H";

function Login({ className: passedClasses }) {
  const { setAccount } = use(AccountContext);
  const defaultAccountStatus = new AccountStatus(
    "Registration is not yet supported. Please login as a guest."
  );
  const [accountStatus, setAccountStatus] = useState(defaultAccountStatus);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isGuest, setGuest] = useState(false);

  return (
    <section
      className={`space-y-3 text-yellow-400 bg-green-700 p-1.5 ${passedClasses}`}
    >
      <H.L3>Login</H.L3>
      <form
        className="grid grid-cols-2 space-y-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="username">Username:</label>
        <FormField.Text.User
          required
          disabled={isGuest}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
        />
        <label htmlFor="password">Password:</label>
        <FormField.Password.Current
          disabled={isGuest}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        <Status
          className="col-span-full mx-auto"
          msg={accountStatus.message}
          isErr={!accountStatus.success}
        />
        <fieldset className="col-span-full mx-auto">
          <input
            checked={isGuest}
            value="guest"
            type="checkbox"
            name="isGuest"
            onChange={() => setGuest(!isGuest)}
          ></input>
          <label htmlFor="isGuest">Login as Guest</label>
        </fieldset>
        <button
          className="col-span-full bg-tyrian-purple hover:bg-murrey text-ut-orange mx-auto py-3 px-4 rounded-full"
          type="submit"
        >
          Login
        </button>
        <button
          className="col-span-full bg-spanish-orange hover:bg-ut-orange text-tyrian-purple mx-auto py-3 px-4 rounded-full"
          type="submit"
        >
          Login
        </button>
      </form>
    </section>
  );

  async function handleSubmit(e) {
    e.preventDefault();

    let newAccount = null;
    let newAccountStatus = defaultAccountStatus;

    if (isGuest) {
      newAccount = Account.constructGuest();
    } else {
      newAccount = new Account(username, password);
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
