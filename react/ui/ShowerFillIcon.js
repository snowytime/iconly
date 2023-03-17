import * as React from "react";
import { forwardRef } from "react";
const ShowerFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 13 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M8.94451 0.5H6.7725C6.08857 0.5 5.54891 0.691247 5.15351 1.07374C4.75812 1.45623 4.56042 1.97234 4.56042 2.62205V4.00532H5.77065V2.62205C5.77065 2.33387 5.85882 2.10857 6.03514 1.94614C6.21681 1.77847 6.4626 1.69464 6.7725 1.69464H8.94451C9.52158 1.69464 10.0212 1.81777 10.4433 2.06403C10.8707 2.31029 11.202 2.65873 11.4371 3.10934C11.6722 3.55995 11.7898 4.08915 11.7898 4.69695V16.8948C11.7898 17.0677 11.8459 17.2118 11.9581 17.3271C12.0703 17.4424 12.2146 17.5 12.3909 17.5C12.5672 17.5 12.7115 17.4424 12.8237 17.3271C12.9412 17.2118 13 17.0677 13 16.8948V4.69695C13 3.84289 12.8344 3.1041 12.5031 2.48058C12.1718 1.85183 11.7016 1.36454 11.0925 1.01872C10.4834 0.672908 9.76736 0.5 8.94451 0.5ZM0 10.1043C0 10.2457 0.0507604 10.3662 0.152281 10.4658C0.259145 10.5653 0.38471 10.6151 0.528977 10.6151H9.8021C9.94636 10.6151 10.0693 10.5653 10.1708 10.4658C10.2723 10.3662 10.3231 10.2457 10.3231 10.1043C10.3231 9.96278 10.2723 9.84227 10.1708 9.74272C10.0746 9.63793 9.95705 9.58553 9.81813 9.58553H9.77004C9.74866 9.01965 9.62043 8.48783 9.38533 7.99006C9.15557 7.49229 8.84299 7.05217 8.4476 6.66967C8.0522 6.28194 7.6007 5.9728 7.09309 5.74226V5.13708C7.09309 4.77554 7.01028 4.45331 6.84464 4.17037C6.679 3.88219 6.45191 3.65688 6.16338 3.49445C5.87485 3.33202 5.5409 3.25081 5.16153 3.25081C4.7875 3.25081 4.45356 3.33202 4.15968 3.49445C3.87115 3.65688 3.64406 3.88219 3.47842 4.17037C3.31278 4.45331 3.22996 4.77554 3.22996 5.13708V5.74226C2.7277 5.9728 2.27887 6.28194 1.88348 6.66967C1.48808 7.05217 1.17283 7.49229 0.937731 7.99006C0.70263 8.48783 0.574394 9.01965 0.553021 9.58553H0.512947C0.368681 9.58553 0.245787 9.63793 0.144266 9.74272C0.0480888 9.84227 0 9.96278 0 10.1043ZM2.47657 12.7529C2.64221 12.7529 2.78113 12.6979 2.89334 12.5878C3.00555 12.4726 3.06165 12.3337 3.06165 12.1713C3.06165 12.0141 3.00555 11.8805 2.89334 11.7705C2.78113 11.6552 2.64221 11.5975 2.47657 11.5975C2.31628 11.5975 2.17735 11.6552 2.0598 11.7705C1.94225 11.8805 1.88348 12.0141 1.88348 12.1713C1.88348 12.3337 1.94225 12.4726 2.0598 12.5878C2.17735 12.6979 2.31628 12.7529 2.47657 12.7529ZM2.47657 14.9064C2.64221 14.9064 2.78113 14.8487 2.89334 14.7335C3.00555 14.6234 3.06165 14.4872 3.06165 14.3248C3.06165 14.1624 3.00555 14.0261 2.89334 13.9161C2.78113 13.8061 2.64221 13.751 2.47657 13.751C2.31628 13.751 2.17735 13.8061 2.0598 13.9161C1.94225 14.0261 1.88348 14.1624 1.88348 14.3248C1.88348 14.4872 1.94225 14.6234 2.0598 14.7335C2.17735 14.8487 2.31628 14.9064 2.47657 14.9064ZM2.47657 17.0599C2.64221 17.0599 2.78113 17.0022 2.89334 16.887C3.00555 16.7717 3.06165 16.6355 3.06165 16.4783C3.06165 16.3158 3.00555 16.1796 2.89334 16.0696C2.78113 15.9595 2.64221 15.9045 2.47657 15.9045C2.31628 15.9045 2.17735 15.9595 2.0598 16.0696C1.94225 16.1796 1.88348 16.3158 1.88348 16.4783C1.88348 16.6355 1.94225 16.7717 2.0598 16.887C2.17735 17.0022 2.31628 17.0599 2.47657 17.0599ZM5.15351 12.7529C5.31915 12.7529 5.45808 12.6979 5.57028 12.5878C5.68249 12.4726 5.73859 12.3337 5.73859 12.1713C5.73859 12.0141 5.68249 11.8805 5.57028 11.7705C5.45808 11.6552 5.31915 11.5975 5.15351 11.5975C4.98787 11.5975 4.84628 11.6552 4.72873 11.7705C4.61652 11.8805 4.56042 12.0141 4.56042 12.1713C4.56042 12.3337 4.61652 12.4726 4.72873 12.5878C4.84628 12.6979 4.98787 12.7529 5.15351 12.7529ZM5.15351 14.9064C5.31915 14.9064 5.45808 14.8487 5.57028 14.7335C5.68249 14.6234 5.73859 14.4872 5.73859 14.3248C5.73859 14.1624 5.68249 14.0261 5.57028 13.9161C5.45808 13.8061 5.31915 13.751 5.15351 13.751C4.98787 13.751 4.84628 13.8061 4.72873 13.9161C4.61652 14.0261 4.56042 14.1624 4.56042 14.3248C4.56042 14.4872 4.61652 14.6234 4.72873 14.7335C4.84628 14.8487 4.98787 14.9064 5.15351 14.9064ZM5.15351 17.0599C5.31915 17.0599 5.45808 17.0022 5.57028 16.887C5.68249 16.7717 5.73859 16.6355 5.73859 16.4783C5.73859 16.3158 5.68249 16.1796 5.57028 16.0696C5.45808 15.9595 5.31915 15.9045 5.15351 15.9045C4.98787 15.9045 4.84628 15.9595 4.72873 16.0696C4.61652 16.1796 4.56042 16.3158 4.56042 16.4783C4.56042 16.6355 4.61652 16.7717 4.72873 16.887C4.84628 17.0022 4.98787 17.0599 5.15351 17.0599ZM7.82244 12.7529C7.98808 12.7529 8.127 12.6979 8.23921 12.5878C8.35142 12.4726 8.40752 12.3337 8.40752 12.1713C8.40752 12.0141 8.35142 11.8805 8.23921 11.7705C8.127 11.6552 7.98808 11.5975 7.82244 11.5975C7.66215 11.5975 7.52322 11.6552 7.40567 11.7705C7.28812 11.8805 7.22935 12.0141 7.22935 12.1713C7.22935 12.3337 7.28812 12.4726 7.40567 12.5878C7.52322 12.6979 7.66215 12.7529 7.82244 12.7529ZM7.82244 14.9064C7.98808 14.9064 8.127 14.8487 8.23921 14.7335C8.35142 14.6234 8.40752 14.4872 8.40752 14.3248C8.40752 14.1624 8.35142 14.0261 8.23921 13.9161C8.127 13.8061 7.98808 13.751 7.82244 13.751C7.66215 13.751 7.52322 13.8061 7.40567 13.9161C7.28812 14.0261 7.22935 14.1624 7.22935 14.3248C7.22935 14.4872 7.28812 14.6234 7.40567 14.7335C7.52322 14.8487 7.66215 14.9064 7.82244 14.9064ZM7.82244 17.0599C7.98808 17.0599 8.127 17.0022 8.23921 16.887C8.35142 16.7717 8.40752 16.6355 8.40752 16.4783C8.40752 16.3158 8.35142 16.1796 8.23921 16.0696C8.127 15.9595 7.98808 15.9045 7.82244 15.9045C7.66215 15.9045 7.52322 15.9595 7.40567 16.0696C7.28812 16.1796 7.22935 16.3158 7.22935 16.4783C7.22935 16.6355 7.28812 16.7717 7.40567 16.887C7.52322 17.0022 7.66215 17.0599 7.82244 17.0599Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ShowerFillIcon);
export default ForwardRef;