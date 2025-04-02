/*
 * Purpose: Provides helper functions for fetching data.
 *
 * Details: All async functions use a errorHandler function to handle any
 * errors. It is highly recommended to override the default errorHandler as it
 * doesn't handle the errors passed to it.
 */

/*
 * Purpose: The default errorHandler used to handle errors in all provided
 * async functions.
 */
let errorHandler = () => {};

/*
 * Purpose: Attempts to fetch the requested data from a local cache before
 * making a GET request.
 *
 * Details: The cached data is accessed using the provided string `key`.
 *
 * The content contained at the provided `url` must be JSON data.
 *
 * The function will invoke the errHandler if any object contains an attribute
 * named `error`.
 *
 * Returns: The fetched object or null if an Error occurs.
 */
async function fetchCachedObjFromJSON(key, url, errHandler = errorHandler) {
  let data = null;

  try {
    const cachedValue = localStorage.getItem(key);
    if (!cachedValue) {
      data = await fetchObjFromJSON(url);
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      data = JSON.parse(cachedValue);
    }
  } catch (error) {
    errHandler(error);
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
 * The function will invoke the errHandler if any object contains an attribute
 * named `error`.
 *
 * Returns: The fetched object or null if an Error occurs.
 */
async function fetchObjFromJSON(url, errHandler = errorHandler) {
  console.debug(`Fetching from ${url}.`);
  let data = null;

  try {
    const resp = await respCheckedFetch(url);
    data = await resp.json();

    if (data instanceof Array) {
      data.forEach((item) => {
        objValidation(item);
      });
    } else if (typeof data === "object") {
      objValidation(data);
    }
  } catch (error) {
    errHandler(error);
  }

  return data;
}

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

/*
 * Purpose: Uses the provided errorHandler as the function to trigger upon
 * exceptions in async functions.
 *
 * Details: The provided `errorHandler` will be passed an Error whenever a
 * exception occurs in an async function.
 *
 * If a falsy value is passed to the function, the original
 * errorHandler will be set.
 *
 * Throws: An Error if the passed `errHandler` is neither a function nor a
 * falsy value.
 */
function setErrorHandler(errHandler) {
  if (typeof errHandler === "function") {
    errorHandler = errHandler;
  } else if (!errHandler) {
    errHandler = () => {};
  } else {
    throw new Error("Invalid errHandler passed to setErrorHandler().");
  }
}

export { fetchCachedObjFromJSON, fetchObjFromJSON, setErrorHandler };
