import * as React from "react";
import { forwardRef } from "react";
const QuotelevelDecreaseIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 8 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.568183 14C0.729799 14 0.866163 13.9424 0.977274 13.8273C1.08839 13.7172 1.14394 13.5821 1.14394 13.422V0.57051C1.14394 0.410367 1.08839 0.275246 0.977274 0.165147C0.866163 0.0550492 0.729799 0 0.568183 0C0.411617 0 0.277778 0.0550492 0.166667 0.165147C0.0555556 0.275246 0 0.410367 0 0.57051V13.422C0 13.5821 0.0555556 13.7172 0.166667 13.8273C0.277778 13.9424 0.411617 14 0.568183 14ZM6.81818 9.30081C7 9.42091 7.18182 9.48097 7.36364 9.48097C7.5505 9.48097 7.70202 9.42341 7.81818 9.30831C7.93939 9.1882 8 9.01555 8 8.79035V5.23217C8 4.88686 7.87374 4.66667 7.62121 4.57158C7.37374 4.47149 7.10606 4.51904 6.81818 4.71421L4.3106 6.40322C4.16414 6.50331 4.06565 6.63092 4.01515 6.78606C3.96464 6.9412 3.96211 7.09884 4.00757 7.25898C4.05807 7.41412 4.15908 7.54173 4.3106 7.64182L6.81818 9.30081Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(QuotelevelDecreaseIcon);
export default ForwardRef;