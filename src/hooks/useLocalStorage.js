/*
 * Purpose: Provides a hook that automatically save values to localStorage in
 * JSON format.
 *
 * Details: It is inspired by https://usehooks.com/uselocalstorage, but uses no
 * code from the project.
 *
 * Takes in the key to be used in localStorage, an initial value to set in
 * localStorage (if a value is not set).
 *
 * Returns: An array with two elements:
 * - The value of what is contained in localStorage.
 * - A function that takes in a `value` to set localStorage to.
 */

import { useCallback, useState, useSyncExternalStore } from "react";

function useLocalStorage(key, initialValue, comparisonFunc) {
  console.debug("Entered local storage hook.");
  const [cachedObj, setCachedObj] = useState(initialValue);

  const setLocalStorage = useCallback(
    (obj) => {
      const objJSON = JSON.stringify(obj);
      console.debug(`Setting localStorage key "${key}" to "${objJSON}"`);
      localStorage.setItem(key, objJSON);
      setCachedObj(obj);
    },
    [key]
  );

  const getSnapshot = useCallback(() => {
    try {
      const retrievedJSON = localStorage.getItem(key);

      if (retrievedJSON) {
        const retrievedObj = JSON.parse(retrievedJSON);
        if (!comparisonFunc(retrievedObj, cachedObj)) {
          setCachedObj(retrievedObj);
        }
      }
    } catch (error) {
      console.error(
        `Failed to get snapshot of local storage. ${error.message}`
      );
    }

    return cachedObj;
  }, [key, cachedObj, comparisonFunc]);

  useSyncExternalStore(subscribe, getSnapshot);

  return [cachedObj, setLocalStorage];
}

function subscribe(callback) {
  const callbackCaller = () => callback();
  window.addEventListener("storage", callbackCaller);
  return () => window.removeEventListener("storage", callbackCaller);
}

export default useLocalStorage;
