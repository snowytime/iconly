import * as React from "react";
import { forwardRef } from "react";
const NigeriaIcon = ({
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
  d: "M0 0H12V24H0V0ZM24 0V24H36V0H24Z",
  fill: "#73AF00"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0H24V24H12V0Z",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(NigeriaIcon);
export default ForwardRef;