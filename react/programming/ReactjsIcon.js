import * as React from "react";
import { forwardRef } from "react";
const ReactjsIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 27 24",
  fill: "none",
  color: "#61DAFB",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M13.5 14.4472C14.8578 14.4472 15.9585 13.3516 15.9585 12C15.9585 10.6484 14.8578 9.55277 13.5 9.55277C12.1422 9.55277 11.0415 10.6484 11.0415 12C11.0415 13.3516 12.1422 14.4472 13.5 14.4472Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22.8379 7.96422C22.3634 7.79249 21.8674 7.62075 21.3498 7.47048C21.4792 6.95528 21.5871 6.44007 21.6733 5.94633C22.1262 3.1127 21.6302 1.11628 20.25 0.34347C19.8403 0.107334 19.3874 0 18.8698 0C17.3602 0 15.4409 1.11628 13.5 2.9839C11.5591 1.11628 9.63978 0 8.13019 0C7.61262 0 7.15974 0.107334 6.75 0.34347C5.36981 1.13775 4.8738 3.13417 5.32668 5.94633C5.41294 6.44007 5.52077 6.95528 5.65016 7.47048C5.13259 7.62075 4.63658 7.77102 4.16214 7.96422C1.46645 8.99463 0 10.4114 0 12C0 13.5886 1.48802 15.0054 4.16214 16.0358C4.63658 16.2075 5.13259 16.3792 5.65016 16.5295C5.52077 17.0447 5.41294 17.5599 5.32668 18.0537C4.8738 20.8873 5.36981 22.8837 6.75 23.6565C7.15974 23.8927 7.61262 24 8.13019 24C9.66134 24 11.5807 22.8837 13.5 21.0161C15.4409 22.8837 17.3602 24 18.8698 24C19.3874 24 19.8403 23.8927 20.25 23.6565C21.6302 22.8623 22.1262 20.8658 21.6733 18.0537C21.5871 17.5599 21.4792 17.0447 21.3498 16.5295C21.8674 16.3792 22.3634 16.229 22.8379 16.0358C25.5335 15.0054 27 13.5886 27 12C27 10.4114 25.5335 8.99463 22.8379 7.96422ZM19.6462 1.41682C20.5304 1.93202 20.8323 3.52057 20.4657 5.7746C20.401 6.2254 20.2931 6.69767 20.1637 7.19141C19.0423 6.93381 17.8562 6.76207 16.6054 6.65474C15.8722 5.62433 15.1174 4.70125 14.3626 3.86404C15.9585 2.29696 17.5759 1.22361 18.8914 1.22361C19.1717 1.22361 19.4305 1.28801 19.6462 1.41682ZM17.2308 14.1467C16.8427 14.8336 16.3898 15.5206 15.9153 16.2075C15.1174 16.2719 14.3195 16.2934 13.5 16.2934C12.6589 16.2934 11.861 16.2719 11.0847 16.2075C10.6102 15.5206 10.1789 14.8336 9.79073 14.1467C9.38099 13.4383 8.99281 12.7084 8.64776 12C8.99281 11.2916 9.38099 10.5617 9.79073 9.85331C10.1789 9.16637 10.6318 8.47943 11.1062 7.79249C11.9042 7.72809 12.7021 7.70662 13.5216 7.70662C14.3626 7.70662 15.1605 7.72809 15.9369 7.79249C16.4113 8.47943 16.8427 9.16637 17.2308 9.85331C17.6406 10.5617 18.0288 11.2916 18.3738 12C18.0072 12.7084 17.6406 13.4168 17.2308 14.1467ZM19.0208 13.4383C19.3442 14.1896 19.603 14.9195 19.8403 15.6494C19.107 15.8211 18.3307 15.9499 17.5112 16.0572C17.77 15.6494 18.0503 15.22 18.2875 14.7692C18.5463 14.3184 18.7835 13.8676 19.0208 13.4383ZM13.5 19.2558C12.9824 18.6977 12.4864 18.0966 12.012 17.4741C12.508 17.4955 13.004 17.517 13.5 17.517C13.996 17.517 14.492 17.4955 14.988 17.4741C14.5136 18.0966 14.0176 18.6977 13.5 19.2558ZM9.48882 16.0358C8.66933 15.9284 7.89297 15.7996 7.15974 15.6279C7.39696 14.9195 7.65575 14.1682 7.97923 13.4168C8.21645 13.8462 8.45367 14.297 8.71246 14.7263C8.97125 15.1986 9.23003 15.6064 9.48882 16.0358ZM7.97923 10.5617C7.65575 9.81037 7.39696 9.0805 7.15974 8.35063C7.89297 8.17889 8.66933 8.05009 9.48882 7.94275C9.23003 8.35063 8.94968 8.77996 8.71246 9.23077C8.45367 9.68157 8.21645 10.1324 7.97923 10.5617ZM13.5 4.74419C14.0176 5.30233 14.5136 5.9034 14.988 6.52594C14.492 6.50447 13.996 6.48301 13.5 6.48301C13.004 6.48301 12.508 6.50447 12.012 6.52594C12.4864 5.9034 12.9824 5.30233 13.5 4.74419ZM18.2875 9.25224L17.5112 7.96422C18.3307 8.07156 19.107 8.20036 19.8403 8.37209C19.603 9.0805 19.3442 9.83184 19.0208 10.5832C18.7835 10.1324 18.5463 9.68157 18.2875 9.25224ZM6.53435 5.7746C6.16773 3.52057 6.46965 1.93202 7.35383 1.41682C7.56949 1.28801 7.82827 1.22361 8.10863 1.22361C9.40256 1.22361 11.02 2.27549 12.6374 3.86404C11.8826 4.67979 11.1278 5.62433 10.3946 6.65474C9.14377 6.76207 7.95767 6.95528 6.83626 7.19141C6.70687 6.69767 6.62061 6.2254 6.53435 5.7746ZM1.20767 12C1.20767 10.9911 2.4369 9.91771 4.59345 9.12343C5.02476 8.9517 5.4992 8.80143 5.97364 8.67263C6.31869 9.74598 6.75 10.8837 7.26757 12.0215C6.75 13.1592 6.29712 14.2755 5.97364 15.3488C2.9976 14.4902 1.20767 13.2021 1.20767 12ZM7.35383 22.5832C6.46965 22.068 6.16773 20.4794 6.53435 18.2254C6.59904 17.7746 6.70687 17.3023 6.83626 16.8086C7.95767 17.0662 9.14377 17.2379 10.3946 17.3453C11.1278 18.3757 11.8826 19.2987 12.6374 20.136C11.0415 21.703 9.42412 22.7764 8.10863 22.7764C7.82827 22.7764 7.56949 22.712 7.35383 22.5832ZM20.4657 18.2254C20.8323 20.4794 20.5304 22.068 19.6462 22.5832C19.4305 22.712 19.1717 22.7764 18.8914 22.7764C17.5974 22.7764 15.98 21.7245 14.3626 20.136C15.1174 19.3202 15.8722 18.3757 16.6054 17.3453C17.8562 17.2379 19.0423 17.0447 20.1637 16.8086C20.2931 17.3023 20.3794 17.7746 20.4657 18.2254ZM22.4066 14.8766C21.9752 15.0483 21.5008 15.1986 21.0264 15.3274C20.6813 14.254 20.25 13.1163 19.7324 11.9785C20.25 10.8408 20.7029 9.72451 21.0264 8.65116C24.0024 9.50984 25.7923 10.7979 25.7923 12C25.7923 13.0089 24.5415 14.0823 22.4066 14.8766Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ReactjsIcon);
export default ForwardRef;