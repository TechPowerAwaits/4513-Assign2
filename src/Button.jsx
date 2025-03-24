/*
 * Purpose: Provides stylized Button components.
 *
 * Details: The following components are provided:
 * Button.Primary -- meant for CTA buttons and the like.
 * Button.Secondary -- meant for all other buttons.
 */

class Button {
  static Primary({ className: passedClasses, children, ...props }) {
    return (
      <button
        className={`hover:scale-105 motion-reduce:hover:scale-100 border-2 border-transparent active:border-black hover:border-black cursor-pointer bg-tyrian-purple hover:bg-murrey text-ut-orange py-3 px-4 rounded-full ${passedClasses}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  static Secondary({ className: passedClasses, children, ...props }) {
    return (
      <button
        className={`hover:scale-105 motion-reduce:hover:scale-100 border-2 border-transparent active:border-black hover:border-black cursor-pointer bg-midnight-green hover:bg-caribbean-current text-ut-orange py-3 px-4 rounded-full ${passedClasses}`}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
