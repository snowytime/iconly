import * as React from "react";
import { forwardRef } from "react";
const SudanIcon = ({
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
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 24H0V16H36V24Z",
  fill: "#464655"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 8H36V16H0V8Z",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 24L14.491 12.327C14.5394 12.2873 14.5783 12.2374 14.6051 12.1809C14.6318 12.1243 14.6457 12.0626 14.6457 12C14.6457 11.9374 14.6318 11.8757 14.6051 11.8191C14.5783 11.7626 14.5394 11.7127 14.491 11.673L0 0",
  fill: "#73AF00"
}));
const ForwardRef = forwardRef(SudanIcon);
export default ForwardRef;