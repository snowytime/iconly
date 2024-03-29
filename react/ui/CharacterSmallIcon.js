import * as React from "react";
import { forwardRef } from "react";
const CharacterSmallIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 7 8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.650616 8C0.812617 8 0.945875 7.95956 1.05039 7.87867C1.16013 7.79273 1.24636 7.65624 1.30907 7.46919L1.95969 5.61137H5.02464L5.67525 7.46919C5.73796 7.6613 5.82419 7.79779 5.93393 7.87867C6.04367 7.95956 6.17954 8 6.34155 8C6.54013 8 6.69951 7.94692 6.81971 7.84076C6.9399 7.7346 7 7.59558 7 7.4237C7 7.34787 6.98955 7.27457 6.96864 7.20379C6.95297 7.12796 6.92945 7.04961 6.8981 6.96872L4.46025 0.705213C4.37141 0.47267 4.24337 0.298262 4.07615 0.181991C3.91415 0.0606635 3.71818 0 3.48824 0C3.26353 0 3.07018 0.0581359 2.90817 0.174408C2.74617 0.285624 2.61814 0.462559 2.52408 0.705213L0.0862262 6.96872C0.0548712 7.03949 0.031355 7.11532 0.0156775 7.19621C0.00522583 7.27204 0 7.34787 0 7.4237C0 7.60063 0.0574841 7.74218 0.172452 7.84834C0.292646 7.94945 0.452034 8 0.650616 8ZM2.30459 4.62559L3.40202 1.46351H3.58231L4.67973 4.62559H2.30459Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CharacterSmallIcon);
export default ForwardRef;