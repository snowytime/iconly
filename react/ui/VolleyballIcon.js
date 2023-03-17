import * as React from "react";
import { forwardRef } from "react";
const VolleyballIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M11.2158 15.0353L11.404 14.0314C10.9648 14.0262 10.5622 13.8615 10.1962 13.5373C9.83541 13.2079 9.51645 12.7791 9.23933 12.251C8.9622 11.7177 8.73214 11.1373 8.54913 10.5098C8.36612 9.88237 8.23279 9.26538 8.14913 8.65884C8.7609 8.10459 9.32822 7.52943 9.85109 6.93335C10.374 6.33727 10.8263 5.74903 11.208 5.16864C11.5897 4.58302 11.8772 4.02615 12.0707 3.49805C12.2642 2.96994 12.34 2.49412 12.2982 2.07059C12.2616 1.64183 12.0812 1.29151 11.757 1.01961L11.0903 1.78824C11.3151 1.97647 11.3884 2.27713 11.3099 2.6902C11.2367 3.09805 11.0328 3.58432 10.6982 4.14903C10.3687 4.70851 9.92953 5.30982 9.3805 5.95295C8.83148 6.59086 8.19874 7.23662 7.4824 7.89021C6.77129 7.5974 6.06802 7.35688 5.37259 7.16864C4.67717 6.98041 4.01311 6.87322 3.38043 6.84707C2.75298 6.8157 2.1804 6.88368 1.66275 7.051C1.1451 7.21832 0.705884 7.50851 0.345099 7.92159L1.08236 8.48629C1.33856 8.2144 1.67059 8.02616 2.07844 7.92159C2.48628 7.81701 2.95167 7.78825 3.47455 7.83531C4.00265 7.88237 4.5752 7.99479 5.1922 8.17257C5.80919 8.35034 6.45756 8.58041 7.1373 8.86276C7.2105 9.37518 7.32292 9.91113 7.47456 10.4706C7.62619 11.0249 7.8171 11.5687 8.04717 12.102C8.28246 12.6301 8.55436 13.1111 8.86286 13.5451C9.17658 13.9739 9.52952 14.3216 9.92168 14.5883C10.3138 14.8549 10.7452 15.004 11.2158 15.0353ZM9.27854 12.5412C10.3191 11.9085 11.1923 11.2523 11.8982 10.5726C12.6093 9.8876 13.1792 9.21048 13.608 8.54119C14.0367 7.87191 14.3531 7.23923 14.557 6.64315C14.7609 6.04707 14.8786 5.51897 14.9099 5.05883C14.9413 4.59347 14.9178 4.22746 14.8393 3.96079L13.8589 4.25099C13.9217 4.44968 13.9348 4.74249 13.8982 5.12942C13.8616 5.51635 13.7465 5.96864 13.5531 6.48629C13.3596 7.00394 13.0642 7.5608 12.6668 8.15688C12.2694 8.74773 11.7387 9.35166 11.0746 9.96865C10.4158 10.5804 9.5975 11.1765 8.61972 11.7569L9.27854 12.5412ZM7.16867 15.7647L7.93736 14.9491C7.61841 14.8654 7.2288 14.6379 6.76867 14.2667C6.31377 13.9007 5.86148 13.4013 5.41181 12.7687C4.96213 12.136 4.58305 11.3752 4.27455 10.4863C3.96605 9.59741 3.80396 8.59087 3.78827 7.46668L2.76079 7.55296C2.78171 8.66669 2.94121 9.68368 3.23925 10.6039C3.53729 11.519 3.91376 12.3268 4.36867 13.0275C4.82357 13.7281 5.29939 14.3085 5.79612 14.7687C6.29285 15.2288 6.75037 15.5608 7.16867 15.7647ZM10.055 5.43531L10.5021 4.51766C10.0576 4.22485 9.55567 3.95556 8.99619 3.70981C8.43671 3.45883 7.84057 3.25491 7.20789 3.09805C6.57521 2.93595 5.92684 2.84445 5.26279 2.82354C4.59873 2.80262 3.93991 2.87582 3.28631 3.04314C2.63272 3.20524 2.00262 3.48759 1.39608 3.8902L1.46667 4.96472C2.00523 4.55164 2.5752 4.25622 3.17651 4.07844C3.77782 3.90066 4.38958 3.817 5.01181 3.82746C5.63926 3.83269 6.25364 3.90851 6.85495 4.05491C7.45626 4.20132 8.02887 4.3974 8.57266 4.64315C9.12168 4.88367 9.6158 5.14772 10.055 5.43531ZM8.00011 0C6.9073 0 5.87717 0.209151 4.90985 0.627452C3.94775 1.04575 3.09805 1.62353 2.36079 2.36079C1.62353 3.09805 1.04575 3.95034 0.627452 4.91766C0.209151 5.87975 0 6.9072 0 8.00002C0 9.09283 0.209151 10.1229 0.627452 11.0902C1.04575 12.0523 1.62353 12.902 2.36079 13.6392C3.10327 14.3765 3.9556 14.9543 4.91769 15.3726C5.88501 15.7909 6.91514 16 8.00795 16C9.10077 16 10.1282 15.7909 11.0903 15.3726C12.0576 14.9543 12.9073 14.3765 13.6393 13.6392C14.3766 12.902 14.9544 12.0523 15.3727 11.0902C15.791 10.1229 16 9.09283 16 8.00002C16 6.9072 15.791 5.87975 15.3727 4.91766C14.9544 3.95034 14.3766 3.09805 13.6393 2.36079C12.9021 1.62353 12.0498 1.04575 11.0825 0.627452C10.1204 0.209151 9.09292 0 8.00011 0ZM8.00011 1.06667C8.94652 1.06667 9.83802 1.24968 10.6746 1.61569C11.5112 1.97647 12.2485 2.47582 12.8864 3.11373C13.5243 3.75164 14.0236 4.4889 14.3844 5.3255C14.7504 6.16211 14.9335 7.05361 14.9335 8.00002C14.9335 8.94642 14.7531 9.83793 14.3923 10.6745C14.0315 11.5111 13.5321 12.2484 12.8942 12.8863C12.2563 13.5242 11.5191 14.0236 10.6825 14.3843C9.84587 14.7504 8.95436 14.9334 8.00795 14.9334C7.06155 14.9334 6.16998 14.7504 5.33338 14.3843C4.49677 14.0236 3.7569 13.5242 3.11376 12.8863C2.47585 12.2484 1.97386 11.5111 1.60785 10.6745C1.24706 9.83793 1.06667 8.94642 1.06667 8.00002C1.06667 7.05361 1.24706 6.16211 1.60785 5.3255C1.97386 4.4889 2.47585 3.75164 3.11376 3.11373C3.75167 2.47582 4.48893 1.97647 5.32553 1.61569C6.16214 1.24968 7.0537 1.06667 8.00011 1.06667Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(VolleyballIcon);
export default ForwardRef;