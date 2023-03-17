import * as React from "react";
import { forwardRef } from "react";
const WatchIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 11 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 11.5229C0 12.1008 0.111264 12.599 0.333793 13.0175C0.561379 13.436 0.890115 13.7623 1.32 13.9965C1.52736 14.1061 1.69425 14.2356 1.82069 14.3851C1.95218 14.5395 2.05586 14.7413 2.13172 14.9904L2.37448 15.7901C2.51609 16.2634 2.84736 16.5 3.36828 16.5H6.8731C7.38897 16.5 7.7177 16.2634 7.85931 15.7901L8.10966 14.9904C8.18552 14.7413 8.28667 14.5395 8.4131 14.3851C8.5446 14.2356 8.71402 14.1061 8.92138 13.9965C9.35126 13.7623 9.67747 13.436 9.9 13.0175C10.1276 12.599 10.2414 12.1008 10.2414 11.5229V5.47711C10.2414 4.89919 10.1276 4.40098 9.9 3.98248C9.67747 3.56399 9.35126 3.23766 8.92138 3.0035C8.71402 2.8939 8.5446 2.76436 8.4131 2.6149C8.28667 2.46045 8.18552 2.26117 8.10966 2.01705L7.85931 1.20995C7.72782 0.73665 7.39908 0.5 6.8731 0.5H3.36828C2.84736 0.5 2.51609 0.73665 2.37448 1.20995L2.13172 2.01705C2.06092 2.26117 1.95977 2.46045 1.82828 2.6149C1.70184 2.76934 1.53241 2.89888 1.32 3.0035C0.895172 3.2277 0.568966 3.55153 0.341379 3.97501C0.113793 4.39351 0 4.89421 0 5.47711V11.5229ZM1.10759 11.366V5.64152C1.10759 5.08353 1.26184 4.64759 1.57034 4.33372C1.88391 4.01487 2.31885 3.85544 2.87517 3.85544H7.36621C7.92253 3.85544 8.35494 4.01487 8.66345 4.33372C8.97701 4.64759 9.13379 5.08353 9.13379 5.64152V11.366C9.13379 11.919 8.97701 12.3549 8.66345 12.6738C8.35494 12.9876 7.92253 13.1446 7.36621 13.1446H2.87517C2.31885 13.1446 1.88391 12.9876 1.57034 12.6738C1.26184 12.3549 1.10759 11.919 1.10759 11.366ZM10.0745 7.97314H10.3476C10.5448 7.97314 10.7016 7.91336 10.8179 7.79379C10.9393 7.66924 11 7.49984 11 7.28561V6.27674C11 6.06251 10.9393 5.89561 10.8179 5.77604C10.7016 5.65149 10.5448 5.58921 10.3476 5.58921H10.0745V7.97314Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(WatchIcon);
export default ForwardRef;