import * as React from "react";
import { forwardRef } from "react";
const CloudSunRainFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 23 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M3.29139 16.9896H11.8935C12.6462 16.9896 13.3246 16.8119 13.9288 16.4564C14.533 16.0954 15.0127 15.6114 15.3678 15.0043C15.7229 14.3972 15.9005 13.7136 15.9005 12.9534C15.9005 12.1986 15.7176 11.5232 15.3519 10.927C14.9915 10.3309 14.4959 9.8578 13.8652 9.50777C13.2398 9.15774 12.5322 8.97999 11.7425 8.97453C11.4298 8.36197 11.0429 7.83967 10.5818 7.4076C10.1259 6.97553 9.61447 6.64738 9.04735 6.42314C8.48023 6.19344 7.87602 6.07858 7.2347 6.07858C6.58808 6.07858 5.97591 6.19891 5.3982 6.43955C4.82048 6.6802 4.30107 7.01655 3.83996 7.44862C3.38414 7.88068 3.01313 8.38659 2.72693 8.96632C2.44602 9.54606 2.27641 10.1723 2.21811 10.845C1.53969 11.0528 0.999078 11.4329 0.596266 11.9853C0.198756 12.5322 0 13.1667 0 13.8886C0 14.5012 0.137804 15.0399 0.413411 15.5047C0.689019 15.9696 1.07328 16.3333 1.56619 16.5959C2.06441 16.8584 2.63947 16.9896 3.29139 16.9896ZM16.8147 12.5268C17.3977 12.1166 17.8562 11.6079 18.1901 11.0009C18.5293 10.3938 18.6989 9.72927 18.6989 9.00734C18.6989 8.25806 18.524 7.57714 18.1742 6.96459C17.8244 6.34657 17.35 5.85435 16.7511 5.48791C16.1575 5.12147 15.4976 4.93826 14.7715 4.93826C14.0507 4.93826 13.3935 5.12147 12.7999 5.48791C12.2116 5.85435 11.7531 6.3329 11.4245 6.92358C11.5888 7.10406 11.7425 7.29275 11.8856 7.48964C12.0287 7.68653 12.1612 7.90256 12.2831 8.13774C13.1576 8.21431 13.9208 8.44401 14.5728 8.82686C15.2247 9.20423 15.7414 9.71013 16.1231 10.3446C16.51 10.9735 16.7405 11.7009 16.8147 12.5268ZM10.1604 5.21718C10.2929 5.35391 10.4519 5.42228 10.6374 5.42228C10.8229 5.41681 10.9766 5.34845 11.0985 5.21718C11.2204 5.08592 11.2814 4.92732 11.2814 4.74136C11.2867 4.55541 11.2257 4.3968 11.0985 4.26554L9.87419 3.00216C9.74698 2.8709 9.59326 2.80527 9.41306 2.80527C9.23285 2.80527 9.07915 2.8709 8.95195 3.00216C8.82474 3.13342 8.75849 3.29476 8.75319 3.48618C8.75319 3.67214 8.81944 3.83074 8.95195 3.962L10.1604 5.21718ZM14.7715 3.63385C14.9517 3.63385 15.1054 3.56822 15.2326 3.43696C15.3651 3.30023 15.4314 3.13889 15.4314 2.95294V1.18092C15.4314 0.994963 15.3651 0.836356 15.2326 0.705095C15.1054 0.568365 14.9517 0.5 14.7715 0.5C14.5913 0.5 14.435 0.568365 14.3025 0.705095C14.1753 0.836356 14.1117 0.994963 14.1117 1.18092V2.95294C14.1117 3.13889 14.1753 3.30023 14.3025 3.43696C14.435 3.56822 14.5913 3.63385 14.7715 3.63385ZM18.4445 5.21718C18.5664 5.34845 18.7201 5.41681 18.9056 5.42228C19.0964 5.42228 19.2554 5.35391 19.3827 5.21718L20.599 3.962C20.7262 3.83074 20.7898 3.67214 20.7898 3.48618C20.7898 3.29476 20.7262 3.13342 20.599 3.00216C20.4718 2.8709 20.3181 2.80527 20.1379 2.80527C19.9577 2.80527 19.804 2.8709 19.6768 3.00216L18.4445 4.26554C18.3173 4.3968 18.2537 4.55541 18.2537 4.74136C18.259 4.92732 18.3226 5.08592 18.4445 5.21718ZM20.6229 9.68826H22.3481C22.5283 9.68826 22.682 9.62263 22.8092 9.49136C22.9364 9.3601 23 9.19876 23 9.00734C23 8.82139 22.9364 8.66278 22.8092 8.53152C22.682 8.39479 22.5283 8.32642 22.3481 8.32642H20.6229C20.448 8.32642 20.2943 8.39479 20.1618 8.53152C20.0293 8.66278 19.963 8.82139 19.963 9.00734C19.963 9.19876 20.0293 9.3601 20.1618 9.49136C20.2943 9.62263 20.448 9.68826 20.6229 9.68826ZM19.6768 15.0289C19.804 15.1602 19.9577 15.2258 20.1379 15.2258C20.3181 15.2204 20.4718 15.152 20.599 15.0207C20.7262 14.8895 20.7898 14.7309 20.7898 14.5449C20.7898 14.3535 20.7262 14.1949 20.599 14.0691L19.3668 12.8139C19.2395 12.6826 19.0858 12.617 18.9056 12.617C18.7254 12.617 18.5717 12.6826 18.4445 12.8139C18.3173 12.9397 18.2537 13.0983 18.2537 13.2897C18.2537 13.4811 18.3173 13.6425 18.4445 13.7737L19.6768 15.0289ZM3.21189 20.9357L4.24542 19.0898C4.31962 18.964 4.33817 18.8355 4.30107 18.7042C4.26927 18.5784 4.19507 18.4773 4.07846 18.4007C3.95656 18.3296 3.83466 18.3104 3.71275 18.3433C3.59085 18.3815 3.4928 18.4636 3.41859 18.5894L2.37712 20.4598C2.30821 20.5747 2.28966 20.695 2.32146 20.8208C2.35326 20.9521 2.43012 21.0533 2.55202 21.1244C2.67392 21.1955 2.79583 21.2119 2.91773 21.1736C3.04493 21.1353 3.14299 21.056 3.21189 20.9357ZM5.70031 23.2491L6.73384 21.3951C6.80804 21.2693 6.82659 21.1408 6.78949 21.0095C6.75769 20.8837 6.68348 20.7853 6.56688 20.7142C6.44498 20.6431 6.32307 20.6239 6.20117 20.6567C6.07927 20.695 5.98122 20.7771 5.90701 20.9028L4.86553 22.7651C4.79663 22.8854 4.77808 23.0085 4.80988 23.1343C4.84168 23.2601 4.91854 23.3613 5.04044 23.4378C5.16234 23.5035 5.28425 23.5171 5.40615 23.4788C5.53335 23.446 5.63141 23.3695 5.70031 23.2491ZM9.54026 20.9275L10.5738 19.0816C10.6427 18.9558 10.6613 18.8273 10.6295 18.696C10.5977 18.5702 10.5208 18.4691 10.3989 18.3925C10.2823 18.3214 10.1604 18.3022 10.0332 18.3351C9.91129 18.3733 9.81587 18.4554 9.74697 18.5812L8.70549 20.4516C8.63659 20.5665 8.61804 20.6868 8.64984 20.8126C8.68164 20.9439 8.75849 21.045 8.88039 21.1161C8.997 21.1872 9.1189 21.2037 9.24611 21.1654C9.37331 21.1271 9.47136 21.0478 9.54026 20.9275ZM12.0207 23.2409L13.0622 21.3869C13.1311 21.2611 13.1497 21.1326 13.1179 21.0013C13.0861 20.8755 13.0092 20.7771 12.8873 20.706C12.7654 20.6349 12.6435 20.6157 12.5216 20.6485C12.3997 20.6868 12.3017 20.7689 12.2275 20.8946L11.186 22.7569C11.1224 22.8772 11.1065 23.0003 11.1383 23.1261C11.1701 23.2519 11.2469 23.3531 11.3688 23.4296C11.4854 23.4952 11.6073 23.5089 11.7345 23.4706C11.8617 23.4378 11.9571 23.3613 12.0207 23.2409Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CloudSunRainFillIcon);
export default ForwardRef;