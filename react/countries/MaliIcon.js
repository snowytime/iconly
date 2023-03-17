import * as React from "react";
import { forwardRef } from "react";
const MaliIcon = ({
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
  d: "M24.0001 0H36.0001V24H24.0001V0Z",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.0001 0H24.0001V24H12.0001V0Z",
  fill: "#FFE15A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.10352e-05 0H12.0001V24H6.10352e-05V0Z",
  fill: "#73AF00"
}));
const ForwardRef = forwardRef(MaliIcon);
export default ForwardRef;