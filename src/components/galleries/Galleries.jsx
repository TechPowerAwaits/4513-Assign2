import { use } from "react";
import GalleryList from "./GalleryList";
import H from "../H";
import GalleryInfo from "./GalleryInfo";
import { useState } from "react";
import { SelectedGalleryContext } from "../../contexts/Gallery";
import PaintingList from "../paintings/PaintingList";
import { DataContext } from "../../contexts/Data";
import { CurrentPaintingsContext } from "../../contexts/Painting";

function Galleries() {
  const { paintings: paintingsData } = use(DataContext);
  const selectedGalleryState = useState(null);

  return (
    <SelectedGalleryContext.Provider value={selectedGalleryState}>
      <CurrentPaintingsContext.Provider
        value={paintingsData.filter(
          (painting) =>
            painting.Galleries.galleryId === selectedGalleryState[0].galleryId
        )}
      >
        <article className="h-full">
          <header className="bg-tyrian-purple text-ut-orange border-y border-mimi-pink">
            <H.L2>Galleries</H.L2>
          </header>
          <section className="flex h-full">
            <GalleryList />
            <GalleryInfo />
            {selectedGalleryState[0] && <PaintingList />}
          </section>
        </article>
      </CurrentPaintingsContext.Provider>
    </SelectedGalleryContext.Provider>
  );
}

export default Galleries;
