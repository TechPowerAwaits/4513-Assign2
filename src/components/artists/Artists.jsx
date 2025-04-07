import { use } from "react";
import ArtistList from "./ArtistList";
import H from "../H";
import ArtistInfo from "./ArtistInfo";
import { useState } from "react";
import { SelectedArtistContext } from "../../contexts/Artist";
import { PaintingListCompact } from "../paintings/PaintingList";
import { DataContext } from "../../contexts/Data";
import { CurrentPaintingsContext } from "../../contexts/Painting";

function Artists({ className: passedClasses = "" }) {
  const { paintings: paintingsData } = use(DataContext);
  const selectedArtistState = useState(null);
  const filteredPaintings = selectedArtistState[0]
    ? paintingsData.filter(
        (painting) =>
          painting.Artists.artistId === selectedArtistState[0].artistId
      )
    : [];

  return (
    <SelectedArtistContext.Provider value={selectedArtistState}>
      <CurrentPaintingsContext.Provider value={[filteredPaintings]}>
        <article className={passedClasses}>
          <header className="bg-tyrian-purple text-ut-orange border-y border-mimi-pink">
            <H.L2>Artists</H.L2>
          </header>
          <section className="flex">
            <ArtistList className="px-3 overflow-y-scroll max-w-fit max-h-96" />
            <ArtistInfo />
            {selectedArtistState[0] && (
              <PaintingListCompact className="overflow-y-scroll max-h-96" />
            )}
          </section>
        </article>
      </CurrentPaintingsContext.Provider>
    </SelectedArtistContext.Provider>
  );
}

export default Artists;
