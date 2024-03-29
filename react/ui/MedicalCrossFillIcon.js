import * as React from "react";
import { forwardRef } from "react";
const MedicalCrossFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 17 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 10.6329C0 11.1022 0.147257 11.4814 0.441771 11.7706C0.736285 12.0598 1.12079 12.2044 1.59528 12.2044H5.29307V15.9121C5.29307 16.3869 5.4376 16.7688 5.72666 17.058C6.01572 17.3527 6.39477 17.5 6.86381 17.5H10.1362C10.6052 17.5 10.9843 17.3527 11.2733 17.058C11.5624 16.7688 11.7069 16.3869 11.7069 15.9121V12.2044H15.4129C15.8874 12.2044 16.2692 12.0598 16.5582 11.7706C16.8527 11.4814 17 11.1022 17 10.6329V7.35893C17 6.88966 16.8527 6.51043 16.5582 6.22123C16.2692 5.93203 15.8874 5.78743 15.4129 5.78743H11.7069V2.08787C11.7069 1.61314 11.5624 1.23118 11.2733 0.941984C10.9843 0.647328 10.6052 0.5 10.1362 0.5H6.86381C6.39477 0.5 6.01572 0.647328 5.72666 0.941984C5.4376 1.23118 5.29307 1.61314 5.29307 2.08787V5.78743H1.5871C1.11261 5.78743 0.728104 5.93203 0.43359 6.22123C0.14453 6.51043 0 6.88966 0 7.35893V10.6329Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(MedicalCrossFillIcon);
export default ForwardRef;