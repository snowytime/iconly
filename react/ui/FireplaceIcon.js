import * as React from "react";
import { forwardRef } from "react";
const FireplaceIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 18 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.834644 4.33898H17.1654C17.4173 4.33898 17.6194 4.26188 17.7717 4.10768C17.9239 3.94816 18 3.74078 18 3.48554V0.837488C18 0.587571 17.9239 0.38551 17.7717 0.231306C17.6194 0.077102 17.4173 0 17.1654 0H0.834644C0.582676 0 0.380577 0.077102 0.228346 0.231306C0.0761154 0.38551 0 0.587571 0 0.837488V3.48554C0 3.74078 0.0761154 3.94816 0.228346 4.10768C0.380577 4.26188 0.582676 4.33898 0.834644 4.33898ZM1.47244 3.05484C1.33596 3.05484 1.26771 2.98305 1.26771 2.83948V1.4995C1.26771 1.35593 1.33596 1.28415 1.47244 1.28415H16.5276C16.664 1.28415 16.7323 1.35593 16.7323 1.4995V2.83948C16.7323 2.98305 16.664 3.05484 16.5276 3.05484H1.47244ZM1.81102 15.3539H3.07874V3.68495H1.81102V15.3539ZM14.9213 15.3539H16.189V3.68495H14.9213V15.3539ZM4.41732 15.3539H5.40944V6.97109C5.40944 6.6999 5.54067 6.56431 5.80314 6.56431H12.1968C12.4593 6.56431 12.5905 6.6999 12.5905 6.97109V15.3539H13.5827V6.68395C13.5827 6.33832 13.4829 6.06713 13.2834 5.87039C13.084 5.66833 12.8163 5.5673 12.4803 5.5673H5.51968C5.18372 5.5673 4.916 5.66833 4.71653 5.87039C4.51705 6.06713 4.41732 6.33832 4.41732 6.68395V15.3539ZM0.661416 16H17.3386C17.5118 16 17.6614 15.9362 17.7874 15.8086C17.9134 15.681 17.9764 15.5294 17.9764 15.3539C17.9764 15.1785 17.9134 15.0269 17.7874 14.8993C17.6614 14.777 17.5118 14.7159 17.3386 14.7159H0.661416C0.488188 14.7159 0.338582 14.777 0.212598 14.8993C0.086614 15.0269 0.023622 15.1785 0.023622 15.3539C0.023622 15.5294 0.086614 15.681 0.212598 15.8086C0.338582 15.9362 0.488188 16 0.661416 16ZM8.874 14.1017C9.64565 14.1017 10.2625 13.8624 10.7244 13.3838C11.1916 12.9 11.4252 12.2672 11.4252 11.4855C11.4252 10.8315 11.3044 10.2705 11.063 9.80259C10.8215 9.32934 10.5092 8.94384 10.126 8.64606C9.74802 8.34297 9.34382 8.1223 8.91337 7.98405C8.48293 7.84048 8.07873 7.76869 7.70077 7.76869C7.50655 7.76869 7.37269 7.81921 7.2992 7.92024C7.22571 8.02127 7.24146 8.14091 7.34644 8.27916C7.52492 8.50781 7.6824 8.75773 7.81888 9.02891C7.95537 9.29478 8.01836 9.60585 8.00786 9.96211C7.92387 9.79728 7.81101 9.66434 7.66928 9.56331C7.5328 9.46228 7.40156 9.41177 7.27558 9.41177C7.15484 9.41177 7.09448 9.47291 7.09448 9.59521C7.09448 9.63244 7.09448 9.68561 7.09448 9.75474C7.09448 9.81854 7.09448 9.87704 7.09448 9.93021C7.09448 10.1748 7.05511 10.3955 6.97637 10.5922C6.89763 10.789 6.81626 11.0017 6.73227 11.2303C6.65353 11.459 6.61416 11.7488 6.61416 12.0997C6.61416 12.7059 6.82151 13.1924 7.23621 13.5593C7.65091 13.9209 8.19684 14.1017 8.874 14.1017ZM8.95274 13.2802C8.68503 13.2802 8.46718 13.2057 8.2992 13.0568C8.13647 12.9026 8.05511 12.7006 8.05511 12.4506C8.05511 12.1954 8.1181 12.0013 8.24408 11.8684C8.37006 11.7301 8.4488 11.5706 8.4803 11.3898C8.61678 11.4802 8.72439 11.6318 8.80313 11.8445C8.88712 11.7222 8.94749 11.5626 8.98424 11.3659C9.02623 11.1638 9.02361 10.9299 8.97636 10.664C9.21258 10.7491 9.4383 10.9325 9.65353 11.2144C9.86875 11.4909 9.97636 11.8152 9.97636 12.1874C9.97636 12.4799 9.89237 12.7351 9.72439 12.9531C9.55641 13.1712 9.2992 13.2802 8.95274 13.2802Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(FireplaceIcon);
export default ForwardRef;