import * as React from "react";
import { forwardRef } from "react";
const ScotlandIcon = ({
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
  d: "M0 0V24H36V0",
  fill: "#4173CD"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 2.265V0H32.602L18 9.735L3.398 0H0V2.265L14.602 12L0 21.735V24H3.398L18 14.265L32.602 24H36V21.735L21.398 12L36 2.265Z",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(ScotlandIcon);
export default ForwardRef;