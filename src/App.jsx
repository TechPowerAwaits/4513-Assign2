import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { AccountContext } from "./contexts/Account";
import Header from "./components/Header";
import Home from "./components/Home";
import Galleries from "./components/galleries/Galleries";
import DataProvider from "./DataProvider";
import { setErrorHandler } from "./fetchHandler";

function App() {
  const [account, setAccount] = useState(null);
  const galleryState = useState(null);
  const artistState = useState(null);
  const genreState = useState(null);
  const paintingState = useState(null);

  useEffect(() => {
    console.debug("Entered data hook.");
    setErrorHandler((error) => console.error(error.message));

    DataProvider.acquire([
      new DataProvider(
        "galleries",
        import.meta.env.VITE_GALLERIES_URL ||
          "https://art-api-kafs.onrender.com/api/galleries",
        galleryState
      ),
      new DataProvider(
        "artists",
        import.meta.env.VITE_ARTISTS_URL ||
          "https://art-api-kafs.onrender.com/api/artists",
        artistState
      ),
      new DataProvider(
        "genres",
        import.meta.env.VITE_GENRES_URL ||
          "https://art-api-kafs.onrender.com/api/genres",
        genreState
      ),
      new DataProvider(
        "paintings",
        import.meta.env.VITE_PAINTINGS_URL ||
          "https://art-api-kafs.onrender.com/api/paintings",
        paintingState
      ),
    ]);
  }, [artistState, galleryState, genreState, paintingState]);

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
