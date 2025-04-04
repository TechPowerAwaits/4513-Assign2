/*
 * Purpose: Provides functions for sorting retrieved data.
 *
 * Details: All the defaulting sorting schemes involve sorting by name. In the
 * case of artists, the last name is chosen.
 */
const dataSort = {
  artists: (a1, a2) => (a2.lastName > a1.lastName ? -1000 : 1000),
  galleries: (g1, g2) => (g2.galleryName > g1.galleryName ? -1000 : 1000),
  genres: (g1, g2) => (g2.genreName > g1.genreName ? -1000 : 1000),
  paintings: (p1, p2) => (p2.title > p1.title ? -1000 : 1000),
  shapes: (s1, s2) => (s2.shapeName > s1.shapeName ? -1000 : 1000),
};

/*
 * Purpose: Runs the given sortFunc against a data array.
 */
function sortFuncRunner(data, sortFunc, ascending = true) {
  return data.toSorted((d1, d2) => sortFunc(d1, d2) * (ascending ? 1 : -1));
}

export { dataSort, sortFuncRunner };
