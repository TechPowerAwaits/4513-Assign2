import { use } from "react";
import H from "../H";
import { SelectedGalleryContext } from "../../contexts/Gallery";
import Button from "../Button";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import Hyperlink from "../Hyperlink";
import { FavoriteContext } from "../../contexts/Favorite";
import { toast } from "react-fox-toast";

function GalleryInfo() {
  const [selectedGallery, setSelectedGallery] = use(SelectedGalleryContext);
  const [favorite, refreshFavorites] = use(FavoriteContext);
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
          More Info <sup>[extern]</sup>
        </Hyperlink>
      </p>

      <menu className="flex justify-center-safe gap-x-2">
        <li>
          {!favorite.hasGallery(selectedGallery) ? (
            <Button.SetFavorite
              onClick={() => {
                if (favorite.appendGallery(selectedGallery)) {
                  toast.success("A gallery has been added to favorites.");
                  refreshFavorites();
                } else {
                  toast.error("The gallery can not be added to favorites.");
                }
              }}
            />
          ) : (
            <Button.RemoveFavorite
              onClick={() => {
                favorite.removeGallery(selectedGallery);
                console.log("Successfully removed gallery.");
                refreshFavorites();
              }}
            />
          )}
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
