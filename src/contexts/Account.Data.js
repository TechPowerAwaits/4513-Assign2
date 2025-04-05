/*
 * Purpose: Acquires all data associated with an account.
 */

import DataProvider from "../DataProvider";
import { fetchObjFromJSON } from "../fetchHandler";
import { dataSort } from "../sortHandler";

const dataProviders = [
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
];

async function accountDataRetriever() {
  console.debug("Entered data hook.");
  const newData = await DataProvider.acquire(dataProviders);

  const paintingGenres = await fetchPaintingGenres(newData.genres);
  newData.paintingGenres = paintingGenres;
  sortData(newData);

  return newData;
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

export default accountDataRetriever;
