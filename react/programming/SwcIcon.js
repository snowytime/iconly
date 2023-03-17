import * as React from "react";
import { forwardRef } from "react";
const SwcIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 68 24",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M60.8986 23.7761C59.0819 23.7761 57.3695 23.0694 56.0818 21.7877L46.0513 11.8038C45.042 10.7992 44.3807 9.54518 44.144 8.18029C44.0048 7.38352 44.0118 6.56597 44.1649 5.7692H41.1996C40.4757 5.7692 40.1694 6.24726 40.0511 6.53133C39.9327 6.81539 39.8074 7.36966 40.3225 7.88237L44.6591 12.1988C45.6684 13.2034 46.3297 14.4574 46.5664 15.8223C46.7891 17.0833 46.636 18.3858 46.1418 19.5914C45.6406 20.79 44.8192 21.8154 43.7681 22.5567C42.6266 23.3535 41.2762 23.7761 39.8492 23.7761H39.71C37.8932 23.7761 36.1809 23.0694 34.8931 21.7877L33.9325 20.8316C33.4731 21.5036 32.9023 22.0856 32.2341 22.5498C31.0925 23.3466 29.7421 23.7692 28.3152 23.7692C26.4984 23.7692 24.786 23.0625 23.4983 21.7808L7.76691 6.12255C7.53024 5.88699 7.21701 5.76227 6.88985 5.76227C6.16593 5.76227 5.85965 6.24033 5.74132 6.5244C5.62299 6.80846 5.49769 7.36274 6.01279 7.87544L10.3494 12.1918C11.3587 13.1965 12.02 14.4505 12.2566 15.8154C12.4794 17.0764 12.3262 18.3789 11.832 19.5844C11.3308 20.7831 10.5095 21.8085 9.45838 22.5498C8.31681 23.3466 6.96642 23.7692 5.53946 23.7692H3.55563C2.01729 23.7692 0.771313 22.529 0.771313 20.9978C0.771313 19.4667 2.01729 18.2265 3.55563 18.2265H5.51161C6.23554 18.2265 6.54181 17.7484 6.66014 17.4644C6.77848 17.1803 6.90377 16.626 6.38867 16.1133L2.05906 11.8038C1.04974 10.7992 0.388469 9.54518 0.151802 8.18029C-0.0709431 6.91932 0.0821944 5.61678 0.576411 4.41123C1.07759 3.21262 1.89896 2.18722 2.95004 1.44588C4.09161 0.64911 5.44897 0.226477 6.87593 0.226477C8.6927 0.226477 10.4051 0.933175 11.6928 2.21493L27.4242 17.8731C27.6609 18.1087 27.9741 18.2334 28.3013 18.2334C29.0252 18.2334 29.3314 17.7553 29.4498 17.4713C29.5681 17.1872 29.6934 16.6329 29.1853 16.1272L17.9645 4.95858C16.8786 3.87775 16.8786 2.12486 17.9645 1.0371C19.0504 -0.0506591 20.8114 -0.0437306 21.9043 1.0371L33.1181 12.1988C33.1251 12.2057 33.1251 12.2057 33.132 12.2126L38.819 17.8731C39.0557 18.1087 39.3689 18.2334 39.6961 18.2334H39.8353C40.5592 18.2334 40.8655 17.7553 40.9838 17.4713C41.1022 17.1872 41.2274 16.6329 40.7123 16.1202L36.3827 11.8038C35.3734 10.7992 34.7121 9.54518 34.4755 8.18029C34.2527 6.91932 34.4059 5.61678 34.9001 4.41123C35.4013 3.21262 36.2226 2.18722 37.2737 1.44588C38.4153 0.64911 39.7726 0.226477 41.1996 0.226477H52.5387C54.0771 0.226477 55.3231 1.46666 55.3231 2.99784C55.3231 4.52902 54.0771 5.7692 52.5387 5.7692H50.8681C50.1442 5.7692 49.8379 6.24726 49.7196 6.53133C49.6013 6.81539 49.476 7.36966 49.9911 7.88237L60.0216 17.8662C60.2583 18.1018 60.5715 18.2265 60.8986 18.2265C61.5321 18.2265 62.0472 17.7138 62.0472 17.0833C62.0472 15.5521 63.2932 14.3119 64.8315 14.3119C66.3698 14.3119 67.6158 15.5521 67.6158 17.0833C67.6228 20.7761 64.6018 23.7761 60.8986 23.7761Z",
  fill: "url(#paint0_linear_571_495)"
}), /*#__PURE__*/React.createElement("path", {
  d: "M60.8987 21.3512C59.7292 21.3512 58.6294 20.9008 57.8011 20.0764L47.7706 10.0925C46.4968 8.82463 46.1348 7.00246 46.8239 5.34657C47.1789 4.5013 47.7567 3.81539 48.4736 3.35119H41.1996C39.6822 3.35119 38.3805 4.21724 37.7958 5.60985C37.2111 7.00246 37.5243 8.53364 38.5963 9.60061L42.9328 13.917C44.2067 15.1849 44.5686 17.0071 43.8795 18.663C43.1904 20.3189 41.6381 21.3512 39.8353 21.3512H39.6961C38.5267 21.3512 37.4269 20.9008 36.5985 20.0764L32.5961 16.0925C32.777 16.9309 32.6935 17.8177 32.3455 18.663C31.6564 20.3189 30.1041 21.3512 28.3013 21.3512C27.1318 21.3512 26.032 20.9008 25.2037 20.0764L9.47231 4.41816C8.77623 3.72532 7.85044 3.34426 6.86897 3.34426C5.35152 3.34426 4.04985 4.21031 3.46514 5.60292C2.88739 6.99553 3.19367 8.52671 4.26563 9.59368L8.60221 13.9101C9.87603 15.178 10.238 17.0001 9.54887 18.656C8.85976 20.3119 7.3075 21.3443 5.50465 21.3443H3.55563C3.36073 21.3443 3.20759 21.1918 3.20759 20.9978C3.20759 20.8038 3.36073 20.6514 3.55563 20.6514H5.51161C7.02907 20.6514 8.33074 19.7854 8.91544 18.3928C9.50015 17.0001 9.18691 15.469 8.11495 14.402L3.77838 10.0856C2.50455 8.82463 2.14259 7.00246 2.83171 5.34657C3.52083 3.68375 5.06612 2.65142 6.87593 2.65142C8.04534 2.65142 9.14515 3.10177 9.97348 3.92625L25.7049 19.5844C26.401 20.2773 27.3267 20.6583 28.3082 20.6583C29.8257 20.6583 31.1273 19.7923 31.712 18.3997C32.2898 17.0071 31.9905 15.4828 30.9185 14.4159L19.6908 3.24726C19.5515 3.10869 19.5515 2.89391 19.6908 2.75535C19.83 2.61678 20.0458 2.61678 20.185 2.75535L37.0927 19.5844C37.7888 20.2773 38.7146 20.6583 39.6961 20.6583H39.8353C41.3527 20.6583 42.6544 19.7923 43.2391 18.3997C43.8169 17.0071 43.5106 15.4759 42.4386 14.4089L38.1021 10.0925C36.8282 8.82463 36.4663 7.00246 37.1554 5.34657C37.8445 3.69068 39.3968 2.65835 41.1996 2.65835H52.5387C52.7336 2.65835 52.8868 2.81077 52.8868 3.00477C52.8868 3.19876 52.7336 3.35119 52.5387 3.35119H50.8681C49.3507 3.35119 48.049 4.21724 47.4643 5.60985C46.8866 7.00246 47.1928 8.53364 48.2648 9.60061L58.2953 19.5844C58.9914 20.2773 59.9172 20.6583 60.8987 20.6583C62.8755 20.6583 64.4835 19.0579 64.4835 17.0902C64.4835 16.8962 64.6366 16.7438 64.8315 16.7438C65.0264 16.7438 65.1795 16.8962 65.1795 17.0902C65.1865 19.4389 63.2653 21.3512 60.8987 21.3512Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "paint0_linear_571_495",
  x1: 0.0518732,
  y1: 12.0035,
  x2: 67.6194,
  y2: 12.0035,
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  stopColor: "#FFA588"
}), /*#__PURE__*/React.createElement("stop", {
  offset: 0.271,
  stopColor: "#FCB371"
}), /*#__PURE__*/React.createElement("stop", {
  offset: 0.8357,
  stopColor: "#F4D837"
}), /*#__PURE__*/React.createElement("stop", {
  offset: 1,
  stopColor: "#F1E425"
}))));
const ForwardRef = forwardRef(SwcIcon);
export default ForwardRef;