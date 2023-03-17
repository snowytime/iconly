import * as React from "react";
import { forwardRef } from "react";
const LanyardFillIcon = ({
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
  d: "M0 15.0182C0 15.8481 0.198198 16.4692 0.594595 16.8815C0.996139 17.2938 1.59588 17.5 2.39382 17.5H9.6139C10.4067 17.5 11.0013 17.2938 11.3977 16.8815C11.7992 16.4692 12 15.8481 12 15.0182V2.98974C12 2.16511 11.7992 1.544 11.3977 1.1264C11.0013 0.7088 10.4067 0.5 9.6139 0.5H2.39382C1.59588 0.5 0.996139 0.7088 0.594595 1.1264C0.198198 1.544 0 2.16511 0 2.98974V15.0182ZM4.02317 3.24347C3.87902 3.24347 3.75547 3.19325 3.65251 3.09282C3.54955 2.9871 3.49807 2.86023 3.49807 2.71222C3.49807 2.5695 3.54955 2.44527 3.65251 2.33955C3.75547 2.23383 3.87902 2.18097 4.02317 2.18097H7.97683C8.12098 2.18097 8.24453 2.23383 8.34749 2.33955C8.45045 2.44527 8.50193 2.5695 8.50193 2.71222C8.50193 2.86023 8.45045 2.9871 8.34749 3.09282C8.24453 3.19325 8.12098 3.24347 7.97683 3.24347H4.02317Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(LanyardFillIcon);
export default ForwardRef;