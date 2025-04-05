/*
 * Purpose: Provides access to data.
 */

import { createContext } from "react";

const DataContext = createContext(null);

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

export { DataContext, artistTestData, genreTestData };
