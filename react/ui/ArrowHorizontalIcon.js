import * as React from "react";
import { forwardRef } from "react";
const ArrowHorizontalIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 15 10",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 5.00405C0 5.10121 0.0177755 5.19568 0.0533266 5.28745C0.0888776 5.37922 0.144744 5.46559 0.220924 5.54656L4.28898 9.78138C4.43118 9.92713 4.59624 10 4.78415 10C4.9873 10 5.14982 9.93522 5.27171 9.80567C5.39868 9.67072 5.46216 9.49798 5.46216 9.28745C5.46216 9.18489 5.44439 9.09312 5.40884 9.01215C5.37836 8.93118 5.33266 8.8583 5.27171 8.79352L3.48908 6.95547L2.0645 5.64372L3.83189 5.7247H11.1681L12.9355 5.64372L11.5109 6.95547L9.72829 8.79352C9.66734 8.8583 9.6191 8.93118 9.58354 9.01215C9.55307 9.09312 9.53784 9.18489 9.53784 9.28745C9.53784 9.49798 9.59878 9.67072 9.72067 9.80567C9.84764 9.93522 10.0127 10 10.2158 10C10.4038 10 10.5688 9.92713 10.711 9.78138L14.7791 5.54656C14.8553 5.46559 14.9111 5.37922 14.9467 5.28745C14.9822 5.19568 15 5.10121 15 5.00405C15 4.90148 14.9822 4.80432 14.9467 4.71255C14.9111 4.62078 14.8553 4.53711 14.7791 4.46154L10.711 0.226721C10.5688 0.0755735 10.4038 0 10.2158 0C10.0127 0 9.84764 0.0674764 9.72067 0.202429C9.59878 0.331984 9.53784 0.502024 9.53784 0.712551C9.53784 0.815115 9.55307 0.906883 9.58354 0.987854C9.6191 1.06883 9.66734 1.1417 9.72829 1.20648L11.5109 3.05263L12.9355 4.35628L11.1681 4.2834H3.83189L2.0645 4.35628L3.48908 3.05263L5.27171 1.20648C5.33266 1.1417 5.37836 1.06883 5.40884 0.987854C5.44439 0.906883 5.46216 0.815115 5.46216 0.712551C5.46216 0.502024 5.39868 0.331984 5.27171 0.202429C5.14982 0.0674764 4.9873 0 4.78415 0C4.59624 0 4.43118 0.0755735 4.28898 0.226721L0.220924 4.46154C0.144744 4.53711 0.0888776 4.62078 0.0533266 4.71255C0.0177755 4.80432 0 4.90148 0 5.00405Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ArrowHorizontalIcon);
export default ForwardRef;