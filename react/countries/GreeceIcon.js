import * as React from "react";
import { forwardRef } from "react";
const GreeceIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 36 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M36 2.667V5.333H0V2.667H36ZM0 10.667H36V8H0V10.667ZM0 16H36V13.334H0V16ZM0 21.333H36V18.667H0V21.333Z",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 18.667H0V16H36V18.667ZM0 21.333V24H36V21.333H0ZM36 10.667H12.414V8H36V5.333H12.414V2.667H36V0H0V13.334H36V10.667Z",
  fill: "#41479B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.414 5.333V8H7.517V13.333L7.494 13.603H4.897V8H0V5.333H4.897V0H7.517V5.333H12.414Z",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(GreeceIcon);
export default ForwardRef;