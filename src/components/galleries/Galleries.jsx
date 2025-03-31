import GalleryList from "./GalleryList";
import H from "../H";

function Galleries() {
  return (
    <article className="h-full">
      <header className="bg-tyrian-purple text-ut-orange border-y border-mimi-pink">
        <H.L2>Galleries</H.L2>
      </header>
      <section className="flex h-full">
        <GalleryList />
      </section>
    </article>
  );
}

export default Galleries;
