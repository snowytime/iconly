import * as React from "react";
import { forwardRef } from "react";
const UserFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 14 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M1.42246 15H12.5775C13.0212 15 13.3678 14.8999 13.6174 14.6997C13.8724 14.505 14 14.2353 14 13.8904C14 13.3565 13.8364 12.792 13.5092 12.1969C13.1876 11.6018 12.7217 11.0456 12.1117 10.5284C11.5072 10.0056 10.7724 9.58287 9.90731 9.26029C9.04773 8.93215 8.07724 8.76808 6.99584 8.76808C5.91998 8.76808 4.9495 8.93215 4.08437 9.26029C3.2248 9.58287 2.49 10.0056 1.87998 10.5284C1.26995 11.0456 0.80412 11.6018 0.482472 12.1969C0.160824 12.792 0 13.3565 0 13.8904C0 14.2353 0.124777 14.505 0.374332 14.6997C0.629432 14.8999 0.978808 15 1.42246 15ZM7.00416 7.27475C7.59754 7.27475 8.14656 7.11346 8.65122 6.79088C9.15587 6.46274 9.56071 6.02058 9.86572 5.46441C10.1763 4.90823 10.3316 4.28254 10.3316 3.58732C10.3316 2.90323 10.1763 2.29144 9.86572 1.75195C9.56071 1.2069 9.15587 0.778643 8.65122 0.467186C8.14656 0.155729 7.59754 0 7.00416 0C6.41077 0 5.86176 0.158509 5.3571 0.475528C4.85245 0.792547 4.44484 1.22358 4.13428 1.76863C3.82927 2.31368 3.67677 2.92547 3.67677 3.604C3.67677 4.29366 3.82927 4.91657 4.13428 5.47275C4.44484 6.02336 4.85245 6.46274 5.3571 6.79088C5.86176 7.11346 6.41077 7.27475 7.00416 7.27475Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(UserFillIcon);
export default ForwardRef;