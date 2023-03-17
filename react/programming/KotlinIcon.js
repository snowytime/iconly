import * as React from "react";
import { forwardRef } from "react";
const KotlinIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 24 24",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M-0.000244141 0H12.2623L-0.000244141 12.075V0Z",
  fill: "#1C93C1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23.9998 24L12.1123 11.7375L-0.000244141 24H23.9998Z",
  fill: "#1C93C1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M-0.000244141 24L23.9998 0H12.1123L-0.000244141 11.9438V24Z",
  fill: "#F48912"
}));
const ForwardRef = forwardRef(KotlinIcon);
export default ForwardRef;