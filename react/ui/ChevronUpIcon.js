import * as React from "react";
import { forwardRef } from "react";
const ChevronUpIcon = ({
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
  d: "M0.217617 6.72393C0.147764 6.78937 0.0940319 6.86844 0.0564191 6.96115C0.0188064 7.05385 0 7.15201 0 7.25562C0 7.39741 0.0322395 7.52556 0.0967185 7.64008C0.161197 7.74915 0.247169 7.8364 0.354634 7.90184C0.467473 7.96728 0.593744 8 0.733448 8C0.953752 8 1.12838 7.92911 1.25734 7.78732L7.4312 1.39059H6.5688L12.7427 7.78732C12.877 7.92911 13.0516 8 13.2666 8C13.4063 8 13.5298 7.96728 13.6373 7.90184C13.7501 7.8364 13.8388 7.74915 13.9033 7.64008C13.9678 7.52556 14 7.39741 14 7.25562C14 7.04294 13.9275 6.86571 13.7824 6.72393L7.54404 0.245399C7.47419 0.169052 7.3909 0.109066 7.29419 0.0654397C7.20284 0.0218132 7.10612 0 7.00403 0C6.7891 0 6.60641 0.0817996 6.45596 0.245399L0.217617 6.72393Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ChevronUpIcon);
export default ForwardRef;