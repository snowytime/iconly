import * as React from "react";
import { forwardRef } from "react";
const SealIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M4.20077 15.8758H5.91279C6.07659 15.8758 6.21133 15.9312 6.31701 16.0422L7.53761 17.2549C8.03959 17.7569 8.52572 18.0052 8.996 17.9999C9.47156 17.9999 9.96033 17.7516 10.4623 17.2549L11.6829 16.0422C11.7939 15.9312 11.9286 15.8758 12.0871 15.8758H13.7991C14.5072 15.8758 15.0303 15.7067 15.3685 15.3685C15.7067 15.0356 15.8758 14.5125 15.8758 13.7991V12.0871C15.8758 11.9286 15.9312 11.7939 16.0422 11.6829L17.247 10.4623C17.7542 9.96561 18.0052 9.47948 17.9999 9.00392C17.9999 8.52836 17.7489 8.03959 17.247 7.53761L16.0422 6.31701C15.9312 6.20605 15.8758 6.07395 15.8758 5.92071V4.20077C15.8758 3.498 15.7067 2.97753 15.3685 2.63935C15.0356 2.29589 14.5125 2.12416 13.7991 2.12416H12.0871C11.9286 2.12416 11.7939 2.07132 11.6829 1.96565L10.4623 0.752969C9.96033 0.25099 9.47156 0 8.996 0C8.52572 0 8.03959 0.25099 7.53761 0.752969L6.31701 1.96565C6.21133 2.07132 6.07659 2.12416 5.91279 2.12416H4.20077C3.49272 2.12416 2.9696 2.29325 2.63143 2.63143C2.29325 2.96432 2.12416 3.48743 2.12416 4.20077V5.92071C2.12416 6.07395 2.07132 6.20605 1.96565 6.31701L0.752969 7.53761C0.25099 8.03959 0 8.52836 0 9.00392C0 9.47948 0.25099 9.96561 0.752969 10.4623L1.96565 11.6829C2.07132 11.7939 2.12416 11.9286 2.12416 12.0871V13.7991C2.12416 14.5072 2.29325 15.0303 2.63143 15.3685C2.9696 15.7067 3.49272 15.8758 4.20077 15.8758ZM4.20077 14.6155C3.84675 14.6155 3.62218 14.568 3.52706 14.4729C3.43195 14.3777 3.3844 14.1532 3.3844 13.7991V11.6671C3.3844 11.4346 3.3025 11.2364 3.13869 11.0726L1.64068 9.58252C1.38705 9.32889 1.26023 9.13602 1.26023 9.00392C1.26023 8.87182 1.38705 8.67896 1.64068 8.42533L3.13869 6.93524C3.3025 6.76615 3.3844 6.56536 3.3844 6.33286V4.20077C3.3844 3.84675 3.42931 3.62218 3.51914 3.52706C3.61425 3.43195 3.84146 3.3844 4.20077 3.3844H6.33286C6.57593 3.3844 6.77672 3.3025 6.93524 3.13869L8.42533 1.64068C8.67896 1.39233 8.86918 1.26816 8.996 1.26816C9.1281 1.26816 9.32096 1.39233 9.57459 1.64068L11.0726 3.13869C11.2311 3.3025 11.4293 3.3844 11.6671 3.3844H13.7991C14.1532 3.3844 14.3777 3.43459 14.4729 3.53499C14.568 3.6301 14.6155 3.85203 14.6155 4.20077V6.33286C14.6155 6.56536 14.7001 6.76615 14.8692 6.93524L16.3672 8.42533C16.6155 8.67896 16.7397 8.87182 16.7397 9.00392C16.7397 9.13602 16.6155 9.32889 16.3672 9.58252L14.8692 11.0726C14.7001 11.2364 14.6155 11.4346 14.6155 11.6671V13.7991C14.6155 14.1532 14.568 14.3777 14.4729 14.4729C14.3777 14.568 14.1532 14.6155 13.7991 14.6155H11.6671C11.4293 14.6155 11.2311 14.7001 11.0726 14.8692L9.57459 16.3672C9.32096 16.6155 9.1281 16.7397 8.996 16.7397C8.86918 16.7397 8.67896 16.6155 8.42533 16.3672L6.93524 14.8692C6.77672 14.7001 6.57593 14.6155 6.33286 14.6155H4.20077Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(SealIcon);
export default ForwardRef;