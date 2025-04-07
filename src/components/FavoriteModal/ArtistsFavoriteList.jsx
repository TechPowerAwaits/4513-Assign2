import { use, useState } from "react";
import { FavoriteContext } from "../../contexts/Favorite";
import H from "../H";
import Button from "../Button";
import { toast } from "react-fox-toast";
import { SelectedArtistContext } from "../../contexts/Artist";
import ArtistsFavoriteListItem from "./ArtistsFavoriteListItem";

function ArtistsFavoriteList({ ...props }) {
  const [favorite, refreshFavorites] = use(FavoriteContext);
  const [selectedArtist, setSelectedArtist] = useState(null);

  return (
    <SelectedArtistContext value={[selectedArtist, setSelectedArtist]}>
      <section {...props}>
        <H.L3>Artists</H.L3>
        <ul>
          {favorite.artists.map((artist) => (
            <ArtistsFavoriteListItem data={artist} key={artist.artistId} />
          ))}
        </ul>
        <Button.Terminate
          className="mx-auto"
          disabled={selectedArtist == null}
          onClick={() => {
            favorite.removePainting(selectedArtist);
            toast.success("The selected artist was successfully removed.");
            setSelectedArtist(null);
            refreshFavorites();
          }}
        >
          Remove
        </Button.Terminate>
      </section>
    </SelectedArtistContext>
  );
}

export default ArtistsFavoriteList;
