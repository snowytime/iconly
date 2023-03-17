import * as React from "react";
import { forwardRef } from "react";
const GermanyIcon = ({
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
  d: "M36 8H0V0H36V8Z",
  fill: "#464655"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 24H0V16H36V24Z",
  fill: "#FFE15A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 8H36V16H0V8Z",
  fill: "#FF4B55"
}));
const ForwardRef = forwardRef(GermanyIcon);
export default ForwardRef;