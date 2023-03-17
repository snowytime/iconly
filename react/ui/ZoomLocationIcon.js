import * as React from "react";
import { forwardRef } from "react";
const ZoomLocationIcon = ({
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
  d: "M0 6.5669C0 7.40319 0.158649 8.1888 0.475947 8.92372C0.793245 9.65357 1.23337 10.2973 1.79632 10.8548C2.35926 11.4123 3.00921 11.8482 3.74616 12.1624C4.48823 12.4767 5.28147 12.6338 6.1259 12.6338C6.7912 12.6338 7.42579 12.5324 8.02968 12.3297C8.63357 12.127 9.18628 11.8482 9.68782 11.4934L13.4647 15.2415C13.5568 15.3277 13.6566 15.391 13.7641 15.4316C13.8767 15.4772 13.9944 15.5 14.1172 15.5C14.2912 15.5 14.4447 15.4595 14.5778 15.3784C14.7108 15.3023 14.8132 15.1959 14.8849 15.059C14.9616 14.9222 15 14.7701 15 14.6029C15 14.4812 14.977 14.3672 14.9309 14.2608C14.89 14.1543 14.8286 14.0606 14.7467 13.9795L10.9928 10.239C11.3869 9.73213 11.694 9.167 11.914 8.54359C12.1392 7.92017 12.2518 7.26128 12.2518 6.5669C12.2518 5.73061 12.0931 4.94754 11.7758 4.21769C11.4585 3.48277 11.0184 2.83654 10.4555 2.27902C9.89253 1.72149 9.24002 1.28561 8.49795 0.971363C7.761 0.657121 6.97032 0.5 6.1259 0.5C5.28147 0.5 4.48823 0.657121 3.74616 0.971363C3.00921 1.28561 2.35926 1.72149 1.79632 2.27902C1.23337 2.83654 0.793245 3.48277 0.475947 4.21769C0.158649 4.94754 0 5.73061 0 6.5669ZM1.31269 6.5669C1.31269 5.90801 1.43552 5.29219 1.68117 4.71946C1.93193 4.14166 2.27738 3.63482 2.7175 3.19894C3.16274 2.75798 3.67451 2.41586 4.25281 2.17258C4.83623 1.92423 5.46059 1.80005 6.1259 1.80005C6.7912 1.80005 7.413 1.92423 7.9913 2.17258C8.57472 2.41586 9.08649 2.75798 9.52661 3.19894C9.96673 3.63482 10.3122 4.14166 10.5629 4.71946C10.8137 5.29219 10.9391 5.90801 10.9391 6.5669C10.9391 7.2258 10.8137 7.84415 10.5629 8.42195C10.3122 8.99468 9.96673 9.49899 9.52661 9.93487C9.08649 10.3708 8.57472 10.7129 7.9913 10.9612C7.413 11.2096 6.7912 11.3338 6.1259 11.3338C5.46059 11.3338 4.83623 11.2096 4.25281 10.9612C3.67451 10.7129 3.16274 10.3708 2.7175 9.93487C2.27738 9.49899 1.93193 8.99468 1.68117 8.42195C1.43552 7.84415 1.31269 7.2258 1.31269 6.5669ZM3.26254 7.00025H5.48106C5.59365 7.00025 5.64995 7.05854 5.64995 7.17511V9.33426C5.64995 9.49138 5.69345 9.60289 5.78045 9.66878C5.86745 9.7296 5.96213 9.74734 6.06448 9.722C6.17196 9.69665 6.25128 9.62823 6.30246 9.51673L8.65148 4.55981C8.71801 4.42296 8.72825 4.30132 8.68219 4.19488C8.64125 4.08338 8.56448 4.00735 8.45189 3.9668C8.34442 3.92625 8.2216 3.93639 8.08342 3.99721L3.08598 6.35403C2.96827 6.40471 2.89662 6.48327 2.87103 6.58971C2.85056 6.69108 2.87103 6.78484 2.93245 6.87101C2.99898 6.95717 3.10901 7.00025 3.26254 7.00025Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ZoomLocationIcon);
export default ForwardRef;