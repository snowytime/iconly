import * as React from "react";
import { forwardRef } from "react";
const PillFillIcon = ({
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
  d: "M4.3815 5.69369L1.34728 8.72791C0.754741 9.32045 0.358862 9.94874 0.159646 10.6128C-0.0395704 11.2717 -0.0523406 11.923 0.121335 12.5667C0.295011 13.2052 0.64747 13.79 1.17871 14.3213C1.70996 14.8525 2.29484 15.205 2.93335 15.3787C3.57697 15.5523 4.22826 15.5396 4.8872 15.3404C5.55126 15.1411 6.17955 14.7453 6.77209 14.1527L9.80631 11.1185L4.3815 5.69369ZM13.8213 1.67871C13.2849 1.14747 12.6949 0.795011 12.0513 0.621335C11.4128 0.447659 10.7641 0.46043 10.1051 0.659646C9.44619 0.858862 8.823 1.25474 8.23557 1.84728L5.19369 4.8815L10.6185 10.3063L13.6527 7.26443C14.2453 6.677 14.6411 6.05381 14.8404 5.39486C15.0396 4.73081 15.0523 4.07953 14.8787 3.44101C14.705 2.79739 14.3525 2.20996 13.8213 1.67871Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(PillFillIcon);
export default ForwardRef;