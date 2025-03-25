/*
 * Purpose: Provides a component for providing a nice animation while something
 * is loading.
 */

import loadingImg from "../assets/Loading.png";

/*
 * Purpose: Provides a Loading animation.
 */
function Loading() {
  return (
    <figure className="space-y-8.5">
      <img
        src={loadingImg}
        alt="Loading..."
        className="motion-safe:animate-[spin_1.5s_infinite] mx-auto"
      />
      <figcaption className="text-2xl font-bold text-center">
        Loading...
      </figcaption>
    </figure>
  );
}

export default Loading;
