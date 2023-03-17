import * as React from "react";
import { forwardRef } from "react";
const StoveFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 15 16",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 4.51172H15V2.09705C15 1.61819 14.8544 1.23357 14.5632 0.943199C14.2772 0.647733 13.8976 0.5 13.4243 0.5H1.56786C1.09984 0.5 0.720229 0.647733 0.429017 0.943199C0.143006 1.23357 0 1.61819 0 2.09705V4.51172ZM3.19813 3.45721C2.97452 3.45721 2.78211 3.38334 2.6209 3.23561C2.4649 3.08278 2.3869 2.89939 2.3869 2.68543C2.3869 2.46638 2.4649 2.28299 2.6209 2.13525C2.78211 1.98242 2.97452 1.90601 3.19813 1.90601C3.41134 1.90601 3.59594 1.98242 3.75195 2.13525C3.91316 2.28299 3.99376 2.46638 3.99376 2.68543C3.99376 2.89939 3.91316 3.08278 3.75195 3.23561C3.59594 3.38334 3.41134 3.45721 3.19813 3.45721ZM6.06084 3.45721C5.84243 3.45721 5.65263 3.38334 5.49142 3.23561C5.33021 3.08278 5.24961 2.89939 5.24961 2.68543C5.24961 2.46638 5.33021 2.28299 5.49142 2.13525C5.65263 1.98242 5.84243 1.90601 6.06084 1.90601C6.27925 1.90601 6.46646 1.98242 6.62246 2.13525C6.77847 2.28299 6.85647 2.46638 6.85647 2.68543C6.85647 2.89939 6.77847 3.08278 6.62246 3.23561C6.46646 3.38334 6.27925 3.45721 6.06084 3.45721ZM8.91576 3.45721C8.69735 3.45721 8.50754 3.38334 8.34633 3.23561C8.19033 3.08278 8.11232 2.89939 8.11232 2.68543C8.11232 2.46638 8.19033 2.28299 8.34633 2.13525C8.50754 1.98242 8.69735 1.90601 8.91576 1.90601C9.13416 1.90601 9.32137 1.98242 9.47738 2.13525C9.63859 2.28299 9.71919 2.46638 9.71919 2.68543C9.71919 2.89939 9.63859 3.08278 9.47738 3.23561C9.32137 3.38334 9.13416 3.45721 8.91576 3.45721ZM11.7785 3.45721C11.5653 3.45721 11.3781 3.38334 11.2168 3.23561C11.0608 3.08278 10.9828 2.89939 10.9828 2.68543C10.9828 2.46638 11.0608 2.28299 11.2168 2.13525C11.3781 1.98242 11.5653 1.90601 11.7785 1.90601C12.0021 1.90601 12.1919 1.98242 12.3479 2.13525C12.5091 2.28299 12.5897 2.46638 12.5897 2.68543C12.5897 2.89939 12.5091 3.08278 12.3479 3.23561C12.1919 3.38334 12.0021 3.45721 11.7785 3.45721ZM1.56786 14.1246H13.4243C13.8976 14.1246 14.2772 13.9794 14.5632 13.689C14.8544 13.3986 15 13.0115 15 12.5275V5.35991H0V12.5275C0 13.0115 0.143006 13.3986 0.429017 13.689C0.720229 13.9794 1.09984 14.1246 1.56786 14.1246ZM2.74571 12.2295C2.5221 12.2295 2.34009 12.1633 2.19969 12.0308C2.06448 11.8984 1.99688 11.7201 1.99688 11.4959V7.43836C1.99688 7.21421 2.06448 7.03591 2.19969 6.90346C2.34009 6.76592 2.5221 6.69715 2.74571 6.69715H12.2543C12.4831 6.69715 12.6651 6.76592 12.8003 6.90346C12.9407 7.03591 13.0109 7.21421 13.0109 7.43836V11.4959C13.0109 11.7201 12.9407 11.8984 12.8003 12.0308C12.6651 12.1633 12.4831 12.2295 12.2543 12.2295H2.74571ZM3.06552 11.3813H11.9423C12.0775 11.3813 12.1451 11.3125 12.1451 11.175V7.7593C12.1451 7.61666 12.0775 7.54534 11.9423 7.54534H3.06552C2.93032 7.54534 2.86271 7.61666 2.86271 7.7593V11.175C2.86271 11.3125 2.93032 11.3813 3.06552 11.3813ZM2.23089 15.5C2.4181 15.5 2.5689 15.444 2.68331 15.3319C2.79771 15.2198 2.85491 15.0721 2.85491 14.8887V13.3604H1.59906V14.8887C1.59906 15.0721 1.65627 15.2198 1.77067 15.3319C1.89028 15.444 2.04368 15.5 2.23089 15.5ZM12.7691 15.5C12.9563 15.5 13.1071 15.444 13.2215 15.3319C13.3359 15.2198 13.3931 15.0721 13.3931 14.8887V13.3604H12.1373V14.8887C12.1373 15.0721 12.1945 15.2198 12.3089 15.3319C12.4285 15.444 12.5819 15.5 12.7691 15.5Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(StoveFillIcon);
export default ForwardRef;