import { use, useState } from "react";
import { DataContext } from "../../contexts/Data";
import { CurrentPaintingsContext } from "../../contexts/Painting";
import H from "../H";
import PaintingList from "./PaintingList";
import PaintingFilter from "./PaintingFilter";
import PaintingFilterMenu from "./PaintingFilterMenu";
import useToggle from "../../hooks/useToggle";
import Button from "../Button";

function Paintings() {
  const [filterOpen, toggleFilterOpen] = useToggle(true);
  const { paintings: paintingsData } = use(DataContext);
  const filteredPaintingsState = useState(paintingsData);

  return (
    <CurrentPaintingsContext.Provider value={filteredPaintingsState}>
      <article className="h-full">
        <header className="bg-tyrian-purple text-ut-orange border-y border-mimi-pink">
          <H.L2>Paintings</H.L2>
        </header>
        <PaintingFilterMenu
          isOpen={filterOpen}
          onClose={() => toggleFilterOpen()}
        />
        <section className="flex h-full">
          <Button.Primary
            className="mb-auto"
            type="button"
            onClick={() => toggleFilterOpen()}
          >
            Filter
          </Button.Primary>
          <PaintingList defaultSortCol="year" />
        </section>
      </article>
    </CurrentPaintingsContext.Provider>
  );
}

export default Paintings;
