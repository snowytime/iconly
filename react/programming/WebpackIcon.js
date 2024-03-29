import * as React from "react";
import { forwardRef } from "react";
const WebpackIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 23 24",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M21.3239 18.4952L11.4357 24V19.7124L17.5875 16.381L21.3239 18.4952ZM22.0018 17.8933V6.39048L18.3836 8.44762V15.84L21.9999 17.8914L22.0018 17.8933ZM0.679767 18.4952L10.5583 23.9962V19.7124L4.40454 16.381L0.679767 18.4952ZM0.00183105 17.8933V6.39048L3.62007 8.44762V15.84L0.00183105 17.8933ZM0.426025 5.64571L10.568 0V4.14476L4.06945 7.65905L4.01715 7.68762L0.426025 5.64571ZM21.5738 5.64571L11.4357 0V4.14476L17.9342 7.65714L17.9865 7.68571L21.5776 5.64571H21.5738Z",
  fill: "#8ED6FB"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.568 18.7371L4.48783 15.4476V8.93714L10.568 12.381V18.7371ZM11.4357 18.7371L17.5158 15.4514V8.93714L11.4357 12.381V18.7371ZM4.9004 8.19048L11.0018 4.88762L17.1033 8.19048L11.0018 11.6495L4.9004 8.19048Z",
  fill: "#1C78C0"
}));
const ForwardRef = forwardRef(WebpackIcon);
export default ForwardRef;