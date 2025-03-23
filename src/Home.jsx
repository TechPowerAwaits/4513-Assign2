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
        <Route index element={<ChoiceButtons />} />
        <Route path="/login" element={<Login />} />
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

function ChoiceButtons() {
  return (
    <section>
      <H.L3>What would you like to do?</H.L3>
      <button type="button">Create An Account</button>
      <Link to="/login">
        <button>Sign In</button>
      </Link>
    </section>
  );
}

export default Home;
