import * as React from "react";
import { forwardRef } from "react";
const CzechRepublicIcon = ({
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
  d: "M0 0V24L18 12",
  fill: "#41479B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 24H36V12H18",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0H36V12H18",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(CzechRepublicIcon);
export default ForwardRef;