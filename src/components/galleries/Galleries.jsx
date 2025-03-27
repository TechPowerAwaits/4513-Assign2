import GalleryList from "./GalleryList";
import H from "../H";
import useGalleriesData from "../../hooks/useGalleriesData";

function Galleries() {
  const galleryData = useGalleriesData();
  console.table(galleryData);

  // When the hook is first used, it uses the initial value instead of the value in the localStore.
  /*if (galleryData.length == 0) {
    setGalleryData(galleryTestData);
  }*/
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
