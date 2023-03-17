import * as React from "react";
import { forwardRef } from "react";
const ShipIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 17 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M8.49835 20C8.93867 20 9.31186 19.9437 9.61793 19.8311C9.92937 19.7238 10.1979 19.587 10.4234 19.4208C10.6543 19.2599 10.8637 19.099 11.0516 18.9381C11.2449 18.7772 11.4409 18.6404 11.6396 18.5278C11.8383 18.4205 12.0665 18.3669 12.3243 18.3669C12.5874 18.3669 12.8156 18.4205 13.0089 18.5278C13.2022 18.6404 13.3928 18.7772 13.5808 18.9381C13.7741 19.099 13.9889 19.2599 14.2251 19.4208C14.4614 19.587 14.7487 19.7238 15.087 19.8311C15.4306 19.9437 15.8521 20 16.3515 20H16.3918C16.5529 20 16.6871 19.9437 16.7945 19.8311C16.9073 19.7238 16.9637 19.5897 16.9637 19.4288C16.9637 19.2733 16.9073 19.1392 16.7945 19.0265C16.6871 18.9193 16.5529 18.8656 16.3918 18.8656H16.3515C15.9219 18.8656 15.5622 18.7879 15.2722 18.6323C14.9876 18.4768 14.695 18.2918 14.3943 18.0772C14.1312 17.8842 13.8305 17.6938 13.4922 17.506C13.1592 17.3237 12.7699 17.2325 12.3243 17.2325C11.8625 17.2325 11.4597 17.329 11.1161 17.5221C10.7778 17.7206 10.4771 17.919 10.214 18.1175C9.93474 18.3266 9.66895 18.5036 9.41657 18.6484C9.16419 18.7932 8.85812 18.8656 8.49835 18.8656C8.13858 18.8656 7.83251 18.7932 7.58014 18.6484C7.32776 18.5036 7.06196 18.3266 6.78274 18.1175C6.51962 17.919 6.21624 17.7206 5.87258 17.5221C5.53429 17.329 5.13424 17.2325 4.67245 17.2325C4.22677 17.2325 3.83478 17.3237 3.49649 17.506C3.16357 17.6938 2.86555 17.8842 2.60244 18.0772C2.30173 18.2918 2.00909 18.4768 1.72449 18.6323C1.4399 18.7879 1.08013 18.8656 0.645186 18.8656H0.604914C0.449193 18.8656 0.31495 18.9193 0.202187 19.0265C0.0894236 19.1392 0.0330419 19.2733 0.0330419 19.4288C0.0330419 19.5897 0.0894236 19.7238 0.202187 19.8311C0.31495 19.9437 0.449193 20 0.604914 20H0.645186C1.14994 20 1.57146 19.9437 1.90975 19.8311C2.24804 19.7238 2.53532 19.587 2.77158 19.4208C3.00785 19.2599 3.21995 19.099 3.40789 18.9381C3.6012 18.7772 3.79451 18.6404 3.98782 18.5278C4.18649 18.4205 4.41471 18.3669 4.67245 18.3669C4.9302 18.3669 5.15841 18.4205 5.35709 18.5278C5.55577 18.6404 5.74907 18.7772 5.93701 18.9381C6.13032 19.099 6.33974 19.2599 6.56527 19.4208C6.79616 19.587 7.06465 19.7238 7.37072 19.8311C7.68216 19.9437 8.05804 20 8.49835 20ZM0.363278 12.8479L3.31929 18.0611L4.29389 17.4095L1.37815 12.3492C1.20632 12.0434 1.14725 11.8101 1.20095 11.6492C1.25465 11.483 1.39157 11.3516 1.61173 11.255L7.47543 8.56798C7.66874 8.4768 7.84057 8.4044 7.99092 8.35076C8.14127 8.29177 8.31041 8.26227 8.49835 8.26227C8.68629 8.26227 8.85544 8.29177 9.00579 8.35076C9.15614 8.4044 9.33066 8.4768 9.52933 8.56798L15.385 11.255C15.6105 11.3516 15.7474 11.483 15.7958 11.6492C15.8495 11.8101 15.7904 12.0434 15.6186 12.3492L12.7028 17.4095L13.7338 17.9807L16.6334 12.8479C16.9771 12.2473 17.0791 11.727 16.9395 11.2872C16.7999 10.8474 16.4321 10.4934 15.836 10.2253L9.98039 7.53821C9.80856 7.45776 9.60182 7.36927 9.36019 7.27273C9.11855 7.17619 8.83127 7.12792 8.49835 7.12792C8.16543 7.12792 7.87815 7.17619 7.63652 7.27273C7.39488 7.36927 7.18815 7.45776 7.01632 7.53821L1.16068 10.2253C0.564641 10.4934 0.196817 10.8474 0.0572055 11.2872C-0.0770367 11.727 0.0249873 12.2473 0.363278 12.8479ZM1.97418 10.0885L3.19847 9.5173L4.06031 3.48351C4.08179 3.32261 4.13817 3.19925 4.22945 3.11344C4.32074 3.02762 4.43887 2.98471 4.58385 2.98471H12.429C12.5847 2.98471 12.7082 3.02226 12.7995 3.09735C12.8908 3.16707 12.9471 3.26629 12.9686 3.39501L13.8143 9.55752L15.0386 10.0885L14.1124 3.32261C14.0479 2.85599 13.868 2.49397 13.5727 2.23652C13.2774 1.97908 12.8961 1.85036 12.429 1.85036H4.58385C4.12743 1.85036 3.75155 1.99517 3.45622 2.28479C3.16625 2.56905 2.98368 2.96862 2.90851 3.48351L1.97418 10.0885ZM5.17989 5.91311H7.67679C7.80029 5.91311 7.89695 5.88361 7.96675 5.82462C8.04193 5.76026 8.07952 5.67981 8.07952 5.58327V4.29606C8.07952 4.19952 8.04193 4.12175 7.96675 4.06275C7.89695 3.99839 7.80029 3.96621 7.67679 3.96621H5.17989C5.08323 3.96621 5.00537 3.99839 4.94631 4.06275C4.88724 4.12175 4.85771 4.19952 4.85771 4.29606V5.58327C4.85771 5.67981 4.88724 5.76026 4.94631 5.82462C5.00537 5.88361 5.08323 5.91311 5.17989 5.91311ZM9.23937 5.91311H11.7443C11.8678 5.91311 11.9645 5.88361 12.0343 5.82462C12.1095 5.76026 12.1471 5.67981 12.1471 5.58327V4.29606C12.1471 4.19952 12.1095 4.12175 12.0343 4.06275C11.9645 3.99839 11.8678 3.96621 11.7443 3.96621H9.23937C9.14809 3.96621 9.07291 3.99839 9.01384 4.06275C8.95478 4.12175 8.92524 4.19952 8.92524 4.29606V5.58327C8.92524 5.67981 8.95478 5.76026 9.01384 5.82462C9.07291 5.88361 9.14809 5.91311 9.23937 5.91311ZM4.99463 2.73532H6.13032V1.40788C6.13032 1.22553 6.21892 1.13435 6.39612 1.13435H10.6086C10.7858 1.13435 10.8744 1.22553 10.8744 1.40788V2.73532H12.0101V1.32743C12.0101 0.925181 11.8893 0.603379 11.6477 0.362027C11.4114 0.120676 11.0919 0 10.6892 0H6.31558C5.91285 0 5.59067 0.120676 5.34903 0.362027C5.11277 0.603379 4.99463 0.925181 4.99463 1.32743V2.73532Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ShipIcon);
export default ForwardRef;