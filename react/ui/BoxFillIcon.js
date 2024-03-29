import * as React from "react";
import { forwardRef } from "react";
const BoxFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 16 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M8.00419 8.54687L15.4323 4.36719C15.3166 4.26302 15.172 4.16146 14.9986 4.0625L9.43145 0.921875C8.94254 0.640625 8.46682 0.5 8.00419 0.5C7.53631 0.5 7.05746 0.640625 6.56855 0.921875L1.00933 4.0625C0.830591 4.16146 0.683407 4.26302 0.56775 4.36719L8.00419 8.54687ZM7.4601 17.5V9.48437L0.0630833 5.29687C0.0210264 5.45312 0 5.65104 0 5.89062V11.9766C0 12.5443 0.0972469 12.9635 0.29176 13.2344C0.486274 13.5 0.764873 13.737 1.12761 13.9453L7.31027 17.4297C7.33656 17.4453 7.36021 17.4583 7.38124 17.4688C7.40753 17.4844 7.43381 17.4948 7.4601 17.5ZM8.5404 17.5C8.56668 17.4948 8.59297 17.4844 8.61925 17.4688C8.64554 17.4583 8.67182 17.4453 8.69811 17.4297L14.8724 13.9453C15.2404 13.737 15.519 13.5 15.7082 13.2344C15.9028 12.9635 16 12.5443 16 11.9766V5.89062C16 5.65104 15.979 5.45312 15.9369 5.29687L8.5404 9.48437V17.5Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(BoxFillIcon);
export default ForwardRef;