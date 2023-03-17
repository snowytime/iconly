import * as React from "react";
import { forwardRef } from "react";
const LightningFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 11 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 9.99692C0 10.1527 0.0520452 10.2844 0.156136 10.3918C0.260226 10.4939 0.395544 10.5449 0.562088 10.5449H4.97292L2.6465 17.0728C2.56843 17.2824 2.55282 17.4623 2.59966 17.6128C2.6517 17.7632 2.73758 17.8707 2.85728 17.9351C2.98219 18.005 3.12011 18.0184 3.27104 17.9754C3.42718 17.9378 3.5703 17.8357 3.70041 17.6692L10.797 8.51405C10.9323 8.33674 11 8.16482 11 7.99826C11 7.84245 10.948 7.71351 10.8439 7.61143C10.7398 7.50397 10.6045 7.45024 10.4379 7.45024H6.02684L8.35326 0.922365C8.43132 0.718201 8.44434 0.540901 8.39229 0.390464C8.34545 0.240027 8.25958 0.132572 8.13467 0.0680995C8.01496 -0.00174615 7.87704 -0.0178644 7.72091 0.0197448C7.56998 0.057354 7.42945 0.162122 7.29934 0.33405L0.202976 9.48114C0.0676588 9.66381 0 9.83574 0 9.99692Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(LightningFillIcon);
export default ForwardRef;