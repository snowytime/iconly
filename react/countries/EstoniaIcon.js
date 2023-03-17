import * as React from "react";
import { forwardRef } from "react";
const EstoniaIcon = ({
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
  fill: "#4173CD"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 24H0V16H36V24Z",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 8H36V16H0V8Z",
  fill: "#464655"
}));
const ForwardRef = forwardRef(EstoniaIcon);
export default ForwardRef;