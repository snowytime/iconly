import * as React from "react";
import { forwardRef } from "react";
const GoBackward75Icon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 17 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.570312 9.23822C0.570312 10.2985 0.779463 11.2979 1.19776 12.2364C1.61606 13.1749 2.19384 14.0018 2.9311 14.7171C3.66835 15.4274 4.51803 15.9854 5.48012 16.3912C6.44744 16.7971 7.4775 17 8.57031 17C9.66312 17 10.6906 16.7971 11.6527 16.3912C12.62 15.9854 13.4723 15.4274 14.2095 14.7171C14.9468 14.0018 15.5246 13.1749 15.9429 12.2364C16.3612 11.2979 16.5703 10.2985 16.5703 9.23822C16.5703 8.30478 16.4056 7.41699 16.0762 6.57486C15.7468 5.73274 15.2867 4.97178 14.6958 4.29199C14.1102 3.60713 13.4226 3.03641 12.6331 2.57983C11.8487 2.11818 10.9991 1.79858 10.084 1.62102V0.540462C10.084 0.266517 10.003 0.0965693 9.8409 0.0306195C9.67881 -0.0353302 9.49057 0.00525422 9.2762 0.152373L6.77423 1.84931C6.59123 1.97106 6.49972 2.11311 6.49972 2.27545C6.49972 2.43779 6.59123 2.58237 6.77423 2.70919L9.26835 4.41374C9.48273 4.56593 9.67097 4.60905 9.83306 4.54311C10.0004 4.47208 10.084 4.2996 10.084 4.02565V2.94509C10.8265 3.10743 11.5089 3.38137 12.1311 3.76693C12.7585 4.15248 13.3023 4.62427 13.7625 5.18231C14.2278 5.74035 14.5886 6.36433 14.8448 7.05427C15.101 7.73913 15.2291 8.46712 15.2291 9.23822C15.2291 10.1362 15.0566 10.9783 14.7115 11.7646C14.3716 12.5459 13.8958 13.2333 13.284 13.8268C12.6775 14.4153 11.9716 14.8744 11.1664 15.2041C10.3612 15.539 9.4958 15.7064 8.57031 15.7064C7.64482 15.7064 6.77685 15.539 5.96639 15.2041C5.16116 14.8744 4.45267 14.4153 3.8409 13.8268C3.23436 13.2333 2.75855 12.5459 2.41345 11.7646C2.07358 10.9783 1.90365 10.1362 1.90365 9.23822C1.90365 8.51785 2.01868 7.83298 2.24874 7.18363C2.47881 6.52921 2.80038 5.93312 3.21345 5.39538C3.62652 4.85763 4.11018 4.39599 4.66443 4.01043C4.82652 3.89375 4.92848 3.75171 4.97031 3.5843C5.01737 3.41689 4.99123 3.25455 4.89188 3.09728C4.79253 2.94509 4.64874 2.85378 4.46051 2.82334C4.27227 2.78783 4.09188 2.83348 3.91933 2.96031C3.24482 3.43211 2.65659 3.99521 2.15463 4.64964C1.65267 5.29899 1.26312 6.01429 0.985999 6.79554C0.708875 7.57172 0.570312 8.38595 0.570312 9.23822ZM5.2762 12.4266C5.38077 12.4266 5.47227 12.3987 5.5507 12.3429C5.62914 12.2871 5.70234 12.1958 5.77031 12.069L7.96639 7.68586C8.02391 7.57933 8.06312 7.49055 8.08404 7.41953C8.10495 7.34343 8.11541 7.2648 8.11541 7.18363C8.11541 6.99593 8.05005 6.8412 7.91933 6.71945C7.79384 6.59769 7.63175 6.53682 7.43306 6.53682H4.5311C4.41606 6.53682 4.32195 6.5774 4.24874 6.65857C4.17554 6.73974 4.13894 6.8412 4.13894 6.96295C4.13894 7.08978 4.17554 7.19378 4.24874 7.27495C4.32195 7.35104 4.41606 7.38909 4.5311 7.38909H7.01737L4.85267 11.5972C4.82129 11.653 4.79776 11.7063 4.78208 11.757C4.76639 11.8077 4.75855 11.8661 4.75855 11.932C4.75855 12.0741 4.80561 12.1933 4.89972 12.2897C4.99907 12.381 5.12456 12.4266 5.2762 12.4266ZM10.735 12.4495C11.3834 12.4495 11.9036 12.2643 12.2958 11.894C12.6932 11.5186 12.8919 11.0239 12.8919 10.4101C12.8919 9.85206 12.7141 9.39295 12.3585 9.03276C12.0082 8.67257 11.5533 8.49248 10.9938 8.49248C10.7481 8.49248 10.505 8.54828 10.2644 8.65989C10.0239 8.7715 9.85397 8.92369 9.75463 9.11647H9.79384L9.93502 7.3967H12.2801C12.3952 7.3967 12.4945 7.35612 12.5782 7.27495C12.667 7.19378 12.7115 7.08724 12.7115 6.95534C12.7115 6.82852 12.667 6.72706 12.5782 6.65096C12.4945 6.56979 12.3952 6.52921 12.2801 6.52921H9.77031C9.35724 6.52921 9.13502 6.73974 9.10365 7.1608L8.9311 9.35236C8.91541 9.54007 8.95463 9.68211 9.04874 9.7785C9.14286 9.86982 9.27358 9.91547 9.4409 9.91547C9.57162 9.91547 9.6762 9.90025 9.75463 9.86982C9.83306 9.83938 9.92718 9.78357 10.037 9.7024C10.1886 9.57051 10.3298 9.47665 10.4605 9.42085C10.5912 9.35997 10.735 9.32954 10.8919 9.32954C11.1952 9.32954 11.4409 9.431 11.6291 9.63392C11.8174 9.83177 11.9115 10.0956 11.9115 10.4253C11.9115 10.7601 11.8017 11.0366 11.5821 11.2548C11.3677 11.4729 11.0984 11.582 10.7742 11.582C10.5442 11.582 10.335 11.5236 10.1468 11.407C9.95855 11.2852 9.81214 11.1254 9.70757 10.9275C9.65005 10.8312 9.58469 10.7576 9.51149 10.7069C9.43829 10.6511 9.35463 10.6232 9.26051 10.6232C9.12979 10.6232 9.0226 10.6637 8.93894 10.7449C8.86051 10.8261 8.82129 10.9326 8.82129 11.0645C8.82129 11.1153 8.82652 11.166 8.83698 11.2167C8.84744 11.2674 8.86312 11.3182 8.88404 11.3689C8.98861 11.6428 9.20299 11.8914 9.52718 12.1146C9.85659 12.3379 10.2592 12.4495 10.735 12.4495Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(GoBackward75Icon);
export default ForwardRef;