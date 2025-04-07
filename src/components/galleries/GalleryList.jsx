import { use } from "react";
import { DataContext } from "../../contexts/Data";
import GalleryListItem from "./GalleryListItem";

function GalleryList({ className: passedClasses = "" }) {
  const { galleries: galleriesData } = use(DataContext);

  return (
    <ul className={`overflow-scroll h-full ${passedClasses}`}>
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
