import * as React from "react";
import { forwardRef } from "react";
const ConeFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 16 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.000976562 14.2891C0.000976562 14.7526 0.197133 15.1797 0.589446 15.5703C0.98706 15.9609 1.54372 16.2995 2.25943 16.5859C2.98043 16.8776 3.82603 17.1016 4.79621 17.2578C5.77169 17.4193 6.83994 17.5 8.00098 17.5C9.16201 17.5 10.2276 17.4193 11.1978 17.2578C12.1733 17.1016 13.0189 16.8776 13.7346 16.5859C14.4556 16.2995 15.0122 15.9609 15.4046 15.5703C15.8022 15.1797 16.001 14.7526 16.001 14.2891C16.001 14.1641 15.9718 14.0156 15.9135 13.8438C15.8605 13.6667 15.7889 13.4948 15.6988 13.3281L8.74849 0.960938C8.64246 0.768229 8.52318 0.643229 8.39064 0.585937C8.2581 0.528646 8.12821 0.5 8.00098 0.5C7.87374 0.5 7.74385 0.528646 7.61131 0.585937C7.47878 0.643229 7.35949 0.768229 7.25346 0.960938L0.303163 13.3281C0.101706 13.6927 0.000976562 14.013 0.000976562 14.2891Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ConeFillIcon);
export default ForwardRef;