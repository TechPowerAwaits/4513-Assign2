/*
 * Purpose: Provides a components that handles errors.
 */

import Button from "./Button";
import H from "./H";

function ErrorHandler({ errToggle }) {
  return (
    <article>
      <H.L2>An Error has Occurred</H.L2>
      <Button.Primary className="mx-auto" onclick={() => errToggle()}>
        Retry
      </Button.Primary>
    </article>
  );
}

export default ErrorHandler;
