import { use } from "react";
import H from "../H";
import { SelectedGalleryContext } from "../../contexts/Gallery";
import Button from "../Button";

function GalleryInfo() {
  const [selectedGallery, setSelectedGallery] = use(SelectedGalleryContext);
  if (!selectedGallery) {
    return (
      <section>
        <H.L3>No Gallery Selected</H.L3>

        <p>Please click on a gallery from the list.</p>
      </section>
    );
  }

  console.table(selectedGallery);

  const nativeGalleryPostfix = selectedGallery.nativeGalleryName
    ? ` (${selectedGallery.nativeGalleryName})`
    : "";

  return (
    <section>
      <H.L3>
        {selectedGallery.galleryName}
        {nativeGalleryPostfix}
      </H.L3>

      <p>{selectedGallery.galleryAddress}</p>
      <p>
        {selectedGallery.galleryCity}, {selectedGallery.galleryCountry}
      </p>
      <a href={selectedGallery.galleryWebSite}>
        Gallery Link <sup>[extern]</sup>
      </a>
      <Button.Primary onClick={() => setSelectedGallery(null)}>
        Close
      </Button.Primary>
    </section>
  );
}

export default GalleryInfo;
