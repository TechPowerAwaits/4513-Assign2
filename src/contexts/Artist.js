/*
 * Purpose: Provides contexts and examples specific to Artist data.
 */

import { createContext } from "react";

const SelectedArtistContext = createContext(null);

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

export { SelectedArtistContext, artistTestData };
