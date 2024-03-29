import * as React from "react";
import { forwardRef } from "react";
const AppleIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 20 24",
  fill: "none",
  color: "rgb(var(--foreground, 0, 0, 0))",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M16.7032 12.7505C16.7376 16.3823 19.9642 17.5911 19.9998 17.6065C19.9725 17.6915 19.4844 19.329 18.3001 21.0199C17.2763 22.4819 16.2136 23.9385 14.54 23.969C12.8954 23.9984 12.3666 23.0159 10.4861 23.0159C8.6063 23.0159 8.0189 23.9385 6.46192 23.9984C4.84623 24.0583 3.61587 22.4172 2.58363 20.9608C0.474445 17.9811 -1.13749 12.5409 1.02685 8.86867C2.102 7.04501 4.02375 5.89036 6.10941 5.86061C7.69584 5.83105 9.1933 6.90341 10.1631 6.90341C11.1323 6.90341 12.952 5.61372 14.865 5.80304C15.666 5.83569 17.9139 6.11909 19.3574 8.18383C19.2414 8.25434 16.6753 9.71404 16.7032 12.7505M13.6123 3.83199C14.47 2.81758 15.0473 1.40502 14.8899 0C13.6535 0.048489 12.1584 0.804995 11.2716 1.81902C10.4768 2.71674 9.7809 4.15402 9.96853 5.53123C11.3468 5.63555 12.7545 4.84697 13.6123 3.83199",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(AppleIcon);
export default ForwardRef;