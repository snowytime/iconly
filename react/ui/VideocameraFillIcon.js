import * as React from "react";
import { forwardRef } from "react";
const VideocameraFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 19 13",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2.48432 13H10.7963C11.5754 13 12.1842 12.7785 12.6228 12.3356C13.0614 11.8927 13.2807 11.2683 13.2807 10.4624V2.52956C13.2807 1.72906 13.0743 1.10735 12.6615 0.664409C12.2487 0.22147 11.6528 0 10.8737 0H2.48432C1.74134 0 1.14026 0.22147 0.681059 0.664409C0.22702 1.10735 0 1.72906 0 2.52956V10.4624C0 11.2683 0.21928 11.8927 0.657841 12.3356C1.0964 12.7785 1.70523 13 2.48432 13ZM14.3332 8.86145L17.1503 11.383C17.2845 11.5004 17.4238 11.5965 17.5682 11.6712C17.7179 11.7406 17.8623 11.7752 18.0016 11.7752C18.3009 11.7752 18.5408 11.6739 18.7214 11.4711C18.9071 11.2629 19 10.9934 19 10.6626V2.33744C19 2.00657 18.9071 1.73974 18.7214 1.53695C18.5408 1.32882 18.3009 1.22475 18.0016 1.22475C17.8623 1.22475 17.7179 1.25944 17.5682 1.32882C17.4238 1.39819 17.2845 1.49425 17.1503 1.61699L14.3332 4.13054V8.86145Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(VideocameraFillIcon);
export default ForwardRef;