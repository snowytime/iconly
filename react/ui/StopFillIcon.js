import * as React from "react";
import { forwardRef } from "react";
const StopFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 13 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 11.2374C0 11.7904 0.156947 12.2211 0.470841 12.5294C0.790055 12.8431 1.22897 13 1.7876 13H11.2124C11.7763 13 12.2153 12.8431 12.5292 12.5294C12.8431 12.2211 13 11.7904 13 11.2374V1.76258C13 1.20429 12.8431 0.770961 12.5292 0.462577C12.2153 0.154192 11.7763 0 11.2124 0H1.7876C1.22897 0 0.790055 0.154192 0.470841 0.462577C0.156947 0.770961 0 1.20429 0 1.76258V11.2374Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(StopFillIcon);
export default ForwardRef;