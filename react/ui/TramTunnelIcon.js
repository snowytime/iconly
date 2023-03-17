import * as React from "react";
import { forwardRef } from "react";
const TramTunnelIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 18 22",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 20.8729C0 21.0454 0.0598698 21.1917 0.17961 21.3119C0.304555 21.4373 0.452928 21.5 0.624729 21.5C0.801735 21.5 0.950108 21.4373 1.06985 21.3119C1.19479 21.1917 1.25727 21.0454 1.25727 20.8729V8.58959C1.25727 7.10545 1.55141 5.85648 2.1397 4.84267C2.73319 3.82885 3.60521 3.06327 4.75575 2.54591C5.90629 2.02333 7.32234 1.76204 9.0039 1.76204C10.6803 1.76204 12.0937 2.02333 13.2443 2.54591C14.3948 3.06327 15.2642 3.82885 15.8525 4.84267C16.446 5.85648 16.7427 7.10545 16.7427 8.58959V20.8729C16.7427 21.0454 16.8052 21.1917 16.9302 21.3119C17.0551 21.4373 17.2035 21.5 17.3753 21.5C17.5471 21.5 17.6928 21.4373 17.8126 21.3119C17.9375 21.1917 18 21.0454 18 20.8729V8.58959C18 6.83371 17.6564 5.3548 16.9692 4.15286C16.2872 2.95091 15.2772 2.04162 13.9393 1.42497C12.6013 0.808324 10.9562 0.5 9.0039 0.5C7.04642 0.5 5.3987 0.808324 4.06074 1.42497C2.72278 2.04162 1.7102 2.95091 1.02299 4.15286C0.340998 5.3548 0 6.83371 0 8.58959V20.8729ZM5.34143 17.902H12.6586C13.0646 17.902 13.4082 17.8158 13.6894 17.6433C13.9757 17.4709 14.1944 17.2331 14.3453 16.93C14.4963 16.6269 14.5718 16.282 14.5718 15.8953V11.1999C14.5718 10.6146 14.5484 10.0424 14.5015 9.4832C14.4547 8.92404 14.3948 8.40407 14.3219 7.92329C14.249 7.43729 14.1683 7.014 14.0798 6.65342C13.9393 6.04722 13.6711 5.5586 13.2755 5.18757C12.8798 4.81131 12.4009 4.58921 11.8386 4.52128C11.6304 4.49515 11.2685 4.46641 10.7531 4.43505C10.2429 4.39847 9.65987 4.38018 9.0039 4.38018C8.34273 4.38018 7.75705 4.39847 7.24685 4.43505C6.73666 4.46641 6.37484 4.49515 6.16139 4.52128C5.59913 4.58921 5.12017 4.81131 4.72451 5.18757C4.33406 5.5586 4.06594 6.04722 3.92017 6.65342C3.83167 7.014 3.75098 7.43729 3.67809 7.92329C3.60521 8.40407 3.54534 8.92404 3.49848 9.4832C3.45163 10.0424 3.4282 10.6146 3.4282 11.1999V15.8953C3.4282 16.282 3.50369 16.6269 3.65466 16.93C3.80564 17.2331 4.02429 17.4709 4.31063 17.6433C4.59696 17.8158 4.94056 17.902 5.34143 17.902ZM9.0039 13.4183C8.24902 13.413 7.54881 13.3974 6.90325 13.3712C6.2577 13.3399 5.76052 13.3007 5.41171 13.2536C5.25033 13.2327 5.13059 13.1753 5.05249 13.0812C4.9744 12.9819 4.93536 12.8408 4.93536 12.6579V11.145C4.93536 10.4918 4.96139 9.91433 5.01345 9.41265C5.07072 8.91097 5.12538 8.53994 5.17744 8.29955C5.2295 8.02258 5.38308 7.86842 5.63818 7.83707C6.0026 7.79003 6.43731 7.75607 6.9423 7.73516C7.45249 7.70903 8.1397 7.69597 9.0039 7.69597C9.86291 7.69597 10.5449 7.70903 11.0499 7.73516C11.5549 7.75607 11.9844 7.78742 12.3384 7.82923C12.6039 7.86581 12.7653 8.02258 12.8226 8.29955C12.8694 8.53994 12.9215 8.91097 12.9787 9.41265C13.036 9.91433 13.0646 10.4918 13.0646 11.145V12.6579C13.0646 12.846 13.0256 12.9871 12.9475 13.0812C12.8694 13.1753 12.7497 13.2327 12.5883 13.2536C12.0677 13.3268 11.4846 13.3712 10.839 13.3869C10.1987 13.4026 9.58698 13.413 9.0039 13.4183ZM7.3718 6.59071C7.23124 6.59071 7.1167 6.5489 7.0282 6.46529C6.9449 6.37645 6.90325 6.26148 6.90325 6.12038C6.90325 5.97928 6.9449 5.86693 7.0282 5.78331C7.1167 5.69448 7.23124 5.65006 7.3718 5.65006H10.6282C10.7688 5.65006 10.8807 5.69448 10.964 5.78331C11.0525 5.86693 11.0967 5.97928 11.0967 6.12038C11.0967 6.26148 11.0525 6.37645 10.964 6.46529C10.8807 6.5489 10.7688 6.59071 10.6282 6.59071H7.3718ZM5.96616 16.4989C5.69024 16.4989 5.46377 16.41 5.28677 16.2324C5.10976 16.0495 5.02126 15.8169 5.02126 15.5347C5.02126 15.263 5.10976 15.0383 5.28677 14.8606C5.46377 14.6777 5.69024 14.5862 5.96616 14.5862C6.24729 14.5862 6.47636 14.6777 6.65336 14.8606C6.83557 15.0383 6.92668 15.263 6.92668 15.5347C6.92668 15.8169 6.83297 16.0495 6.64555 16.2324C6.46334 16.41 6.23688 16.4989 5.96616 16.4989ZM12.026 16.4989C11.7501 16.4989 11.521 16.41 11.3388 16.2324C11.1618 16.0495 11.0733 15.8169 11.0733 15.5347C11.0733 15.263 11.1618 15.0383 11.3388 14.8606C11.521 14.6777 11.7501 14.5862 12.026 14.5862C12.302 14.5862 12.5284 14.6777 12.7054 14.8606C12.8876 15.0383 12.9787 15.263 12.9787 15.5347C12.9787 15.8169 12.8876 16.0495 12.7054 16.2324C12.5232 16.41 12.2967 16.4989 12.026 16.4989ZM4.49805 20.7318H4.86508C5.03688 20.7318 5.17744 20.6508 5.28677 20.4888L7.16876 17.4395H5.83341L4.17787 20.1125C4.08937 20.2589 4.07896 20.3973 4.14664 20.528C4.21432 20.6639 4.33145 20.7318 4.49805 20.7318ZM5.04469 19.9009H12.9709V18.8505H5.04469V19.9009ZM13.1662 20.7318H13.5254C13.6868 20.7318 13.8013 20.6639 13.869 20.528C13.9419 20.3921 13.9341 20.2536 13.8456 20.1125L12.19 17.4395H10.8547L12.7367 20.4888C12.8356 20.6508 12.9787 20.7318 13.1662 20.7318Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(TramTunnelIcon);
export default ForwardRef;