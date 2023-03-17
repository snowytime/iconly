import * as React from "react";
import { forwardRef } from "react";
const LampDeskIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 15 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M8.48414 10.7749L14.5959 4.59269C14.8473 4.33841 14.9808 4.06558 14.9965 3.77422C15.0175 3.47755 14.9441 3.20738 14.7765 2.96369C14.609 2.72 14.3681 2.55048 14.0538 2.45513C13.2525 2.19025 12.4225 2.01808 11.5636 1.93862C10.7047 1.85386 9.79081 1.84061 8.82194 1.89888L8.57841 1.63666C8.29037 1.3294 7.96567 1.12279 7.60431 1.01684C7.24818 0.905594 6.88944 0.897647 6.52808 0.993003C6.16672 1.08836 5.83154 1.28967 5.52255 1.59692C5.22403 1.90948 5.02502 2.25382 4.92552 2.62995C4.83125 3.00078 4.83649 3.36895 4.94123 3.73449C5.05121 4.09472 5.25807 4.41522 5.56183 4.69599L5.82106 4.94233C5.76869 5.91708 5.78179 6.8362 5.86034 7.6997C5.9389 8.5632 6.10387 9.40287 6.35525 10.2187C6.45476 10.5365 6.62496 10.7829 6.86587 10.9577C7.10678 11.1325 7.37387 11.2093 7.66715 11.1881C7.96043 11.167 8.23276 11.0292 8.48414 10.7749ZM7.70643 9.9803C7.64358 10.0439 7.58336 10.0651 7.52575 10.0439C7.47338 10.0174 7.41839 9.91143 7.36078 9.72602C7.14606 9.03204 7.00466 8.28773 6.93657 7.4931C6.87373 6.69847 6.87635 5.82702 6.94443 4.87876C6.96014 4.60858 6.86325 4.37814 6.65377 4.18743L6.30812 3.86957C6.08816 3.66297 5.97556 3.42723 5.97032 3.16235C5.96509 2.89218 6.07768 2.6326 6.30812 2.38361C6.54903 2.15052 6.80041 2.03662 7.06226 2.04192C7.32936 2.04192 7.56765 2.15846 7.77713 2.39156L8.09136 2.74119C8.28513 2.95839 8.52604 3.05375 8.81408 3.02726C9.73582 2.96899 10.5868 2.97429 11.3672 3.04316C12.1528 3.10673 12.8886 3.24976 13.5746 3.47226C13.7475 3.52523 13.8443 3.57821 13.8653 3.63118C13.8915 3.68416 13.8758 3.73978 13.8182 3.79806L7.70643 9.9803ZM11.1708 9.97235C11.6526 9.97235 12.0925 9.85316 12.4905 9.61477C12.8886 9.37638 13.2054 9.05587 13.4411 8.65326C13.682 8.25065 13.8024 7.8083 13.8024 7.32623C13.8024 6.98188 13.737 6.64814 13.6061 6.32499C13.4751 6.00184 13.284 5.71047 13.0326 5.45089L12.4591 6.56338C12.5324 6.67463 12.5874 6.79647 12.6241 6.92891C12.666 7.05605 12.6869 7.18849 12.6869 7.32623C12.6869 7.75003 12.5351 8.11026 12.2313 8.40693C11.9328 8.70359 11.5793 8.85192 11.1708 8.85192C11.0346 8.85192 10.9011 8.83338 10.7701 8.7963C10.6392 8.75391 10.5188 8.69829 10.4088 8.62942L9.41111 9.29691C9.65726 9.51941 9.93221 9.68893 10.236 9.80548C10.5397 9.91673 10.8513 9.97235 11.1708 9.97235ZM5.58539 2.51075L6.39453 1.63666L5.43614 0.67515C5.32092 0.553307 5.18214 0.495034 5.01978 0.500331C4.85743 0.500331 4.71865 0.558604 4.60343 0.67515C4.49345 0.786399 4.43585 0.924135 4.43061 1.08836C4.43061 1.25258 4.48822 1.39297 4.60343 1.50951L5.58539 2.51075ZM1.48473 11.4901L6.45738 6.86534L6.10387 5.46678L0.628455 10.5604L1.48473 11.4901ZM1.22549 12.102C1.5659 12.102 1.85394 11.9828 2.08961 11.7444C2.33052 11.506 2.45097 11.212 2.45097 10.8623C2.45097 10.518 2.33052 10.2266 2.08961 9.98825C1.85394 9.74456 1.5659 9.62271 1.22549 9.62271C0.879837 9.62271 0.589177 9.74456 0.353506 9.98825C0.117835 10.2266 0 10.518 0 10.8623C0 11.212 0.117835 11.506 0.353506 11.7444C0.589177 11.9828 0.879837 12.102 1.22549 12.102ZM4.4149 14.9229L5.31045 14.017L1.40617 10.0915L0.518475 10.9895L4.4149 14.9229ZM4.65057 15.7493C4.99622 15.7493 5.28688 15.6354 5.52255 15.4076C5.75822 15.1745 5.87605 14.8752 5.87605 14.5097C5.87605 14.1654 5.7556 13.874 5.51469 13.6356C5.27902 13.3919 4.99098 13.2701 4.65057 13.2701C4.30492 13.2701 4.01426 13.3919 3.77859 13.6356C3.54292 13.874 3.42508 14.1654 3.42508 14.5097C3.42508 14.8593 3.54292 15.1534 3.77859 15.3917C4.01426 15.6301 4.30492 15.7493 4.65057 15.7493ZM4.01426 18.3796H5.27902V14.5415H4.01426V18.3796ZM0.903404 19.5H9.26186C9.4085 19.5 9.52633 19.4523 9.61536 19.357C9.70439 19.2616 9.74891 19.1345 9.74891 18.9755C9.74891 18.6789 9.63107 18.4352 9.3954 18.2445C9.15973 18.0538 8.84289 17.9584 8.44487 17.9584H1.7204C1.32237 17.9584 1.00553 18.0538 0.769857 18.2445C0.534187 18.4352 0.416351 18.6789 0.416351 18.9755C0.416351 19.1345 0.460867 19.2616 0.549898 19.357C0.638929 19.4523 0.756765 19.5 0.903404 19.5Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(LampDeskIcon);
export default ForwardRef;