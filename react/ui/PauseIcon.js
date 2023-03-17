import * as React from "react";
import { forwardRef } from "react";
const PauseIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 7 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.715144 13C0.917067 13 1.08814 12.937 1.22837 12.8111C1.36859 12.6852 1.4387 12.5305 1.4387 12.3469V0.661017C1.4387 0.472155 1.36859 0.31477 1.22837 0.188862C1.08814 0.062954 0.917067 0 0.715144 0C0.51883 0 0.350561 0.062954 0.210337 0.188862C0.0701122 0.31477 0 0.472155 0 0.661017V12.3469C0 12.5305 0.0701122 12.6852 0.210337 12.8111C0.350561 12.937 0.51883 13 0.715144 13ZM6.27644 13C6.47837 13 6.64944 12.937 6.78966 12.8111C6.92989 12.6852 7 12.5305 7 12.3469V0.661017C7 0.472155 6.92989 0.31477 6.78966 0.188862C6.64944 0.062954 6.47837 0 6.27644 0C6.08013 0 5.91186 0.062954 5.77164 0.188862C5.63141 0.31477 5.5613 0.472155 5.5613 0.661017V12.3469C5.5613 12.5305 5.63141 12.6852 5.77164 12.8111C5.91186 12.937 6.08013 13 6.27644 13Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(PauseIcon);
export default ForwardRef;