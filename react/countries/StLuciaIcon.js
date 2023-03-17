import * as React from "react";
import { forwardRef } from "react";
const StLuciaIcon = ({
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
  fill: "#3CC8FF"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 1.895L9.31 22.105H26.69L18 1.895Z",
  fill: "#464655"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 5.046L24.791 20.842H11.208L18 5.046ZM18 1.895L9.31 22.105H26.69L18 1.895Z",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.31 22.105L18 12L26.69 22.105H9.31Z",
  fill: "#FFE15A"
}));
const ForwardRef = forwardRef(StLuciaIcon);
export default ForwardRef;