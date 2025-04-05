/*
 * Purpose: Provides the top bar of the App.
 */

import H from "./H";
import Logo from "../assets/Logo.png";
import { use } from "react";
import { AccountContext } from "../contexts/Account";
import Button from "./Button";

function Header() {
  const { account, setAccount } = use(AccountContext);
  let headerTitle = "Art Browser";
  headerTitle += import.meta.env.DEV ? " DEV" : "";

  return (
    <header className="flex justify-between bg-tyrian-purple text-ut-orange">
      <img src={Logo} alt="Logo" />
      <H.L1>{headerTitle}</H.L1>
      <nav className="flex">
        {account && (
          <Button.Secondary onClick={() => setAccount(null)}>
            Sign Out
          </Button.Secondary>
        )}
        <Button.Primary>About</Button.Primary>
      </nav>
    </header>
  );
}

export default Header;
