import * as React from "react";
import { forwardRef } from "react";
const SquareIcon = ({
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
  d: "M2.55839 15.5H12.4416C13.2944 15.5 13.9326 15.2882 14.3563 14.8645C14.7854 14.4462 15 13.8161 15 12.9742V3.0258C15 2.18387 14.7854 1.55378 14.3563 1.13552C13.9326 0.711841 13.2944 0.5 12.4416 0.5H2.55839C1.70559 0.5 1.06464 0.711841 0.635524 1.13552C0.211841 1.55378 0 2.18387 0 3.0258V12.9742C0 13.8161 0.211841 14.4462 0.635524 14.8645C1.06464 15.2882 1.70559 15.5 2.55839 15.5ZM2.57469 14.1882C2.1673 14.1882 1.85497 14.0823 1.6377 13.8705C1.42042 13.6532 1.31179 13.3327 1.31179 12.909V3.09098C1.31179 2.6673 1.42042 2.34954 1.6377 2.1377C1.85497 1.92042 2.1673 1.81179 2.57469 1.81179H12.4253C12.8273 1.81179 13.1369 1.92042 13.3542 2.1377C13.5769 2.34954 13.6882 2.6673 13.6882 3.09098V12.909C13.6882 13.3327 13.5769 13.6532 13.3542 13.8705C13.1369 14.0823 12.8273 14.1882 12.4253 14.1882H2.57469Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(SquareIcon);
export default ForwardRef;