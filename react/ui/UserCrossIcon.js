import * as React from "react";
import { forwardRef } from "react";
const UserCrossIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 20 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2.00573 15H12.2964C13.6335 15 14.3021 14.568 14.3021 13.7041C14.3021 13.1749 14.1384 12.6107 13.8109 12.0113C13.4834 11.412 13.0086 10.8477 12.3864 10.3186C11.7697 9.78402 11.0192 9.34935 10.1351 9.01458C9.25638 8.6798 8.26306 8.51242 7.15514 8.51242C6.04175 8.51242 5.04298 8.6798 4.15882 9.01458C3.28012 9.34935 2.52968 9.78402 1.90749 10.3186C1.29076 10.8477 0.818666 11.412 0.491199 12.0113C0.163733 12.6107 0 13.1749 0 13.7041C0 14.568 0.668577 15 2.00573 15ZM1.62096 13.777C1.5118 13.777 1.43266 13.7608 1.38354 13.7284C1.33988 13.696 1.31805 13.6366 1.31805 13.5502C1.31805 13.2208 1.44358 12.8402 1.69464 12.4082C1.95115 11.9708 2.32774 11.5497 2.8244 11.1447C3.32105 10.7397 3.93232 10.405 4.65821 10.1404C5.38409 9.87041 6.2164 9.73542 7.15514 9.73542C8.09387 9.73542 8.92346 9.87041 9.64388 10.1404C10.3698 10.405 10.981 10.7397 11.4777 11.1447C11.9743 11.5497 12.3482 11.9708 12.5993 12.4082C12.8558 12.8402 12.984 13.2208 12.984 13.5502C12.984 13.6366 12.9595 13.696 12.9104 13.7284C12.8667 13.7608 12.793 13.777 12.6893 13.777H1.62096ZM7.15514 7.5081C7.80461 7.5081 8.39678 7.33531 8.93164 6.98974C9.4665 6.64417 9.89221 6.18521 10.2088 5.61285C10.5308 5.0351 10.6918 4.39795 10.6918 3.7014C10.6918 3.01026 10.5335 2.38661 10.2169 1.83045C9.9004 1.2689 9.47469 0.823434 8.93983 0.49406C8.40497 0.164687 7.81007 0 7.15514 0C6.50566 0 5.91349 0.167387 5.37863 0.50216C4.84377 0.836933 4.41534 1.2851 4.09333 1.84665C3.77678 2.40821 3.6185 3.03186 3.6185 3.7176C3.6185 4.40875 3.77678 5.0432 4.09333 5.62095C4.41534 6.1933 4.84377 6.65227 5.37863 6.99784C5.91349 7.33801 6.50566 7.5081 7.15514 7.5081ZM7.15514 6.2851C6.75672 6.2851 6.38832 6.17171 6.04994 5.94492C5.71701 5.71274 5.44686 5.40227 5.23946 5.0135C5.03752 4.62473 4.93655 4.19276 4.93655 3.7176C4.93655 3.24784 5.03752 2.82667 5.23946 2.4541C5.4414 2.07613 5.70883 1.77646 6.04175 1.55508C6.38013 1.33369 6.75126 1.223 7.15514 1.223C7.56447 1.223 7.9356 1.33099 8.26852 1.54698C8.6069 1.76296 8.87434 2.05994 9.07082 2.43791C9.27275 2.81048 9.37372 3.23164 9.37372 3.7014C9.37372 4.17657 9.27275 4.61123 9.07082 5.0054C8.86888 5.39417 8.59872 5.70464 8.26034 5.93682C7.92741 6.16901 7.55901 6.2851 7.15514 6.2851Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.7454 6.94114C13.9364 6.94114 14.0947 6.87365 14.2202 6.73866L16.537 4.43845L18.8702 6.73866C19.0012 6.87365 19.1568 6.94114 19.3369 6.94114C19.517 6.94114 19.6698 6.87635 19.7953 6.74676C19.9263 6.61717 19.9918 6.46328 19.9918 6.2851C19.9918 6.10691 19.9263 5.95302 19.7953 5.82343L17.4703 3.52322L19.8035 1.2068C19.9345 1.07721 20 0.926026 20 0.75324C20 0.575054 19.9345 0.423866 19.8035 0.299676C19.678 0.170086 19.5252 0.105292 19.3451 0.105292C19.1759 0.105292 19.0258 0.172786 18.8948 0.307775L16.537 2.61609L14.2038 0.315875C14.0838 0.186285 13.931 0.12149 13.7454 0.12149C13.5653 0.12149 13.4097 0.183585 13.2788 0.307775C13.1532 0.431965 13.0905 0.583153 13.0905 0.761339C13.0905 0.939525 13.156 1.09071 13.2869 1.2149L15.612 3.52322L13.2869 5.83153C13.156 5.95572 13.0905 6.10691 13.0905 6.2851C13.0905 6.46328 13.1532 6.61717 13.2788 6.74676C13.4097 6.87635 13.5653 6.94114 13.7454 6.94114Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(UserCrossIcon);
export default ForwardRef;