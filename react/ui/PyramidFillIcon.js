import * as React from "react";
import { forwardRef } from "react";
const PyramidFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 16 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.147669 13.6002C0.0100317 13.851 -0.0307498 14.0827 0.0253247 14.2953C0.0813992 14.5079 0.219037 14.6661 0.438237 14.7696L6.91484 17.7465C7.02189 17.7955 7.1213 17.8392 7.21306 17.8773C7.30991 17.9209 7.40677 17.9564 7.50362 17.9836V0C7.41696 0.0654248 7.34305 0.155384 7.28187 0.269877L0.147669 13.6002ZM15.8613 13.6165L8.72707 0.286234C8.69138 0.231713 8.65315 0.179918 8.61237 0.13085C8.57668 0.081781 8.541 0.0436165 8.50532 0.0163562V18C8.60217 17.9673 8.69903 17.9291 8.79589 17.8855C8.89274 17.8473 8.9947 17.8037 9.10175 17.7547L15.5631 14.786C15.7874 14.6824 15.925 14.5243 15.976 14.3117C16.032 14.099 15.9938 13.8673 15.8613 13.6165Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(PyramidFillIcon);
export default ForwardRef;