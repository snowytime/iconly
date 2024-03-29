import * as React from "react";
import { forwardRef } from "react";
const UnitedKingdomIcon = ({
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
  d: "M36 2.265V0H32.602L21.103 7.666V0H14.896V7.666L3.398 0H0V2.265L9.865 8.842H0V15.158H9.865L0 21.735V24H3.398L14.897 16.334V24H21.103V16.334L32.603 24H36V21.735L26.135 15.158H36V8.842H26.134L36 2.265Z",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 13.895H19.862V24H16.138V13.895H0V10.105H16.138V0H19.862V10.105H36V13.895ZM0 24H1.476L14.862 15.158H12.582L0 23.472M36 22.849L24.355 15.158H22.075L35.47 24H36M0 1.329L11.375 8.842H13.655L0.241 0H0M34.49 0L21.103 8.842H23.383L36 0.506V0",
  fill: "#FF4B55"
}));
const ForwardRef = forwardRef(UnitedKingdomIcon);
export default ForwardRef;