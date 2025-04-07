import { use } from "react";
import { DataContext } from "../../contexts/Data";
import ArtistListItem from "./ArtistListItem";

function ArtistList({ className: passedClasses = "" }) {
  const { artists: artistsData } = use(DataContext);

  return (
    <ul className={passedClasses}>
      {artistsData.map((artistData) => (
        <ArtistListItem artistData={artistData} key={artistData.artistId} />
      ))}
    </ul>
  );
}

export default ArtistList;
