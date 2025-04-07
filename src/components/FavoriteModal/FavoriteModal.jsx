import Modal from "react-modal";
import H from "../H";
import Button from "../Button";
import { use } from "react";
import { FavoriteContext } from "../../contexts/Favorite";
import { toast } from "react-fox-toast";
import GalleriesFavoriteList from "./GalleriesFavoriteList";
import ArtistsFavoriteList from "./ArtistsFavoriteList";
import PaintingsFavoriteList from "./PaintingsFavoriteList";

function FavoriteModal({ isOpen, toggleOpen, ...props }) {
  const [favorite, refreshFavorites] = use(FavoriteContext);

  if (favorite && favorite.isEmpty() && isOpen) {
    toggleOpen();
    toast.info("No more favorites remain. The modal has been closed.");
  }

  return (
    <Modal
      contentLabel="Favorites Modal"
      isOpen={isOpen}
      onRequestClose={() => toggleOpen()}
      {...props}
    >
      <menu className="flex flex-row-reverse">
        <li>
          <Button.Terminate type="button" onClick={() => toggleOpen()} />
        </li>
      </menu>
      <H.L2>Favorites</H.L2>

      <div className="flex justify-around space-y-2 mt-2">
        <GalleriesFavoriteList />
        <ArtistsFavoriteList />
        <PaintingsFavoriteList />
      </div>
      <div className="flex justify-center">
        <Button.Terminate
          onClick={() => {
            favorite.removeAll();
            refreshFavorites();
            toast.success("All favorites were successfully removed.");
          }}
        >
          Remove all
        </Button.Terminate>
      </div>
    </Modal>
  );
}

export default FavoriteModal;
