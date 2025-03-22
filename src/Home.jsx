import { Routes, Route, Link } from "react-router";
import Login from "./Login";

function Home() {
  return (
    <article className="bg-[url(assets/brooklyn-MO5qO9xpZhA-unsplash.jpg)] bg-no-repeat bg-cover space-y-3 h-full flex flex-col justify-between">
      <header>
        <h2>Home</h2>
      </header>
      <Routes>
        <Route index element={<ChoiceButtons />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <section className="bg-blue-700 text-yellow-400 text-center">
        <h3 className="text-xl font-bold">Image Credits:</h3>
        Photo by{" "}
        <a href="https://unsplash.com/@brooklyngrace?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          brooklyn
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/people-in-the-street-painting-MO5qO9xpZhA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </section>
    </article>
  );
}

function ChoiceButtons() {
  return (
    <section>
      <h2>What would you like to do?</h2>
      <button type="button">Create An Account</button>
      <Link to="/login">
        <button>Sign In</button>
      </Link>
    </section>
  );
}

export default Home;
