import * as React from "react";
import { forwardRef } from "react";
const MusicalNoteIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 10 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M10 3.62409V0.629662C10 0.417292 9.9235 0.252704 9.77049 0.1359C9.61749 0.013787 9.43716 -0.0260326 9.22951 0.0164416L5.01639 0.908399C4.47541 1.0252 4.20492 1.30394 4.20492 1.74461L4.22131 10.6005C4.26503 11.004 4.09563 11.2429 3.71311 11.3172L2.40984 11.58C1.59016 11.7499 0.983607 12.034 0.590164 12.4322C0.196721 12.8304 0 13.3294 0 13.9294C0 14.54 0.215847 15.0364 0.647541 15.4186C1.0847 15.8062 1.64481 16 2.32787 16C2.62842 16 2.95082 15.9416 3.29508 15.8248C3.64481 15.7133 3.97268 15.5328 4.27869 15.2832C4.59016 15.0337 4.84426 14.7045 5.04098 14.2957C5.2377 13.8922 5.33607 13.4011 5.33607 12.8224V5.53543C5.33607 5.32837 5.36339 5.19033 5.41803 5.12131C5.47814 5.04698 5.60656 4.98857 5.80328 4.9461L9.54918 4.14971C9.68579 4.11785 9.79508 4.0568 9.87705 3.96654C9.95902 3.87097 10 3.75682 10 3.62409Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(MusicalNoteIcon);
export default ForwardRef;