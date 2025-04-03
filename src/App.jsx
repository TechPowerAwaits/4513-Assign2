import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { AccountContext } from "./contexts/Account";
import Header from "./components/Header";
import Home from "./components/Home";
import Galleries from "./components/galleries/Galleries";
import DataProvider from "./DataProvider";
import { setErrorHandler } from "./fetchHandler";
import { DataContext } from "./contexts/Data";
import Paintings from "./components/paintings/Paintings";

function App() {
  const [account, setAccount] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (account && !data) {
      console.debug("Entered data hook.");
      setErrorHandler((error) => console.error(error.message));

      const dataSetter = async () => {
        const newData = await DataProvider.acquire([
          new DataProvider(
            "galleries",
            import.meta.env.VITE_GALLERIES_URL ||
              "https://art-api-kafs.onrender.com/api/galleries"
          ),
          new DataProvider(
            "artists",
            import.meta.env.VITE_ARTISTS_URL ||
              "https://art-api-kafs.onrender.com/api/artists"
          ),
          new DataProvider(
            "genres",
            import.meta.env.VITE_GENRES_URL ||
              "https://art-api-kafs.onrender.com/api/genres"
          ),
          new DataProvider(
            "paintings",
            import.meta.env.VITE_PAINTINGS_URL ||
              "https://art-api-kafs.onrender.com/api/paintings"
          ),
          new DataProvider(
            "shapes",
            import.meta.env.VITE_SHAPES_URL ||
              "https://art-api-kafs.onrender.com/api/shapes"
          ),
        ]);

        setData(newData);
      };

      dataSetter();
    }
  }, [account, data]);

  //const currentView = account ? <Galleries /> : <Home />;
  let currentView;

  if (account) {
    if (data) {
      currentView = <Paintings />;
    } else {
      currentView = <Loading />;
    }
  } else {
    currentView = <Home />;
  }

  return (
    <DataContext.Provider value={data}>
      <AccountContext.Provider value={{ account, setAccount }}>
        <main className="h-dvh flex flex-col">
          <Header />
          {currentView}
        </main>
      </AccountContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
