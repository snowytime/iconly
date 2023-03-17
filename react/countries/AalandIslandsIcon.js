import * as React from "react";
import { forwardRef } from "react";
const AalandIslandsIcon = ({
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
  d: "M36 8.842H16.138V0H9.931V8.842H0V15.158H9.931V24H16.138V15.158H36V8.842Z",
  fill: "#FFE15A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 10.737H14.276V0H11.793V10.737H0V13.263H11.793V24H14.276V13.263H36V10.737Z",
  fill: "#FF4B55"
}));
const ForwardRef = forwardRef(AalandIslandsIcon);
export default ForwardRef;