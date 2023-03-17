import * as React from "react";
import { forwardRef } from "react";
const SunsetIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 20 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M6.74991 15.0264H8.80219C8.27156 14.8066 7.83457 14.4539 7.49123 13.9684C7.15308 13.4828 6.98401 12.9411 6.98401 12.3431C6.98401 11.8013 7.11927 11.3055 7.38978 10.8558C7.6655 10.406 8.03226 10.0482 8.49006 9.78246C8.94785 9.51158 9.45247 9.37614 10.0039 9.37614C10.5501 9.37614 11.0522 9.51158 11.51 9.78246C11.9678 10.0482 12.3319 10.406 12.6024 10.8558C12.8781 11.3055 13.016 11.8013 13.016 12.3431C13.016 12.9411 12.8443 13.4828 12.501 13.9684C12.1628 14.4539 11.7285 14.8066 11.1978 15.0264H13.2501C13.5674 14.6635 13.8146 14.252 13.9914 13.792C14.1735 13.3372 14.2645 12.8542 14.2645 12.3431C14.2645 11.7655 14.1527 11.2238 13.929 10.7178C13.7105 10.2118 13.4036 9.76713 13.0082 9.3838C12.6128 8.99537 12.1576 8.69126 11.6426 8.47149C11.1276 8.25172 10.5814 8.14183 10.0039 8.14183C9.42126 8.14183 8.87242 8.25172 8.3574 8.47149C7.84238 8.69126 7.38718 8.99537 6.99181 9.3838C6.59644 9.76713 6.28691 10.2118 6.06321 10.7178C5.84472 11.2238 5.73547 11.7655 5.73547 12.3431C5.73547 12.8542 5.82391 13.3372 6.00078 13.792C6.18286 14.252 6.43257 14.6635 6.74991 15.0264ZM1.69333 12.7647H3.61296C3.81584 12.7647 3.98232 12.706 4.11237 12.5884C4.24763 12.4657 4.31526 12.3175 4.31526 12.1437C4.31006 11.9751 4.24243 11.8294 4.11237 11.7068C3.98232 11.5841 3.81584 11.5228 3.61296 11.5228H1.69333C1.49044 11.5228 1.32397 11.5841 1.19391 11.7068C1.06386 11.8294 0.99883 11.9751 0.99883 12.1437C0.99883 12.3175 1.06386 12.4657 1.19391 12.5884C1.32397 12.706 1.49044 12.7647 1.69333 12.7647ZM5.97738 8.38716C6.09703 8.26449 6.15425 8.11372 6.14905 7.93483C6.14905 7.75595 6.07622 7.59751 5.93055 7.45951L4.57277 6.12554C4.42711 5.98243 4.26584 5.91088 4.08896 5.91088C3.91209 5.91088 3.76122 5.96965 3.63637 6.08721C3.51151 6.20476 3.44909 6.35298 3.44909 6.53186C3.45429 6.70564 3.52972 6.86408 3.67538 7.00719L5.03317 8.34116C5.17363 8.48427 5.3349 8.55838 5.51698 8.56349C5.70426 8.5686 5.85772 8.50982 5.97738 8.38716ZM14.0226 8.38716C14.1475 8.50471 14.301 8.56349 14.483 8.56349C14.6651 8.55838 14.8264 8.48427 14.9668 8.34116L16.3246 7.00719C16.4703 6.86408 16.5431 6.70564 16.5431 6.53186C16.5483 6.35809 16.4885 6.20987 16.3636 6.08721C16.244 5.96454 16.0931 5.90577 15.911 5.91088C15.7342 5.91088 15.5729 5.98243 15.4272 6.12554L14.0695 7.45951C13.9238 7.59751 13.8484 7.7585 13.8432 7.9425C13.838 8.12139 13.8978 8.26961 14.0226 8.38716ZM16.387 12.7647H18.3067C18.5096 12.7647 18.676 12.706 18.8061 12.5884C18.9361 12.4657 19.0012 12.3175 19.0012 12.1437C19.0012 11.9751 18.9361 11.8294 18.8061 11.7068C18.676 11.5841 18.5096 11.5228 18.3067 11.5228H16.387C16.1894 11.5228 16.0229 11.5841 15.8876 11.7068C15.7524 11.8294 15.6847 11.9751 15.6847 12.1437C15.6899 12.3175 15.7576 12.4657 15.8876 12.5884C16.0229 12.706 16.1894 12.7647 16.387 12.7647ZM0.678892 16H19.3211C19.5032 16 19.6619 15.9387 19.7971 15.816C19.9324 15.6985 20 15.5553 20 15.3867C20 15.218 19.9324 15.0724 19.7971 14.9497C19.6619 14.8321 19.5032 14.7734 19.3211 14.7734H0.678892C0.496814 14.7734 0.338146 14.8321 0.202887 14.9497C0.0676291 15.0724 0 15.218 0 15.3867C0 15.5553 0.0676291 15.6985 0.202887 15.816C0.338146 15.9387 0.496814 16 0.678892 16ZM10.0039 0C9.82703 0 9.67617 0.0664431 9.55131 0.199329C9.42646 0.332215 9.36403 0.493212 9.36403 0.682319V3.54959L9.45767 4.70724L8.95826 4.13225L7.90481 3.0896C7.84758 3.03338 7.78255 2.98994 7.70972 2.95927C7.63689 2.92861 7.56406 2.91327 7.49123 2.91327C7.33516 2.91327 7.2051 2.96183 7.10106 3.05894C7.00222 3.15093 6.9528 3.2736 6.9528 3.42693C6.9528 3.5087 6.9684 3.58281 6.99962 3.64926C7.03083 3.71059 7.07765 3.76937 7.14008 3.82559L9.57472 6.05654C9.72559 6.18943 9.86865 6.25587 10.0039 6.25587C10.134 6.25587 10.2744 6.18943 10.4253 6.05654L12.8599 3.82559C12.9224 3.76937 12.9692 3.71059 13.0004 3.64926C13.0316 3.58281 13.0472 3.5087 13.0472 3.42693C13.0472 3.2736 12.9952 3.15093 12.8912 3.05894C12.7923 2.96183 12.6649 2.91327 12.5088 2.91327C12.436 2.91327 12.3631 2.92861 12.2903 2.95927C12.2175 2.98994 12.1524 3.03338 12.0952 3.0896L11.1198 4.05558L10.5423 4.70724L10.636 3.54959V0.682319C10.636 0.493212 10.5736 0.332215 10.4487 0.199329C10.3238 0.0664431 10.1756 0 10.0039 0Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(SunsetIcon);
export default ForwardRef;