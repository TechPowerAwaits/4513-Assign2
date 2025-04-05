import { useEffect, useMemo, useState } from "react";
import Loading from "./components/Loading";
import { AccountContext } from "./contexts/Account";
import Header from "./components/Header";
import Home from "./components/Home";
import Galleries from "./components/galleries/Galleries";
import DataProvider from "./DataProvider";
import { fetchObjFromJSON, setErrorHandler } from "./fetchHandler";
import { DataContext } from "./contexts/Data";
import Paintings from "./components/paintings/Paintings";
import { dataSort } from "./sortHandler";
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [account, setAccount] = useState(null);
  const [data, setData] = useState(null);

  useMemo(() => {
    if (!account) {
      setData(null);
    }
  }, [account]);

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

        const paintingGenres = await fetchPaintingGenres(newData.genres);
        newData.paintingGenres = paintingGenres;
        sortData(newData);
        setData(newData);
      };

      dataSetter();
    }
  }, [account, data]);

  let initialView = <Home />;

  if (account) {
    initialView = <Loading />;
  }

  return (
    <DataContext.Provider value={data}>
      <AccountContext.Provider value={{ account, setAccount }}>
        <Header />
        <main className="h-dvh flex flex-col">
          <Routes>
            <Route element={<Home />}>
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            {data && (
              <>
                <Route path="/galleries" element={Galleries} />
                <Route path="/paintings" element={Paintings} />
              </>
            )}
          </Routes>
        </main>
      </AccountContext.Provider>
    </DataContext.Provider>
  );
}

/*
 * Purpose: Fetching all the paintings that are associated with a genre.
 *
 * Returns: An array of Genre and Paintings.
 */
async function fetchPaintingGenres(genresData) {
  const paintingGenresURL =
    import.meta.env.VITE_PAINTINGS_GENRES_URL ||
    "https://art-api-kafs.onrender.com/api/paintings/genre";
  const key = "paintingGenres";
  let paintingGenres = localStorage.getItem(key);

  if (!paintingGenres) {
    console.debug("Fetching PaintingGenres.");

    paintingGenres = await Promise.all(
      genresData.map(async (genre) => {
        const paintings = await fetchObjFromJSON(
          `${paintingGenresURL}/${genre.genreId}`
        );
        return { Genre: genre, Paintings: paintings };
      })
    );

    localStorage.setItem(key, JSON.stringify(paintingGenres));
  }

  return paintingGenres;
}

function sortData(data) {
  for (const dataType in data) {
    if (dataType in dataSort) {
      data[dataType].sort(dataSort[dataType]);
    }
  }
}

export default App;
