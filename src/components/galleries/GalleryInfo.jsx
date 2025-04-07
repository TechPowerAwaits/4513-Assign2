import { use } from "react";
import H from "../H";
import { SelectedGalleryContext } from "../../contexts/Gallery";
import Button from "../Button";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import Hyperlink from "../Hyperlink";

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

  const nativeGalleryPostfix = selectedGallery.nativeGalleryName
    ? ` (${selectedGallery.nativeGalleryName})`
    : "";

  return (
    <section>
      <H.L3>
        {selectedGallery.galleryName}
        {nativeGalleryPostfix}
      </H.L3>

      <Map
        center={[selectedGallery.latitude, selectedGallery.longitude]}
        zoom={16}
        width={300}
        height={200}
      >
        <ZoomControl />
        <Marker
          anchor={[selectedGallery.latitude, selectedGallery.longitude]}
        />
      </Map>

      <p className="text-center">{selectedGallery.galleryAddress}</p>
      <p className="text-center">
        {selectedGallery.galleryCity}, {selectedGallery.galleryCountry}
      </p>
      <p className="text-center">
        <Hyperlink href={selectedGallery.galleryWebSite}>
          Gallery Link <sup>[extern]</sup>
        </Hyperlink>
      </p>

      <menu className="flex justify-center-safe gap-x-2">
        <li>
          <Button.SetFavorite />
        </li>
        <li>
          <Button.Terminate onClick={() => setSelectedGallery(null)}>
            Close
          </Button.Terminate>
        </li>
      </menu>
    </section>
  );
}

export default GalleryInfo;
