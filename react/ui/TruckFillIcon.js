import * as React from "react";
import { forwardRef } from "react";
const TruckFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 23 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M14.8094 11.7983V2.07041C14.8094 1.3955 14.6277 0.882969 14.2644 0.532826C13.9011 0.177609 13.3666 0 12.6611 0H2.14835C1.44277 0 0.90831 0.175071 0.544986 0.525214C0.181662 0.875357 0 1.39042 0 2.07041V12.0571C0 12.5087 0.0816163 12.8893 0.244849 13.1989C0.408081 13.5033 0.647665 13.7317 0.963599 13.8839C1.2848 14.0412 1.67972 14.1199 2.14835 14.1199H2.68544C2.66965 14.0184 2.66174 13.9144 2.66174 13.8078C2.66174 13.3815 2.74336 12.9832 2.9066 12.6127C3.07509 12.2372 3.30415 11.9099 3.59375 11.6308C3.88862 11.3467 4.22825 11.1259 4.61264 10.9686C5.00229 10.8062 5.41827 10.725 5.86058 10.725C6.29762 10.725 6.70834 10.8062 7.09272 10.9686C7.48237 11.1259 7.822 11.3467 8.11161 11.6308C8.40648 11.9099 8.63553 12.2372 8.79877 12.6127C8.96726 12.9832 9.05151 13.3815 9.05151 13.8078C9.05151 13.9144 9.04362 14.0184 9.02782 14.1199H14.0591C14.0433 14.0133 14.0354 13.9068 14.0354 13.8002C14.0354 13.4095 14.1012 13.0441 14.2328 12.7041C14.3645 12.359 14.5567 12.0571 14.8094 11.7983ZM15.8915 4.20171V11.0447C16.081 10.9432 16.2864 10.8646 16.5076 10.8088C16.7287 10.7479 16.9578 10.7174 17.1947 10.7174C17.637 10.7174 18.0504 10.7986 18.4348 10.961C18.8244 11.1183 19.1667 11.339 19.4615 11.6232C19.7617 11.9023 19.996 12.2296 20.1645 12.6051C20.3383 12.9756 20.4251 13.3739 20.4251 13.8002C20.4251 13.9068 20.4172 14.0133 20.4014 14.1199H20.8832C21.5783 14.1199 22.1049 13.9423 22.4629 13.5871C22.821 13.2369 23 12.7269 23 12.0571V9.37012C23 8.99461 22.9605 8.70028 22.8815 8.48715C22.8078 8.26895 22.6604 8.0406 22.4392 7.80209L19.7538 4.87916C19.5168 4.63051 19.2614 4.45544 18.9876 4.35395C18.7138 4.25246 18.3821 4.20171 17.9924 4.20171H15.8915ZM17.9372 9.05804C17.716 9.05804 17.5396 8.99714 17.408 8.87536C17.2816 8.74849 17.2184 8.5785 17.2184 8.36537V5.60989H17.9135C18.0925 5.60989 18.2505 5.63273 18.3874 5.6784C18.5243 5.72407 18.6691 5.83064 18.8218 5.9981L21.2308 8.60133C21.294 8.6673 21.3466 8.73834 21.3887 8.81446C21.4309 8.89058 21.4598 8.97177 21.4756 9.05804H17.9372ZM5.86058 16C6.28183 16 6.66358 15.901 7.00584 15.7031C7.3481 15.5052 7.62191 15.2388 7.82727 14.9039C8.03263 14.5741 8.1353 14.2087 8.1353 13.8078C8.1353 13.4018 8.03263 13.0339 7.82727 12.7041C7.62191 12.3692 7.34547 12.1053 6.99794 11.9125C6.65568 11.7146 6.27656 11.6156 5.86058 11.6156C5.43933 11.6156 5.05495 11.7146 4.70742 11.9125C4.36516 12.1053 4.09135 12.3692 3.88599 12.7041C3.6859 13.0339 3.58585 13.4018 3.58585 13.8078C3.58585 14.2087 3.6859 14.5741 3.88599 14.9039C4.09135 15.2388 4.36516 15.5052 4.70742 15.7031C5.05495 15.901 5.43933 16 5.86058 16ZM17.2263 16C17.6476 16 18.0293 15.901 18.3716 15.7031C18.7191 15.5052 18.9929 15.2388 19.193 14.9039C19.3984 14.5741 19.501 14.2062 19.501 13.8002C19.501 13.3942 19.3984 13.0263 19.193 12.6965C18.9876 12.3616 18.7138 12.0977 18.3716 11.9049C18.0293 11.7069 17.6476 11.608 17.2263 11.608C16.8103 11.608 16.4286 11.7069 16.081 11.9049C15.7388 12.0977 15.465 12.3616 15.2596 12.6965C15.0543 13.0263 14.9516 13.3942 14.9516 13.8002C14.9516 14.2011 15.0543 14.569 15.2596 14.9039C15.465 15.2388 15.7388 15.5052 16.081 15.7031C16.4286 15.901 16.8103 16 17.2263 16Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(TruckFillIcon);
export default ForwardRef;