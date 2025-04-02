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
    </tr>
  );
}

export default PaintingListItem;
