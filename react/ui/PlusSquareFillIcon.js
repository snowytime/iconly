import * as React from "react";
import { forwardRef } from "react";
const PlusSquareFillIcon = ({
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
  d: "M2.38783 14H11.6122C12.4081 14 13.0038 13.8023 13.3992 13.4068C13.7997 13.0165 14 12.4284 14 11.6426V2.35741C14 1.57161 13.7997 0.983523 13.3992 0.593156C13.0038 0.197719 12.4081 0 11.6122 0H2.38783C1.59189 0 0.993663 0.197719 0.593156 0.593156C0.197719 0.983523 0 1.57161 0 2.35741V11.6426C0 12.4284 0.197719 13.0165 0.593156 13.4068C0.993663 13.8023 1.59189 14 2.38783 14ZM3.29278 6.9962C3.29278 6.79848 3.35615 6.63878 3.48289 6.51711C3.60963 6.39037 3.77186 6.327 3.96958 6.327H6.34981V3.94677C6.34981 3.74905 6.40811 3.58682 6.52471 3.46008C6.64639 3.33333 6.80355 3.26996 6.9962 3.26996C7.19392 3.26996 7.35361 3.33333 7.47529 3.46008C7.60203 3.58682 7.6654 3.74905 7.6654 3.94677V6.327H10.0532C10.251 6.327 10.4106 6.39037 10.5323 6.51711C10.6591 6.63878 10.7224 6.79848 10.7224 6.9962C10.7224 7.18885 10.6591 7.34601 10.5323 7.46768C10.4056 7.58428 10.2459 7.64259 10.0532 7.64259H7.6654V10.0304C7.6654 10.2281 7.60203 10.3904 7.47529 10.5171C7.35361 10.6388 7.19392 10.6996 6.9962 10.6996C6.80355 10.6996 6.64639 10.6388 6.52471 10.5171C6.40811 10.3904 6.34981 10.2281 6.34981 10.0304V7.64259H3.96958C3.77186 7.64259 3.60963 7.58428 3.48289 7.46768C3.35615 7.34601 3.29278 7.18885 3.29278 6.9962Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(PlusSquareFillIcon);
export default ForwardRef;