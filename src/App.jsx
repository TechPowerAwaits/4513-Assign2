import { useState } from "react";
import Loading from "./Loading";
import Login from "./Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) return <Login handler={handleLogin} />;
  else return <Loading />;

  function handleLogin(which) {
    setLoggedIn(which);
  }
}

export default App;
