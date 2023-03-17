import * as React from "react";
import { forwardRef } from "react";
const CarsIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 25 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M7.40451 13.252V12.1927C6.66353 12.1819 5.93561 12.1631 5.22073 12.1361C4.50584 12.1038 3.8588 12.0714 3.27959 12.0391C2.70559 12.0013 2.25423 11.9636 1.92549 11.9259C1.59674 11.8881 1.36454 11.7803 1.22887 11.6024C1.0932 11.4245 1.02536 11.1819 1.02536 10.8747V9.77493C1.02536 9.40297 1.04884 9.0876 1.0958 8.82884C1.14277 8.56469 1.22104 8.31671 1.33062 8.08491C1.44542 7.8531 1.60457 7.59973 1.80808 7.3248L2.60645 6.24124C2.65863 5.95013 2.72647 5.63747 2.80996 5.30323C2.89345 4.969 2.98476 4.63747 3.08391 4.30863C3.18305 3.97978 3.28219 3.6752 3.38134 3.39488C3.4857 3.11456 3.57963 2.88005 3.66312 2.69137C3.78835 2.41105 3.97359 2.18733 4.21885 2.02022C4.4641 1.84771 4.76414 1.73989 5.11897 1.69677C5.28595 1.6752 5.56512 1.65364 5.95648 1.63208C6.34784 1.61051 6.8253 1.59434 7.38885 1.58356C7.95241 1.56739 8.57597 1.5593 9.25955 1.5593C9.8231 1.5593 10.3475 1.56469 10.8328 1.57547C11.3233 1.58625 11.7564 1.59973 12.1321 1.6159L12.5548 0.548518C12.153 0.532345 11.6677 0.521563 11.0989 0.516173C10.5302 0.505391 9.91703 0.5 9.25955 0.5C8.58641 0.5 7.95763 0.505391 7.3732 0.516173C6.79399 0.526954 6.29566 0.540431 5.87821 0.556604C5.46598 0.572776 5.17376 0.591644 5.00156 0.613208C4.47975 0.677898 4.02317 0.847709 3.63181 1.12264C3.24045 1.39218 2.94041 1.75606 2.73168 2.21429C2.63776 2.41375 2.52557 2.70216 2.39512 3.07951C2.26466 3.45687 2.1316 3.88275 1.99593 4.35714C1.86026 4.83154 1.74546 5.31132 1.65153 5.7965L0.994051 6.6779C0.7488 7.00135 0.55312 7.31402 0.407013 7.6159C0.266124 7.9124 0.161762 8.23315 0.0939261 8.57817C0.0313087 8.91779 0 9.31671 0 9.77493V11.0364C0 11.6132 0.140889 12.0633 0.422668 12.3868C0.704446 12.7049 1.11407 12.8962 1.65153 12.9609C1.94375 12.9987 2.30119 13.0337 2.72386 13.066C3.14653 13.0984 3.61354 13.128 4.12492 13.155C4.6363 13.1765 5.17115 13.1954 5.72949 13.2116C6.28783 13.2278 6.84617 13.2412 7.40451 13.252ZM8.8134 5.80458L9.62743 2.44879C9.57003 2.44879 9.51002 2.44879 9.4474 2.44879C9.38478 2.44879 9.32217 2.44879 9.25955 2.44879C8.21071 2.44879 7.36015 2.46226 6.70789 2.48922C6.05562 2.51078 5.5886 2.54313 5.30682 2.58625C5.10332 2.6186 4.93634 2.6779 4.80588 2.76415C4.68065 2.8504 4.56846 2.98518 4.46932 3.16846C4.38583 3.31402 4.29451 3.52426 4.19536 3.79919C4.09622 4.06873 3.99969 4.36253 3.90576 4.68059C3.81183 4.99865 3.73356 5.30054 3.67094 5.58625C3.63964 5.73181 3.65268 5.83423 3.71008 5.89353C3.76748 5.95283 3.87184 5.97709 4.02317 5.96631C4.25798 5.95013 4.50323 5.93396 4.75892 5.91779C5.01461 5.90162 5.28595 5.88814 5.57295 5.87736C5.86516 5.86119 6.17564 5.8504 6.50438 5.84501C6.83312 5.83423 7.18796 5.82615 7.56888 5.82075C7.95502 5.80997 8.36986 5.80458 8.8134 5.80458ZM1.4402 15.5H2.35598C2.65341 15.5 2.90127 15.3976 3.09956 15.1927C3.29785 14.9879 3.39699 14.7345 3.39699 14.4326V12.5323L0.399186 12.0714V14.4326C0.399186 14.7345 0.49833 14.9879 0.696619 15.1927C0.894907 15.3976 1.14277 15.5 1.4402 15.5ZM3.61615 11.093C3.9762 11.093 4.27625 10.969 4.51628 10.721C4.75631 10.4677 4.87633 10.1577 4.87633 9.79111C4.87633 9.41914 4.75631 9.10916 4.51628 8.86119C4.27625 8.61321 3.9762 8.48922 3.61615 8.48922C3.2561 8.48922 2.95606 8.61321 2.71603 8.86119C2.476 9.10916 2.35598 9.41914 2.35598 9.79111C2.35598 10.1577 2.476 10.4677 2.71603 10.721C2.95606 10.969 3.2561 11.093 3.61615 11.093ZM15.7405 13.2763C16.3979 13.2763 17.0919 13.2682 17.8225 13.252C18.553 13.2358 19.2705 13.2143 19.975 13.1873C20.6794 13.155 21.3238 13.1199 21.9083 13.0822C22.4979 13.0445 22.978 13.004 23.3485 12.9609C23.8755 12.8962 24.2825 12.7156 24.5695 12.4191C24.8565 12.1226 25 11.7156 25 11.1981V9.77493C25 9.31671 24.9661 8.91779 24.8982 8.57817C24.8356 8.23315 24.7313 7.9124 24.5852 7.6159C24.4443 7.31402 24.2512 7.00135 24.0059 6.6779L23.3485 5.7965C23.2493 5.31132 23.1319 4.83154 22.9962 4.35714C22.8658 3.88275 22.7327 3.45687 22.5971 3.07951C22.4666 2.70216 22.357 2.41375 22.2683 2.21429C22.0596 1.75606 21.7596 1.39218 21.3682 1.12264C20.9768 0.8531 20.5202 0.683288 19.9984 0.613208C19.8262 0.586253 19.5314 0.56469 19.114 0.548518C18.7017 0.532345 18.2034 0.521563 17.619 0.516173C17.0398 0.505391 16.4136 0.5 15.7405 0.5C15.0621 0.5 14.4333 0.505391 13.8541 0.516173C13.2749 0.526954 12.7766 0.540431 12.3591 0.556604C11.9469 0.572776 11.6521 0.591644 11.4746 0.613208C10.958 0.677898 10.5015 0.847709 10.1049 1.12264C9.71352 1.39218 9.41348 1.75606 9.20476 2.21429C9.11605 2.41375 9.00386 2.70216 8.86819 3.07951C8.73774 3.45687 8.60467 3.88275 8.469 4.35714C8.33855 4.83154 8.22636 5.31132 8.13243 5.7965L7.46712 6.6779C7.22709 7.00135 7.03402 7.31402 6.88791 7.6159C6.74181 7.9124 6.63483 8.23315 6.567 8.57817C6.50438 8.91779 6.47307 9.31671 6.47307 9.77493V11.1981C6.47307 11.7156 6.61657 12.1226 6.90357 12.4191C7.19056 12.7156 7.60019 12.8962 8.13243 12.9609C8.50292 13.004 8.98038 13.0445 9.56481 13.0822C10.1545 13.1199 10.8015 13.155 11.5059 13.1873C12.2104 13.2143 12.9279 13.2358 13.6584 13.252C14.389 13.2682 15.083 13.2763 15.7405 13.2763ZM15.7405 12.217C15.0725 12.217 14.3759 12.2089 13.6506 12.1927C12.9305 12.1766 12.2287 12.1577 11.5451 12.1361C10.8615 12.1092 10.2458 12.0795 9.69787 12.0472C9.14997 12.0094 8.71947 11.969 8.40639 11.9259C8.07243 11.8827 7.83761 11.7749 7.70194 11.6024C7.56627 11.4245 7.49843 11.1819 7.49843 10.8747V9.77493C7.49843 9.40297 7.52191 9.0876 7.56888 8.82884C7.61584 8.56469 7.69411 8.31671 7.80369 8.08491C7.91849 7.8531 8.07764 7.59973 8.28115 7.3248L9.08735 6.24124C9.13953 5.95013 9.20737 5.63747 9.29086 5.30323C9.37435 4.969 9.46566 4.63747 9.56481 4.30863C9.66395 3.97978 9.7631 3.6752 9.86224 3.39488C9.96138 3.11456 10.0527 2.88005 10.1362 2.69137C10.2614 2.41105 10.4467 2.18733 10.6919 2.02022C10.9372 1.84771 11.2398 1.73989 11.5999 1.69677C11.7669 1.6752 12.0434 1.65364 12.4296 1.63208C12.8209 1.61051 13.2984 1.59434 13.8619 1.58356C14.4255 1.56739 15.0517 1.5593 15.7405 1.5593C16.424 1.5593 17.0476 1.56739 17.6111 1.58356C18.1799 1.59434 18.66 1.61051 19.0513 1.63208C19.4427 1.65364 19.714 1.6752 19.8654 1.69677C20.2306 1.74528 20.5359 1.8558 20.7812 2.0283C21.0264 2.19542 21.2116 2.41644 21.3369 2.69137C21.4256 2.88005 21.5195 3.11456 21.6187 3.39488C21.7178 3.6752 21.8169 3.97978 21.9161 4.30863C22.0152 4.63747 22.1066 4.969 22.19 5.30323C22.2735 5.63747 22.3414 5.95013 22.3936 6.24124L23.1919 7.3248C23.3954 7.59973 23.552 7.8531 23.6616 8.08491C23.7764 8.31671 23.8572 8.56469 23.9042 8.82884C23.9512 9.0876 23.9746 9.40297 23.9746 9.77493V10.8747C23.9746 11.1819 23.9068 11.4245 23.7711 11.6024C23.6355 11.7803 23.4006 11.8881 23.0667 11.9259C22.7536 11.969 22.3231 12.0067 21.7752 12.0391C21.2273 12.0714 20.6116 12.1011 19.928 12.128C19.2496 12.155 18.5478 12.1766 17.8225 12.1927C17.0972 12.2089 16.4032 12.217 15.7405 12.217ZM10.1518 5.58625C10.1205 5.73181 10.1336 5.83423 10.191 5.89353C10.2484 5.95283 10.3501 5.97709 10.4962 5.96631C10.9137 5.93396 11.3677 5.90701 11.8582 5.88544C12.3487 5.85849 12.9096 5.83962 13.541 5.82884C14.1724 5.81267 14.9056 5.80458 15.7405 5.80458C16.5753 5.80458 17.3059 5.81267 17.9321 5.82884C18.5635 5.83962 19.1244 5.85849 19.6149 5.88544C20.1054 5.90701 20.5594 5.93396 20.9768 5.96631C21.1229 5.97709 21.2247 5.95283 21.2821 5.89353C21.3395 5.83423 21.3525 5.73181 21.3212 5.58625C21.2586 5.30054 21.1803 4.99865 21.0864 4.68059C20.9977 4.36253 20.9038 4.06873 20.8046 3.79919C20.7055 3.52426 20.6142 3.31402 20.5307 3.16846C20.4263 2.98518 20.3115 2.8504 20.1863 2.76415C20.0611 2.6779 19.8967 2.6186 19.6932 2.58625C19.4062 2.54313 18.9365 2.51078 18.2843 2.48922C17.6372 2.46226 16.7893 2.44879 15.7405 2.44879C14.6864 2.44879 13.8332 2.46226 13.181 2.48922C12.5339 2.51078 12.0695 2.54313 11.7877 2.58625C11.5842 2.6186 11.4172 2.6779 11.2868 2.76415C11.1616 2.8504 11.0468 2.98518 10.9424 3.16846C10.8641 3.31402 10.7754 3.52426 10.6763 3.79919C10.5771 4.06873 10.4806 4.36253 10.3867 4.68059C10.2927 4.99865 10.2145 5.30054 10.1518 5.58625ZM7.91327 15.5H8.83688C9.1291 15.5 9.37435 15.3976 9.57264 15.1927C9.77092 14.9879 9.87007 14.7345 9.87007 14.4326V12.5081L6.88009 12.0633V14.4326C6.88009 14.7345 6.97923 14.9879 7.17752 15.1927C7.37581 15.3976 7.62106 15.5 7.91327 15.5ZM22.644 15.5H23.5598C23.852 15.5 24.0973 15.3976 24.2956 15.1927C24.4991 14.9879 24.6008 14.7345 24.6008 14.4326V12.0633L21.603 12.5081V14.4326C21.603 14.7345 21.7022 14.9879 21.9004 15.1927C22.0987 15.3976 22.3466 15.5 22.644 15.5ZM10.0971 11.093C10.4519 11.093 10.7493 10.969 10.9894 10.721C11.2294 10.4677 11.3494 10.1577 11.3494 9.79111C11.3494 9.41914 11.2294 9.10916 10.9894 8.86119C10.7493 8.61321 10.4519 8.48922 10.0971 8.48922C9.73701 8.48922 9.43696 8.61321 9.19693 8.86119C8.9569 9.10916 8.83688 9.41914 8.83688 9.79111C8.83688 10.1577 8.9569 10.4677 9.19693 10.721C9.43696 10.969 9.73701 11.093 10.0971 11.093ZM13.6662 10.7695H17.8068C18.0729 10.7695 18.2895 10.6833 18.4565 10.5108C18.6287 10.3383 18.7148 10.1119 18.7148 9.83154C18.7148 9.5566 18.6287 9.33288 18.4565 9.16038C18.2895 8.98787 18.0729 8.90162 17.8068 8.90162H13.6662C13.4001 8.90162 13.181 8.98787 13.0088 9.16038C12.8418 9.33288 12.7583 9.5566 12.7583 9.83154C12.7583 10.1119 12.8418 10.3383 13.0088 10.5108C13.181 10.6833 13.4001 10.7695 13.6662 10.7695ZM21.3838 11.093C21.7387 11.093 22.0361 10.969 22.2761 10.721C22.5214 10.4677 22.644 10.1577 22.644 9.79111C22.644 9.41914 22.5214 9.10916 22.2761 8.86119C22.0361 8.61321 21.7387 8.48922 21.3838 8.48922C21.0238 8.48922 20.7238 8.61321 20.4837 8.86119C20.2437 9.10916 20.1237 9.41914 20.1237 9.79111C20.1237 10.1577 20.2437 10.4677 20.4837 10.721C20.7238 10.969 21.0238 11.093 21.3838 11.093Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CarsIcon);
export default ForwardRef;