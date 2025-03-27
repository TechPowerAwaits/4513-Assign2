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

  if (!comparisonFunc(syncValue, cachedObj)) {
    console.debug("Updating cached local storage value.");
    setCachedObj(syncValue);
  }

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
    let snapshot = cachedObj;
    const obj = getObj(key);

    if (obj && !comparisonFunc(obj, cachedObj)) {
      setCachedObj(obj);
      snapshot = obj;
    }

    return snapshot;
  }, [key, cachedObj, comparisonFunc]);

  return useSyncExternalStore(localStorageExternSubscribe, getSnapshot);
}

function localStorageExternSubscribe(callback) {
  const callbackCaller = () => callback();
  window.addEventListener("storage", callbackCaller);
  return () => window.removeEventListener("storage", callbackCaller);
}

export default useLocalStorage;
