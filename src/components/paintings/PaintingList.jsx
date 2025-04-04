import { use, useState } from "react";
import PaintingListItem from "./PaintingListItem";
import { CurrentSortContext } from "../../contexts/Sort";
import SortableHeader from "./SortableHeader";
import { CurrentPaintingsContext } from "../../contexts/Painting";

const sortIdToFunc = {
  title: (p1, p2) => (p2.title > p1.title ? -1000 : 1000),
  year: (p1, p2) => p1.yearOfWork - p2.yearOfWork,
  artistFName: ({ Artists: a1 }, { Artists: a2 }) =>
    a2.firstName > a1.firstName ? -1000 : 1000,
  artistLName: ({ Artists: a1 }, { Artists: a2 }) =>
    a2.lastName > a1.lastName ? -1000 : 1000,
};

function PaintingList({ defaultSortCol = "title" }) {
  const [currentPaintings] = use(CurrentPaintingsContext);
  const sortColState = useState(defaultSortCol);
  const [isAscending, setIsAscending] = useState(true);

  const sortedPaintings = sortFuncRunner(
    currentPaintings,
    sortIdToFunc[sortColState[0]],
    isAscending
  );

  return (
    <CurrentSortContext.Provider value={sortColState}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th colSpan={2}>Artist</th>
            <SortableHeader
              sortId="title"
              text="Title"
              setAscending={setIsAscending}
            />
            <SortableHeader
              sortId="year"
              text="Year"
              setAscending={setIsAscending}
            />
          </tr>
          <tr>
            <th></th>
            <SortableHeader
              sortId="artistFName"
              text="FName"
              setAscending={setIsAscending}
            />
            <SortableHeader
              sortId="artistLName"
              text="LName"
              setAscending={setIsAscending}
            />
          </tr>
        </thead>
        <tbody>
          {sortedPaintings.map((painting) => (
            <PaintingListItem painting={painting} key={painting.paintingId} />
          ))}
        </tbody>
      </table>
    </CurrentSortContext.Provider>
  );
}

function sortFuncRunner(data, sortFunc, ascending = true) {
  return data.toSorted((d1, d2) => sortFunc(d1, d2) * (ascending ? 1 : -1));
}

export default PaintingList;
