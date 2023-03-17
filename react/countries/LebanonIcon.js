import * as React from "react";
import { forwardRef } from "react";
const LebanonIcon = ({
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
  d: "M36.0001 0V5.053H6.10352e-05V0H36.0001ZM6.10352e-05 24H36.0001V18.947H6.10352e-05V24Z",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.10352e-05 5.053H36.0001V18.947H6.10352e-05V5.053Z",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.3501 16.248L25.1861 15.081C25.2829 15.0618 25.3732 15.0182 25.4486 14.9545C25.524 14.8907 25.5819 14.8088 25.6169 14.7165C25.6519 14.6242 25.6628 14.5245 25.6487 14.4268C25.6346 14.3291 25.5958 14.2366 25.5361 14.158C25.4449 14.0381 25.3109 13.9581 25.1621 13.935L18.9441 12.965C18.9025 12.9586 18.8627 12.944 18.8269 12.922C18.791 12.9001 18.7599 12.8713 18.7352 12.8373C18.7106 12.8032 18.693 12.7646 18.6833 12.7238C18.6737 12.6829 18.6722 12.6405 18.6791 12.599C18.6965 12.5157 18.7452 12.4424 18.8152 12.394C18.8851 12.3456 18.971 12.3259 19.0551 12.339L23.3671 12.906C23.4439 12.916 23.522 12.9021 23.5906 12.8661C23.6592 12.83 23.715 12.7737 23.7503 12.7047C23.7857 12.6357 23.7989 12.5575 23.7881 12.4808C23.7773 12.4041 23.7431 12.3325 23.6901 12.276L23.3441 11.906C23.2146 11.7679 23.0449 11.6741 22.8591 11.638L19.2571 10.941L22.3281 11.162C22.3803 11.1659 22.4325 11.1541 22.478 11.1281C22.5234 11.1021 22.56 11.063 22.583 11.016C22.6061 10.9689 22.6145 10.9161 22.6072 10.8642C22.5999 10.8123 22.5772 10.7638 22.5421 10.725L22.3851 10.549C22.2896 10.4429 22.1628 10.37 22.0231 10.341L18.9751 9.704L21.1411 9.642C21.1841 9.6409 21.226 9.62747 21.2616 9.6033C21.2972 9.57913 21.3252 9.54523 21.3422 9.50564C21.3591 9.46605 21.3643 9.42242 21.3572 9.37994C21.3501 9.33746 21.331 9.29792 21.3021 9.266L21.2051 9.158C21.129 9.07319 21.0306 9.0115 20.9211 8.98L18.9891 8.425H20.5071C20.5416 8.42496 20.5756 8.41636 20.606 8.39998C20.6364 8.38359 20.6622 8.35993 20.6813 8.3311C20.7003 8.30228 20.7119 8.26919 20.715 8.23479C20.7181 8.20039 20.7126 8.16577 20.6991 8.134L20.6481 8.015C20.6175 7.94496 20.5726 7.88208 20.5163 7.83042C20.46 7.77875 20.3935 7.73944 20.3211 7.715L18.9171 7.237L19.6071 7.235C19.6545 7.23495 19.7012 7.22311 19.7429 7.20054C19.7846 7.17797 19.82 7.14538 19.846 7.10571C19.872 7.06603 19.8877 7.02052 19.8917 6.97327C19.8958 6.92601 19.888 6.8785 19.8691 6.835C19.8031 6.68332 19.6869 6.559 19.5401 6.483L18.0001 5.684L16.4601 6.484C16.313 6.55957 16.1964 6.68353 16.1301 6.835C16.1112 6.8785 16.1034 6.92601 16.1074 6.97327C16.1114 7.02052 16.1271 7.06603 16.1531 7.10571C16.1791 7.14538 16.2145 7.17797 16.2563 7.20054C16.298 7.22311 16.3446 7.23495 16.3921 7.235L17.0821 7.237L15.6781 7.715C15.6058 7.7395 15.5395 7.77885 15.4833 7.83052C15.4272 7.88218 15.3825 7.94502 15.3521 8.015L15.3011 8.134C15.2873 8.16574 15.2817 8.20038 15.2846 8.23483C15.2876 8.26929 15.299 8.30247 15.318 8.33141C15.3369 8.36035 15.3627 8.38414 15.3931 8.40065C15.4235 8.41715 15.4575 8.42587 15.4921 8.426H17.0121L15.0791 8.98C14.9696 9.0115 14.8711 9.07319 14.7951 9.158L14.6971 9.266C14.6681 9.29792 14.649 9.33746 14.6419 9.37994C14.6348 9.42242 14.64 9.46605 14.657 9.50564C14.6739 9.54523 14.7019 9.57913 14.7375 9.6033C14.7732 9.62747 14.815 9.6409 14.8581 9.642L17.0251 9.704L13.9761 10.342C13.837 10.3713 13.7109 10.4442 13.6161 10.55L13.4581 10.725C13.4229 10.7638 13.4002 10.8123 13.3929 10.8642C13.3856 10.9161 13.394 10.9689 13.4171 11.016C13.4401 11.063 13.4767 11.1021 13.5222 11.1281C13.5676 11.1541 13.6198 11.1659 13.6721 11.162L16.7421 10.941L13.1421 11.639C12.9559 11.6749 12.7858 11.7687 12.6561 11.907L12.3101 12.276C12.2571 12.3325 12.2228 12.4041 12.212 12.4808C12.2012 12.5575 12.2144 12.6357 12.2498 12.7047C12.2851 12.7737 12.3409 12.83 12.4095 12.8661C12.4782 12.9021 12.5562 12.916 12.6331 12.906L16.9441 12.339C17.0283 12.3256 17.1144 12.3452 17.1846 12.3936C17.2548 12.442 17.3036 12.5155 17.3211 12.599C17.3279 12.6405 17.3265 12.6829 17.3168 12.7238C17.3072 12.7646 17.2895 12.8032 17.2649 12.8373C17.2402 12.8713 17.2091 12.9001 17.1733 12.922C17.1374 12.944 17.0976 12.9586 17.0561 12.965L10.8381 13.935C10.6891 13.9584 10.555 14.0387 10.4641 14.159C10.4046 14.2376 10.366 14.33 10.352 14.4276C10.338 14.5251 10.349 14.6247 10.384 14.7168C10.419 14.809 10.4768 14.8907 10.552 14.9544C10.6272 15.0181 10.7174 15.0617 10.8141 15.081L16.6501 16.248V16.977C16.65 17.3745 16.4921 17.7558 16.2111 18.037L15.3011 18.947H20.7001L19.7901 18.037C19.5087 17.756 19.3504 17.3747 19.3501 16.977V16.248Z",
  fill: "#73AF00"
}));
const ForwardRef = forwardRef(LebanonIcon);
export default ForwardRef;