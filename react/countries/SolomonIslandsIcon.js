import * as React from "react";
import { forwardRef } from "react";
const SolomonIslandsIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 36 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M36 24H0V0H36",
  fill: "#41479B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 0H34.3L0 22.867V24",
  fill: "#FFE15A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.767 3.182L3.922 3.817L4.239 4.836C4.24623 4.85711 4.24654 4.87997 4.2399 4.90126C4.23326 4.92256 4.22001 4.94119 4.20207 4.95445C4.18413 4.96771 4.16243 4.97491 4.14013 4.97501C4.11782 4.97511 4.09606 4.9681 4.078 4.955L3.223 4.334L2.369 4.954C2.35101 4.96691 2.3294 4.9738 2.30725 4.97369C2.28511 4.97358 2.26357 4.96647 2.24571 4.95338C2.22785 4.94029 2.21459 4.92189 2.20781 4.90081C2.20104 4.87973 2.20111 4.85704 2.208 4.836L2.525 3.817L1.68 3.182C1.66247 3.16863 1.6495 3.15016 1.64286 3.12914C1.63622 3.10811 1.63625 3.08554 1.64292 3.06453C1.6496 3.04352 1.6626 3.02508 1.68016 3.01174C1.69772 2.99839 1.71897 2.9908 1.741 2.99L2.791 2.981L3.124 1.968C3.13049 1.94667 3.14366 1.92798 3.16158 1.91471C3.17949 1.90143 3.2012 1.89426 3.2235 1.89426C3.2458 1.89426 3.26751 1.90143 3.28542 1.91471C3.30334 1.92798 3.31651 1.94667 3.323 1.968L3.655 2.981L4.705 2.99C4.72712 2.99061 4.74851 2.99806 4.76621 3.01133C4.78392 3.02459 4.79708 3.04302 4.80388 3.06408C4.81068 3.08514 4.81079 3.10778 4.80418 3.1289C4.79758 3.15002 4.78459 3.16857 4.767 3.182ZM10.525 3.817L10.208 4.836C10.2008 4.85711 10.2005 4.87997 10.2071 4.90126C10.2137 4.92256 10.227 4.94119 10.2449 4.95445C10.2629 4.96771 10.2846 4.97491 10.3069 4.97501C10.3292 4.97511 10.3509 4.9681 10.369 4.955L11.224 4.334L12.078 4.954C12.096 4.96691 12.1176 4.9738 12.1397 4.97369C12.1619 4.97358 12.1834 4.96647 12.2013 4.95338C12.2192 4.94029 12.2324 4.92189 12.2392 4.90081C12.246 4.87973 12.2459 4.85704 12.239 4.836L11.922 3.817L12.767 3.182C12.7845 3.16863 12.7975 3.15016 12.8041 3.12914C12.8108 3.10811 12.8108 3.08554 12.8041 3.06453C12.7974 3.04352 12.7844 3.02508 12.7668 3.01174C12.7493 2.99839 12.728 2.9908 12.706 2.99L11.656 2.981L11.323 1.968C11.3165 1.94667 11.3033 1.92798 11.2854 1.91471C11.2675 1.90143 11.2458 1.89426 11.2235 1.89426C11.2012 1.89426 11.1795 1.90143 11.1616 1.91471C11.1437 1.92798 11.1305 1.94667 11.124 1.968L10.792 2.981L9.742 2.99C9.71988 2.99061 9.69849 2.99806 9.68079 3.01133C9.66308 3.02459 9.64992 3.04302 9.64312 3.06408C9.63632 3.08514 9.63621 3.10778 9.64282 3.1289C9.64942 3.15002 9.66241 3.16857 9.68 3.182L10.525 3.817ZM8.705 6.617L7.655 6.609L7.323 5.595C7.31651 5.57367 7.30334 5.55498 7.28542 5.54171C7.26751 5.52843 7.2458 5.52126 7.2235 5.52126C7.2012 5.52126 7.17949 5.52843 7.16158 5.54171C7.14366 5.55498 7.13049 5.57367 7.124 5.595L6.792 6.609L5.742 6.617C5.71988 6.61761 5.6985 6.62506 5.68079 6.63833C5.66308 6.65159 5.64992 6.67002 5.64312 6.69108C5.63632 6.71214 5.63621 6.73478 5.64282 6.7559C5.64942 6.77702 5.66241 6.79557 5.68 6.809L6.525 7.444L6.208 8.464C6.20111 8.48504 6.20104 8.50773 6.20781 8.52881C6.21459 8.54989 6.22785 8.56829 6.24571 8.58138C6.26357 8.59447 6.28511 8.60158 6.30725 8.60169C6.3294 8.6018 6.35101 8.59491 6.369 8.582L7.224 7.961L8.078 8.582C8.09607 8.59469 8.11769 8.60136 8.13977 8.60106C8.16186 8.60076 8.18329 8.5935 8.20101 8.58032C8.21873 8.56714 8.23184 8.54871 8.23848 8.52765C8.24513 8.50658 8.24496 8.48396 8.238 8.463L7.922 7.444L8.767 6.809C8.78453 6.79563 8.7975 6.77716 8.80414 6.75614C8.81078 6.73511 8.81075 6.71254 8.80408 6.69153C8.7974 6.67052 8.7844 6.65208 8.76684 6.63874C8.74928 6.62539 8.72804 6.6178 8.706 6.617H8.705ZM4.705 10.244L3.655 10.236L3.323 9.222C3.31679 9.20027 3.30367 9.18115 3.28563 9.16754C3.26759 9.15393 3.2456 9.14657 3.223 9.14657C3.2004 9.14657 3.17841 9.15393 3.16037 9.16754C3.14233 9.18115 3.12921 9.20027 3.123 9.222L2.792 10.236L1.742 10.244C1.71963 10.2443 1.69792 10.2517 1.67995 10.265C1.66197 10.2783 1.64862 10.297 1.64177 10.3183C1.63493 10.3396 1.63494 10.3625 1.64179 10.3838C1.64865 10.4051 1.66201 10.4237 1.68 10.437L2.525 11.072L2.208 12.09C2.20043 12.1112 2.19985 12.1342 2.20636 12.1557C2.21286 12.1772 2.2261 12.1961 2.24412 12.2095C2.26214 12.223 2.284 12.2303 2.30648 12.2304C2.32896 12.2304 2.35088 12.2233 2.369 12.21L3.223 11.588L4.078 12.209C4.09607 12.2217 4.11769 12.2284 4.13977 12.2281C4.16186 12.2278 4.18329 12.2205 4.20101 12.2073C4.21873 12.1941 4.23184 12.1757 4.23848 12.1546C4.24513 12.1336 4.24496 12.111 4.238 12.09L3.922 11.072L4.767 10.437C4.78499 10.4237 4.79835 10.4051 4.80521 10.3838C4.81206 10.3625 4.81207 10.3396 4.80523 10.3183C4.79838 10.297 4.78503 10.2783 4.76705 10.265C4.74908 10.2517 4.72737 10.2443 4.705 10.244ZM12.705 10.244L11.655 10.236L11.323 9.222C11.3165 9.20067 11.3033 9.18198 11.2854 9.1687C11.2675 9.15543 11.2458 9.14826 11.2235 9.14826C11.2012 9.14826 11.1795 9.15543 11.1616 9.1687C11.1437 9.18198 11.1305 9.20067 11.124 9.222L10.792 10.236L9.742 10.244C9.71963 10.2443 9.69792 10.2517 9.67995 10.265C9.66197 10.2783 9.64862 10.297 9.64177 10.3183C9.63493 10.3396 9.63494 10.3625 9.64179 10.3838C9.64865 10.4051 9.66201 10.4237 9.68 10.437L10.525 11.072L10.208 12.09C10.2004 12.1112 10.1999 12.1342 10.2064 12.1557C10.2129 12.1772 10.2261 12.1961 10.2441 12.2095C10.2621 12.223 10.284 12.2303 10.3065 12.2304C10.329 12.2304 10.3509 12.2233 10.369 12.21L11.224 11.588L12.078 12.209C12.0961 12.2221 12.1178 12.2291 12.1401 12.229C12.1624 12.2289 12.1841 12.2217 12.2021 12.2085C12.22 12.1952 12.2333 12.1766 12.2399 12.1553C12.2465 12.134 12.2462 12.1111 12.239 12.09L11.922 11.072L12.767 10.437C12.7849 10.4237 12.7983 10.4052 12.8052 10.384C12.812 10.3628 12.8121 10.34 12.8054 10.3187C12.7987 10.2975 12.7855 10.2788 12.7677 10.2654C12.7499 10.252 12.7283 10.2445 12.706 10.244H12.705Z",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 0L0 24H36",
  fill: "#73AF00"
}));
const ForwardRef = forwardRef(SolomonIslandsIcon);
export default ForwardRef;