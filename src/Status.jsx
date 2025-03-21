function Status({ msg, isErr = false, className: passedClasses }) {
  return (
    <section
      className={`${isErr ? "bg-red-700" : "bg-blue-700"} text-yellow-400 text-center ${passedClasses}`}
    >
      <h2 className="text-xl font-bold">Status:</h2>
      {msg}
    </section>
  );
}

export default Status;
