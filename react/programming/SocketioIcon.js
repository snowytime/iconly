import * as React from "react";
import { forwardRef } from "react";
const SocketioIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 24 24",
  fill: "none",
  color: "rgb(var(--foreground, 0, 0, 0))",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M11.9998 0C5.38427 0 -0.000244141 5.38452 -0.000244141 12C-0.000244141 18.6155 5.38427 24 11.9998 24C18.6152 24 23.9998 18.6155 23.9998 12C23.9998 5.38452 18.6154 0 11.9998 0ZM11.9998 2.00388C17.5323 2.00388 21.9961 6.46743 21.9961 12C21.9961 17.5328 17.5323 21.9963 11.9998 21.9963C6.46718 21.9963 2.00345 17.5328 2.00345 12C2.00345 6.46743 6.46718 2.00388 11.9998 2.00388Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M9.07979 11.393C11.7076 9.24629 14.278 7.02493 16.963 4.94092C15.5547 7.10505 14.1063 9.24047 12.698 11.4044C11.4901 11.41 10.282 11.41 9.07979 11.393ZM11.3011 12.5894C12.5148 12.5894 13.7227 12.5894 14.9306 12.6067C12.2857 14.7421 9.72679 16.9805 7.03613 19.0587C8.44442 16.8946 9.89286 14.7535 11.3011 12.5894Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(SocketioIcon);
export default ForwardRef;