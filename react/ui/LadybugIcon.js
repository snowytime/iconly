import * as React from "react";
import { forwardRef } from "react";
const LadybugIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 18 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M8.99603 19.5C10.0441 19.5 10.9943 19.3275 11.8465 18.9825C12.704 18.6375 13.4398 18.1416 14.0538 17.4947C14.6678 16.8533 15.1416 16.0851 15.4751 15.1903C15.8086 14.2901 15.9753 13.2929 15.9753 12.1986C15.9753 11.39 15.8641 10.5896 15.6418 9.79716C15.4195 9.00476 15.1019 8.26357 14.689 7.57359C14.2814 6.88361 13.7971 6.28797 13.236 5.78665C13.2307 5.03738 13.0507 4.39591 12.6961 3.86226C12.3467 3.32321 11.8544 2.91084 11.2192 2.62514C10.5893 2.33945 9.84826 2.1966 8.99603 2.1966C8.1491 2.1966 7.40803 2.34215 6.77283 2.63323C6.14292 2.91893 5.65064 3.3313 5.29599 3.87034C4.94663 4.404 4.7693 5.04546 4.76401 5.79474C4.20291 6.29605 3.71592 6.889 3.30304 7.57359C2.89546 8.25818 2.5805 8.99668 2.35818 9.78907C2.13586 10.5761 2.0247 11.3793 2.0247 12.1986C2.0247 13.2929 2.1888 14.2901 2.51698 15.1903C2.85046 16.0851 3.32422 16.8533 3.93825 17.4947C4.55757 18.1416 5.29334 18.6375 6.14557 18.9825C7.00309 19.3275 7.95324 19.5 8.99603 19.5ZM8.99603 7.71105C9.70005 7.71105 10.3776 7.64906 11.0287 7.52508C11.685 7.39571 12.2408 7.2286 12.6961 7.02376C13.0243 7.37415 13.3445 7.80538 13.6568 8.31748C13.9691 8.82957 14.2259 9.41444 14.427 10.0721C14.6281 10.7243 14.7287 11.4332 14.7287 12.1986C14.7287 13.4061 14.4905 14.4626 14.0141 15.3682C13.5377 16.2738 12.8681 16.9773 12.0053 17.4786C11.1478 17.9853 10.1447 18.2386 8.99603 18.2386C7.85267 18.2386 6.84958 17.9853 5.98677 17.4786C5.12925 16.9773 4.45964 16.2738 3.97795 15.3682C3.50154 14.4626 3.26334 13.4061 3.26334 12.1986C3.26334 11.4332 3.36392 10.727 3.56506 10.0802C3.76621 9.42791 4.02294 8.84574 4.33525 8.33365C4.64755 7.81616 4.97045 7.37954 5.30393 7.02376C5.75386 7.2286 6.30701 7.39571 6.96339 7.52508C7.61976 7.64906 8.29731 7.71105 8.99603 7.71105ZM8.44817 18.5944H9.48831V9.23116C9.48831 9.08562 9.43538 8.96164 9.32951 8.85922C9.22894 8.7568 9.10719 8.70559 8.96427 8.70559C8.82135 8.70559 8.6996 8.7568 8.59903 8.85922C8.49846 8.96164 8.44817 9.08562 8.44817 9.23116V18.5944ZM6.46317 10.541C6.73842 10.541 6.97398 10.4413 7.16983 10.2419C7.36568 10.037 7.46361 9.79446 7.46361 9.51416C7.46361 9.23925 7.36568 9.00207 7.16983 8.80262C6.97398 8.59778 6.73842 8.49536 6.46317 8.49536C6.18791 8.49536 5.95236 8.59778 5.75651 8.80262C5.56595 9.00207 5.47067 9.23925 5.47067 9.51416C5.47067 9.79446 5.56595 10.037 5.75651 10.2419C5.95236 10.4413 6.18791 10.541 6.46317 10.541ZM5.51831 13.743C5.83591 13.743 6.10851 13.6271 6.33613 13.3953C6.56374 13.1635 6.67755 12.8832 6.67755 12.5544C6.67755 12.2256 6.56374 11.9453 6.33613 11.7135C6.10851 11.4817 5.83591 11.3658 5.51831 11.3658C5.19541 11.3658 4.91751 11.4817 4.68461 11.7135C4.45699 11.9453 4.34319 12.2256 4.34319 12.5544C4.34319 12.8832 4.45699 13.1635 4.68461 13.3953C4.91751 13.6271 5.19541 13.743 5.51831 13.743ZM6.46317 16.5083C6.71725 16.5083 6.93428 16.4167 7.11425 16.2334C7.29952 16.0501 7.39215 15.8291 7.39215 15.5703C7.39215 15.3062 7.29952 15.0825 7.11425 14.8992C6.93428 14.716 6.71725 14.6243 6.46317 14.6243C6.20909 14.6243 5.99206 14.716 5.81209 14.8992C5.63211 15.0825 5.54213 15.3062 5.54213 15.5703C5.54213 15.8291 5.63211 16.0501 5.81209 16.2334C5.99206 16.4167 6.20909 16.5083 6.46317 16.5083ZM11.5368 10.541C11.8121 10.541 12.045 10.4413 12.2356 10.2419C12.4314 10.037 12.5293 9.79446 12.5293 9.51416C12.5293 9.23925 12.4314 9.00207 12.2356 8.80262C12.045 8.59778 11.8121 8.49536 11.5368 8.49536C11.2563 8.49536 11.0181 8.59778 10.8222 8.80262C10.6317 9.00207 10.5364 9.23925 10.5364 9.51416C10.5364 9.79446 10.6343 10.037 10.8302 10.2419C11.026 10.4413 11.2616 10.541 11.5368 10.541ZM12.4817 13.743C12.8046 13.743 13.0798 13.6271 13.3075 13.3953C13.5404 13.1635 13.6568 12.8832 13.6568 12.5544C13.6568 12.2256 13.5404 11.9453 13.3075 11.7135C13.0798 11.4817 12.8046 11.3658 12.4817 11.3658C12.1641 11.3658 11.8888 11.4817 11.6559 11.7135C11.4283 11.9453 11.3145 12.2256 11.3145 12.5544C11.3145 12.8832 11.4283 13.1635 11.6559 13.3953C11.8888 13.6271 12.1641 13.743 12.4817 13.743ZM11.5368 16.5083C11.7909 16.5083 12.0079 16.4167 12.1879 16.2334C12.3679 16.0501 12.4579 15.8291 12.4579 15.5703C12.4579 15.3062 12.3679 15.0825 12.1879 14.8992C12.0079 14.716 11.7909 14.6243 11.5368 14.6243C11.2775 14.6243 11.0578 14.716 10.8778 14.8992C10.6978 15.0825 10.6079 15.3062 10.6079 15.5703C10.6079 15.8291 10.6978 16.0501 10.8778 16.2334C11.0578 16.4167 11.2775 16.5083 11.5368 16.5083ZM5.50243 1.67103L6.04235 1.87317C6.21173 1.93247 6.33083 2.01063 6.39965 2.10766C6.46846 2.20469 6.48699 2.32597 6.45523 2.47152L6.35995 2.8758L7.52713 2.86772L7.58271 2.45535C7.62506 2.06184 7.55624 1.72494 7.37627 1.44463C7.20159 1.16433 6.9184 0.951405 6.52669 0.805862L5.89943 0.54712C5.70357 0.477044 5.53683 0.48513 5.39921 0.571377C5.26158 0.652234 5.1663 0.768129 5.11337 0.919062C5.06573 1.07 5.07102 1.21823 5.12925 1.36378C5.18747 1.50932 5.31187 1.61174 5.50243 1.67103ZM12.4976 1.67103C12.6881 1.61174 12.8125 1.50932 12.8708 1.36378C12.929 1.21823 12.9316 1.07 12.8787 0.919062C12.8311 0.768129 12.7384 0.652234 12.6008 0.571377C12.4632 0.48513 12.2964 0.477044 12.1006 0.54712L11.4733 0.805862C11.0816 0.951405 10.7958 1.16433 10.6158 1.44463C10.4358 1.72494 10.3697 2.06184 10.4173 2.45535L10.4729 2.86772L11.6401 2.8758L11.5448 2.47152C11.513 2.32597 11.5315 2.20469 11.6004 2.10766C11.6692 2.01063 11.7883 1.93247 11.9577 1.87317L12.4976 1.67103ZM4.04941 7.29059L2.57256 6.01305C2.42435 5.88907 2.2629 5.82439 2.08822 5.819C1.91884 5.80822 1.77327 5.87829 1.65152 6.02922C1.52978 6.17477 1.48743 6.33648 1.52448 6.51437C1.56154 6.68686 1.65152 6.8351 1.79444 6.95908L3.2951 8.2447L4.04941 7.29059ZM2.60432 11.107L0.651081 11.1151C0.455227 11.1151 0.296427 11.1717 0.17468 11.2849C0.0582267 11.3981 0 11.5464 0 11.7296C0 11.9183 0.0582267 12.0692 0.17468 12.1824C0.296427 12.2956 0.457874 12.3522 0.659021 12.3522L2.60432 12.3442V11.107ZM3.24746 15.8372L1.76268 17.1066C1.61976 17.2306 1.52978 17.3789 1.49272 17.5513C1.46096 17.7292 1.50596 17.8909 1.6277 18.0365C1.74945 18.1874 1.89502 18.2575 2.0644 18.2467C2.23908 18.2413 2.40053 18.1766 2.54874 18.0527L4.00971 16.7913L3.24746 15.8372ZM13.9427 7.29059L14.7049 8.2447L16.2056 6.95908C16.3485 6.8351 16.4358 6.68686 16.4676 6.51437C16.5046 6.33648 16.4649 6.17477 16.3485 6.02922C16.2267 5.87829 16.0785 5.80822 15.9038 5.819C15.7345 5.82439 15.5757 5.88907 15.4274 6.01305L13.9427 7.29059ZM15.3957 11.107V12.3442L17.341 12.3522C17.5421 12.3522 17.7009 12.2956 17.8174 12.1824C17.9391 12.0692 18 11.9183 18 11.7296C18 11.5464 17.9391 11.3981 17.8174 11.2849C17.7009 11.1717 17.5448 11.1151 17.3489 11.1151L15.3957 11.107ZM14.7446 15.8372L13.9824 16.7832L15.4513 18.0527C15.5995 18.1766 15.7583 18.2413 15.9277 18.2467C16.1023 18.2575 16.2506 18.1874 16.3723 18.0365C16.494 17.8909 16.5364 17.7292 16.4993 17.5513C16.4676 17.3789 16.3776 17.2306 16.2294 17.1066L14.7446 15.8372Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(LadybugIcon);
export default ForwardRef;