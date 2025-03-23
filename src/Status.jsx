import H from "./H";

function Status({ msg, isErr = false, className: passedClasses }) {
  return (
    <section
      className={`${isErr ? "bg-red-700" : "bg-blue-700"} text-yellow-400 text-center px-3 py-1 rounded-3xl ${passedClasses}`}
    >
      <H.L4>Status:</H.L4>
      {msg}
    </section>
  );
}

export default Status;
