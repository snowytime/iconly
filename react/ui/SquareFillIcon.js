import * as React from "react";
import { forwardRef } from "react";
const SquareFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 15 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2.55839 15.5H12.4416C13.2944 15.5 13.9326 15.2882 14.3563 14.8645C14.7854 14.4462 15 13.8161 15 12.9742V3.0258C15 2.18387 14.7854 1.55378 14.3563 1.13552C13.9326 0.711841 13.2944 0.5 12.4416 0.5H2.55839C1.70559 0.5 1.06464 0.711841 0.635524 1.13552C0.211841 1.55378 0 2.18387 0 3.0258V12.9742C0 13.8161 0.211841 14.4462 0.635524 14.8645C1.06464 15.2882 1.70559 15.5 2.55839 15.5Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(SquareFillIcon);
export default ForwardRef;