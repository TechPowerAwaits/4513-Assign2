import Modal from "react-modal";
import H from "./H";
import NiceModal, { useModal } from "@ebay/nice-modal-react";

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
    </Modal>
  );
});

export default AboutModal;
