import * as React from "react";
import { forwardRef } from "react";
const FleuronIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 15 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M1.34656 10.4109C1.34656 11.2664 1.50574 12.1142 1.82411 12.9543C2.14248 13.7944 2.62004 14.5571 3.25679 15.2426C3.89353 15.9281 4.68946 16.4744 5.64457 16.8815C6.59969 17.2938 7.71138 17.5 8.97965 17.5C9.71033 17.5 10.368 17.3969 10.9525 17.1908C11.5371 16.9898 11.999 16.714 12.3382 16.3636C12.6775 16.0131 12.8471 15.624 12.8471 15.1962C12.8471 14.8921 12.7401 14.637 12.5261 14.4309C12.3121 14.2196 12.0016 14.0907 11.5945 14.0443C11.4901 14.0289 11.3909 14.0443 11.297 14.0907C11.2082 14.1371 11.1534 14.2247 11.1326 14.3536C11.0647 14.8896 10.8586 15.3276 10.5141 15.6678C10.1748 16.008 9.7547 16.178 9.25365 16.178C8.89875 16.178 8.61691 16.0853 8.40814 15.8997C8.20459 15.7142 8.10282 15.4874 8.10282 15.2194C8.10282 14.9153 8.2333 14.6448 8.49426 14.4077C8.75522 14.1655 9.09186 13.9335 9.50418 13.7119C9.92171 13.4903 10.3627 13.2558 10.8272 13.0084C11.2918 12.761 11.7302 12.4801 12.1425 12.1658C12.56 11.8514 12.8993 11.4854 13.1602 11.068C13.4264 10.6505 13.5595 10.1558 13.5595 9.58367C13.5595 9.0219 13.4368 8.52713 13.1915 8.09936C12.9462 7.67159 12.6122 7.33659 12.1895 7.09436C11.7667 6.85213 11.2865 6.73101 10.749 6.73101C10.0026 6.73101 9.3476 6.92171 8.78393 7.30309C8.22547 7.68448 7.81315 8.19213 7.54697 8.82606C7.58351 8.19213 7.48956 7.65613 7.26514 7.21805C7.04071 6.77998 6.72756 6.44755 6.32568 6.22078C5.92902 5.99401 5.488 5.88063 5.00261 5.88063C4.20929 5.88063 3.54123 6.08936 2.99843 6.50682C2.45564 6.91913 2.04332 7.46802 1.76148 8.15348C1.48486 8.83894 1.34656 9.59141 1.34656 10.4109ZM2.52871 10.4109C2.52871 9.70479 2.62526 9.10179 2.81837 8.60186C3.01148 8.10194 3.28549 7.71798 3.6404 7.44998C3.9953 7.18198 4.42067 7.04798 4.91649 7.04798C5.33925 7.04798 5.69937 7.16136 5.99687 7.38813C6.29958 7.6149 6.53184 7.92156 6.69363 8.3081C6.86065 8.68948 6.95198 9.11725 6.96764 9.59141C6.97286 9.77179 7.03549 9.89548 7.15553 9.96248C7.27557 10.0295 7.40344 10.0475 7.53914 10.0166C7.68006 9.98052 7.78184 9.90064 7.84447 9.77694C8.17328 9.14817 8.59603 8.67917 9.11273 8.36994C9.63466 8.05556 10.1722 7.89836 10.7255 7.89836C11.0491 7.89836 11.3335 7.97052 11.5788 8.11483C11.8293 8.25398 12.0251 8.45756 12.166 8.72556C12.3069 8.9884 12.3773 9.30021 12.3773 9.66098C12.3773 10.0836 12.2443 10.4547 11.9781 10.7742C11.7171 11.0938 11.3805 11.3824 10.9682 11.6401C10.5558 11.8978 10.1174 12.1477 9.65292 12.39C9.19363 12.6322 8.75783 12.8873 8.34551 13.1553C7.93319 13.4181 7.59656 13.7171 7.3356 14.0521C7.07464 14.3819 6.94415 14.771 6.94415 15.2194C6.94415 15.405 6.97808 15.5802 7.04593 15.7451C7.11378 15.91 7.20772 16.0569 7.32777 16.1858C6.51879 16.0311 5.8142 15.7709 5.21399 15.405C4.61378 15.039 4.11534 14.5958 3.71868 14.0753C3.32203 13.5496 3.02453 12.9749 2.8262 12.3513C2.62787 11.7277 2.52871 11.0809 2.52871 10.4109ZM3.24113 1.89927C3.74217 1.89927 4.24322 2.02297 4.74426 2.27035C5.2453 2.51258 5.75939 2.81666 6.28653 3.18258C6.81367 3.54335 7.36691 3.9067 7.94624 4.27262C8.52557 4.63339 9.14144 4.93747 9.79384 5.18486C10.4462 5.42709 11.1508 5.5482 11.9076 5.5482C12.56 5.5482 13.1159 5.42709 13.5752 5.18486C14.0397 4.93747 14.392 4.60505 14.632 4.18759C14.8773 3.76497 15 3.29339 15 2.77285C15 2.51 14.9661 2.242 14.8982 1.96885C14.8304 1.69054 14.726 1.41739 14.5851 1.14939C14.4963 0.984463 14.3789 0.883962 14.2328 0.847885C14.0919 0.811808 13.9535 0.824693 13.8179 0.886539C13.6874 0.943232 13.5934 1.04116 13.536 1.18031C13.4786 1.31431 13.4995 1.4715 13.5986 1.65189C13.8231 2.0745 13.9353 2.48166 13.9353 2.87335C13.9353 3.35266 13.763 3.73662 13.4186 4.02524C13.0793 4.31385 12.5757 4.45816 11.9076 4.45816C11.2709 4.45816 10.6602 4.33705 10.0757 4.09482C9.49635 3.84743 8.92745 3.54335 8.369 3.18258C7.81576 2.81666 7.26253 2.45331 6.70929 2.09254C6.16127 1.72662 5.60021 1.42254 5.0261 1.18031C4.45198 0.932924 3.85699 0.809231 3.24113 0.809231C2.56263 0.809231 1.98069 0.940655 1.4953 1.2035C1.01514 1.46635 0.644572 1.81681 0.383612 2.25489C0.127871 2.68781 0 3.16197 0 3.67735C0 4.19789 0.127871 4.70297 0.383612 5.19259C0.467119 5.35751 0.581942 5.45801 0.728079 5.49409C0.874217 5.52501 1.01253 5.50955 1.14301 5.4477C1.27349 5.38586 1.36743 5.28793 1.42484 5.15393C1.48225 5.01993 1.46399 4.86532 1.37004 4.69009C1.27088 4.49424 1.1952 4.30355 1.14301 4.11801C1.09603 3.93247 1.07255 3.75466 1.07255 3.58458C1.07255 3.10012 1.25783 2.69812 1.62839 2.37858C2.00418 2.05904 2.54175 1.89927 3.24113 1.89927ZM7.05376 8.87244L7.54697 9.01933L8.14979 8.63279C8.2333 8.07617 8.37683 7.56336 8.58038 7.09436C8.78914 6.62536 9.00835 6.1744 9.238 5.74147C9.46764 5.3034 9.66336 4.86016 9.82516 4.41178C9.99217 3.95824 10.0757 3.4712 10.0757 2.95066C10.0757 2.49712 9.97912 2.08739 9.78601 1.72146C9.5929 1.35039 9.32933 1.05404 8.9953 0.832424C8.66649 0.610808 8.29332 0.5 7.87578 0.5C7.32255 0.5 6.85021 0.682962 6.45877 1.04889C6.06733 1.41481 5.86378 1.87608 5.84812 2.4327L6.8737 2.72647C6.87891 2.38631 6.97286 2.11316 7.15553 1.907C7.3382 1.6957 7.57829 1.59004 7.87578 1.59004C8.19415 1.59004 8.45512 1.71631 8.65866 1.96885C8.86743 2.21623 8.97182 2.5435 8.97182 2.95066C8.97182 3.36812 8.88309 3.78301 8.70564 4.19532C8.5334 4.60247 8.32724 5.03282 8.08716 5.48636C7.8523 5.9399 7.63309 6.4424 7.42954 6.99386C7.23121 7.54532 7.10595 8.17152 7.05376 8.87244Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(FleuronIcon);
export default ForwardRef;