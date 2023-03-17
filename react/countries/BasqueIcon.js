import * as React from "react";
import { forwardRef } from "react";
const BasqueIcon = ({
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
  d: "M36 2.265V0H32.602L18 9.735L3.398 0H0V2.265L14.602 12L0 21.735V24H3.398L18 14.265L32.602 24H36V21.735L21.398 12L36 2.265Z",
  fill: "#73AF00"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 10.421H19.552V0H16.448V10.421H0V13.579H16.448V24H19.552V13.579H36V10.421Z",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(BasqueIcon);
export default ForwardRef;