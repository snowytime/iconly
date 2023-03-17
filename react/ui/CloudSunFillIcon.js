import * as React from "react";
import { forwardRef } from "react";
const CloudSunFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 23 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M3.30953 16H11.8968C12.6534 16 13.3333 15.8252 13.9365 15.4757C14.545 15.1314 15.0265 14.6627 15.381 14.0695C15.7355 13.4763 15.9127 12.8117 15.9127 12.0755C15.9127 11.3446 15.7302 10.6905 15.3651 10.1132C15 9.53062 14.5027 9.06984 13.873 8.73088C13.2487 8.38663 12.5423 8.21185 11.754 8.20655C11.4471 7.62926 11.0661 7.13141 10.6111 6.71301C10.1614 6.28931 9.6508 5.96624 9.07937 5.74379C8.50794 5.51605 7.89419 5.40218 7.2381 5.40218C6.5926 5.40218 5.97884 5.5187 5.39683 5.75174C4.82011 5.98477 4.30424 6.31314 3.84921 6.73684C3.39418 7.15525 3.02381 7.64515 2.7381 8.20655C2.45238 8.76796 2.27778 9.37438 2.21429 10.0258C1.55291 10.2218 1.01852 10.5846 0.611112 11.1142C0.203704 11.6438 0 12.2661 0 12.9811C0 13.569 0.137566 14.0907 0.412699 14.5462C0.687831 15.0017 1.07407 15.3565 1.57143 15.6107C2.06878 15.8702 2.64815 16 3.30953 16ZM16.8254 11.6465C17.4074 11.2493 17.8651 10.7594 18.1984 10.1768C18.537 9.58888 18.7063 8.94273 18.7063 8.23833C18.7063 7.51274 18.5317 6.85336 18.1825 6.26018C17.8333 5.6617 17.3598 5.18504 16.7619 4.83019C16.1693 4.47534 15.5106 4.29791 14.7857 4.29791C14.0661 4.29791 13.4101 4.47534 12.8175 4.83019C12.2302 5.18504 11.7725 5.64846 11.4445 6.22046C11.6085 6.39523 11.7619 6.57795 11.9048 6.76862C12.0476 6.95929 12.1799 7.17114 12.3016 7.40417C13.1746 7.47302 13.9365 7.69282 14.5873 8.06356C15.2381 8.429 15.754 8.9189 16.1349 9.53327C16.5212 10.1423 16.7513 10.8467 16.8254 11.6465ZM10.1825 4.56802C10.3148 4.70043 10.4736 4.76663 10.6587 4.76663C10.8439 4.76134 10.9974 4.69513 11.1191 4.56802C11.2407 4.44091 11.3016 4.28732 11.3016 4.10725C11.3069 3.92718 11.246 3.77359 11.1191 3.64647L9.89683 2.42304C9.76985 2.29593 9.61641 2.23237 9.43651 2.23237C9.25662 2.23237 9.10318 2.29593 8.9762 2.42304C8.84921 2.55015 8.78307 2.70639 8.77778 2.89176C8.77778 3.07183 8.84392 3.22542 8.9762 3.35253L10.1825 4.56802ZM14.7857 3.0427C14.9656 3.0427 15.1191 2.9765 15.246 2.84409C15.3783 2.71168 15.4445 2.55809 15.4445 2.38332V0.659384C15.4445 0.479312 15.3783 0.32572 15.246 0.19861C15.1191 0.0662032 14.9656 0 14.7857 0C14.6058 0 14.4497 0.0662032 14.3175 0.19861C14.1905 0.32572 14.127 0.479312 14.127 0.659384V2.38332C14.127 2.55809 14.1905 2.71168 14.3175 2.84409C14.4497 2.9765 14.6058 3.0427 14.7857 3.0427ZM20.627 8.89772H22.3492C22.5291 8.89772 22.6825 8.83416 22.8095 8.70705C22.9365 8.57994 23 8.4237 23 8.23833C23 8.05826 22.9365 7.90467 22.8095 7.77756C22.6825 7.64515 22.5291 7.57895 22.3492 7.57895H20.627C20.4524 7.57895 20.2989 7.64515 20.1667 7.77756C20.0344 7.90467 19.9683 8.05826 19.9683 8.23833C19.9683 8.4237 20.0344 8.57994 20.1667 8.70705C20.2989 8.83416 20.4524 8.89772 20.627 8.89772ZM18.4524 4.56802C18.5741 4.69513 18.7275 4.76134 18.9127 4.76663C19.1032 4.76663 19.2619 4.70043 19.3889 4.56802L20.6032 3.35253C20.7302 3.22542 20.7936 3.07183 20.7936 2.89176C20.7936 2.70639 20.7302 2.55015 20.6032 2.42304C20.4762 2.29593 20.3227 2.23237 20.1429 2.23237C19.963 2.23237 19.8095 2.29593 19.6825 2.42304L18.4524 3.64647C18.3254 3.77359 18.2619 3.92718 18.2619 4.10725C18.2672 4.28732 18.3307 4.44091 18.4524 4.56802ZM19.6825 14.0695C19.8095 14.1966 19.963 14.2575 20.1429 14.2522C20.3227 14.2522 20.4762 14.1887 20.6032 14.0616C20.7302 13.9345 20.7936 13.7809 20.7936 13.6008C20.7936 13.4154 20.7302 13.2618 20.6032 13.14L19.373 11.9245C19.246 11.7974 19.0926 11.7339 18.9127 11.7339C18.7328 11.7339 18.5794 11.7974 18.4524 11.9245C18.3254 12.0516 18.2619 12.2079 18.2619 12.3932C18.2619 12.5733 18.3254 12.7269 18.4524 12.854L19.6825 14.0695Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CloudSunFillIcon);
export default ForwardRef;