import * as React from "react";
import { forwardRef } from "react";
const FigureCyclingIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 20 16",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M10.004 12.4235C10.2198 12.4235 10.404 12.348 10.5567 12.197C10.7146 12.0409 10.7935 11.8561 10.7935 11.6426V7.71499C10.7935 7.52238 10.7198 7.34539 10.5724 7.18402L8.50375 4.90396C8.44058 4.83108 8.42479 4.7556 8.45637 4.67751C8.49322 4.59422 8.56165 4.55258 8.66166 4.55258H11.1962C11.3489 4.55258 11.4541 4.59943 11.512 4.69313C11.5699 4.78162 11.5989 4.87793 11.5989 4.98204V6.92634C11.5989 7.13977 11.6752 7.32197 11.8279 7.47293C11.9858 7.62389 12.1727 7.69938 12.3885 7.69938H15.5705C15.7863 7.69938 15.9705 7.62389 16.1232 7.47293C16.2758 7.32197 16.3522 7.13977 16.3522 6.92634C16.3522 6.7077 16.2758 6.5229 16.1232 6.37194C15.9705 6.22098 15.7863 6.1455 15.5705 6.1455H13.1781V3.38131C13.1781 2.94404 13.0228 2.57444 12.7122 2.27251C12.4069 1.96538 12.0332 1.81182 11.591 1.81182H7.71417C7.30886 1.81182 6.94039 1.92374 6.60876 2.14758C6.2824 2.36622 6.04027 2.65773 5.88235 3.02212C5.7297 3.39172 5.69285 3.77173 5.77181 4.16216C5.85077 4.54737 6.03237 4.88053 6.31662 5.16163L9.21437 8.04295V11.6426C9.21437 11.8561 9.29069 12.0409 9.44335 12.197C9.596 12.348 9.78287 12.4235 10.004 12.4235ZM4.28741 15.5C4.88748 15.5 5.44545 15.3907 5.96131 15.172C6.48243 14.9534 6.93775 14.6489 7.32728 14.2585C7.72207 13.868 8.03 13.4178 8.25108 12.9076C8.47217 12.3922 8.58271 11.8404 8.58271 11.2522C8.58271 10.664 8.47217 10.1148 8.25108 9.60463C8.03 9.08928 7.72207 8.63639 7.32728 8.24597C6.93775 7.85554 6.48243 7.55102 5.96131 7.33238C5.44545 7.11374 4.88748 7.00443 4.28741 7.00443C3.69259 7.00443 3.13462 7.11374 2.6135 7.33238C2.09764 7.55102 1.64232 7.85554 1.24753 8.24597C0.858007 8.63639 0.552704 9.08928 0.331623 9.60463C0.110541 10.1148 0 10.664 0 11.2522C0 11.8404 0.110541 12.3922 0.331623 12.9076C0.552704 13.4178 0.858007 13.868 1.24753 14.2585C1.64232 14.6489 2.09764 14.9534 2.6135 15.172C3.13462 15.3907 3.69259 15.5 4.28741 15.5ZM4.28741 14.399C3.70838 14.399 3.17673 14.2559 2.69246 13.9695C2.21345 13.6884 1.82919 13.311 1.53968 12.8373C1.25543 12.3584 1.1133 11.83 1.1133 11.2522C1.1133 10.6744 1.25543 10.1486 1.53968 9.67491C1.82919 9.19599 2.21345 8.81598 2.69246 8.53488C3.17673 8.24857 3.70838 8.10541 4.28741 8.10541C4.87169 8.10541 5.40334 8.24857 5.88235 8.53488C6.36663 8.81598 6.75089 9.19599 7.03513 9.67491C7.32465 10.1486 7.4694 10.6744 7.4694 11.2522C7.4694 11.83 7.32465 12.3584 7.03513 12.8373C6.75089 13.311 6.36663 13.6884 5.88235 13.9695C5.40334 14.2559 4.87169 14.399 4.28741 14.399ZM17.8287 8.91749C18.1498 9.2038 18.4051 9.54997 18.5946 9.95601C18.7893 10.3568 18.8867 10.7889 18.8867 11.2522C18.8867 11.83 18.7419 12.3584 18.4524 12.8373C18.1682 13.311 17.7866 13.6884 17.3075 13.9695C16.8285 14.2559 16.2969 14.399 15.7126 14.399C15.1283 14.399 14.594 14.2559 14.1098 13.9695C13.6307 13.6884 13.2465 13.311 12.957 12.8373C12.6727 12.3584 12.5306 11.83 12.5306 11.2522C12.5306 10.8149 12.6148 10.4011 12.7833 10.0107C12.8727 9.79724 12.8833 9.62025 12.8148 9.4797C12.7464 9.33915 12.6438 9.24545 12.5069 9.1986C12.3753 9.14654 12.2411 9.14654 12.1042 9.1986C11.9726 9.24545 11.87 9.35216 11.7963 9.51874C11.6752 9.78943 11.5805 10.0705 11.512 10.3621C11.4489 10.6484 11.4173 10.9451 11.4173 11.2522C11.4173 11.8404 11.5278 12.3922 11.7489 12.9076C11.97 13.4178 12.2753 13.868 12.6648 14.2585C13.0596 14.6489 13.5176 14.9534 14.0387 15.172C14.5598 15.3907 15.1178 15.5 15.7126 15.5C16.3074 15.5 16.8627 15.3907 17.3786 15.172C17.8997 14.9534 18.355 14.6489 18.7446 14.2585C19.1394 13.868 19.4473 13.4178 19.6684 12.9076C19.8895 12.3922 20 11.8404 20 11.2522C20 10.6119 19.8684 10.0185 19.6052 9.47189C19.342 8.9253 18.9841 8.45419 18.5314 8.05856C18.384 7.93363 18.234 7.88157 18.0813 7.90239C17.9339 7.91801 17.8102 7.97788 17.7102 8.08199C17.6155 8.1861 17.5681 8.31624 17.5681 8.47241C17.5734 8.62337 17.6602 8.77173 17.8287 8.91749ZM15.7126 3.91229C16.0284 3.91229 16.3153 3.8368 16.5732 3.68584C16.8312 3.52967 17.0365 3.32405 17.1891 3.06897C17.347 2.80869 17.426 2.51978 17.426 2.20224C17.426 1.8899 17.347 1.60619 17.1891 1.35112C17.0365 1.09084 16.8312 0.885216 16.5732 0.734253C16.3153 0.578084 16.0284 0.5 15.7126 0.5C15.3915 0.5 15.0994 0.578084 14.8362 0.734253C14.573 0.885216 14.3624 1.09084 14.2045 1.35112C14.0519 1.60619 13.9755 1.8899 13.9755 2.20224C13.9755 2.51978 14.0519 2.80869 14.2045 3.06897C14.3624 3.32405 14.573 3.52967 14.8362 3.68584C15.0994 3.8368 15.3915 3.91229 15.7126 3.91229Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(FigureCyclingIcon);
export default ForwardRef;