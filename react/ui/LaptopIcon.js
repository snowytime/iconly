import * as React from "react";
import { forwardRef } from "react";
const LaptopIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 23 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 12.0891C0 12.3395 0.0877254 12.5526 0.263176 12.7283C0.438627 12.9094 0.651294 13 0.901179 13H22.0988C22.3487 13 22.5614 12.9094 22.7368 12.7283C22.9123 12.5526 23 12.3395 23 12.0891C23 11.8388 22.9123 11.6257 22.7368 11.4499C22.5614 11.2688 22.3487 11.1782 22.0988 11.1782H20.3523V1.69392C20.3523 1.1346 20.2061 0.713788 19.9137 0.431469C19.6266 0.143823 19.2039 0 18.6456 0H4.35437C3.82802 0 3.41066 0.143823 3.10229 0.431469C2.79924 0.713788 2.64771 1.1346 2.64771 1.69392V11.1782H0.901179C0.651294 11.1782 0.438627 11.2688 0.263176 11.4499C0.0877254 11.6257 0 11.8388 0 12.0891ZM3.93169 11.1782V2.05347C3.93169 1.79779 3.99549 1.60602 4.12309 1.47818C4.25069 1.35034 4.44209 1.28642 4.6973 1.28642H18.3027C18.5579 1.28642 18.7493 1.35034 18.8769 1.47818C19.0045 1.60602 19.0683 1.79779 19.0683 2.05347V11.1782H3.93169Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(LaptopIcon);
export default ForwardRef;