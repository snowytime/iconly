import * as React from "react";
import { forwardRef } from "react";
const NoteIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2.52082 15.5H13.4872C14.3275 15.5 14.9563 15.2882 15.3738 14.8645C15.7913 14.4462 16 13.8161 16 12.9742V3.0258C16 2.18387 15.7913 1.55378 15.3738 1.13552C14.9563 0.711841 14.3275 0.5 13.4872 0.5H2.52082C1.68055 0.5 1.049 0.711841 0.626192 1.13552C0.208731 1.55378 0 2.18387 0 3.0258V12.9742C0 13.8161 0.208731 14.4462 0.626192 14.8645C1.049 15.2882 1.68055 15.5 2.52082 15.5ZM2.4004 14.1882C2.04716 14.1882 1.77421 14.0904 1.58154 13.8949C1.38886 13.7048 1.29252 13.4223 1.29252 13.0475V5.3642C1.29252 4.98941 1.38886 4.70695 1.58154 4.51684C1.77421 4.32129 2.04716 4.22352 2.4004 4.22352H13.5916C13.9502 4.22352 14.2258 4.32129 14.4185 4.51684C14.6111 4.70695 14.7075 4.98941 14.7075 5.3642V13.0475C14.7075 13.4223 14.6111 13.7048 14.4185 13.8949C14.2258 14.0904 13.9502 14.1882 13.5916 14.1882H2.4004Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(NoteIcon);
export default ForwardRef;