/*
 * Purpose: Provides a button-based component for managing the state of sorting
 * a list.
 */

import { use, useMemo, useState } from "react";
import { CurrentSortContext } from "../contexts/Sort";

/*
 * Purpose: Provides named values for the state of an arrow.
 */
const ARROW_ENUM = { UP: 0, DOWN: 1 };

/*
 * Purpose: Provides a togglable button for sorting by a given field.
 *
 * Purpose: The component requires the CurrentSortContext to be an array
 * containing the following:
 *
 * Idx:    Can Contain:
 * 0       Any value, but should be a string representing a column to sort by.
 * 1       A function to set the value within index 0.
 *
 * The setAscending prop will be passed true or false depending on the internal
 * state of the header when clicked on.
 *
 * The component contains some default styling. All props and classes are
 * passed to the underlying element.
 */
function SortableHeader({
  sortId,
  text,
  setAscending,
  className: passedClasses = "",
  ...props
}) {
  const [sortCol, setSortCol] = use(CurrentSortContext);
  const [arrowDir, setArrowDir] = useState(ARROW_ENUM.DOWN);

  /*
   * Purpose: Removes the arrow indicating sorting direction from the header if
   * sorting isn't occurring as a result of the header.
   */
  useMemo(() => {
    if (sortCol != sortId) {
      setArrowDir(null);
    }
  }, [sortCol, sortId]);

  let arrow = <>&nbsp;&nbsp;</>;

  switch (arrowDir) {
    case ARROW_ENUM.UP:
      arrow = <>&uArr;</>;
      break;
    case ARROW_ENUM.DOWN:
      arrow = <>&dArr;</>;
      break;
  }

  const toggleSortState = () => {
    switch (arrowDir) {
      case ARROW_ENUM.DOWN:
        setArrowDir(ARROW_ENUM.UP);
        setAscending(false);
        break;

      case null:
      case ARROW_ENUM.UP:
        setArrowDir(ARROW_ENUM.DOWN);
        setAscending(true);
    }

    setSortCol(sortId);
  };

  return (
    <button
      className={`cursor-pointer ${passedClasses}`}
      onClick={() => toggleSortState()}
      {...props}
    >
      <span className="underline decoration-dotted">{text}</span>
      <span>{arrow}</span>
    </button>
  );
}

export default SortableHeader;
