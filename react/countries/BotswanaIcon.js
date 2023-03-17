import * as React from "react";
import { forwardRef } from "react";
const BotswanaIcon = ({
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
  fill: "#82AFFF"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 10.105H36V13.894H0V10.105Z",
  fill: "#464655"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 8.842V10.105H0V8.842H36ZM0 15.158H36V13.895H0V15.158Z",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(BotswanaIcon);
export default ForwardRef;