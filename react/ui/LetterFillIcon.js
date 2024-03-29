import * as React from "react";
import { forwardRef } from "react";
const LetterFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 18 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M9.0163 7.37146C9.34239 7.37146 9.67663 7.21301 10.019 6.89612L17.1114 0.399884C16.8071 0.133295 16.25 0 15.4402 0H2.31522C1.625 0 1.14674 0.123235 0.880435 0.369704L8.01359 6.89612C8.35054 7.21301 8.68478 7.37146 9.0163 7.37146ZM0.203804 11.7853L5.96739 6.51133L0.1875 1.23738C0.0625 1.45367 0 1.81834 0 2.3314V10.6611C0 11.1942 0.0679348 11.569 0.203804 11.7853ZM2.55978 13H15.6848C16.3641 13 16.8397 12.8793 17.1114 12.6378L11.2337 7.25074L10.6957 7.75625C10.1467 8.23913 9.58696 8.48057 9.0163 8.48057C8.44022 8.48057 7.88043 8.23913 7.33696 7.75625L6.79076 7.25074L0.929348 12.6303C1.23913 12.8768 1.78261 13 2.55978 13ZM17.8043 11.7777C17.9348 11.5564 18 11.1842 18 10.6611V2.3314C18 1.82337 17.9402 1.46624 17.8207 1.26001L12.0571 6.51133L17.8043 11.7777Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(LetterFillIcon);
export default ForwardRef;