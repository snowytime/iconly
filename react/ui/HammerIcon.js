import * as React from "react";
import { forwardRef } from "react";
const HammerIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 19 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.475524 16.1589L1.82415 17.5164C2.16519 17.8629 2.5243 18.0232 2.90151 17.9973C3.28388 17.9715 3.65849 17.7543 4.02536 17.3457L12.5124 7.98309L11.7451 7.20739L3.32005 16.4847C3.18053 16.645 3.03844 16.7355 2.89375 16.7562C2.75424 16.7769 2.59148 16.6941 2.40546 16.508L1.47537 15.5849C1.28935 15.3987 1.20668 15.2332 1.22735 15.0885C1.25318 14.9488 1.34619 14.8066 1.50637 14.6618L10.6135 6.08263L9.83842 5.31469L0.63829 13.9637C0.245586 14.3257 0.0337321 14.6954 0.00272913 15.0729C-0.0231067 15.4504 0.134492 15.8124 0.475524 16.1589ZM5.56776 1.70771C5.40241 1.86802 5.3094 2.0516 5.28873 2.25846C5.26806 2.46531 5.30423 2.6463 5.39724 2.80144C5.49025 2.94624 5.6246 3.05484 5.80028 3.12723C5.98113 3.19963 6.20074 3.2048 6.45909 3.14275C7.03782 3.00829 7.62429 2.954 8.21851 2.97985C8.81274 3.00054 9.39404 3.19705 9.96243 3.56938L9.49739 4.72517C9.36304 5.05613 9.32428 5.34572 9.38112 5.59394C9.44313 5.837 9.58006 6.06712 9.79191 6.28431L11.6133 8.12271C11.8045 8.31922 11.9905 8.43299 12.1714 8.46402C12.3522 8.49504 12.5538 8.48987 12.7759 8.4485L13.6208 8.29336L14.1478 8.82859L14.1168 9.27074C14.1013 9.46725 14.1246 9.64824 14.1866 9.81372C14.2538 9.97921 14.3829 10.1576 14.5741 10.349L15.1787 10.9385C15.3699 11.1298 15.5765 11.2307 15.7987 11.241C16.0261 11.2462 16.2328 11.1557 16.4188 10.9695L18.7285 8.65018C18.9145 8.46402 19.005 8.26234 18.9998 8.04514C18.9946 7.82277 18.8964 7.61592 18.7053 7.42458L18.093 6.81954C17.9069 6.6282 17.7313 6.49892 17.5659 6.43169C17.4057 6.3593 17.23 6.33085 17.0389 6.34637L16.5816 6.38515L16.07 5.88095L16.2638 4.9889C16.3155 4.76654 16.3051 4.55968 16.2328 4.36835C16.1604 4.17184 16.008 3.95723 15.7755 3.72452L14.0316 1.98696C13.3702 1.33021 12.6649 0.838934 11.9156 0.513142C11.1715 0.182179 10.4197 0.0115259 9.66015 0.00118326C8.90575 -0.0143306 8.17718 0.122709 7.47444 0.412302C6.77688 0.701894 6.14131 1.1337 5.56776 1.70771ZM6.75362 2.00248C7.23417 1.65083 7.7483 1.40002 8.29602 1.25005C8.84891 1.10008 9.40696 1.05354 9.97018 1.11043C10.5334 1.16214 11.0785 1.31211 11.6056 1.56033C12.1378 1.80855 12.6235 2.15503 13.0627 2.59976L14.9927 4.51573C15.0857 4.60881 15.1425 4.69931 15.1632 4.78722C15.189 4.87513 15.1864 4.98632 15.1554 5.12077L14.8996 6.29983L16.0933 7.47888L16.8761 7.43234C16.9743 7.42717 17.0492 7.43493 17.1009 7.45561C17.1525 7.47113 17.2171 7.51767 17.2946 7.59524L17.7519 8.0529L15.8142 9.99214L15.3569 9.53448C15.2794 9.45691 15.2303 9.39226 15.2097 9.34055C15.189 9.28884 15.1813 9.21127 15.1864 9.10784L15.2407 8.33215L14.0548 7.15309L12.8457 7.35477C12.7165 7.38063 12.6132 7.3858 12.5357 7.37029C12.4633 7.3496 12.3781 7.29272 12.2799 7.19963L10.691 5.60946C10.5877 5.51637 10.5282 5.42846 10.5127 5.34572C10.5024 5.25781 10.5282 5.14146 10.5902 4.99666L11.2878 3.33667C10.6677 2.75749 9.97018 2.35671 9.19511 2.13434C8.42003 1.91198 7.62946 1.91974 6.82338 2.15762C6.76137 2.17313 6.72004 2.16279 6.69937 2.12659C6.68387 2.08522 6.70195 2.04385 6.75362 2.00248Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(HammerIcon);
export default ForwardRef;