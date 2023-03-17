import * as React from "react";
import { forwardRef } from "react";
const PointDownIcon = ({
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
  d: "M5.62033 0.5C4.50051 0.5 3.51868 0.745089 2.67483 1.23527C1.83099 1.72006 1.17289 2.41762 0.700551 3.32795C0.233517 4.23289 0 5.31559 0 6.57605V8.33745C0 9.26933 0.204327 9.99652 0.612982 10.519C1.02694 11.0361 1.60543 11.3001 2.34844 11.3108C2.43866 11.6071 2.59788 11.8414 2.82609 12.0138C3.0596 12.1808 3.34354 12.2643 3.67789 12.2643C3.9061 12.2643 4.13697 12.2239 4.37048 12.1431C4.47663 12.4716 4.65442 12.7302 4.90386 12.9187C5.1533 13.1019 5.4505 13.1934 5.79547 13.1934C5.98653 13.1934 6.17493 13.1665 6.36069 13.1126V15.8032C6.36069 16.3096 6.50929 16.7189 6.80649 17.0314C7.109 17.3438 7.49643 17.5 7.96877 17.5C8.44111 17.5 8.82854 17.3438 9.13105 17.0314C9.43356 16.7189 9.58481 16.3096 9.58481 15.8032V9.05656C9.58481 9.00808 9.60604 8.98384 9.6485 8.98384C9.68034 8.98384 9.70157 9.00269 9.71219 9.0404L10.2456 10.3332C10.3782 10.651 10.556 10.8934 10.7789 11.0604C11.0071 11.222 11.2619 11.3028 11.5432 11.3028C11.9306 11.3028 12.2703 11.1843 12.5622 10.9472C12.8541 10.7048 13 10.3601 13 9.91302C13 9.79452 12.9867 9.65985 12.9602 9.50903C12.939 9.35282 12.9045 9.20469 12.8567 9.06464L11.4556 5.06511C10.9249 3.55149 10.1713 2.41223 9.19473 1.64734C8.21821 0.882446 7.02674 0.5 5.62033 0.5ZM5.58053 1.61502C6.69504 1.61502 7.66891 1.9032 8.50214 2.47956C9.33537 3.05593 9.99612 4.03359 10.4844 5.41255L11.8934 9.40399C11.9359 9.52788 11.9571 9.64908 11.9571 9.76759C11.9571 9.90764 11.9094 10.0315 11.8138 10.1393C11.7183 10.2416 11.5909 10.2928 11.4317 10.2928C11.1876 10.2928 11.0045 10.1446 10.8824 9.84838L9.79976 7.39211C9.70953 7.19281 9.60339 7.05545 9.48132 6.98004C9.36456 6.89924 9.23719 6.85884 9.0992 6.85884C8.92937 6.85884 8.79139 6.92079 8.68524 7.04468C8.5791 7.16318 8.52603 7.31401 8.52603 7.49715V15.876C8.52603 16.0483 8.47295 16.1884 8.36681 16.2961C8.26597 16.4038 8.13329 16.4577 7.96877 16.4577C7.80425 16.4577 7.67157 16.4038 7.57073 16.2961C7.46989 16.1884 7.41947 16.0483 7.41947 15.876V9.89686C7.41947 9.75143 7.3664 9.63292 7.26026 9.54135C7.15942 9.44439 7.04001 9.39591 6.90202 9.39591C6.76934 9.39591 6.65258 9.44439 6.55175 9.54135C6.45622 9.63292 6.40845 9.75143 6.40845 9.89686V12.0461C6.25985 12.1161 6.10063 12.1511 5.9308 12.1511C5.73444 12.1511 5.57787 12.0919 5.46111 11.9734C5.34966 11.8495 5.29394 11.6798 5.29394 11.4644V9.58983C5.29394 9.43901 5.24087 9.31781 5.13472 9.22624C5.03388 9.13467 4.91713 9.08888 4.78445 9.08888C4.65177 9.08888 4.53501 9.13467 4.43417 9.22624C4.33333 9.31781 4.28292 9.43901 4.28292 9.58983V11.1169C4.13431 11.1869 3.97775 11.222 3.81323 11.222C3.61155 11.222 3.45499 11.16 3.34354 11.0361C3.23209 10.9122 3.17636 10.7452 3.17636 10.5352V9.27472C3.17636 9.12928 3.12329 9.01077 3.01715 8.9192C2.91631 8.82763 2.7969 8.78185 2.65891 8.78185C2.53154 8.78185 2.41743 8.82763 2.3166 8.9192C2.21576 9.01077 2.16534 9.12928 2.16534 9.27472V10.2039C1.80976 10.2039 1.53378 10.0288 1.33742 9.67871C1.14636 9.32319 1.05083 8.82224 1.05083 8.17586V6.70532C1.05083 5.62262 1.23127 4.70152 1.59216 3.94202C1.95836 3.18251 2.48112 2.60615 3.16044 2.21293C3.83976 1.81432 4.64646 1.61502 5.58053 1.61502Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(PointDownIcon);
export default ForwardRef;