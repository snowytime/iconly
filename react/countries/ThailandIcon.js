import * as React from "react";
import { forwardRef } from "react";
const ThailandIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 36 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M35.4 24H0.6C0.3 24 0 23.7 0 23.4V0.6C0 0.3 0.3 0 0.6 0H35.4C35.7 0 36 0.3 36 0.6V23.3C36 23.7 35.7 24 35.4 24Z",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 3.8H0V0H36V3.8ZM0 20.2V24H36V20.2H0Z",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 7.6H36V16.4H0V7.6Z",
  fill: "#41479B"
}));
const ForwardRef = forwardRef(ThailandIcon);
export default ForwardRef;