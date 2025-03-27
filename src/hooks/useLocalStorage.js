/*
 * Purpose: Provides a hook that automatically save values to localStorage in
 * JSON format.
 *
 * Details: It is inspired by https://usehooks.com/uselocalstorage, but uses no
 * code from the project.
 */

import { useCallback, useState, useSyncExternalStore } from "react";

function useLocalStorage(key, initialValue, comparisonFunc) {
  console.debug("Entered local storage hook.");
  const syncValue = useLocalStorageExternSync(
    key,
    initialValue,
    comparisonFunc
  );
  const [cachedObj, setCachedObj] = useState(syncValue);

  const setLocalStorage = useCallback(
    (obj) => {
      const objJSON = JSON.stringify(obj);
      console.debug(`Setting localStorage key "${key}" to "${objJSON}"`);
      localStorage.setItem(key, objJSON);
      setCachedObj(obj);
    },
    [key]
  );

  return [cachedObj, setLocalStorage];
}
function getObj(key) {
  let retrievedObj = null;

  try {
    const retrievedJSON = localStorage.getItem(key);

    if (retrievedJSON) {
      retrievedObj = JSON.parse(retrievedJSON);
    }
  } catch (error) {
    console.error(`Failed to get snapshot of local storage. ${error.message}`);
  }

  return retrievedObj;
}

function useLocalStorageExternSync(key, initialValue, comparisonFunc) {
  const [cachedObj, setCachedObj] = useState(initialValue);

  const getSnapshot = useCallback(() => {
    const obj = getObj(key);
    if (obj && !comparisonFunc(obj, cachedObj)) {
      setCachedObj(obj);
    }

    return cachedObj;
  }, [key, cachedObj, comparisonFunc]);

  return useSyncExternalStore(subscribe, getSnapshot);
}

function subscribe(callback) {
  const callbackCaller = () => callback();
  window.addEventListener("storage", callbackCaller);
  return () => window.removeEventListener("storage", callbackCaller);
}

export default useLocalStorage;
