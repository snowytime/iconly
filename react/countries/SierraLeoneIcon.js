import * as React from "react";
import { forwardRef } from "react";
const SierraLeoneIcon = ({
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
  fill: "#41479B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 8H0V0H36",
  fill: "#73AF00"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 8H36V16H0V8Z",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(SierraLeoneIcon);
export default ForwardRef;