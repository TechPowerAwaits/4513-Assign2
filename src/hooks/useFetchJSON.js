import { useEffect } from "react";

function useFetchJSON(url, setFunc) {
  console.debug("Entered useFetchJSON hook.");
  useEffect(() => {
    async function fetchObj() {
      try {
        console.debug(`Fetching from ${url}.`);
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error(`Fetch returned ${resp.status}`);
        }

        const data = await resp.json();

        if (data instanceof Array) {
          data.forEach((item) => {
            if (item.error) {
              throw new Error(item.error.message);
            }
          });
        }

        setFunc(data);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchObj();
  }, [url, setFunc]);
}

export default useFetchJSON;
