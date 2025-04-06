/*
 * Purpose: Initializes all modal dialogs.
 */

import NiceModal from "@ebay/nice-modal-react";
import AboutModal from "./components/about/AboutModal";
import PaintingModal from "./components/paintings/modal/PaintingModal";

function initModals() {
  NiceModal.register("about-project", AboutModal);
  NiceModal.register("painting-modal", PaintingModal);
}

export default initModals;
