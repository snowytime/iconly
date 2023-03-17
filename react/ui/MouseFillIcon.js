import * as React from "react";
import { forwardRef } from "react";
const MouseFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 11 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.219843 4.81279H4.97002V0C3.94409 0.0465753 3.10136 0.240639 2.44183 0.582192C1.7823 0.918569 1.27457 1.43349 0.91863 2.12694C0.562693 2.8204 0.329764 3.71568 0.219843 4.81279ZM6.02998 4.81279H10.7723C10.6624 3.72085 10.4321 2.83075 10.0814 2.14247C9.73067 1.44901 9.22555 0.931507 8.56602 0.589954C7.91173 0.243227 7.06638 0.0465753 6.02998 0V4.81279ZM5.49607 17C7.30193 17 8.67071 16.4773 9.60243 15.432C10.5341 14.3918 11 12.8626 11 10.8443C11 9.90761 10.9869 9.0175 10.9607 8.17397C10.9346 7.32527 10.8979 6.55677 10.8508 5.86849H0.141328C0.0994528 6.55677 0.0654294 7.32527 0.0392577 8.17397C0.0130859 9.0175 0 9.90761 0 10.8443C0 12.8626 0.463241 14.3918 1.38972 15.432C2.32144 16.4773 3.69022 17 5.49607 17Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(MouseFillIcon);
export default ForwardRef;