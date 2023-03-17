import * as React from "react";
import { forwardRef } from "react";
const StVincentsIcon = ({
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
  d: "M8.069 0H27.931V24H8.069V0Z",
  fill: "#FFE15A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0H8.069V24H0V0Z",
  fill: "#4173CD"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 0V24H27.931V0H36ZM15.505 7.579L13.492 11.676L15.505 15.774L17.519 11.676L15.505 7.579ZM18.481 11.676L20.495 15.774L22.508 11.676L20.495 7.579L18.481 11.676ZM15.986 16.602L18 20.7L20.013 16.602L18 12.505L15.986 16.602Z",
  fill: "#73AF00"
}));
const ForwardRef = forwardRef(StVincentsIcon);
export default ForwardRef;