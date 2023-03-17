import * as React from "react";
import { forwardRef } from "react";
const CarrotIcon = ({
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
  d: "M12.7951 4.7229C12.9983 4.59228 13.1989 4.39635 13.3969 4.13511C13.5948 3.86865 13.7746 3.56823 13.9361 3.23384C14.1028 2.89946 14.2357 2.55724 14.3346 2.20718C14.4336 1.85712 14.4909 1.52796 14.5066 1.2197C14.5222 0.906219 14.4831 0.642369 14.3893 0.428154C14.2956 0.21394 14.1341 0.0780963 13.9048 0.020624C13.6652 -0.0316235 13.4542 0.0153993 13.2718 0.161692C13.0895 0.307985 12.9358 0.524812 12.8107 0.812173C12.6857 1.09431 12.5893 1.41563 12.5216 1.77614C12.4591 2.13665 12.4252 2.50238 12.42 2.87334C12.42 3.24429 12.4487 3.59435 12.506 3.92351C12.5685 4.24745 12.6649 4.51391 12.7951 4.7229ZM12.9827 5.02855C13.2848 5.02855 13.6261 4.9554 14.0064 4.80911C14.3867 4.66281 14.7723 4.46689 15.163 4.22132C15.5538 3.97053 15.9185 3.69362 16.2571 3.39059C16.5957 3.08233 16.8745 2.76884 17.0933 2.45013C17.3121 2.13142 17.4397 1.82578 17.4762 1.53319C17.5179 1.2406 17.4319 0.987203 17.2183 0.772988C17.0047 0.558773 16.752 0.472565 16.4603 0.514363C16.1737 0.550936 15.8716 0.678942 15.5538 0.898382C15.236 1.11782 14.9234 1.39735 14.616 1.73695C14.3138 2.07656 14.0377 2.4423 13.7876 2.83415C13.5427 3.22601 13.3474 3.61525 13.2015 4.00188C13.0556 4.38329 12.9827 4.72551 12.9827 5.02855ZM13.2875 5.2088C13.4958 5.33942 13.7616 5.43608 14.0846 5.49877C14.4076 5.56147 14.754 5.59282 15.1239 5.59282C15.4991 5.58759 15.8664 5.55363 16.2258 5.49094C16.5853 5.42301 16.9057 5.32636 17.1871 5.20096C17.4736 5.07557 17.6898 4.92405 17.8357 4.74641C17.9868 4.56354 18.0337 4.35455 17.9764 4.11944C17.9191 3.88433 17.7836 3.71975 17.57 3.6257C17.3564 3.52643 17.0959 3.48463 16.7885 3.50031C16.4811 3.51076 16.1529 3.56823 15.8038 3.67272C15.4548 3.77199 15.1109 3.90261 14.7723 4.06458C14.4388 4.22655 14.1393 4.4068 13.8736 4.60534C13.6131 4.80388 13.4177 5.00504 13.2875 5.2088ZM13.0999 4.18214C12.5997 3.67534 12.0709 3.32528 11.5135 3.13196C10.956 2.93865 10.3934 2.89424 9.82547 2.99873C9.26281 3.10323 8.72098 3.35401 8.19999 3.75109C7.679 4.14295 7.2075 4.67588 6.7855 5.34987L0.260102 15.7497C0.041286 16.105 -0.0394674 16.4342 0.0178414 16.7372C0.0803602 17.0455 0.228842 17.3145 0.463288 17.5444C0.661264 17.7482 0.908734 17.8893 1.2057 17.9676C1.50787 18.0512 1.84912 17.9729 2.22944 17.7325L12.6232 11.1885C13.2901 10.7705 13.8163 10.3029 14.2018 9.78568C14.5925 9.26321 14.84 8.72244 14.9442 8.1634C15.0484 7.59912 15.0041 7.03485 14.8113 6.47058C14.6186 5.9063 14.2721 5.37077 13.772 4.86397L13.0999 4.18214ZM12.2715 5.02071L12.9358 5.70254C13.4307 6.20412 13.7277 6.71353 13.8267 7.23078C13.9257 7.7428 13.8241 8.2496 13.5219 8.75118C13.2249 9.24753 12.7222 9.72037 12.0136 10.1697L1.63551 16.7059C1.54695 16.7581 1.46619 16.7712 1.39325 16.745C1.32032 16.7189 1.26822 16.6693 1.23696 16.5961C1.21091 16.523 1.22393 16.4446 1.27603 16.361L7.80143 5.95333C8.24948 5.23754 8.72358 4.72812 9.22373 4.42509C9.72909 4.11683 10.2397 4.01495 10.7554 4.11944C11.2712 4.21871 11.7766 4.51913 12.2715 5.02071ZM9.82547 7.46589C9.92446 7.36662 9.97135 7.24906 9.96614 7.11322C9.96614 6.97215 9.91404 6.84937 9.80984 6.74488L7.98899 4.94234L7.27783 5.68687L9.09869 7.47373C9.20289 7.57822 9.32533 7.63047 9.46599 7.63047C9.60666 7.62525 9.72649 7.57039 9.82547 7.46589ZM8.0515 8.57093C8.15049 8.47166 8.19999 8.35149 8.19999 8.21042C8.2052 8.06935 8.1531 7.94657 8.04369 7.84207L6.59794 6.42355L5.88679 7.16024L7.32472 8.57093C7.42892 8.67542 7.54875 8.72767 7.68421 8.72767C7.82487 8.72767 7.94731 8.67542 8.0515 8.57093ZM6.30098 11.8547C6.20199 11.954 6.1525 12.0741 6.1525 12.2152C6.1525 12.3563 6.2046 12.479 6.30879 12.5835L7.58261 13.8218L8.47351 13.2654L7.02776 11.8468C6.92356 11.7423 6.80113 11.6927 6.66046 11.6979C6.525 11.6979 6.40518 11.7502 6.30098 11.8547ZM4.90994 13.3124C4.81095 13.4169 4.76145 13.5397 4.76145 13.6807C4.76145 13.8166 4.81355 13.9367 4.91775 14.0412L5.80083 14.9268L6.70735 14.3704L5.63672 13.3124C5.53252 13.2079 5.41009 13.1583 5.26942 13.1635C5.12875 13.1635 5.00892 13.2131 4.90994 13.3124Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CarrotIcon);
export default ForwardRef;