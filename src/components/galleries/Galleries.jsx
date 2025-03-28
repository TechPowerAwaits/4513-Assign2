import GalleryList from "./GalleryList";
import H from "../H";

function Galleries() {
  return (
    <article>
      <header className="bg-tyrian-purple text-ut-orange border-y border-mimi-pink">
        <H.L2>Galleries</H.L2>
      </header>
      <GalleryList />
    </article>
  );
}

export default Galleries;
