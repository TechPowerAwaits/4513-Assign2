/*
 * Purpose: Provides a component that renders a sortable list of paintings.
 */

import { use, useState } from "react";
import PaintingListItem from "./PaintingListItem";
import { CurrentSortContext } from "../../contexts/Sort";
import SortableHeader from "../SortableHeader";
import { CurrentPaintingsContext } from "../../contexts/Painting";
import H from "../H";

/*
 * Purpose: Provides a mapping between a given sort id and a sorting function.
 */
const sortIdToFunc = {
  title: (p1, p2) => (p2.title > p1.title ? -1000 : 1000),
  year: (p1, p2) => p1.yearOfWork - p2.yearOfWork,
  artistName: ({ Artists: a1 }, { Artists: a2 }) =>
    `${a2.firstName} ${a2.lastName}`.trim() >
    `${a1.firstName} ${a1.lastName}`.trim()
      ? -1000
      : 1000,
  artistFName: ({ Artists: a1 }, { Artists: a2 }) =>
    a2.firstName > a1.firstName ? -1000 : 1000,
  artistLName: ({ Artists: a1 }, { Artists: a2 }) =>
    a2.lastName > a1.lastName ? -1000 : 1000,
};

/*
 * Purpose: Lists all paintings sorted initially by the given defaultSortCol.
 *
 * Details: The component requires the CurrentPaintingsContext to be an array
 * with the first element of the array containing an array of paintings data.
 * If the paintings data array is empty, a message will be displayed instead of
 * rendering a list of paintings.
 *
 * The following defaultSortCol values are supported:
 * - title: for sorting by a painting's title.
 * - year: for sorting by when a painting was made.
 * - artistName: for sorting by an artist's full name.
 * - artistFName: for sorting only by an artist's first name.
 * - artistLName: for sorting only by an artist's last name.
 *
 * The sorting is initially done is ascending order.
 */
function PaintingList({ defaultSortCol = "title" }) {
  const [currentPaintings] = use(CurrentPaintingsContext);
  const sortColState = useState(defaultSortCol);
  const [isAscending, setIsAscending] = useState(true);

  const sortedPaintings = sortFuncRunner(
    currentPaintings,
    sortIdToFunc[sortColState[0]],
    isAscending
  );

  if (currentPaintings.length == 0) {
    return <H.L3>No paintings found.</H.L3>;
  }

  return (
    <CurrentSortContext.Provider value={sortColState}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th colSpan={2}>
              <SortableHeader
                sortId="artistName"
                text="Artist"
                setAscending={setIsAscending}
              />
            </th>
            <th>
              <SortableHeader
                sortId="title"
                text="Title"
                setAscending={setIsAscending}
              />
            </th>
            <th>
              <SortableHeader
                sortId="year"
                text="Year"
                setAscending={setIsAscending}
              />
            </th>
          </tr>
          <tr>
            <th></th>
            <th>
              <SortableHeader
                sortId="artistFName"
                text="FName"
                setAscending={setIsAscending}
              />
            </th>
            <th>
              <SortableHeader
                sortId="artistLName"
                text="LName"
                setAscending={setIsAscending}
              />
            </th>
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

/*
 * Purpose: Runs the given sortFunc against a data array.
 */
function sortFuncRunner(data, sortFunc, ascending = true) {
  return data.toSorted((d1, d2) => sortFunc(d1, d2) * (ascending ? 1 : -1));
}

export default PaintingList;
