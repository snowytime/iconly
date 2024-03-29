import * as React from "react";
import { forwardRef } from "react";
const BookmarkFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 11 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.864985 17.5C1.06083 17.5 1.2458 17.434 1.41988 17.3019C1.59397 17.1751 1.86597 16.9373 2.2359 16.5886L5.42656 13.5373C5.47552 13.4845 5.52448 13.4845 5.57344 13.5373L8.76409 16.5886C9.13403 16.932 9.40331 17.1698 9.57196 17.3019C9.74604 17.434 9.93373 17.5 10.135 17.5C10.407 17.5 10.6192 17.4155 10.7715 17.2464C10.9238 17.0773 11 16.8395 11 16.5331V2.77459C11 2.01904 10.8069 1.45105 10.4206 1.07063C10.0344 0.69021 9.45772 0.5 8.69065 0.5H2.30935C1.54228 0.5 0.965628 0.69021 0.579377 1.07063C0.193126 1.45105 0 2.01904 0 2.77459V16.5331C0 16.8395 0.0761622 17.0773 0.228487 17.2464C0.380811 17.4155 0.592977 17.5 0.864985 17.5Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(BookmarkFillIcon);
export default ForwardRef;