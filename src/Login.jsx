// https://react.dev/reference/react/useActionState

import { useState } from "react";

function Login(props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");
  const [isGuest, setGuest] = useState(false);

  return (
    <article className="bg-[url(assets/brooklyn-MO5qO9xpZhA-unsplash.jpg)] bg-no-repeat bg-cover">
      <h1>Welcome to Art Browser!</h1>
      <section>{msg}</section>
      <form onSubmit={handleSubmit}>
        <fieldset className="grid grid-cols-2">
          <legend className="col-span-full">Login</legend>
          <label htmlFor="username">Username:</label>
          <input
            autoFocus
            autoComplete="username"
            className="bg-amber-200 border-black border-2 disabled:bg-gray-400"
            disabled={isGuest}
            type="text"
            name="username"
            value={user}
            onChange={handleUser}
          />
          <label htmlFor="password">Password:</label>
          <input
            autoComplete="current-password"
            className="bg-amber-200 border-black border-2 disabled:bg-gray-400"
            disabled={isGuest}
            type="password"
            name="password"
            value={pass}
            onChange={handlePass}
          />
          <input
            checked={isGuest}
            value="guest"
            type="checkbox"
            name="isGuest"
            onChange={toggleGuest}
          ></input>
          <label htmlFor="isGuest">Login as Guest</label>
          <button className="col-span-full bg-blue-700 hover:bg-blue-400">
            Login
          </button>
        </fieldset>
      </form>
      Photo by{" "}
      <a href="https://unsplash.com/@brooklyngrace?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        brooklyn
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/photos/people-in-the-street-painting-MO5qO9xpZhA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Unsplash
      </a>
    </article>
  );

  // Can use single handler if we use name attributes.
  function handleUser(e) {
    setUser(e.target.value);
  }

  function handlePass(e) {
    setPass(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isGuest) {
      props.handler(true);
    } else {
      setMsg("invalid");
    }
  }

  function toggleGuest() {
    setGuest(!isGuest);
  }
}

export default Login;
