import * as React from "react";
import { forwardRef } from "react";
const TerminalFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M3.22647 6.3308L5.14995 5.10049L3.22647 3.88647C3.07135 3.7887 2.98087 3.66377 2.95502 3.51168C2.92916 3.35959 2.95243 3.22108 3.02482 3.09614C3.10238 2.96578 3.21096 2.87887 3.35057 2.83542C3.49018 2.79196 3.64788 2.82727 3.82368 2.94134L6.11944 4.44867C6.26422 4.54644 6.36246 4.67952 6.41417 4.84791C6.46587 5.0163 6.46846 5.18468 6.42192 5.35307C6.37539 5.52146 6.27456 5.65725 6.11944 5.76046L3.82368 7.27594C3.64788 7.39001 3.49018 7.42531 3.35057 7.38186C3.21096 7.3384 3.10238 7.25149 3.02482 7.12113C2.95243 6.99077 2.92916 6.85225 2.95502 6.7056C2.98087 6.5535 3.07135 6.42857 3.22647 6.3308ZM6.60031 7.25964C6.60031 7.10755 6.64943 6.9799 6.74767 6.8767C6.84591 6.76806 6.96742 6.71374 7.1122 6.71374H10.1603C10.3051 6.71374 10.4266 6.76806 10.5248 6.8767C10.6282 6.9799 10.6799 7.10755 10.6799 7.25964C10.6799 7.41173 10.6282 7.5421 10.5248 7.65073C10.4266 7.75394 10.3051 7.80554 10.1603 7.80554H7.1122C6.96742 7.80554 6.84591 7.75394 6.74767 7.65073C6.64943 7.5421 6.60031 7.41173 6.60031 7.25964ZM2.43537 15H12.5646C13.3816 15 13.9917 14.7882 14.395 14.3645C14.7983 13.9462 15 13.3188 15 12.4823V2.5258C15 1.6893 14.7983 1.05921 14.395 0.635524C13.9917 0.211841 13.3816 0 12.5646 0H2.43537C1.62358 0 1.01344 0.211841 0.604964 0.635524C0.201655 1.05378 0 1.68387 0 2.5258V12.4823C0 13.3188 0.201655 13.9462 0.604964 14.3645C1.01344 14.7882 1.62358 15 2.43537 15Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(TerminalFillIcon);
export default ForwardRef;