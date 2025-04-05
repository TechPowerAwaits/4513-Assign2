import Modal from "react-modal";
import H from "../H";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import Button from "../Button";

const AboutModal = NiceModal.create(({ ...props }) => {
  const modal = useModal();
  return (
    <Modal
      contentLabel="About this Project Modal"
      isOpen={modal.visible}
      onRequestClose={() => {
        modal.hide();
      }}
      onAfterClose={() => modal.remove()}
      {...props}
    >
      <H.L2>About</H.L2>

      <p>
        This project was written by Richard Johnston {"<"}
        <a href="mailto:techpowerawaits@outlook.com">
          techpowerawaits@outlook.com
        </a>
        {">"} for a class teaching React.
      </p>
      <p>
        The purpose of the project is to allow a user to easily find information
        on various works of art.
      </p>
      <p>
        Thanks to <a href="https://www.randyconnolly.com/">Randy Connolly</a>{" "}
        for providing the assignment. While the project is current not up to the
        expected standards, it was a great learning opportunity.
      </p>

      <H.L3>Assets Used:</H.L3>
      <ul>
        <li>
          Loading Image: Original obtained from
          https://openclipart.org/detail/279443/golden-frame. It was shrunk by
          50% and the transparent portion was replaced with white. Text was
          added instructing the user to wait.
        </li>
        <li>
          Home Page Hero Image: Photo by{" "}
          <a
            className="underline visited:text-spanish-orange hover:text-sandy-brown"
            href="https://unsplash.com/@brooklyngrace"
          >
            brooklyn
          </a>{" "}
          on{" "}
          <a
            className="underline visited:text-spanish-orange hover:text-sandy-brown"
            href="https://unsplash.com/photos/people-in-the-street-painting-MO5qO9xpZhA"
          >
            Unsplash
          </a>
        </li>
        <li>
          Fallback Image: The font used in the image (5by7) came from{" "}
          <a href="https://www.dafont.com/5by7.font">Dafont</a> and was made by{" "}
          <a href="https://www.dafont.com/peter-wiegel.d689">Peter Wiegel</a>.
        </li>
        <li>
          The artist, genre, and painting images: Were provided by{" "}
          <a href="https://www.randyconnolly.com/">Randy Connolly</a>
        </li>
      </ul>

      <Button.Primary
        type="button"
        onClick={() => {
          modal.hide();
          modal.remove();
        }}
      >
        Close
      </Button.Primary>
    </Modal>
  );
});

export default AboutModal;
