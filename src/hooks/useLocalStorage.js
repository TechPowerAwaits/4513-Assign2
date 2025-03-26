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

import { useCallback, useState, useSyncExternalStore } from "react";

const subscribe = (callback) => {
  const callbackCaller = () => callback();
  window.addEventListener("storage", callbackCaller);
  return () => window.removeEventListener("storage", callbackCaller);
};

function useLocalStorage(key, initialValue) {
  console.debug("Entered local storage hook.");
  const [initialRun, setInitialRun] = useState(true);
  const [prevJSON, setPrevJSON] = useState("");
  const [prevObj, setPrevObj] = useState(undefined);

  const setLocalStorage = useCallback(
    (value) => {
      console.debug(`Setting localStorage key "${key}" to "${value}"`);
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );

  const getSnapshot = useCallback(() => {
    let retrievedValue = undefined;

    try {
      const retrievedJSON = localStorage.getItem(key);

      if (retrievedJSON) {
        if (prevJSON == retrievedJSON) {
          retrievedValue = prevObj;
        } else {
          retrievedValue = JSON.parse(retrievedJSON);
          setPrevJSON(retrievedJSON);
          setPrevObj(retrievedValue);
        }
      }
    } catch (error) {
      console.error(
        `Failed to get snapshot of local storage. ${error.message}`
      );
    }

    return retrievedValue;
  }, [key, prevJSON, prevObj]);

  const localStorageValue = useSyncExternalStore(subscribe, getSnapshot);

  if (initialRun) {
    console.debug("Setting initialValue.");
    setLocalStorage(initialValue);
    setInitialRun(false);
  }

  return [localStorageValue, setLocalStorage];
}

export default useLocalStorage;
