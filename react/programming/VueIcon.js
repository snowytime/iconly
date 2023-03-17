import * as React from "react";
import { forwardRef } from "react";
const VueIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 29 24",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M5.73872 0.100017L10.7704 0.101978L14.0595 5.54039L17.3371 0.102414L22.3644 0.101107L14.0847 14.4075L5.73872 0.100017Z",
  fill: "#35495E"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0.250942 0.138368L5.73435 0.100889L14.0797 14.4081L22.36 0.10176L27.8528 0.107426L14.079 23.654L0.250942 0.138368Z",
  fill: "#41B883"
}));
const ForwardRef = forwardRef(VueIcon);
export default ForwardRef;