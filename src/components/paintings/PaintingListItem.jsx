import NiceModal from "@ebay/nice-modal-react";
import ImageWithFallback from "../ImageWithFallback";

function PaintingListItem({ painting, permittedCols }) {
  const clickHandler = () =>
    NiceModal.show("painting-modal", { data: painting });
  const artistName =
    `${painting.Artists.firstName} ${painting.Artists.lastName}`.trim();

  return (
    <>
      {permittedCols.includes("thumbnail") && (
        <li className="cursor-pointer" onClick={clickHandler}>
          <ImageWithFallback
            className="max-w-6/10 max-h-6/10 mx-auto"
            src={`/paintings/square/${painting.imageFileName}.jpg`}
            alt={painting.title}
          />
        </li>
      )}
      {permittedCols.includes("artist") && (
        <li className="cursor-pointer" onClick={clickHandler}>
          {artistName}
        </li>
      )}
      {permittedCols.includes("title") && (
        <li className="cursor-pointer" onClick={clickHandler}>
          {painting.title}
        </li>
      )}
      {permittedCols.includes("year") && (
        <li className="cursor-pointer" onClick={clickHandler}>
          {painting.yearOfWork}
        </li>
      )}
      {permittedCols.includes("gallery") && (
        <li className="cursor-pointer" onClick={clickHandler}>
          {painting.Galleries.galleryName}
        </li>
      )}
      {permittedCols.includes("medium") && <li>{painting.medium}</li>}
      {permittedCols.includes("dimensions") && (
        <li className="cursor-pointer" onClick={clickHandler}>
          {painting.width} <span className="font-semibold">x</span>{" "}
          {painting.height}
        </li>
      )}
    </>
  );
}

export default PaintingListItem;
