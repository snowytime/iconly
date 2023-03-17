import * as React from "react";
import { forwardRef } from "react";
const IndonesiaIcon = ({
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
  d: "M36 12H0V0H36V12Z",
  fill: "#C8414B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 12H36V24H0V12Z",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(IndonesiaIcon);
export default ForwardRef;