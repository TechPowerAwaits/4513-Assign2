/*
 * Purpose: Provides a styled component for hyperlinks.
 */

function Hyperlink({ href = "#", children, ...props }) {
  return (
    <a
      className="underline text-ut-orange visited:text-spanish-orange hover:text-sandy-brown"
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}

export default Hyperlink;
