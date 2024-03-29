import * as React from "react";
import { forwardRef } from "react";
const ItalicIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 8 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.617756 11.5H5.49809C5.68341 11.5 5.83271 11.4487 5.94596 11.3462C6.06436 11.2385 6.12357 11.0949 6.12357 10.9154C6.12357 10.741 6.06694 10.6026 5.95368 10.5C5.84043 10.3974 5.69114 10.3462 5.50581 10.3462H3.77609L5.65253 1.65385H7.38224C7.56242 1.65385 7.70914 1.60256 7.82239 1.5C7.9408 1.39231 8 1.24872 8 1.06923C8 0.894872 7.94337 0.75641 7.83012 0.653846C7.71686 0.551282 7.57014 0.5 7.38997 0.5H2.48653C2.30635 0.5 2.15963 0.551282 2.04638 0.653846C1.93312 0.75641 1.87643 0.894872 1.87643 1.06923C1.87643 1.24872 1.93312 1.39231 2.04638 1.5C2.16478 1.60256 2.31407 1.65385 2.49425 1.65385H4.22397L2.34753 10.3462H0.610034C0.429855 10.3462 0.283138 10.3974 0.169883 10.5C0.0566276 10.6026 0 10.741 0 10.9154C0 11.0949 0.0566276 11.2385 0.169883 11.3462C0.288286 11.4487 0.437577 11.5 0.617756 11.5Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ItalicIcon);
export default ForwardRef;