import * as React from "react";
import { forwardRef } from "react";
const AffirmIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 38 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  opacity: 0.07,
  d: "M35 0H3C1.3 0 0 1.3 0 3V21C0 22.7 1.4 24 3 24H35C36.7 24 38 22.7 38 21V3C38 1.3 36.6 0 35 0Z",
  fill: "black"
}), /*#__PURE__*/React.createElement("path", {
  d: "M35 1C36.1 1 37 1.9 37 3V21C37 22.1 36.1 23 35 23H3C1.9 23 1 22.1 1 21V3C1 1.9 1.9 1 3 1H35Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M5.968 16.938C5.598 16.938 5.408 16.755 5.408 16.454C5.408 15.894 6.033 15.706 7.172 15.585C7.172 16.331 6.667 16.937 5.965 16.937H5.968V16.938ZM6.458 12.741C5.644 12.741 4.708 13.124 4.2 13.529L4.664 14.509C5.072 14.136 5.73 13.817 6.324 13.817C6.89 13.817 7.202 14.006 7.202 14.387C7.202 14.642 6.995 14.772 6.605 14.823C5.145 15.012 4 15.415 4 16.54C4 17.432 4.635 17.971 5.627 17.971C6.335 17.971 6.965 17.578 7.265 17.061V17.831H8.585V14.605C8.585 13.275 7.662 12.738 6.459 12.738V12.741H6.458ZM19.708 12.886V17.826H21.121V15.446C21.121 14.315 21.805 13.982 22.282 13.982C22.497 13.98 22.707 14.042 22.886 14.161L23.145 12.855C22.9448 12.7749 22.7305 12.7362 22.515 12.741C21.789 12.741 21.332 13.062 21.031 13.716V12.886H19.708ZM29.69 12.74C28.944 12.74 28.385 13.182 28.095 13.607C27.825 13.057 27.255 12.741 26.569 12.741C25.823 12.741 25.305 13.155 25.067 13.633V12.886H23.704V17.825H25.118V15.282C25.118 14.372 25.596 13.932 26.042 13.932C26.446 13.932 26.817 14.192 26.817 14.866V17.825H28.228V15.282C28.228 14.358 28.695 13.932 29.161 13.932C29.535 13.932 29.931 14.202 29.931 14.857V17.825H31.343V14.41C31.343 13.3 30.596 12.74 29.693 12.74M16.27 12.886H14.991V12.384C14.991 11.73 15.364 11.544 15.685 11.544C15.905 11.547 16.12 11.601 16.315 11.701L16.751 10.705C16.751 10.705 16.309 10.417 15.506 10.417C14.604 10.417 13.577 10.926 13.577 12.523V12.886H11.439V12.384C11.439 11.73 11.811 11.544 12.133 11.544C12.353 11.544 12.569 11.598 12.763 11.701L13.198 10.705C12.938 10.553 12.521 10.417 11.954 10.417C11.052 10.417 10.025 10.926 10.025 12.523V12.886H9.208V13.975H10.028V17.825H11.438V13.975H13.58V17.825H14.991V13.975H16.271V12.885L16.27 12.886Z",
  fill: "#101820"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.523 12.886H17.113V17.823H18.523V12.886Z",
  fill: "#101820"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M17.165 12.046H18.546C19.352 9.513 22.086 7.286 25.336 7.286C29.29 7.286 32.706 10.296 32.706 14.982C32.718 15.944 32.586 16.902 32.314 17.825H33.654L33.668 17.779C33.894 16.865 34.005 15.927 34 14.986C34 9.761 30.192 6 25.339 6C21.527 6 18.129 8.646 17.166 12.048V12.046H17.165Z",
  fill: "#4A4AF4"
}));
const ForwardRef = forwardRef(AffirmIcon);
export default ForwardRef;