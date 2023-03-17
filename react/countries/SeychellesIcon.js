import * as React from "react";
import { forwardRef } from "react";
const SeychellesIcon = ({
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
}, title) : null, /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#clip0_6_1534)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M36 24V16L0 24",
  fill: "#73AF00"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 24L12 0H0",
  fill: "#41479B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 0H12L0 24",
  fill: "#FFE15A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 8V0H24L0 24",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 24L36 16V8",
  fill: "#F5F5F5"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "clip0_6_1534"
}, /*#__PURE__*/React.createElement("rect", {
  width: 36,
  height: 24,
  fill: "white"
}))));
const ForwardRef = forwardRef(SeychellesIcon);
export default ForwardRef;