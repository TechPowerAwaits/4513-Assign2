/*
 * Purpose: Provides a hook for toggling between two boolean states.
 */

import { useState } from "react";

/*
 * Purpose: Provides a togglable state.
 *
 * Returns: An array containing the following:
 *
 * Idx:    Description:
 * 0       A boolean value
 * 1       A function to toggle the value within index 0.
 */
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  return [
    value,
    () => {
      setValue(!value);
    },
  ];
}

export default useToggle;
