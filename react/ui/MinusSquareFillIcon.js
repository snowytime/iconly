import * as React from "react";
import { forwardRef } from "react";
const MinusSquareFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 14 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2.38783 14H11.6122C12.4081 14 13.0038 13.8023 13.3992 13.4068C13.7997 13.0165 14 12.4284 14 11.6426V2.35741C14 1.57161 13.7997 0.983523 13.3992 0.593156C13.0038 0.197719 12.4081 0 11.6122 0H2.38783C1.59189 0 0.993663 0.197719 0.593156 0.593156C0.197719 0.983523 0 1.57161 0 2.35741V11.6426C0 12.4284 0.197719 13.0165 0.593156 13.4068C0.993663 13.8023 1.59189 14 2.38783 14ZM3.93916 7.65779C3.7161 7.65779 3.53359 7.60203 3.39163 7.49049C3.25475 7.37389 3.18631 7.21166 3.18631 7.0038C3.18631 6.79087 3.25475 6.62611 3.39163 6.50951C3.52852 6.3929 3.71103 6.3346 3.93916 6.3346H10.0836C10.3118 6.3346 10.4918 6.3929 10.6236 6.50951C10.7605 6.62611 10.8289 6.79087 10.8289 7.0038C10.8289 7.21166 10.7579 7.37389 10.616 7.49049C10.4791 7.60203 10.3016 7.65779 10.0836 7.65779H3.93916Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(MinusSquareFillIcon);
export default ForwardRef;