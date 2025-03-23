/*
 * Purpose: Provides stylized versions of Section Headers.
 *
 * Details: It is not possible to override the default styling.
 *
 * Each level of section header can be accessed via H.L{level}.
 * For example H.L1 will be a stylized version of h1.
 *
 * A testing component, H.DisplayAll is provided. It displays all
 * the stylized Section Headers to the screen with paragraphs to
 * get a sense on what they look like.
 */

class H {
  static L1({ children }) {
    return (
      <h1 className="text-yellow-400 text-3xl font-bold text-center">
        {children}
      </h1>
    );
  }

  static L2({ children }) {
    return (
      <h2 className="text-yellow-400 text-2xl font-bold text-center">
        {children}
      </h2>
    );
  }

  static L3({ children }) {
    return (
      <h3 className="text-yellow-400 text-xl font-bold text-center">
        {children}
      </h3>
    );
  }

  static L4({ children }) {
    return (
      <h4 className="text-yellow-400 text-lg font-bold text-center">
        {children}
      </h4>
    );
  }

  static L5({ children }) {
    return (
      <h5 className="text-yellow-400 underline font-bold text-center">
        {children}
      </h5>
    );
  }

  static L6({ children }) {
    return (
      <h6 className="text-yellow-400 underline font-medium text-center">
        {children}
      </h6>
    );
  }

  static DisplayAll() {
    return (
      <article>
        <H.L1>This is H1.</H.L1>
        <p>Lorem ipsum dolor sit amet.</p>
        <H.L2>This is H2.</H.L2>
        <p>Lorem ipsum dolor sit amet.</p>
        <H.L3>This is H3.</H.L3>
        <p>Lorem ipsum dolor sit amet.</p>
        <H.L4>This is H4.</H.L4>
        <p>Lorem ipsum dolor sit amet.</p>
        <H.L5>This is H5</H.L5>
        <p>Lorem ipsum dolor sit amet.</p>
        <H.L6>This is H6</H.L6>
        <p>Lorem ipsum dolor sit amet.</p>
      </article>
    );
  }
}

export default H;
