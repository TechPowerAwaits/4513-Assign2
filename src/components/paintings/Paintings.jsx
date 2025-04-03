import { use, useState } from "react";
import { DataContext } from "../../contexts/Data";
import { CurrentPaintingsContext } from "../../contexts/Painting";
import H from "../H";
import PaintingList from "./PaintingList";
import PaintingFilter from "./PaintingFilter";

function Paintings() {
  const { paintings: paintingsData } = use(DataContext);
  const filteredPaintingsState = useState(paintingsData);

  return (
    <CurrentPaintingsContext.Provider value={filteredPaintingsState}>
      <article className="h-full">
        <header className="bg-tyrian-purple text-ut-orange border-y border-mimi-pink">
          <H.L2>Paintings</H.L2>
        </header>
        <section className="flex h-full">
          <PaintingFilter />
          <PaintingList paintingsData={filteredPaintingsState[0]} />
        </section>
      </article>
    </CurrentPaintingsContext.Provider>
  );
}

export default Paintings;
