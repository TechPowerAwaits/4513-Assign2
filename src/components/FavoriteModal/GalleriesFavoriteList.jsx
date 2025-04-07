import { use, useState } from "react";
import { FavoriteContext } from "../../contexts/Favorite";
import H from "../H";
import Button from "../Button";
import { toast } from "react-fox-toast";
import { SelectedGalleryContext } from "../../contexts/Gallery";
import GalleriesFavoriteListItem from "./GalleriesFavoriteListItem";

function GalleriesFavoriteList({ ...props }) {
  const [favorite, refreshFavorites] = use(FavoriteContext);
  const [selectedGallery, setSelectedGallery] = useState(null);

  return (
    <SelectedGalleryContext value={[selectedGallery, setSelectedGallery]}>
      <section {...props}>
        <H.L3>Galleries</H.L3>
        <ul className="h-72 overflow-y-scroll min-w-fit">
          {favorite.galleries.map((gallery) => (
            <GalleriesFavoriteListItem data={gallery} key={gallery.galleryId} />
          ))}
        </ul>
        <Button.Terminate
          className="mx-auto"
          disabled={selectedGallery == null}
          onClick={() => {
            favorite.removeGallery(selectedGallery);
            toast.success("The selected gallery was successfully removed.");
            setSelectedGallery(null);
            refreshFavorites();
          }}
        >
          Remove
        </Button.Terminate>
      </section>
    </SelectedGalleryContext>
  );
}

export default GalleriesFavoriteList;
