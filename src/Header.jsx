import H from "./H";

function Header() {
  return (
    <header className="flex justify-between bg-tyrian-purple text-ut-orange">
      <img alt="Logo" />
      <H.L1>Art Browser</H.L1>
      <nav></nav>
    </header>
  );
}

export default Header;
