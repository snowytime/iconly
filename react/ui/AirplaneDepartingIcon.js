import * as React from "react";
import { forwardRef } from "react";
const AirplaneDepartingIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 20 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M4.36936 8.72632L17.7029 5.1292C18.2005 4.99277 18.6411 4.78812 19.0246 4.51525C19.4082 4.24239 19.6855 3.93016 19.8565 3.57858C20.0275 3.22176 20.0457 2.85706 19.9109 2.48449C19.7865 2.14341 19.5533 1.88891 19.2112 1.72099C18.8743 1.54783 18.483 1.45862 18.0372 1.45337C17.5915 1.44288 17.1457 1.51372 16.7 1.66589L12.0274 3.28735C11.8667 3.33983 11.7164 3.36344 11.5765 3.35819C11.4417 3.3477 11.281 3.29785 11.0944 3.20864L4.57928 0.0916609C4.36159 -0.00804043 4.1439 -0.0264065 3.92621 0.0365628L3.38976 0.201857C3.29646 0.233342 3.23945 0.296311 3.21871 0.390765C3.19798 0.485219 3.22908 0.577049 3.31201 0.666256L7.76689 5.45192L7.91461 4.70416L3.98063 6.07374L5.50447 6.12097L0.948509 4.48377C0.844847 4.44704 0.743776 4.43916 0.645297 4.46015C0.552001 4.48114 0.453522 4.53887 0.34986 4.63332L0.124395 4.84584C0.046648 4.91406 0.00518311 4.99277 0 5.08198C0 5.17118 0.0310987 5.24989 0.093296 5.31811L2.82221 8.41935C3.00361 8.624 3.2239 8.74994 3.48305 8.79716C3.74739 8.83914 4.04283 8.81553 4.36936 8.72632ZM1.52383 14H18.3016C18.4726 14 18.6203 13.937 18.7447 13.8111C18.8691 13.6852 18.9313 13.5356 18.9313 13.3624C18.9313 13.1893 18.8691 13.0397 18.7447 12.9138C18.6203 12.7931 18.4726 12.7327 18.3016 12.7327H1.52383C1.35279 12.7327 1.20507 12.7931 1.08068 12.9138C0.961467 13.0397 0.901861 13.1893 0.901861 13.3624C0.901861 13.5356 0.961467 13.6852 1.08068 13.8111C1.20507 13.937 1.35279 14 1.52383 14Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(AirplaneDepartingIcon);
export default ForwardRef;