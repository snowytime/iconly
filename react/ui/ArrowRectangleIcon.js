import * as React from "react";
import { forwardRef } from "react";
const ArrowRectangleIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 20 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.570312 14.4436C0.570312 15.2957 0.779812 15.9334 1.19881 16.3568C1.62318 16.7856 2.25704 17 3.10041 17H17.0402C17.8889 17 18.5228 16.7856 18.9418 16.3568C19.3608 15.9334 19.5703 15.2957 19.5703 14.4436V4.37445C19.5703 3.5223 19.3608 2.88456 18.9418 2.46124C18.5228 2.03241 17.8889 1.818 17.0402 1.818H11.3998C11.2226 1.818 11.0695 1.88397 10.9405 2.01592C10.8116 2.14237 10.7472 2.2963 10.7472 2.47773C10.7472 2.65915 10.8116 2.81584 10.9405 2.94779C11.0695 3.07973 11.2226 3.1457 11.3998 3.1457H17.0241C17.4216 3.1457 17.7278 3.25566 17.9427 3.47557C18.1629 3.68998 18.273 4.0116 18.273 4.44042V14.3776C18.273 14.8064 18.1629 15.1308 17.9427 15.3507C17.7278 15.5651 17.4216 15.6723 17.0241 15.6723H3.11652C2.71364 15.6723 2.40478 15.5651 2.18991 15.3507C1.97504 15.1308 1.8676 14.8064 1.8676 14.3776V4.44042C1.8676 4.0116 1.97504 3.68998 2.18991 3.47557C2.40478 3.25566 2.71364 3.1457 3.11652 3.1457H5.16318V4.3662C5.16318 4.65758 5.24644 4.84176 5.41296 4.91872C5.58486 4.99019 5.78093 4.94621 6.00117 4.78678L8.57158 2.93954C8.75422 2.80759 8.84554 2.65366 8.84554 2.47773C8.85091 2.3018 8.75959 2.14787 8.57158 2.01592L6.00923 0.168681C5.78362 0.00374844 5.58486 -0.0402334 5.41296 0.0367349C5.24644 0.108205 5.16318 0.292379 5.16318 0.589257V1.818H3.10041C2.25704 1.818 1.62318 2.03241 1.19881 2.46124C0.779812 2.88456 0.570312 3.5223 0.570312 4.37445V14.4436Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ArrowRectangleIcon);
export default ForwardRef;