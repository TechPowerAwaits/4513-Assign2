import { fetchCachedObjFromJSON } from "./fetchHandler";

class DataProvider {
  static acquire(dataProviders) {
    if (!(dataProviders instanceof Array)) {
      dataProviders = [dataProviders];
    }

    Promise.all(
      dataProviders.map(async (dataProvider) => {
        if (!dataProvider.stateVar) {
          fetchCachedObjFromJSON(
            dataProvider.key,
            dataProvider.url,
            dataProvider.stateSetter
          );
        }
      })
    );
  }
  constructor(key, url, stateArr) {
    this.key = key;
    this.url = url;
    this.stateVar = stateArr[0];
    this.stateSetter = stateArr[1];
  }
}

export default DataProvider;
