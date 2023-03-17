import * as React from "react";
import { forwardRef } from "react";
const EarIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 12 17",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 13.3959C0 14.1295 0.140625 14.7647 0.421875 15.3016C0.708333 15.8438 1.10938 16.2611 1.625 16.5535C2.14063 16.8512 2.7474 17 3.44531 17C4.23177 17 4.91667 16.8246 5.5 16.4737C6.08334 16.1282 6.5599 15.6179 6.92969 14.9428L7.63281 13.659C7.90365 13.1434 8.19792 12.6942 8.51563 12.3114C8.83854 11.9234 9.16406 11.5672 9.49219 11.243C9.82031 10.9187 10.1328 10.5971 10.4297 10.2781C10.7318 9.95388 11 9.60569 11.2344 9.23358C11.4688 8.86148 11.6536 8.43355 11.7891 7.94981C11.9297 7.46076 12 6.88665 12 6.22749C12 4.98358 11.7526 3.8965 11.2578 2.96623C10.7682 2.03064 10.0781 1.30238 9.1875 0.781426C8.30208 0.260475 7.26823 0 6.08594 0C4.8724 0 3.8099 0.263133 2.89844 0.7894C1.98698 1.31035 1.27604 2.04128 0.765625 2.98218C0.255208 3.91776 0 5.01016 0 6.25938V13.3959ZM1.17969 13.3161V6.25938C1.17969 5.24406 1.38281 4.35897 1.78906 3.60413C2.20052 2.84396 2.77344 2.25391 3.50781 1.83396C4.2474 1.41401 5.10677 1.20403 6.08594 1.20403C7.03386 1.20403 7.86198 1.41401 8.57031 1.83396C9.28386 2.25391 9.83594 2.84131 10.2266 3.59615C10.6224 4.351 10.8203 5.22811 10.8203 6.22749C10.8203 6.78033 10.7552 7.26673 10.625 7.68668C10.5 8.10131 10.3255 8.47874 10.1016 8.81895C9.87761 9.15916 9.6224 9.48343 9.33594 9.79174C9.04948 10.0947 8.7474 10.4084 8.42969 10.7326C8.11719 11.0516 7.80209 11.4051 7.48438 11.7932C7.16667 12.1759 6.86459 12.6171 6.57813 13.1168L5.89844 14.3049C5.6224 14.7992 5.28646 15.166 4.89063 15.4053C4.5 15.6445 4.03646 15.7641 3.5 15.7641C2.78125 15.7641 2.21354 15.5461 1.79688 15.1102C1.38542 14.6743 1.17969 14.0763 1.17969 13.3161ZM2.84375 10.318C3.00521 10.318 3.14323 10.2595 3.25781 10.1426C3.37761 10.0203 3.4375 9.8768 3.4375 9.71201V6.21154C3.4375 5.70122 3.54688 5.25735 3.76563 4.87992C3.98438 4.49719 4.29167 4.1995 4.6875 3.98687C5.08334 3.77423 5.54688 3.66792 6.07813 3.66792C6.83334 3.66792 7.4375 3.89916 7.89063 4.36163C8.34375 4.82411 8.57031 5.44074 8.57031 6.21154C8.57031 6.37633 8.62761 6.51986 8.74219 6.64212C8.86198 6.75907 9 6.81754 9.15625 6.81754C9.31771 6.81754 9.45573 6.75907 9.57031 6.64212C9.69011 6.51986 9.75 6.37633 9.75 6.21154C9.75 5.46201 9.59636 4.80816 9.28906 4.25C8.98177 3.68652 8.55208 3.24797 8 2.93433C7.45313 2.6207 6.8125 2.46388 6.07813 2.46388C5.31771 2.46388 4.64844 2.6207 4.07031 2.93433C3.4974 3.24797 3.05209 3.68652 2.73438 4.25C2.41667 4.81348 2.25781 5.46732 2.25781 6.21154V9.71201C2.25781 9.8768 2.31511 10.0203 2.42969 10.1426C2.54427 10.2595 2.68229 10.318 2.84375 10.318ZM2.78125 7.94981H5.42188C5.6875 7.94981 5.89844 8.02423 6.05469 8.17308C6.21094 8.32192 6.28906 8.51595 6.28906 8.75516C6.28906 8.87742 6.26042 9.01563 6.20313 9.16979C6.14584 9.31864 6.07031 9.45153 5.97656 9.56848L5.03906 10.7725C4.9349 10.9054 4.88281 11.0489 4.88281 11.2031C4.88281 11.3679 4.94011 11.5088 5.05469 11.6257C5.17448 11.7427 5.31511 11.8011 5.47656 11.8011C5.66406 11.8011 5.82552 11.7134 5.96094 11.538L6.97656 10.2223C7.13802 10.015 7.26563 9.77314 7.35938 9.49672C7.45834 9.21498 7.50781 8.95184 7.50781 8.70732C7.50781 8.12258 7.31511 7.64947 6.92969 7.28799C6.54427 6.92652 6.03646 6.74578 5.40625 6.74578H2.78125V7.94981Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(EarIcon);
export default ForwardRef;