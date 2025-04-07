import { use } from "react";
import { SelectedPaintingContext } from "../../contexts/Painting";

function PaintingsFavoriteListItem({ data }) {
  const [, setSelectedPainting] = use(SelectedPaintingContext);
  return (
    <li>
      <button
        className="active:bg-caribbean-current"
        onClick={() => setSelectedPainting(data)}
      >
        {data.galleryName}
      </button>
    </li>
  );
}

export default PaintingsFavoriteListItem;
