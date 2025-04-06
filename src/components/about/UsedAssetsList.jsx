import H from "../H";
import Hyperlink from "../Hyperlink";

function UsedAssetsList() {
  return (
    <section>
      <H.L3>Assets Used:</H.L3>
      <ul className="list-disc list-inside max-h-40 overflow-y-scroll">
        <li>
          <span className="font-bold">Loading Image:</span> Original obtained
          from{" "}
          <Hyperlink href="https://openclipart.org/detail/279443/golden-frame">
            https://openclipart.org/detail/279443/golden-frame
          </Hyperlink>
          . It was shrunk by 50% and the transparent portion was replaced with
          white. Text was added instructing the user to wait.
        </li>
        <li>
          <span className="font-bold">Home Page Hero Image:</span> Photo by{" "}
          <Hyperlink href="https://unsplash.com/@brooklyngrace">
            brooklyn
          </Hyperlink>{" "}
          on{" "}
          <Hyperlink href="https://unsplash.com/photos/people-in-the-street-painting-MO5qO9xpZhA">
            Unsplash
          </Hyperlink>
          .
        </li>
        <li>
          <span className="font-bold">Fallback Image:</span> The font used in
          the image (5by7) came from{" "}
          <Hyperlink href="https://www.dafont.com/5by7.font">Dafont</Hyperlink>{" "}
          and was made by{" "}
          <Hyperlink href="https://www.dafont.com/peter-wiegel.d689">
            Peter Wiegel
          </Hyperlink>
          .
        </li>
        <li>
          <span className="font-bold">
            The artist, genre, and painting images:
          </span>{" "}
          Were provided by{" "}
          <Hyperlink href="https://www.randyconnolly.com/">
            Randy Connolly
          </Hyperlink>
        </li>
      </ul>
    </section>
  );
}

export default UsedAssetsList;
