import * as React from "react";
import { forwardRef } from "react";
const BeninIcon = ({
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
  d: "M36 12H8.96V0H36V12Z",
  fill: "#FFE15A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.96 12H36V24H8.96V12Z",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 24H0V0H12V24Z",
  fill: "#73AF00"
}));
const ForwardRef = forwardRef(BeninIcon);
export default ForwardRef;