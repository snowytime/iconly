import * as React from "react";
import { forwardRef } from "react";
const CharacterLargeIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 10 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.691928 12C0.911587 12 1.08182 11.954 1.20264 11.8619C1.32345 11.7698 1.4223 11.61 1.49918 11.3825L2.56178 8.51456H7.42175L8.48435 11.3825C8.56123 11.61 8.66008 11.7698 8.78089 11.8619C8.9017 11.954 9.06919 12 9.28336 12C9.50302 12 9.676 11.9404 9.80231 11.8213C9.9341 11.7021 10 11.5396 10 11.3338C10 11.2092 9.9698 11.063 9.90939 10.8951L6.04613 0.747461C5.94728 0.498307 5.81274 0.311442 5.64251 0.186865C5.47227 0.0622884 5.25536 0 4.99176 0C4.48106 0 4.13509 0.246445 3.95387 0.739337L0.0906096 10.9032C0.0302032 11.0711 0 11.2173 0 11.3419C0 11.5477 0.0604064 11.7102 0.181219 11.8294C0.307523 11.9431 0.47776 12 0.691928 12ZM2.9654 7.27962L4.96705 1.81178H5.00824L7.00988 7.27962H2.9654Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CharacterLargeIcon);
export default ForwardRef;