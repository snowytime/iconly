import * as React from "react";
import { forwardRef } from "react";
const GoForward45Icon = ({
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
  d: "M0.570312 9.23624C0.570312 10.2968 0.779463 11.2964 1.19776 12.2352C1.61606 13.1739 2.19384 14.0011 2.9311 14.7165C3.66835 15.427 4.51803 15.9851 5.48012 16.3911C6.44744 16.797 7.4775 17 8.57031 17C9.66312 17 10.6906 16.797 11.6527 16.3911C12.62 15.9851 13.4723 15.427 14.2095 14.7165C14.9468 14.0011 15.5246 13.1739 15.9429 12.2352C16.3612 11.2964 16.5703 10.2968 16.5703 9.23624C16.5703 8.38375 16.4318 7.56932 16.1546 6.79294C15.8775 6.01149 15.488 5.29601 14.986 4.64649C14.484 3.9919 13.8958 3.42865 13.2213 2.95673C13.0487 2.82987 12.8684 2.7842 12.6801 2.81972C12.4919 2.85017 12.3481 2.94151 12.2487 3.09374C12.1494 3.25104 12.1206 3.41342 12.1625 3.58088C12.2095 3.74833 12.3141 3.89041 12.4762 4.00712C13.0304 4.39277 13.5141 4.85454 13.9272 5.39242C14.3402 5.9303 14.6618 6.52654 14.8919 7.18113C15.1219 7.83065 15.237 8.51568 15.237 9.23624C15.237 10.1344 15.0644 10.9767 14.7193 11.7633C14.3795 12.5447 13.9036 13.2323 13.2919 13.826C12.6853 14.4146 11.9768 14.8738 11.1664 15.2037C10.3612 15.5386 9.4958 15.706 8.57031 15.706C7.64482 15.706 6.77946 15.5386 5.97423 15.2037C5.16901 14.8738 4.46051 14.4146 3.84874 13.826C3.24221 13.2323 2.76639 12.5447 2.42129 11.7633C2.08142 10.9767 1.91149 10.1344 1.91149 9.23624C1.91149 8.46494 2.03959 7.73677 2.2958 7.05173C2.55201 6.36162 2.91018 5.73748 3.37031 5.1793C3.83567 4.62112 4.38208 4.1492 5.00953 3.76355C5.63698 3.3779 6.31933 3.10389 7.05659 2.94151V4.02996C7.05659 4.2989 7.13763 4.46889 7.29972 4.53993C7.46704 4.6059 7.65789 4.5653 7.87227 4.41815L10.3742 2.71316C10.552 2.59645 10.6409 2.45691 10.6409 2.29453C10.6461 2.12708 10.5572 1.98246 10.3742 1.86067L7.88012 0.15569C7.66051 0.00345978 7.46704 -0.037135 7.29972 0.0339059C7.13763 0.0998725 7.05659 0.269863 7.05659 0.543878V1.6171C6.14155 1.79471 5.28927 2.11439 4.49972 2.57616C3.71541 3.03285 3.02783 3.60371 2.43698 4.28875C1.85136 4.96871 1.39384 5.72987 1.06443 6.57221C0.735018 7.41455 0.570312 8.30256 0.570312 9.23624ZM6.90757 12.4255C7.23698 12.4255 7.40169 12.2352 7.40169 11.8546V11.2229H7.77816C7.9141 11.2229 8.02129 11.1848 8.09972 11.1087C8.18338 11.0275 8.22521 10.9209 8.22521 10.789C8.22521 10.6571 8.18338 10.553 8.09972 10.4769C8.02129 10.4008 7.9141 10.3627 7.77816 10.3627H7.40169V7.12785C7.40169 6.88935 7.32587 6.71429 7.17423 6.60265C7.02783 6.49102 6.84221 6.4352 6.61737 6.4352C6.40822 6.4352 6.23306 6.47833 6.09188 6.5646C5.95593 6.64579 5.82783 6.78787 5.70757 6.99084C5.56639 7.21919 5.41737 7.46022 5.26051 7.71394C5.10887 7.96765 4.95463 8.22645 4.79776 8.49031C4.6409 8.75418 4.48665 9.01551 4.33502 9.2743C4.18338 9.53309 4.03959 9.7792 3.90365 10.0126C3.8409 10.1243 3.79646 10.2257 3.77031 10.3171C3.7494 10.4033 3.73894 10.5023 3.73894 10.6139C3.73894 10.7966 3.79384 10.9438 3.90365 11.0554C4.01868 11.167 4.17816 11.2229 4.38208 11.2229H6.43698V11.8546C6.43698 12.2352 6.59384 12.4255 6.90757 12.4255ZM4.76639 10.3627V10.3399C5.03829 9.84263 5.31018 9.34788 5.58208 8.85567C5.8592 8.35838 6.13371 7.86109 6.40561 7.36381H6.43698V10.3627H4.76639ZM10.8919 12.4483C11.5402 12.4483 12.0605 12.2631 12.4527 11.8927C12.8501 11.5172 13.0487 11.0224 13.0487 10.4084C13.0487 9.85024 12.871 9.39101 12.5154 9.03073C12.1651 8.67045 11.7102 8.49031 11.1507 8.49031C10.905 8.49031 10.6618 8.54613 10.4213 8.65777C10.1808 8.7694 10.0108 8.92163 9.91149 9.11446H9.95071L10.0919 7.39425H12.437C12.552 7.39425 12.6514 7.35366 12.735 7.27247C12.8239 7.19128 12.8684 7.08472 12.8684 6.95278C12.8684 6.82592 12.8239 6.72444 12.735 6.64832C12.6514 6.56713 12.552 6.52654 12.437 6.52654H9.92718C9.5141 6.52654 9.29188 6.73712 9.26051 7.15829L9.08796 9.35042C9.07227 9.53817 9.11149 9.68025 9.20561 9.77666C9.29973 9.868 9.43044 9.91367 9.59776 9.91367C9.72848 9.91367 9.83306 9.89845 9.91149 9.868C9.98992 9.83755 10.084 9.78173 10.1938 9.70055C10.3455 9.56861 10.4867 9.47474 10.6174 9.41892C10.7481 9.35803 10.8919 9.32758 11.0487 9.32758C11.352 9.32758 11.5978 9.42907 11.786 9.63204C11.9742 9.82994 12.0684 10.0938 12.0684 10.4236C12.0684 10.7585 11.9585 11.0351 11.7389 11.2533C11.5246 11.4715 11.2553 11.5806 10.9311 11.5806C10.701 11.5806 10.4919 11.5222 10.3036 11.4055C10.1154 11.2837 9.96901 11.1239 9.86443 10.926C9.80691 10.8296 9.74156 10.756 9.66835 10.7053C9.59515 10.6494 9.51149 10.6215 9.41737 10.6215C9.28665 10.6215 9.17946 10.6621 9.0958 10.7433C9.01737 10.8245 8.97816 10.9311 8.97816 11.063C8.97816 11.1138 8.98338 11.1645 8.99384 11.2152C9.0043 11.266 9.01999 11.3167 9.0409 11.3675C9.14548 11.6415 9.35985 11.8901 9.68404 12.1134C10.0134 12.3367 10.4161 12.4483 10.8919 12.4483Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(GoForward45Icon);
export default ForwardRef;