import * as React from "react";
import { forwardRef } from "react";
const PlayFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 12 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.952381 13C1.11111 13 1.2619 12.9718 1.40476 12.9155C1.54762 12.8643 1.69841 12.7927 1.85714 12.7005L11.1111 7.5251C11.4444 7.3357 11.6746 7.16932 11.8016 7.02599C11.9339 6.87753 12 6.70092 12 6.49616C12 6.2914 11.9339 6.11735 11.8016 5.97401C11.6746 5.82556 11.4444 5.65918 11.1111 5.4749L1.85714 0.29179C1.69841 0.204765 1.54762 0.135657 1.40476 0.0844654C1.2619 0.0281551 1.11111 0 0.952381 0C0.661376 0 0.428571 0.0998228 0.253968 0.299468C0.0846561 0.499114 0 0.765308 0 1.09805V11.8943C0 12.227 0.0846561 12.4932 0.253968 12.6929C0.428571 12.8976 0.661376 13 0.952381 13Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(PlayFillIcon);
export default ForwardRef;