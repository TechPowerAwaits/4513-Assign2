import Modal from "react-modal";
import H from "../H";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import Button from "../Button";
import UsedAssetsList from "./UsedAssetsList";

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
        <a
          className="underline visited:text-spanish-orange hover:text-sandy-brown"
          href="mailto:techpowerawaits@outlook.com"
        >
          techpowerawaits@outlook.com
        </a>
        {">"} for a class teaching React.
      </p>
      <p>
        The purpose of the project is to allow a user to easily find information
        on various works of art.
      </p>
      <p>
        Thanks to{" "}
        <a
          className="underline visited:text-spanish-orange hover:text-sandy-brown"
          href="https://www.randyconnolly.com/"
        >
          Randy Connolly
        </a>{" "}
        for providing the assignment. It was a great learning opportunity.
      </p>

      <UsedAssetsList />

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
