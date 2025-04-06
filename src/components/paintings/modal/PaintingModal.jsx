import Modal from "react-modal";
import H from "../../H";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import Button from "../../Button";
import Hyperlink from "../../Hyperlink";
import ImageWithFallback from "../../ImageWithFallback";
import PaintingColorList from "./PaintingColorList";

const PaintingModal = NiceModal.create(({ data, ...props }) => {
  const modal = useModal();
  const artistName = data.Artists.firstName
    ? `${data.Artists.firstName} ${data.Artists.lastName}`
    : data.Artists.lastName;

  return (
    <Modal
      contentLabel="Painting Modal"
      isOpen={modal.visible}
      onRequestClose={() => {
        modal.hide();
      }}
      onAfterClose={() => modal.remove()}
      {...props}
    >
      <menu className="flex flex-row-reverse gap-1.5">
        <li>
          <Button.Terminate
            onClick={() => {
              modal.hide();
              modal.remove();
            }}
          />
        </li>
        <li>
          <Button.SetFavorite />
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

      <div className="flex my-5">
        <figure>
          <ImageWithFallback
            className="scale-50"
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
});

export default PaintingModal;
