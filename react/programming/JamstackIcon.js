import * as React from "react";
import { forwardRef } from "react";
const JamstackIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 24 24",
  fill: "none",
  color: "#F0047F",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M11.9998 0C5.36357 0 -0.000244141 5.36453 -0.000244141 12.0005C-0.000244141 18.6355 5.36379 24 11.9998 24C18.6357 24 23.9998 18.6355 23.9998 12.0005V0H11.9998ZM12.2538 3.1943H20.6713V11.6117H12.2538V3.1943ZM3.07961 12.3718H11.4941V20.7859C6.93944 20.5925 3.27264 16.9254 3.07961 12.3718ZM12.2538 12.3883H20.667C20.475 16.942 16.8073 20.6093 12.2538 20.8016V12.3883Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(JamstackIcon);
export default ForwardRef;