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
  const filteredPaintings = selectedGalleryState[0]
    ? paintingsData.filter(
        (painting) =>
          painting.Galleries.galleryId === selectedGalleryState[0].galleryId
      )
    : [];

  return (
    <SelectedGalleryContext.Provider value={selectedGalleryState}>
      <CurrentPaintingsContext.Provider value={[filteredPaintings]}>
        <article className="h-full">
          <header className="bg-tyrian-purple text-ut-orange border-y border-mimi-pink">
            <H.L2>Galleries</H.L2>
          </header>
          <section className="flex h-full">
            <GalleryList />
            <GalleryInfo />
            {selectedGalleryState[0] && (
              <PaintingList
                permittedCols={["thumbnail", "artist", "title", "year"]}
              />
            )}
          </section>
        </article>
      </CurrentPaintingsContext.Provider>
    </SelectedGalleryContext.Provider>
  );
}

export default Galleries;
