import * as React from "react";
import { forwardRef } from "react";
const ClipboardFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 13 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2.39596 19.5H10.604C11.4027 19.5 12.0004 19.2935 12.3971 18.8805C12.799 18.4728 13 17.8585 13 17.0378V5.14218C13 4.32143 12.8042 3.70718 12.4126 3.29942C12.021 2.88644 11.4439 2.67994 10.6813 2.67994H10.5036C10.5036 2.69563 10.5036 2.71392 10.5036 2.73483C10.5036 2.75052 10.5036 2.7662 10.5036 2.78188V3.70718C10.5036 4.19858 10.3541 4.60373 10.0553 4.92262C9.75644 5.23628 9.36742 5.39311 8.88823 5.39311H4.11177C3.63258 5.39311 3.24356 5.23628 2.94471 4.92262C2.64586 4.60373 2.49643 4.19858 2.49643 3.70718V2.78188C2.49643 2.7662 2.49643 2.75052 2.49643 2.73483C2.49643 2.71392 2.49643 2.69563 2.49643 2.67994H2.31867C1.55608 2.67994 0.978993 2.88644 0.587396 3.29942C0.195799 3.70718 0 4.32143 0 5.14218V17.0378C0 17.8585 0.198375 18.4728 0.595125 18.8805C0.997027 19.2935 1.5973 19.5 2.39596 19.5ZM4.11177 4.48349H8.88823C9.11494 4.48349 9.29013 4.41553 9.41379 4.27961C9.54261 4.14369 9.60702 3.95288 9.60702 3.70718V2.88382C9.60702 2.63812 9.54261 2.44731 9.41379 2.31139C9.29013 2.17547 9.11494 2.10751 8.88823 2.10751H8.17717C8.15141 1.66316 7.97622 1.28415 7.65161 0.970491C7.33214 0.65683 6.94828 0.5 6.5 0.5C6.05172 0.5 5.66528 0.65683 5.34067 0.970491C5.0212 1.28415 4.84859 1.66316 4.82283 2.10751H4.11177C3.88506 2.10751 3.70729 2.17547 3.57848 2.31139C3.45482 2.44731 3.39298 2.63812 3.39298 2.88382V3.70718C3.39298 3.95288 3.45482 4.14369 3.57848 4.27961C3.70729 4.41553 3.88506 4.48349 4.11177 4.48349ZM6.5 2.85246C6.31451 2.85246 6.15478 2.7845 6.02081 2.64858C5.89199 2.51266 5.82759 2.35321 5.82759 2.17024C5.82759 1.97682 5.89199 1.81476 6.02081 1.68407C6.15478 1.54815 6.31451 1.48019 6.5 1.48019C6.68549 1.48019 6.84265 1.54815 6.97146 1.68407C7.10543 1.81476 7.17241 1.97682 7.17241 2.17024C7.17241 2.35321 7.10543 2.51266 6.97146 2.64858C6.84265 2.7845 6.68549 2.85246 6.5 2.85246Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ClipboardFillIcon);
export default ForwardRef;