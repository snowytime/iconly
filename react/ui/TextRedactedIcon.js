import * as React from "react";
import { forwardRef } from "react";
const TextRedactedIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 16 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.595534 1.22764H15.3886C15.558 1.22764 15.7009 1.16802 15.8174 1.04878C15.9391 0.929539 16 0.783198 16 0.609756C16 0.441734 15.9391 0.298103 15.8174 0.178862C15.7009 0.0596206 15.558 0 15.3886 0H0.595534C0.431431 0 0.29115 0.0596206 0.17469 0.178862C0.05823 0.298103 0 0.441734 0 0.609756C0 0.783198 0.05823 0.929539 0.17469 1.04878C0.29115 1.16802 0.431431 1.22764 0.595534 1.22764ZM1.0005 6.18699H14.9916C15.3251 6.18699 15.5765 6.10298 15.7459 5.93496C15.9153 5.76694 16 5.51219 16 5.17073V4.56098C16 4.23035 15.9153 3.98103 15.7459 3.81301C15.5765 3.63957 15.3251 3.55285 14.9916 3.55285H1.0005C0.666998 3.55285 0.41555 3.63957 0.246154 3.81301C0.0820513 3.98103 0 4.23035 0 4.56098V5.17073C0 5.51219 0.0820513 5.76694 0.246154 5.93496C0.41555 6.10298 0.666998 6.18699 1.0005 6.18699ZM1.0005 10.4472H6.93201C7.26551 10.4472 7.51431 10.3631 7.67841 10.1951C7.84781 10.0271 7.93251 9.77236 7.93251 9.43089V8.82114C7.93251 8.49051 7.84781 8.24119 7.67841 8.07317C7.51431 7.89973 7.26551 7.81301 6.93201 7.81301H1.0005C0.666998 7.81301 0.41555 7.89973 0.246154 8.07317C0.0820513 8.24119 0 8.49051 0 8.82114V9.43089C0 9.77236 0.0820513 10.0271 0.246154 10.1951C0.41555 10.3631 0.666998 10.4472 1.0005 10.4472ZM9.61588 9.74797H15.3886C15.558 9.74797 15.7009 9.68835 15.8174 9.56911C15.9391 9.44986 16 9.30352 16 9.13008C16 8.95664 15.9391 8.81301 15.8174 8.69919C15.7009 8.57995 15.558 8.52032 15.3886 8.52032H9.61588C9.44648 8.52032 9.30356 8.57995 9.1871 8.69919C9.07593 8.81301 9.02035 8.95664 9.02035 9.13008C9.02035 9.30352 9.07593 9.44986 9.1871 9.56911C9.30356 9.68835 9.44648 9.74797 9.61588 9.74797ZM0.595534 14H15.3886C15.558 14 15.7009 13.9404 15.8174 13.8211C15.9391 13.7073 16 13.5637 16 13.3902C16 13.2168 15.9391 13.0705 15.8174 12.9512C15.7009 12.832 15.558 12.7724 15.3886 12.7724H0.595534C0.431431 12.7724 0.29115 12.832 0.17469 12.9512C0.05823 13.0705 0 13.2168 0 13.3902C0 13.5637 0.05823 13.7073 0.17469 13.8211C0.29115 13.9404 0.431431 14 0.595534 14Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(TextRedactedIcon);
export default ForwardRef;