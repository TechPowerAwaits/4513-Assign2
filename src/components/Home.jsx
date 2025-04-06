/*
 * Purpose: Provides the main layout that users will see before logging in.
 */

import { Link, Outlet } from "react-router";
import H from "./H";
import Hyperlink from "./Hyperlink";

function Home() {
  return (
    <article className="bg-[url(assets/brooklyn-MO5qO9xpZhA-unsplash.jpg)] bg-no-repeat bg-cover h-full flex flex-col justify-between">
      <header className="bg-tyrian-purple text-ut-orange border-y border-mimi-pink">
        <H.L2>Home</H.L2>
      </header>
      <div className="mx-8">
        <Outlet />
      </div>
      <footer className="bg-tyrian-purple text-ut-orange text-center">
        <p className="text-xl font-bold">Image Credits:</p>
        Photo by{" "}
        <Hyperlink href="https://unsplash.com/@brooklyngrace">
          brooklyn
        </Hyperlink>{" "}
        on{" "}
        <Hyperlink href="https://unsplash.com/photos/people-in-the-street-painting-MO5qO9xpZhA">
          Unsplash
        </Hyperlink>
      </footer>
    </article>
  );
}

export default Home;
