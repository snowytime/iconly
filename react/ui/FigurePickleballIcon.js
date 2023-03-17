import * as React from "react";
import { forwardRef } from "react";
const FigurePickleballIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 15 18",
  fill: "none",
  color: "rgb(var(--foreground, 0, 0, 0))",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M7.50755 3.85477C7.81684 3.85477 8.09777 3.78024 8.35036 3.63119C8.6081 3.48214 8.81171 3.27912 8.9612 3.02214C9.11584 2.76516 9.19316 2.48247 9.19316 2.17409C9.19316 1.86057 9.11584 1.57789 8.9612 1.32604C8.81171 1.06906 8.6081 0.866038 8.35036 0.716987C8.09777 0.562796 7.81684 0.485701 7.50755 0.485701C7.19311 0.485701 6.90702 0.562796 6.64929 0.716987C6.3967 0.866038 6.19309 1.06906 6.03845 1.32604C5.88896 1.57789 5.81421 1.86057 5.81421 2.17409C5.81421 2.48247 5.88896 2.76516 6.03845 3.02214C6.19309 3.27912 6.3967 3.48214 6.64929 3.63119C6.90702 3.78024 7.19311 3.85477 7.50755 3.85477ZM13.9484 5.30416C13.7886 5.14483 13.6005 5.06774 13.384 5.07288C13.1726 5.07288 12.9871 5.14997 12.8273 5.30416L10.9406 7.16987L9.05398 5.27333C8.86841 5.0883 8.63645 4.94182 8.35809 4.83388C8.08489 4.72081 7.80137 4.66427 7.50755 4.66427H2.42754C2.25227 4.66427 2.09763 4.7131 1.96361 4.81075C1.82958 4.90841 1.73164 5.04204 1.66979 5.21165L0.455839 8.85055C0.363053 9.13324 0.378517 9.36709 0.502232 9.55212C0.631101 9.73201 0.793476 9.84508 0.989357 9.89134C1.17493 9.94274 1.3605 9.92732 1.54607 9.84508C1.7368 9.75771 1.8734 9.59067 1.95587 9.34396L2.99971 6.24473H4.67759C4.75491 6.24473 4.81419 6.27557 4.85543 6.33724C4.90182 6.39378 4.91213 6.4606 4.88636 6.53769L3.85798 9.62151C3.68787 10.1252 3.68787 10.6006 3.85798 11.0478C4.02809 11.4898 4.39408 11.8341 4.95595 12.0809L8.25757 13.5225L9.371 17.4159C9.44317 17.6574 9.57461 17.8193 9.76534 17.9016C9.95607 17.9838 10.1468 17.9992 10.3375 17.9478C10.5282 17.8964 10.6855 17.7859 10.8092 17.6163C10.938 17.4467 10.9664 17.2334 10.8942 16.9764L9.67255 12.7207C9.63647 12.6077 9.5875 12.5126 9.52564 12.4355C9.46379 12.3533 9.36584 12.2813 9.23182 12.2196L6.65702 11.0863L8.02561 6.97713C8.05654 6.88976 8.11324 6.83579 8.19571 6.81523C8.27819 6.78954 8.35293 6.81009 8.41995 6.87691L10.3762 8.85055C10.5308 9.00474 10.719 9.08184 10.9406 9.08184C11.1623 9.08184 11.3504 9.00474 11.5051 8.85055L13.9484 6.42205C14.1082 6.26272 14.1881 6.07769 14.1881 5.86696C14.1881 5.65109 14.1082 5.46349 13.9484 5.30416ZM4.12087 12.4663L3.73427 14.6558L0.409446 16.5061C0.172327 16.6346 0.0383633 16.8068 0.00743475 17.0227C-0.0183391 17.2385 0.022899 17.4338 0.131149 17.6086C0.22909 17.7679 0.373362 17.8836 0.564089 17.9555C0.75997 18.0326 0.968737 18.0095 1.19039 17.8861L4.8477 15.8662C4.9611 15.7994 5.04358 15.7275 5.09512 15.6504C5.14667 15.5733 5.19049 15.473 5.22657 15.3497L5.91473 13.3067L4.65439 12.7593C4.55645 12.7182 4.46367 12.6719 4.37604 12.6205C4.2884 12.5691 4.20335 12.5177 4.12087 12.4663ZM14.5747 3.85477C14.7036 3.78795 14.8067 3.69544 14.884 3.57723C14.9613 3.45901 15 3.33052 15 3.19175V0.770954C15 0.560227 14.9278 0.380337 14.7835 0.231286C14.6392 0.0770954 14.4587 0 14.2423 0H12.5257C12.3144 0 12.134 0.0770954 11.9845 0.231286C11.835 0.380337 11.7602 0.560227 11.7602 0.770954V3.19175C11.7602 3.33052 11.7989 3.45901 11.8762 3.57723C11.9535 3.69544 12.0592 3.78795 12.1932 3.85477L13.384 4.46382L14.5747 3.85477ZM12.9587 5.85154H13.817V3.6389H12.9587V5.85154Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(FigurePickleballIcon);
export default ForwardRef;