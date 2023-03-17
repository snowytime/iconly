import * as React from "react";
import { forwardRef } from "react";
const DominicanRepublicIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 36 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M36 24H0V0H36",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.397 13.203C20.3043 13.2357 20.2048 13.2443 20.1078 13.2279C20.0109 13.2114 19.9197 13.1705 19.843 13.109L19.643 13.213C19.7491 13.2217 19.8506 13.2607 19.9351 13.3254C20.0197 13.3901 20.0839 13.4778 20.12 13.578C19.8252 13.6328 19.5211 13.6065 19.24 13.502C18.8743 13.732 18.4465 13.8438 18.015 13.822H17.962C18.0331 14.0123 18.0847 14.2093 18.116 14.41L17.966 14.413C17.9871 14.2926 17.9688 14.1687 17.9136 14.0596C17.8585 13.9506 17.7695 13.8623 17.66 13.808C17.3383 13.7868 17.0279 13.6813 16.76 13.502C16.4789 13.6065 16.1748 13.6328 15.88 13.578C15.916 13.478 15.9801 13.3904 16.0644 13.3257C16.1488 13.2609 16.25 13.2218 16.356 13.213L16.156 13.109C16.0794 13.1703 15.9884 13.2111 15.8917 13.2276C15.7949 13.244 15.6956 13.2356 15.603 13.203C15.603 13.203 15.603 12.733 16.156 12.827L15.9 12.543C15.9 12.543 15.433 12.517 15.518 11.874C15.518 11.874 15.972 11.889 15.972 12.452C16.0412 12.5553 16.1217 12.6506 16.212 12.736C16.1291 12.4823 16.084 12.2178 16.078 11.951C15.9457 11.8875 15.8372 11.7834 15.7683 11.6539C15.6994 11.5243 15.6737 11.3762 15.695 11.231C15.8417 11.2757 15.9683 11.3701 16.053 11.498C16.0709 11.4521 16.0941 11.4085 16.122 11.368C16.0356 11.2785 15.9796 11.1639 15.9622 11.0407C15.9448 10.9175 15.9668 10.792 16.025 10.682C16.1103 10.7452 16.1756 10.8316 16.2132 10.9309C16.2508 11.0302 16.259 11.1382 16.237 11.242C16.3252 11.1673 16.4286 11.1127 16.54 11.082C16.555 11.2202 16.5274 11.3597 16.4609 11.4817C16.3944 11.6038 16.2922 11.7026 16.168 11.765C16.1673 11.8497 16.169 11.9313 16.173 12.01C16.2013 11.9202 16.2574 11.8417 16.3333 11.786C16.4092 11.7302 16.5008 11.7001 16.595 11.7C16.595 12.331 16.31 12.308 16.199 12.275C16.2141 12.3858 16.2368 12.4954 16.267 12.603C16.2935 12.5314 16.3412 12.4696 16.4037 12.4258C16.4662 12.382 16.5407 12.3584 16.617 12.358C16.617 12.78 16.465 12.853 16.357 12.852C16.4051 12.9616 16.4662 13.065 16.539 13.16C16.655 12.836 17.079 12.921 17.079 12.921C17.0355 13.1093 16.9531 13.2865 16.837 13.441C16.9276 13.5025 17.0249 13.5534 17.127 13.593C17.026 13.21 17.193 13.067 17.193 13.067C17.193 13.067 17.447 12.827 17.447 13.203C17.4558 13.3656 17.4009 13.5252 17.294 13.648C17.7584 13.7541 18.2406 13.7541 18.705 13.648C18.5981 13.5252 18.5432 13.3656 18.552 13.203C18.552 12.827 18.806 13.067 18.806 13.067C18.806 13.067 18.973 13.21 18.872 13.593C18.9741 13.5538 19.0713 13.5031 19.162 13.442C19.0461 13.2871 18.964 13.1096 18.921 12.921C18.921 12.921 19.344 12.836 19.461 13.161C19.534 13.0654 19.5951 12.9613 19.643 12.851C19.533 12.853 19.382 12.78 19.382 12.358C19.4583 12.3585 19.5327 12.3822 19.5952 12.426C19.6577 12.4697 19.7054 12.5315 19.732 12.603C19.7622 12.4954 19.7849 12.3858 19.8 12.275C19.69 12.308 19.404 12.331 19.404 11.701C19.4982 11.7011 19.5898 11.7312 19.6657 11.787C19.7416 11.8427 19.7977 11.9212 19.826 12.011C19.8307 11.931 19.8327 11.849 19.832 11.765C19.7074 11.7027 19.6049 11.6038 19.5382 11.4815C19.4715 11.3592 19.4439 11.2195 19.459 11.081C19.5704 11.1117 19.6738 11.1663 19.762 11.241C19.7402 11.1373 19.7485 11.0295 19.7861 10.9304C19.8237 10.8314 19.8889 10.7451 19.974 10.682C20.0322 10.792 20.0542 10.9175 20.0368 11.0407C20.0194 11.1639 19.9634 11.2785 19.877 11.368C19.9053 11.4085 19.9288 11.4521 19.947 11.498C20.0316 11.3707 20.1578 11.2766 20.304 11.232C20.325 11.377 20.2992 11.525 20.2304 11.6543C20.1615 11.7836 20.0531 11.8876 19.921 11.951C19.915 12.2178 19.8699 12.4823 19.787 12.736C19.8773 12.6506 19.9578 12.5553 20.027 12.452C20.027 11.889 20.481 11.874 20.481 11.874C20.566 12.517 20.099 12.544 20.099 12.544L19.843 12.827C20.397 12.733 20.397 13.203 20.397 13.203Z",
  fill: "#64B496"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.4 14.271L20.242 14.611C19.882 14.4385 19.5063 14.3008 19.12 14.2L19.237 13.843C19.6372 13.949 20.0266 14.0923 20.4 14.271ZM19.292 12.827V12.077H16.71V12.827C16.7095 12.8759 16.7186 12.9245 16.7369 12.9699C16.7551 13.0153 16.7822 13.0566 16.8165 13.0916C16.8508 13.1265 16.8916 13.1543 16.9366 13.1734C16.9817 13.1926 17.0301 13.2026 17.079 13.203H17.632C17.7041 13.2033 17.7752 13.2207 17.8393 13.2537C17.9034 13.2867 17.9589 13.3345 18.001 13.393C18.0431 13.3345 18.0986 13.2867 18.1627 13.2537C18.2268 13.2207 18.2979 13.2033 18.37 13.203H18.923C18.972 13.2027 19.0205 13.1928 19.0657 13.1737C19.1108 13.1547 19.1518 13.1269 19.1862 13.0919C19.2206 13.057 19.2477 13.0156 19.266 12.9701C19.2844 12.9247 19.2925 12.876 19.292 12.827ZM15.602 14.271L15.76 14.611C16.12 14.4385 16.4957 14.3008 16.882 14.2L16.765 13.843C16.3651 13.9491 15.9751 14.0924 15.602 14.271ZM18.021 14.047H17.981C17.9714 14.0471 17.9619 14.0491 17.9531 14.0529C17.9443 14.0567 17.9364 14.0622 17.9297 14.0691C17.923 14.076 17.9177 14.0841 17.9142 14.093C17.9106 14.1019 17.9089 14.1114 17.909 14.121V14.161C17.9089 14.1706 17.9106 14.1801 17.9142 14.189C17.9177 14.1979 17.923 14.206 17.9297 14.2129C17.9364 14.2198 17.9443 14.2253 17.9531 14.2291C17.9619 14.2329 17.9714 14.2349 17.981 14.235H18.021C18.0306 14.2349 18.0401 14.2329 18.0489 14.2291C18.0577 14.2253 18.0656 14.2198 18.0723 14.2129C18.079 14.206 18.0843 14.1979 18.0878 14.189C18.0914 14.1801 18.0931 14.1706 18.093 14.161V14.121C18.0931 14.1114 18.0914 14.1019 18.0878 14.093C18.0843 14.0841 18.079 14.076 18.0723 14.0691C18.0656 14.0622 18.0577 14.0567 18.0489 14.0529C18.0401 14.0491 18.0306 14.0471 18.021 14.047Z",
  fill: "#FF6B71"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.987 12.264V10.812L17.499 11.164L18.001 11.419L18.53 11.15L19.016 10.812V12.264C19.0168 12.3249 19.0056 12.3854 18.983 12.442C18.9604 12.4986 18.9269 12.5502 18.8844 12.5939C18.8418 12.6375 18.7911 12.6723 18.7351 12.6964C18.6791 12.7204 18.6189 12.7332 18.558 12.734H18.098C18.09 12.8915 18.0403 13.044 17.954 13.176C17.9593 13.0283 17.9577 12.8805 17.949 12.733H17.445C17.3221 12.7314 17.2049 12.6811 17.119 12.5932C17.0331 12.5053 16.9857 12.3869 16.987 12.264ZM0 24H15.517V14.526H0V24ZM20.483 0V9.474H36V0H20.483ZM18.255 13.983L18.001 14.047L17.747 13.983C17.7333 13.9797 17.7191 13.9795 17.7054 13.9825C17.6916 13.9854 17.6788 13.9915 17.6677 14.0001C17.6566 14.0088 17.6477 14.0198 17.6415 14.0325C17.6353 14.0451 17.6321 14.0589 17.632 14.073V14.209C17.6321 14.2231 17.6353 14.2369 17.6415 14.2495C17.6477 14.2622 17.6566 14.2732 17.6677 14.2819C17.6788 14.2905 17.6916 14.2966 17.7054 14.2995C17.7191 14.3025 17.7333 14.3023 17.747 14.299L18.001 14.235L18.255 14.3C18.2687 14.3033 18.2831 14.3035 18.2969 14.3005C18.3107 14.2975 18.3236 14.2913 18.3347 14.2826C18.3458 14.2738 18.3547 14.2626 18.3609 14.2499C18.367 14.2371 18.3701 14.2231 18.37 14.209V14.074C18.3701 14.0599 18.367 14.0459 18.3609 14.0331C18.3547 14.0204 18.3458 14.0092 18.3347 14.0004C18.3236 13.9917 18.3107 13.9855 18.2969 13.9825C18.2831 13.9795 18.2687 13.9797 18.255 13.983ZM16.447 13.768L16.533 14.133C17.5027 13.896 18.5153 13.896 19.485 14.133L19.571 13.768C18.5448 13.5172 17.4732 13.5172 16.447 13.768Z",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.278 10.199H19.661L19.292 10.574V11.607H18.278V10.199ZM16.71 10.574V11.607H17.724V10.199H16.341L16.71 10.574ZM17.588 9.36C17.0203 9.34704 16.4599 9.48914 15.967 9.771L16.147 10.099C16.5828 9.84995 17.0782 9.72445 17.58 9.736L17.588 9.36ZM18.414 9.36L18.422 9.736C18.9238 9.72445 19.4192 9.84995 19.855 10.099L20.035 9.771C19.542 9.48949 18.9816 9.34774 18.414 9.361V9.36Z",
  fill: "#5F64B9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0H15.517V9.474H0V0ZM18.739 9.636L18.836 9.274C18.2897 9.12195 17.7123 9.12195 17.166 9.274L17.263 9.636C17.7458 9.5015 18.2562 9.5015 18.739 9.636ZM15.603 10.435L15.9 10.658C16.1021 10.3793 16.3536 10.14 16.642 9.952L16.444 9.636C16.1171 9.84862 15.8321 10.1194 15.603 10.435ZM20.483 14.526V24H36V14.526H20.483ZM19.016 10.762L18.831 10.902V10.668L18.185 11.325V11.419L18.555 11.231V11.138L18.647 11.075V11.868C18.605 11.873 18.561 11.878 18.513 11.882C18.339 11.8913 18.1669 11.9229 18.001 11.976L17.951 11.96C17.987 11.893 18.024 11.824 18.062 11.748C18.0491 11.7462 18.036 11.7455 18.023 11.746C17.9545 11.7958 17.8981 11.8604 17.858 11.935C17.7364 11.9085 17.6131 11.8908 17.489 11.882C17.4442 11.8778 17.3996 11.8728 17.355 11.867V11.075L17.448 11.138V11.231L17.817 11.419V11.325L17.447 10.95L17.171 10.668V10.903L16.986 10.763V11.607H16.71V12.077L17.171 12.076V12.025C17.2617 12.0463 17.354 12.0604 17.447 12.067V12.452H17.664C17.6512 12.6067 17.6861 12.7617 17.764 12.896C17.7501 12.7481 17.7538 12.599 17.775 12.452H18.555V12.067C18.648 12.0603 18.7403 12.0463 18.831 12.025V12.075H19.292V11.607H19.016V10.762ZM19.559 9.636L19.361 9.952C19.6491 10.1401 19.9002 10.3794 20.102 10.658L20.399 10.435C20.1703 10.1192 19.8856 9.84902 19.559 9.636Z",
  fill: "#41479B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.123 11.472L18.103 11.443L18.1 11.447L18.065 11.411L18.057 11.422L18.002 11.382L17.946 11.423L17.937 11.412L17.902 11.447L17.899 11.444L17.88 11.471L16.94 10.803L16.981 10.743L17.741 11.283L17.091 10.623L17.142 10.571L17.854 11.295L17.271 10.48L17.329 10.437L18.001 11.377L18.674 10.437L18.732 10.479L18.149 11.293L18.859 10.57L18.91 10.622L18.254 11.29L19.022 10.744L19.062 10.804L18.123 11.472Z",
  fill: "#464655"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.047 10.997H18.185V11.091H18.047V11.513H17.955V11.091H17.817V10.997H17.955V10.856H18.047V10.997ZM17.067 10.648L17.167 10.545L16.965 10.442L17.067 10.648ZM17.241 10.501L17.357 10.416L17.172 10.282L17.241 10.501ZM16.919 10.833L17.001 10.713L16.784 10.648L16.919 10.833ZM18.834 10.545L18.935 10.648L19.037 10.442L18.834 10.545ZM18.761 10.501L18.829 10.281L18.645 10.416L18.761 10.501ZM19 10.714L19.082 10.834L19.217 10.648L19 10.714Z",
  fill: "#FFE15A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.693 11.035V12.17C18.6938 12.281 18.6506 12.3879 18.5728 12.4672C18.495 12.5464 18.389 12.5917 18.278 12.593H18.1C18.1139 12.798 18.0624 13.0021 17.953 13.176C17.8044 13.0095 17.7036 12.806 17.661 12.587C17.5621 12.571 17.4722 12.5202 17.4074 12.4437C17.3427 12.3673 17.3074 12.2702 17.308 12.17V11.042L17.585 11.23V12.17C17.5847 12.2021 17.5955 12.2334 17.6155 12.2585C17.6355 12.2836 17.6636 12.3011 17.695 12.308C17.7437 12.1292 17.8277 11.9619 17.942 11.816C17.9012 11.832 17.8641 11.8562 17.833 11.887L17.687 11.41C17.7235 11.3738 17.7682 11.3469 17.8173 11.3316C17.8663 11.3163 17.9184 11.313 17.969 11.322C18.0051 11.2858 18.0494 11.2587 18.0981 11.243C18.1468 11.2274 18.1985 11.2236 18.249 11.232L18.395 11.71C18.3498 11.7023 18.3034 11.7043 18.2591 11.716C18.2148 11.7278 18.1735 11.7489 18.138 11.778C18.154 11.7932 18.1649 11.813 18.1692 11.8347C18.1735 11.8564 18.171 11.8788 18.162 11.899C18.115 12.064 18.058 12.107 18.075 12.269L18.079 12.311H18.277C18.3138 12.3105 18.3489 12.2955 18.3747 12.2693C18.4005 12.2431 18.415 12.2078 18.415 12.171V11.226L18.693 11.035Z",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(DominicanRepublicIcon);
export default ForwardRef;