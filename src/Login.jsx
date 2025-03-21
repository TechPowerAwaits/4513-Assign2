// https://react.dev/reference/react/useActionState

import { useState } from "react";
import Header from "./Header";
import Status from "./Status";

function Login(props) {
  const defaultMsg =
    "Registration is not yet supported. Please login as a guest.";
  const errMsg =
    "No account is associated with the given username and password.";
  const [msg, setMsg] = useState(defaultMsg);
  const [loginErr, setLoginErr] = useState(false);
  const [isGuest, setGuest] = useState(true);

  return (
    <article className="bg-[url(assets/brooklyn-MO5qO9xpZhA-unsplash.jpg)] bg-no-repeat bg-cover space-y-3">
      <Header />
      <section className="space-y-3 text-yellow-400 bg-green-700 py-1.5">
        <h2 className="text-center font-bold text-xl">Login</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 space-y-3">
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
          <Status
            className="col-span-full mx-auto"
            msg={msg}
            isErr={loginErr}
          />
          <button
            className="col-span-full bg-blue-700 hover:bg-blue-400"
            type="submit"
          >
            Login
          </button>
        </form>
      </section>
      <section className="bg-blue-700 text-yellow-400 text-center">
        <h2 className="text-xl font-bold">Image Credits:</h2>
        Photo by{" "}
        <a href="https://unsplash.com/@brooklyngrace?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          brooklyn
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/people-in-the-street-painting-MO5qO9xpZhA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </section>
    </article>
  );

  function handleSubmit(e) {
    e.preventDefault();

    props.handler(isGuest);
    setLoginErr(!isGuest);
    setMsg(isGuest ? defaultMsg : errMsg);
  }

  function toggleGuest() {
    setGuest(!isGuest);
  }
}

export default Login;
