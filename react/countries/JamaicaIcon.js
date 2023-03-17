import * as React from "react";
import { forwardRef } from "react";
const JamaicaIcon = ({
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
  fill: "#73AF00"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 2.265L14.602 12L0 21.735V24H3.398L18 14.265L32.602 24H36V21.735L21.398 12L36 2.265V0H32.602L18 9.735L3.398 0H0",
  fill: "#FFE15A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 2.265V21.735L21.398 12L36 2.265ZM0 21.735L14.602 12L0 2.265V21.735Z",
  fill: "#464655"
}));
const ForwardRef = forwardRef(JamaicaIcon);
export default ForwardRef;