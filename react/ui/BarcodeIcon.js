import * as React from "react";
import { forwardRef } from "react";
const BarcodeIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 15 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 12.5H1.25966V0.5H0V12.5ZM2.48068 12.5H3.19938V0.5H2.48068V12.5ZM4.40495 12.5H6.46059V0.5H4.40495V12.5ZM7.2102 12.5H8.52396V0.5H7.2102V12.5ZM9.30448 12.5H11.3447V0.5H9.30448V12.5ZM11.9706 12.5H13.5703V0.5H11.9706V12.5ZM13.9645 12.5H15V0.5H13.9645V12.5Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(BarcodeIcon);
export default ForwardRef;