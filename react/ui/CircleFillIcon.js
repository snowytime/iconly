import * as React from "react";
import { forwardRef } from "react";
const CircleFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M8 16C9.09281 16 10.1203 15.7909 11.0824 15.3726C12.0497 14.9542 12.902 14.3765 13.6392 13.6392C14.3765 12.902 14.9542 12.0523 15.3726 11.0902C15.7909 10.1229 16 9.09281 16 8C16 6.90719 15.7909 5.87974 15.3726 4.91765C14.9542 3.95033 14.3765 3.09804 13.6392 2.36078C12.902 1.62353 12.0497 1.04575 11.0824 0.627451C10.115 0.20915 9.08497 0 7.99216 0C6.89935 0 5.86928 0.20915 4.90196 0.627451C3.93987 1.04575 3.0902 1.62353 2.35294 2.36078C1.62092 3.09804 1.04575 3.95033 0.627451 4.91765C0.20915 5.87974 0 6.90719 0 8C0 9.09281 0.20915 10.1229 0.627451 11.0902C1.04575 12.0523 1.62353 12.902 2.36078 13.6392C3.09804 14.3765 3.94771 14.9542 4.9098 15.3726C5.87712 15.7909 6.90719 16 8 16Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CircleFillIcon);
export default ForwardRef;