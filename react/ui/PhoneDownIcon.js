import * as React from "react";
import { forwardRef } from "react";
const PhoneDownIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 19 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 6.76157C0 7.07814 0.0601928 7.36788 0.180579 7.63079C0.300964 7.8937 0.473691 8.10563 0.69876 8.2666C0.929063 8.4222 1.20909 8.5 1.53884 8.5C1.63306 8.5 1.75344 8.49463 1.9 8.4839C2.04656 8.47317 2.2219 8.44903 2.42603 8.41147L5.20537 7.98491C5.7759 7.89906 6.16061 7.72737 6.3595 7.46982C6.56364 7.21228 6.6657 6.83132 6.6657 6.32696C6.6657 6.17136 6.6657 6.02113 6.6657 5.87626C6.67094 5.72603 6.67355 5.57579 6.67355 5.42556C6.67355 5.20557 6.77039 5.07143 6.96405 5.02314C7.25193 4.95876 7.62094 4.91047 8.07107 4.87827C8.52121 4.84071 8.99752 4.82194 9.5 4.82194C10.0025 4.82194 10.4788 4.84071 10.9289 4.87827C11.3791 4.91047 11.7481 4.95876 12.0359 5.02314C12.2296 5.07143 12.3264 5.20557 12.3264 5.42556C12.3317 5.57579 12.3343 5.72603 12.3343 5.87626C12.3343 6.02113 12.3343 6.17136 12.3343 6.32696C12.3343 6.83132 12.4337 7.21228 12.6326 7.46982C12.8368 7.72737 13.2241 7.89906 13.7946 7.98491L16.574 8.41147C16.7781 8.44903 16.9534 8.47317 17.1 8.4839C17.2466 8.49463 17.3669 8.5 17.4612 8.5C17.7909 8.5 18.0683 8.4222 18.2934 8.2666C18.5237 8.10563 18.699 7.8937 18.8194 7.63079C18.9398 7.36788 19 7.07814 19 6.76157C19 6.6489 19 6.5389 19 6.43159C19 6.31892 19 6.20892 19 6.10161C19 5.35044 18.8456 4.67707 18.5368 4.08149C18.228 3.48056 17.7883 2.95741 17.2178 2.51207C16.6472 2.06674 15.9668 1.69651 15.1764 1.40141C14.3913 1.10094 13.5198 0.875586 12.562 0.725352C11.6041 0.575117 10.5835 0.5 9.5 0.5C8.41653 0.5 7.39587 0.575117 6.43802 0.725352C5.48017 0.875586 4.60606 1.10094 3.8157 1.40141C3.03058 1.69651 2.35275 2.06674 1.78223 2.51207C1.21171 2.95741 0.772039 3.48056 0.463223 4.08149C0.154408 4.67707 0 5.35044 0 6.10161C0 6.20892 0 6.31892 0 6.43159C0 6.5389 0 6.6489 0 6.76157ZM1.2719 6.56841C1.2719 6.50403 1.2719 6.43696 1.2719 6.36721C1.2719 6.29745 1.2719 6.23038 1.2719 6.166C1.2719 5.51677 1.42107 4.94803 1.71942 4.45976C2.023 3.96614 2.43912 3.54762 2.96777 3.20423C3.49642 2.85547 4.10882 2.57109 4.80496 2.35111C5.5011 2.13112 6.24959 1.97015 7.05041 1.86821C7.85124 1.76626 8.66777 1.71529 9.5 1.71529C10.3322 1.71529 11.1488 1.76626 11.9496 1.86821C12.7504 1.97015 13.4989 2.13112 14.195 2.35111C14.8912 2.57109 15.5036 2.85547 16.0322 3.20423C16.5661 3.54762 16.9822 3.96614 17.2806 4.45976C17.5789 4.94803 17.7281 5.51677 17.7281 6.166C17.7281 6.23038 17.7281 6.29745 17.7281 6.36721C17.7281 6.43696 17.7281 6.50403 17.7281 6.56841C17.7281 6.69719 17.7072 6.81791 17.6653 6.93059C17.6234 7.04326 17.558 7.13447 17.469 7.20423C17.3853 7.27398 17.278 7.30885 17.1471 7.30885C17.0895 7.30885 17.0267 7.30617 16.9587 7.30081C16.8959 7.29008 16.8095 7.27398 16.6996 7.25252L14.0616 6.74548C13.9307 6.71865 13.8208 6.66499 13.7318 6.58451C13.6481 6.49866 13.6062 6.35647 13.6062 6.15795C13.6062 5.99162 13.6062 5.82529 13.6062 5.65896C13.6062 5.48726 13.6062 5.31825 13.6062 5.15192C13.6062 4.75487 13.5408 4.46513 13.4099 4.2827C13.2843 4.09491 13.1194 3.9715 12.9153 3.91248C12.664 3.83736 12.3081 3.77834 11.8475 3.73542C11.3921 3.69249 10.8871 3.66298 10.3322 3.64689C9.77741 3.63079 9.22259 3.63079 8.66777 3.64689C8.11295 3.66298 7.60523 3.69249 7.14463 3.73542C6.68926 3.77834 6.33595 3.83736 6.08471 3.91248C5.88058 3.9715 5.71309 4.09491 5.58223 4.2827C5.45661 4.46513 5.3938 4.75487 5.3938 5.15192C5.3938 5.31825 5.3938 5.48726 5.3938 5.65896C5.3938 5.82529 5.3938 5.99162 5.3938 6.15795C5.3938 6.35647 5.34931 6.49866 5.26033 6.58451C5.17658 6.66499 5.06928 6.71865 4.93843 6.74548L2.30041 7.25252C2.1905 7.27398 2.10152 7.29008 2.03347 7.30081C1.97066 7.30617 1.91047 7.30885 1.85289 7.30885C1.72204 7.30885 1.61212 7.27398 1.52314 7.20423C1.43939 7.13447 1.37658 7.04326 1.33471 6.93059C1.29284 6.81791 1.2719 6.69719 1.2719 6.56841Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(PhoneDownIcon);
export default ForwardRef;