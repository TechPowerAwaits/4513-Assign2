import Modal from "react-modal";
import H from "./H";
import { useNavigate } from "react-router";
import { useMemo, useState } from "react";

function AboutModal({ ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const navTo = useNavigate();

  useMemo(() => setIsOpen(true), []);

  return (
    <Modal
      contentLabel="About this Project Modal"
      isOpen={isOpen}
      onRequestClose={() => {
        setIsOpen(false);
        navTo(-1);
      }}
      {...props}
    >
      <H.L2>About</H.L2>
    </Modal>
  );
}

export default AboutModal;
