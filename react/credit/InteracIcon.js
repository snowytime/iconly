import * as React from "react";
import { forwardRef } from "react";
const InteracIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 38 24",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M35 0H3C1.3 0 0 1.3 0 3V21C0 22.7 1.4 24 3 24H35C36.7 24 38 22.7 38 21V3C38 1.3 36.6 0 35 0Z",
  fill: "black",
  fillOpacity: 0.07
}), /*#__PURE__*/React.createElement("path", {
  d: "M35 1C36.1 1 37 1.9 37 3V21C37 22.1 36.1 23 35 23H3C1.9 23 1 22.1 1 21V3C1 1.9 1.9 1 3 1H35Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.453 3.104H26.548C27.376 3.104 28.058 3.785 28.058 4.614V19.709C28.058 20.537 27.376 21.219 26.548 21.219H11.453C10.625 21.219 9.943 20.537 9.943 19.709V4.614C9.943 3.786 10.625 3.104 11.453 3.104Z",
  fill: "#FDB913"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.057 12.357L20.056 9.11399L20.902 8.91299V9.33799C20.902 9.33799 21.122 8.77799 21.631 8.64799C21.707 8.62408 21.7876 8.61893 21.866 8.63299V9.46099C21.7135 9.46284 21.5627 9.49408 21.422 9.55299C21.11 9.67599 20.952 9.94599 20.952 10.358V12.148L20.057 12.357ZM15.595 13.412C15.595 13.412 15.457 13.205 15.457 12.475V10.861L15.021 10.964V10.3L15.458 10.197V9.46999L16.358 9.25699V9.98199L16.994 9.83199V10.496L16.358 10.646V12.291C16.358 13.039 16.556 13.182 16.556 13.182L15.595 13.411V13.412ZM17.088 11.482C17.088 10.906 17.17 10.485 17.347 10.162C17.557 9.77899 17.9 9.52899 18.401 9.41499C19.389 9.19099 19.745 9.77499 19.731 10.559C19.726 10.839 19.727 10.976 19.727 10.976L17.987 11.385V11.413C17.987 11.961 18.102 12.22 18.45 12.147C18.75 12.084 18.833 11.896 18.856 11.664C18.86 11.626 18.862 11.531 18.862 11.531L19.677 11.336C19.677 11.336 19.679 11.402 19.677 11.477C19.671 11.788 19.58 12.56 18.447 12.828C17.374 13.083 17.088 12.428 17.088 11.482ZM18.438 10.019C18.149 10.085 17.998 10.368 17.991 10.836L18.867 10.628L18.868 10.487C18.867 10.133 18.758 9.94699 18.438 10.019ZM24.913 9.58499C24.879 8.59799 25.135 7.81399 26.237 7.56499C26.94 7.40499 27.207 7.58699 27.342 7.76399C27.472 7.93199 27.522 8.15999 27.522 8.47799V8.53599L26.66 8.74099V8.62099C26.66 8.24399 26.555 8.10099 26.281 8.16899C25.955 8.25099 25.823 8.55999 25.823 9.17599L25.824 9.46299C25.824 10.088 25.91 10.374 26.285 10.296C26.611 10.228 26.656 9.94199 26.661 9.69099L26.664 9.52599L27.524 9.32199L27.525 9.45599C27.523 10.276 27.091 10.793 26.281 10.982C25.166 11.243 24.947 10.598 24.913 9.58499ZM21.932 10.968C21.932 10.217 22.372 9.97899 23.035 9.70499C23.63 9.45899 23.643 9.33699 23.645 9.12199C23.649 8.94199 23.565 8.78799 23.269 8.86399C23.1702 8.88409 23.0809 8.93682 23.0156 9.01371C22.9504 9.0906 22.9128 9.18719 22.909 9.28799C22.9048 9.34322 22.9032 9.39861 22.904 9.45399L22.069 9.65199C22.0632 9.48534 22.0828 9.31877 22.127 9.15799C22.26 8.70799 22.657 8.40699 23.34 8.24799C24.229 8.04399 24.525 8.43299 24.526 9.03999V10.477C24.526 11.171 24.656 11.273 24.656 11.273L23.836 11.467C23.79 11.372 23.753 11.274 23.726 11.173C23.699 11.072 23.546 11.625 22.926 11.77C22.276 11.924 21.932 11.52 21.932 10.968ZM23.64 9.94199C23.5019 10.0392 23.3561 10.1248 23.204 10.198C22.93 10.331 22.807 10.496 22.807 10.75C22.807 10.97 22.943 11.114 23.19 11.053C23.456 10.986 23.64 10.738 23.64 10.394V9.94199ZM10.888 15.685C10.7951 15.6831 10.7043 15.6567 10.6249 15.6084C10.5455 15.56 10.4804 15.4915 10.4361 15.4098C10.3918 15.3281 10.3699 15.2362 10.3727 15.1433C10.3755 15.0504 10.4029 14.9599 10.452 14.881L10.458 14.874L10.468 14.871L11.692 14.582V15.512L11.672 15.516C11.395 15.583 11.062 15.659 10.995 15.674C10.9597 15.6808 10.9239 15.6842 10.888 15.684M10.888 16.875C10.795 16.8739 10.704 16.848 10.6243 16.7999C10.5447 16.7519 10.4793 16.6835 10.4349 16.6018C10.3904 16.5201 10.3686 16.428 10.3716 16.3351C10.3746 16.2421 10.4024 16.1517 10.452 16.073L10.458 16.064L10.468 16.062L11.692 15.772V16.702L11.672 16.708C11.395 16.774 11.062 16.851 10.995 16.865C10.9597 16.8718 10.9239 16.8752 10.888 16.875ZM10.888 18.066C10.7953 18.0642 10.7046 18.0379 10.6254 17.9898C10.5461 17.9416 10.481 17.8733 10.4367 17.7918C10.3924 17.7103 10.3704 17.6186 10.3731 17.5258C10.3758 17.4331 10.403 17.3428 10.452 17.264L10.458 17.254L11.692 16.964V17.894L11.672 17.898C11.4467 17.9524 11.2211 18.005 10.995 18.056C10.9597 18.0628 10.9239 18.0662 10.888 18.066ZM10.743 14.545V9.34199L11.692 9.11799V14.321L10.743 14.545ZM13.106 14.103C13.106 13.782 12.842 13.518 12.521 13.518C12.2 13.518 11.936 13.782 11.936 14.103V18.966C11.9402 19.3848 12.1084 19.7853 12.4045 20.0814C12.7007 20.3776 13.1012 20.5458 13.52 20.55L15.177 20.548V16.257C15.1772 16.1309 15.1463 16.0067 15.087 15.8954C15.0277 15.7841 14.9418 15.6891 14.837 15.619L13.361 14.617V16.894C13.3607 16.9273 13.3474 16.9592 13.3238 16.9828C13.3002 17.0064 13.2683 17.0197 13.235 17.02C13.2017 17.0195 13.17 17.006 13.1465 16.9825C13.123 16.959 13.1095 16.9272 13.109 16.894L13.106 14.103ZM13.897 10.475C13.7175 10.5166 13.549 10.5965 13.4032 10.7092C13.2574 10.8219 13.1376 10.9648 13.052 11.128V10.762L12.198 10.964L12.199 13.299C12.3489 13.2397 12.5123 13.223 12.6711 13.2507C12.8299 13.2784 12.978 13.3495 13.099 13.456V11.95C13.099 11.589 13.279 11.3 13.535 11.243C13.728 11.201 13.889 11.27 13.889 11.614V13.814L14.789 13.603V11.276C14.789 10.712 14.572 10.317 13.896 10.476M26.967 7.14499C26.8201 7.14317 26.6797 7.08401 26.5759 6.98013C26.472 6.87625 26.4128 6.73589 26.411 6.58899C26.411 6.28399 26.661 6.03299 26.967 6.03299C27.273 6.03299 27.523 6.28299 27.523 6.58899C27.5222 6.73621 27.4634 6.87717 27.3593 6.98127C27.2552 7.08537 27.1142 7.1442 26.967 7.14499ZM26.967 6.10299C26.7 6.10299 26.481 6.32299 26.481 6.58899C26.481 6.85499 26.701 7.07499 26.967 7.07499C27.233 7.07499 27.453 6.85499 27.453 6.58899C27.4514 6.46058 27.3997 6.33786 27.3089 6.24706C27.2181 6.15625 27.0954 6.10455 26.967 6.10299Z",
  fill: "#231F20"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26.765 6.25799H27.005L27.021 6.25699C27.107 6.25699 27.178 6.32799 27.178 6.41399L27.177 6.43199C27.177 6.51999 27.137 6.58799 27.064 6.59899V6.60099C27.131 6.60799 27.166 6.64499 27.17 6.74099L27.174 6.87799C27.174 6.88972 27.1769 6.90126 27.1825 6.91157C27.1881 6.92188 27.1962 6.93062 27.206 6.93699H27.083C27.0712 6.91921 27.0649 6.89833 27.065 6.87699C27.061 6.83599 27.062 6.79699 27.061 6.74799C27.059 6.67399 27.036 6.64199 26.961 6.64199H26.873V6.93699H26.765V6.25699V6.25799ZM26.96 6.55999H26.97C26.9965 6.55999 27.022 6.54945 27.0407 6.5307C27.0595 6.51195 27.07 6.48651 27.07 6.45999L27.069 6.44999C27.069 6.37799 27.037 6.33999 26.965 6.33999H26.873V6.55999H26.96Z",
  fill: "#231F20"
}));
const ForwardRef = forwardRef(InteracIcon);
export default ForwardRef;