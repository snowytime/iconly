import * as React from "react";
import { forwardRef } from "react";
const BarabadosIcon = ({
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
  d: "M12 0H24V24H12V0Z",
  fill: "#FFE15A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0H12V24H0V0ZM24 0V24H36V0H24Z",
  fill: "#41479B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22.965 8.512C21.83 8.56528 20.7543 9.03444 19.943 9.83H20.807C20.1735 11.1484 19.7455 12.5561 19.538 14.004L18.648 13.856V9.817L19.511 10.105L18 6.315L16.489 10.105L17.352 9.812V13.856L16.462 14.004C16.2544 12.5561 15.8265 11.1484 15.193 9.83H16.057C15.2455 9.03421 14.1694 8.56504 13.034 8.512C15.194 11.148 15.194 15.542 15.194 15.542L17.352 15.176V18.178H18.648V15.176L20.806 15.542C20.806 15.542 20.805 11.149 22.965 8.512Z",
  fill: "#464655"
}));
const ForwardRef = forwardRef(BarabadosIcon);
export default ForwardRef;