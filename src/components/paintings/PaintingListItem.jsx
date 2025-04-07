import NiceModal from "@ebay/nice-modal-react";
import ImageWithFallback from "../ImageWithFallback";
import PaintingModal from "./modal/PaintingModal";
import useToggle from "../../hooks/useToggle";

function PaintingListItem({ painting, permittedCols }) {
  const clickHandler = () => togglePaintingModal();
  const artistName =
    `${painting.Artists.firstName} ${painting.Artists.lastName}`.trim();
  const [paintingModalOpen, togglePaintingModal] = useToggle();

  return (
    <>
      <PaintingModal
        isOpen={paintingModalOpen}
        toggleOpen={togglePaintingModal}
        data={painting}
      />
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
