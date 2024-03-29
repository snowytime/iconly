import * as React from "react";
import { forwardRef } from "react";
const MauritusIcon = ({
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
  d: "M36 6H0V0H36V6Z",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 6H36V12H0V6Z",
  fill: "#41479B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 12H36V18H0V12Z",
  fill: "#FFE15A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 24H0V18H36V24Z",
  fill: "#73AF00"
}));
const ForwardRef = forwardRef(MauritusIcon);
export default ForwardRef;