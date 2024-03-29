import * as React from "react";
import { forwardRef } from "react";
const HtmlIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 21 24",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M1.91116 21.6009L0 0H21L19.0867 21.5977L10.4872 24L1.91116 21.6009Z",
  fill: "#E44D26"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 22.1638L17.4489 20.2223L19.0839 1.76615H10.5V22.1638Z",
  fill: "#F16529"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 9.77763H7.02114L6.78084 7.0646H10.5V4.41547H3.90771L4.61677 12.427H10.5V9.77763ZM10.5 16.658L10.4884 16.6613L7.56059 15.8644L7.37358 13.7517H4.73425L5.10254 17.9114L10.488 19.4178L10.5 19.4146V16.658Z",
  fill: "#EBEBEB"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.4908 9.77763V12.427H13.728L13.423 15.8628L10.4908 16.6603V19.4167L15.8805 17.9114L16.5378 10.4891L16.6017 9.77763H10.4908ZM10.4908 4.41547V7.0646H16.8411L17.0766 4.41547H10.4908Z",
  fill: "white"
}));
const ForwardRef = forwardRef(HtmlIcon);
export default ForwardRef;