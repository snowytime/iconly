import * as React from "react";
import { forwardRef } from "react";
const BoltFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 22 11",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.279286 8.59061C0.0930953 8.83873 0 9.06796 0 9.27832C0.00531973 9.48867 0.0744762 9.66127 0.207469 9.79612C0.345782 9.92557 0.518674 10.0011 0.726143 10.0227C0.938932 10.0442 1.15438 9.99029 1.37249 9.86084L7.1577 6.51133L14.0201 10.2411C14.1797 10.322 14.3287 10.3867 14.467 10.4353C14.6053 10.4784 14.741 10.5 14.874 10.5C15.2517 10.5 15.5921 10.3058 15.8954 9.91748L21.7683 2.3932C21.9279 2.18824 22.0051 1.98328 21.9997 1.77832C21.9997 1.56796 21.9386 1.38997 21.8162 1.24434C21.6939 1.09331 21.5289 0.998921 21.3215 0.961165C21.1193 0.923409 20.8986 0.974649 20.6592 1.11489L14.874 4.48867L8.00353 0.7589C7.68967 0.5863 7.40506 0.5 7.14972 0.5C6.77734 0.5 6.43953 0.694175 6.13631 1.08252L0.279286 8.59061Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(BoltFillIcon);
export default ForwardRef;