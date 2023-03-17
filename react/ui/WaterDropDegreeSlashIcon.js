import * as React from "react";
import { forwardRef } from "react";
const WaterDropDegreeSlashIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 14 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M3.55945 5.4736L4.48 6.3711C4.74594 5.94728 5.01699 5.52845 5.29315 5.11461C5.56931 4.70076 5.84548 4.2919 6.12164 3.88803C6.14721 3.84814 6.17279 3.8282 6.19836 3.8282C6.22904 3.8282 6.25717 3.84814 6.28274 3.88803C6.81461 4.67583 7.34904 5.48607 7.88603 6.31874C8.42813 7.15142 8.91142 8.05888 9.33589 9.04113C9.45352 9.3054 9.57881 9.60456 9.71178 9.93863C9.84475 10.2677 9.9547 10.5843 10.0416 10.8885C10.1337 11.1926 10.1797 11.4394 10.1797 11.6289C10.1797 11.6838 10.1772 11.7311 10.1721 11.771C10.1721 11.8109 10.1669 11.8533 10.1567 11.8982L11.4532 13.1621C11.4736 13.0474 11.4889 12.9303 11.4992 12.8106C11.5094 12.6909 11.5145 12.5663 11.5145 12.4366C11.5145 11.938 11.4583 11.4469 11.3458 10.9633C11.2332 10.4796 11.0952 10.0234 10.9315 9.59459C10.7679 9.16579 10.6119 8.78685 10.4636 8.45776C10.0544 7.55529 9.55324 6.62788 8.96 5.67554C8.37187 4.7232 7.79653 3.82571 7.23397 2.98306C7.09589 2.78362 6.94502 2.62905 6.78137 2.51936C6.61772 2.40966 6.42338 2.35482 6.19836 2.35482C5.96822 2.35482 5.77132 2.40966 5.60767 2.51936C5.44402 2.62905 5.29571 2.78362 5.16274 2.98306C4.8968 3.37696 4.62831 3.78582 4.35726 4.20963C4.09132 4.62846 3.82539 5.04979 3.55945 5.4736ZM6.19836 17.5C7.02685 17.5 7.77607 17.3679 8.44603 17.1036C9.1211 16.8393 9.69132 16.4704 10.1567 15.9967L9.24384 15.1142C8.89096 15.4831 8.4537 15.7673 7.93205 15.9668C7.41552 16.1712 6.83763 16.2734 6.19836 16.2734C5.38521 16.2734 4.67434 16.1139 4.06575 15.7948C3.45717 15.4757 2.98155 15.0294 2.6389 14.456C2.30137 13.8776 2.1326 13.2045 2.1326 12.4366C2.1326 11.8383 2.22721 11.2549 2.41644 10.6865C2.61078 10.1131 2.8179 9.57464 3.03781 9.07105L2.0789 8.13616C1.78228 8.79432 1.50868 9.48988 1.25808 10.2228C1.00749 10.9508 0.882192 11.6887 0.882192 12.4366C0.882192 13.4488 1.1021 14.3363 1.54192 15.0992C1.98685 15.8571 2.60822 16.4454 3.40603 16.8643C4.20384 17.2881 5.13461 17.5 6.19836 17.5ZM11.6526 5.06973C12.0924 5.06973 12.4888 4.97001 12.8416 4.77057C13.1996 4.56614 13.4809 4.2919 13.6855 3.94787C13.8952 3.59884 14 3.21242 14 2.78861C14 2.3598 13.8952 1.97338 13.6855 1.62934C13.4809 1.28032 13.1996 1.00609 12.8416 0.806643C12.4888 0.602214 12.0924 0.5 11.6526 0.5C11.2179 0.5 10.8216 0.602214 10.4636 0.806643C10.1107 1.00609 9.82941 1.28032 9.61973 1.62934C9.41516 1.97338 9.31288 2.3598 9.31288 2.78861C9.31288 3.21242 9.41516 3.59884 9.61973 3.94787C9.82941 4.2919 10.1107 4.56614 10.4636 4.77057C10.8216 4.97001 11.2179 5.06973 11.6526 5.06973ZM11.6526 4.01518C11.2997 4.01518 11.0005 3.89801 10.7551 3.66366C10.5147 3.42433 10.3945 3.13264 10.3945 2.78861C10.3945 2.43958 10.5147 2.1479 10.7551 1.91355C11.0005 1.67422 11.2997 1.55455 11.6526 1.55455C12.0106 1.55455 12.3098 1.67422 12.5501 1.91355C12.7956 2.1479 12.9184 2.43958 12.9184 2.78861C12.9184 3.13264 12.7956 3.42433 12.5501 3.66366C12.3098 3.89801 12.0106 4.01518 11.6526 4.01518ZM12.3814 16.9391C12.499 17.0488 12.6396 17.1036 12.8033 17.1036C12.9669 17.1036 13.105 17.0488 13.2175 16.9391C13.3352 16.8244 13.394 16.6873 13.394 16.5277C13.394 16.3682 13.3352 16.2335 13.2175 16.1238L1.0126 4.22459C0.900091 4.1149 0.759452 4.06005 0.590685 4.06005C0.427032 4.06005 0.286393 4.1149 0.168767 4.22459C0.0562557 4.33429 0 4.4714 0 4.63594C0 4.7955 0.0562557 4.93012 0.168767 5.03982L12.3814 16.9391Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(WaterDropDegreeSlashIcon);
export default ForwardRef;