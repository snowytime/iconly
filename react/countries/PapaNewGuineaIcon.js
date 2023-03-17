import * as React from "react";
import { forwardRef } from "react";
const PapaNewGuineaIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 36 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M36 24H0V0H36",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 24H36L0 0",
  fill: "#464655"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.377 12.89L4.474 13.568L4.813 14.658C4.8201 14.6805 4.82 14.7046 4.81271 14.727C4.80543 14.7494 4.79132 14.769 4.77237 14.7829C4.75342 14.7969 4.73057 14.8047 4.70701 14.805C4.68346 14.8054 4.66038 14.7984 4.641 14.785L3.727 14.12L2.814 14.785C2.79462 14.7984 2.77154 14.8054 2.74799 14.805C2.72443 14.8047 2.70158 14.7969 2.68263 14.7829C2.66368 14.769 2.64957 14.7494 2.64229 14.727C2.635 14.7046 2.6349 14.6805 2.642 14.658L2.98 13.568L2.077 12.89C2.05769 12.8759 2.04331 12.856 2.0359 12.8333C2.0285 12.8105 2.02844 12.786 2.03575 12.7632C2.04305 12.7404 2.05734 12.7205 2.07659 12.7063C2.09584 12.6921 2.11907 12.6843 2.143 12.684L3.266 12.675L3.621 11.591C3.62803 11.5684 3.64211 11.5486 3.66118 11.5346C3.68025 11.5205 3.70332 11.5129 3.727 11.5129C3.75069 11.5129 3.77375 11.5205 3.79282 11.5346C3.81189 11.5486 3.82597 11.5684 3.833 11.591L4.189 12.675L5.311 12.684C5.33493 12.6843 5.35816 12.6921 5.37741 12.7063C5.39666 12.7205 5.41095 12.7404 5.41825 12.7632C5.42556 12.786 5.4255 12.8105 5.4181 12.8333C5.41069 12.856 5.39631 12.8759 5.377 12.89ZM12.96 12.684L11.837 12.675L11.482 11.591C11.475 11.5684 11.4609 11.5486 11.4418 11.5346C11.4227 11.5205 11.3997 11.5129 11.376 11.5129C11.3523 11.5129 11.3293 11.5205 11.3102 11.5346C11.2911 11.5486 11.277 11.5684 11.27 11.591L10.915 12.675L9.792 12.684C9.76807 12.6843 9.74483 12.6921 9.72558 12.7063C9.70633 12.7205 9.69205 12.7404 9.68475 12.7632C9.67744 12.786 9.6775 12.8105 9.6849 12.8333C9.69231 12.856 9.70669 12.8759 9.726 12.89L10.629 13.568L10.291 14.658C10.2839 14.6805 10.284 14.7046 10.2913 14.727C10.2986 14.7494 10.3127 14.769 10.3316 14.7829C10.3506 14.7969 10.3734 14.8047 10.397 14.805C10.4205 14.8054 10.4436 14.7984 10.463 14.785L11.376 14.12L12.289 14.785C12.3084 14.7984 12.3315 14.8054 12.355 14.805C12.3786 14.8047 12.4014 14.7969 12.4204 14.7829C12.4393 14.769 12.4534 14.7494 12.4607 14.727C12.468 14.7046 12.4681 14.6805 12.461 14.658L12.123 13.568L13.026 12.89C13.0453 12.8759 13.0597 12.856 13.0671 12.8333C13.0745 12.8105 13.0746 12.786 13.0673 12.7632C13.06 12.7404 13.0457 12.7205 13.0264 12.7063C13.0072 12.6921 12.9839 12.6843 12.96 12.684ZM6.805 8.85L6.466 9.94C6.45921 9.9624 6.45955 9.98635 6.46696 10.0085C6.47437 10.0307 6.48849 10.0501 6.50737 10.0639C6.52624 10.0778 6.54895 10.0854 6.57235 10.0858C6.59575 10.0861 6.61869 10.0792 6.638 10.066L7.552 9.402L8.465 10.066C8.48438 10.0794 8.50746 10.0864 8.53101 10.086C8.55457 10.0857 8.57742 10.0779 8.59637 10.0639C8.61532 10.05 8.62943 10.0304 8.63671 10.008C8.644 9.98558 8.6441 9.96146 8.637 9.939L8.298 8.849L9.201 8.171C9.22025 8.15692 9.2346 8.13716 9.24203 8.1145C9.24947 8.09184 9.2496 8.06742 9.24243 8.04467C9.23525 8.02193 9.22112 8.00201 9.20203 7.98772C9.18294 7.97342 9.15984 7.96548 9.136 7.965L8.013 7.957L7.658 6.873C7.65124 6.84999 7.63721 6.82979 7.61801 6.81542C7.59882 6.80105 7.57548 6.79328 7.5515 6.79328C7.52752 6.79328 7.50418 6.80105 7.48499 6.81542C7.46579 6.82979 7.45176 6.84999 7.445 6.873L7.09 7.958L5.967 7.966C5.94316 7.96648 5.92006 7.97442 5.90097 7.98872C5.88188 8.00301 5.86775 8.02293 5.86057 8.04567C5.8534 8.06842 5.85353 8.09284 5.86096 8.1155C5.8684 8.13816 5.88275 8.15792 5.902 8.172L6.805 8.85ZM9.135 19.567L8.013 19.557L7.658 18.474C7.65124 18.451 7.63721 18.4308 7.61801 18.4164C7.59882 18.4021 7.57548 18.3943 7.5515 18.3943C7.52752 18.3943 7.50418 18.4021 7.48499 18.4164C7.46579 18.4308 7.45176 18.451 7.445 18.474L7.09 19.558L5.967 19.567C5.94341 19.5677 5.92064 19.5758 5.90181 19.59C5.88299 19.6043 5.86906 19.624 5.86192 19.6465C5.85479 19.669 5.85481 19.6931 5.86199 19.7156C5.86917 19.7381 5.88315 19.7578 5.902 19.772L6.805 20.451L6.466 21.541C6.45921 21.5634 6.45955 21.5873 6.46696 21.6095C6.47437 21.6317 6.48849 21.6511 6.50737 21.6649C6.52624 21.6788 6.54895 21.6864 6.57235 21.6868C6.59575 21.6871 6.61869 21.6802 6.638 21.667L7.552 21.003L8.465 21.667C8.48438 21.6804 8.50746 21.6874 8.53101 21.687C8.55457 21.6867 8.57742 21.6789 8.59637 21.6649C8.61532 21.651 8.62943 21.6314 8.63671 21.609C8.644 21.5866 8.6441 21.5625 8.637 21.54L8.298 20.45L9.201 19.772C9.21985 19.7578 9.23383 19.7381 9.24101 19.7156C9.24819 19.6931 9.24821 19.669 9.24108 19.6465C9.23394 19.624 9.22001 19.6043 9.20119 19.59C9.18236 19.5758 9.15859 19.5677 9.135 19.567ZM10.126 16.228L9.529 16.224L9.34 15.647C9.33584 15.6354 9.32817 15.6253 9.31806 15.6181C9.30794 15.611 9.29587 15.6072 9.2835 15.6072C9.27113 15.6072 9.25906 15.611 9.24894 15.6181C9.23883 15.6253 9.23116 15.6354 9.227 15.647L9.038 16.224L8.441 16.228C8.42795 16.2276 8.41513 16.2314 8.40447 16.239C8.39381 16.2465 8.3859 16.2573 8.38195 16.2698C8.37799 16.2822 8.3782 16.2956 8.38254 16.3079C8.38688 16.3202 8.39511 16.3308 8.406 16.338L8.886 16.698L8.706 17.278C8.7022 17.29 8.70227 17.3029 8.70619 17.3148C8.71012 17.3268 8.7177 17.3372 8.72787 17.3446C8.73805 17.352 8.75029 17.3561 8.76288 17.3561C8.77546 17.3562 8.78775 17.3523 8.798 17.345L9.284 16.992L9.769 17.345C9.77925 17.3523 9.79154 17.3562 9.80412 17.3561C9.81671 17.3561 9.82895 17.352 9.83912 17.3446C9.8493 17.3372 9.85688 17.3268 9.86081 17.3148C9.86474 17.3029 9.8648 17.29 9.861 17.278L9.681 16.698L10.161 16.338C10.1719 16.3308 10.1801 16.3202 10.1845 16.3079C10.1888 16.2956 10.189 16.2822 10.1851 16.2698C10.1811 16.2573 10.1732 16.2465 10.1625 16.239C10.1519 16.2314 10.139 16.2276 10.126 16.228Z",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M30.766 11.452C30.6636 10.8033 30.4576 10.1753 30.156 9.592C30.264 9.647 30.432 9.746 30.432 9.746L30.284 9.2C30.5255 9.30594 30.7449 9.4562 30.931 9.643C30.8549 9.1583 30.6955 8.69041 30.46 8.26L30.69 8.344C30.5053 7.76432 30.1226 7.26804 29.609 6.942L29.979 6.848C29.6359 6.42215 29.1814 6.09986 28.666 5.917L29.165 5.672C28.7648 5.45575 28.3159 5.3457 27.861 5.35235C27.4062 5.35901 26.9607 5.48214 26.567 5.71C26.567 5.71 27.01 5.24 27.177 5.042C27.344 4.844 26.946 4.778 26.946 4.778C26.946 4.778 27.334 4.505 27.316 4.345C27.296 4.185 26.946 4.27 26.946 4.27C26.946 4.27 27.251 3.95 27.251 3.771C27.251 3.592 26.936 3.706 26.936 3.706C26.9937 3.58263 27.0373 3.45314 27.066 3.32C27.094 3.15 26.789 3.291 26.789 3.291C26.9282 3.05508 27.0367 2.80237 27.112 2.539C27.094 2.407 26.215 2.962 25.586 3.574C25.3689 3.82043 25.2113 4.11335 25.1251 4.43025C25.0389 4.74715 25.0266 5.07958 25.089 5.402C25.144 5.636 25.179 6.182 24.901 6.372C24.622 6.564 24.125 6.096 23.879 5.807C23.633 5.518 23.324 5.619 23.003 5.732C22.6325 5.78439 22.2552 5.76298 21.893 5.669C21.709 5.644 22.103 5.857 22.436 5.983C22.769 6.109 22.917 6.409 23.386 6.585C23.796 6.739 24.125 7.129 23.802 7.309C23.55 7.449 23.552 7.225 22.442 6.933C21.332 6.641 20.002 9.511 20.002 9.511C20.411 9.4678 20.7918 9.28234 21.078 8.987L20.886 9.549C21.1875 9.49775 21.4634 9.34751 21.67 9.122L21.53 9.689C21.8097 9.57335 22.0478 9.37566 22.213 9.122L22.095 9.682C22.3443 9.55414 22.5539 9.36048 22.701 9.122C22.742 9.327 22.775 9.746 22.775 9.746C23.1192 9.57928 23.3895 9.29112 23.534 8.937C24.236 11.101 25.254 11.459 25.254 11.459L25.309 10.894C25.5083 11.1733 25.7672 11.4049 26.067 11.572L25.993 11.082C26.594 11.8642 27.411 12.4531 28.343 12.776L28.02 12.026L28.416 12.108C28.1349 11.8306 27.9336 11.4828 27.833 11.101L28.166 11.158C27.838 10.8495 27.566 10.4864 27.362 10.085L27.686 10.142C27.595 9.90879 27.5328 9.66531 27.501 9.417C27.8205 9.50963 28.1233 9.6524 28.398 9.84L28.433 9.635C29.1766 10.1687 29.8253 10.8235 30.352 11.572C30.3554 11.8664 30.301 12.1585 30.192 12.432C30.092 12.6648 29.9459 12.875 29.7625 13.0499C29.5792 13.2249 29.3624 13.3609 29.1251 13.4499C28.8879 13.539 28.6351 13.5791 28.3819 13.5679C28.1288 13.5568 27.8805 13.4945 27.652 13.385C27.652 13.385 29.562 14.903 30.611 12.745C30.6754 12.6072 30.7218 12.4617 30.749 12.312C30.8843 12.6263 30.9648 12.9615 30.987 13.303C31.097 15.505 28.842 15.298 28.842 15.298C28.842 15.298 31.338 16.314 31.449 13.378C31.4374 12.6787 31.1976 12.0023 30.766 11.452ZM28.498 9.255L28.508 9.191C28.7828 9.28496 29.0441 9.41475 29.285 9.577L29.373 9.309C29.7409 9.74097 30.0263 10.2369 30.215 10.772C29.691 10.2141 29.1162 9.70624 28.498 9.255Z",
  fill: "#FFE15A"
}));
const ForwardRef = forwardRef(PapaNewGuineaIcon);
export default ForwardRef;