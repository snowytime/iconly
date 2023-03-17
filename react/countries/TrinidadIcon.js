import * as React from "react";
import { forwardRef } from "react";
const TrinidadIcon = ({
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
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.862 0L27.31 24H25.448L0 0H1.862ZM10.552 0H8.69L34.138 24H36L10.552 0Z",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.862 0L27.31 24H34.138L8.69 0H1.862Z",
  fill: "#464655"
}));
const ForwardRef = forwardRef(TrinidadIcon);
export default ForwardRef;