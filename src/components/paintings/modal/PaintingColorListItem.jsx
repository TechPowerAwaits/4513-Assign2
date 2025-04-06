function PaintingColorListItem({ dominantColor }) {
  return (
    <li>
      <div
        className="min-w-6 min-h-6"
        title={dominantColor.name}
        style={{ backgroundColor: dominantColor.web }}
      />
    </li>
  );
}

export default PaintingColorListItem;
