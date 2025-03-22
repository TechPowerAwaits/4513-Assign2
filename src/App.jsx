import { useState } from "react";
import Loading from "./Loading";
import { AccountContext } from "./Account";
import Header from "./Header";
import Home from "./Home";

function App() {
  const [account, setAccount] = useState(null);

  const currentView = account ? <Loading /> : <Home />;

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      <main className="h-dvh flex flex-col">
        <Header />
        {currentView}
      </main>
    </AccountContext.Provider>
  );
}

export default App;
