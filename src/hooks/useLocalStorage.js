/*
 * Purpose: Provides a hook that automatically save values to localStorage in
 * JSON format.
 *
 * Details: It is inspired by https://usehooks.com/uselocalstorage, but uses no
 * code from the project.
 *
 * Takes in the key to be used in localStorage and an initial value to set in
 * localStorage.
 *
 * Returns: An array with two elements:
 * - The value of what is contained in localStorage.
 * - A function that takes in a `value` to set localStorage to.
 */

import { useSyncExternalStore } from "react";

function useLocalStorage(key, initialValue) {
  console.debug("Entered local storage hook.");

  const localStorageValue = useSyncExternalStore(subscribe, getSnapshot);

  return [localStorageValue, setLocalStorage];

  function setLocalStorage(value) {
    console.debug(`Setting localStorage key "${key}" to "${initialValue}"`);
    localStorage.setItem(key, JSON.stringify(value));
  }

  function subscribe(callback) {
    const callbackCaller = () => callback();
    window.addEventListener("storage", callbackCaller);
    return () => window.removeEventListener("storage", callbackCaller);
  }

  function getSnapshot() {
    let retrievedValue = initialValue;

    try {
      const retrievedJSON = localStorage.getItem(key);

      if (retrievedJSON) {
        retrievedValue = JSON.parse(retrievedJSON);
      } else {
        console.debug("Setting initialValue.");
        setLocalStorage(initialValue);
      }
    } catch (error) {
      console.error(
        `Failed to get snapshot of local storage. ${error.message}`
      );
    }

    return retrievedValue;
  }
}

export default useLocalStorage;
