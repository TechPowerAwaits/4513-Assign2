import { useNavigate } from "react-router";
import Button from "./components/Button";
import H from "./components/H";

function NotFound() {
  const navTo = useNavigate();
  return (
    <article>
      <H.L2>We are Lost!</H.L2>
      <p className="text-center text-lg">
        We are unable to find the content you seek.
      </p>

      <Button.Primary
        className="mx-auto block"
        type="button"
        onClick={() => navTo("/")}
      >
        Head Home
      </Button.Primary>
    </article>
  );
}

export default NotFound;
