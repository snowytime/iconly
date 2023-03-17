import * as React from "react";
import { forwardRef } from "react";
const BrainIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 21 17",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 7.91591C0 8.85353 0.207447 9.6733 0.622341 10.3752C1.03723 11.072 1.61968 11.6151 2.36968 12.0045C3.11968 12.3888 3.99201 12.5809 4.98669 12.5809C5.96542 12.5809 6.82446 12.4067 7.56382 12.0583C8.30318 11.7099 8.87765 11.2232 9.28722 10.5981C9.6968 9.9679 9.90159 9.23523 9.90159 8.40009C9.90159 7.87749 9.81116 7.40868 9.63031 6.99367C9.44946 6.57866 9.19946 6.24051 8.88031 5.9792C8.73137 5.86136 8.60371 5.77939 8.49733 5.73327C8.39627 5.68716 8.27659 5.6641 8.13829 5.6641C7.95212 5.6641 7.80052 5.71534 7.6835 5.81781C7.5718 5.91516 7.51595 6.04069 7.51595 6.19439C7.51595 6.32248 7.53988 6.42752 7.58775 6.50949C7.63563 6.58635 7.70478 6.66064 7.7952 6.73237C7.88563 6.8041 7.99201 6.89376 8.11435 7.00136C8.28456 7.16019 8.41488 7.35744 8.50531 7.59313C8.59573 7.82369 8.64095 8.08499 8.64095 8.37703C8.64095 8.97137 8.48935 9.49141 8.18616 9.93716C7.88297 10.3829 7.45744 10.7313 6.90956 10.9824C6.36701 11.2283 5.73403 11.3513 5.01063 11.3513C4.26595 11.3513 3.61435 11.2078 3.05584 10.9209C2.49733 10.634 2.06117 10.2318 1.74734 9.71429C1.43883 9.19681 1.28458 8.59479 1.28458 7.90823C1.28458 7.31389 1.43085 6.75542 1.72341 6.23282C2.01596 5.71022 2.41754 5.29008 2.92818 4.97242L2.2899 3.90416C1.81649 4.18596 1.40692 4.53692 1.06117 4.95705C0.720745 5.37719 0.457447 5.84087 0.271277 6.3481C0.0904256 6.85021 0 7.37281 0 7.91591ZM2.15426 3.91184C2.15426 4.48568 2.28458 4.99292 2.54521 5.43354C2.80585 5.87417 3.17286 6.22001 3.64626 6.47107C4.12499 6.72212 4.69148 6.84765 5.34573 6.84765C5.51594 6.84765 5.66488 6.78873 5.79254 6.67089C5.9202 6.54792 5.98403 6.4019 5.98403 6.23282C5.98403 6.06374 5.9202 5.91772 5.79254 5.79476C5.66488 5.67179 5.51594 5.61031 5.34573 5.61031C4.95211 5.61031 4.61169 5.53858 4.32446 5.39512C4.04254 5.24653 3.82446 5.04415 3.6702 4.78797C3.51594 4.5318 3.43882 4.23975 3.43882 3.91184C3.43882 3.54807 3.53456 3.22785 3.72605 2.95118C3.91754 2.66938 4.17552 2.44907 4.49999 2.29024C4.82978 2.1314 5.20477 2.05199 5.62499 2.05199C5.91222 2.05199 6.20743 2.0981 6.51063 2.19033C6.81914 2.27743 7.11701 2.41576 7.40424 2.60533L8.15424 1.59855C7.75531 1.33213 7.34041 1.13487 6.90956 1.00678C6.47871 0.878692 6.05318 0.814647 5.63297 0.814647C4.98935 0.814647 4.40424 0.94786 3.87765 1.21429C3.35105 1.47559 2.93085 1.83936 2.61702 2.30561C2.30851 2.76673 2.15426 3.30214 2.15426 3.91184ZM6.4069 3.70434C6.39626 3.90416 6.45212 4.06555 6.57446 4.18852C6.70212 4.31148 6.85637 4.37297 7.03722 4.37297C7.21275 4.37297 7.35903 4.31917 7.47605 4.21157C7.59839 4.10398 7.66488 3.95283 7.67552 3.75814C7.6968 3.2714 7.82446 2.83846 8.0585 2.45931C8.29254 2.07505 8.60903 1.77532 9.00797 1.56013C9.40691 1.33981 9.86435 1.22966 10.3803 1.22966C10.8484 1.22966 11.2713 1.33981 11.6489 1.56013C12.0266 1.77532 12.2952 2.05967 12.4548 2.4132C12.4867 2.46956 12.5239 2.50286 12.5665 2.51311C12.6144 2.51823 12.6782 2.51055 12.758 2.49005C12.891 2.45419 13.0292 2.42857 13.1729 2.4132C13.3165 2.39271 13.4601 2.38246 13.6037 2.38246C14.0824 2.38758 14.5319 2.5003 14.9521 2.72061C15.3777 2.94093 15.7234 3.25347 15.9894 3.65823C16.2553 4.05787 16.3883 4.53436 16.3883 5.0877C16.3883 5.68716 16.2606 6.18927 16.0053 6.59403C15.75 6.99879 15.4229 7.34464 15.0239 7.63156C14.625 7.91848 14.2021 8.18746 13.7553 8.43852C13.3085 8.68445 12.8856 8.95087 12.4867 9.23779C12.0878 9.51959 11.7606 9.85775 11.5053 10.2523C11.25 10.6417 11.1223 11.131 11.1223 11.7202C11.1223 12.2786 11.2606 12.7628 11.5372 13.1727C11.8191 13.5775 12.1995 13.89 12.6782 14.1103C13.1569 14.3306 13.6941 14.4408 14.2899 14.4408C14.3856 14.4408 14.484 14.4382 14.5851 14.4331C14.6915 14.4331 14.7952 14.4305 14.8963 14.4254C14.9601 14.8609 15.0931 15.2734 15.2952 15.6627C15.5027 16.0573 15.7739 16.3775 16.109 16.6234C16.4495 16.8745 16.8511 17 17.3138 17C17.8138 17 18.25 16.8668 18.6223 16.6004C18.9947 16.3391 19.3032 15.9881 19.5479 15.5475C19.7926 15.1068 19.9761 14.6124 20.0984 14.0642C20.2207 13.516 20.2819 12.9575 20.2819 12.3888C20.2819 11.8918 20.2686 11.464 20.242 11.1053C20.2207 10.7467 20.1915 10.4111 20.1543 10.0986L18.8697 10.4444C18.9069 10.7518 18.9388 11.0592 18.9654 11.3666C18.992 11.6689 19.0053 12.0045 19.0053 12.3734C19.0053 12.9934 18.9308 13.5595 18.7819 14.0719C18.633 14.5842 18.4308 14.9941 18.1755 15.3015C17.9202 15.609 17.633 15.7627 17.3138 15.7627C16.984 15.7627 16.7154 15.6423 16.508 15.4014C16.3058 15.1606 16.1569 14.8635 16.0612 14.5099C15.9707 14.1615 15.9255 13.8183 15.9255 13.4801C15.9255 13.4442 15.9122 13.4135 15.8856 13.3879C15.8644 13.3623 15.8245 13.352 15.766 13.3571C15.6543 13.3571 15.5293 13.3571 15.391 13.3571C15.258 13.3571 15.141 13.3571 15.0399 13.3571C14.242 13.3571 13.6037 13.2291 13.125 12.9729C12.6463 12.7167 12.4069 12.2914 12.4069 11.6971C12.4069 11.2257 12.5346 10.8363 12.7899 10.5289C13.0452 10.2215 13.3723 9.94997 13.7713 9.71429C14.1702 9.4786 14.5931 9.24036 15.0399 8.99955C15.4867 8.75874 15.9096 8.47694 16.3085 8.15416C16.7074 7.82625 17.0346 7.41893 17.2899 6.93219C17.5452 6.44033 17.6729 5.8255 17.6729 5.0877C17.6729 4.49337 17.5665 3.95539 17.3537 3.47378C17.1463 2.99216 16.8617 2.57715 16.5 2.22875C16.1383 1.88035 15.7234 1.61392 15.2553 1.42948C14.7872 1.2399 14.2925 1.14512 13.7713 1.14512C13.6915 1.14512 13.5984 1.1528 13.492 1.16817C13.3856 1.17842 13.2766 1.19635 13.1649 1.22197C12.8457 0.842827 12.4415 0.54566 11.9521 0.33047C11.4681 0.110157 10.9468 0 10.3883 0C9.63297 0 8.9601 0.158831 8.36967 0.476492C7.78456 0.78903 7.31914 1.22453 6.97339 1.783C6.62765 2.33635 6.43882 2.97679 6.4069 3.70434ZM15.7899 11.2437C15.7899 11.4127 15.8511 11.5562 15.9734 11.6741C16.1011 11.7868 16.2553 11.8483 16.4362 11.8585C17.3457 11.9149 18.1436 11.7919 18.8298 11.4896C19.516 11.1822 20.0479 10.7288 20.4255 10.1293C20.8085 9.52984 21 8.81254 21 7.9774C21 7.30108 20.8431 6.68626 20.5293 6.13291C20.2154 5.57957 19.7739 5.12613 19.2048 4.7726C18.641 4.41395 17.9814 4.18596 17.2261 4.08861L17.0266 5.31826C17.8351 5.32851 18.484 5.57957 18.9734 6.07143C19.4681 6.55817 19.7154 7.19349 19.7154 7.9774C19.7154 8.84328 19.4149 9.51959 18.8138 10.0063C18.2128 10.4931 17.4202 10.7006 16.4362 10.6288C16.2553 10.6135 16.1011 10.6698 15.9734 10.7979C15.8511 10.926 15.7899 11.0746 15.7899 11.2437ZM11.6888 12.2428C11.4548 12.3247 11.2021 12.3862 10.9308 12.4272C10.6649 12.4631 10.4042 12.481 10.1489 12.481C9.6968 12.481 9.25531 12.4272 8.82446 12.3196C8.39892 12.212 8.01595 12.0634 7.67552 11.8739C7.33509 11.6792 7.07712 11.4512 6.90158 11.1899L5.84041 12.0199C6.26063 12.522 6.83243 12.9319 7.55584 13.2495C8.28456 13.5621 9.10371 13.7184 10.0133 13.7184C10.3378 13.7184 10.6808 13.6953 11.0425 13.6492C11.4042 13.598 11.7659 13.5211 12.1277 13.4186L11.6888 12.2428ZM9.12765 6.81691L9.5585 7.98508C10.5638 7.79551 11.3005 7.40868 11.7686 6.82459C12.2367 6.24051 12.4707 5.49759 12.4707 4.59584C12.4707 4.42676 12.4069 4.2833 12.2792 4.16546C12.1516 4.0425 12 3.98101 11.8245 3.98101C11.6489 3.98101 11.4973 4.0425 11.3697 4.16546C11.2473 4.2833 11.1862 4.42676 11.1862 4.59584C11.1862 5.22604 11.0292 5.72815 10.7154 6.10217C10.4069 6.47619 9.87765 6.71444 9.12765 6.81691Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(BrainIcon);
export default ForwardRef;