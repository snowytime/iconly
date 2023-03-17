import * as React from "react";
import { forwardRef } from "react";
const SquareEdgeIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 16 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M7.32675 17.3159C7.77886 17.5614 8.23098 17.5614 8.68309 17.3159L10.8674 16.1038C11.0567 15.9964 11.175 15.8583 11.2223 15.6895C11.2696 15.5208 11.2486 15.3545 11.1592 15.1909C11.0698 15.0323 10.9305 14.9326 10.7412 14.8917C10.5572 14.8559 10.3732 14.8891 10.1892 14.9914L8.65943 15.843V14.2856C8.65943 14.076 8.59634 13.9046 8.47017 13.7717C8.34926 13.6336 8.19418 13.5645 8.00492 13.5645C7.81041 13.5645 7.65006 13.6336 7.52389 13.7717C7.40298 13.9046 7.34252 14.076 7.34252 14.2856V15.843L5.81271 14.9914C5.62871 14.8891 5.44208 14.8559 5.25282 14.8917C5.06883 14.9326 4.93214 15.0323 4.84277 15.1909C4.7534 15.3545 4.73237 15.5208 4.77969 15.6895C4.827 15.8583 4.94791 15.9964 5.14243 16.1038L7.32675 17.3159ZM2.15376 14.4544C2.34302 14.5567 2.52964 14.5925 2.71364 14.5618C2.9029 14.526 3.04221 14.4237 3.13158 14.255C3.22095 14.0913 3.2341 13.9225 3.17101 13.7486C3.11318 13.5748 2.99753 13.4392 2.82404 13.3421L1.97239 12.8818L3.18678 12.199C3.3813 12.0967 3.51009 11.9561 3.57318 11.7771C3.63626 11.593 3.61524 11.4242 3.51009 11.2708C3.40495 11.1173 3.26301 11.0202 3.08427 10.9792C2.90553 10.9332 2.72679 10.9588 2.54804 11.056L1.27845 11.7541V10.7568C1.27845 10.5522 1.218 10.3809 1.09708 10.2428C0.97617 10.1047 0.823714 10.0356 0.639715 10.0356C0.450459 10.0356 0.295374 10.1047 0.174461 10.2428C0.0588047 10.3809 0.000976562 10.5522 0.000976562 10.7568V11.9612C0.000976562 12.5289 0.0956044 12.9431 0.28486 13.204C0.479373 13.4597 0.760628 13.6898 1.12863 13.8944L2.15376 14.4544ZM0.639715 8.37861C0.828971 8.37861 0.981427 8.31212 1.09708 8.17915C1.218 8.04106 1.27845 7.86718 1.27845 7.65749V6.19991L2.7373 7.01309C2.91078 7.11026 3.0869 7.13839 3.26564 7.09747C3.44438 7.05656 3.58895 6.95939 3.69935 6.80596C3.80449 6.65253 3.82289 6.48631 3.75455 6.30731C3.68621 6.12319 3.55478 5.97999 3.36027 5.87771L1.99605 5.11823L3.32872 4.38177C3.46015 4.31017 3.56004 4.22067 3.62838 4.11327C3.70198 4.00075 3.74141 3.88568 3.74666 3.76805C3.75192 3.64531 3.72038 3.53023 3.65204 3.42283C3.54689 3.2694 3.40495 3.17735 3.22621 3.14666C3.05273 3.11597 2.88187 3.14666 2.71364 3.23872L0.994569 4.18998C0.673886 4.3741 0.426802 4.59657 0.253318 4.8574C0.0850902 5.11823 0.000976562 5.46089 0.000976562 5.88538V7.65749C0.000976562 7.86718 0.0614333 8.04106 0.182347 8.17915C0.30326 8.31212 0.455716 8.37861 0.639715 8.37861ZM8.00492 4.28971C8.19418 4.28971 8.34926 4.22323 8.47017 4.09025C8.59634 3.95217 8.65943 3.78084 8.65943 3.57626V2.14937L9.77131 2.77076C9.95005 2.86793 10.134 2.89862 10.3233 2.86282C10.5178 2.82702 10.6571 2.72984 10.7412 2.5713C10.8043 2.4639 10.8332 2.35394 10.828 2.24143C10.828 2.12891 10.7938 2.02151 10.7255 1.91922C10.6624 1.81694 10.5678 1.72999 10.4416 1.65839L8.7304 0.714802C8.4728 0.571601 8.23098 0.5 8.00492 0.5C7.77886 0.5 7.53441 0.571601 7.27155 0.714802L5.56037 1.65839C5.4342 1.72999 5.33957 1.81694 5.27648 1.91922C5.2134 2.02151 5.17923 2.12891 5.17397 2.24143C5.17397 2.35394 5.20288 2.4639 5.26071 2.5713C5.35008 2.72984 5.48939 2.82702 5.67865 2.86282C5.87316 2.89862 6.05716 2.86793 6.23065 2.77076L7.34252 2.14937V3.57626C7.34252 3.78084 7.40298 3.95217 7.52389 4.09025C7.65006 4.22323 7.81041 4.28971 8.00492 4.28971ZM15.3622 8.37861C15.5462 8.37861 15.6987 8.31212 15.8196 8.17915C15.9405 8.04106 16.001 7.86718 16.001 7.65749V5.88538C16.001 5.42509 15.9274 5.07987 15.7802 4.84973C15.6382 4.61447 15.3833 4.39455 15.0153 4.18998L13.2883 3.23872C13.1253 3.14666 12.9545 3.11597 12.7757 3.14666C12.6023 3.17735 12.4629 3.2694 12.3578 3.42283C12.2895 3.53023 12.2553 3.64531 12.2553 3.76805C12.2605 3.88568 12.2973 4.00075 12.3657 4.11327C12.4393 4.22067 12.5444 4.31017 12.6811 4.38177L14.0138 5.11823L12.6417 5.87771C12.4472 5.97999 12.3157 6.12319 12.2474 6.30731C12.1843 6.48631 12.2053 6.65253 12.3105 6.80596C12.4156 6.95939 12.5576 7.05656 12.7363 7.09747C12.9203 7.13839 13.0964 7.11026 13.2647 7.01309L14.7235 6.19991V7.65749C14.7235 7.86718 14.784 8.04106 14.9049 8.17915C15.0258 8.31212 15.1782 8.37861 15.3622 8.37861ZM13.8482 14.4544L14.8733 13.8944C15.2466 13.6898 15.5278 13.4597 15.7171 13.204C15.9063 12.9431 16.001 12.5289 16.001 11.9612V10.7568C16.001 10.5522 15.9405 10.3809 15.8196 10.2428C15.704 10.1047 15.5515 10.0356 15.3622 10.0356C15.1835 10.0356 15.031 10.1047 14.9049 10.2428C14.784 10.3809 14.7235 10.5522 14.7235 10.7568V11.7617L13.4539 11.056C13.2752 10.9588 13.0964 10.9332 12.9177 10.9792C12.7442 11.0202 12.6049 11.1173 12.4997 11.2708C12.3946 11.4242 12.3736 11.593 12.4367 11.7771C12.4997 11.9561 12.6259 12.0967 12.8152 12.199L14.0217 12.8818L13.1779 13.3421C13.0044 13.4392 12.8888 13.5748 12.8309 13.7486C12.7731 13.9225 12.7889 14.0913 12.8783 14.255C12.9676 14.4237 13.1043 14.526 13.2883 14.5618C13.4776 14.5925 13.6642 14.5567 13.8482 14.4544ZM8.00492 11.9842C8.19418 11.9842 8.34926 11.9152 8.47017 11.7771C8.59634 11.639 8.65943 11.4677 8.65943 11.2631V9.56769L10.2839 8.66245C10.4731 8.56017 10.5967 8.41952 10.6545 8.24052C10.7176 8.05641 10.6966 7.88764 10.5914 7.73421C10.4863 7.57566 10.3443 7.47593 10.1656 7.43502C9.99211 7.3941 9.81862 7.42223 9.64514 7.5194L8.00492 8.42464L6.3647 7.5194C6.18596 7.42223 6.00722 7.3941 5.82848 7.43502C5.65499 7.47593 5.51568 7.57566 5.41054 7.73421C5.3054 7.88764 5.28174 8.05641 5.33957 8.24052C5.40265 8.41952 5.53145 8.56017 5.72596 8.66245L7.34252 9.56769V11.2631C7.34252 11.4677 7.40298 11.639 7.52389 11.7771C7.65006 11.9152 7.81041 11.9842 8.00492 11.9842Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(SquareEdgeIcon);
export default ForwardRef;