import { useState } from "react";
import Loading from "./components/Loading";
import { AccountContext } from "./contexts/Account";
import Header from "./components/Header";
import Home from "./components/Home";
import Galleries from "./components/galleries/Galleries";

function App() {
  const [account, setAccount] = useState(null);

  const currentView = account ? <Galleries /> : <Home />;

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
