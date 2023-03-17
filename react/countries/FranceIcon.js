import * as React from "react";
import { forwardRef } from "react";
const FranceIcon = ({
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
  d: "M12 24H0V0H12V24Z",
  fill: "#41479B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0H24V24H12V0Z",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 24H24V0H36V24Z",
  fill: "#FF4B55"
}));
const ForwardRef = forwardRef(FranceIcon);
export default ForwardRef;