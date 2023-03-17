import * as React from "react";
import { forwardRef } from "react";
const BannerLeftIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 19 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M3.10221 12.5801H5.38253C5.635 12.5801 5.81496 12.5231 5.92239 12.409C6.02983 12.2949 6.08355 12.1075 6.08355 11.8468V3.16133C6.08355 2.9006 6.02983 2.7132 5.92239 2.59913C5.81496 2.48506 5.635 2.42803 5.38253 2.42803H3.10221C2.84973 2.42803 2.66978 2.48506 2.56234 2.59913C2.45491 2.7132 2.40119 2.9006 2.40119 3.16133V11.8468C2.40119 12.1075 2.45491 12.2949 2.56234 12.409C2.66978 12.5231 2.84973 12.5801 3.10221 12.5801ZM2.53011 15H16.4699C17.3186 15 17.9525 14.7882 18.3715 14.3645C18.7905 13.9462 19 13.3188 19 12.4823V2.5258C19 1.6893 18.7905 1.05921 18.3715 0.635524C17.9525 0.211841 17.3186 0 16.4699 0H2.53011C1.68674 0 1.05287 0.211841 0.628499 0.635524C0.2095 1.05378 0 1.68387 0 2.5258V12.4823C0 13.3188 0.2095 13.9462 0.628499 14.3645C1.05287 14.7882 1.68674 15 2.53011 15ZM2.54623 13.6882C2.14334 13.6882 1.83446 13.5823 1.61959 13.3705C1.40472 13.1532 1.29729 12.8327 1.29729 12.409V2.59913C1.29729 2.17545 1.40472 1.85497 1.61959 1.6377C1.83446 1.42042 2.14334 1.31179 2.54623 1.31179H16.4538C16.8513 1.31179 17.1575 1.42042 17.3724 1.6377C17.5926 1.85497 17.7027 2.17545 17.7027 2.59913V12.409C17.7027 12.8327 17.5926 13.1532 17.3724 13.3705C17.1575 13.5823 16.8513 13.6882 16.4538 13.6882H2.54623Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(BannerLeftIcon);
export default ForwardRef;