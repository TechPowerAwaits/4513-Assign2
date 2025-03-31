/*
 * Purpose: Provides contexts and examples specific to Gallery data.
 */

import { createContext } from "react";

const SelectedGalleryContext = createContext(null);

/*
 * Purpose: Provides an example Gallery.
 */
const galleryTestData = [
  {
    galleryId: 0,
    galleryName: "Test",
    galleryNativeName: "Native Test",
    galleryCity: "City",
    galleryAddress: "1234 Address Road",
    galleryCountry: "Country",
    latitude: 0.0,
    longitude: 0.0,
    galleryWebSite: "https://en.wikipedia.org/wiki/Main_Page",
    flickrPlaceId: "aaa",
    yahooWoeId: -1,
    googlePlaceId: 0,
  },
];

export { galleryTestData, SelectedGalleryContext };
