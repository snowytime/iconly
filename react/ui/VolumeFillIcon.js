import * as React from "react";
import { forwardRef } from "react";
const VolumeFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 10 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M9.0512 14.5C9.33108 14.5 9.5578 14.4153 9.73132 14.246C9.91045 14.0767 10 13.8651 10 13.6111V1.43651C10 1.17725 9.91045 0.957672 9.73132 0.777778C9.5522 0.592593 9.31989 0.5 9.03441 0.5C8.83849 0.5 8.66217 0.542328 8.50544 0.626984C8.3487 0.71164 8.16399 0.851852 7.95128 1.04762L4.37441 4.22222C4.31843 4.26984 4.24845 4.29365 4.16449 4.29365H1.75484C1.18948 4.29365 0.755679 4.4418 0.453408 4.7381C0.151137 5.0291 0 5.46032 0 6.03175V8.98413C0 9.56085 0.151137 9.99471 0.453408 10.2857C0.755679 10.5767 1.18948 10.7222 1.75484 10.7222H4.16449C4.24845 10.7222 4.31843 10.746 4.37441 10.7937L7.95128 14C8.14159 14.1746 8.32352 14.3016 8.49704 14.381C8.67057 14.4603 8.85529 14.5 9.0512 14.5Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(VolumeFillIcon);
export default ForwardRef;