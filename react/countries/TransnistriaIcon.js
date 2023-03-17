import * as React from "react";
import { forwardRef } from "react";
const TransnistriaIcon = ({
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
  d: "M36 24H0V0H36",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 9.158H36V14.842H0V9.158Z",
  fill: "#73AF00"
}));
const ForwardRef = forwardRef(TransnistriaIcon);
export default ForwardRef;