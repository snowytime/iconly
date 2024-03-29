import * as React from "react";
import { forwardRef } from "react";
const NpmIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 58 24",
  fill: "none",
  color: "#CB3837",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 0H58V20.5694H29V24H16.109V20.5694H0V0ZM3.22274 17.1435H9.66823V6.85647H12.891V17.1435H16.1137V3.43059H3.22274V17.1435ZM19.3318 3.43059V20.5694H25.7773V17.1435H32.2227V3.43059H19.3318ZM25.7773 6.86118H29V13.7129H25.7773V6.86118ZM35.4455 3.43059V17.1435H41.891V6.85647H45.1137V17.1435H48.3364V6.85647H51.5592V17.1435H54.7819V3.43059H35.4455Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(NpmIcon);
export default ForwardRef;