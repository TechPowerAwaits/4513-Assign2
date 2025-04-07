/*
 * Purpose: Provides access to data.
 */

import { createContext } from "react";

const DataContext = createContext(null);

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

export { DataContext, genreTestData };
