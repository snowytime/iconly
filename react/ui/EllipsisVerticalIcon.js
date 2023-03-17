import * as React from "react";
import { forwardRef } from "react";
const EllipsisVerticalIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 3 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 13.0154C0 12.7333 0.0675 12.4809 0.2025 12.2582C0.3375 12.0306 0.5175 11.8499 0.7425 11.7163C0.9675 11.5778 1.22 11.5085 1.5 11.5085C1.915 11.5085 2.2675 11.6545 2.5575 11.9464C2.8525 12.2384 3 12.5947 3 13.0154C3 13.2876 2.9325 13.5375 2.7975 13.7651C2.6625 13.9878 2.48 14.166 2.25 14.2996C2.025 14.4332 1.775 14.5 1.5 14.5C1.22 14.5 0.9675 14.4332 0.7425 14.2996C0.5175 14.166 0.3375 13.9878 0.2025 13.7651C0.0675 13.5375 0 13.2876 0 13.0154ZM0 7.49999C0 7.22286 0.0675 6.97297 0.2025 6.75027C0.3375 6.52758 0.5175 6.34942 0.7425 6.21581C0.9675 6.08219 1.22 6.01538 1.5 6.01538C1.915 6.01538 2.2675 6.16137 2.5575 6.45335C2.8525 6.74037 3 7.08925 3 7.49999C3 7.77217 2.9325 8.02209 2.7975 8.24973C2.6625 8.47242 2.48 8.65058 2.25 8.78419C2.025 8.91286 1.775 8.97719 1.5 8.97719C1.22 8.97719 0.9675 8.91286 0.7425 8.78419C0.5175 8.65058 0.3375 8.47242 0.2025 8.24973C0.0675 8.02209 0 7.77217 0 7.49999ZM0 1.98463C0 1.71244 0.0675 1.46501 0.2025 1.24231C0.3375 1.01467 0.5175 0.834041 0.7425 0.700424C0.9675 0.566808 1.22 0.5 1.5 0.5C1.915 0.5 2.2675 0.645988 2.5575 0.937964C2.8525 1.22499 3 1.57388 3 1.98463C3 2.26176 2.9325 2.51414 2.7975 2.74178C2.6625 2.96943 2.48 3.15006 2.25 3.28367C2.025 3.41729 1.775 3.4841 1.5 3.4841C1.22 3.4841 0.9675 3.41729 0.7425 3.28367C0.5175 3.15006 0.3375 2.96943 0.2025 2.74178C0.0675 2.51414 0 2.26176 0 1.98463Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(EllipsisVerticalIcon);
export default ForwardRef;