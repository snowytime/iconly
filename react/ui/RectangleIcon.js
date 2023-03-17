import * as React from "react";
import { forwardRef } from "react";
const RectangleIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 18 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2.39695 14H15.6031C16.4071 14 17.0076 13.8023 17.4046 13.4068C17.8015 13.0165 18 12.4309 18 11.6502V2.35741C18 1.57668 17.8015 0.988593 17.4046 0.593156C17.0076 0.197719 16.4071 0 15.6031 0H2.39695C1.59796 0 0.997455 0.197719 0.59542 0.593156C0.198473 0.983523 0 1.57161 0 2.35741V11.6502C0 12.4309 0.198473 13.0165 0.59542 13.4068C0.997455 13.8023 1.59796 14 2.39695 14ZM2.41221 12.7757C2.03053 12.7757 1.73791 12.6768 1.53435 12.4791C1.33079 12.2763 1.22901 11.9772 1.22901 11.5817V2.42586C1.22901 2.03042 1.33079 1.73131 1.53435 1.52852C1.73791 1.32573 2.03053 1.22433 2.41221 1.22433H15.5878C15.9644 1.22433 16.2545 1.32573 16.458 1.52852C16.6667 1.73131 16.771 2.03042 16.771 2.42586V11.5817C16.771 11.9772 16.6667 12.2763 16.458 12.4791C16.2545 12.6768 15.9644 12.7757 15.5878 12.7757H2.41221Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(RectangleIcon);
export default ForwardRef;