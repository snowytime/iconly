import * as React from "react";
import { forwardRef } from "react";
const WifiExclamationIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 18 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M8.99967 14.5C9.21861 14.5 9.41929 14.4448 9.60174 14.3344C9.78418 14.2239 9.92753 14.0767 10.0318 13.8927C10.136 13.7139 10.1882 13.5141 10.1882 13.2932C10.1882 13.0724 10.136 12.8726 10.0318 12.6938C9.92753 12.5098 9.78418 12.3652 9.60174 12.26C9.41929 12.1496 9.21861 12.0944 8.99967 12.0944C8.78074 12.0944 8.58005 12.1469 8.39761 12.2521C8.22038 12.3573 8.07703 12.5019 7.96757 12.6859C7.86331 12.87 7.81119 13.0724 7.81119 13.2932C7.81119 13.5141 7.86331 13.7139 7.96757 13.8927C8.07703 14.0767 8.22038 14.2239 8.39761 14.3344C8.58005 14.4448 8.78074 14.5 8.99967 14.5ZM9.00749 10.6983C9.21079 10.6983 9.37759 10.6352 9.50791 10.509C9.63823 10.3828 9.70599 10.2093 9.7112 9.98845C9.71642 9.41005 9.72163 8.82901 9.72684 8.24535C9.73205 7.66169 9.73727 7.08066 9.74248 6.50225C9.74769 5.91859 9.7503 5.33493 9.7503 4.75127C9.75551 4.16761 9.76072 3.58657 9.76594 3.00817C9.77115 2.42451 9.77636 1.84084 9.78157 1.25718C9.78157 1.03108 9.70338 0.849671 9.547 0.712958C9.39062 0.570986 9.20818 0.5 8.99967 0.5C8.79117 0.5 8.60872 0.570986 8.45234 0.712958C8.29596 0.849671 8.21777 1.03108 8.21777 1.25718C8.22299 1.84084 8.2282 2.42451 8.23341 3.00817C8.23862 3.58657 8.24384 4.16761 8.24905 4.75127C8.25426 5.33493 8.25947 5.91859 8.26469 6.50225C8.27511 7.08066 8.28293 7.66169 8.28815 8.24535C8.29336 8.82901 8.29857 9.41005 8.30378 9.98845C8.309 10.2093 8.37415 10.3828 8.49926 10.509C8.62957 10.6352 8.79899 10.6983 9.00749 10.6983ZM7.06056 1.54901C6.10664 1.70676 5.19443 1.96441 4.32391 2.32197C3.45339 2.67953 2.65586 3.11596 1.93129 3.63127C1.20673 4.14657 0.589032 4.72235 0.07819 5.35859C0.0260633 5.42169 0 5.49531 0 5.57944C0.00521267 5.65831 0.039095 5.73455 0.101647 5.80817L1.18067 6.91239C1.25886 6.99127 1.34748 7.0307 1.44652 7.0307C1.54556 7.02544 1.63157 6.98338 1.70454 6.90451C2.44474 6.11052 3.27095 5.46638 4.18317 4.97211C5.09538 4.47258 6.06494 4.1308 7.09184 3.94676L7.06056 1.54901ZM10.931 1.5569L10.9075 3.95465C11.9344 4.12817 12.9014 4.46732 13.8084 4.97211C14.7206 5.47164 15.5546 6.1184 16.3104 6.91239C16.3834 6.98601 16.4668 7.02282 16.5607 7.02282C16.6545 7.01756 16.7405 6.97549 16.8187 6.89662L17.8977 5.80817C17.9655 5.73455 17.9993 5.65831 17.9993 5.57944C18.0046 5.49531 17.9785 5.42169 17.9212 5.35859C17.4051 4.72761 16.7874 4.15446 16.0681 3.63915C15.3487 3.11859 14.5538 2.67953 13.6833 2.32197C12.8127 1.95915 11.8953 1.70413 10.931 1.5569ZM10.8997 6.2262L10.8762 8.74225C11.3089 8.9 11.7103 9.10507 12.0804 9.35746C12.4557 9.60986 12.7867 9.89117 13.0734 10.2014C13.1464 10.2803 13.2271 10.3197 13.3158 10.3197C13.4096 10.3145 13.4982 10.2724 13.5816 10.1935L14.7857 8.98676C14.8483 8.9184 14.8822 8.84479 14.8874 8.76591C14.8926 8.68178 14.8665 8.60817 14.8092 8.54507C14.3765 8.00873 13.8214 7.53549 13.1437 7.12535C12.4661 6.70995 11.7181 6.41023 10.8997 6.2262ZM7.11529 6.2262C6.29691 6.41549 5.54889 6.71258 4.87124 7.11746C4.19881 7.52235 3.64105 7.99821 3.19797 8.54507C3.14063 8.60817 3.11196 8.68178 3.11196 8.76591C3.11718 8.84479 3.15367 8.9184 3.22143 8.98676L4.43338 10.2093C4.51678 10.2882 4.608 10.325 4.70704 10.3197C4.80608 10.3092 4.8947 10.2592 4.97289 10.1699C5.25437 9.85962 5.58016 9.58094 5.95026 9.3338C6.32036 9.08667 6.71652 8.88422 7.13875 8.72648L7.11529 6.2262Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(WifiExclamationIcon);
export default ForwardRef;