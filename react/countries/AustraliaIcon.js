import * as React from "react";
import { forwardRef } from "react";
const AustraliaIcon = ({
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
  fill: "#41479B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.067 7.579L18 10.867V12H16.301L10.551 8.167V12H7.449V8.167L1.698 12H0V10.867L4.933 7.58H0V4.42H4.933L0 1.133V0H1.699L7.449 3.833V0H10.552V3.833L16.302 0H18V1.133L13.067 4.42H18V7.578L13.067 7.579ZM11.81 18.79L10.407 17.975L11.324 16.621C11.3411 16.5963 11.3498 16.5667 11.3489 16.5366C11.348 16.5066 11.3376 16.4776 11.319 16.4539C11.3005 16.4302 11.2749 16.4131 11.2459 16.405C11.2169 16.3969 11.1861 16.3983 11.158 16.409L9.656 17.017L9.188 15.443C9.17961 15.4141 9.16206 15.3887 9.13799 15.3706C9.11391 15.3525 9.08461 15.3427 9.0545 15.3427C9.02439 15.3427 8.99509 15.3525 8.97101 15.3706C8.94694 15.3887 8.92939 15.4141 8.921 15.443L8.452 17.017L6.951 16.409C6.92288 16.3983 6.89209 16.3969 6.86312 16.405C6.83415 16.4131 6.80852 16.4302 6.78998 16.4539C6.77144 16.4776 6.76095 16.5066 6.76006 16.5366C6.75916 16.5667 6.7679 16.5963 6.785 16.621L7.702 17.975L6.298 18.79C6.27155 18.8051 6.25064 18.8282 6.23836 18.8561C6.22609 18.884 6.22309 18.915 6.22981 18.9447C6.23653 18.9744 6.25262 19.0012 6.2757 19.021C6.29878 19.0409 6.32763 19.0528 6.358 19.055L7.97 19.169L7.72 20.794C7.71503 20.8237 7.71979 20.8543 7.73358 20.8811C7.74736 20.9079 7.76944 20.9296 7.79652 20.9428C7.8236 20.9561 7.85424 20.9602 7.88387 20.9547C7.91351 20.9491 7.94056 20.9342 7.961 20.912L9.054 19.7L10.148 20.91C10.1685 20.9316 10.1953 20.9461 10.2246 20.9514C10.2539 20.9567 10.2841 20.9525 10.3109 20.9394C10.3376 20.9264 10.3595 20.9052 10.3734 20.8788C10.3873 20.8525 10.3924 20.8224 10.388 20.793L10.138 19.168L11.751 19.054C11.7814 19.0518 11.8102 19.0399 11.8333 19.02C11.8564 19.0002 11.8725 18.9734 11.8792 18.9437C11.8859 18.914 11.8829 18.883 11.8706 18.8551C11.8584 18.8273 11.8375 18.8041 11.811 18.789L11.81 18.79ZM26.27 6.018L27.057 6.074L26.936 6.867C26.9334 6.88149 26.9356 6.89643 26.9422 6.90958C26.9488 6.92273 26.9595 6.93337 26.9727 6.93991C26.9859 6.94645 27.0009 6.94853 27.0154 6.94584C27.0298 6.94315 27.043 6.93584 27.053 6.925L27.587 6.333L28.121 6.925C28.131 6.93584 28.1442 6.94315 28.1586 6.94584C28.1731 6.94853 28.1881 6.94645 28.2013 6.93991C28.2145 6.93337 28.2252 6.92273 28.2318 6.90958C28.2384 6.89643 28.2406 6.88149 28.238 6.867L28.117 6.074L28.904 6.018C28.9188 6.0168 28.9329 6.01091 28.9441 6.0012C28.9553 5.99149 28.9632 5.97845 28.9665 5.96397C28.9699 5.94949 28.9685 5.93433 28.9627 5.92067C28.9568 5.90701 28.9468 5.89557 28.934 5.888L28.248 5.49L28.696 4.829C28.7044 4.81691 28.7088 4.80245 28.7084 4.78772C28.708 4.77299 28.7029 4.75877 28.6938 4.74715C28.6848 4.73552 28.6722 4.7271 28.6581 4.72312C28.6439 4.71913 28.6288 4.71979 28.615 4.725L27.881 5.022L27.652 4.254C27.6477 4.2401 27.6391 4.22793 27.6274 4.21928C27.6157 4.21064 27.6015 4.20598 27.587 4.20598C27.5725 4.20598 27.5583 4.21064 27.5466 4.21928C27.5349 4.22793 27.5263 4.2401 27.522 4.254L27.292 5.022L26.559 4.725C26.5453 4.72013 26.5304 4.71974 26.5164 4.72386C26.5024 4.72799 26.4901 4.73642 26.4813 4.74796C26.4724 4.75951 26.4674 4.77356 26.467 4.78812C26.4666 4.80267 26.4708 4.81698 26.479 4.829L26.926 5.49L26.241 5.889C26.2287 5.89667 26.219 5.908 26.2134 5.9214C26.2078 5.93481 26.2065 5.94963 26.2097 5.96381C26.2128 5.97799 26.2204 5.99082 26.2312 6.00053C26.242 6.01024 26.2556 6.01635 26.27 6.018ZM23.83 11.789L23.145 11.391L23.593 10.73C23.6014 10.7179 23.6058 10.7034 23.6054 10.6887C23.605 10.674 23.5999 10.6598 23.5908 10.6481C23.5818 10.6365 23.5692 10.6281 23.5551 10.6241C23.5409 10.6201 23.5258 10.6208 23.512 10.626L22.778 10.923L22.549 10.155C22.5447 10.1411 22.5361 10.1289 22.5244 10.1203C22.5127 10.1116 22.4985 10.107 22.484 10.107C22.4695 10.107 22.4553 10.1116 22.4436 10.1203C22.4319 10.1289 22.4233 10.1411 22.419 10.155L22.189 10.923L21.456 10.626C21.4423 10.6211 21.4274 10.6207 21.4134 10.6249C21.3994 10.629 21.3871 10.6374 21.3783 10.649C21.3694 10.6605 21.3644 10.6746 21.364 10.6891C21.3636 10.7037 21.3678 10.718 21.376 10.73L21.823 11.391L21.138 11.789C21.1253 11.7965 21.1152 11.8079 21.1093 11.8214C21.1034 11.835 21.102 11.8501 21.1052 11.8645C21.1084 11.879 21.1162 11.892 21.1273 11.9018C21.1384 11.9116 21.1523 11.9176 21.167 11.919L21.954 11.974L21.833 12.768C21.8304 12.7825 21.8326 12.7974 21.8392 12.8106C21.8458 12.8237 21.8565 12.8344 21.8697 12.8409C21.8829 12.8474 21.8979 12.8495 21.9124 12.8468C21.9268 12.8442 21.94 12.8368 21.95 12.826L22.484 12.234L23.018 12.826C23.028 12.8368 23.0412 12.8442 23.0556 12.8468C23.0701 12.8495 23.0851 12.8474 23.0983 12.8409C23.1115 12.8344 23.1222 12.8237 23.1288 12.8106C23.1354 12.7974 23.1376 12.7825 23.135 12.768L23.014 11.974L23.801 11.919C23.8158 11.9178 23.8299 11.9119 23.8411 11.9022C23.8523 11.8925 23.8602 11.8794 23.8635 11.865C23.8669 11.8505 23.8655 11.8353 23.8597 11.8217C23.8538 11.808 23.8428 11.7966 23.83 11.789ZM33.761 9.263L33.076 8.865L33.524 8.203C33.532 8.1909 33.536 8.17659 33.5354 8.16208C33.5348 8.14758 33.5297 8.13363 33.5207 8.12223C33.5118 8.11082 33.4994 8.10253 33.4855 8.09854C33.4715 8.09455 33.4566 8.09506 33.443 8.1L32.709 8.397L32.48 7.628C32.4757 7.6141 32.4671 7.60193 32.4554 7.59328C32.4437 7.58464 32.4295 7.57998 32.415 7.57998C32.4005 7.57998 32.3863 7.58464 32.3746 7.59328C32.3629 7.60193 32.3543 7.6141 32.35 7.628L32.12 8.397L31.388 8.1C31.3743 8.09472 31.3593 8.09394 31.3451 8.09779C31.3309 8.10164 31.3183 8.10992 31.3092 8.12141C31.3001 8.1329 31.2948 8.147 31.2942 8.16168C31.2937 8.17635 31.2978 8.19083 31.306 8.203L31.754 8.865L31.069 9.263C31.0563 9.27051 31.0462 9.28187 31.0403 9.29544C31.0344 9.30902 31.033 9.32411 31.0362 9.33855C31.0394 9.35299 31.0472 9.36604 31.0583 9.37582C31.0694 9.3856 31.0833 9.39162 31.098 9.393L31.885 9.448L31.764 10.242C31.7617 10.2564 31.7641 10.2712 31.7708 10.2841C31.7775 10.2971 31.7882 10.3075 31.8014 10.3139C31.8145 10.3203 31.8293 10.3223 31.8436 10.3196C31.858 10.3169 31.8711 10.3097 31.881 10.299L32.415 9.708L32.949 10.299C32.9589 10.3097 32.972 10.3169 32.9864 10.3196C33.0007 10.3223 33.0155 10.3203 33.0286 10.3139C33.0418 10.3075 33.0525 10.2971 33.0592 10.2841C33.0659 10.2712 33.0683 10.2564 33.066 10.242L32.945 9.448L33.732 9.392C33.7465 9.39052 33.7602 9.38454 33.7712 9.3749C33.7821 9.36525 33.7898 9.35243 33.7931 9.33822C33.7964 9.324 33.7952 9.30911 33.7896 9.29563C33.784 9.28214 33.7734 9.27073 33.761 9.263ZM28.933 19.368L28.248 18.97L28.696 18.309C28.7044 18.2969 28.7088 18.2824 28.7084 18.2677C28.708 18.253 28.7029 18.2388 28.6938 18.2271C28.6848 18.2155 28.6722 18.2071 28.6581 18.2031C28.6439 18.1991 28.6288 18.1998 28.615 18.205L27.881 18.502L27.652 17.733C27.6477 17.7191 27.6391 17.7069 27.6274 17.6983C27.6157 17.6896 27.6015 17.685 27.587 17.685C27.5725 17.685 27.5583 17.6896 27.5466 17.6983C27.5349 17.7069 27.5263 17.7191 27.522 17.733L27.292 18.503L26.56 18.205C26.5462 18.1994 26.5309 18.1985 26.5165 18.2023C26.5021 18.2062 26.4893 18.2146 26.48 18.2263C26.4708 18.238 26.4656 18.2524 26.4652 18.2673C26.4649 18.2822 26.4694 18.2968 26.478 18.309L26.926 18.97L26.241 19.368C26.2283 19.3755 26.2182 19.3869 26.2123 19.4004C26.2064 19.414 26.205 19.4291 26.2082 19.4435C26.2114 19.458 26.2192 19.471 26.2303 19.4808C26.2414 19.4906 26.2553 19.4966 26.27 19.498L27.057 19.553L26.936 20.347C26.9337 20.3614 26.9361 20.3762 26.9428 20.3891C26.9495 20.4021 26.9602 20.4125 26.9734 20.4189C26.9865 20.4253 27.0013 20.4273 27.0156 20.4246C27.03 20.4219 27.0431 20.4147 27.053 20.404L27.587 19.813L28.121 20.405C28.131 20.4158 28.1442 20.4232 28.1586 20.4258C28.1731 20.4285 28.1881 20.4264 28.2013 20.4199C28.2145 20.4134 28.2252 20.4027 28.2318 20.3896C28.2384 20.3764 28.2406 20.3615 28.238 20.347L28.117 19.553L28.904 19.497C28.9185 19.4955 28.9322 19.4895 28.9432 19.4799C28.9541 19.4703 28.9618 19.4574 28.9651 19.4432C28.9684 19.429 28.9672 19.4141 28.9616 19.4006C28.956 19.3871 28.9454 19.3757 28.933 19.368ZM30.336 12.101L29.756 12.097L29.571 11.536C29.5658 11.5205 29.5559 11.507 29.5426 11.4974C29.5293 11.4878 29.5134 11.4827 29.497 11.4827C29.4806 11.4827 29.4647 11.4878 29.4514 11.4974C29.4381 11.507 29.4282 11.5205 29.423 11.536L29.239 12.096L28.659 12.101C28.6424 12.1014 28.6263 12.107 28.613 12.117C28.5997 12.1269 28.5898 12.1408 28.5848 12.1566C28.5797 12.1725 28.5797 12.1895 28.5848 12.2053C28.5898 12.2212 28.5997 12.235 28.613 12.245L29.08 12.595L28.905 13.159C28.8997 13.1747 28.8995 13.1918 28.9045 13.2076C28.9094 13.2235 28.9192 13.2374 28.9325 13.2473C28.9458 13.2573 28.9619 13.2628 28.9785 13.2631C28.9951 13.2634 29.0114 13.2585 29.025 13.249L29.497 12.904L29.97 13.248C29.9836 13.2573 29.9997 13.2621 30.0161 13.2618C30.0326 13.2615 30.0485 13.2561 30.0617 13.2463C30.075 13.2365 30.0848 13.2228 30.0898 13.2072C30.0949 13.1915 30.095 13.1747 30.09 13.159L29.915 12.596L30.382 12.245C30.3953 12.235 30.4052 12.2212 30.4102 12.2053C30.4153 12.1895 30.4153 12.1725 30.4102 12.1566C30.4052 12.1408 30.3953 12.1269 30.382 12.117C30.3687 12.107 30.3526 12.1014 30.336 12.101Z",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 6.947H9.931V12H8.069V6.947H0V5.053H8.069V0H9.931V5.053H18V6.947ZM6.828 4.421L0.166 0.001H0V0.664L5.688 4.421H6.828ZM18 0.253V0H17.245L10.552 4.421H11.692L18 0.253ZM0 11.729V12H0.738L7.43 7.579H6.29L0 11.729ZM18 11.423L12.178 7.579H11.038L17.512 12H18V11.423Z",
  fill: "#FF4B55"
}));
const ForwardRef = forwardRef(AustraliaIcon);
export default ForwardRef;