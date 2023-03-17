import * as React from "react";
import { forwardRef } from "react";
const ForwardEndFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 15 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M12.1012 13H13.932C14.2853 13 14.5503 12.9096 14.727 12.7287C14.909 12.5478 15 12.2818 15 11.9306V1.06139C15 0.699611 14.909 0.433599 14.727 0.263352C14.5503 0.0877839 14.2853 0 13.932 0H12.1012C11.7532 0 11.4882 0.0904441 11.3062 0.271332C11.1242 0.45222 11.0332 0.715572 11.0332 1.06139V11.9306C11.0332 12.2818 11.1242 12.5478 11.3062 12.7287C11.4882 12.9096 11.7532 13 12.1012 13ZM1.15632 12.7606C1.32227 12.7606 1.47752 12.734 1.62206 12.6808C1.7666 12.6329 1.91917 12.5611 2.07976 12.4653L10.2623 7.68508C10.546 7.51484 10.7521 7.33129 10.8806 7.13444C11.0091 6.93759 11.0733 6.72478 11.0733 6.49601C11.0733 6.26724 11.0091 6.05443 10.8806 5.85758C10.7521 5.66073 10.546 5.47718 10.2623 5.30694L2.07976 0.518723C1.91381 0.422959 1.75857 0.351136 1.61403 0.303254C1.47484 0.250051 1.32227 0.22345 1.15632 0.22345C0.840471 0.22345 0.567452 0.340495 0.337259 0.574586C0.11242 0.808676 0 1.14917 0 1.59607V11.3959C0 11.8428 0.11242 12.1807 0.337259 12.4095C0.567452 12.6435 0.840471 12.7606 1.15632 12.7606Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ForwardEndFillIcon);
export default ForwardRef;