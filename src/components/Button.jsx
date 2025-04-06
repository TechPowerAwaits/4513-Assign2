/*
 * Purpose: Provides stylized Button components.
 *
 * Details: The following components are provided:
 * Button.Primary -- meant for CTA buttons and the like.
 * Button.Secondary -- meant for all other buttons.
 * Button.Terminate -- meant for cancel buttons. Contains an X by default if no
 * children are provided.
 * Button.SetFavorite -- meant for favorite setting buttons. Contains the
 * outline of a star by default if no children are provided.
 */

class Button {
  static Primary({ className: passedClasses, children, ...props }) {
    return (
      <button
        className={`hover:scale-105 motion-reduce:hover:scale-100 border-2 border-transparent disabled:bg-gray disabled:cursor-not-allowed active:border-black hover:border-black cursor-pointer bg-tyrian-purple hover:bg-murrey text-ut-orange py-3 px-4 rounded-full max-w-fit ${passedClasses ? passedClasses : ""}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  static Secondary({ className: passedClasses, children, ...props }) {
    return (
      <button
        className={`hover:scale-105 motion-reduce:hover:scale-100 border-2 border-transparent disabled:bg-gray disabled:cursor-not-allowed active:border-black hover:border-black cursor-pointer bg-midnight-green hover:bg-caribbean-current text-ut-orange py-3 px-4 rounded-full max-w-fit ${passedClasses ? passedClasses : ""}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  static Terminate({
    className: passedClasses,
    children = <span className="font-bold">X</span>,
    ...props
  }) {
    return (
      <button
        className={`hover:scale-105 motion-reduce:hover:scale-100 border-2 border-transparent disabled:bg-gray disabled:cursor-not-allowed active:border-black hover:border-black cursor-pointer bg-carmine hover:bg-folly text-ut-orange py-3 px-4 rounded-full max-w-fit ${passedClasses ? passedClasses : ""}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  static SetFavorite({
    className: passedClasses,
    children = <span className="font-bold">&#9734;</span>,
    ...props
  }) {
    return (
      <button
        className={`hover:scale-105 motion-reduce:hover:scale-100 border-2 border-transparent disabled:bg-gray disabled:cursor-not-allowed active:border-black hover:border-black cursor-pointer bg-midnight-green hover:bg-caribbean-current text-ut-orange py-3 px-4 rounded-full max-w-fit ${passedClasses ? passedClasses : ""}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  static RemoveFavorite({
    className: passedClasses,
    children = <span className="font-bold">&#9733;</span>,
    ...props
  }) {
    return (
      <button
        className={`hover:scale-105 motion-reduce:hover:scale-100 border-2 border-transparent disabled:bg-gray disabled:cursor-not-allowed active:border-black hover:border-black cursor-pointer bg-carmine hover:bg-folly text-ut-orange py-3 px-4 rounded-full max-w-fit ${passedClasses ? passedClasses : ""}`}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
