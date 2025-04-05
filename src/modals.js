/*
 * Purpose: Initializes all modal dialogs.
 */

import NiceModal from "@ebay/nice-modal-react";
import AboutModal from "./components/AboutModal";

function initModals() {
  NiceModal.register("about-project", AboutModal);
}

export default initModals;
