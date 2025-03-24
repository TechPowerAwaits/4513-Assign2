import { Routes, Route, Link } from "react-router";
import Login from "./Login";
import H from "./H";

function Home() {
  return (
    <article className="bg-[url(assets/brooklyn-MO5qO9xpZhA-unsplash.jpg)] bg-no-repeat bg-cover h-full flex flex-col justify-between">
      <header>
        <H.L2>Home</H.L2>
      </header>
      <Routes>
        <Route index element={<ChoiceButtons className="mx-8" />} />
        <Route path="/login" element={<Login className="mx-8" />} />
      </Routes>
      <footer className="bg-blue-700 text-yellow-400 text-center">
        <p className="text-xl font-bold">Image Credits:</p>
        Photo by{" "}
        <a href="https://unsplash.com/@brooklyngrace?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          brooklyn
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/people-in-the-street-painting-MO5qO9xpZhA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </footer>
    </article>
  );
}

function ChoiceButtons({ className: passedClasses }) {
  return (
    <section className={`p-1.5 ${passedClasses}`}>
      <H.L3>What would you like to do?</H.L3>
      <menu className="flex justify-center gap-4 sm:flex-row flex-col">
        <li className="mx-auto sm:mx-0">
          <button
            type="button"
            className="hover:scale-105 motion-reduce:hover:scale-100 border-2 border-transparent active:border-black hover:border-black cursor-pointer bg-tyrian-purple hover:bg-murrey text-ut-orange py-3 px-4 rounded-full"
          >
            Create An Account
          </button>
        </li>
        <li className="mx-auto sm:mx-0">
          <Link to="/login">
            <button
              type="button"
              className="hover:scale-105 motion-reduce:hover:scale-100 border-2 border-transparent active:border-black hover:border-black cursor-pointer bg-midnight-green hover:bg-caribbean-current text-ut-orange py-3 px-4 rounded-full"
            >
              Sign In
            </button>
          </Link>
        </li>
      </menu>
    </section>
  );
}

export default Home;
