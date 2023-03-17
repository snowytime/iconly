import * as React from "react";
import { forwardRef } from "react";
const GoForward10Icon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 17 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.570312 9.23624C0.570312 10.2968 0.779463 11.2964 1.19776 12.2352C1.61606 13.1739 2.19384 14.0011 2.9311 14.7165C3.66835 15.427 4.51803 15.9851 5.48012 16.3911C6.44744 16.797 7.4775 17 8.57031 17C9.66312 17 10.6906 16.797 11.6527 16.3911C12.62 15.9851 13.4723 15.427 14.2095 14.7165C14.9468 14.0011 15.5246 13.1739 15.9429 12.2352C16.3612 11.2964 16.5703 10.2968 16.5703 9.23624C16.5703 8.38375 16.4318 7.56932 16.1546 6.79294C15.8775 6.01149 15.488 5.29601 14.986 4.64649C14.484 3.9919 13.8958 3.42865 13.2213 2.95673C13.0487 2.82987 12.8684 2.7842 12.6801 2.81972C12.4919 2.85017 12.3481 2.94151 12.2487 3.09374C12.1494 3.25104 12.1206 3.41342 12.1625 3.58088C12.2095 3.74833 12.3141 3.89041 12.4762 4.00712C13.0304 4.39277 13.5141 4.85454 13.9272 5.39242C14.3402 5.9303 14.6618 6.52654 14.8919 7.18113C15.1219 7.83065 15.237 8.51568 15.237 9.23624C15.237 10.1344 15.0644 10.9767 14.7193 11.7633C14.3795 12.5447 13.9036 13.2323 13.2919 13.826C12.6853 14.4146 11.9768 14.8738 11.1664 15.2037C10.3612 15.5386 9.4958 15.706 8.57031 15.706C7.64482 15.706 6.77946 15.5386 5.97423 15.2037C5.16901 14.8738 4.46051 14.4146 3.84874 13.826C3.24221 13.2323 2.76639 12.5447 2.42129 11.7633C2.08142 10.9767 1.91149 10.1344 1.91149 9.23624C1.91149 8.46494 2.03959 7.73677 2.2958 7.05173C2.55201 6.36162 2.91018 5.73748 3.37031 5.1793C3.83567 4.62112 4.38208 4.1492 5.00953 3.76355C5.63698 3.3779 6.31933 3.10389 7.05659 2.94151V4.02996C7.05659 4.2989 7.13763 4.46889 7.29972 4.53993C7.46704 4.6059 7.65789 4.5653 7.87227 4.41815L10.3742 2.71316C10.552 2.59645 10.6409 2.45691 10.6409 2.29453C10.6461 2.12708 10.5572 1.98246 10.3742 1.86067L7.88012 0.15569C7.66051 0.00345978 7.46704 -0.037135 7.29972 0.0339059C7.13763 0.0998725 7.05659 0.269863 7.05659 0.543878V1.6171C6.14155 1.79471 5.28927 2.11439 4.49972 2.57616C3.71541 3.03285 3.02783 3.60371 2.43698 4.28875C1.85136 4.96871 1.39384 5.72987 1.06443 6.57221C0.735018 7.41455 0.570312 8.30256 0.570312 9.23624ZM6.38208 12.3494C6.53371 12.3494 6.65397 12.3037 6.74286 12.2123C6.83698 12.1159 6.88404 11.9865 6.88404 11.8242V7.03651C6.88404 6.84876 6.83437 6.7016 6.73502 6.59504C6.6409 6.48341 6.50495 6.42759 6.32718 6.42759C6.21737 6.42759 6.11803 6.44789 6.02914 6.48848C5.94025 6.524 5.8226 6.58743 5.6762 6.67877L4.59384 7.38664C4.50495 7.44753 4.43959 7.5135 4.39776 7.58454C4.35593 7.65558 4.33502 7.73677 4.33502 7.82811C4.33502 7.95497 4.37946 8.06407 4.46835 8.15541C4.55724 8.24674 4.66443 8.29241 4.78992 8.29241C4.86312 8.29241 4.92325 8.2848 4.97031 8.26958C5.0226 8.24928 5.08796 8.21122 5.16639 8.15541L5.91933 7.6226H5.8958V11.8242C5.8958 11.9815 5.94025 12.1083 6.02914 12.2047C6.11803 12.3012 6.23567 12.3494 6.38208 12.3494ZM10.4684 12.4407C10.9023 12.4407 11.2814 12.3164 11.6056 12.0677C11.9298 11.814 12.1808 11.4613 12.3585 11.0097C12.5363 10.5581 12.6252 10.0278 12.6252 9.41892C12.6252 8.80492 12.5363 8.26958 12.3585 7.81289C12.1808 7.35619 11.9298 7.00099 11.6056 6.74727C11.2814 6.49356 10.9023 6.3667 10.4684 6.3667C9.81999 6.3667 9.29711 6.64579 8.89972 7.20396C8.50757 7.75707 8.31149 8.49539 8.31149 9.41892C8.31149 10.3323 8.50757 11.0655 8.89972 11.6186C9.29711 12.1667 9.81999 12.4407 10.4684 12.4407ZM10.4684 11.5197C10.1233 11.5197 9.84613 11.3319 9.63698 10.9564C9.43306 10.5809 9.3311 10.0684 9.3311 9.41892C9.3311 8.75418 9.43306 8.23406 9.63698 7.85856C9.8409 7.47798 10.118 7.28769 10.4684 7.28769C10.8187 7.28769 11.0932 7.47544 11.2919 7.85094C11.4958 8.22645 11.5978 8.7491 11.5978 9.41892C11.5978 10.0684 11.4958 10.5809 11.2919 10.9564C11.088 11.3319 10.8135 11.5197 10.4684 11.5197Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(GoForward10Icon);
export default ForwardRef;