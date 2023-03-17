import * as React from "react";
import { forwardRef } from "react";
const NotVerifiedIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 18 19",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M4.20077 16.3758H5.91279C6.07659 16.3758 6.21133 16.4312 6.31701 16.5422L7.53761 17.7549C8.03959 18.2569 8.52572 18.5052 8.996 18.4999C9.47156 18.4999 9.96033 18.2516 10.4623 17.7549L11.6829 16.5422C11.7939 16.4312 11.9286 16.3758 12.0871 16.3758H13.7991C14.5072 16.3758 15.0303 16.2067 15.3685 15.8685C15.7067 15.5356 15.8758 15.0125 15.8758 14.2991V12.5871C15.8758 12.4286 15.9312 12.2939 16.0422 12.1829L17.247 10.9623C17.7542 10.4656 18.0052 9.97948 17.9999 9.50392C17.9999 9.02836 17.7489 8.53959 17.247 8.03761L16.0422 6.81701C15.9312 6.70605 15.8758 6.57395 15.8758 6.42071V4.70077C15.8758 3.998 15.7067 3.47753 15.3685 3.13935C15.0356 2.79589 14.5125 2.62416 13.7991 2.62416H12.0871C11.9286 2.62416 11.7939 2.57132 11.6829 2.46565L10.4623 1.25297C9.96033 0.75099 9.47156 0.5 8.996 0.5C8.52572 0.5 8.03959 0.75099 7.53761 1.25297L6.31701 2.46565C6.21133 2.57132 6.07659 2.62416 5.91279 2.62416H4.20077C3.49272 2.62416 2.9696 2.79325 2.63143 3.13143C2.29325 3.46432 2.12416 3.98743 2.12416 4.70077V6.42071C2.12416 6.57395 2.07132 6.70605 1.96565 6.81701L0.752969 8.03761C0.25099 8.53959 0 9.02836 0 9.50392C0 9.97948 0.25099 10.4656 0.752969 10.9623L1.96565 12.1829C2.07132 12.2939 2.12416 12.4286 2.12416 12.5871V14.2991C2.12416 15.0072 2.29325 15.5303 2.63143 15.8685C2.9696 16.2067 3.49272 16.3758 4.20077 16.3758ZM4.20077 15.1155C3.84675 15.1155 3.62218 15.068 3.52706 14.9729C3.43195 14.8777 3.3844 14.6532 3.3844 14.2991V12.1671C3.3844 11.9346 3.3025 11.7364 3.13869 11.5726L1.64068 10.0825C1.38705 9.82889 1.26023 9.63602 1.26023 9.50392C1.26023 9.37182 1.38705 9.17896 1.64068 8.92533L3.13869 7.43524C3.3025 7.26615 3.3844 7.06536 3.3844 6.83286V4.70077C3.3844 4.34675 3.42931 4.12218 3.51914 4.02706C3.61425 3.93195 3.84146 3.8844 4.20077 3.8844H6.33286C6.57593 3.8844 6.77672 3.8025 6.93524 3.63869L8.42533 2.14068C8.67896 1.89233 8.86918 1.76816 8.996 1.76816C9.1281 1.76816 9.32096 1.89233 9.57459 2.14068L11.0726 3.63869C11.2311 3.8025 11.4293 3.8844 11.6671 3.8844H13.7991C14.1532 3.8844 14.3777 3.93459 14.4729 4.03499C14.568 4.1301 14.6155 4.35203 14.6155 4.70077V6.83286C14.6155 7.06536 14.7001 7.26615 14.8692 7.43524L16.3672 8.92533C16.6155 9.17896 16.7397 9.37182 16.7397 9.50392C16.7397 9.63602 16.6155 9.82889 16.3672 10.0825L14.8692 11.5726C14.7001 11.7364 14.6155 11.9346 14.6155 12.1671V14.2991C14.6155 14.6532 14.568 14.8777 14.4729 14.9729C14.3777 15.068 14.1532 15.1155 13.7991 15.1155H11.6671C11.4293 15.1155 11.2311 15.2001 11.0726 15.3692L9.57459 16.8672C9.32096 17.1155 9.1281 17.2397 8.996 17.2397C8.86918 17.2397 8.67896 17.1155 8.42533 16.8672L6.93524 15.3692C6.77672 15.2001 6.57593 15.1155 6.33286 15.1155H4.20077ZM6.30116 12.8566C6.4861 12.8566 6.63934 12.7906 6.76087 12.6585L9.00392 10.4075L11.2628 12.6585C11.3896 12.7906 11.5402 12.8566 11.7146 12.8566C11.889 12.8566 12.0369 12.7932 12.1585 12.6664C12.2853 12.5396 12.3487 12.389 12.3487 12.2146C12.3487 12.0402 12.2853 11.8896 12.1585 11.7628L9.90749 9.51185L12.1664 7.24502C12.2932 7.1182 12.3566 6.97025 12.3566 6.80116C12.3566 6.62679 12.2932 6.47884 12.1664 6.35731C12.0449 6.23049 11.8969 6.16708 11.7225 6.16708C11.5587 6.16708 11.4134 6.23313 11.2866 6.36523L9.00392 8.62414L6.74502 6.37316C6.62877 6.24634 6.48082 6.18293 6.30116 6.18293C6.12679 6.18293 5.97619 6.2437 5.84938 6.36523C5.72785 6.48676 5.66708 6.63472 5.66708 6.80909C5.66708 6.98346 5.73049 7.13141 5.85731 7.25294L8.10829 9.51185L5.85731 11.7708C5.73049 11.8923 5.66708 12.0402 5.66708 12.2146C5.66708 12.389 5.72785 12.5396 5.84938 12.6664C5.97619 12.7932 6.12679 12.8566 6.30116 12.8566Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(NotVerifiedIcon);
export default ForwardRef;