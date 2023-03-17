import * as React from "react";
import { forwardRef } from "react";
const PauseFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 10 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M1.09016 13H2.95902C3.31421 13 3.5847 12.9096 3.77049 12.7287C3.95628 12.5478 4.04918 12.2818 4.04918 11.9306V1.06139C4.04918 0.699611 3.95628 0.433599 3.77049 0.263352C3.5847 0.0877839 3.31421 0 2.95902 0H1.09016C0.729508 0 0.456284 0.0904441 0.270492 0.271332C0.0901639 0.45222 0 0.715572 0 1.06139V11.9306C0 12.2818 0.0901639 12.5478 0.270492 12.7287C0.456284 12.9096 0.729508 13 1.09016 13ZM7.04918 13H8.90984C9.27049 13 9.54098 12.9096 9.72131 12.7287C9.9071 12.5478 10 12.2818 10 11.9306V1.06139C10 0.699611 9.9071 0.433599 9.72131 0.263352C9.54098 0.0877839 9.27049 0 8.90984 0H7.04918C6.68852 0 6.4153 0.0904441 6.22951 0.271332C6.04372 0.45222 5.95082 0.715572 5.95082 1.06139V11.9306C5.95082 12.2818 6.04372 12.5478 6.22951 12.7287C6.4153 12.9096 6.68852 13 7.04918 13Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(PauseFillIcon);
export default ForwardRef;