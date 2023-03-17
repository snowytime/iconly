import * as React from "react";
import { forwardRef } from "react";
const LatviaIcon = ({
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
  d: "M0 14.194H36V24H0V14.194ZM0 0V9.806H36V0H0Z",
  fill: "#C8414B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 9.79H36V14.194H0V9.79Z",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(LatviaIcon);
export default ForwardRef;