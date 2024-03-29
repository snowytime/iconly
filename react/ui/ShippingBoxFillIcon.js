import * as React from "react";
import { forwardRef } from "react";
const ShippingBoxFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 16 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M8.5399 17C8.56619 16.9948 8.59247 16.9844 8.61876 16.9688C8.64504 16.9583 8.67133 16.9453 8.69761 16.9297L14.8724 13.4453C15.2404 13.237 15.519 13 15.7082 12.7344C15.9028 12.4635 16 12.0443 16 11.4766V5.39062C16 5.15104 15.979 4.95312 15.9369 4.79688L8.5399 8.98438V17ZM7.4596 17V8.98438L0.0630833 4.79688C0.0210264 4.95312 0 5.15104 0 5.39062V11.4766C0 12.0443 0.0972469 12.4635 0.29176 12.7344C0.486274 13 0.764873 13.237 1.12761 13.4453L7.30978 16.9297C7.33607 16.9453 7.35972 16.9583 7.38075 16.9688C7.40703 16.9844 7.43332 16.9948 7.4596 17ZM8.0037 8.04688L11.3708 6.15625L3.90328 1.92969L1.00933 3.5625C0.830591 3.66146 0.683407 3.76302 0.56775 3.86719L8.0037 8.04688ZM12.4673 5.53906L15.4323 3.86719C15.3166 3.76302 15.172 3.66146 14.9986 3.5625L9.43096 0.421875C8.94204 0.140625 8.46632 0 8.0037 0C7.53581 0 7.05746 0.140625 6.56855 0.421875L4.96781 1.32031L12.4673 5.53906Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ShippingBoxFillIcon);
export default ForwardRef;