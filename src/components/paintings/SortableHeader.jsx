import { use, useMemo, useState } from "react";
import { CurrentSortContext } from "../../contexts/Sort";

const ARROW_ENUM = { UP: 0, DOWN: 1 };

function SortableHeader({ sortId, text, setAscending, ...props }) {
  const [sortCol, setSortCol] = use(CurrentSortContext);
  const [arrowDir, setArrowDir] = useState(ARROW_ENUM.DOWN);

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

  return (
    <th
      {...props}
      onClick={() => {
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
      }}
    >
      {text}
      {arrow}
    </th>
  );
}

export default SortableHeader;
