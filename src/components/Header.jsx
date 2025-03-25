import H from "./H";
import Logo from "../assets/Logo.png";

function Header() {
  return (
    <header className="flex justify-between bg-tyrian-purple text-ut-orange">
      <img src={Logo} alt="Logo" />
      <H.L1>Art Browser</H.L1>
      <nav></nav>
    </header>
  );
}

export default Header;
