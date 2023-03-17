import * as React from "react";
import { forwardRef } from "react";
const ShieldSlashIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 16 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M1.83581 9.9357C1.83581 10.6503 1.94131 11.271 2.15232 11.7978C2.36334 12.3246 2.70359 12.8149 3.1731 13.2687C3.6426 13.7225 4.26245 14.1919 5.03264 14.677C5.80811 15.1621 6.75767 15.7176 7.88131 16.3435C7.98154 16.3957 8.07913 16.4348 8.17408 16.4609C8.26904 16.487 8.34817 16.5 8.41147 16.5C8.47478 16.5 8.55391 16.487 8.64886 16.4609C8.74382 16.4348 8.84141 16.3957 8.94164 16.3435C9.55885 15.9993 10.1207 15.6785 10.6271 15.3812C11.1388 15.0891 11.5978 14.81 12.004 14.544L11.0386 13.5817C10.7432 13.7747 10.4187 13.9781 10.0653 14.1919C9.71184 14.4058 9.3241 14.6405 8.90208 14.8961C8.78602 14.9639 8.69106 15.0108 8.61721 15.0369C8.54336 15.0682 8.47478 15.0839 8.41147 15.0839C8.34817 15.0839 8.27959 15.0682 8.20574 15.0369C8.13188 15.0108 8.03693 14.9639 7.92087 14.8961C7.00824 14.3484 6.24069 13.879 5.6182 13.4878C5.00099 13.0914 4.50775 12.7158 4.13848 12.3611C3.76921 12.0012 3.5028 11.61 3.33927 11.1875C3.17573 10.765 3.09397 10.2513 3.09397 9.64621V5.72641L1.83581 4.49022V9.9357ZM14.3145 12.4707C14.5519 12.116 14.7234 11.7352 14.8289 11.3284C14.9344 10.9163 14.9871 10.4521 14.9871 9.9357V3.95037C14.9871 3.5383 14.9001 3.2436 14.726 3.06626C14.5519 2.88892 14.2961 2.72983 13.9585 2.589C13.7738 2.51076 13.518 2.41165 13.1909 2.29169C12.8638 2.1665 12.5025 2.0335 12.1068 1.89267C11.7165 1.74662 11.3234 1.60318 10.9278 1.46235C10.5321 1.32152 10.1708 1.19372 9.84372 1.07897C9.51665 0.964222 9.2608 0.87555 9.07616 0.812958C8.97066 0.781663 8.85987 0.755583 8.74382 0.734719C8.63304 0.708639 8.52225 0.695599 8.41147 0.695599C8.30069 0.695599 8.18991 0.708639 8.07913 0.734719C7.96835 0.760799 7.8602 0.786879 7.7547 0.812958C7.51203 0.891198 7.17178 1.00595 6.73393 1.15721C6.30135 1.30848 5.83449 1.47539 5.33333 1.65795C4.83218 1.84051 4.36004 2.01524 3.91691 2.18215L4.90603 3.16797C5.18035 3.06887 5.46258 2.96716 5.75272 2.86284C6.04286 2.75852 6.33037 2.65681 6.61523 2.5577C6.9001 2.45338 7.16914 2.35689 7.42235 2.26822C7.67557 2.17433 7.89977 2.09348 8.09496 2.02567C8.15826 1.99959 8.21629 1.98134 8.26904 1.9709C8.32179 1.96047 8.36927 1.95526 8.41147 1.95526C8.45368 1.95526 8.50115 1.96047 8.55391 1.9709C8.60666 1.98134 8.66469 1.99959 8.72799 2.02567C8.97066 2.10913 9.25025 2.21084 9.56676 2.33081C9.88328 2.44556 10.2156 2.56813 10.5638 2.69853C10.9172 2.82372 11.2681 2.95151 11.6162 3.08191C11.9697 3.20709 12.3046 3.32706 12.6212 3.44181C12.9377 3.55656 13.2199 3.65566 13.4679 3.73912C13.5734 3.77563 13.6419 3.82779 13.6736 3.8956C13.7105 3.96341 13.729 4.06251 13.729 4.19291V9.64621C13.729 10.027 13.6973 10.3686 13.634 10.6711C13.5707 10.9685 13.4679 11.2423 13.3254 11.4927L14.3145 12.4707ZM14.9555 16.1323C15.0768 16.2522 15.2219 16.3122 15.3907 16.3122C15.5595 16.3122 15.7019 16.2522 15.818 16.1323C15.9393 16.0175 16 15.8767 16 15.7098C16 15.5429 15.9393 15.3994 15.818 15.2795L1.04451 0.679951C0.923178 0.559984 0.778107 0.5 0.609298 0.5C0.440488 0.5 0.295417 0.559984 0.174085 0.679951C0.0580283 0.789487 0 0.930318 0 1.10244C0 1.27457 0.0580283 1.41801 0.174085 1.53276L14.9555 16.1323Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ShieldSlashIcon);
export default ForwardRef;