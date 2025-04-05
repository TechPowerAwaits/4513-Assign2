/*
 * Purpose: Provides the main layout that users will see before logging in.
 */

import { Link, Outlet } from "react-router";
import H from "./H";

function Home() {
  return (
    <article className="bg-[url(assets/brooklyn-MO5qO9xpZhA-unsplash.jpg)] bg-no-repeat bg-cover h-full flex flex-col justify-between">
      <header className="bg-tyrian-purple text-ut-orange border-y border-mimi-pink">
        <Link className="hover:text-sandy-brown" to="/">
          <H.L2>Home</H.L2>
        </Link>
      </header>
      <div className="mx-8">
        <Outlet />
      </div>
      <footer className="bg-tyrian-purple text-ut-orange text-center">
        <p className="text-xl font-bold">Image Credits:</p>
        Photo by{" "}
        <a
          className="underline visited:text-spanish-orange hover:text-sandy-brown"
          href="https://unsplash.com/@brooklyngrace?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        >
          brooklyn
        </a>{" "}
        on{" "}
        <a
          className="underline visited:text-spanish-orange hover:text-sandy-brown"
          href="https://unsplash.com/photos/people-in-the-street-painting-MO5qO9xpZhA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        >
          Unsplash
        </a>
      </footer>
    </article>
  );
}

export default Home;
