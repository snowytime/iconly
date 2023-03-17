import * as React from "react";
import { forwardRef } from "react";
const BatteryChargeIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 23 10",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M4.14147 9.99261H7.63801C7.58621 9.8646 7.55772 9.74397 7.55254 9.63073C7.54736 9.51257 7.56031 9.38702 7.59139 9.25408C7.62248 9.12115 7.66909 8.97098 7.73126 8.80358H3.93167C3.53279 8.80358 3.13914 8.76911 2.75062 8.70018C2.36728 8.62633 2.0565 8.47863 1.8182 8.25707C1.58509 8.03058 1.43229 7.73763 1.35977 7.37821C1.28725 7.01387 1.25099 6.63968 1.25099 6.25564V3.75202C1.25099 3.36306 1.28725 2.98641 1.35977 2.62207C1.43229 2.2528 1.58509 1.95739 1.8182 1.73583C2.05132 1.50935 2.3621 1.36164 2.75062 1.29271C3.14432 1.22378 3.54574 1.18932 3.95498 1.18932H9.20758L10.2099 0.00028405H4.12593C3.47322 0.00028405 2.87237 0.0519813 2.32326 0.155376C1.77934 0.25877 1.30798 0.497562 0.909102 0.871751C0.515404 1.25086 0.264187 1.69891 0.155402 2.21588C0.0517972 2.73285 0 3.29906 0 3.9145V6.05624C0 6.68646 0.0517972 7.26251 0.155402 7.78441C0.259007 8.30138 0.510224 8.74696 0.909102 9.12115C1.30798 9.50026 1.77934 9.74151 2.32326 9.84491C2.87237 9.94338 3.4784 9.99261 4.14147 9.99261ZM10.4896 9.99261H16.3566C17.0196 9.99261 17.6257 9.94338 18.1748 9.84491C18.7239 9.74151 19.1978 9.50026 19.5967 9.12115C19.9904 8.74696 20.239 8.30138 20.3426 7.78441C20.4514 7.26251 20.5058 6.68646 20.5058 6.05624V3.93666C20.5058 3.30644 20.4514 2.73285 20.3426 2.21588C20.239 1.69398 19.9904 1.24594 19.5967 0.871751C19.1978 0.492638 18.7239 0.253847 18.1748 0.155376C17.6257 0.0519813 17.0196 0.00028405 16.3566 0.00028405H13.062C13.1087 0.118449 13.1346 0.236614 13.1397 0.354779C13.1449 0.46802 13.132 0.591109 13.1009 0.724045C13.075 0.85698 13.031 1.01207 12.9688 1.18932H16.5741C16.973 1.18932 17.3641 1.22625 17.7474 1.3001C18.1359 1.36903 18.4467 1.51427 18.6798 1.73583C18.9181 1.96232 19.0735 2.25773 19.146 2.62207C19.2186 2.98149 19.2548 3.35076 19.2548 3.72987V6.25564C19.2548 6.63968 19.2186 7.01387 19.146 7.37821C19.0735 7.73763 18.9181 8.03058 18.6798 8.25707C18.4467 8.47863 18.1359 8.62633 17.7474 8.70018C17.3641 8.76911 16.973 8.80358 16.5741 8.80358H11.4925L10.4896 9.99261ZM21.5625 6.90555C21.7697 6.89078 21.9847 6.80462 22.2074 6.64707C22.4302 6.48459 22.6167 6.26303 22.7669 5.98239C22.9223 5.70175 23 5.37187 23 4.99276C23 4.61857 22.9223 4.29115 22.7669 4.01051C22.6167 3.72987 22.4302 3.50831 22.2074 3.34583C21.9847 3.18335 21.7697 3.09719 21.5625 3.08735V6.90555ZM3.51986 7.94688H8.07314L8.48496 6.8834H7.3816C6.99308 6.8834 6.65899 6.75538 6.37926 6.49936C6.1047 6.24334 5.96744 5.92823 5.96744 5.55404C5.96744 5.22909 6.08399 4.92629 6.3171 4.64565L8.49273 2.04602H3.54317C3.26862 2.04602 3.04589 2.06817 2.87494 2.11248C2.70399 2.15187 2.56414 2.22326 2.45535 2.32666C2.35175 2.43005 2.27664 2.56299 2.23002 2.72546C2.1834 2.88302 2.16009 3.09227 2.16009 3.35322V6.65445C2.16009 6.91048 2.1834 7.11727 2.23002 7.27482C2.27664 7.43237 2.35175 7.56285 2.45535 7.66624C2.56414 7.76963 2.7014 7.84349 2.86717 7.8878C3.03812 7.92719 3.25567 7.94688 3.51986 7.94688ZM12.2073 7.94688H16.9859C17.2553 7.94688 17.4729 7.92719 17.6386 7.8878C17.8044 7.84349 17.9417 7.76963 18.0504 7.66624C18.2525 7.47422 18.3535 7.13696 18.3535 6.65445V3.33845C18.3535 3.08242 18.3302 2.87563 18.2835 2.71808C18.2369 2.56053 18.1592 2.43005 18.0504 2.32666C17.9417 2.22326 17.8044 2.15187 17.6386 2.11248C17.4729 2.06817 17.2553 2.04602 16.9859 2.04602H12.6269L12.2151 3.1095H13.3107C13.7044 3.1095 14.0385 3.23751 14.313 3.49354C14.5928 3.74956 14.7326 4.06467 14.7326 4.43886C14.7326 4.76381 14.6161 5.06661 14.383 5.34725L12.2073 7.94688ZM7.02418 5.55404C7.02418 5.64759 7.05784 5.7239 7.12519 5.78298C7.19771 5.84207 7.28318 5.87161 7.3816 5.87161H10.0157L8.60928 9.46087C8.5523 9.61843 8.55748 9.74644 8.62482 9.84491C8.69734 9.94338 8.79835 9.99508 8.92785 10C9.05736 10 9.1739 9.93846 9.27751 9.81537L13.536 4.72689C13.6241 4.61857 13.6681 4.52256 13.6681 4.43886C13.6681 4.34531 13.6318 4.269 13.5593 4.20991C13.492 4.15083 13.4091 4.12129 13.3107 4.12129H10.6761L12.083 0.532026C12.1452 0.374473 12.14 0.246461 12.0675 0.14799C11.9949 0.0495194 11.8939 0.00028405 11.7644 0.00028405C11.6401 -0.00463949 11.5236 0.0544431 11.4148 0.177532L7.15627 5.25863C7.0682 5.37187 7.02418 5.47034 7.02418 5.55404Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(BatteryChargeIcon);
export default ForwardRef;