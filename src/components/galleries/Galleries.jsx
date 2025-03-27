import GalleryList from "./GalleryList";
import H from "../H";
import { useEffect, useState } from "react";
import { fetchCachedObjFromJSON } from "../../fetchHandler";

function Galleries() {
  const [galleryData, setGalleryData] = useState(null);
  useEffect(() => {
    const url = "https://art-api-kafs.onrender.com/api/galleries";
    const key = "galleries";

    if (!galleryData) {
      try {
        fetchCachedObjFromJSON(key, url, setGalleryData, (error) =>
          console.error(error.message)
        );
      } catch (error) {
        console.error(error.message);
      }
    }
  }, [galleryData]);

  console.table(galleryData);

  return (
    <article>
      <header className="bg-tyrian-purple text-ut-orange border-y border-mimi-pink">
        <H.L2>Galleries</H.L2>
      </header>
      <GalleryList></GalleryList>
    </article>
  );
}

export default Galleries;
