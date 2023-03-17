import * as React from "react";
import { forwardRef } from "react";
const CloudDrizzleIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M3.70565 11.88H13.4901C14.1367 11.88 14.7332 11.7676 15.2799 11.5428C15.8318 11.318 16.3101 11.0044 16.7148 10.6018C17.1248 10.1993 17.4402 9.73404 17.661 9.20604C17.887 8.67804 18 8.11344 18 7.51225C18 6.88492 17.8791 6.30987 17.6373 5.7871C17.4008 5.2591 17.067 4.80167 16.636 4.41482C16.2102 4.02274 15.7109 3.71953 15.138 3.5052C14.565 3.29086 13.9448 3.18369 13.2773 3.18369C12.9514 2.54068 12.5335 1.98131 12.0237 1.50559C11.5191 1.02464 10.9435 0.653467 10.297 0.39208C9.65046 0.130693 8.94612 0 8.18397 0C7.44284 0 6.74376 0.135921 6.08673 0.407763C5.43495 0.674378 4.85151 1.04555 4.3364 1.52127C3.82129 1.99699 3.40342 2.55113 3.08279 3.18369C2.76741 3.81625 2.57819 4.49585 2.51511 5.22251C2.03679 5.35843 1.60841 5.58322 1.22996 5.89688C0.851511 6.20532 0.551905 6.58172 0.331143 7.02607C0.110381 7.47043 0 7.96968 0 8.52382C0 9.14069 0.144547 9.70529 0.43364 10.2176C0.727989 10.7247 1.15112 11.1298 1.70302 11.4331C2.25493 11.731 2.92247 11.88 3.70565 11.88ZM3.68988 10.6254C3.14849 10.6254 2.69908 10.5339 2.34166 10.3509C1.98423 10.1679 1.71353 9.92224 1.52957 9.6138C1.35085 9.30014 1.2615 8.94988 1.2615 8.56303C1.2615 8.09253 1.40867 7.66386 1.70302 7.277C1.99737 6.88492 2.48095 6.60001 3.15375 6.42227C3.37451 6.36477 3.52957 6.27851 3.61892 6.1635C3.70828 6.04849 3.76347 5.8812 3.78449 5.66164C3.82654 5.01862 3.97109 4.4305 4.21813 3.89728C4.47043 3.35882 4.79632 2.89355 5.1958 2.50147C5.59527 2.10416 6.04993 1.79834 6.55979 1.584C7.0749 1.36444 7.61629 1.25466 8.18397 1.25466C9.07227 1.25466 9.85808 1.4899 10.5414 1.9604C11.2247 2.42567 11.7792 3.0922 12.205 3.96001C12.2943 4.15343 12.4047 4.28936 12.5361 4.36777C12.6675 4.44096 12.8515 4.47755 13.088 4.47755C13.866 4.47755 14.5256 4.6187 15.067 4.901C15.6137 5.17807 16.0289 5.54924 16.3127 6.01451C16.5966 6.47978 16.7385 6.98948 16.7385 7.54362C16.7385 8.11344 16.5992 8.63099 16.3206 9.09626C16.042 9.56152 15.6636 9.93269 15.1853 10.2098C14.707 10.4868 14.1682 10.6254 13.569 10.6254H3.68988ZM3.91064 15.5499L4.93561 13.7777C5.0092 13.6575 5.0276 13.5372 4.9908 13.417C4.95926 13.2915 4.88568 13.1948 4.77004 13.1268C4.64915 13.0589 4.52825 13.0432 4.40736 13.0798C4.28647 13.1112 4.18922 13.187 4.11564 13.3072L3.08279 15.0951C3.01445 15.2049 2.99606 15.3199 3.0276 15.4401C3.05913 15.5656 3.13798 15.6623 3.26413 15.7302C3.37976 15.793 3.50066 15.8061 3.62681 15.7695C3.75296 15.7381 3.84757 15.6649 3.91064 15.5499ZM6.37845 17.7534L7.40342 15.989C7.477 15.8688 7.4954 15.7459 7.45861 15.6205C7.42707 15.5002 7.35348 15.4061 7.23784 15.3382C7.11695 15.2702 6.99606 15.2519 6.87516 15.2833C6.75427 15.3199 6.65703 15.3983 6.58344 15.5185L5.55059 17.2986C5.48226 17.4136 5.46386 17.5312 5.4954 17.6514C5.52694 17.7717 5.60315 17.8658 5.72405 17.9337C5.84494 18.0017 5.96583 18.0174 6.08673 17.9808C6.21288 17.9494 6.31012 17.8736 6.37845 17.7534ZM10.1866 15.5421L11.2116 13.7698C11.2852 13.6496 11.3035 13.5294 11.2668 13.4091C11.2352 13.2837 11.159 13.187 11.0381 13.119C10.9225 13.051 10.8016 13.0354 10.6754 13.0719C10.5545 13.1033 10.4599 13.1791 10.3916 13.2994L9.35874 15.0872C9.29041 15.197 9.27201 15.312 9.30355 15.4323C9.33509 15.5577 9.4113 15.6544 9.53219 15.7224C9.64783 15.7851 9.76873 15.7982 9.89488 15.7616C10.021 15.7302 10.1183 15.6571 10.1866 15.5421ZM12.6544 17.7455L13.6794 15.9812C13.7477 15.8609 13.7661 15.7381 13.7346 15.6126C13.703 15.4924 13.6268 15.3983 13.5059 15.3303C13.385 15.2624 13.2641 15.2441 13.1432 15.2754C13.0223 15.312 12.9277 15.3904 12.8594 15.5107L11.8187 17.2907C11.7556 17.4057 11.7398 17.5234 11.7714 17.6436C11.8029 17.7638 11.8791 17.8579 12 17.9259C12.1156 17.9939 12.2365 18.0095 12.3627 17.9729C12.4888 17.9416 12.5861 17.8658 12.6544 17.7455Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CloudDrizzleIcon);
export default ForwardRef;