import * as React from "react";
import { forwardRef } from "react";
const OutlineAllIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 14 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.646388 7.61217H6.38783V13.3536H7.61217V7.61217H13.3536V6.38783H7.61217V0.646388H6.38783V6.38783H0.646388V7.61217ZM0 13.3916C0 13.5741 0.0557668 13.7212 0.1673 13.8327C0.278834 13.9442 0.425856 14 0.608365 14H13.3992C13.5817 14 13.7262 13.9442 13.8327 13.8327C13.9442 13.7212 14 13.5741 14 13.3916V0.60076C14 0.418251 13.9442 0.273764 13.8327 0.1673C13.7262 0.0557668 13.5817 0 13.3992 0H0.608365C0.425856 0 0.278834 0.0557668 0.1673 0.1673C0.0557668 0.273764 0 0.418251 0 0.60076V13.3916ZM1.22433 12.5551V1.44487C1.22433 1.29785 1.29785 1.22433 1.44487 1.22433H12.5551C12.7022 1.22433 12.7757 1.29785 12.7757 1.44487V12.5551C12.7757 12.7022 12.7022 12.7757 12.5551 12.7757H1.44487C1.29785 12.7757 1.22433 12.7022 1.22433 12.5551Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(OutlineAllIcon);
export default ForwardRef;