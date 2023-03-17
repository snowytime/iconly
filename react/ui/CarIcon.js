import * as React from "react";
import { forwardRef } from "react";
const CarIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 19 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M3.76627 5.58625C3.73415 5.73181 3.74753 5.83423 3.80642 5.89353C3.86531 5.95283 3.97239 5.97709 4.12764 5.96631C4.55593 5.93396 5.0217 5.90701 5.52494 5.88544C6.02818 5.85849 6.60101 5.83962 7.24345 5.82884C7.89124 5.81267 8.64342 5.80458 9.5 5.80458C10.3566 5.80458 11.1061 5.81267 11.7485 5.82884C12.3963 5.83962 12.9718 5.85849 13.4751 5.88544C13.9837 5.90701 14.4521 5.93396 14.8804 5.96631C15.0303 5.97709 15.1347 5.95283 15.1936 5.89353C15.2525 5.83423 15.2659 5.73181 15.2337 5.58625C15.1695 5.30054 15.0892 4.99865 14.9928 4.68059C14.8965 4.36253 14.7974 4.06873 14.6957 3.79919C14.594 3.52426 14.5003 3.31402 14.4146 3.16846C14.3129 2.98518 14.1951 2.8504 14.0613 2.76415C13.9328 2.6779 13.7642 2.6186 13.5554 2.58625C13.2663 2.54313 12.7871 2.51078 12.1179 2.48922C11.4487 2.46226 10.5761 2.44879 9.5 2.44879C8.42392 2.44879 7.55128 2.46226 6.88208 2.48922C6.21288 2.51078 5.73373 2.54313 5.44463 2.58625C5.23584 2.6186 5.06452 2.6779 4.93068 2.76415C4.8022 2.8504 4.68709 2.98518 4.58537 3.16846C4.49972 3.31402 4.40603 3.52426 4.30431 3.79919C4.20259 4.06873 4.10355 4.36253 4.00718 4.68059C3.91617 4.99865 3.83587 5.30054 3.76627 5.58625ZM3.71006 11.093C4.07946 11.093 4.38729 10.969 4.63356 10.721C4.87982 10.4677 5.00296 10.1577 5.00296 9.79111C5.00296 9.41914 4.87982 9.10916 4.63356 8.86119C4.38729 8.61321 4.07946 8.48922 3.71006 8.48922C3.34066 8.48922 3.03282 8.61321 2.78656 8.86119C2.54029 9.10916 2.41716 9.41914 2.41716 9.79111C2.41716 10.1577 2.54029 10.4677 2.78656 10.721C3.03282 10.969 3.34066 11.093 3.71006 11.093ZM7.37997 10.7695H11.6281C11.9011 10.7695 12.1233 10.6833 12.2946 10.5108C12.4659 10.3383 12.5516 10.1119 12.5516 9.83154C12.5516 9.5566 12.4659 9.33288 12.2946 9.16038C12.1233 8.98787 11.9011 8.90162 11.6281 8.90162H7.37997C7.10158 8.90162 6.87672 8.98787 6.70541 9.16038C6.53409 9.33288 6.44844 9.5566 6.44844 9.83154C6.44844 10.1119 6.53409 10.3383 6.70541 10.5108C6.87672 10.6833 7.10158 10.7695 7.37997 10.7695ZM15.2899 11.093C15.6593 11.093 15.9672 10.969 16.2134 10.721C16.4597 10.4677 16.5828 10.1577 16.5828 9.79111C16.5828 9.41914 16.4597 9.10916 16.2134 8.86119C15.9672 8.61321 15.6593 8.48922 15.2899 8.48922C14.9259 8.48922 14.6207 8.61321 14.3745 8.86119C14.1282 9.10916 14.0051 9.41914 14.0051 9.79111C14.0051 10.1577 14.1282 10.4677 14.3745 10.721C14.6207 10.969 14.9259 11.093 15.2899 11.093ZM9.5 13.2763C10.1746 13.2763 10.8866 13.2682 11.6361 13.252C12.3856 13.2358 13.1217 13.2143 13.8445 13.1873C14.5672 13.155 15.2284 13.1199 15.828 13.0822C16.4329 13.0445 16.9255 13.004 17.3056 12.9609C17.8516 12.8962 18.2692 12.7156 18.5583 12.4191C18.8528 12.1226 19 11.7156 19 11.1981V9.77493C19 9.31671 18.9679 8.91779 18.9036 8.57817C18.8394 8.23315 18.7323 7.9124 18.5824 7.6159C18.4325 7.31402 18.2344 7.00135 17.9882 6.6779L17.3056 5.7965C17.2092 5.31132 17.0914 4.83154 16.9522 4.35714C16.8184 3.88275 16.6819 3.45687 16.5427 3.07951C16.4088 2.70216 16.2964 2.41375 16.2054 2.21429C15.9913 1.75606 15.6808 1.39218 15.2739 1.12264C14.8724 0.8531 14.4066 0.683288 13.8766 0.613208C13.6946 0.586253 13.3894 0.56469 12.9611 0.548518C12.5382 0.532345 12.0269 0.521563 11.4273 0.516173C10.8331 0.505391 10.1906 0.5 9.5 0.5C8.80938 0.5 8.16427 0.505391 7.56467 0.516173C6.97041 0.526954 6.45914 0.540431 6.03085 0.556604C5.60792 0.572776 5.30811 0.591644 5.13144 0.613208C4.59608 0.677898 4.12764 0.847709 3.72612 1.12264C3.3246 1.39218 3.01676 1.75606 2.80262 2.21429C2.70625 2.41375 2.59115 2.70216 2.45731 3.07951C2.32347 3.45687 2.18695 3.88275 2.04776 4.35714C1.90856 4.83154 1.79078 5.31132 1.69442 5.7965L1.01986 6.6779C0.768245 7.00135 0.567484 7.31402 0.417582 7.6159C0.273035 7.9124 0.165962 8.23315 0.0963652 8.57817C0.0321217 8.91779 0 9.31671 0 9.77493V11.1981C0 11.7156 0.147225 12.1226 0.441674 12.4191C0.736123 12.7156 1.1537 12.8962 1.69442 12.9609C2.07453 13.004 2.56438 13.0445 3.16399 13.0822C3.76895 13.1199 4.4328 13.155 5.15554 13.1873C5.87827 13.2143 6.6144 13.2358 7.3639 13.252C8.11341 13.2682 8.82544 13.2763 9.5 13.2763ZM9.5 12.217C8.82009 12.217 8.10806 12.2089 7.3639 12.1927C6.61975 12.1765 5.89701 12.1577 5.19569 12.1361C4.49972 12.1092 3.87067 12.0795 3.30854 12.0472C2.74641 12.0094 2.30206 11.969 1.97548 11.9259C1.63821 11.8827 1.39997 11.7749 1.26078 11.6024C1.12158 11.4245 1.05199 11.1819 1.05199 10.8747V9.77493C1.05199 9.40297 1.07608 9.0876 1.12426 8.82884C1.17244 8.56469 1.25275 8.31671 1.36517 8.08491C1.48295 7.8531 1.64624 7.59973 1.85503 7.3248L2.67413 6.24124C2.72767 5.95014 2.79727 5.63747 2.88292 5.30323C2.96858 4.969 3.06227 4.63747 3.16399 4.30863C3.26571 3.97978 3.36743 3.6752 3.46914 3.39488C3.57622 3.11456 3.67258 2.88005 3.75824 2.69137C3.88673 2.41105 4.07678 2.18733 4.3284 2.02022C4.58002 1.84771 4.88785 1.73989 5.2519 1.69677C5.42322 1.6752 5.70964 1.65364 6.11116 1.63208C6.51268 1.61051 7.00253 1.59434 7.58073 1.58356C8.15892 1.56739 8.79867 1.5593 9.5 1.5593C10.2067 1.5593 10.8491 1.56739 11.4273 1.58356C12.0108 1.59434 12.5007 1.61051 12.8969 1.63208C13.2984 1.65364 13.5768 1.6752 13.732 1.69677C14.1121 1.74528 14.4253 1.8558 14.6716 2.0283C14.9232 2.19542 15.1159 2.41644 15.2498 2.69137C15.3354 2.88005 15.4291 3.11456 15.5309 3.39488C15.6326 3.6752 15.7343 3.97978 15.836 4.30863C15.9377 4.63747 16.0314 4.969 16.1171 5.30323C16.2027 5.63747 16.2723 5.95014 16.3259 6.24124L17.153 7.3248C17.3618 7.59973 17.5224 7.8531 17.6348 8.08491C17.7526 8.31671 17.8329 8.56469 17.8757 8.82884C17.9239 9.0876 17.948 9.40297 17.948 9.77493V10.8747C17.948 11.1819 17.8784 11.4245 17.7392 11.6024C17.6054 11.7803 17.3671 11.8881 17.0245 11.9259C16.7033 11.969 16.2616 12.0067 15.6995 12.0391C15.1374 12.0714 14.5056 12.1011 13.8043 12.128C13.103 12.155 12.3802 12.1765 11.6361 12.1927C10.8973 12.2089 10.1853 12.217 9.5 12.217ZM1.4776 15.5H2.41716C2.72231 15.5 2.97661 15.3976 3.18005 15.1927C3.38349 14.9879 3.48521 14.7345 3.48521 14.4326V12.5081L0.409552 12.0633V14.4326C0.409552 14.7345 0.511271 14.9879 0.714708 15.1927C0.918146 15.3976 1.17244 15.5 1.4776 15.5ZM16.5828 15.5H17.5304C17.8302 15.5 18.0819 15.3976 18.2853 15.1927C18.4887 14.9879 18.5904 14.7345 18.5904 14.4326V12.0633L15.5228 12.5081V14.4326C15.5228 14.7345 15.6245 14.9879 15.828 15.1927C16.0314 15.3976 16.283 15.5 16.5828 15.5Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CarIcon);
export default ForwardRef;