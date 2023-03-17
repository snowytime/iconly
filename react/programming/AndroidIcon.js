import * as React from "react";
import { forwardRef } from "react";
const AndroidIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 22 24",
  fill: "none",
  color: "#A4C439",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M1.53279 7.76289C0.687312 7.76249 0.00203966 8.42702 0.00183105 9.24431L0.00287391 15.4469C0.0027368 15.6415 0.0422576 15.8342 0.119176 16.014C0.196094 16.1939 0.308902 16.3573 0.451148 16.4949C0.593393 16.6325 0.762287 16.7417 0.948171 16.8161C1.13406 16.8905 1.33328 16.9288 1.53446 16.9287C1.73562 16.9289 1.93484 16.8907 2.12071 16.8163C2.30658 16.7419 2.47546 16.6328 2.61766 16.4952C2.75985 16.3575 2.87258 16.1941 2.94938 16.0143C3.02618 15.8344 3.06555 15.6417 3.06522 15.4471V9.24351C3.06478 8.85064 2.90312 8.47401 2.61578 8.19638C2.32844 7.91876 1.93891 7.76284 1.53279 7.76289ZM13.8808 2.19278L14.9495 0.304933C14.9768 0.257042 14.9832 0.200663 14.9676 0.148156C14.9519 0.0956487 14.9153 0.0512998 14.8659 0.024833C14.8164 -0.00107946 14.7582 -0.00698646 14.7042 0.00840137C14.6502 0.0237892 14.6047 0.0592222 14.5776 0.106966L13.498 2.01459C12.5898 1.6235 11.5732 1.40434 10.4977 1.40535C9.425 1.40434 8.40888 1.62289 7.50436 2.01177L6.42357 0.108984C6.41038 0.0852326 6.39245 0.06425 6.37081 0.0472514C6.34917 0.0302527 6.32426 0.0175761 6.29753 0.00995571C6.27079 0.00233529 6.24276 -7.73916e-05 6.21505 0.00285739C6.18734 0.00579217 6.16051 0.0140161 6.13611 0.0270528C6.11148 0.0397894 6.08972 0.0571503 6.07211 0.0781198C6.05449 0.0990892 6.04138 0.123246 6.03353 0.149177C6.02568 0.175109 6.02326 0.202293 6.0264 0.229141C6.02955 0.255989 6.03819 0.281961 6.05184 0.305538L7.12095 2.19218C5.02028 3.24013 3.60092 5.23594 3.60217 7.52739L17.3948 7.52578C17.3952 5.23513 15.9784 3.24336 13.8808 2.19278ZM7.36063 5.11022C7.20724 5.11014 7.06017 5.05111 6.95176 4.94613C6.84336 4.84115 6.7825 4.69881 6.78259 4.55042C6.78267 4.40204 6.84368 4.25976 6.95221 4.15489C7.06073 4.05002 7.20787 3.99115 7.36126 3.99123C7.51467 3.9915 7.66172 4.05056 7.77021 4.15547C7.87871 4.26039 7.93981 4.40262 7.94014 4.55103C7.93987 4.6995 7.87868 4.84179 7.77001 4.94664C7.66135 5.05149 7.51411 5.11033 7.36063 5.11022ZM13.6409 5.10921C13.565 5.10926 13.4898 5.09484 13.4196 5.06676C13.3495 5.03867 13.2857 4.99749 13.232 4.94556C13.1783 4.89362 13.1357 4.83196 13.1066 4.76409C13.0776 4.69622 13.0627 4.62348 13.0627 4.55002C13.0635 4.40176 13.1247 4.25978 13.233 4.15484C13.3412 4.04991 13.4879 3.99048 13.6412 3.98942C13.7943 3.99064 13.9407 4.05019 14.0488 4.15516C14.1568 4.26014 14.2178 4.40208 14.2184 4.55022C14.2184 4.62362 14.2036 4.69631 14.1746 4.76414C14.1456 4.83197 14.1031 4.8936 14.0495 4.94552C13.9958 4.99744 13.9321 5.03862 13.862 5.0667C13.7919 5.09479 13.7168 5.10924 13.6409 5.10921ZM3.65849 8.04279L3.66079 17.6556C3.66054 17.8632 3.70263 18.0688 3.78466 18.2607C3.86668 18.4525 3.98702 18.6268 4.13878 18.7736C4.29055 18.9204 4.47076 19.0368 4.66909 19.1161C4.86742 19.1955 5.07998 19.2361 5.2946 19.2359L6.40709 19.2363L6.40835 22.5184C6.40814 23.3357 7.09487 24 7.93847 24C8.78458 24 9.47006 23.3351 9.47027 22.5174L9.46944 19.2361L11.5365 19.2355L11.5374 22.5174C11.5374 23.3341 12.2243 23.9998 13.0681 23.9982C13.9142 23.9988 14.6001 23.3339 14.5999 22.5162L14.5989 19.2351L15.7153 19.2343C15.93 19.2343 16.1425 19.1934 16.3408 19.114C16.5391 19.0346 16.7193 18.9181 16.8711 18.7713C17.0229 18.6245 17.1433 18.4502 17.2255 18.2584C17.3076 18.0666 17.3499 17.861 17.35 17.6534L17.3481 8.04057L3.65849 8.04279ZM21.0008 9.24209C21.0008 9.04756 20.9612 8.85493 20.8843 8.67521C20.8073 8.49548 20.6945 8.33219 20.5523 8.19465C20.4101 8.05712 20.2412 7.94804 20.0554 7.87364C19.8696 7.79925 19.6705 7.761 19.4694 7.76108C18.6239 7.76027 17.9389 8.4244 17.9389 9.2427L17.9401 15.4457C17.94 15.6402 17.9795 15.8328 18.0564 16.0126C18.1333 16.1923 18.246 16.3556 18.3882 16.4932C18.5304 16.6307 18.6992 16.7398 18.885 16.8142C19.0708 16.8886 19.27 16.9268 19.4711 16.9267C19.6722 16.9267 19.8713 16.8884 20.0571 16.8139C20.2429 16.7394 20.4118 16.6303 20.5539 16.4927C20.6961 16.355 20.8088 16.1917 20.8857 16.0119C20.9625 15.8321 21.002 15.6394 21.0018 15.4449L21.0008 9.24209Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(AndroidIcon);
export default ForwardRef;