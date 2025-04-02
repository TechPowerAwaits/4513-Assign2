/*
 * Purpose: Provides an img element with a fallback img if the src cannot be
 * loaded.
 */

import MissingContent from "../assets/MissingContent.png";

/*
 * Purpose: Provides an img element with a fallback.
 *
 * Details: If the fallback is not set with the `fallback` attribute, a default
 * fallback image will be used.
 *
 * All attributes supported by the img element is supported by this element.
 */
function ImageWithFallback({ fallback = MissingContent, ...props }) {
  return <img onError={(e) => (e.target.src = fallback)} {...props} />;
}

export default ImageWithFallback;
