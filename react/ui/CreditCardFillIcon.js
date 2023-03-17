import * as React from "react";
import { forwardRef } from "react";
const CreditCardFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 19 14",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M3.30681 11.459C3.06965 11.459 2.8783 11.3852 2.73277 11.2377C2.58723 11.0902 2.51447 10.9016 2.51447 10.6721V9.15574C2.51447 8.92076 2.58723 8.73224 2.73277 8.59016C2.8783 8.44262 3.06965 8.36885 3.30681 8.36885H5.28766C5.52482 8.36885 5.71617 8.44262 5.8617 8.59016C6.00723 8.73224 6.08 8.92076 6.08 9.15574V10.6721C6.08 10.9016 6.00723 11.0902 5.8617 11.2377C5.71617 11.3852 5.52482 11.459 5.28766 11.459H3.30681ZM0 5.16393V3.30328H19V5.16393H0ZM2.53872 14H16.4613C17.3075 14 17.9409 13.7869 18.3613 13.3607C18.7871 12.9399 19 12.3087 19 11.4672V2.54098C19 1.69945 18.7871 1.06557 18.3613 0.639344C17.9409 0.213115 17.3075 0 16.4613 0H2.53872C1.69248 0 1.05645 0.213115 0.630638 0.639344C0.210213 1.06011 0 1.69399 0 2.54098V11.4672C0 12.3087 0.210213 12.9399 0.630638 13.3607C1.05645 13.7869 1.69248 14 2.53872 14Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CreditCardFillIcon);
export default ForwardRef;