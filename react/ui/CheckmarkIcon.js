import * as React from "react";
import { forwardRef } from "react";
const CheckmarkIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 14 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M5.29774 14.5C5.64442 14.5 5.91797 14.3471 6.1184 14.0413L13.7969 1.85167C13.8673 1.73698 13.9187 1.63322 13.9512 1.54037C13.9837 1.44207 14 1.34377 14 1.24547C14 1.02155 13.9323 0.84133 13.7969 0.704798C13.6614 0.568266 13.4827 0.5 13.2606 0.5C13.0981 0.5 12.9654 0.532768 12.8624 0.598303C12.7595 0.658377 12.6593 0.764872 12.5618 0.917788L5.26523 12.6404L1.47882 7.64336C1.28381 7.37576 1.05088 7.24195 0.780035 7.24195C0.552525 7.24195 0.365641 7.31568 0.219385 7.46314C0.0731283 7.60513 0 7.78808 0 8.012C0 8.1103 0.0189592 8.21133 0.0568775 8.3151C0.0947959 8.4134 0.154382 8.5117 0.235636 8.61001L4.4527 14.0249C4.69646 14.3416 4.97814 14.5 5.29774 14.5Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CheckmarkIcon);
export default ForwardRef;