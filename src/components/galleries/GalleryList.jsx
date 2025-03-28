import { use } from "react";
import { DataContext } from "../../contexts/Data";
import GalleryListItem from "./GalleryListItem";

function GalleryList() {
  const { galleries: galleriesData } = use(DataContext);

  return (
    <ul>
      {galleriesData.map((galleryData) => (
        <GalleryListItem
          galleryData={galleryData}
          key={galleryData.galleryId}
        />
      ))}
    </ul>
  );
}

export default GalleryList;
