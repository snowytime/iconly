import * as React from "react";
import { forwardRef } from "react";
const MadeiraIcon = ({
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
  d: "M36 0V24H24V0H36ZM0 24H12V0H0V24Z",
  fill: "#41479B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.103 10.421H19.552V8.842L20.483 7.579H15.517L16.448 8.842V10.421H14.897L13.655 9.474V14.526L14.897 13.579H16.448V15.158L15.517 16.421H20.483L19.552 15.158V13.579H21.103L22.345 14.526V9.474L21.103 10.421Z",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.103 11.368H18.621V8.842H17.379V11.368H14.897V12.631H17.379V15.158H18.621V12.631H21.103V11.368Z",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(MadeiraIcon);
export default ForwardRef;