/*
 * Purpose: Provides common functionality and styling for Input elements
 * through new components.
 *
 * Details: When appropriate, the autoComplete attribute is set. Except for the
 * basic wrappers, changing that attribute is not supported.
 *
 * The manualInvalidStyling attribute is supported. When passed, the default
 * styling that occurs when invalid content is entered will be removed.
 *
 * The FormField component contains nested components. The base FormField
 * component is a basic wrapper over the input element that provides some
 * styling.
 *
 * As follow are all the components/functionality that is nested within
 * FormField:
 * > Text -- A basic wrapper over Input whose type is "text".
 *    > User -- A FormField for entering usernames.
 *    > Name -- A FormField for entering a person's name.
 * > Password -- A basic wrapper over Input whose type is "password".
 *    > Current -- A FormField for entering a pre-existing password.
 *    > New -- A FormField for creating a new password.
 * > Email -- A basic wrapper over Input whose type is "email".
 */

function FormField({
  className: passedClasses,
  children,
  manualInvalidStyling,
  ...props
}) {
  const invalidStyling = manualInvalidStyling
    ? ""
    : "[&:user-invalid]:bg-folly";
  return (
    <input
      className={`bg-light-cyan text-black disabled:bg-gray ${invalidStyling} ${passedClasses ? passedClasses : ""}`}
      {...props}
    >
      {children}
    </input>
  );
}

/********/
/* Text */
/********/

FormField.Text = function (props) {
  return <FormField type="text" {...props}></FormField>;
};

FormField.Text.User = function (props) {
  return <FormField.Text autoComplete="username" {...props}></FormField.Text>;
};

FormField.Text.Name = function (props) {
  return <FormField.Text autoComplete="name" {...props}></FormField.Text>;
};

/************/
/* Password */
/************/

FormField.Password = function (props) {
  return <FormField type="password" {...props}></FormField>;
};

FormField.Password.Current = function (props) {
  return (
    <FormField.Password
      autoComplete="current-password"
      {...props}
    ></FormField.Password>
  );
};

FormField.Password.New = function (props) {
  return (
    <FormField.Password
      autoComplete="new-password"
      {...props}
    ></FormField.Password>
  );
};

/*********/
/* Email */
/*********/

FormField.Email = function (props) {
  return <FormField type="email" autoComplete="email" {...props}></FormField>;
};

export default FormField;
