import Modal from "react-modal";
import H from "../H";
import Button from "../Button";
import UsedAssetsList from "./UsedAssetsList";
import Hyperlink from "../Hyperlink";

function AboutModal({ isOpen, toggleOpen, ...props }) {
  return (
    <Modal
      contentLabel="About this Project Modal"
      isOpen={isOpen}
      onRequestClose={() => toggleOpen()}
      {...props}
    >
      <menu className="flex justify-end-safe">
        <li>
          <Button.Terminate type="button" onClick={() => toggleOpen()} />
        </li>
      </menu>
      <H.L2>About</H.L2>

      <p>
        This project was written by Richard Johnston {"<"}
        <Hyperlink href="mailto:techpowerawaits@outlook.com">
          techpowerawaits@outlook.com
        </Hyperlink>
        {">"} for a class teaching React.
      </p>
      <p>
        The purpose of the project is to allow a user to easily find information
        on various works of art.
      </p>
      <p>
        Thanks to{" "}
        <Hyperlink href="https://www.randyconnolly.com/">
          Randy Connolly
        </Hyperlink>{" "}
        for providing the assignment. It was a great learning opportunity.
      </p>

      <UsedAssetsList />
    </Modal>
  );
}

export default AboutModal;
