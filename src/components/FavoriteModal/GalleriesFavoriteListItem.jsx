import { use } from "react";
import { SelectedGalleryContext } from "../../contexts/Gallery";

function GalleriesFavoriteListItem({ data }) {
  const [, setSelectedGallery] = use(SelectedGalleryContext);
  return (
    <li>
      <button
        className="active:bg-caribbean-current"
        onClick={() => setSelectedGallery(data)}
      >
        {data.galleryName}
      </button>
    </li>
  );
}

export default GalleriesFavoriteListItem;
