import PaintingFilter from "./PaintingFilter";
import { slide as SlideMenu } from "react-burger-menu";

function PaintingFilterMenu({ isOpen, onClose, ...props }) {
  return (
    <SlideMenu
      itemListElement="div"
      width={400}
      isOpen={isOpen}
      onClose={onClose}
      customBurgerIcon={false}
      customCrossIcon={false}
    >
      <PaintingFilter onFilter={onClose} onReset={onClose} {...props} />
    </SlideMenu>
  );
}

export default PaintingFilterMenu;
