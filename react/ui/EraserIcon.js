import * as React from "react";
import { forwardRef } from "react";
const EraserIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 14 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.821133 10.6834L3.37883 13.2352C3.88309 13.7398 4.43154 13.9947 5.02418 13.9999C5.62202 14.0051 6.16787 13.7606 6.66173 13.2664L13.5239 6.39133C13.8514 6.06358 14.0099 5.69681 13.9995 5.29102C13.9943 4.88002 13.8306 4.51065 13.5083 4.18289L9.81207 0.491755C9.48456 0.164001 9.11546 0.000123868 8.70477 0.000123868C8.29409 -0.00507858 7.92499 0.153596 7.59748 0.476148L0.727559 7.33558C0.400048 7.66333 0.181708 8.0197 0.0725382 8.40468C-0.0314332 8.78446 -0.0236354 9.16944 0.0959318 9.55963C0.220698 9.94981 0.462431 10.3244 0.821133 10.6834ZM1.6555 9.84836C1.37478 9.57263 1.22922 9.2813 1.21882 8.97435C1.21363 8.66741 1.34359 8.38387 1.60872 8.12375L8.39286 1.35016C8.48643 1.26172 8.58521 1.2149 8.68918 1.20969C8.79835 1.20449 8.89712 1.24611 8.9855 1.33455L12.6661 5.01008C12.7545 5.09853 12.7935 5.19737 12.7831 5.30662C12.7779 5.41587 12.7311 5.51472 12.6427 5.60316L5.87415 12.3846C5.60902 12.6499 5.3283 12.7825 5.03198 12.7825C4.74086 12.7825 4.46273 12.6499 4.19761 12.3846L1.6555 9.84836ZM1.88164 6.96881L7.02823 12.1036L7.75343 11.3779L2.61464 6.24306L1.88164 6.96881Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(EraserIcon);
export default ForwardRef;