import { use, useState } from "react";
import { DataContext } from "../../contexts/Data";
import { CurrentPaintingsContext } from "../../contexts/Painting";
import H from "../H";
import { PaintingListFull } from "./PaintingList";
import PaintingFilterMenu from "./PaintingFilterMenu";
import useToggle from "../../hooks/useToggle";
import Button from "../Button";

function Paintings({ className: passedClasses = "" }) {
  const [filterOpen, toggleFilterOpen] = useToggle(true);
  const { paintings: paintingsData } = use(DataContext);
  const filteredPaintingsState = useState(paintingsData);

  return (
    <CurrentPaintingsContext.Provider value={filteredPaintingsState}>
      <article className={passedClasses}>
        <header className="bg-tyrian-purple text-ut-orange border-y border-mimi-pink">
          <H.L2>Paintings</H.L2>
        </header>
        <PaintingFilterMenu
          isOpen={filterOpen}
          onClose={() => toggleFilterOpen()}
        />
        <section className="flex h-full mx-3 gap-x-1">
          <Button.Primary
            className="mb-auto sticky top-0"
            type="button"
            onClick={() => toggleFilterOpen()}
          >
            Filter
          </Button.Primary>
          <PaintingListFull defaultSortCol="year" />
        </section>
      </article>
    </CurrentPaintingsContext.Provider>
  );
}

export default Paintings;
