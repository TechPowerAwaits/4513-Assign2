function GalleryListItem({ galleryData }) {
  return (
    <li>
      <button className="hover:scale-105">{galleryData.galleryName}</button>
    </li>
  );
}

export default GalleryListItem;
