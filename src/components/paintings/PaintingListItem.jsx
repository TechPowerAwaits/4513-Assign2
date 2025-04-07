import NiceModal from "@ebay/nice-modal-react";
import ImageWithFallback from "../ImageWithFallback";

function PaintingListItem({ painting, permittedCols }) {
  const clickHandler = () =>
    NiceModal.show("painting-modal", { data: painting });
  return (
    <>
      {permittedCols.includes("thumbnail") && (
        <li className="cursor-pointer" onClick={clickHandler}>
          <ImageWithFallback
            className="scale-25"
            src={`/paintings/square/${painting.imageFileName}.jpg`}
            alt={painting.title}
          />
        </li>
      )}
      {permittedCols.includes("artist") && (
        <>
          <li className="cursor-pointer" onClick={clickHandler}>
            {painting.Artists.firstName}
          </li>
          <li className="cursor-pointer" onClick={clickHandler}>
            {painting.Artists.lastName}
          </li>
        </>
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
