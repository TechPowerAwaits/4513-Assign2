import { use } from "react";
import H from "../H";
import { SelectedGenreContext } from "../../contexts/Genre";
import Button from "../Button";
import Hyperlink from "../Hyperlink";

function GenreInfo() {
  const [selectedGenre, setSelectedGenre] = use(SelectedGenreContext);
  if (!selectedGenre) {
    return (
      <section>
        <H.L3>No Genre Selected</H.L3>

        <p>Please click on a genre from the list.</p>
      </section>
    );
  }

  return (
    <section>
      <hgroup className="text-center">
        <H.L3>{selectedGenre.genreName}</H.L3>
        <p className="max-h-24 overflow-y-scroll">
          {selectedGenre.description}
        </p>
        {selectedGenre.wikiLink && (
          <p>
            <Hyperlink src={selectedGenre.wikiLink}>
              More Info <sup>[extern]</sup>
            </Hyperlink>
          </p>
        )}
      </hgroup>

      <menu className="flex justify-center-safe gap-x-2">
        <li>
          <Button.Terminate onClick={() => setSelectedGenre(null)}>
            Close
          </Button.Terminate>
        </li>
      </menu>
    </section>
  );
}

export default GenreInfo;
