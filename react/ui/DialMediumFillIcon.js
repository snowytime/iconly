import * as React from "react";
import { forwardRef } from "react";
const DialMediumFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 19 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M3.45861 17.4919C3.73169 17.4919 3.96276 17.3944 4.15181 17.1993C4.34087 17.0043 4.4354 16.7659 4.4354 16.4842C4.4354 16.2025 4.33824 15.9641 4.14394 15.7691C3.95488 15.5741 3.72644 15.4766 3.45861 15.4766C3.18554 15.4766 2.95447 15.5741 2.76541 15.7691C2.57636 15.9696 2.48183 16.2079 2.48183 16.4842C2.48183 16.7659 2.57636 17.0043 2.76541 17.1993C2.95972 17.3944 3.19079 17.4919 3.45861 17.4919ZM0.985148 11.3078C1.25823 11.3078 1.48929 11.2076 1.67835 11.0072C1.8674 10.8067 1.96193 10.5684 1.96193 10.2921C1.96193 10.0104 1.86478 9.77199 1.67047 9.57696C1.48142 9.38193 1.25298 9.28442 0.985148 9.28442C0.712069 9.28442 0.478377 9.38464 0.28407 9.58509C0.0950156 9.78011 0.000488281 10.0158 0.000488281 10.2921C0.000488281 10.5738 0.0976414 10.8149 0.291948 11.0153C0.486254 11.2103 0.717321 11.3078 0.985148 11.3078ZM3.45861 5.12381C3.73169 5.12381 3.96276 5.02629 4.15181 4.83126C4.34087 4.63082 4.4354 4.39245 4.4354 4.11616C4.4354 3.83445 4.33824 3.59608 4.14394 3.40105C3.95488 3.20602 3.72644 3.10851 3.45861 3.10851C3.18554 3.10851 2.95447 3.20602 2.76541 3.40105C2.57636 3.59608 2.48183 3.83445 2.48183 4.11616C2.48183 4.39786 2.57636 4.63623 2.76541 4.83126C2.95972 5.02629 3.19079 5.12381 3.45861 5.12381ZM9.50049 2.52342C9.77357 2.52342 10.0046 2.42591 10.1937 2.23088C10.3827 2.03043 10.4773 1.78936 10.4773 1.50765C10.4773 1.22594 10.3801 0.987572 10.1858 0.792543C9.99676 0.597514 9.76832 0.5 9.50049 0.5C9.22741 0.5 8.99634 0.600223 8.80729 0.800669C8.61823 0.995698 8.52371 1.23136 8.52371 1.50765C8.52371 1.78936 8.61823 2.03043 8.80729 2.23088C9.00159 2.42591 9.23266 2.52342 9.50049 2.52342ZM15.5345 5.10755C15.8076 5.10755 16.0386 5.01004 16.2277 4.81501C16.4167 4.61456 16.5113 4.37619 16.5113 4.0999C16.5113 3.8182 16.4141 3.57983 16.2198 3.3848C16.0308 3.18977 15.8023 3.09226 15.5345 3.09226C15.2562 3.09226 15.0225 3.18977 14.8334 3.3848C14.6444 3.57983 14.5498 3.8182 14.5498 4.0999C14.5498 4.38161 14.6444 4.61998 14.8334 4.81501C15.0277 5.01004 15.2614 5.10755 15.5345 5.10755ZM18.0158 11.3078C18.2889 11.3078 18.52 11.2076 18.709 11.0072C18.9033 10.8067 19.0005 10.5684 19.0005 10.2921C19.0005 10.0104 18.9033 9.77199 18.709 9.57696C18.5147 9.38193 18.2837 9.28442 18.0158 9.28442C17.7375 9.28442 17.5038 9.38464 17.3148 9.58509C17.1257 9.78011 17.0312 10.0158 17.0312 10.2921C17.0312 10.5738 17.1283 10.8149 17.3226 11.0153C17.5169 11.2103 17.748 11.3078 18.0158 11.3078ZM15.5266 17.5C15.7997 17.5 16.0308 17.4025 16.2198 17.2075C16.4089 17.0124 16.5034 16.7741 16.5034 16.4924C16.5034 16.2106 16.4062 15.9723 16.2119 15.7772C16.0229 15.5822 15.7944 15.4847 15.5266 15.4847C15.2483 15.4847 15.0146 15.5822 14.8255 15.7772C14.6365 15.9777 14.5419 16.2161 14.5419 16.4924C14.5419 16.7741 14.6365 17.0124 14.8255 17.2075C15.0198 17.4025 15.2535 17.5 15.5266 17.5ZM9.50049 16.2079C10.2882 16.2079 11.0287 16.0535 11.7219 15.7447C12.4151 15.4414 13.0243 15.0188 13.5494 14.4771C14.0746 13.9353 14.4842 13.3069 14.7783 12.5918C15.0776 11.8767 15.2273 11.1101 15.2273 10.2921C15.2273 9.5282 15.096 8.81039 14.8334 8.13862C14.5708 7.46144 14.2058 6.85739 13.7385 6.32648C13.2711 5.79557 12.7249 5.36488 12.1 5.03442C11.4803 4.70395 10.8081 4.5008 10.0834 4.42495L10.0755 10.414C10.0755 10.5765 10.0151 10.72 9.89435 10.8446C9.77882 10.9638 9.64753 11.0207 9.50049 11.0153C9.32719 11.0045 9.1854 10.9449 9.07512 10.8365C8.96483 10.7228 8.90969 10.5765 8.90969 10.3977V4.42495C8.19023 4.5008 7.51804 4.70395 6.89311 5.03442C6.27343 5.36488 5.72727 5.79557 5.25463 6.32648C4.78725 6.85739 4.42227 7.46144 4.15969 8.13862C3.89712 8.81039 3.76583 9.5282 3.76583 10.2921C3.76583 11.1155 3.9155 11.8848 4.21483 12.5999C4.51417 13.3096 4.92641 13.9353 5.45157 14.4771C5.97672 15.0188 6.58589 15.4414 7.2791 15.7447C7.9723 16.0535 8.71276 16.2079 9.50049 16.2079Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(DialMediumFillIcon);
export default ForwardRef;