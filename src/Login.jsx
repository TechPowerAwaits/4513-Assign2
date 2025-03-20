import { useState } from "react";

function Login(props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      user <input type="text" value={user} onChange={handleUser} />
      pass <input type="password" value={pass} onChange={handlePass} />
      <span>{msg}</span>
      <input type="submit" />
    </form>
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
    // check user + pass values.
    if (user == "Sue" && pass == "1234") {
      props.handler(true);
    } else {
      setMsg("invalid");
    }
  }
}

export default Login;
