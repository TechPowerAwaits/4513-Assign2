/*
 * Purpose: Provides the top bar of the App.
 */

import H from "./H";
import Logo from "../assets/Logo.png";

function Header() {
  let headerTitle = "Art Browser";
  headerTitle += import.meta.env.DEV ? " DEV" : "";

  return (
    <header className="flex justify-between bg-tyrian-purple text-ut-orange">
      <img src={Logo} alt="Logo" />
      <H.L1>{headerTitle}</H.L1>
      <nav></nav>
    </header>
  );
}

export default Header;
