import Modal from "react-modal";
import H from "../../H";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import Button from "../../Button";
import Hyperlink from "../../Hyperlink";
import ImageWithFallback from "../../ImageWithFallback";

const PaintingModal = NiceModal.create(({ data, ...props }) => {
  const modal = useModal();
  const artistName = data.Artists.firstName
    ? `${data.Artists.firstName} ${data.Artists.lastName}`
    : data.Artists.lastName;
  let galleryName = data.Galleries.galleryName;
  if (data.Galleries.galleryNativeName) {
    galleryName += ` ${data.Galleries.galleryNativeName}`;
  }

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
      <menu className="absolute">
        <Button.Primary
          onClick={() => {
            modal.hide();
            modal.remove();
          }}
        >
          X
        </Button.Primary>
        <Button.Primary>Fav</Button.Primary>
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
        {data.wikiLink && (
          <p>
            <Hyperlink href={data.wikiLink}>
              More info... <sup>[extern wiki]</sup>
            </Hyperlink>
          </p>
        )}
      </hgroup>

      <figure>
        <ImageWithFallback src={`/paintings/full/${data.imageFileName}.jpg`} />
        <figcaption>{data.copyrightText}</figcaption>
      </figure>
      <Hyperlink href={data.museumLink}>
        {galleryName}, {data.Galleries.galleryCity},{" "}
        {data.Galleries.galleryCountry} <sup>[extern]</sup>
      </Hyperlink>
      {data.description && (
        <section>
          <H.L3>Description:</H.L3>
          <p className="max-h-40 overflow-y-scroll">{data.description}</p>
        </section>
      )}
      <section>
        <H.L3>Dominant Colors:</H.L3>
      </section>
    </Modal>
  );
});

export default PaintingModal;
