import * as React from "react";
import { forwardRef } from "react";
const UnitedArabEmiratesIcon = ({
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
  d: "M36 8H10.916V0H36V8Z",
  fill: "#73AF00"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 24H11.172V16H36V24Z",
  fill: "#464655"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.173 8H36V16H11.173V8Z",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.172 24H0V0H11.172V24Z",
  fill: "#FF4B55"
}));
const ForwardRef = forwardRef(UnitedArabEmiratesIcon);
export default ForwardRef;