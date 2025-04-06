import NiceModal from "@ebay/nice-modal-react";
import ImageWithFallback from "../ImageWithFallback";

function PaintingListItem({ painting, permittedCols }) {
  return (
    <tr onClick={() => NiceModal.show("painting-modal", { data: painting })}>
      {permittedCols.includes("thumbnail") && (
        <td>
          <ImageWithFallback
            src={`https://res.cloudinary.com/funwebdev/image/upload/w_200/art/paintings/square/${painting.imageFileName}.jpg`}
            alt={painting.title}
          />
        </td>
      )}
      {permittedCols.includes("artist") && (
        <>
          <td>{painting.Artists.firstName}</td>
          <td>{painting.Artists.lastName}</td>
        </>
      )}
      {permittedCols.includes("title") && <td>{painting.title}</td>}
      {permittedCols.includes("year") && <td>{painting.yearOfWork}</td>}
      {permittedCols.includes("gallery") && (
        <td>{painting.Galleries.galleryName}</td>
      )}
      {permittedCols.includes("medium") && <td>{painting.medium}</td>}
      {permittedCols.includes("dimensions") && (
        <td>
          {painting.width} <span className="font-semibold">x</span>{" "}
          {painting.height}
        </td>
      )}
    </tr>
  );
}

export default PaintingListItem;
