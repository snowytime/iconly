import * as React from "react";
import { forwardRef } from "react";
const OctagonFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M5.63699 16H10.363C10.69 16 10.9677 15.9649 11.1961 15.8948C11.4297 15.8247 11.6347 15.7196 11.8112 15.5794C11.9877 15.4446 12.1616 15.2828 12.3329 15.094L15.3538 11.632C15.5251 11.4378 15.6574 11.2572 15.7509 11.09C15.8443 10.9174 15.9092 10.7368 15.9455 10.548C15.9818 10.3539 16 10.122 16 9.85238V6.15571C16 5.88608 15.9818 5.6542 15.9455 5.46006C15.9092 5.26592 15.8443 5.08527 15.7509 4.9181C15.6574 4.75093 15.5251 4.57027 15.3538 4.37614L12.3329 0.914055C12.1616 0.719919 11.9877 0.555443 11.8112 0.420627C11.6347 0.285811 11.4297 0.18335 11.1961 0.113246C10.9677 0.0377486 10.69 0 10.363 0H5.63699C5.30479 0 5.0245 0.0377486 4.79611 0.113246C4.56773 0.18335 4.36529 0.285811 4.18881 0.420627C4.01233 0.555443 3.83845 0.719919 3.66716 0.914055L0.646229 4.37614C0.47494 4.57027 0.342579 4.75093 0.249149 4.9181C0.155718 5.08527 0.0908354 5.26592 0.0545013 5.46006C0.0181671 5.6542 0 5.88608 0 6.15571V9.85238C0 10.122 0.0181671 10.3539 0.0545013 10.548C0.0908354 10.7368 0.155718 10.9174 0.249149 11.09C0.342579 11.2572 0.47494 11.4378 0.646229 11.632L3.66716 15.094C3.83845 15.2828 4.01233 15.4446 4.18881 15.5794C4.36529 15.7196 4.56773 15.8247 4.79611 15.8948C5.0245 15.9649 5.30479 16 5.63699 16Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(OctagonFillIcon);
export default ForwardRef;