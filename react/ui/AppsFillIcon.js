import * as React from "react";
import { forwardRef } from "react";
const AppsFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M1.55622 6.82781H5.27159C5.78761 6.82781 6.17599 6.69745 6.43672 6.43672C6.69745 6.17056 6.82781 5.7686 6.82781 5.23085V1.58881C6.82781 1.05106 6.69745 0.65182 6.43672 0.391092C6.17599 0.130364 5.78761 0 5.27159 0H1.55622C1.0402 0 0.65182 0.130364 0.391092 0.391092C0.130364 0.65182 0 1.05106 0 1.58881V5.23085C0 5.7686 0.130364 6.17056 0.391092 6.43672C0.65182 6.69745 1.0402 6.82781 1.55622 6.82781ZM9.73656 6.82781H13.4438C13.9598 6.82781 14.3482 6.69745 14.6089 6.43672C14.8696 6.17056 15 5.7686 15 5.23085V1.58881C15 1.05106 14.8696 0.65182 14.6089 0.391092C14.3482 0.130364 13.9598 0 13.4438 0H9.73656C9.2151 0 8.82401 0.130364 8.56328 0.391092C8.30255 0.65182 8.17219 1.05106 8.17219 1.58881V5.23085C8.17219 5.7686 8.30255 6.17056 8.56328 6.43672C8.82401 6.69745 9.2151 6.82781 9.73656 6.82781ZM1.55622 15H5.27159C5.78761 15 6.17599 14.8696 6.43672 14.6089C6.69745 14.3482 6.82781 13.9489 6.82781 13.4112V9.761C6.82781 9.22868 6.69745 8.83216 6.43672 8.57143C6.17599 8.30527 5.78761 8.17219 5.27159 8.17219H1.55622C1.0402 8.17219 0.65182 8.30527 0.391092 8.57143C0.130364 8.83216 0 9.22868 0 9.761V13.4112C0 13.9489 0.130364 14.3482 0.391092 14.6089C0.65182 14.8696 1.0402 15 1.55622 15ZM9.73656 15H13.4438C13.9598 15 14.3482 14.8696 14.6089 14.6089C14.8696 14.3482 15 13.9489 15 13.4112V9.761C15 9.22868 14.8696 8.83216 14.6089 8.57143C14.3482 8.30527 13.9598 8.17219 13.4438 8.17219H9.73656C9.2151 8.17219 8.82401 8.30527 8.56328 8.57143C8.30255 8.83216 8.17219 9.22868 8.17219 9.761V13.4112C8.17219 13.9489 8.30255 14.3482 8.56328 14.6089C8.82401 14.8696 9.2151 15 9.73656 15Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(AppsFillIcon);
export default ForwardRef;