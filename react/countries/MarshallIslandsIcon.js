import * as React from "react";
import { forwardRef } from "react";
const MarshallIslandsIcon = ({
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
  d: "M36 24H0V0H36",
  fill: "#41479B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 0L0 22.737V23.368L36 4.421",
  fill: "#FF9B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.862 8.21L5.88 7.7L3.843 6.43L6.376 7.06L4.835 4.92L6.938 6.488L6.318 3.911L7.568 5.982L8.069 1.895L8.571 5.982L9.819 3.911L9.2 6.488L11.303 4.92L9.762 7.06L12.295 6.43L10.259 7.7L14.276 8.21L10.259 8.721L12.295 9.991L9.762 9.361L11.303 11.501L9.2 9.934L9.82 12.511L8.57 10.44L8.069 14.527L7.567 10.44L6.32 12.51L6.939 9.933L4.836 11.502L6.377 9.362L3.844 9.992L5.88 8.72L1.862 8.21ZM0 23.368V24L36 8.657V4.421L0 23.368Z",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(MarshallIslandsIcon);
export default ForwardRef;