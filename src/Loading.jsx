import loadingImg from "./assets/Loading.png";

function Loading() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Loading...</h2>
      <img
        src={loadingImg}
        alt="Loading..."
        className="motion-safe:animate-[spin_1.5s_infinite] mt-8.5 ml-auto mr-auto"
      />
    </div>
  );
}

export default Loading;
