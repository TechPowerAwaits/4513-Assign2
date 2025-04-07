/*
 * Purpose: Provides a styled component for hyperlinks.
 */

function Hyperlink({
  href = "#",
  className: passedClasses = "",
  children,
  ...props
}) {
  return (
    <a
      className={`underline text-ut-orange visited:text-spanish-orange hover:text-sandy-brown ${passedClasses}`}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}

export default Hyperlink;
