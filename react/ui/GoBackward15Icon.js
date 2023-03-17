import * as React from "react";
import { forwardRef } from "react";
const GoBackward15Icon = ({
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
  d: "M0.570312 9.23822C0.570312 10.2985 0.779463 11.2979 1.19776 12.2364C1.61607 13.1749 2.19384 14.0018 2.9311 14.7171C3.66835 15.4274 4.51801 15.9854 5.48011 16.3912C6.44743 16.7971 7.47749 17 8.57031 17C9.66312 17 10.6906 16.7971 11.6527 16.3912C12.62 15.9854 13.4723 15.4274 14.2095 14.7171C14.9468 14.0018 15.5246 13.1749 15.9429 12.2364C16.3612 11.2979 16.5703 10.2985 16.5703 9.23822C16.5703 8.30478 16.4056 7.41699 16.0762 6.57486C15.7468 5.73274 15.2867 4.97178 14.6958 4.29199C14.1102 3.60713 13.4226 3.03641 12.6331 2.57983C11.8487 2.11818 10.9991 1.79858 10.084 1.62102V0.540462C10.084 0.266517 10.003 0.0965693 9.84089 0.0306195C9.6788 -0.0353302 9.49057 0.00525423 9.27619 0.152373L6.77423 1.84931C6.59122 1.97106 6.49971 2.11311 6.49971 2.27545C6.49971 2.43779 6.59122 2.58237 6.77423 2.70919L9.26834 4.41374C9.48272 4.56593 9.67096 4.60905 9.83305 4.5431C10.0004 4.47208 10.084 4.2996 10.084 4.02565V2.94509C10.8265 3.10743 11.5089 3.38137 12.1311 3.76693C12.7585 4.15248 13.3023 4.62427 13.7625 5.18231C14.2278 5.74035 14.5886 6.36433 14.8448 7.05427C15.101 7.73913 15.2291 8.46711 15.2291 9.23822C15.2291 10.1362 15.0566 10.9783 14.7115 11.7646C14.3716 12.5459 13.8958 13.2333 13.284 13.8268C12.6775 14.4153 11.9716 14.8744 11.1664 15.2041C10.3612 15.539 9.4958 15.7064 8.57031 15.7064C7.64481 15.7064 6.77684 15.539 5.96638 15.2041C5.16115 14.8744 4.45267 14.4153 3.8409 13.8268C3.23437 13.2333 2.75855 12.5459 2.41345 11.7646C2.07358 10.9783 1.90365 10.1362 1.90365 9.23822C1.90365 8.51785 2.01868 7.83298 2.24875 7.18363C2.47881 6.52921 2.80038 5.93312 3.21345 5.39538C3.62652 4.85763 4.11017 4.39599 4.66442 4.01043C4.82651 3.89375 4.92847 3.75171 4.9703 3.5843C5.01736 3.41689 4.99122 3.25455 4.89187 3.09728C4.79252 2.94509 4.64873 2.85378 4.4605 2.82334C4.27226 2.78783 4.09187 2.83348 3.91932 2.96031C3.24481 3.4321 2.65659 3.99521 2.15463 4.64964C1.65267 5.29899 1.26312 6.01429 0.985999 6.79554C0.708875 7.57172 0.570312 8.38595 0.570312 9.23822ZM6.28011 12.3581C6.43174 12.3581 6.552 12.3125 6.64089 12.2212C6.72978 12.1248 6.77423 11.9954 6.77423 11.8331V7.03144C6.77423 6.83359 6.72717 6.68647 6.63305 6.59008C6.53893 6.48862 6.40298 6.43789 6.2252 6.43789C6.1154 6.43789 6.01344 6.45818 5.91932 6.49877C5.8252 6.53428 5.70756 6.59769 5.56638 6.68901L4.49187 7.3967C4.40298 7.45758 4.33501 7.52606 4.28795 7.60216C4.24612 7.67318 4.2252 7.75181 4.2252 7.83806C4.2252 7.96488 4.26965 8.07395 4.35854 8.16527C4.44743 8.25658 4.55461 8.30224 4.68011 8.30224C4.75854 8.30224 4.8239 8.29209 4.87618 8.2718C4.92847 8.25151 4.9886 8.21346 5.05658 8.15766L5.80952 7.62499H5.79383V11.8331C5.79383 11.9904 5.83828 12.1172 5.92717 12.2136C6.01605 12.31 6.1337 12.3581 6.28011 12.3581ZM10.2644 12.4495C10.9128 12.4495 11.4331 12.2643 11.8252 11.894C12.2226 11.5186 12.4213 11.0239 12.4213 10.4101C12.4213 9.85206 12.2461 9.39295 11.8958 9.03276C11.5455 8.67257 11.0906 8.49248 10.5311 8.49248C10.2801 8.49248 10.0344 8.54828 9.79384 8.65989C9.55854 8.7715 9.38861 8.92369 9.28403 9.11647H9.32325L9.46442 7.3967H11.8095C11.9246 7.3967 12.0239 7.35611 12.1076 7.27495C12.1965 7.19378 12.2409 7.08724 12.2409 6.95534C12.2409 6.82852 12.1965 6.72706 12.1076 6.65096C12.0239 6.56979 11.9246 6.52921 11.8095 6.52921H9.30756C8.89449 6.52921 8.66965 6.73974 8.63305 7.1608L8.4605 9.35236C8.44481 9.54007 8.48403 9.68211 8.57815 9.7785C8.67227 9.86981 8.8056 9.91547 8.97815 9.91547C9.10364 9.91547 9.2056 9.90025 9.28403 9.86981C9.36246 9.83938 9.45658 9.78357 9.56638 9.7024C9.71802 9.57051 9.8592 9.47665 9.98991 9.42085C10.1206 9.35997 10.2644 9.32953 10.4213 9.32953C10.7246 9.32953 10.9703 9.431 11.1585 9.63392C11.3468 9.83177 11.4409 10.0956 11.4409 10.4253C11.4409 10.7601 11.3337 11.0366 11.1193 11.2548C10.9049 11.4729 10.6357 11.582 10.3115 11.582C10.0762 11.582 9.86442 11.5236 9.67619 11.407C9.48795 11.2852 9.34416 11.1254 9.24482 10.9275C9.1873 10.8312 9.12194 10.7576 9.04874 10.7069C8.97553 10.6511 8.88926 10.6232 8.78991 10.6232C8.65919 10.6232 8.552 10.6637 8.46834 10.7449C8.38991 10.8261 8.3507 10.9326 8.3507 11.0645C8.3507 11.1153 8.35593 11.166 8.36638 11.2167C8.37684 11.2674 8.39253 11.3182 8.41344 11.3689C8.51802 11.6428 8.7324 11.8914 9.05658 12.1146C9.38599 12.3379 9.78861 12.4495 10.2644 12.4495Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(GoBackward15Icon);
export default ForwardRef;