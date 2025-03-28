/*
 * Purpose: Provides access to data.
 */

import { createContext } from "react";

const dataContext = createContext(null);

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

const artistTestData = [
  {
    artistId: 0,
    firstName: "Billy",
    lastName: "Starving",
    nationality: "Canada",
    gender: "M",
    yearOfBirth: 2000,
    yearOfDeath: 2025,
    details: "Billy Starving is a starving artist.",
    artistLink: "https://en.wikipedia.org/wiki/Dark_Tranquillity",
  },
];

const genreTestData = [
  {
    genreId: 0,
    genreName: "Richardism",
    Eras: { eraId: 0, eraName: "Fictional", eraYears: "Never" },
    description:
      "Richardism is a recently introduced genre of art for the inquiring mind.",
    wikiLink: "https://en.wikipedia.org/wiki/The_Halo_Effect_(band)",
  },
];

const paintingsTestData = [
  {
    paintingId: 0,
    Artists: {
      artistId: 0,
      firstName: "Billy",
      lastName: "Starving",
      nationality: "Canada",
      gender: "M",
      yearOfBirth: 2000,
      yearOfDeath: 2025,
      details: "Billy Starving is a starving artist.",
      artistLink: "https://en.wikipedia.org/wiki/Dark_Tranquillity",
    },
    Galleries: {
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
    imageFileName: -1,
    title: "A picture of a moose",
    Shapes: { shapeId: 0, shapeName: "Diamond" },
    museumLink: "https://en.wikipedia.org/wiki/In_Flames",
    accessionNumber: "",
    copyrightText: "CC0-1.0",
    description: "",
    excerpt: "",
    yearOfWork: 2025,
    width: 10,
    height: 10,
    medium: "Finger painting",
    cost: 5,
    MSRP: 50,
    googleLink: "",
    googleDescription: "",
    wikiLink: "",
    jsonAnnotations: {
      safeSearchAnnotation: { violence: 1, racy: 1 },
      dominantColors: [
        {
          color: { red: 97, green: 15, blue: 66 },
          web: "#610f42",
          name: "Tyrian Purple",
        },
        {
          color: { red: 124, green: 19, blue: 84 },
          web: "#7c1354",
          name: "Murrey",
        },
        {
          color: { red: 98, green: 86, blue: 93 },
          web: "#f9dcee",
          name: "Mimi Pink",
        },
        {
          color: { red: 153, green: 170, blue: 187 },
          web: "#9b031f",
          name: "Carmine",
        },
        {
          color: { red: 251, green: 55, blue: 91 },
          web: "#fb375b",
          name: "Folly",
        },
        {
          color: { red: 153, green: 170, blue: 187 },
          web: "#fb8b23",
          name: "UT Orange",
        },
      ],
    },
  },
];

export {
  dataContext,
  galleryTestData,
  artistTestData,
  genreTestData,
  paintingsTestData,
};
