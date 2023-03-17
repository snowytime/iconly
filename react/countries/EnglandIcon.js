import * as React from "react";
import { forwardRef } from "react";
const EnglandIcon = ({
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
  d: "M36 10.105H19.862V0H16.138V10.105H0V13.895H16.138V24H19.862V13.895H36V10.105Z",
  fill: "#FF4B55"
}));
const ForwardRef = forwardRef(EnglandIcon);
export default ForwardRef;