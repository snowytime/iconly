import * as React from "react";
import { forwardRef } from "react";
const CambodiaIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 36 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M36 24H0V0H36",
  fill: "#41479B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 5.684H36V18.315H0V5.684Z",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26.214 16.789V15.893H25.92V15.296H25.627V14.699H25.333V14.102H24.453V12.311L24.747 12.013V11.117H24.453V10.52H24.16V9.625H23.867V9.028H23.573V8.431H23.28V8.133H22.693V8.431H22.4V9.028H22.107V9.625H21.813V10.52H21.52V11.117H19.76V10.222H19.467V9.327H19.173V8.431H18.88V7.834H18.587V7.237H18.293V6.939H18.147V6.64H17.853V6.939H17.707V7.237H17.413V7.834H17.12V8.431H16.827V9.327H16.533V10.222H16.24V11.117H14.48V10.52H14.187V9.625H13.893V9.028H13.6V8.431H13.306V8.133H12.72V8.431H12.426V9.028H12.133V9.625H11.84V10.52H11.546V11.117H11.253V12.013L11.546 12.311V14.102H10.666V14.699H10.373V15.296H10.08V15.893H9.786V16.789H9.493V17.684H26.507V16.789H26.214Z",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(CambodiaIcon);
export default ForwardRef;