import * as React from "react";
import { forwardRef } from "react";
const CloudCoIcon = ({
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
  d: "M3.98336 15.5H14.2737C14.9429 15.5 15.562 15.3809 16.131 15.1427C16.7054 14.9097 17.2059 14.5815 17.6327 14.158C18.0648 13.7398 18.3993 13.2528 18.6364 12.6969C18.8788 12.1358 19 11.5323 19 10.8864C19 10.2353 18.8762 9.63182 18.6285 9.07597C18.3809 8.51482 18.0331 8.02779 17.5853 7.61488C17.1374 7.20196 16.6105 6.88168 16.0046 6.65405C15.4039 6.42112 14.7427 6.30466 14.0208 6.30466C13.4939 5.25649 12.7668 4.4333 11.8394 3.8351C10.9174 3.2316 9.87146 2.92986 8.70175 2.92986C7.93247 2.92986 7.20535 3.07014 6.52038 3.35071C5.83541 3.62599 5.22157 4.01509 4.67887 4.518C4.14143 5.02091 3.7041 5.61117 3.36689 6.28878C3.02967 6.96109 2.82682 7.69428 2.75832 8.48835C2.23142 8.63658 1.76775 8.87745 1.3673 9.21096C0.97213 9.54447 0.663893 9.9468 0.442596 10.4179C0.221298 10.8838 0.110649 11.3973 0.110649 11.9584C0.110649 12.6149 0.260815 13.2104 0.561148 13.7451C0.86675 14.2798 1.30671 14.7059 1.88103 15.0236C2.46062 15.3412 3.1614 15.5 3.98336 15.5ZM3.96755 14.2215C3.43012 14.2215 2.96644 14.1289 2.57654 13.9436C2.1919 13.7583 1.89684 13.5016 1.69135 13.1734C1.48586 12.8399 1.38311 12.4481 1.38311 11.9981C1.38311 11.4264 1.55699 10.942 1.90474 10.545C2.25776 10.148 2.75305 9.86474 3.3906 9.69534C3.6119 9.63711 3.76997 9.55241 3.86481 9.44124C3.95965 9.32477 4.01498 9.15008 4.03078 8.91715C4.0782 8.24484 4.231 7.62282 4.48918 7.05109C4.74737 6.47935 5.08722 5.98174 5.50874 5.55823C5.93025 5.12943 6.41237 4.79857 6.95507 4.56564C7.49778 4.32742 8.08001 4.20831 8.70175 4.20831C9.33403 4.20831 9.91625 4.32213 10.4484 4.54976C10.9859 4.7774 11.4653 5.10826 11.8869 5.54235C12.3084 5.97115 12.6667 6.48994 12.9617 7.09873C13.0513 7.2946 13.162 7.43224 13.2937 7.51165C13.4254 7.58576 13.6125 7.62282 13.8548 7.62282C14.6821 7.62282 15.3828 7.77369 15.9572 8.07544C16.5315 8.37189 16.9688 8.77157 17.2691 9.27448C17.5747 9.7721 17.7275 10.32 17.7275 10.9182C17.7275 11.5376 17.5774 12.0961 17.277 12.5937C16.982 13.0913 16.5789 13.4857 16.0678 13.7769C15.562 14.0733 14.9929 14.2215 14.3606 14.2215H3.96755ZM1.10649 7.72605C1.41209 7.72605 1.67027 7.62017 1.88103 7.40842C2.09706 7.19137 2.20507 6.92668 2.20507 6.61435C2.20507 6.30731 2.09706 6.04791 1.88103 5.83616C1.67027 5.61911 1.41209 5.51059 1.10649 5.51059C0.800887 5.51059 0.540072 5.61911 0.324043 5.83616C0.108014 6.04791 0 6.30731 0 6.61435C0 6.92668 0.108014 7.19137 0.324043 7.40842C0.540072 7.62017 0.800887 7.72605 1.10649 7.72605ZM12.693 2.58841C12.9775 2.58841 13.2199 2.48782 13.4201 2.28666C13.6256 2.0802 13.7284 1.83404 13.7284 1.54817C13.7284 1.26231 13.6256 1.01615 13.4201 0.809688C13.2199 0.603229 12.9775 0.5 12.693 0.5C12.4085 0.5 12.1635 0.603229 11.958 0.809688C11.7578 1.01615 11.6577 1.26231 11.6577 1.54817C11.6577 1.83404 11.7578 2.0802 11.958 2.28666C12.1635 2.48782 12.4085 2.58841 12.693 2.58841ZM16.0204 5.33589C16.4472 5.33589 16.8107 5.18502 17.1111 4.88327C17.4114 4.58152 17.5616 4.21096 17.5616 3.77157C17.5616 3.34277 17.4114 2.9775 17.1111 2.67575C16.8107 2.36871 16.4472 2.21519 16.0204 2.21519C15.5831 2.21519 15.2116 2.36871 14.906 2.67575C14.6057 2.9775 14.4555 3.34277 14.4555 3.77157C14.4555 4.21096 14.6057 4.58152 14.906 4.88327C15.2116 5.18502 15.5831 5.33589 16.0204 5.33589ZM7.47671 12.7605C7.99307 12.7605 8.39878 12.6043 8.69384 12.292C8.99418 11.9743 9.15225 11.6117 9.16805 11.2041C9.17332 11.0664 9.13644 10.9553 9.0574 10.8706C8.98364 10.7806 8.88353 10.7356 8.75707 10.7356C8.53577 10.7356 8.39614 10.8706 8.33819 11.1406C8.29076 11.3417 8.20119 11.5323 8.06947 11.7123C7.94301 11.887 7.74542 11.9743 7.47671 11.9743C7.21852 11.9743 7.01303 11.8923 6.86023 11.7282C6.7127 11.5588 6.60732 11.3417 6.54409 11.077C6.48087 10.8123 6.44925 10.5265 6.44925 10.2194C6.44925 9.93356 6.48087 9.65829 6.54409 9.3936C6.60732 9.1289 6.7127 8.9145 6.86023 8.7504C7.01303 8.581 7.21589 8.49629 7.4688 8.49629C7.73752 8.49629 7.93247 8.58364 8.05366 8.75834C8.18012 8.93303 8.26705 9.12096 8.31448 9.32213C8.37243 9.59211 8.51206 9.7271 8.73336 9.7271C8.85982 9.7271 8.95993 9.68475 9.03369 9.60005C9.11273 9.51535 9.14961 9.40154 9.14434 9.2586C9.12854 8.85627 8.97047 8.49894 8.67013 8.18661C8.37507 7.86898 7.96936 7.71016 7.45299 7.71016C7.02094 7.71016 6.66528 7.82398 6.38602 8.05162C6.11204 8.27395 5.90918 8.5757 5.77745 8.95686C5.64573 9.33801 5.57987 9.75887 5.57987 10.2194C5.57987 10.6747 5.64309 11.0956 5.76955 11.482C5.89601 11.8632 6.09886 12.1728 6.37812 12.4111C6.65738 12.644 7.02357 12.7605 7.47671 12.7605ZM11.302 12.7605C11.8763 12.7605 12.3321 12.5328 12.6693 12.0776C13.0065 11.6223 13.1751 11.0082 13.1751 10.2353C13.1751 9.46241 13.0065 8.84833 12.6693 8.39307C12.3321 7.9378 11.8763 7.71016 11.302 7.71016C10.7224 7.71016 10.2614 7.9378 9.91889 8.39307C9.58167 8.84833 9.41306 9.46241 9.41306 10.2353C9.41306 11.0082 9.58167 11.6223 9.91889 12.0776C10.2614 12.5328 10.7224 12.7605 11.302 12.7605ZM11.302 11.9743C10.9911 11.9743 10.7435 11.8208 10.5591 11.5138C10.3799 11.2067 10.2903 10.7806 10.2903 10.2353C10.2903 9.68475 10.3799 9.2586 10.5591 8.95686C10.7435 8.64981 10.9911 8.49629 11.302 8.49629C11.6129 8.49629 11.8579 8.64981 12.037 8.95686C12.2162 9.2586 12.3057 9.68475 12.3057 10.2353C12.3057 10.7806 12.2162 11.2067 12.037 11.5138C11.8579 11.8208 11.6129 11.9743 11.302 11.9743Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CloudCoIcon);
export default ForwardRef;