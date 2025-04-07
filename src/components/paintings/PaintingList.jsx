/*
 * Purpose: Lists all paintings sorted initially by the given defaultSortCol.
 *
 * Details: PaintingListCompact provides the following column format:
 *   thumbnail, title, year
 * PaintingList provides the following column format:
 *   thumbnail, artist, title, year
 * PaintingListFull provides the following column format:
 *   thumbnail, artist, title, year, gallery, medium, dimensions
 *
 * All columns that are defined in a particular format can be used as the
 * defaultSortCol with the exception of `medium` and `dimensions`.
 */

import { use, useState } from "react";
import PaintingListItem from "./PaintingListItem";
import { CurrentSortContext } from "../../contexts/Sort";
import { CurrentPaintingsContext } from "../../contexts/Painting";
import H from "../H";
import { dataSort, sortFuncRunner } from "../../sortHandler";
import PaintingHeaders from "./PaintingHeaders";

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
  gallery: ({ Galleries: g1 }, { Galleries: g2 }) => dataSort.galleries(g1, g2),
};

const compactColFormat = ["thumbnail", "title", "year"];
const regularColFormat = ["thumbnail", "artist", "title", "year"];
const fullColFormat = [
  "thumbnail",
  "artist",
  "title",
  "year",
  "gallery",
  "medium",
  "dimensions",
];

function PaintingList({ defaultSortCol = "title" }) {
  const [currentPaintings] = use(CurrentPaintingsContext);

  if (currentPaintings.length == 0) {
    return <PaintingListEmpty />;
  }

  return (
    <ul className="grid grid-cols-4 auto-rows-min gap-x-1">
      <PaintingListCommon
        permittedCols={regularColFormat}
        defaultSortCol={defaultSortCol}
      />
    </ul>
  );
}

function PaintingListCompact({ defaultSortCol = "title" }) {
  const [currentPaintings] = use(CurrentPaintingsContext);

  if (currentPaintings.length == 0) {
    return <PaintingListEmpty />;
  }

  return (
    <ul className="grid grid-cols-3 auto-rows-min gap-x-1">
      <PaintingListCommon
        permittedCols={compactColFormat}
        defaultSortCol={defaultSortCol}
      />
    </ul>
  );
}

function PaintingListFull({ defaultSortCol = "title" }) {
  const [currentPaintings] = use(CurrentPaintingsContext);

  if (currentPaintings.length == 0) {
    return <PaintingListEmpty />;
  }

  return (
    <ul className="grid grid-cols-7 auto-rows-min gap-x-1">
      <PaintingListCommon
        permittedCols={fullColFormat}
        defaultSortCol={defaultSortCol}
      />
    </ul>
  );
}

function PaintingListEmpty() {
  return <H.L3>No paintings found.</H.L3>;
}

function PaintingListCommon({ permittedCols, defaultSortCol }) {
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
      <PaintingHeaders
        permittedCols={permittedCols}
        setAscending={setIsAscending}
      />
      {sortedPaintings.map((painting) => (
        <PaintingListItem
          painting={painting}
          permittedCols={permittedCols}
          key={painting.paintingId}
        />
      ))}
    </CurrentSortContext.Provider>
  );
}

export default PaintingList;
export { PaintingListCompact, PaintingListFull };
