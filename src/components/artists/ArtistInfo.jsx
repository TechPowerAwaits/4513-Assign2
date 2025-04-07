import { use } from "react";
import H from "../H";
import { SelectedArtistContext } from "../../contexts/Artist";
import Button from "../Button";
import Hyperlink from "../Hyperlink";
import ImageWithFallback from "../ImageWithFallback";

function ArtistInfo() {
  const [selectedArtist, setSelectedArtist] = use(SelectedArtistContext);
  if (!selectedArtist) {
    return (
      <section>
        <H.L3>No Artist Selected</H.L3>

        <p>Please click on an artist from the list.</p>
      </section>
    );
  }

  const artistName =
    `${selectedArtist.firstName} ${selectedArtist.lastName}`.trim();
  const genderText = selectedArtist.gender === "M" ? "Male" : "Female";
  const birthText = `Born ${selectedArtist.yearOfBirth}`;
  const deathPostfix = selectedArtist.yearOfDeath
    ? `; Died ${selectedArtist.yearOfDeath}`
    : "";
  const lifeText = `${genderText}—${birthText}${deathPostfix}.`;

  return (
    <section>
      <hgroup className="text-center">
        <H.L3>{artistName}</H.L3>
        <p>{lifeText}</p>
        {selectedArtist.artistLink && (
          <p>
            <Hyperlink src={selectedArtist.artistLink}>
              Gallery Link <sup>[extern]</sup>
            </Hyperlink>
          </p>
        )}
      </hgroup>

      <ImageWithFallback
        className="max-w-1/2 max-h-1/2 mx-auto"
        src={`/artists/full/${selectedArtist.artistId}.jpg`}
        alt={artistName}
      />

      {selectedArtist.description && (
        <div className="mx-auto overflow-y-scroll max-h-32">
          {selectedArtist.description}
        </div>
      )}

      <menu className="flex justify-center-safe gap-x-2">
        <li>
          <Button.SetFavorite />
        </li>
        <li>
          <Button.Terminate onClick={() => setSelectedArtist(null)}>
            Close
          </Button.Terminate>
        </li>
      </menu>
    </section>
  );
}

export default ArtistInfo;
