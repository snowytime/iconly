import * as React from "react";
import { forwardRef } from "react";
const MacaoIcon = ({
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
  fill: "#5AA587"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23.774 14.412L24.427 14.56C24.427 14.56 21.807 17.42 18 14.615C14.193 17.42 11.573 14.56 11.573 14.56L12.226 14.412C12.8152 14.8963 13.515 15.2274 14.2632 15.3758C15.0113 15.5243 15.7845 15.4856 16.514 15.263C15.7975 15.4398 15.0486 15.438 14.333 15.258C13.7081 15.0984 13.1235 14.8102 12.6164 14.4117C12.1093 14.0133 11.6909 13.5134 11.388 12.944C12.2129 12.3831 13.2 12.1105 14.1959 12.1683C15.1917 12.2262 16.1406 12.6114 16.895 13.264L16.881 13.244C16.3466 12.7328 15.6973 12.3573 14.9878 12.1488C14.2782 11.9404 13.529 11.9051 12.803 12.046L12.294 11.604C12.9985 11.3985 13.7429 11.3707 14.4608 11.523C15.1787 11.6754 15.8477 12.0031 16.408 12.477C16.0591 11.7923 15.8852 11.0318 15.9017 10.2636C15.9183 9.49525 16.1249 8.74302 16.503 8.074L16.803 8.684C16.4895 9.37488 16.3427 10.1298 16.3745 10.8878C16.4063 11.6458 16.6157 12.3858 16.986 13.048L16.99 13.053C16.5416 12.1416 16.3978 11.1103 16.5796 10.1109C16.7614 9.11162 17.2593 8.19708 18 7.502C18.7407 8.19708 19.2386 9.11162 19.4204 10.1109C19.6022 11.1103 19.4584 12.1416 19.01 13.053L19.014 13.048C19.3844 12.3857 19.594 11.6455 19.6258 10.8873C19.6576 10.1291 19.5107 9.37402 19.197 8.683L19.497 8.074C19.8752 8.74299 20.0818 9.49523 20.0984 10.2635C20.115 11.0319 19.941 11.7923 19.592 12.477C20.1523 12.003 20.8213 11.6752 21.5392 11.5229C22.2571 11.3706 23.0015 11.3984 23.706 11.604L23.196 12.046C22.47 11.9051 21.7208 11.9404 21.0112 12.1488C20.3017 12.3573 19.6524 12.7328 19.118 13.244L19.104 13.264C19.8585 12.6111 20.8075 12.2258 21.8036 12.168C22.7997 12.1101 23.787 12.3829 24.612 12.944C24.3091 13.5134 23.8907 14.0133 23.3836 14.4117C22.8765 14.8102 22.2919 15.0984 21.667 15.258C20.951 15.4382 20.2018 15.4399 19.485 15.263C20.2147 15.4857 20.9881 15.5246 21.7364 15.3761C22.4847 15.2276 23.1847 14.8964 23.774 14.412ZM15.063 19.012H20.937C21.229 18.8786 21.5117 18.7256 21.783 18.554H14.217C14.4884 18.7252 14.771 18.8789 15.063 19.012ZM18 19.65C18.8218 19.6503 19.6374 19.5072 20.41 19.227H15.59C16.3626 19.5072 17.1782 19.6504 18 19.65ZM12.904 17.492H23.096C23.192 17.394 23.286 17.292 23.376 17.188H12.624C12.714 17.292 12.807 17.394 12.904 17.492ZM13.746 18.231H22.254C22.414 18.111 22.569 17.983 22.719 17.85H13.28C13.43 17.983 13.585 18.11 13.745 18.23L13.746 18.231ZM18.158 15.224L18 15.063L17.842 15.223C17.0685 15.9389 16.0606 16.3484 15.007 16.375H12.01C12.112 16.532 12.22 16.685 12.334 16.832H15.006C16.1062 16.8118 17.1649 16.4086 18 15.692C18.835 16.4087 19.8938 16.8118 20.994 16.832H23.666C23.78 16.684 23.888 16.532 23.991 16.375H20.994C19.9406 16.3466 18.9332 15.9378 18.158 15.224Z",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.22 5.368L18.553 5.87L18.803 6.675C18.8086 6.69164 18.8088 6.70964 18.8036 6.72639C18.7983 6.74315 18.7879 6.75781 18.7737 6.76826C18.7596 6.77871 18.7426 6.78441 18.725 6.78454C18.7074 6.78467 18.6903 6.77923 18.676 6.769L18 6.278L17.325 6.769C17.3107 6.77965 17.2935 6.78545 17.2757 6.78552C17.2579 6.7856 17.2405 6.77995 17.2262 6.76942C17.2118 6.75889 17.2013 6.74403 17.196 6.72703C17.1907 6.71003 17.1911 6.69179 17.197 6.675L17.447 5.87L16.78 5.368C16.7663 5.35735 16.7562 5.34275 16.751 5.32618C16.7459 5.30961 16.7459 5.29185 16.7511 5.2753C16.7563 5.25875 16.7665 5.24419 16.7803 5.23359C16.794 5.22299 16.8107 5.21685 16.828 5.216L17.658 5.209L17.921 4.407C17.9264 4.39028 17.9369 4.37571 17.9511 4.36537C17.9653 4.35503 17.9824 4.34946 18 4.34946C18.0176 4.34946 18.0347 4.35503 18.0489 4.36537C18.0631 4.37571 18.0736 4.39028 18.079 4.407L18.342 5.209L19.172 5.216C19.1894 5.21666 19.2062 5.22266 19.2201 5.23319C19.234 5.24372 19.2443 5.25827 19.2497 5.27486C19.255 5.29145 19.2551 5.30929 19.25 5.32595C19.2449 5.34261 19.2348 5.35729 19.221 5.368H19.22ZM14.905 6.639L15.099 6.09C15.1037 6.07854 15.1046 6.06586 15.1015 6.05387C15.0983 6.04187 15.0914 6.03123 15.0817 6.02354C15.0719 6.01585 15.06 6.01155 15.0476 6.01127C15.0352 6.01099 15.0231 6.01476 15.013 6.022L14.535 6.343L14.082 5.987C14.0725 5.97947 14.0608 5.97518 14.0487 5.97473C14.0366 5.97428 14.0247 5.9777 14.0146 5.9845C14.0046 5.99131 13.997 6.00113 13.9929 6.01255C13.9889 6.02397 13.9885 6.03638 13.992 6.048L14.144 6.61L13.671 6.938C13.6609 6.94483 13.6532 6.95468 13.649 6.96615C13.6448 6.97761 13.6443 6.9901 13.6477 7.00185C13.651 7.01359 13.6579 7.02399 13.6675 7.03156C13.6771 7.03912 13.6888 7.04348 13.701 7.044L14.272 7.071L14.433 7.631C14.4364 7.64246 14.4433 7.65256 14.4527 7.65989C14.4621 7.66721 14.4736 7.67139 14.4856 7.67183C14.4975 7.67228 14.5093 7.66896 14.5192 7.66235C14.5292 7.65574 14.5368 7.64617 14.541 7.635L14.743 7.089L15.316 7.107C15.3283 7.10736 15.3403 7.10383 15.3504 7.0969C15.3606 7.08998 15.3682 7.08002 15.3724 7.06847C15.3765 7.05691 15.3768 7.04435 15.3733 7.03258C15.3699 7.02082 15.3627 7.01046 15.353 7.003L14.905 6.639ZM13.351 8.986L12.783 8.908L12.672 8.336C12.6698 8.32407 12.6638 8.31315 12.655 8.30485C12.6461 8.29655 12.6348 8.29129 12.6228 8.28984C12.6107 8.28839 12.5985 8.29082 12.588 8.29679C12.5774 8.30275 12.569 8.31193 12.564 8.323L12.316 8.848L11.747 8.778C11.7349 8.77666 11.7227 8.77917 11.7121 8.78517C11.7015 8.79116 11.693 8.80034 11.6879 8.81141C11.6828 8.82248 11.6814 8.83486 11.6837 8.84682C11.6861 8.85877 11.6921 8.86968 11.701 8.878L12.115 9.281L11.875 9.811C11.8703 9.82191 11.869 9.834 11.8714 9.84564C11.8738 9.85729 11.8797 9.86792 11.8883 9.8761C11.8969 9.88429 11.9078 9.88962 11.9196 9.89139C11.9313 9.89316 11.9434 9.89128 11.954 9.886L12.458 9.609L12.878 10.006C12.8869 10.0145 12.8982 10.0199 12.9104 10.0214C12.9226 10.023 12.935 10.0205 12.9456 10.0144C12.9563 10.0084 12.9648 9.99901 12.9697 9.98776C12.9746 9.97651 12.9758 9.96397 12.973 9.952L12.871 9.379L13.371 9.095C13.382 9.08926 13.3908 9.08016 13.3963 9.06903C13.4017 9.05789 13.4034 9.04531 13.4012 9.03313C13.399 9.02094 13.3929 9.00979 13.3838 9.00131C13.3748 8.99283 13.3633 8.98746 13.351 8.986ZM22.46 6.938L21.986 6.61L22.138 6.048C22.1415 6.03638 22.1411 6.02397 22.1371 6.01255C22.133 6.00113 22.1254 5.99131 22.1154 5.9845C22.1053 5.9777 22.0934 5.97428 22.0813 5.97473C22.0692 5.97518 22.0575 5.97947 22.048 5.987L21.595 6.343L21.117 6.023C21.1069 6.01619 21.0949 6.01278 21.0828 6.01327C21.0706 6.01376 21.059 6.01812 21.0495 6.02571C21.04 6.03331 21.0332 6.04374 21.03 6.05549C21.0269 6.06723 21.0276 6.07968 21.032 6.091L21.225 6.639L20.777 7.003C20.7672 7.01051 20.76 7.02096 20.7566 7.03283C20.7531 7.0447 20.7535 7.05736 20.7578 7.06897C20.762 7.08058 20.7698 7.09053 20.7801 7.09737C20.7904 7.10422 20.8027 7.10759 20.815 7.107L21.387 7.089L21.589 7.635C21.5932 7.64617 21.6008 7.65574 21.6108 7.66235C21.6207 7.66896 21.6325 7.67228 21.6444 7.67183C21.6564 7.67139 21.6679 7.66721 21.6773 7.65989C21.6867 7.65256 21.6936 7.64246 21.697 7.631L21.857 7.071L22.43 7.044C22.4422 7.04348 22.4539 7.03912 22.4635 7.03156C22.4731 7.02399 22.48 7.01359 22.4833 7.00185C22.4867 6.9901 22.4862 6.97761 22.482 6.96615C22.4778 6.95468 22.4701 6.94483 22.46 6.938ZM24.383 8.778L23.815 8.848L23.566 8.323C23.5608 8.31233 23.5524 8.30354 23.542 8.29787C23.5316 8.29219 23.5196 8.28991 23.5079 8.29134C23.4961 8.29277 23.485 8.29784 23.4763 8.30585C23.4675 8.31386 23.4615 8.3244 23.459 8.336L23.347 8.908L22.78 8.986C22.7677 8.98746 22.7562 8.99283 22.7472 9.00131C22.7381 9.00979 22.732 9.02094 22.7298 9.03313C22.7276 9.04531 22.7293 9.05789 22.7347 9.06903C22.7402 9.08016 22.749 9.08926 22.76 9.095L23.26 9.379L23.157 9.952C23.1542 9.96397 23.1554 9.97651 23.1603 9.98776C23.1652 9.99901 23.1737 10.0084 23.1844 10.0144C23.195 10.0205 23.2074 10.023 23.2196 10.0214C23.2318 10.0199 23.2431 10.0145 23.252 10.006L23.672 9.609L24.177 9.886C24.1877 9.89148 24.1999 9.89347 24.2119 9.8917C24.2238 9.88993 24.2349 9.88449 24.2436 9.87613C24.2523 9.86777 24.2581 9.85691 24.2604 9.84505C24.2626 9.8332 24.2611 9.82095 24.256 9.81L24.016 9.281L24.43 8.878C24.439 8.86963 24.4451 8.85861 24.4475 8.84654C24.4498 8.83447 24.4482 8.82197 24.443 8.81084C24.4378 8.79971 24.4292 8.79053 24.4184 8.78463C24.4076 8.77873 24.3952 8.77641 24.383 8.778Z",
  fill: "#FFE15A"
}));
const ForwardRef = forwardRef(MacaoIcon);
export default ForwardRef;