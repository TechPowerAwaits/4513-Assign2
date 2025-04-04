/*
 * Purpose: Provides a context for maintaining what entity is performing
 * sorting.
 */

import { createContext } from "react";

const CurrentSortContext = createContext(null);

export { CurrentSortContext };
