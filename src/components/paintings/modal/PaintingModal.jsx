import { use } from "react";
import Modal from "react-modal";
import H from "../../H";
import Button from "../../Button";
import Hyperlink from "../../Hyperlink";
import ImageWithFallback from "../../ImageWithFallback";
import PaintingColorList from "./PaintingColorList";
import { FavoriteContext } from "../../../contexts/Favorite";

function PaintingModal({ data, isOpen, toggleOpen, ...props }) {
  const artistName = data.Artists.firstName
    ? `${data.Artists.firstName} ${data.Artists.lastName}`
    : data.Artists.lastName;
  const [favorite, refreshFavorites] = use(FavoriteContext);

  return (
    <Modal
      contentLabel="Painting Modal"
      isOpen={isOpen}
      onRequestClose={() => {
        toggleOpen();
      }}
      {...props}
    >
      <menu className="flex flex-row-reverse gap-1.5">
        <li>
          <Button.Terminate
            onClick={() => {
              toggleOpen();
            }}
          />
        </li>
        <li>
          {!favorite.hasPainting(data) ? (
            <Button.SetFavorite
              onClick={() => {
                if (favorite.appendPainting(data)) {
                  console.log("Successfully added painting.");
                  refreshFavorites();
                } else {
                  console.log("Failed to add painting");
                }
              }}
            />
          ) : (
            <Button.RemoveFavorite
              onClick={() => {
                favorite.removePainting(data);
                console.log("Successfully removed painting.");
                refreshFavorites();
              }}
            />
          )}
        </li>
      </menu>
      <hgroup className="text-center">
        <H.L2>
          {data.title} - {data.yearOfWork}
        </H.L2>
        <p>
          {data.width} <span className="font-semibold">x</span> {data.height}{" "}
          {data.medium} Painting
        </p>
        <p>{`Authored by ${artistName}`}</p>
        <p>
          <Hyperlink href={data.museumLink}>
            {data.Galleries.galleryName}, {data.Galleries.galleryCity},{" "}
            {data.Galleries.galleryCountry} <sup>[extern]</sup>
          </Hyperlink>
        </p>
        {data.wikiLink && (
          <p>
            <Hyperlink href={data.wikiLink}>
              More info... <sup>[extern wiki]</sup>
            </Hyperlink>
          </p>
        )}
      </hgroup>

      <div className="flex justify-between my-5">
        <figure>
          <ImageWithFallback
            className="max-w-1/2 max-h-1/2 mx-auto"
            src={`/paintings/full/${data.imageFileName}.jpg`}
            alt={data.title}
          />
          <figcaption className="font-bold text-center">
            {data.copyrightText}
          </figcaption>
        </figure>
        <aside className="space-y-2">
          {data.description && (
            <section>
              <H.L3>Description:</H.L3>
              <p className="max-h-40 overflow-y-scroll">{data.description}</p>
            </section>
          )}
          <PaintingColorList
            dominantColors={data.jsonAnnotations.dominantColors}
          />
        </aside>
      </div>
    </Modal>
  );
}

export default PaintingModal;
