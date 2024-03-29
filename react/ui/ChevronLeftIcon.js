import * as React from "react";
import { forwardRef } from "react";
const ChevronLeftIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 8 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 7C0 7.10215 0.0190866 7.19892 0.0572597 7.29032C0.0954328 7.37634 0.152693 7.45699 0.229039 7.53226L6.71575 13.7823C6.86299 13.9274 7.04022 14 7.24744 14C7.38923 14 7.51466 13.9677 7.62372 13.9032C7.73824 13.8387 7.82822 13.75 7.89366 13.6371C7.96455 13.5296 8 13.4059 8 13.2661C8 13.0672 7.92638 12.8925 7.77914 12.7419L1.82413 7L7.77914 1.25806C7.92638 1.10753 8 0.932796 8 0.733871C8 0.594086 7.96455 0.47043 7.89366 0.362903C7.82822 0.25 7.73824 0.16129 7.62372 0.0967742C7.51466 0.0322581 7.38923 0 7.24744 0C7.04022 0 6.86299 0.0698925 6.71575 0.209677L0.229039 6.46774C0.152693 6.54301 0.0954328 6.62634 0.0572597 6.71774C0.0190866 6.80376 0 6.89785 0 7Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ChevronLeftIcon);
export default ForwardRef;