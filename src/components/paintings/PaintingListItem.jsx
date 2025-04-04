import ImageWithFallback from "../ImageWithFallback";

function PaintingListItem({ painting }) {
  return (
    <tr>
      <td>
        <ImageWithFallback
          src={`https://res.cloudinary.com/funwebdev/image/upload/w_200/art/paintings/square/${painting.imageFileName}.jpg`}
          alt={painting.title}
        />
      </td>
      <td>{painting.Artists.firstName}</td>
      <td>{painting.Artists.lastName}</td>
      <td>{painting.title}</td>
      <td>{painting.yearOfWork}</td>
      <td>{painting.Galleries.galleryName}</td>
      <td>{painting.medium}</td>
      <td>
        {painting.width} <span className="font-semibold">x</span>{" "}
        {painting.height}
      </td>
    </tr>
  );
}

export default PaintingListItem;
