import * as React from "react";
import { forwardRef } from "react";
const ChevronUpDownIcon = ({
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
  d: "M5 0C4.92631 0 4.85262 0.0177103 4.77893 0.0531309C4.70958 0.0885516 4.63589 0.144213 4.55787 0.220114L0.175553 4.37192C0.0585176 4.4883 0 4.65528 0 4.87287C0 5.00443 0.0260078 5.12334 0.0780234 5.2296C0.130039 5.3308 0.199393 5.41177 0.286086 5.47249C0.377113 5.53321 0.478977 5.56357 0.591677 5.56357C0.665366 5.56357 0.736888 5.54839 0.806242 5.51803C0.875596 5.48767 0.949285 5.43707 1.02731 5.36622L5 1.58634L8.97269 5.36622C9.04638 5.43707 9.1179 5.48767 9.18726 5.51803C9.26095 5.54839 9.33247 5.56357 9.40182 5.56357C9.51886 5.56357 9.62072 5.53321 9.70741 5.47249C9.79844 5.41177 9.86996 5.3308 9.92198 5.2296C9.97399 5.12334 10 5.00443 10 4.87287C10 4.65528 9.94148 4.4883 9.82445 4.37192L5.44213 0.212524C5.36411 0.141682 5.28825 0.0885516 5.21456 0.0531309C5.14521 0.0177103 5.07369 0 5 0ZM5 16C5.07369 16 5.14521 15.9823 5.21456 15.9469C5.28825 15.9114 5.36411 15.8583 5.44213 15.7875L9.82445 11.6281C9.94148 11.5066 10 11.3397 10 11.1271C10 10.9956 9.97399 10.8767 9.92198 10.7704C9.86996 10.6641 9.79844 10.5806 9.70741 10.5199C9.62072 10.4592 9.51886 10.4288 9.40182 10.4288C9.33247 10.4288 9.26095 10.4466 9.18726 10.482C9.1179 10.5123 9.04638 10.5629 8.97269 10.6338L5 14.4137L1.02731 10.6338C0.949285 10.5629 0.875596 10.5123 0.806242 10.482C0.736888 10.4466 0.665366 10.4288 0.591677 10.4288C0.478977 10.4288 0.377113 10.4592 0.286086 10.5199C0.199393 10.5806 0.130039 10.6641 0.0780234 10.7704C0.0260078 10.8767 0 10.9956 0 11.1271C0 11.3397 0.0585176 11.5066 0.175553 11.6281L4.55787 15.7799C4.63589 15.8558 4.70958 15.9114 4.77893 15.9469C4.85262 15.9823 4.92631 16 5 16Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ChevronUpDownIcon);
export default ForwardRef;