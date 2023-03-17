import * as React from "react";
import { forwardRef } from "react";
const ShoppingBagIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 14 16",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 13.5734C0 14.3823 0.205072 14.9876 0.615217 15.3894C1.03062 15.7965 1.65109 16 2.47664 16H11.7601C12.4647 16 13.0141 15.7965 13.4084 15.3894C13.8028 14.9876 14 14.3823 14 13.5734V5.47162C14 4.66275 13.7923 4.0574 13.3769 3.65558C12.9615 3.24853 12.3438 3.04501 11.5235 3.04501H10.2615C10.251 2.49706 10.0959 1.99348 9.79614 1.53425C9.50168 1.0698 9.10994 0.699282 8.62092 0.422701C8.1319 0.1409 7.5903 0 6.99612 0C6.40193 0 5.86033 0.1409 5.37132 0.422701C4.8823 0.699282 4.49056 1.0698 4.19609 1.53425C3.90163 1.99348 3.74651 2.49706 3.73074 3.04501H2.47664C1.65109 3.04501 1.03062 3.24853 0.615217 3.65558C0.205072 4.0574 0 4.66275 0 5.47162V13.5734ZM1.26987 13.5108V5.53425C1.26987 5.1272 1.37504 4.82192 1.58537 4.6184C1.7957 4.40965 2.09805 4.30528 2.49242 4.30528H11.4998C11.8889 4.30528 12.1912 4.40965 12.4067 4.6184C12.6223 4.82192 12.7301 5.1272 12.7301 5.53425V13.5108C12.7301 13.9178 12.6329 14.2257 12.4383 14.4344C12.2437 14.638 12.0099 14.7397 11.7364 14.7397H2.49242C2.09805 14.7397 1.7957 14.638 1.58537 14.4344C1.37504 14.2257 1.26987 13.9178 1.26987 13.5108ZM5.00061 3.04501C5.01112 2.70581 5.10577 2.3953 5.28455 2.1135C5.46333 1.8317 5.69996 1.60731 5.99442 1.44031C6.29414 1.27332 6.62804 1.18982 6.99612 1.18982C7.36945 1.18982 7.70335 1.27332 7.99782 1.44031C8.29754 1.60731 8.53416 1.8317 8.70768 2.1135C8.88646 2.3953 8.98111 2.70581 8.99163 3.04501H5.00061Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ShoppingBagIcon);
export default ForwardRef;