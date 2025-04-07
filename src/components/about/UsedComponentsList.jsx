import H from "../H";
import Hyperlink from "../Hyperlink";

function UsedComponentsList() {
  return (
    <section>
      <H.L3>Components Used:</H.L3>
      <ul className="list-disc list-inside max-h-40 overflow-y-scroll">
        <li>
          <span className="font-bold">
            <Hyperlink href="https://www.react-fox-toast.com/">
              react-fox-toast
            </Hyperlink>
            :
          </span>{" "}
          For the notifications shown when adding and removing from favorites.
        </li>
        <li>
          <span className="font-bold">
            <Hyperlink href="https://www.npmjs.com/package/react-modern-drawer">
              react-modern-drawer
            </Hyperlink>
            :
          </span>{" "}
          For displaying the filtering options on the Paintings view so the text
          won't get obstructed.
        </li>
        <li>
          <span className="font-bold">
            <Hyperlink href="https://www.npmjs.com/package/react-modal">
              react-modal
            </Hyperlink>
            :
          </span>{" "}
          Used for displaying the About, Painting, and Favorites Dialogs.
        </li>
        <li>
          <span className="font-bold">
            <Hyperlink href="https://pigeon-maps.js.org/">
              pigeon-maps
            </Hyperlink>
            :
          </span>{" "}
          For displaying where galleries are located. There are other packages
          available, but this one has no dependencies.
        </li>
        <li>
          <span className="font-bold">
            <Hyperlink href="https://reactrouter.com/">react-router</Hyperlink>:
          </span>{" "}
          For allowing the user to go back to a previous view. It is also used
          to implement the 404 page.
        </li>
      </ul>
    </section>
  );
}

export default UsedComponentsList;
