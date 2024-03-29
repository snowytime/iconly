import * as React from "react";
import { forwardRef } from "react";
const ChevronRightIcon = ({
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
  d: "M8 7C8 6.89785 7.97819 6.80376 7.93456 6.71774C7.89639 6.62634 7.83913 6.54301 7.76278 6.46774L1.28425 0.209677C1.13701 0.0698925 0.957055 0 0.744376 0C0.608044 0 0.482618 0.0322581 0.368098 0.0967742C0.253579 0.16129 0.163599 0.25 0.0981595 0.362903C0.0327198 0.47043 0 0.594086 0 0.733871C0 0.932796 0.070893 1.10753 0.212679 1.25806L6.16769 7L0.212679 12.7419C0.070893 12.8925 0 13.0672 0 13.2661C0 13.4059 0.0327198 13.5296 0.0981595 13.6371C0.163599 13.75 0.253579 13.8387 0.368098 13.9032C0.482618 13.9677 0.608044 14 0.744376 14C0.957055 14 1.13701 13.9274 1.28425 13.7823L7.76278 7.53226C7.83913 7.45699 7.89639 7.37634 7.93456 7.29032C7.97819 7.19892 8 7.10215 8 7Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ChevronRightIcon);
export default ForwardRef;