import { use } from "react";
import { SelectedGenreContext } from "../../contexts/Genre";
import ImageWithFallback from "../ImageWithFallback";

function GenreListItem({ genreData }) {
  const [, setSelectedGenre] = use(SelectedGenreContext);

  return (
    <li>
      <button
        className="hover:scale-105 cursor-pointer flex items-center-safe"
        onClick={() => setSelectedGenre(genreData)}
      >
        <ImageWithFallback
          className="max-w-1/8 max-h-1/8"
          src={`/genres/${genreData.genreId}.jpg`}
          alt={genreData.genreName}
        />
        <p>{genreData.genreName}</p>
      </button>
    </li>
  );
}

export default GenreListItem;
