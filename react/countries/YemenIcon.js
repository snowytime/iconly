import * as React from "react";
import { forwardRef } from "react";
const YemenIcon = ({
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
  d: "M0 16H36V24H0V16Z",
  fill: "#464655"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0H36V8H0V0Z",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 8H36V16H0V8Z",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(YemenIcon);
export default ForwardRef;