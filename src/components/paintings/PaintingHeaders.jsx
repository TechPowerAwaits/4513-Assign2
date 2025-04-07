import SortableHeader from "../SortableHeader";

function PaintingHeaders({ permittedCols, setAscending }) {
  return (
    <thead>
      <tr>
        {permittedCols.includes("thumbnail") && <th></th>}
        {permittedCols.includes("artist") && (
          <th colSpan={2}>
            <SortableHeader
              sortId="artistName"
              text="Artist"
              setAscending={setAscending}
            />
          </th>
        )}
        {permittedCols.includes("title") && (
          <th>
            <SortableHeader
              sortId="title"
              text="Title"
              setAscending={setAscending}
            />
          </th>
        )}
        {permittedCols.includes("year") && (
          <th>
            <SortableHeader
              sortId="year"
              text="Year"
              setAscending={setAscending}
            />
          </th>
        )}
        {permittedCols.includes("gallery") && (
          <th>
            <SortableHeader
              sortId="gallery"
              text="Gallery"
              setAscending={setAscending}
            />
          </th>
        )}
        {permittedCols.includes("medium") && (
          <th className="underline">Medium</th>
        )}
        {permittedCols.includes("dimensions") && (
          <th className="underline">Dimensions</th>
        )}
      </tr>
      {permittedCols.includes("artist") && (
        <tr>
          <th></th>
          <th>
            <SortableHeader
              sortId="artistFName"
              text="FName"
              setAscending={setAscending}
            />
          </th>
          <th>
            <SortableHeader
              sortId="artistLName"
              text="LName"
              setAscending={setAscending}
            />
          </th>
        </tr>
      )}
    </thead>
  );
}

export default PaintingHeaders;
