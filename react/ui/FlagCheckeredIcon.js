import * as React from "react";
import { forwardRef } from "react";
const FlagCheckeredIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 14 16",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.599091 16C0.767257 16 0.909147 15.9402 1.02476 15.8206C1.14038 15.701 1.19818 15.5569 1.19818 15.3884V10.8542C1.29803 10.8107 1.52663 10.7373 1.88398 10.634C2.24659 10.5253 2.71693 10.4709 3.295 10.4709C4.02547 10.4709 4.69813 10.5471 5.31299 10.6993C5.9331 10.8461 6.53219 11.0173 7.11026 11.213C7.68833 11.4033 8.27692 11.5746 8.87601 11.7268C9.4751 11.8736 10.1216 11.947 10.8152 11.947C11.2251 11.947 11.5615 11.9334 11.8242 11.9062C12.087 11.8736 12.3156 11.8274 12.51 11.7676C12.7045 11.7023 12.9015 11.6235 13.1012 11.5311C13.3745 11.406 13.5927 11.2321 13.7556 11.0092C13.9185 10.7808 14 10.4791 14 10.104V1.82671C14 1.60381 13.9212 1.43255 13.7635 1.31295C13.6059 1.19334 13.4113 1.13354 13.1801 1.13354C12.9856 1.13354 12.694 1.19062 12.3051 1.30479C11.9215 1.41896 11.3907 1.47604 10.7128 1.47604C10.0191 1.47604 9.37262 1.40265 8.77353 1.25586C8.17444 1.10364 7.58586 0.929664 7.00779 0.733945C6.42972 0.538226 5.83063 0.366972 5.21052 0.220183C4.59566 0.0733945 3.923 0 3.19252 0C2.78262 0 2.44366 0.0163099 2.17565 0.0489297C1.91289 0.0761128 1.68429 0.122324 1.48984 0.187564C1.2954 0.247367 1.09833 0.323479 0.898637 0.415902C0.630622 0.540945 0.412532 0.717635 0.244366 0.945973C0.0814554 1.16888 0 1.46517 0 1.83486V15.3884C0 15.5515 0.057807 15.6928 0.173421 15.8124C0.29429 15.9375 0.43618 16 0.599091 16ZM1.19818 7.12742V4.3629C1.25073 4.22698 1.44255 4.08563 1.77362 3.93884C2.1047 3.79205 2.57767 3.71865 3.19252 3.71865C3.31865 3.71865 3.46054 3.72409 3.61819 3.73496C3.78111 3.7404 3.93088 3.75127 4.06751 3.76758V1.28033C4.59829 1.34013 5.10278 1.44071 5.58101 1.58206C6.06448 1.71797 6.54796 1.85933 7.03144 2.00612V4.49337C7.52017 4.65104 8.00102 4.78967 8.47398 4.90928C8.95221 5.02888 9.45677 5.11315 9.98754 5.16208V2.67482C10.1032 2.68569 10.2214 2.69385 10.3423 2.69929C10.4631 2.70472 10.5866 2.70744 10.7128 2.70744C11.1437 2.70744 11.5352 2.68298 11.8873 2.63405C12.2394 2.58512 12.5468 2.5226 12.8096 2.44648V4.93374C12.6151 4.98811 12.334 5.04519 11.9661 5.10499C11.6035 5.1648 11.1857 5.1947 10.7128 5.1947C10.5919 5.1947 10.4684 5.19198 10.3423 5.18654C10.2214 5.17567 10.1032 5.16752 9.98754 5.16208V7.92661C10.1032 7.93748 10.2161 7.94563 10.3265 7.95107C10.4421 7.95651 10.5709 7.95923 10.7128 7.95923C11.1437 7.95923 11.5352 7.93476 11.8873 7.88583C12.2394 7.8369 12.5468 7.77438 12.8096 7.69827V10.0714C12.757 10.2073 12.5652 10.3486 12.2341 10.4954C11.9031 10.6422 11.4301 10.7156 10.8152 10.7156C10.6733 10.7156 10.5341 10.7129 10.3974 10.7074C10.2608 10.6966 10.1242 10.683 9.98754 10.6667V7.92661C9.63545 7.88855 9.29642 7.83962 8.9706 7.77982C8.65003 7.71458 8.32947 7.64118 8.0089 7.55963C7.69359 7.47265 7.36777 7.37207 7.03144 7.2579V9.92457C6.57424 9.78321 6.1039 9.65002 5.62042 9.52497C5.13694 9.39993 4.61931 9.31295 4.06751 9.26402V6.53211C3.91511 6.5158 3.77848 6.50493 3.65761 6.49949C3.53674 6.48862 3.38171 6.48318 3.19252 6.48318C2.57767 6.48318 2.1047 6.55657 1.77362 6.70336C1.44255 6.85015 1.25073 6.99151 1.19818 7.12742ZM4.06751 6.53211C4.61405 6.59735 5.11329 6.69521 5.56524 6.82569C6.01719 6.95617 6.50592 7.10024 7.03144 7.2579V4.49337C6.53745 4.34115 6.0566 4.19708 5.58889 4.06116C5.12118 3.91981 4.61405 3.82195 4.06751 3.76758V6.53211Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(FlagCheckeredIcon);
export default ForwardRef;