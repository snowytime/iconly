import * as React from "react";
import { forwardRef } from "react";
const HaskellIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 34 24",
  fill: "none",
  color: "#78358F",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M-0.000244141 24L7.99507 11.9867L-0.000244141 0H6.00288L13.9982 11.9867L6.00288 23.9734H-0.000244141V24Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.99507 24L15.9904 11.9867L7.99507 0H13.9982L29.9888 24H24.0123L18.9919 16.4784L13.9982 23.9734H7.99507V24ZM27.3326 16.9834L24.6763 12.9701H33.9998V16.9834H27.3326ZM23.3216 11.0033L20.6654 6.99003H33.9998V11.0033H23.3216Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(HaskellIcon);
export default ForwardRef;