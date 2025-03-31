import GalleryList from "./GalleryList";
import H from "../H";
import GalleryInfo from "./GalleryInfo";
import { useState } from "react";
import { SelectedGalleryContext } from "../../contexts/Gallery";

function Galleries() {
  const selectedGalleryState = useState(null);

  return (
    <SelectedGalleryContext.Provider value={selectedGalleryState}>
      <article className="h-full">
        <header className="bg-tyrian-purple text-ut-orange border-y border-mimi-pink">
          <H.L2>Galleries</H.L2>
        </header>
        <section className="flex h-full">
          <GalleryList />
          <GalleryInfo />
        </section>
      </article>
    </SelectedGalleryContext.Provider>
  );
}

export default Galleries;
