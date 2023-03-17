import * as React from "react";
import { forwardRef } from "react";
const GambiaIcon = ({
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
  d: "M0 15.79H36V24H0V15.79Z",
  fill: "#73AF00"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0H36V8.21H0V0Z",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 8.21H36V15.789H0V8.21Z",
  fill: "#41479B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 8.21V9.473H0V8.21H36ZM0 15.79H36V14.526H0V15.79Z",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(GambiaIcon);
export default ForwardRef;