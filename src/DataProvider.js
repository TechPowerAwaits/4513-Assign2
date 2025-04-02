import { fetchCachedObjFromJSON } from "./fetchHandler";

class DataProvider {
  static async acquire(dataProviders) {
    if (!(dataProviders instanceof Array)) {
      dataProviders = [dataProviders];
    }

    const returnObj = {};

    await Promise.all(
      dataProviders.map(async (dataProvider) => {
        if (!dataProvider.stateVar) {
          const subObj = await fetchCachedObjFromJSON(
            dataProvider.key,
            dataProvider.url
          );

          returnObj[dataProvider.key] = subObj;
        }
      })
    );

    return returnObj;
  }
  constructor(key, url) {
    this.key = key;
    this.url = url;
  }
}

export default DataProvider;
