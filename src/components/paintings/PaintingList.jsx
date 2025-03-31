import PaintingListItem from "./PaintingListItem";

function PaintingList({ paintingsData }) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th colSpan={2}>Artist</th>
          <th>Title</th>
          <th>Year</th>
        </tr>
        <tr>
          <th></th>
          <th>FName</th>
          <th>LName</th>
        </tr>
      </thead>
      <tbody>
        {paintingsData.map((painting) => (
          <PaintingListItem painting={painting} key={painting.paintingId} />
        ))}
      </tbody>
    </table>
  );
}

export default PaintingList;
