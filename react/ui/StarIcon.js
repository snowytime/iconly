import * as React from "react";
import { forwardRef } from "react";
const StarIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 17 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M3.25975 15.8643C3.41796 15.9849 3.5966 16.0251 3.79564 15.9849C3.99469 15.9497 4.21159 15.8492 4.44637 15.6833L8.49617 12.7502L12.5536 15.6833C12.7884 15.8492 13.0053 15.9497 13.2044 15.9849C13.4034 16.0251 13.582 15.9849 13.7403 15.8643C13.8985 15.7487 13.9929 15.5928 14.0235 15.3968C14.0592 15.2008 14.0286 14.967 13.9316 14.6956L12.3316 10.0057L16.4197 7.11027C16.6596 6.94439 16.8255 6.77348 16.9173 6.59755C17.0092 6.42161 17.0245 6.24065 16.9633 6.05467C16.902 5.8737 16.7821 5.73798 16.6034 5.6475C16.4248 5.55702 16.1875 5.51429 15.8915 5.51932L10.8771 5.54948L9.3536 0.836946C9.26173 0.560477 9.14435 0.351869 9.00144 0.211122C8.86364 0.0703739 8.69522 0 8.49617 0C8.30223 0 8.13381 0.0703739 7.9909 0.211122C7.8531 0.351869 7.73827 0.560477 7.6464 0.836946L6.12294 5.54948L1.10853 5.51932C0.812513 5.51429 0.57519 5.55702 0.396559 5.6475C0.217929 5.73798 0.0979915 5.8737 0.0367468 6.05467C-0.0244979 6.24065 -0.00918671 6.42161 0.0826804 6.59755C0.174547 6.77348 0.340419 6.94439 0.580294 7.11027L4.66838 10.0057L3.06836 14.6956C2.97139 14.967 2.93821 15.2008 2.96884 15.3968C3.00456 15.5928 3.10153 15.7487 3.25975 15.8643ZM4.36215 14.3713C4.35195 14.3613 4.35195 14.3387 4.36215 14.3035L5.88562 9.99057C5.92134 9.89507 5.93665 9.80459 5.93155 9.71913C5.93155 9.63368 5.90858 9.55577 5.86265 9.48539C5.81672 9.40999 5.75037 9.34213 5.6636 9.28181L1.85112 6.68803C1.8154 6.66792 1.80264 6.64782 1.81284 6.62771C1.81795 6.61263 1.84091 6.60509 1.88174 6.60509L6.51337 6.68803C6.67159 6.69306 6.80173 6.6629 6.90381 6.59755C7.00588 6.52718 7.07989 6.41407 7.12582 6.25825L8.45789 1.89255C8.4681 1.85234 8.48086 1.83223 8.49617 1.83223C8.51659 1.83223 8.5319 1.85234 8.54211 1.89255L9.87418 6.25825C9.92011 6.41407 9.99412 6.52718 10.0962 6.59755C10.1983 6.6629 10.3284 6.69306 10.4866 6.68803L15.1183 6.60509C15.1591 6.60509 15.1821 6.61263 15.1872 6.62771C15.1974 6.64782 15.1846 6.66792 15.1489 6.68803L11.3364 9.28181C11.2496 9.34213 11.1833 9.40999 11.1374 9.48539C11.0914 9.55577 11.0659 9.63368 11.0608 9.71913C11.0608 9.80459 11.0787 9.89507 11.1144 9.99057L12.6378 14.3035C12.6429 14.3387 12.6429 14.3613 12.6378 14.3713C12.6276 14.3864 12.6047 14.3814 12.5689 14.3563L8.88661 11.5891C8.76412 11.4936 8.63397 11.4458 8.49617 11.4458C8.36348 11.4458 8.23588 11.4936 8.11339 11.5891L4.43105 14.3563C4.39533 14.3814 4.37236 14.3864 4.36215 14.3713Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(StarIcon);
export default ForwardRef;