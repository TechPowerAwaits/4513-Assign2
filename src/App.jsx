import { useState } from "react";
import Loading from "./Loading";
import Login from "./Login";
import { AccountContext } from "./Account";
import Header from "./Header";

function App() {
  const [account, setAccount] = useState(null);

  const currentView = account ? <Loading /> : <Login />;

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      <main>
        <Header />
        {currentView}
      </main>
    </AccountContext.Provider>
  );
}

export default App;
