import initModals from "./modals";
import { useState } from "react";
import Loading from "./components/Loading";
import { AccountContext } from "./contexts/Account";
import Header from "./components/Header";
import Home from "./components/Home";
import Galleries from "./components/galleries/Galleries";
import { DataContext } from "./contexts/Data";
import Paintings from "./components/paintings/Paintings";
import { Route, Routes, useNavigate } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./NotFound";
import useToggle from "./hooks/useToggle";
import ErrorHandler from "./components/ErrorHandler";
import AboutModal from "./components/AboutModal";

const accountStartPath = "/galleries";
initModals();

function App() {
  const [account, setAccount] = useState(null);
  const [err, toggleErr] = useToggle();
  const navTo = useNavigate();

  const accountLogout = () => {
    navTo("/");
    setAccount(null);
  };

  let rootView = <Login />;
  let data = null;

  if (account) {
    if (err) {
      rootView = <ErrorHandler errToggle={toggleErr} />;
    } else if (!account.data) {
      if (rootView != <Loading />) {
        rootView = <Loading />;

        const handleData = async () => {
          const newAccount = account.clone();
          if (await newAccount.retrieveData()) {
            setAccount(newAccount);
            navTo(accountStartPath);
          } else {
            toggleErr();
          }
        };

        handleData();
      }
    } else {
      data = account.data;
    }
  }

  return (
    <DataContext.Provider value={data}>
      <AccountContext.Provider value={{ account, setAccount, accountLogout }}>
        <div className="h-dvh flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route element={<Home />}>
                <Route index element={rootView} />
                <Route path="register" element={<Register />} />
              </Route>
              {data && (
                <>
                  <Route path="/galleries" element={<Galleries />} />
                  <Route path="/paintings" element={<Paintings />} />
                </>
              )}
              <Route path="/about" element={<AboutModal />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </AccountContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
