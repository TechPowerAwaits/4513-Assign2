import { use } from "react";
import { SelectedArtistContext } from "../../contexts/Artist";
import ImageWithFallback from "../ImageWithFallback";

function ArtistListItem({ artistData }) {
  const [, setSelectedArtist] = use(SelectedArtistContext);
  const artistName = `${artistData.firstName} ${artistData.lastName}`.trim();

  return (
    <li>
      <button
        className="hover:scale-105 cursor-pointer flex items-center-safe"
        onClick={() => setSelectedArtist(artistData)}
      >
        <ImageWithFallback
          className="max-w-1/8 max-h-1/8"
          src={`/artists/square/${artistData.artistId}.jpg`}
          alt={artistName}
        />
        <p>{artistName}</p>
      </button>
    </li>
  );
}

export default ArtistListItem;
