import * as React from "react";
import { forwardRef } from "react";
const MarkdownIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 38 24",
  fill: "none",
  color: "rgb(var(--foreground, 0, 0, 0))",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M3.21919 0.000152588C1.4498 0.000152588 -3.05176e-05 1.47305 -3.05176e-05 3.23253V20.7675C-3.05176e-05 22.527 1.4498 23.9998 3.21889 23.9998H34.7811C36.5501 23.9998 38 22.527 38 20.7675V3.23284C38 1.47335 36.5498 0.000455628 34.7811 0.000455628L3.21919 0.000152588ZM3.21707 2.88814H34.7811C34.9705 2.88814 35.1073 3.01615 35.1073 3.23314V20.7675C35.1073 20.9845 34.9699 21.1125 34.7811 21.1125H3.21889C3.03 21.1125 2.89266 20.9845 2.89266 20.7675V3.23253C2.89266 3.01615 3.02939 2.88905 3.21707 2.88814Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.87842 18.0828V5.91716H9.42539L12.9717 10.39L16.5169 5.91716H20.0629V18.0828H16.5169V11.1054L12.9714 15.5783L9.42478 11.1054V18.0828H5.87842ZM28.0425 18.0828L22.7231 12.1789H26.2694V5.91716H29.8161V12.1786H33.3628L28.0425 18.0828Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(MarkdownIcon);
export default ForwardRef;