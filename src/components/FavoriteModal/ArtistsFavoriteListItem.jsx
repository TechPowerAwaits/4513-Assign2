import { use } from "react";
import { SelectedArtistContext } from "../../contexts/Artist";

function PaintingsFavoriteListItem({ data }) {
  const [, setSelectedArtist] = use(SelectedArtistContext);
  const artistName = `${data.firstName} ${data.lastName}`.trim();

  return (
    <li>
      <button
        className="active:bg-caribbean-current"
        onClick={() => setSelectedArtist(data)}
      >
        {artistName}
      </button>
    </li>
  );
}

export default PaintingsFavoriteListItem;
