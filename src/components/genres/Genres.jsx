import { use } from "react";
import GenreList from "./GenreList";
import H from "../H";
import GenreInfo from "./GenreInfo";
import { useState } from "react";
import { SelectedGenreContext } from "../../contexts/Genre";
import PaintingList from "../paintings/PaintingList";
import { DataContext } from "../../contexts/Data";
import { CurrentPaintingsContext } from "../../contexts/Painting";

function Genres({ className: passedClasses = "" }) {
  const { paintingGenres: paintingGenresData } = use(DataContext);
  const selectedGenreState = useState(null);

  const filteredPaintings = selectedGenreState[0]
    ? paintingGenresData.find(
        (paintingGenre) =>
          paintingGenre.Genre.genreId === selectedGenreState[0].genreId
      ).Paintings
    : [];

  return (
    <SelectedGenreContext.Provider value={selectedGenreState}>
      <CurrentPaintingsContext.Provider value={[filteredPaintings]}>
        <article className={passedClasses}>
          <header className="bg-tyrian-purple text-ut-orange border-y border-mimi-pink">
            <H.L2>Genres</H.L2>
          </header>
          <section className="flex">
            <GenreList className="px-3 overflow-y-scroll max-w-fit max-h-96" />
            <div className="flex flex-col">
              <GenreInfo />
              {selectedGenreState[0] && (
                <PaintingList className="overflow-y-scroll max-h-96" />
              )}
            </div>
          </section>
        </article>
      </CurrentPaintingsContext.Provider>
    </SelectedGenreContext.Provider>
  );
}

export default Genres;
