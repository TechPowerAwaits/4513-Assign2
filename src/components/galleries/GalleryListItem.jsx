import { use } from "react";
import { SelectedGalleryContext } from "../../contexts/Gallery";

function GalleryListItem({ galleryData }) {
  const [, setSelectedGallery] = use(SelectedGalleryContext);

  return (
    <li>
      <button
        className="hover:scale-105 cursor-pointer"
        onClick={() => setSelectedGallery(galleryData)}
      >
        {galleryData.galleryName}
      </button>
    </li>
  );
}

export default GalleryListItem;
