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

  const paintingGenres = await fetchPaintingGenres(
    newData.genres,
    newData.paintings
  );
  newData.paintingGenres = paintingGenres;
  sortData(newData);

  return newData;
}

/*
 * Purpose: Fetching all the paintings that are associated with a genre.
 *
 * Details: The painting details that are fetched are normally minimalistic. It
 * only contains the year of work, title, and id. So, the retrieved data has to
 * be mapped to previously-processed Paintings data. The mapped PaintingGenres
 * data is not stored as it ensures that the data being handled from cache and
 * the data newly fetched is the same.
 *
 * Returns: An array of Genre and Paintings.
 */
async function fetchPaintingGenres(genresData, paintingsData) {
  const paintingGenresURL =
    import.meta.env.VITE_PAINTINGS_GENRES_URL ||
    "https://art-api-kafs.onrender.com/api/paintings/genre";
  const key = "paintingGenres";
  const paintingGenresJSON = localStorage.getItem(key);
  let paintingGenres = null;

  if (!paintingGenresJSON) {
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
  } else {
    paintingGenres = JSON.parse(paintingGenresJSON);
  }

  paintingGenres = await Promise.all(
    paintingGenres.map(async (paintingGenre) => {
      const handledPaintings = await Promise.all(
        paintingGenre.Paintings.map(async (simplePainting) =>
          paintingsData.find(
            (painting) => painting.paintingId === simplePainting.paintingId
          )
        )
      );

      return { ...paintingGenre, Paintings: handledPaintings };
    })
  );

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
