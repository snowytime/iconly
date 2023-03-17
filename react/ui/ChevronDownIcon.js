import * as React from "react";
import { forwardRef } from "react";
const ChevronDownIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 14 8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M7.00403 8C7.10612 8 7.20284 7.98091 7.29419 7.94274C7.3909 7.89911 7.47419 7.83913 7.54404 7.76278L13.7824 1.27607C13.9275 1.12883 14 0.954329 14 0.752556C14 0.61077 13.9678 0.482618 13.9033 0.368098C13.8388 0.253579 13.7501 0.163599 13.6373 0.0981595C13.5298 0.0327198 13.4063 0 13.2666 0C13.0677 0 12.8931 0.070893 12.7427 0.212679L6.5688 6.61759H7.4312L1.25734 0.212679C1.11226 0.070893 0.937632 0 0.733448 0C0.593744 0 0.467473 0.0327198 0.354634 0.0981595C0.247169 0.163599 0.161197 0.253579 0.0967185 0.368098C0.0322395 0.482618 0 0.61077 0 0.752556C0 0.856169 0.0188064 0.954329 0.0564191 1.04703C0.0940319 1.13429 0.147764 1.21336 0.217617 1.28425L6.45596 7.76278C6.61716 7.92093 6.79985 8 7.00403 8Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ChevronDownIcon);
export default ForwardRef;