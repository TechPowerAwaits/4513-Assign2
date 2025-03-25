/*
 * Purpose: Provides a rounded area to display information to the user.
 *
 * Details: The information to display must be a string passed through the `msg`
 * prop.
 *
 * If `isErr` is passed through props, the background color will change to a
 * shade of red.
 */

import H from "./H";

function Status({ msg, isErr = false, className: passedClasses }) {
  return (
    <section
      className={`${isErr ? "bg-carmine" : "bg-caribbean-current"} text-ut-orange text-center px-3 py-1 rounded-3xl ${passedClasses ? passedClasses : ""}`}
    >
      <H.L4>Status:</H.L4>
      {msg}
    </section>
  );
}

export default Status;
