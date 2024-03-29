import * as React from "react";
import { forwardRef } from "react";
const StopIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 13 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 11.2374C0 11.7904 0.156947 12.2211 0.470841 12.5294C0.790055 12.8431 1.22897 13 1.7876 13H11.2124C11.7763 13 12.2153 12.8431 12.5292 12.5294C12.8431 12.2211 13 11.7904 13 11.2374V1.76258C13 1.20429 12.8431 0.770961 12.5292 0.462577C12.2153 0.154192 11.7763 0 11.2124 0H1.7876C1.22897 0 0.790055 0.154192 0.470841 0.462577C0.156947 0.770961 0 1.20429 0 1.76258V11.2374ZM1.28484 10.9344V2.06564C1.28484 1.82106 1.35134 1.62965 1.48435 1.49141C1.62267 1.35317 1.81154 1.28405 2.05095 1.28405H10.949C11.1938 1.28405 11.3826 1.35317 11.5157 1.49141C11.6487 1.62965 11.7152 1.82106 11.7152 2.06564V10.9344C11.7152 11.1789 11.6487 11.3703 11.5157 11.5086C11.3826 11.6468 11.1938 11.716 10.949 11.716H2.05095C1.81154 11.716 1.62267 11.6468 1.48435 11.5086C1.35134 11.3703 1.28484 11.1789 1.28484 10.9344Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(StopIcon);
export default ForwardRef;