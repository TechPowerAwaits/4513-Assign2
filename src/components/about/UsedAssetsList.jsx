import H from "../H";

function UsedAssetsList() {
  return (
    <section>
      <H.L3>Assets Used:</H.L3>
      <ul className="list-disc list-inside max-h-40 overflow-y-scroll">
        <li>
          <span className="font-bold">Loading Image:</span> Original obtained
          from{" "}
          <a
            className="underline visited:text-spanish-orange hover:text-sandy-brown"
            href="https://openclipart.org/detail/279443/golden-frame"
          >
            https://openclipart.org/detail/279443/golden-frame
          </a>
          . It was shrunk by 50% and the transparent portion was replaced with
          white. Text was added instructing the user to wait.
        </li>
        <li>
          <span className="font-bold">Home Page Hero Image:</span> Photo by{" "}
          <a
            className="underline visited:text-spanish-orange hover:text-sandy-brown"
            href="https://unsplash.com/@brooklyngrace"
          >
            brooklyn
          </a>{" "}
          on{" "}
          <a
            className="underline visited:text-spanish-orange hover:text-sandy-brown"
            href="https://unsplash.com/photos/people-in-the-street-painting-MO5qO9xpZhA"
          >
            Unsplash
          </a>
          .
        </li>
        <li>
          <span className="font-bold">Fallback Image:</span> The font used in
          the image (5by7) came from{" "}
          <a
            className="underline visited:text-spanish-orange hover:text-sandy-brown"
            href="https://www.dafont.com/5by7.font"
          >
            Dafont
          </a>{" "}
          and was made by{" "}
          <a
            className="underline visited:text-spanish-orange hover:text-sandy-brown"
            href="https://www.dafont.com/peter-wiegel.d689"
          >
            Peter Wiegel
          </a>
          .
        </li>
        <li>
          <span className="font-bold">
            The artist, genre, and painting images:
          </span>{" "}
          Were provided by{" "}
          <a
            className="underline visited:text-spanish-orange hover:text-sandy-brown"
            href="https://www.randyconnolly.com/"
          >
            Randy Connolly
          </a>
        </li>
      </ul>
    </section>
  );
}

export default UsedAssetsList;
