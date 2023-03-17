import * as React from "react";
import { forwardRef } from "react";
const FireIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 13 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M6.13325 17.5C7.16326 17.5 8.09704 17.3323 8.93457 16.997C9.77731 16.6617 10.503 16.1849 11.1116 15.5666C11.7203 14.9483 12.1859 14.2069 12.5084 13.3423C12.8361 12.4778 13 11.519 13 10.4658C13 9.29211 12.8491 8.23108 12.5474 7.28271C12.2457 6.33433 11.8321 5.49337 11.3067 4.75982C10.7865 4.02104 10.1883 3.38442 9.512 2.84998C8.83573 2.31029 8.12045 1.86755 7.36614 1.52173C6.61704 1.17067 5.86014 0.913931 5.09543 0.751503C4.33593 0.583834 3.61285 0.5 2.92617 0.5C2.55682 0.5 2.26291 0.565495 2.04442 0.696486C1.83113 0.822238 1.72449 1.01086 1.72449 1.26237C1.72449 1.36192 1.7453 1.46147 1.78692 1.56103C1.82853 1.66058 1.89096 1.75751 1.97419 1.85183C2.28111 2.22384 2.57503 2.61943 2.85594 3.0386C3.14206 3.45777 3.37614 3.90052 3.55822 4.36685C3.74549 4.83318 3.84173 5.3257 3.84693 5.84443C3.84693 6.02258 3.82873 6.1981 3.79231 6.37101C3.7611 6.53868 3.68307 6.73255 3.55822 6.95261L3.94837 6.87402C3.82873 6.48628 3.65446 6.14571 3.42556 5.85229C3.20187 5.55363 2.94698 5.32046 2.66087 5.1528C2.37995 4.98513 2.10164 4.90129 1.82593 4.90129C1.66467 4.90129 1.53461 4.95631 1.43578 5.06634C1.33694 5.17637 1.28752 5.31785 1.28752 5.49075C1.28752 5.59031 1.29532 5.74488 1.31093 5.95446C1.33173 6.15881 1.34214 6.34743 1.34214 6.52034C1.34214 6.8714 1.29792 7.20149 1.20948 7.51063C1.12105 7.81977 1.0092 8.13153 0.87395 8.44591C0.738696 8.76029 0.603442 9.09562 0.468188 9.45192C0.338135 9.80297 0.226291 10.1986 0.132653 10.6387C0.0442177 11.0788 0 11.5818 0 12.1477C0 13.2218 0.254902 14.1597 0.764706 14.9614C1.27451 15.7631 1.9872 16.3866 2.90276 16.8319C3.82353 17.2773 4.90036 17.5 6.13325 17.5ZM6.21128 16.3997C5.19167 16.3997 4.29691 16.2215 3.52701 15.8652C2.7623 15.5089 2.16667 15.0138 1.7401 14.3798C1.31353 13.7406 1.10024 12.9965 1.10024 12.1477C1.10024 11.6342 1.14706 11.1784 1.2407 10.7802C1.33433 10.382 1.44878 10.0178 1.58403 9.6877C1.72449 9.3576 1.86235 9.03799 1.9976 8.72885C2.13806 8.41971 2.2525 8.10009 2.34094 7.76999C2.43458 7.43466 2.48139 7.06264 2.48139 6.65395C2.48139 6.502 2.46839 6.35791 2.44238 6.22168C2.41637 6.08545 2.38516 5.95708 2.34874 5.83657L2.16927 6.15095C2.38255 6.2767 2.57243 6.44175 2.7389 6.64609C2.91057 6.8452 3.05882 7.0836 3.18367 7.3613C3.30852 7.63376 3.41256 7.95076 3.49579 8.3123C3.5114 8.39613 3.54001 8.45901 3.58163 8.50092C3.62324 8.5376 3.67526 8.55594 3.73769 8.55594C3.89375 8.55594 4.03681 8.47211 4.16686 8.30444C4.30212 8.13153 4.41656 7.91146 4.5102 7.64424C4.60904 7.37702 4.68447 7.0967 4.73649 6.80328C4.79371 6.50462 4.82232 6.22954 4.82232 5.97804C4.82232 5.37548 4.73909 4.79126 4.57262 4.22538C4.41136 3.65426 4.17987 3.11982 3.87815 2.62205C3.57643 2.12429 3.21489 1.67892 2.79352 1.28595L2.58283 1.53745C3.70648 1.56365 4.74429 1.72607 5.69627 2.02473C6.65346 2.32339 7.5092 2.73994 8.2635 3.27439C9.02301 3.80359 9.67067 4.43235 10.2065 5.16066C10.7423 5.88897 11.1507 6.69849 11.4316 7.58923C11.7125 8.47473 11.8529 9.42048 11.8529 10.4265C11.8529 11.6159 11.6162 12.6586 11.1429 13.5546C10.6747 14.4505 10.0166 15.1474 9.16866 15.6452C8.32073 16.1482 7.33493 16.3997 6.21128 16.3997ZM6.31272 15.2915C6.93177 15.2915 7.44417 15.1553 7.84994 14.8828C8.2609 14.6103 8.56782 14.2514 8.77071 13.8061C8.97359 13.3607 9.07503 12.8786 9.07503 12.3599C9.07503 11.8464 8.97619 11.3303 8.77851 10.8116C8.58603 10.2929 8.29732 9.81345 7.91236 9.37332C7.52741 8.93319 7.04882 8.5769 6.47659 8.30444C6.44017 8.28872 6.41156 8.29134 6.39075 8.3123C6.36994 8.32802 6.36214 8.35421 6.36734 8.39089C6.43497 9.03537 6.42457 9.63531 6.33613 10.1907C6.24769 10.7409 6.09944 11.1574 5.89135 11.4404C5.79251 11.2151 5.68067 11.0055 5.55582 10.8116C5.43617 10.6125 5.28531 10.4317 5.10324 10.2693C5.07723 10.2483 5.05122 10.2431 5.02521 10.2536C5.0044 10.2588 4.99139 10.2798 4.98619 10.3165C4.95498 10.5418 4.88215 10.7487 4.7677 10.9374C4.65326 11.1207 4.52841 11.3146 4.39315 11.519C4.2579 11.7181 4.13825 11.9434 4.03421 12.1949C3.93537 12.4411 3.88595 12.7372 3.88595 13.083C3.88595 13.7432 4.10704 14.2776 4.54921 14.6863C4.99659 15.0898 5.58443 15.2915 6.31272 15.2915Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(FireIcon);
export default ForwardRef;