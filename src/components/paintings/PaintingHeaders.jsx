import SortableHeader from "../SortableHeader";

function PaintingHeaders({ permittedCols, setAscending }) {
  return (
    <>
      {permittedCols.includes("thumbnail") && <li></li>}
      {permittedCols.includes("artist") && (
        <li className="col-span-2">
          <SortableHeader
            sortId="artistName"
            text="Artist"
            setAscending={setAscending}
          />
        </li>
      )}
      {permittedCols.includes("title") && (
        <li>
          <SortableHeader
            sortId="title"
            text="Title"
            setAscending={setAscending}
          />
        </li>
      )}
      {permittedCols.includes("year") && (
        <li>
          <SortableHeader
            sortId="year"
            text="Year"
            setAscending={setAscending}
          />
        </li>
      )}
      {permittedCols.includes("gallery") && (
        <li>
          <SortableHeader
            sortId="gallery"
            text="Gallery"
            setAscending={setAscending}
          />
        </li>
      )}
      {permittedCols.includes("medium") && (
        <li className="underline">Medium</li>
      )}
      {permittedCols.includes("dimensions") && (
        <li className="underline">Dimensions</li>
      )}
    </>
  );
}

export default PaintingHeaders;
