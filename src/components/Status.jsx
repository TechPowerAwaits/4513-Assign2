/*
 * Purpose: Provides a rounded area to display information to the user.
 *
 * Details: The information to display must be stored into a StatusState object
 * passed through the `state` prop.
 *
 * If an error is set in the state given, the background color will change to a
 * shade of red.
 */

/*
 * Purpose: To set the state of the Status component.
 */

import H from "./H";

/*
 * Purpose: Stores data used to control the Status component.
 *
 * Details: Requires a `message` as a string.
 *
 * Optionally accepts a `success` boolean parameter. If success is not
 * specified, it defaults to true.
 */
class StatusState {
  constructor(message, success = true) {
    this.msg = message;
    this.success = success;
  }
}

function Status({ state, className: passedClasses }) {
  const defaultStatusState = new StatusState(
    "No state has been set. Please contact the developers.",
    false
  );

  if (!state) {
    state = defaultStatusState;
  }

  const bgColor = state.success ? "bg-caribbean-current" : "bg-carmine";

  return (
    <section
      className={`${bgColor} text-ut-orange text-center px-3 py-1 rounded-3xl ${passedClasses ? passedClasses : ""}`}
    >
      <H.L4>Status:</H.L4>
      {state.msg}
    </section>
  );
}

export { Status, StatusState };
