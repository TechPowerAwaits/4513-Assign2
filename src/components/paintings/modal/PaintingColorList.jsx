import H from "../../H";
import PaintingColorListItem from "./PaintingColorListItem";

function PaintingColorList({ dominantColors, ...props }) {
  return (
    <section {...props}>
      <H.L3>Dominant Colors:</H.L3>
      <ul className="flex gap-x-1 justify-center-safe">
        {dominantColors.map((dominantColor) => (
          <PaintingColorListItem
            dominantColor={dominantColor}
            key={dominantColor.web}
          />
        ))}
      </ul>
    </section>
  );
}

export default PaintingColorList;
