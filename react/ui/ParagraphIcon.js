import * as React from "react";
import { forwardRef } from "react";
const ParagraphIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 12 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 4.51341C0 5.32306 0.170874 6.02815 0.512621 6.62869C0.859547 7.22922 1.34369 7.69839 1.96505 8.03619C2.58641 8.36863 3.31392 8.53485 4.14757 8.53485H5.40583V14.7601C5.40583 14.9853 5.46796 15.1649 5.59223 15.2989C5.72168 15.433 5.89773 15.5 6.12039 15.5C6.33786 15.5 6.51133 15.433 6.64078 15.2989C6.7754 15.1649 6.84272 14.9853 6.84272 14.7601V1.98794H8.52816V14.7601C8.52816 14.9853 8.59029 15.1649 8.71456 15.2989C8.84401 15.433 9.01748 15.5 9.23495 15.5C9.45761 15.5 9.63366 15.433 9.76311 15.2989C9.89773 15.1649 9.96505 14.9853 9.96505 14.7601V1.98794H11.2777C11.4951 1.98794 11.6686 1.91823 11.7981 1.77882C11.9327 1.63941 12 1.4571 12 1.2319C12 1.0067 11.9327 0.829759 11.7981 0.701072C11.6686 0.567024 11.4951 0.5 11.2777 0.5H4.10874C3.28544 0.5 2.5657 0.66622 1.94951 0.99866C1.33333 1.3311 0.854369 1.80027 0.512621 2.40617C0.170874 3.0067 0 3.70912 0 4.51341Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ParagraphIcon);
export default ForwardRef;