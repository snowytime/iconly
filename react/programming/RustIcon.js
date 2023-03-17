import * as React from "react";
import { forwardRef } from "react";
const RustIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 48 24",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M23.4605 9.65347C19.0881 9.65347 15.1156 10.1753 12.1745 11.0258V18.2905C15.1156 19.141 19.0881 19.6628 23.4605 19.6628C28.4648 19.6628 32.945 18.9793 35.9544 17.9018V11.4147C32.945 10.3371 28.4648 9.65347 23.4605 9.65347Z",
  fill: "#F34F29"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36.1499 16.2288C36.0218 15.8772 35.9962 15.4323 36.1048 15.0033C36.2991 14.2353 36.8495 13.8096 37.3342 14.0525C37.4544 14.1128 37.5592 14.2085 37.646 14.3301C37.6539 14.3301 37.6619 14.3301 37.6697 14.3306C37.6697 14.3306 39.1496 16.0819 37.7798 18.1561C37.75 18.2738 35.2376 21.1806 34.656 21.2732C34.2753 21.3337 35.1506 18.3053 36.1499 16.2288Z",
  fill: "#F34F29"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.8705 15.8852C12.0465 15.5676 12.1082 15.1337 12.0106 14.684C11.8356 13.8788 11.2163 13.3283 10.6274 13.4544C10.4813 13.4857 10.3508 13.5557 10.2398 13.6555C10.2305 13.6536 10.2211 13.6518 10.2118 13.6505C10.2118 13.6505 8.34195 15.0339 9.81129 17.4074C9.83803 17.5307 12.5965 20.9965 13.2761 21.2249C13.7209 21.3743 12.9026 18.1736 11.8705 15.8852Z",
  fill: "#F34F29"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.71545 16.4522C10.0797 16.0412 10.9648 15.5434 10.897 14.926C10.7756 13.8204 9.85211 13.0133 8.83425 13.1235C8.58184 13.1508 8.34736 13.2321 8.13926 13.3555C8.12388 13.352 8.10854 13.3485 8.09316 13.3458C8.09316 13.3458 4.65086 15.0234 6.61289 18.38C6.6314 18.5494 10.5274 23.5134 11.6215 23.8914C12.3376 24.1388 10.9601 19.6493 9.71545 16.4522Z",
  fill: "#F34F29"
}), /*#__PURE__*/React.createElement("path", {
  d: "M37.682 16.3024C37.2604 15.9495 36.1487 15.6291 36.1235 15.0084C36.0785 13.8972 36.8713 12.9632 37.8943 12.9223C38.1481 12.9122 38.392 12.958 38.6163 13.0495C38.631 13.0438 38.6456 13.0381 38.6604 13.0331C38.6604 13.0331 42.3151 14.1857 40.8758 17.7939C40.8828 17.9641 37.7711 23.4466 36.7455 23.9815C36.0742 24.3315 36.9284 19.6473 37.682 16.3024Z",
  fill: "#F34F29"
}), /*#__PURE__*/React.createElement("path", {
  d: "M38.9964 13.6059C38.9672 13.5048 38.9381 13.4039 38.908 13.3038L39.9272 11.8379C40.0311 11.6888 40.0524 11.495 39.9846 11.3249C39.9169 11.1558 39.7691 11.0344 39.594 11.0047L37.8705 10.7144C37.8038 10.5791 37.7338 10.4459 37.6636 10.3137L38.3876 8.66807C38.4621 8.50031 38.4464 8.30549 38.3477 8.15336C38.2493 8.00048 38.0823 7.91118 37.9042 7.91814L36.1552 7.98122C36.0646 7.86416 35.9726 7.74814 35.8788 7.63428L36.2808 5.87034C36.3214 5.69118 36.2701 5.50371 36.1444 5.37358C36.0195 5.24391 35.8379 5.19026 35.6653 5.23234L33.9616 5.64811C33.8513 5.55132 33.7391 5.45576 33.6257 5.3621L33.6871 3.55121C33.6936 3.36789 33.6076 3.19368 33.4597 3.09201C33.3121 2.98965 33.1245 2.97418 32.963 3.05026L31.3736 3.80039C31.2456 3.72751 31.1169 3.65529 30.9868 3.58548L30.706 1.80093C30.6775 1.62012 30.5603 1.46658 30.3962 1.39644C30.2327 1.32597 30.0452 1.34872 29.9016 1.45606L28.4846 2.51155C28.3451 2.46555 28.2049 2.42146 28.063 2.37928L27.4523 0.68704C27.3902 0.514604 27.2469 0.387907 27.0724 0.352292C26.8984 0.316941 26.7193 0.376761 26.5986 0.510647L25.4059 1.83536C25.2617 1.81887 25.1174 1.80383 24.9726 1.79147L24.0518 0.25102C23.9584 0.0949733 23.7937 0 23.6161 0C23.4389 0 23.2738 0.0949733 23.1813 0.25102L22.2601 1.79147C22.1154 1.80383 21.9704 1.81887 21.8264 1.83536L20.6336 0.510647C20.5129 0.376761 20.3331 0.316941 20.1597 0.352292C19.9851 0.388302 19.8417 0.514604 19.7799 0.68704L19.1687 2.37928C19.0272 2.42146 18.887 2.46591 18.7471 2.51155L17.3306 1.45606C17.1866 1.34836 16.9991 1.32564 16.8352 1.39644C16.6718 1.46658 16.5541 1.62012 16.5258 1.80093L16.2448 3.58548C16.1148 3.65529 15.9861 3.72708 15.8577 3.80039L14.2686 3.05023C14.1072 2.97385 13.9188 2.98962 13.7719 3.09198C13.6242 3.19364 13.5379 3.36786 13.5447 3.55118L13.6056 5.36207C13.4925 5.45573 13.3806 5.55129 13.2697 5.64808L11.5664 5.23231C11.3933 5.19059 11.212 5.24388 11.0867 5.37355C10.9607 5.50367 10.9096 5.69115 10.9501 5.87031L11.3513 7.63424C11.2583 7.74857 11.1662 7.86412 11.0759 7.98119L9.32685 7.91811C9.15034 7.91293 8.98187 8.00045 8.88321 8.15333C8.78443 8.30545 8.76945 8.50028 8.84299 8.66803L9.56757 10.3137C9.49719 10.4458 9.42727 10.5791 9.36 10.7143L7.63666 11.0047C7.46158 11.034 7.31396 11.1553 7.24587 11.3249C7.17821 11.495 7.2002 11.6887 7.3035 11.8379L8.32292 13.3037C8.31508 13.3296 8.3078 13.3557 8.3 13.3817L7.73987 13.9723L9.24594 16.0845C9.24594 16.0845 23.7002 22.704 37.1079 16.1965C38.6394 15.9237 38.9964 13.6059 38.9964 13.6059Z",
  fill: "#F34F29"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.18791 16.1477C9.18791 16.1477 4.63013 15.9847 3.81945 11.5058L5.73259 10.6673C5.73259 10.6673 5.27048 13.8647 9.27397 14.2955L9.18791 16.1477Z",
  fill: "#F34F29"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.01968 8.48294C4.01968 8.48294 3.19043 6.84154 1.8338 4.74794C0.404689 5.44748 -0.30588 7.36063 0.230667 9.2876C0.82345 11.4165 2.71357 12.7555 4.45239 12.2783C6.19121 11.8011 7.12028 9.68844 6.52746 7.55955C6.26475 6.61582 5.74684 5.82764 5.10038 5.28378C4.78562 6.96699 4.01968 8.48294 4.01968 8.48294Z",
  fill: "#F34F29"
}), /*#__PURE__*/React.createElement("path", {
  d: "M37.9158 16.1477C37.9158 16.1477 42.4736 15.9847 43.2843 11.5058L41.3712 10.6673C41.3712 10.6673 41.8333 13.8646 37.8298 14.2955L37.9158 16.1477Z",
  fill: "#F34F29"
}), /*#__PURE__*/React.createElement("path", {
  d: "M43.0841 8.48294C43.0841 8.48294 43.9134 6.84154 45.27 4.74794C46.6991 5.44745 47.4097 7.36063 46.8731 9.2876C46.2803 11.4165 44.3902 12.7555 42.6514 12.2782C40.9126 11.8011 39.9835 9.68844 40.5763 7.55955C40.839 6.61582 41.3569 5.82764 42.0034 5.28378C42.3181 6.96699 43.0841 8.48294 43.0841 8.48294Z",
  fill: "#F34F29"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26.2136 12.225C26.2136 12.225 27.8134 10.486 29.4131 12.225C29.4131 12.225 30.6702 14.5438 29.4131 15.7031C29.4131 15.7031 27.3563 17.3263 26.2136 15.7031C26.2136 15.7031 24.8423 14.4277 26.2136 12.225Z",
  fill: "black"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28.1879 13.364C28.1879 14.0163 27.8006 14.5452 27.3229 14.5452C26.8453 14.5452 26.458 14.0163 26.458 13.364C26.458 12.7116 26.8453 12.1827 27.3229 12.1827C27.8006 12.1827 28.1879 12.7116 28.1879 13.364Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.9951 11.6832C18.9951 11.6832 21.7998 10.4504 22.5653 13.2021C22.5653 13.2021 23.3672 16.4095 20.2621 16.5905C20.2621 16.5905 16.3026 15.8334 18.9951 11.6832Z",
  fill: "black"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.6265 13.3639C20.6265 14.0426 20.2236 14.593 19.7265 14.593C19.2296 14.593 18.8266 14.0426 18.8266 13.3639C18.8266 12.6852 19.2296 12.1349 19.7265 12.1349C20.2236 12.1349 20.6265 12.6852 20.6265 13.3639Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22.3993 16.3829C22.4345 18.3337 24.575 18.6425 24.575 18.6425C26.2963 18.4468 26.6921 17.2892 26.7276 16.3733L22.3993 16.3829Z",
  fill: "black"
}));
const ForwardRef = forwardRef(RustIcon);
export default ForwardRef;