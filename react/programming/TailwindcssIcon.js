import * as React from "react";
import { forwardRef } from "react";
const TailwindcssIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "#38B2AC",
  viewBox: "0 0 41 24",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M20.0008 0C14.6671 0 11.3347 2.66576 10.0003 7.99948C11.9998 5.3334 14.3339 4.33366 17 5.00026C18.5223 5.37966 19.6102 6.48346 20.8149 7.70665C22.7756 9.69644 25.0451 12 30.0013 12C35.3347 12 38.6674 9.33392 40.0018 3.99896C38.002 6.6666 35.6682 7.66634 33.0018 6.99974C31.4798 6.62003 30.3932 5.51654 29.1869 4.29335C27.2274 2.30356 24.9586 0 20.0008 0V0ZM10.0003 12C4.66687 12 1.3342 14.6661 -0.000244141 20.001C1.99923 17.3334 4.33311 16.3337 6.99949 17.0003C8.52176 17.38 9.60963 18.4835 10.8144 19.7067C12.7751 21.6964 15.0446 24 20.0008 24C25.3342 24 28.6669 21.3342 30.0013 16.0005C28.0015 18.6666 25.6677 19.6663 23.0013 18.9997C21.4793 18.6203 20.3927 17.5165 19.1864 16.2933C17.2269 14.3036 14.958 12 10.0003 12Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(TailwindcssIcon);
export default ForwardRef;