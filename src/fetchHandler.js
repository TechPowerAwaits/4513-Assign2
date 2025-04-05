/*
 * Purpose: Provides helper functions for fetching data.
 */

/*
 * Purpose: Attempts to fetch the requested data from a local cache before
 * making a GET request.
 *
 * Details: The cached data is accessed using the provided string `key`.
 *
 * The content contained at the provided `url` must be JSON data.
 *
 * Throws: An Error if any object contains an attribute named `error`.
 *
 * Returns: The fetched object.
 */
async function fetchCachedObjFromJSON(key, url) {
  let data = null;

  const cachedValue = localStorage.getItem(key);
  if (!cachedValue) {
    data = await fetchObjFromJSON(url);
    localStorage.setItem(key, JSON.stringify(data));
  } else {
    data = JSON.parse(cachedValue);
  }

  return data;
}

/*
 * Purpose: Attempts to fetch the requested data from the given url.
 *
 * Details: The cached data is accessed using the provided string `key`.
 *
 * The content contained at the provided `url` must be JSON data.
 *
 * Throws: An Error if an object contains an attribute named `error`.
 *
 * Returns: The fetched object.
 */
async function fetchObjFromJSON(url) {
  console.debug(`Fetching from ${url}.`);
  let data = null;

  const resp = await respCheckedFetch(url);
  data = await resp.json();

  if (data instanceof Array) {
    data.forEach((item) => {
      objValidation(item);
    });
  } else if (typeof data === "object") {
    objValidation(data);
  }

  return data;
}

/*
 * Purpose: Checks the response of a fetch request.
 *
 * Throws: An Error if the response is not valid.
 *
 * Returns: The fetched data.
 */
async function respCheckedFetch(url) {
  console.debug(`Fetching from ${url}.`);
  const resp = await fetch(url);

  if (!resp.ok) {
    throw new Error(`Fetch returned ${resp.status}`);
  }

  return resp;
}

/*
 * Purpose: Validates the given object against errors.
 *
 * Throws: An Error if an object is invalid.
 */
function objValidation(obj) {
  if (obj.error) {
    throw new Error(obj.error.message);
  }
}

export { fetchCachedObjFromJSON, fetchObjFromJSON };
