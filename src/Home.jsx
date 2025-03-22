import Login from "./Login";

function Home() {
  return (
    <article className="bg-[url(assets/brooklyn-MO5qO9xpZhA-unsplash.jpg)] bg-no-repeat bg-cover space-y-3">
      <Login />
      <section className="bg-blue-700 text-yellow-400 text-center">
        <h2 className="text-xl font-bold">Image Credits:</h2>
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

export default Home;
