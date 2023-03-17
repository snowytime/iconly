import * as React from "react";
import { forwardRef } from "react";
const CloudCo2Icon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 19 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M3.98336 15.5H14.2737C14.9429 15.5 15.562 15.3809 16.131 15.1427C16.7054 14.9097 17.2059 14.5815 17.6327 14.158C18.0648 13.7398 18.3993 13.2528 18.6364 12.6969C18.8788 12.1358 19 11.5323 19 10.8864C19 10.2353 18.8762 9.63182 18.6285 9.07597C18.3809 8.51482 18.0331 8.02779 17.5853 7.61488C17.1374 7.20196 16.6105 6.88168 16.0046 6.65405C15.4039 6.42112 14.7427 6.30466 14.0208 6.30466C13.4939 5.25649 12.7668 4.4333 11.8394 3.8351C10.9174 3.2316 9.87146 2.92986 8.70175 2.92986C7.93247 2.92986 7.20535 3.07014 6.52038 3.35071C5.83541 3.62599 5.22157 4.01509 4.67887 4.518C4.14143 5.02091 3.7041 5.61117 3.36689 6.28878C3.02967 6.96109 2.82682 7.69428 2.75832 8.48835C2.23142 8.63658 1.76775 8.87745 1.3673 9.21096C0.97213 9.54447 0.663893 9.9468 0.442596 10.4179C0.221298 10.8838 0.110649 11.3973 0.110649 11.9584C0.110649 12.6149 0.260815 13.2104 0.561148 13.7451C0.86675 14.2798 1.30671 14.7059 1.88103 15.0236C2.46062 15.3412 3.1614 15.5 3.98336 15.5ZM3.96755 14.2215C3.43012 14.2215 2.96644 14.1289 2.57654 13.9436C2.1919 13.7583 1.89684 13.5016 1.69135 13.1734C1.48586 12.8399 1.38311 12.4481 1.38311 11.9981C1.38311 11.4264 1.55699 10.942 1.90474 10.545C2.25776 10.148 2.75305 9.86474 3.3906 9.69534C3.6119 9.63711 3.76997 9.55241 3.86481 9.44124C3.95965 9.32477 4.01498 9.15008 4.03078 8.91715C4.0782 8.24484 4.231 7.62282 4.48918 7.05109C4.74737 6.47935 5.08722 5.98174 5.50874 5.55823C5.93025 5.12943 6.41237 4.79857 6.95507 4.56564C7.49778 4.32742 8.08001 4.20831 8.70175 4.20831C9.33403 4.20831 9.91625 4.32213 10.4484 4.54976C10.9859 4.7774 11.4653 5.10826 11.8869 5.54235C12.3084 5.97115 12.6667 6.48994 12.9617 7.09873C13.0513 7.2946 13.162 7.43224 13.2937 7.51165C13.4254 7.58576 13.6125 7.62282 13.8548 7.62282C14.6821 7.62282 15.3828 7.77369 15.9572 8.07544C16.5315 8.37189 16.9688 8.77157 17.2691 9.27448C17.5747 9.7721 17.7275 10.32 17.7275 10.9182C17.7275 11.5376 17.5774 12.0961 17.277 12.5937C16.982 13.0913 16.5789 13.4857 16.0678 13.7769C15.562 14.0733 14.9929 14.2215 14.3606 14.2215H3.96755ZM1.10649 7.72605C1.41209 7.72605 1.67027 7.62017 1.88103 7.40842C2.09706 7.19137 2.20507 6.92668 2.20507 6.61435C2.20507 6.30731 2.09706 6.04791 1.88103 5.83616C1.67027 5.61911 1.41209 5.51059 1.10649 5.51059C0.800887 5.51059 0.540072 5.61911 0.324043 5.83616C0.108014 6.04791 0 6.30731 0 6.61435C0 6.92668 0.108014 7.19137 0.324043 7.40842C0.540072 7.62017 0.800887 7.72605 1.10649 7.72605ZM12.693 2.58841C12.9775 2.58841 13.2199 2.48782 13.4201 2.28666C13.6256 2.0802 13.7284 1.83404 13.7284 1.54817C13.7284 1.26231 13.6256 1.01615 13.4201 0.809688C13.2199 0.603229 12.9775 0.5 12.693 0.5C12.4085 0.5 12.1635 0.603229 11.958 0.809688C11.7578 1.01615 11.6577 1.26231 11.6577 1.54817C11.6577 1.83404 11.7578 2.0802 11.958 2.28666C12.1635 2.48782 12.4085 2.58841 12.693 2.58841ZM16.0204 5.33589C16.4472 5.33589 16.8107 5.18502 17.1111 4.88327C17.4114 4.58152 17.5616 4.21096 17.5616 3.77157C17.5616 3.34277 17.4114 2.9775 17.1111 2.67575C16.8107 2.36871 16.4472 2.21519 16.0204 2.21519C15.5831 2.21519 15.2116 2.36871 14.906 2.67575C14.6057 2.9775 14.4555 3.34277 14.4555 3.77157C14.4555 4.21096 14.6057 4.58152 14.906 4.88327C15.2116 5.18502 15.5831 5.33589 16.0204 5.33589ZM6.95507 12.7605C7.47144 12.7605 7.87715 12.6043 8.17221 12.292C8.46728 11.9743 8.62271 11.6117 8.63852 11.2041C8.64379 11.0664 8.6069 10.9553 8.52787 10.8706C8.4541 10.7806 8.35663 10.7356 8.23544 10.7356C8.01414 10.7356 7.87188 10.8706 7.80865 11.1406C7.7665 11.3417 7.67956 11.5323 7.54784 11.7123C7.42138 11.887 7.22379 11.9743 6.95507 11.9743C6.69163 11.9743 6.4835 11.8923 6.3307 11.7282C6.18317 11.5588 6.07779 11.3417 6.01456 11.077C5.95133 10.8123 5.91972 10.5265 5.91972 10.2194C5.91972 9.93356 5.95133 9.65829 6.01456 9.3936C6.08306 9.1289 6.19107 8.9145 6.3386 8.7504C6.48613 8.581 6.68899 8.49629 6.94717 8.49629C7.21589 8.49629 7.41084 8.58364 7.53203 8.75834C7.65849 8.93303 7.74279 9.12096 7.78494 9.32213C7.84817 9.59211 7.99043 9.7271 8.21173 9.7271C8.33292 9.7271 8.43039 9.68475 8.50416 9.60005C8.58319 9.51535 8.62008 9.40154 8.61481 9.2586C8.599 8.85627 8.44357 8.49894 8.1485 8.18661C7.85344 7.86898 7.44773 7.71016 6.93136 7.71016C6.49931 7.71016 6.14365 7.82398 5.86439 8.05162C5.5904 8.27395 5.38491 8.5757 5.24792 8.95686C5.1162 9.33801 5.05033 9.75887 5.05033 10.2194C5.05033 10.6747 5.11356 11.0956 5.24002 11.482C5.36647 11.8632 5.56933 12.1728 5.84859 12.4111C6.12784 12.644 6.49667 12.7605 6.95507 12.7605ZM10.7804 12.7605C11.3494 12.7605 11.8026 12.5328 12.1398 12.0776C12.477 11.6223 12.6456 11.0082 12.6456 10.2353C12.6456 9.46241 12.477 8.84833 12.1398 8.39307C11.8026 7.9378 11.3468 7.71016 10.7725 7.71016C10.1981 7.71016 9.73974 7.9378 9.39725 8.39307C9.06004 8.84833 8.89143 9.46241 8.89143 10.2353C8.89143 11.0082 9.06004 11.6223 9.39725 12.0776C9.73974 12.5328 10.2008 12.7605 10.7804 12.7605ZM10.7804 11.9743C10.4642 11.9743 10.2139 11.8208 10.0295 11.5138C9.85039 11.2067 9.76081 10.7806 9.76081 10.2353C9.76081 9.68475 9.85039 9.2586 10.0295 8.95686C10.2139 8.64981 10.4616 8.49629 10.7725 8.49629C11.0833 8.49629 11.3283 8.64981 11.5075 8.95686C11.6919 9.2586 11.7841 9.68475 11.7841 10.2353C11.7841 10.7806 11.6919 11.2067 11.5075 11.5138C11.3283 11.8208 11.086 11.9743 10.7804 11.9743ZM13.1751 13.0781H14.4555C14.5345 13.0781 14.6004 13.049 14.6531 12.9907C14.711 12.9272 14.74 12.8557 14.74 12.7763C14.74 12.7022 14.711 12.6361 14.6531 12.5778C14.5951 12.5196 14.5293 12.4905 14.4555 12.4905H13.8469L14.0998 12.2205C14.2579 12.067 14.387 11.9161 14.4871 11.7679C14.5872 11.6143 14.6373 11.4582 14.6373 11.2994C14.6373 11.077 14.5556 10.8944 14.3923 10.7515C14.2289 10.6032 14.0208 10.5291 13.7679 10.5291C13.4992 10.5291 13.2858 10.6112 13.1277 10.7753C12.9749 10.9394 12.8985 11.1061 12.8985 11.2755C12.8985 11.3761 12.9275 11.4555 12.9854 11.5138C13.0487 11.5667 13.1198 11.5932 13.1988 11.5932C13.2937 11.5932 13.3648 11.5667 13.4122 11.5138C13.4649 11.4608 13.5018 11.4052 13.5229 11.347C13.5703 11.1935 13.6546 11.1167 13.7758 11.1167C13.9128 11.1167 13.9813 11.1829 13.9813 11.3152C13.9813 11.4052 13.9444 11.5005 13.8706 11.6011C13.7969 11.6964 13.7178 11.789 13.6335 11.879L13.025 12.5064C12.9459 12.5858 12.9064 12.681 12.9064 12.7922C12.9064 12.8716 12.9328 12.9404 12.9854 12.9987C13.0381 13.0516 13.1014 13.0781 13.1751 13.0781Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CloudCo2Icon);
export default ForwardRef;