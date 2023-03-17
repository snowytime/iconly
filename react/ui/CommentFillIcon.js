import * as React from "react";
import { forwardRef } from "react";
const CommentFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 18 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M4.85118 17C5.01452 17 5.16152 16.9563 5.2922 16.8689C5.42831 16.787 5.59437 16.6559 5.79038 16.4757L8.73866 13.772H14.2595C15.0708 13.772 15.7541 13.6273 16.3094 13.3378C16.8648 13.0484 17.284 12.6251 17.5672 12.068C17.8557 11.5108 18 10.8308 18 10.028V3.75229C18 2.9494 17.8557 2.2694 17.5672 1.71229C17.284 1.15518 16.8648 0.731888 16.3094 0.44241C15.7541 0.14747 15.0708 0 14.2595 0H3.74047C2.92922 0 2.24592 0.14747 1.69056 0.44241C1.13521 0.731888 0.713249 1.15518 0.424682 1.71229C0.141561 2.2694 0 2.9494 0 3.75229V10.028C0 10.8308 0.141561 11.5108 0.424682 12.068C0.713249 12.6251 1.13521 13.0484 1.69056 13.3378C2.24592 13.6273 2.92922 13.772 3.74047 13.772H4.12432V16.1561C4.12432 16.4129 4.18693 16.6177 4.31216 16.7706C4.43739 16.9235 4.61706 17 4.85118 17Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CommentFillIcon);
export default ForwardRef;