import * as React from "react";
import { forwardRef } from "react";
const FinlandIcon = ({
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
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 10.105H14.897V0H11.172V10.105H0V13.895H11.172V24H14.897V13.895H36V10.105Z",
  fill: "#41479B"
}));
const ForwardRef = forwardRef(FinlandIcon);
export default ForwardRef;