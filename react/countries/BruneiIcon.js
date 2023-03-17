import * as React from "react";
import { forwardRef } from "react";
const BruneiIcon = ({
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
  fill: "#FFE15A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0V4.421L22.881 14.055H23.565C23.6035 14.0546 23.6405 14.0695 23.668 14.0964C23.6954 14.1233 23.7111 14.16 23.7115 14.1985C23.7119 14.237 23.697 14.274 23.6701 14.3015C23.6432 14.3289 23.6065 14.3446 23.568 14.345L36 19.578V15.157L0 0Z",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23.568 14.345L23.565 14.346H21.853C21.834 14.3459 21.8152 14.342 21.7977 14.3346C21.7802 14.3271 21.7644 14.3163 21.7511 14.3028C21.7378 14.2892 21.7273 14.2731 21.7203 14.2555C21.7132 14.2379 21.7097 14.219 21.71 14.2C21.7099 14.1811 21.7135 14.1623 21.7206 14.1448C21.7277 14.1273 21.7382 14.1113 21.7515 14.0979C21.7647 14.0844 21.7805 14.0737 21.798 14.0663C21.8154 14.059 21.8341 14.0551 21.853 14.055H22.881L0 4.421V8.842L12.408 14.067C12.418 14.064 12.424 14.055 12.435 14.055H14.147C14.1855 14.055 14.2223 14.0703 14.2495 14.0975C14.2767 14.1247 14.292 14.1615 14.292 14.2C14.292 14.2385 14.2767 14.2753 14.2495 14.3025C14.2223 14.3297 14.1855 14.345 14.147 14.345H13.071L36 24V19.579L23.568 14.345Z",
  fill: "#464655"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.614 11.904C14.7014 12.2459 14.8349 12.5742 15.011 12.88C15.3664 13.4795 15.8896 13.9617 16.516 14.267C16.8212 14.413 17.1459 14.514 17.48 14.567C17.6276 14.5917 17.7765 14.6074 17.926 14.614L17.951 14.615L17.964 14.616L18.005 14.618L18.065 14.615L18.183 14.61C18.262 14.604 18.341 14.605 18.418 14.594C19.0027 14.5257 19.5597 14.3073 20.035 13.96C20.4295 13.6644 20.7584 13.2902 21.001 12.861C21.1857 12.5353 21.3206 12.1837 21.401 11.818C21.4338 11.6818 21.4565 11.5435 21.469 11.404C21.4822 11.3046 21.4883 11.2043 21.487 11.104V10.861L21.463 10.611C21.4542 10.512 21.4385 10.4138 21.416 10.317C21.3921 10.1847 21.3583 10.0543 21.315 9.927C21.2072 9.58468 21.0433 9.26263 20.83 8.974C20.8 8.934 20.765 8.894 20.732 8.853C20.8867 8.67195 21.023 8.47599 21.139 8.268C20.6207 8.26855 20.1082 8.1595 19.635 7.948C19.3628 7.80221 19.0731 7.69166 18.773 7.619L18.625 7.015C18.6102 6.95257 18.5748 6.89694 18.5246 6.85704C18.4744 6.81714 18.4122 6.79529 18.348 6.795H18.143V6.505H19.142L18.856 5.924L19.142 5.344H18.142V5.053H17.857V6.795H17.652C17.5878 6.79529 17.5256 6.81714 17.4754 6.85704C17.4252 6.89694 17.3898 6.95257 17.375 7.015L17.23 7.606C17.0344 7.64589 16.8431 7.70483 16.659 7.782C16.5053 7.8459 16.3568 7.9218 16.215 8.009C15.7841 8.1802 15.3247 8.26841 14.861 8.269C14.9767 8.4766 15.1127 8.67222 15.267 8.853C15.239 8.888 15.207 8.92 15.18 8.956C14.9839 9.23033 14.8262 9.53008 14.711 9.847C14.6035 10.1694 14.5369 10.504 14.513 10.843V11.123C14.5124 11.2103 14.5177 11.2975 14.529 11.384C14.545 11.5591 14.5734 11.7329 14.614 11.904ZM18.286 10.716C18.286 10.315 18.413 9.99 18.571 9.99V9.422C18.8617 9.56956 19.1899 9.62653 19.5133 9.58552C19.8367 9.54452 20.1404 9.40744 20.385 9.192C20.395 9.21 20.409 9.23 20.42 9.248C20.565 9.51198 20.6698 9.7961 20.731 10.091C20.7562 10.1982 20.7729 10.3072 20.781 10.417C20.7912 10.4972 20.7952 10.5781 20.793 10.659L20.792 10.846L20.769 11.067C20.7626 11.1474 20.7489 11.2271 20.728 11.305C20.7075 11.4069 20.6794 11.5072 20.644 11.605C20.5558 11.8768 20.4223 12.1317 20.249 12.359C20.0308 12.6451 19.7608 12.8876 19.453 13.074C19.1838 13.2279 18.8923 13.3389 18.589 13.403C18.3782 13.1768 18.2596 12.8801 18.2562 12.571C18.2529 12.2619 18.3652 11.9626 18.571 11.732V11.442C18.413 11.442 18.286 11.117 18.286 10.716ZM15.28 10.022C15.3475 9.7463 15.4518 9.48092 15.59 9.233C15.598 9.219 15.61 9.207 15.618 9.193C15.8624 9.40777 16.1656 9.54438 16.4884 9.5852C16.8112 9.62602 17.1388 9.56917 17.429 9.422V9.99C17.587 9.99 17.715 10.315 17.715 10.716C17.715 11.117 17.587 11.442 17.429 11.442V11.732C17.6382 11.9673 17.7504 12.2731 17.7429 12.5879C17.7355 12.9026 17.609 13.2028 17.389 13.428C17.2363 13.3951 17.0865 13.35 16.941 13.293C16.7123 13.1987 16.4968 13.075 16.3 12.925C16.099 12.7628 15.9175 12.5779 15.759 12.374C15.6007 12.1572 15.4722 11.92 15.377 11.669C15.2887 11.4135 15.2316 11.1482 15.207 10.879C15.1941 10.5914 15.2186 10.3033 15.28 10.022ZM22.27 15.447C22.2958 15.4777 22.3124 15.5151 22.3179 15.5549C22.3234 15.5946 22.3176 15.6351 22.3011 15.6717C22.2846 15.7083 22.2581 15.7394 22.2246 15.7616C22.1912 15.7838 22.1521 15.796 22.112 15.797H21.425L20.508 16.264C20.4457 16.2954 20.3739 16.3027 20.3065 16.2844C20.2392 16.2661 20.1809 16.2236 20.143 16.165L19.848 15.715C19.2628 15.9612 18.6344 16.0881 17.9995 16.0881C17.3646 16.0881 16.7362 15.9612 16.151 15.715L15.856 16.165C15.8181 16.2236 15.7598 16.2661 15.6925 16.2844C15.6251 16.3027 15.5533 16.2954 15.491 16.264L14.575 15.798H13.888C13.8476 15.7974 13.8082 15.7853 13.7744 15.7632C13.7407 15.741 13.7139 15.7097 13.6972 15.6729C13.6805 15.6361 13.6747 15.5953 13.6803 15.5553C13.6859 15.5153 13.7028 15.4778 13.729 15.447L14.822 14.149C14.8481 14.1173 14.8802 14.091 14.9164 14.0718C14.9527 14.0525 14.9924 14.0405 15.0333 14.0366C15.0742 14.0327 15.1154 14.037 15.1547 14.049C15.1939 14.0611 15.2304 14.0808 15.262 14.107L15.277 14.12C16.009 14.8234 16.9848 15.2162 18 15.2162C19.0152 15.2162 19.991 14.8234 20.723 14.12C20.7833 14.0634 20.8637 14.033 20.9464 14.0357C21.0291 14.0383 21.1074 14.0737 21.164 14.134L21.178 14.149L22.27 15.447ZM12.577 14.055L12.863 11.441C12.5356 11.2307 12.2766 10.9295 12.1176 10.5743C11.9586 10.2191 11.9067 9.82528 11.968 9.441C11.9738 9.35379 12.0124 9.27202 12.076 9.2121C12.1397 9.15218 12.2236 9.11856 12.311 9.118H12.554C12.6358 9.11876 12.7147 9.14868 12.7765 9.20238C12.8383 9.25609 12.8789 9.33006 12.891 9.411C12.9111 9.66118 12.9988 9.9012 13.1446 10.1055C13.2904 10.3098 13.4889 10.4707 13.719 10.571L14.004 14.055H12.577ZM23.137 11.441L23.422 14.055H21.995L22.281 10.57C22.5109 10.4697 22.7093 10.309 22.8551 10.1049C23.0009 9.90081 23.0887 9.661 23.109 9.411C23.1211 9.33006 23.1617 9.25609 23.2235 9.20238C23.2853 9.14868 23.3642 9.11876 23.446 9.118H23.689C23.7762 9.11882 23.8599 9.15255 23.9233 9.21244C23.9868 9.27233 24.0252 9.35397 24.031 9.441C24.0924 9.82518 24.0406 10.2189 23.8818 10.5741C23.7231 10.9293 23.4642 11.2306 23.137 11.441Z",
  fill: "#FF4B55"
}));
const ForwardRef = forwardRef(BruneiIcon);
export default ForwardRef;