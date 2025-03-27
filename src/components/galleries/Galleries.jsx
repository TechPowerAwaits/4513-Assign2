import GalleryList from "./GalleryList";
import H from "../H";
import useGalleriesData from "../../hooks/useGalleriesData";
import { galleryTestData } from "../../contexts/Gallery";

function Galleries() {
  const [galleryData, setGalleryData] = useGalleriesData();
  console.table(galleryData);

  if (galleryData.length == 0) {
    setGalleryData(galleryTestData);
  }

  return (
    <article>
      <header className="bg-tyrian-purple text-ut-orange border-y border-mimi-pink">
        <H.L2>Galleries</H.L2>
      </header>
      <button onClick={() => setGalleryData([{ galleryId: 5 }])}>
        Test Button
      </button>
      <GalleryList></GalleryList>
    </article>
  );
}

export default Galleries;
