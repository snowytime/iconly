import * as React from "react";
import { forwardRef } from "react";
const GaugeHighIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 16 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M8.95689 11.5745L10.9411 8.74314C11.03 8.61765 11.0614 8.48431 11.0352 8.34314C11.0091 8.20196 10.9385 8.09216 10.8235 8.01373C10.7085 7.93529 10.5804 7.90915 10.4392 7.93529C10.298 7.95621 10.183 8.02941 10.0941 8.1549L8.1177 10.9784L8.95689 11.5745ZM7.9921 13.2686C8.33719 13.2686 8.63009 13.1484 8.87062 12.9078C9.11637 12.6621 9.23923 12.3667 9.23923 12.0216C9.23923 11.6765 9.11637 11.3837 8.87062 11.1431C8.63009 10.8974 8.33719 10.7745 7.9921 10.7745C7.647 10.7745 7.35161 10.8974 7.10586 11.1431C6.86533 11.3837 6.74508 11.6765 6.74508 12.0216C6.74508 12.3667 6.86533 12.6621 7.10586 12.9078C7.35161 13.1484 7.647 13.2686 7.9921 13.2686ZM4.00781 7.3C4.22219 7.3 4.40269 7.22418 4.54909 7.07255C4.70072 6.92092 4.77653 6.74052 4.77653 6.53137C4.77653 6.31699 4.70072 6.13399 4.54909 5.98235C4.40269 5.83072 4.22219 5.7549 4.00781 5.7549C3.79866 5.7549 3.61829 5.83072 3.46666 5.98235C3.31502 6.13399 3.23921 6.31699 3.23921 6.53137C3.23921 6.74052 3.31502 6.92092 3.46666 7.07255C3.61829 7.22418 3.79866 7.3 4.00781 7.3ZM5.74904 5.6451C5.96342 5.6451 6.1438 5.56928 6.2902 5.41765C6.44183 5.26601 6.51764 5.08301 6.51764 4.86863C6.51764 4.65948 6.44183 4.47909 6.2902 4.32745C6.1438 4.17582 5.96342 4.1 5.74904 4.1C5.5399 4.1 5.35952 4.17582 5.20789 4.32745C5.05626 4.47909 4.98045 4.65948 4.98045 4.86863C4.98045 5.08301 5.05626 5.26601 5.20789 5.41765C5.35952 5.56928 5.5399 5.6451 5.74904 5.6451ZM7.9921 4.94706C8.20125 4.94706 8.38174 4.87124 8.53337 4.71961C8.68501 4.56797 8.76082 4.38758 8.76082 4.17843C8.76082 3.96405 8.68501 3.78366 8.53337 3.63726C8.38174 3.48562 8.20125 3.4098 7.9921 3.4098C7.77772 3.4098 7.59473 3.48562 7.4431 3.63726C7.29669 3.78366 7.2235 3.96405 7.2235 4.17843C7.2235 4.38758 7.29669 4.56797 7.4431 4.71961C7.59473 4.87124 7.77772 4.94706 7.9921 4.94706ZM10.2353 5.6451C10.4496 5.6451 10.63 5.56928 10.7764 5.41765C10.9281 5.26079 11.0039 5.07778 11.0039 4.86863C11.0039 4.65425 10.9281 4.47124 10.7764 4.31961C10.63 4.16797 10.4496 4.09216 10.2353 4.09216C10.0209 4.09216 9.8379 4.16797 9.68627 4.31961C9.53987 4.47124 9.46667 4.65425 9.46667 4.86863C9.46667 5.07778 9.53987 5.26079 9.68627 5.41765C9.8379 5.56928 10.0209 5.6451 10.2353 5.6451ZM11.9765 7.3C12.1909 7.3 12.3713 7.22418 12.5177 7.07255C12.6693 6.92092 12.7451 6.74052 12.7451 6.53137C12.7451 6.31699 12.6693 6.13399 12.5177 5.98235C12.3713 5.83072 12.1909 5.7549 11.9765 5.7549C11.7674 5.7549 11.5869 5.83072 11.4352 5.98235C11.2836 6.13399 11.2078 6.31699 11.2078 6.53137C11.2078 6.74052 11.2836 6.92092 11.4352 7.07255C11.5869 7.22418 11.7674 7.3 11.9765 7.3ZM7.99994 16.5C9.09274 16.5 10.1202 16.2909 11.0823 15.8726C12.0496 15.4542 12.9019 14.8765 13.6392 14.1392C14.3764 13.402 14.9543 12.5523 15.3726 11.5902C15.7909 10.6229 16 9.59281 16 8.5C16 7.40719 15.7909 6.37974 15.3726 5.41765C14.9543 4.45033 14.3764 3.59804 13.6392 2.86078C12.9019 2.12353 12.0496 1.54575 11.0823 1.12745C10.115 0.70915 9.0849 0.5 7.9921 0.5C6.89929 0.5 5.86933 0.70915 4.90202 1.12745C3.93993 1.54575 3.09023 2.12353 2.35297 2.86078C1.62095 3.59804 1.04573 4.45033 0.627427 5.41765C0.209128 6.37974 0 7.40719 0 8.5C0 9.59281 0.209128 10.6229 0.627427 11.5902C1.04573 12.5523 1.62356 13.402 2.36082 14.1392C3.09807 14.8765 3.94777 15.4542 4.90986 15.8726C5.87718 16.2909 6.90713 16.5 7.99994 16.5ZM7.99994 15.1667C7.07445 15.1667 6.20919 14.9941 5.40396 14.649C4.59873 14.3039 3.89019 13.8281 3.27843 13.2216C2.6719 12.6098 2.19613 11.9013 1.85103 11.0961C1.51116 10.2908 1.34125 9.42549 1.34125 8.5C1.34125 7.57451 1.51116 6.70915 1.85103 5.90392C2.19613 5.09869 2.6719 4.3902 3.27843 3.77843C3.88496 3.16667 4.59089 2.69085 5.39612 2.35098C6.20134 2.00588 7.06661 1.83333 7.9921 1.83333C8.91758 1.83333 9.78297 2.00588 10.5882 2.35098C11.3987 2.69085 12.1072 3.16667 12.7137 3.77843C13.3255 4.3902 13.8039 5.09869 14.149 5.90392C14.4941 6.70915 14.6666 7.57451 14.6666 8.5C14.6666 9.42549 14.4941 10.2908 14.149 11.0961C13.8091 11.9013 13.3333 12.6098 12.7216 13.2216C12.1098 13.8281 11.4013 14.3039 10.596 14.649C9.79082 14.9941 8.92543 15.1667 7.99994 15.1667Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(GaugeHighIcon);
export default ForwardRef;