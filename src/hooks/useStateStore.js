/*
 * Purpose: Provides a hook for managing a state object with certain attributes.
 *
 * Details: Allows clustering multiple state variables into one object.
 */

import { useState } from "react";

/*
 * Purpose: Provides a hook that allows maintaining multiple related states in
 * one (state store) object.
 *
 * Details: Takes in an optional initial state of the state store. If the given
 * initial state is not an object, an Error will be thrown.
 *
 * Returns: An array with three elements:
 * - The value of the state store.
 * - A function that takes in two parameters--`name` and `value`. This sets the
 * attribute `name` to the value `value` within the state store.
 * - A function that takes in a parameter--`name`--and toggles the value
 * located in the attribute `name` within the state store.
 */
function useStateStore(initialStateStore = {}) {
  const [stateStore, setStateStore] = useState(initialStateStore);
  return [stateStore, setValue, toggleValue];

  function setValue(name, value) {
    const newStateStore = { ...stateStore };
    newStateStore[name] = value;
    setStateStore(newStateStore);
  }

  function toggleValue(name) {
    const newStateStore = { ...stateStore };
    newStateStore[name] = !newStateStore[name];
    setStateStore(newStateStore);
  }
}

export default useStateStore;
