/*
 * Purpose: Provides the top bar of the App.
 */

import H from "./H";
import Logo from "../assets/Logo.png";
import { use } from "react";
import { AccountContext } from "../contexts/Account";
import Button from "./Button";
import { NavLink } from "react-router";
import { DataContext } from "../contexts/Data";

function Header() {
  const data = use(DataContext);
  const { account, accountLogout } = use(AccountContext);
  let headerTitle = "Art Browser";
  headerTitle += import.meta.env.DEV ? " DEV" : "";

  return (
    <header className="bg-tyrian-purple text-ut-orange">
      <div className="flex justify-between">
        <img src={Logo} alt="Logo" />
        <H.L1>{headerTitle}</H.L1>
        <menu className="flex">
          {account && (
            <li>
              <Button.Secondary
                disabled={!data}
                type="button"
                onClick={() => accountLogout()}
              >
                Sign Out
              </Button.Secondary>
            </li>
          )}
          <li>
            <Button.Primary type="button">About</Button.Primary>
          </li>
        </menu>
      </div>
      {account && (
        <nav className="flex justify-center-safe border-y border-mimi-pink">
          <NavLink to="/galleries">
            {({ isActive }) => (
              <button
                className="disabled:text-gray disabled:cursor-not-allowed cursor-pointer"
                disabled={isActive || !data}
              >
                Galleries
              </button>
            )}
          </NavLink>
          <NavLink to="/paintings">
            {({ isActive }) => (
              <button
                className="disabled:text-gray disabled:cursor-not-allowed cursor-pointer"
                disabled={isActive || !data}
              >
                Paintings
              </button>
            )}
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
