import * as React from "react";
import { forwardRef } from "react";
const RhombusFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 12 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M5.99615 16C6.20681 16 6.38407 15.9271 6.52794 15.7813C6.6718 15.6354 6.85164 15.4141 7.06744 15.1172L11.6686 8.89062C11.7714 8.74479 11.851 8.59896 11.9075 8.45312C11.9692 8.30729 12 8.15625 12 8C12 7.84375 11.9692 7.69271 11.9075 7.54687C11.851 7.39583 11.7714 7.25 11.6686 7.10937L7.06744 0.875C6.85164 0.583333 6.6718 0.364583 6.52794 0.21875C6.38407 0.0729166 6.20681 0 5.99615 0C5.78548 0 5.60822 0.0729166 5.46435 0.21875C5.32563 0.364583 5.14836 0.583333 4.93256 0.875L0.331407 7.10937C0.223507 7.25 0.141297 7.39583 0.0847784 7.54687C0.0282595 7.69271 0 7.84375 0 8C0 8.15625 0.0282595 8.30729 0.0847784 8.45312C0.141297 8.59896 0.223507 8.74479 0.331407 8.89062L4.93256 15.1172C5.14836 15.4141 5.32563 15.6354 5.46435 15.7813C5.60822 15.9271 5.78548 16 5.99615 16Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(RhombusFillIcon);
export default ForwardRef;