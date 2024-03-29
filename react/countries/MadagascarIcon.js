import * as React from "react";
import { forwardRef } from "react";
const MadagascarIcon = ({
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
  d: "M36 12.517H11.412V0H36V12.517Z",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.793 12H36V24H11.793V12Z",
  fill: "#73AF00"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.793 0V24H0V0H11.793Z",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(MadagascarIcon);
export default ForwardRef;