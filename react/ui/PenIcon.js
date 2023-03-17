import * as React from "react";
import { forwardRef } from "react";
const PenIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 10 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.641874 15.5C0.827021 15.5 0.967203 15.4524 1.06242 15.3571C1.16293 15.2671 1.22905 15.14 1.26079 14.9759L2.8319 6.97168L2.03841 7.61488H7.95782L7.16433 6.97168L8.73543 14.9759C8.76717 15.14 8.83065 15.2671 8.92587 15.3571C9.02638 15.4524 9.16921 15.5 9.35435 15.5C9.61885 15.5 9.79869 15.4206 9.89391 15.2618C9.99442 15.103 10.0235 14.9177 9.98119 14.7059L8.49739 7.14637C8.44978 6.89756 8.33076 6.69111 8.14032 6.527C7.94988 6.36289 7.73564 6.28084 7.4976 6.28084H2.50657C2.26323 6.28084 2.04634 6.36289 1.85591 6.527C1.67076 6.69111 1.55438 6.89756 1.50677 7.14637L0.0229544 14.7059C-0.0246548 14.923 0.00179479 15.1083 0.102303 15.2618C0.202811 15.4206 0.382668 15.5 0.641874 15.5ZM2.332 6.92403H7.67216L5.69638 1.02409C5.57471 0.674696 5.34725 0.5 5.01398 0.5C4.65427 0.5 4.41622 0.674696 4.29985 1.02409L2.332 6.92403Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(PenIcon);
export default ForwardRef;