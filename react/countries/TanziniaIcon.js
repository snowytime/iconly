import * as React from "react";
import { forwardRef } from "react";
const TanziniaIcon = ({
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
  d: "M0 18.316V0H27.31L0 18.316Z",
  fill: "#73AF00"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 5.684V24H8.69L36 5.684Z",
  fill: "#4173CD"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 6.04V0H26.94L0 17.96V24H9.06L36 6.04Z",
  fill: "#FFE15A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 24H5.663L36 3.776V0H30.337L0 20.224",
  fill: "#464655"
}));
const ForwardRef = forwardRef(TanziniaIcon);
export default ForwardRef;