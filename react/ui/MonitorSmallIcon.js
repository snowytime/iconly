import * as React from "react";
import { forwardRef } from "react";
const MonitorSmallIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 19 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M10.6955 15.9616C10.6955 16.5351 10.2387 17 9.67533 17C9.11193 17 8.6552 16.5351 8.6552 15.9616C8.6552 15.3881 9.11193 14.9232 9.67533 14.9232C10.2387 14.9232 10.6955 15.3881 10.6955 15.9616Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.83305 13.467H17.159C17.7328 13.467 18.1818 13.302 18.5059 12.9721C18.8353 12.6368 19 12.177 19 11.5929V1.8659C19 1.28179 18.8353 0.824783 18.5059 0.49487C18.1818 0.164957 17.7328 0 17.159 0H1.83305C1.26454 0 0.815576 0.164957 0.486158 0.49487C0.162053 0.824783 0 1.28179 0 1.8659V11.5929C0 12.177 0.162053 12.6368 0.486158 12.9721C0.815576 13.302 1.26454 13.467 1.83305 13.467ZM1.85696 12.1608C1.68163 12.1608 1.54083 12.1094 1.43456 12.0067C1.33361 11.8985 1.28314 11.7552 1.28314 11.5767V1.89024C1.28314 1.70635 1.33361 1.56303 1.43456 1.46027C1.54083 1.35751 1.68163 1.30613 1.85696 1.30613H17.143C17.3184 1.30613 17.4565 1.35751 17.5575 1.46027C17.6637 1.56303 17.7169 1.70635 17.7169 1.89024V11.5767C17.7169 11.7552 17.6637 11.8985 17.5575 12.0067C17.4565 12.1094 17.3184 12.1608 17.143 12.1608H1.85696Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(MonitorSmallIcon);
export default ForwardRef;