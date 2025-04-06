import PaintingFilter from "./PaintingFilter";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

function PaintingFilterMenu({ isOpen, onClose, ...props }) {
  return (
    <Drawer size={400} open={isOpen} onClose={onClose} direction="right">
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
