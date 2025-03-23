import H from "./H";

function Header() {
  return (
    <header className="flex justify-between bg-blue-700 text-yellow-400">
      <img alt="Logo" />
      <H.L1>Art Browser</H.L1>
      <nav></nav>
    </header>
  );
}

export default Header;
