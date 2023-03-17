import * as React from "react";
import { forwardRef } from "react";
const TongaIcon = ({
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
  d: "M0 0V12H14.276V0H0ZM11.793 7.579H8.69V10.737H5.586V7.579H2.483V4.421H5.586V1.263H8.69V4.421H11.793V7.579Z",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(TongaIcon);
export default ForwardRef;