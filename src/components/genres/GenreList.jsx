import { use } from "react";
import { DataContext } from "../../contexts/Data";
import GenreListItem from "./GenreListItem";

function GenreList({ className: passedClasses = "" }) {
  const { genres: genresData } = use(DataContext);

  return (
    <ul className={`space-y-2 ${passedClasses}`}>
      {genresData.map((genreData) => (
        <GenreListItem genreData={genreData} key={genreData.genreId} />
      ))}
    </ul>
  );
}

export default GenreList;
