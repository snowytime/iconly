import * as React from "react";
import { forwardRef } from "react";
const CloudMoonRainIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 21 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M3.38681 13.7704H12.0296C12.8017 13.7704 13.4967 13.5952 14.1144 13.2449C14.7321 12.8893 15.222 12.4116 15.5841 11.8118C15.9516 11.212 16.1353 10.5379 16.1353 9.78953C16.1353 9.04644 15.9489 8.38031 15.5761 7.79115C15.2087 7.19668 14.7081 6.72694 14.0744 6.38193C13.4408 6.03692 12.7245 5.85646 11.9257 5.84053C11.4571 4.97006 10.8234 4.28535 10.0247 3.78642C9.2312 3.28218 8.33923 3.03006 7.34875 3.03006C6.68843 3.03006 6.06272 3.14948 5.47162 3.38833C4.88585 3.62188 4.36132 3.95096 3.89803 4.37558C3.43474 4.7949 3.05665 5.28852 2.76377 5.85646C2.47621 6.41908 2.29782 7.02683 2.22859 7.67968C1.56294 7.88669 1.0251 8.26089 0.615058 8.80228C0.205019 9.33837 0 9.96734 0 10.6892C0 11.289 0.141117 11.8224 0.423352 12.2895C0.705586 12.7513 1.09965 13.1149 1.60554 13.3803C2.11676 13.6403 2.71052 13.7704 3.38681 13.7704ZM3.35486 12.4965C2.90222 12.4965 2.52147 12.4195 2.21261 12.2656C1.90375 12.1064 1.66944 11.8941 1.50969 11.6287C1.35526 11.358 1.27804 11.0554 1.27804 10.721C1.27804 10.3017 1.40851 9.91957 1.66944 9.57457C1.93038 9.22956 2.35639 8.98009 2.94749 8.82617C3.13919 8.77309 3.27499 8.69613 3.35486 8.59528C3.44007 8.49443 3.49066 8.34581 3.50663 8.14942C3.55456 7.5868 3.68502 7.07194 3.89803 6.60486C4.11636 6.13777 4.3986 5.73173 4.74473 5.38672C5.0962 5.04171 5.49292 4.77632 5.93491 4.59055C6.38223 4.39947 6.85351 4.30393 7.34875 4.30393C7.86529 4.30393 8.34189 4.39682 8.77856 4.58259C9.21522 4.76305 9.60662 5.02844 9.95276 5.37876C10.2989 5.72376 10.5971 6.14573 10.8474 6.64467C10.9326 6.81451 11.0311 6.93394 11.1429 7.00294C11.2601 7.06664 11.4198 7.09848 11.6222 7.09848C12.3092 7.09848 12.8923 7.22321 13.3715 7.47268C13.8561 7.72215 14.2236 8.05388 14.4738 8.46789C14.7241 8.87659 14.8493 9.32775 14.8493 9.82138C14.8493 10.315 14.7268 10.7662 14.4818 11.1749C14.2369 11.5783 13.9014 11.8994 13.4754 12.1382C13.0547 12.3771 12.5807 12.4965 12.0535 12.4965H3.35486ZM15.4324 9.70991C16.0288 9.74707 16.5799 9.71788 17.0858 9.62234C17.5917 9.5268 18.0497 9.38349 18.4597 9.1924C18.8751 8.99602 19.2399 8.76513 19.5541 8.49974C19.8736 8.22904 20.1452 7.93711 20.3688 7.62395C20.5978 7.30549 20.7762 6.97906 20.904 6.64467C21.0371 6.3262 21.0318 6.04488 20.888 5.80073C20.7442 5.55126 20.5153 5.42653 20.2011 5.42653C19.9614 5.42653 19.7218 5.46103 19.4822 5.53003C19.2425 5.59903 18.9097 5.63353 18.4837 5.63353C17.8021 5.63353 17.2296 5.51411 16.7663 5.27526C16.3084 5.0364 15.9596 4.69671 15.7199 4.25616C15.4856 3.8103 15.3685 3.27953 15.3685 2.66382C15.3685 2.36128 15.3924 2.1012 15.4404 1.88358C15.4883 1.66065 15.5335 1.46691 15.5761 1.30237C15.6241 1.13252 15.648 0.97329 15.648 0.824672C15.648 0.495589 15.5229 0.259392 15.2726 0.116081C15.0277 -0.027229 14.7294 -0.0378445 14.378 0.0842347C13.9573 0.222237 13.5579 0.434549 13.1798 0.72117C12.8017 1.00248 12.4689 1.34484 12.1813 1.74823C11.8938 2.14631 11.6648 2.59217 11.4944 3.08579C11.3293 3.57411 11.2468 4.09162 11.2468 4.63832C11.2468 4.99394 11.2787 5.3416 11.3426 5.6813C11.4065 6.021 11.5024 6.34743 11.6302 6.66059L12.9562 6.6367C12.5994 6.04754 12.421 5.37345 12.421 4.61443C12.421 4.22697 12.4716 3.86604 12.5727 3.53165C12.6793 3.19195 12.823 2.88144 13.0041 2.60013C13.1905 2.31351 13.4008 2.06139 13.6351 1.84377C13.8748 1.62615 14.125 1.44568 14.386 1.30237L14.4738 1.36607C14.4099 1.55715 14.3514 1.78538 14.2981 2.05077C14.2449 2.31085 14.2182 2.59482 14.2182 2.90267C14.2182 3.66169 14.3886 4.33312 14.7294 4.91698C15.0756 5.49553 15.5495 5.94934 16.1513 6.27843C16.753 6.6022 17.44 6.76409 18.2121 6.76409C18.4943 6.76409 18.7606 6.74286 19.0109 6.7004C19.2665 6.65263 19.4875 6.59955 19.6739 6.54116L19.7298 6.5969C19.5967 6.85167 19.405 7.10379 19.1547 7.35326C18.9097 7.59741 18.6088 7.81769 18.2521 8.01408C17.8953 8.21046 17.4799 8.35908 17.006 8.45993C16.5373 8.56078 16.0128 8.58997 15.4324 8.54751V9.70991ZM3.25102 17.5044L4.28943 15.713C4.36398 15.5909 4.38262 15.4689 4.34535 15.3468C4.3134 15.2194 4.23884 15.1212 4.12169 15.0522C3.99921 14.9832 3.87673 14.9673 3.75425 15.0044C3.63177 15.0363 3.53326 15.1132 3.4587 15.2353L2.41231 17.0426C2.34308 17.1594 2.32444 17.2788 2.35639 17.4009C2.38834 17.523 2.46556 17.6212 2.58804 17.6955C2.71052 17.7592 2.833 17.7725 2.95547 17.7353C3.08328 17.7034 3.18179 17.6265 3.25102 17.5044ZM5.75119 19.7496L6.7896 17.9503C6.86416 17.8335 6.88279 17.7114 6.84552 17.584C6.81357 17.4566 6.73901 17.3584 6.62186 17.2894C6.49938 17.2204 6.3769 17.2019 6.25442 17.2337C6.13194 17.2709 6.03343 17.3505 5.95888 17.4726L4.91248 19.2878C4.84325 19.3993 4.82461 19.5161 4.85656 19.6381C4.88851 19.7655 4.96573 19.8637 5.08821 19.9327C5.21069 20.0017 5.33317 20.0176 5.45565 19.9805C5.58345 19.9433 5.68197 19.8664 5.75119 19.7496ZM9.60929 17.4964L10.6477 15.7051C10.7169 15.583 10.7356 15.4609 10.7036 15.3388C10.6717 15.2114 10.5944 15.1132 10.472 15.0442C10.3548 14.9752 10.2323 14.9593 10.1045 14.9965C9.98205 15.0283 9.8862 15.1053 9.81697 15.2274L8.77057 17.0347C8.70134 17.1514 8.6827 17.2709 8.71466 17.3929C8.74661 17.515 8.82382 17.6132 8.9463 17.6875C9.06346 17.7512 9.18594 17.7645 9.31374 17.7273C9.44154 17.6955 9.54006 17.6185 9.60929 17.4964ZM12.1015 19.7416L13.1479 17.9423C13.2171 17.8255 13.2357 17.7034 13.2038 17.5761C13.1718 17.4487 13.0946 17.3505 12.9721 17.2815C12.8497 17.2125 12.7272 17.1939 12.6047 17.2257C12.4822 17.2629 12.3837 17.3425 12.3092 17.4646L11.2628 19.2799C11.1989 19.3913 11.1829 19.5081 11.2148 19.6302C11.2468 19.7576 11.324 19.8558 11.4465 19.9248C11.5636 19.9938 11.6861 20.0097 11.8139 19.9725C11.9417 19.9354 12.0376 19.8584 12.1015 19.7416Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CloudMoonRainIcon);
export default ForwardRef;