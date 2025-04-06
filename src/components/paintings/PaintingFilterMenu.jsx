import PaintingFilter from "./PaintingFilter";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Button from "../Button";

function PaintingFilterMenu({ isOpen, onClose, ...props }) {
  return (
    <Drawer size={400} open={isOpen} onClose={onClose} direction="right">
      <menu className="bg-tyrian-purple flex justify-end-safe">
        <li>
          <Button.Terminate onClick={onClose} />
        </li>
      </menu>
      <PaintingFilter
        className="h-full"
        onFilter={onClose}
        onReset={onClose}
        {...props}
      />
    </Drawer>
  );
}

export default PaintingFilterMenu;
