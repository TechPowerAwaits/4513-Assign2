import NiceModal from "@ebay/nice-modal-react";
import ImageWithFallback from "../ImageWithFallback";

function PaintingListItem({ painting, permittedCols }) {
  const clickHandler = () =>
    NiceModal.show("painting-modal", { data: painting });
  return (
    <>
      <li className="cursor-pointer" onClick={clickHandler}>
        {permittedCols.includes("thumbnail") && (
          <ImageWithFallback
            className="max-w-1/2 max-h-1/2"
            src={`/paintings/square/${painting.imageFileName}.jpg`}
            alt={painting.title}
          />
        )}
      </li>
      {permittedCols.includes("artist") ? (
        <>
          <li className="cursor-pointer" onClick={clickHandler}>
            {painting.Artists.firstName}
          </li>
          <li className="cursor-pointer" onClick={clickHandler}>
            {painting.Artists.lastName}
          </li>
        </>
      ) : (
        <>
          <li className="cursor-pointer" onClick={clickHandler}></li>
          <li className="cursor-pointer" onClick={clickHandler}></li>
        </>
      )}
      <li className="cursor-pointer" onClick={clickHandler}>
        {permittedCols.includes("title") && <p>{painting.title}</p>}
      </li>
      <li className="cursor-pointer" onClick={clickHandler}>
        {permittedCols.includes("year") && <p>{painting.yearOfWork}</p>}
      </li>
      <li className="cursor-pointer" onClick={clickHandler}>
        {permittedCols.includes("gallery") && (
          <p>painting.Galleries.galleryName</p>
        )}
      </li>
      <li className="cursor-pointer" onClick={clickHandler}>
        {permittedCols.includes("medium") && <p>{painting.medium}</p>}
      </li>
      <li className="cursor-pointer" onClick={clickHandler}>
        {permittedCols.includes("dimensions") && (
          <p>
            {painting.width} <span className="font-semibold">x</span>{" "}
            {painting.height}
          </p>
        )}
      </li>
    </>
  );
}

export default PaintingListItem;
