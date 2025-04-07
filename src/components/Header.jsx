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
import useToggle from "../hooks/useToggle";
import AboutModal from "./about/AboutModal";
import { FavoriteContext } from "../contexts/Favorite";
import FavoriteModal from "./FavoriteModal/FavoriteModal";

function Header() {
  const [isAboutOpen, toggleAbout] = useToggle();
  const [isFavOpen, toggleFav] = useToggle();
  const data = use(DataContext);
  const { account, accountLogout } = use(AccountContext);
  const [favorite] = use(FavoriteContext);
  let headerTitle = "Art Browser";
  headerTitle += import.meta.env.DEV ? " DEV" : "";

  return (
    <header className="bg-tyrian-purple text-ut-orange">
      <AboutModal isOpen={isAboutOpen} toggleOpen={toggleAbout} />
      <FavoriteModal isOpen={isFavOpen} toggleOpen={toggleFav} />
      <div className="flex justify-between items-center-safe">
        <img src={Logo} alt="Logo" />
        <H.L1>{headerTitle}</H.L1>
        <menu className="flex mr-2 gap-x-3">
          {account && (
            <>
              <li>
                <Button.Secondary
                  disabled={!data}
                  type="button"
                  onClick={() => accountLogout()}
                >
                  Sign Out
                </Button.Secondary>
              </li>
              <li>
                <Button.Primary
                  disabled={favorite && favorite.isEmpty()}
                  type="button"
                  onClick={() => toggleFav()}
                >
                  Fav
                </Button.Primary>
              </li>
            </>
          )}
          <li>
            <Button.Primary type="button" onClick={() => toggleAbout()}>
              About
            </Button.Primary>
          </li>
        </menu>
      </div>
      {account && (
        <nav className="flex justify-evenly border-y border-mimi-pink">
          <NavLink to="/artists">
            {({ isActive }) => (
              <button
                className="disabled:text-gray disabled:cursor-not-allowed cursor-pointer"
                disabled={isActive || !data}
              >
                Artists
              </button>
            )}
          </NavLink>
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
          <NavLink to="/genres">
            {({ isActive }) => (
              <button
                className="disabled:text-gray disabled:cursor-not-allowed cursor-pointer"
                disabled={isActive || !data}
              >
                Genres
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
