import * as React from "react";
import { forwardRef } from "react";
const CodeIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 22 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 7.98977C0 8.10069 0.0235462 8.20898 0.0706386 8.31462C0.117731 8.41497 0.185753 8.50477 0.274706 8.584L5.51766 13.3616C5.6851 13.5147 5.86562 13.5913 6.05922 13.5913C6.25806 13.586 6.4255 13.5068 6.56154 13.3536C6.69759 13.1952 6.75514 13.0182 6.73421 12.8228C6.71852 12.6221 6.63218 12.4504 6.4752 12.3078L1.75812 7.98977L6.4752 3.67174C6.63218 3.52913 6.71852 3.35746 6.73421 3.15675C6.75514 2.95603 6.69759 2.77909 6.56154 2.62591C6.4255 2.47273 6.25806 2.39614 6.05922 2.39614C5.86562 2.39086 5.6851 2.46481 5.51766 2.61799L0.274706 7.38763C0.185753 7.47214 0.117731 7.56721 0.0706386 7.67285C0.0235462 7.77321 0 7.87885 0 7.98977ZM8.85337 15.4691C9.06267 15.5272 9.25104 15.5034 9.41848 15.3978C9.59115 15.2974 9.70888 15.1416 9.77167 14.9303L13.6803 1.40577C13.7379 1.21562 13.7222 1.03603 13.6332 0.867004C13.5495 0.69798 13.403 0.587059 13.1937 0.534239C12.9897 0.476137 12.8039 0.491983 12.6365 0.581777C12.4743 0.666288 12.3591 0.83003 12.2911 1.073L8.40599 14.5262C8.3432 14.7428 8.34582 14.9382 8.41384 15.1125C8.4871 15.2921 8.63361 15.411 8.85337 15.4691ZM22 7.98977C22 7.87885 21.9765 7.77321 21.9294 7.67285C21.8875 7.56721 21.8221 7.47214 21.7331 7.38763L16.4902 2.61799C16.3227 2.46481 16.1396 2.39086 15.9408 2.39614C15.7472 2.39614 15.5824 2.47273 15.4463 2.62591C15.305 2.77909 15.2422 2.95603 15.2579 3.15675C15.2789 3.35746 15.3678 3.52913 15.5248 3.67174L20.2497 7.98977L15.5248 12.3078C15.3678 12.4504 15.2789 12.6221 15.2579 12.8228C15.2422 13.0182 15.305 13.1952 15.4463 13.3536C15.5824 13.5068 15.7472 13.586 15.9408 13.5913C16.1396 13.5913 16.3227 13.5147 16.4902 13.3616L21.7331 8.584C21.8221 8.50477 21.8875 8.41497 21.9294 8.31462C21.9765 8.20898 22 8.10069 22 7.98977Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CodeIcon);
export default ForwardRef;