import * as React from "react";
import { forwardRef } from "react";
const GreenlandIcon = ({
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
  d: "M36 12H0V0H36V12Z",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 12V24H0V12H4.345C4.32635 9.84129 5.16599 7.76357 6.67921 6.22391C8.19243 4.68425 10.2553 3.80875 12.414 3.79C14.5727 3.80875 16.6356 4.68425 18.1488 6.22391C19.662 7.76357 20.5016 9.84129 20.483 12H36Z",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.414 20.21C14.5727 20.1912 16.6356 19.3158 18.1488 17.7761C19.662 16.2364 20.5016 14.1587 20.483 12H4.345C4.32635 14.1587 5.16599 16.2364 6.67921 17.7761C8.19243 19.3158 10.2553 20.1912 12.414 20.21Z",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(GreenlandIcon);
export default ForwardRef;