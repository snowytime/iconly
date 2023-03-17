import * as React from "react";
import { forwardRef } from "react";
const RectangleDottedIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 19 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.000488281 4.79386H1.29778V3.09098C1.29778 2.6673 1.40522 2.34954 1.62009 2.1377C1.83496 1.92042 2.14384 1.81179 2.54673 1.81179H4.21468V0.5H2.53062C1.68724 0.5 1.05336 0.711841 0.628991 1.13552C0.209989 1.55378 0.000488281 2.18387 0.000488281 3.0258V4.79386ZM0.000488281 10.0899H1.29778V5.9101H0.000488281V10.0899ZM2.53062 15.5H4.21468V14.1882H2.54673C2.14384 14.1882 1.83496 14.0823 1.62009 13.8705C1.40522 13.6532 1.29778 13.3327 1.29778 12.909V11.2061H0.000488281V12.9742C0.000488281 13.8161 0.209989 14.4462 0.628991 14.8645C1.05336 15.2882 1.68724 15.5 2.53062 15.5ZM5.31859 15.5H8.95262V14.1882H5.31859V15.5ZM10.0485 15.5H13.6824V14.1882H10.0485V15.5ZM16.4704 15.5C17.3137 15.5 17.9449 15.2882 18.3639 14.8645C18.7883 14.4462 19.0005 13.8161 19.0005 12.9742V11.2061H17.7032V12.909C17.7032 13.3327 17.5958 13.6532 17.3809 13.8705C17.166 14.0823 16.8571 14.1882 16.4542 14.1882H14.7863V15.5H16.4704ZM19.0005 4.79386V3.0258C19.0005 2.18387 18.7883 1.55378 18.3639 1.13552C17.9449 0.711841 17.3137 0.5 16.4704 0.5H14.7863V1.81179H16.4542C16.8571 1.81179 17.166 1.92042 17.3809 2.1377C17.5958 2.34954 17.7032 2.6673 17.7032 3.09098V4.79386H19.0005ZM19.0005 10.0899V5.9101H17.7032V10.0899H19.0005ZM5.31859 1.81179H8.95262V0.5H5.31859V1.81179ZM10.0485 1.81179H13.6824V0.5H10.0485V1.81179Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(RectangleDottedIcon);
export default ForwardRef;