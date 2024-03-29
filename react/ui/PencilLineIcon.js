import * as React from "react";
import { forwardRef } from "react";
const PencilLineIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 15 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2.95307 13.5H14.3672C14.5412 13.5 14.6889 13.4344 14.8102 13.3031C14.9367 13.1772 15 13.0241 15 12.8435C15 12.663 14.9367 12.5071 14.8102 12.3758C14.6889 12.2445 14.5412 12.1789 14.3672 12.1789H4.23449L2.95307 13.5ZM2.16207 12.7451L10.7919 3.80073L9.40763 2.35651L0.769907 11.309L0.0184567 13.1307C-0.0184567 13.2292 0 13.3195 0.0738267 13.4015C0.152927 13.4891 0.239937 13.5137 0.334857 13.4754L2.16207 12.7451ZM11.488 3.09503L12.2869 2.28266C12.4873 2.06931 12.5927 1.85595 12.6033 1.6426C12.6138 1.42925 12.5294 1.22684 12.3502 1.03537L12.0812 0.756376C11.9019 0.570378 11.7068 0.485584 11.4959 0.501996C11.2902 0.518408 11.0872 0.627818 10.8868 0.830228L10.0879 1.65081L11.488 3.09503Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(PencilLineIcon);
export default ForwardRef;