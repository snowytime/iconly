import * as React from "react";
import { forwardRef } from "react";
const PencilSlashIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 13 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2.22997 12.7518L6.62736 8.32641L5.19148 6.8896L0.794087 11.315L0.0190363 13.1377C-0.0190363 13.2362 0 13.3265 0.0761453 13.4086C0.15773 13.4962 0.247472 13.5208 0.345373 13.4825L2.22997 12.7518ZM8.85461 6.09319L11.1308 3.80251L9.70309 2.35748L7.42689 4.65638L8.85461 6.09319ZM11.8488 3.09642L12.6728 2.28359C12.8794 2.0756 12.9882 1.86486 12.9991 1.65139C13.01 1.43245 12.9229 1.22719 12.738 1.03562L12.4606 0.764676C12.2757 0.573101 12.0745 0.485524 11.8569 0.501945C11.6448 0.518365 11.4354 0.627837 11.2287 0.830359L10.3966 1.65139L11.8488 3.09642ZM11.7998 12.2017C11.9195 12.3276 12.0663 12.3905 12.2404 12.3905C12.4198 12.3905 12.5694 12.3276 12.6891 12.2017C12.8087 12.0758 12.8686 11.928 12.8686 11.7583C12.8686 11.5832 12.8087 11.4327 12.6891 11.3068L2.43393 0.986355C2.30883 0.860463 2.15654 0.797517 1.97706 0.797517C1.80301 0.797517 1.65616 0.860463 1.5365 0.986355C1.41685 1.10677 1.35702 1.2573 1.35702 1.43792C1.35702 1.61308 1.41685 1.76087 1.5365 1.88128L11.7998 12.2017Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(PencilSlashIcon);
export default ForwardRef;