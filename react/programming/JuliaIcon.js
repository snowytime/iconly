import * as React from "react";
import { forwardRef } from "react";
const JuliaIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 27 24",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M11.803 18.1246C11.803 21.3841 9.155 24 5.90239 24C2.62894 24 0.00183105 21.3633 0.00183105 18.1246C0.00183105 14.8858 2.64979 12.2491 5.90239 12.2491C9.155 12.2284 11.803 14.8651 11.803 18.1246Z",
  fill: "#CB3C33"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26.0018 18.1246C26.0018 21.3841 23.3539 24 20.1013 24C16.8487 24 14.2007 21.3633 14.2007 18.1246C14.2007 14.8858 16.8487 12.2491 20.1013 12.2491C23.3539 12.2491 26.0018 14.8651 26.0018 18.1246Z",
  fill: "#9558B2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.9128 5.87543C18.9128 9.11419 16.2649 11.7509 13.0123 11.7509C9.7388 11.7509 7.11169 9.11419 7.11169 5.87543C7.11169 2.63668 9.7388 0 12.9914 0C16.2649 0 18.9128 2.63668 18.9128 5.87543Z",
  fill: "#389826"
}));
const ForwardRef = forwardRef(JuliaIcon);
export default ForwardRef;