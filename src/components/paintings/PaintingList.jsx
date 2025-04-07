/*
 * Purpose: Provides a component that renders a sortable list of paintings.
 */

import { use, useState } from "react";
import PaintingListItem from "./PaintingListItem";
import { CurrentSortContext } from "../../contexts/Sort";
import SortableHeader from "../SortableHeader";
import { CurrentPaintingsContext } from "../../contexts/Painting";
import H from "../H";
import { dataSort, sortFuncRunner } from "../../sortHandler";

/*
 * Purpose: Provides a mapping between a given sort id and a sorting function.
 */
const sortIdToFunc = {
  title: dataSort.paintings,
  year: (p1, p2) => p1.yearOfWork - p2.yearOfWork,
  artistName: ({ Artists: a1 }, { Artists: a2 }) =>
    `${a2.firstName} ${a2.lastName}`.trim() >
    `${a1.firstName} ${a1.lastName}`.trim()
      ? -1000
      : 1000,
  artistFName: ({ Artists: a1 }, { Artists: a2 }) =>
    a2.firstName > a1.firstName ? -1000 : 1000,
  artistLName: ({ Artists: a1 }, { Artists: a2 }) => dataSort.artists(a1, a2),
  gallery: ({ Galleries: g1 }, { Galleries: g2 }) => dataSort.galleries(g1, g2),
};

/*
 * Purpose: Lists all paintings sorted initially by the given defaultSortCol.
 *
 * Details: The component requires the CurrentPaintingsContext to be an array
 * with the first element of the array containing an array of paintings data.
 * If the paintings data array is empty, a message will be displayed instead of
 * rendering a list of paintings.
 *
 * The ordering of columns in the list is as follows:
 * - thumbnail
 * - title
 * - year
 * - artist
 * - gallery
 * - medium
 * - dimensions
 *
 * The ordering is fixed and cannot be changed. However, the permittedCols
 * array can be passed in props. If a given column's name is not listed, it
 * will not be rendered.
 *
 * The following defaultSortCol values are supported:
 * - title: for sorting by a painting's title.
 * - year: for sorting by when a painting was made.
 * - artistName: for sorting by an artist's full name.
 * - artistFName: for sorting only by an artist's first name.
 * - artistLName: for sorting only by an artist's last name.
 * - gallery: for sorting by the name of the gallery where the artwork belongs.
 *
 * The sorting is initially done is ascending order. If no defaultSortCol is
 * provided, everything is sorted by title.
 */
function PaintingList({
  permittedCols = [
    "thumbnail",
    "title",
    "year",
    "artist",
    "gallery",
    "medium",
    "dimensions",
  ],
  defaultSortCol = "title",
}) {
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
      <ul className="grid auto-rows-min grid-cols-7 gap-x-1">
        <li></li>
        <li className="col-span-2">
          {permittedCols.includes("artist") && (
            <SortableHeader
              sortId="artistName"
              text="Artist"
              setAscending={setIsAscending}
            />
          )}
        </li>
        <li>
          {permittedCols.includes("title") && (
            <SortableHeader
              sortId="title"
              text="Title"
              setAscending={setIsAscending}
            />
          )}
        </li>
        <li>
          {permittedCols.includes("year") && (
            <SortableHeader
              sortId="year"
              text="Year"
              setAscending={setIsAscending}
            />
          )}
        </li>
        <li>
          {permittedCols.includes("gallery") && (
            <SortableHeader
              sortId="gallery"
              text="Gallery"
              setAscending={setIsAscending}
            />
          )}
        </li>
        <li className="underline">
          {permittedCols.includes("medium") && "Medium"}
        </li>
        <li className="underline">
          {permittedCols.includes("dimensions") && "Dimensions"}
        </li>
        {permittedCols.includes("artist") && (
          <>
            <li></li>
            <li>
              <SortableHeader
                sortId="artistFName"
                text="FName"
                setAscending={setIsAscending}
              />
            </li>
            <li>
              <SortableHeader
                sortId="artistLName"
                text="LName"
                setAscending={setIsAscending}
              />
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </>
        )}
        {sortedPaintings.map((painting) => (
          <PaintingListItem
            painting={painting}
            permittedCols={permittedCols}
            key={painting.paintingId}
          />
        ))}
      </ul>
    </CurrentSortContext.Provider>
  );
}

export default PaintingList;
