import * as React from "react";
import { forwardRef } from "react";
const ArubaIcon = ({
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
  fill: "#4173CD"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 16.42V17.684H0V16.421L36 16.42ZM0 20.21H36V18.947H0V20.21Z",
  fill: "#FFE15A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.587 6.272L2.277 5.47L4.587 4.667L5.375 2.317L6.164 4.667L8.474 5.47L6.164 6.272L5.375 8.622L4.587 6.272Z",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.375 2.74L6.058 4.775L8.058 5.47L6.058 6.165L5.375 8.2L4.692 6.165L2.692 5.47L4.692 4.775L5.375 2.74ZM5.375 1.895L4.481 4.56L1.862 5.47L4.481 6.38L5.375 9.044L6.269 6.38L8.889 5.47L6.27 4.56L5.63 2.652L5.375 1.895Z",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(ArubaIcon);
export default ForwardRef;