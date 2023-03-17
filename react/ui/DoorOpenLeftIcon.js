import * as React from "react";
import { forwardRef } from "react";
const DoorOpenLeftIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 12 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 16.8591C0 17.0353 0.0603675 17.1849 0.181103 17.3077C0.307087 17.4359 0.456694 17.5 0.629922 17.5C0.8084 17.5 0.958007 17.4359 1.07874 17.3077C1.20473 17.1849 1.26772 17.0353 1.26772 16.8591V2.21442C1.26772 1.93135 1.40158 1.78982 1.66929 1.78982H10.3307C10.5984 1.78982 10.7323 1.93135 10.7323 2.21442V16.8591C10.7323 17.0353 10.7926 17.1849 10.9134 17.3077C11.0394 17.4359 11.1916 17.5 11.3701 17.5C11.5433 17.5 11.6903 17.4359 11.811 17.3077C11.937 17.1849 12 17.0353 12 16.8591V2.13431C12 1.64295 11.8478 1.24772 11.5433 0.948633C11.2441 0.649544 10.8478 0.5 10.3543 0.5H1.64567C1.15223 0.5 0.753282 0.649544 0.448819 0.948633C0.149606 1.24772 0 1.64295 0 2.13431V16.8591ZM2.18898 17.0434C2.18898 17.1181 2.21523 17.1715 2.26772 17.2036C2.32546 17.241 2.39108 17.2436 2.46457 17.2116L4.937 16.098C5.03674 16.0553 5.1076 16.0099 5.1496 15.9618C5.19159 15.9138 5.21259 15.839 5.21259 15.7375V4.19321C5.21259 4.09174 5.19159 4.01964 5.1496 3.97691C5.1076 3.92884 5.03936 3.88344 4.94487 3.84072L2.46457 2.71913C2.39108 2.68709 2.32546 2.68976 2.26772 2.72714C2.21523 2.75919 2.18898 2.81527 2.18898 2.89538V17.0434Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(DoorOpenLeftIcon);
export default ForwardRef;