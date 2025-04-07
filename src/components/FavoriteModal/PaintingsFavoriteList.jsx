import { use, useState } from "react";
import { FavoriteContext } from "../../contexts/Favorite";
import H from "../H";
import Button from "../Button";
import { toast } from "react-fox-toast";
import { SelectedPaintingContext } from "../../contexts/Painting";
import PaintingsFavoriteListItem from "./PaintingsFavoriteListItem";

function PaintingsFavoriteList({ ...props }) {
  const [favorite, refreshFavorites] = use(FavoriteContext);
  const [selectedPainting, setSelectedPainting] = useState(null);

  return (
    <SelectedPaintingContext value={[selectedPainting, setSelectedPainting]}>
      <section {...props}>
        <H.L3>Paintings</H.L3>
        <ul className="h-72 overflow-y-scroll min-w-fit">
          {favorite.paintings.map((painting) => (
            <PaintingsFavoriteListItem
              data={painting}
              key={painting.paintingId}
            />
          ))}
        </ul>
        <Button.Terminate
          className="mx-auto"
          disabled={selectedPainting == null}
          onClick={() => {
            favorite.removePainting(selectedPainting);
            toast.success("The selected painting was successfully removed.");
            setSelectedPainting(null);
            refreshFavorites();
          }}
        >
          Remove
        </Button.Terminate>
      </section>
    </SelectedPaintingContext>
  );
}

export default PaintingsFavoriteList;
