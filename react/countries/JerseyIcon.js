import * as React from "react";
import { forwardRef } from "react";
const JerseyIcon = ({
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
  d: "M20.265 12L36 22.49V24H33.735L18 13.51L2.265 24H0V22.49L15.735 12L0 1.51V0H2.265L18 10.49L33.735 0H36V1.51L20.265 12ZM18 8.96C18 8.96 20.556 7.913 19.676 3.992C18.5925 3.60318 17.4075 3.60318 16.324 3.992C15.444 7.912 18 8.961 18 8.961V8.96Z",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.359 2.46C20.056 2.93349 19.8251 3.44996 19.676 3.992H16.324C16.1748 3.45032 15.9449 2.9342 15.642 2.461C15.6939 2.44691 15.7482 2.44358 15.8014 2.4512C15.8547 2.45883 15.9058 2.47725 15.9517 2.50534C15.9976 2.53343 16.0372 2.5706 16.0682 2.61456C16.0992 2.65852 16.1209 2.70835 16.132 2.761C16.1567 2.72094 16.1893 2.68637 16.2279 2.65943C16.2665 2.63249 16.3102 2.61376 16.3563 2.60438C16.4024 2.59501 16.45 2.5952 16.496 2.60494C16.5421 2.61467 16.5856 2.63376 16.624 2.661C16.624 2.661 16.284 2.911 16.514 3.173C16.5594 3.22064 16.6173 3.25451 16.6811 3.27073C16.7448 3.28696 16.8119 3.28488 16.8745 3.26473C16.9372 3.24458 16.9929 3.20717 17.0352 3.15681C17.0776 3.10645 17.1049 3.04517 17.114 2.98C17.0714 2.97686 17.0315 2.95806 17.0019 2.92723C16.9723 2.89641 16.9552 2.85573 16.9538 2.81303C16.9524 2.77034 16.9669 2.72864 16.9944 2.69598C17.022 2.66331 17.0606 2.64199 17.1029 2.63611C17.1452 2.63024 17.1882 2.64022 17.2236 2.66415C17.259 2.68807 17.2843 2.72425 17.2946 2.7657C17.3049 2.80716 17.2995 2.85096 17.2795 2.88868C17.2594 2.9264 17.2261 2.95537 17.186 2.97C17.228 3.14 17.668 3.271 17.794 2.989C17.8292 2.92776 17.8461 2.85774 17.8429 2.78719C17.8397 2.71664 17.8164 2.64848 17.7757 2.59071C17.7351 2.53295 17.6788 2.48799 17.6135 2.46112C17.5482 2.43424 17.4765 2.42657 17.407 2.439C17.4128 2.38719 17.4317 2.33769 17.4618 2.29512C17.4919 2.25255 17.5323 2.21829 17.5792 2.19554C17.6261 2.17278 17.678 2.16226 17.7301 2.16497C17.7822 2.16767 17.8327 2.18351 17.877 2.211C17.8299 2.08619 17.8164 1.95117 17.838 1.81952C17.8596 1.68787 17.9155 1.56422 18 1.461C18.0845 1.56422 18.1404 1.68787 18.162 1.81952C18.1836 1.95117 18.1701 2.08619 18.123 2.211C18.1673 2.18351 18.2178 2.16767 18.2699 2.16497C18.322 2.16226 18.3739 2.17278 18.4208 2.19554C18.4677 2.21829 18.5081 2.25255 18.5382 2.29512C18.5683 2.33769 18.5872 2.38719 18.593 2.439C18.5235 2.42657 18.4518 2.43424 18.3865 2.46112C18.3212 2.48799 18.2649 2.53295 18.2243 2.59071C18.1836 2.64848 18.1603 2.71664 18.1571 2.78719C18.1539 2.85774 18.1708 2.92776 18.206 2.989C18.332 3.271 18.772 3.141 18.814 2.97C18.7739 2.95534 18.7407 2.92638 18.7207 2.88869C18.7006 2.85101 18.6953 2.80725 18.7055 2.76583C18.7158 2.72442 18.7411 2.68826 18.7764 2.66432C18.8117 2.64038 18.8546 2.63034 18.8969 2.63613C18.9392 2.64192 18.9778 2.66314 19.0054 2.6957C19.033 2.72826 19.0476 2.76986 19.0464 2.81252C19.0451 2.85518 19.0282 2.89587 18.9988 2.92679C18.9694 2.9577 18.9295 2.97666 18.887 2.98C18.8961 3.04517 18.9234 3.10645 18.9658 3.15681C19.0081 3.20717 19.0638 3.24458 19.1265 3.26473C19.1891 3.28488 19.2562 3.28696 19.3199 3.27073C19.3837 3.25451 19.4416 3.22064 19.487 3.173C19.717 2.911 19.376 2.661 19.376 2.661C19.4143 2.63392 19.4578 2.61497 19.5038 2.60533C19.5497 2.59568 19.5971 2.59553 19.6431 2.6049C19.6891 2.61427 19.7327 2.63295 19.7712 2.6598C19.8097 2.68664 19.8423 2.72108 19.867 2.761C19.8782 2.7082 19.9 2.65825 19.9312 2.6142C19.9623 2.57015 20.0022 2.53293 20.0483 2.50484C20.0943 2.47675 20.1457 2.45837 20.1991 2.45083C20.2525 2.44329 20.307 2.44575 20.359 2.46ZM19.483 5.059C19.043 5.098 18.954 5.023 18.954 5.023C19.084 5.027 19.238 4.975 19.262 4.838C19.29 4.681 19.158 4.601 18.981 4.608C18.7515 4.64471 18.5201 4.66908 18.288 4.681C18.056 4.673 18.05 4.439 18.402 4.464C18.924 4.5 19.007 4.431 19.007 4.431C18.727 4.485 18.614 4.385 18.317 4.385C18.02 4.385 17.962 4.595 18.082 4.71C18.216 4.838 18.705 4.752 18.835 4.727C18.965 4.702 19.129 4.701 19.142 4.794C19.154 4.877 18.936 4.873 18.782 4.867C18.538 4.857 18.182 4.925 17.864 4.941C17.6 4.955 17.564 4.879 17.504 4.801C17.5182 4.77526 17.5258 4.74639 17.526 4.717C17.5256 4.70176 17.5233 4.68663 17.519 4.672C17.5465 4.63899 17.5639 4.59869 17.569 4.556C17.5291 4.54949 17.4882 4.55434 17.451 4.57C17.4067 4.53546 17.3522 4.51669 17.296 4.51669C17.2398 4.51669 17.1853 4.53546 17.141 4.57C17.1034 4.5542 17.0622 4.54935 17.022 4.556C17.0271 4.59868 17.0445 4.63896 17.072 4.672C17.0684 4.68672 17.0667 4.70185 17.067 4.717C17.0675 4.74427 17.0739 4.77111 17.0858 4.79564C17.0977 4.82017 17.1148 4.84179 17.136 4.859C17.1566 4.87651 17.1707 4.90047 17.176 4.927L17.184 4.965C17.1858 4.97281 17.1892 4.98015 17.194 4.98654C17.1988 4.99292 17.205 4.99819 17.212 5.002C17.1353 4.99376 17.0616 4.96778 16.9967 4.92613C16.9318 4.88447 16.8774 4.82828 16.838 4.762C16.778 4.676 16.741 4.482 16.65 4.462L16.596 4.752C16.6652 4.90954 16.7802 5.04264 16.926 5.134C17.0444 5.19637 17.1666 5.25115 17.292 5.298C17.302 5.34 17.142 5.367 16.982 5.333C16.869 5.31 16.718 5.143 16.632 5.156L16.732 5.383C16.8359 5.45362 16.9528 5.50267 17.076 5.52723C17.1992 5.5518 17.326 5.55138 17.449 5.526C17.4996 5.51743 17.5466 5.49405 17.584 5.45882C17.6214 5.42358 17.6475 5.37806 17.659 5.328C17.7671 5.30726 17.8745 5.28291 17.981 5.255C18.0716 5.23385 18.164 5.22146 18.257 5.218C18.284 5.281 18.346 5.361 18.558 5.369C18.558 5.369 18.61 5.452 18.434 5.436C18.259 5.419 18.214 5.363 18.112 5.376L18.203 5.597C18.3647 5.54733 18.5347 5.53033 18.703 5.547C18.7181 5.55089 18.734 5.5501 18.7487 5.54475C18.7633 5.53939 18.776 5.52971 18.785 5.517C18.815 5.471 18.801 5.445 18.773 5.405C18.7541 5.35476 18.744 5.30166 18.743 5.248C18.844 5.274 19.153 5.21 19.266 5.219C19.2865 5.22214 19.306 5.22997 19.323 5.24186C19.3399 5.25375 19.354 5.26939 19.3639 5.28757C19.3739 5.30575 19.3795 5.32598 19.3804 5.34669C19.3813 5.3674 19.3774 5.38804 19.369 5.407C19.343 5.452 19.109 5.414 19.109 5.414L19.187 5.633C19.2175 5.61358 19.2453 5.59039 19.27 5.564C19.32 5.518 19.518 5.534 19.518 5.498V5.09C19.5179 5.08558 19.5169 5.08123 19.515 5.0772C19.5132 5.07318 19.5105 5.06957 19.5073 5.06658C19.504 5.0636 19.5002 5.0613 19.496 5.05983C19.4918 5.05835 19.4874 5.05873 19.483 5.059ZM19.206 6.522C18.849 6.554 18.776 6.493 18.776 6.493C18.881 6.496 19.006 6.453 19.026 6.342C19.05 6.214 18.942 6.149 18.797 6.155C18.6099 6.18476 18.4213 6.20445 18.232 6.214C18.042 6.207 18.038 6.016 18.325 6.037C18.751 6.067 18.818 6.01 18.818 6.01C18.59 6.054 18.498 5.973 18.255 5.973C18.012 5.973 17.965 6.143 18.064 6.237C18.174 6.342 18.572 6.272 18.678 6.252C18.784 6.232 18.918 6.23 18.928 6.306C18.938 6.374 18.761 6.37 18.636 6.366C18.436 6.358 18.146 6.413 17.886 6.426C17.671 6.438 17.641 6.376 17.592 6.312C17.61 6.28008 17.6147 6.24235 17.605 6.207C17.6276 6.17997 17.6418 6.14697 17.646 6.112C17.6132 6.10676 17.5796 6.11092 17.549 6.124C17.5128 6.09586 17.4683 6.08058 17.4225 6.08058C17.3767 6.08058 17.3322 6.09586 17.296 6.124C17.2654 6.11092 17.2318 6.10676 17.199 6.112C17.2034 6.14709 17.218 6.18012 17.241 6.207C17.2378 6.21874 17.2361 6.23084 17.236 6.243C17.2362 6.26541 17.2413 6.28751 17.251 6.30773C17.2607 6.32795 17.2747 6.34579 17.292 6.36C17.3089 6.37406 17.3206 6.39345 17.325 6.415L17.331 6.445C17.3324 6.45153 17.3351 6.45768 17.3391 6.46303C17.3431 6.46838 17.3481 6.47281 17.354 6.476C17.2915 6.46938 17.2314 6.44832 17.1785 6.41447C17.1256 6.38063 17.0812 6.33493 17.049 6.281C17 6.21 16.97 6.052 16.896 6.035L16.852 6.272C16.9082 6.40012 17.0016 6.50845 17.12 6.583C17.217 6.63405 17.3172 6.67881 17.42 6.717C17.427 6.752 17.298 6.773 17.166 6.747C17.074 6.727 16.951 6.592 16.88 6.601L16.962 6.787C17.0468 6.84452 17.1422 6.88443 17.2427 6.90436C17.3432 6.92428 17.4467 6.92382 17.547 6.903C17.5882 6.896 17.6264 6.87699 17.6568 6.84834C17.6873 6.8197 17.7085 6.7827 17.718 6.742C17.766 6.732 17.818 6.722 17.982 6.682C18.0555 6.66488 18.1305 6.65483 18.206 6.652C18.228 6.703 18.279 6.769 18.452 6.775C18.452 6.775 18.494 6.843 18.352 6.829C18.208 6.816 18.172 6.77 18.088 6.78L18.163 6.961C18.2947 6.92086 18.433 6.90726 18.57 6.921C18.5825 6.92401 18.5956 6.92314 18.6076 6.91849C18.6195 6.91384 18.6298 6.90565 18.637 6.895C18.662 6.858 18.65 6.837 18.627 6.805C18.6117 6.76368 18.6036 6.72005 18.603 6.676C18.685 6.697 18.938 6.645 19.029 6.653C19.0457 6.65556 19.0615 6.66192 19.0754 6.6716C19.0892 6.68127 19.1006 6.694 19.1087 6.70879C19.1168 6.72358 19.1215 6.74004 19.1222 6.7569C19.1229 6.77375 19.1198 6.79055 19.113 6.806C19.093 6.843 18.901 6.811 18.901 6.811L18.965 6.991C18.99 6.97496 19.0128 6.95581 19.033 6.934C19.073 6.896 19.235 6.909 19.235 6.88V6.548C19.2349 6.54436 19.234 6.54079 19.2325 6.5375C19.2309 6.5342 19.2287 6.53125 19.226 6.52882C19.2233 6.52639 19.2202 6.52454 19.2167 6.52337C19.2133 6.52219 19.2096 6.52173 19.206 6.522ZM18.9 7.704C18.633 7.728 18.578 7.682 18.578 7.682C18.657 7.684 18.751 7.652 18.766 7.569C18.783 7.473 18.703 7.425 18.594 7.429C18.4539 7.45118 18.3127 7.46587 18.171 7.473C18.029 7.468 18.026 7.325 18.241 7.34C18.559 7.363 18.61 7.32 18.61 7.32C18.439 7.354 18.37 7.292 18.188 7.292C18.006 7.292 17.972 7.421 18.045 7.491C18.127 7.569 18.426 7.517 18.505 7.501C18.585 7.486 18.685 7.486 18.693 7.542C18.7 7.593 18.567 7.59 18.473 7.587C18.323 7.581 18.106 7.622 17.913 7.632C17.751 7.641 17.729 7.594 17.692 7.547C17.7006 7.53103 17.7051 7.51315 17.705 7.495C17.7052 7.48591 17.7041 7.47684 17.702 7.468C17.7186 7.44769 17.729 7.42305 17.732 7.397C17.7076 7.39322 17.6827 7.39633 17.66 7.406C17.6329 7.38475 17.5994 7.37321 17.565 7.37321C17.5306 7.37321 17.4971 7.38475 17.47 7.406C17.4473 7.39628 17.4224 7.39316 17.398 7.397C17.4012 7.4227 17.4116 7.44697 17.428 7.467C17.4257 7.47616 17.4247 7.48557 17.425 7.495C17.4253 7.51168 17.4292 7.5281 17.4364 7.54312C17.4437 7.55815 17.4541 7.57141 17.467 7.582C17.4798 7.5924 17.4886 7.60688 17.492 7.623L17.497 7.647C17.4979 7.65175 17.4998 7.65626 17.5025 7.66022C17.5053 7.66419 17.5089 7.66752 17.513 7.67C17.4662 7.66482 17.4213 7.64885 17.3817 7.62334C17.3421 7.59783 17.309 7.56348 17.285 7.523C17.249 7.47 17.226 7.353 17.17 7.339L17.138 7.517C17.18 7.61286 17.2496 7.694 17.338 7.75C17.4108 7.78812 17.4859 7.82152 17.563 7.85C17.568 7.876 17.471 7.892 17.373 7.872C17.304 7.857 17.212 7.756 17.159 7.763L17.22 7.903C17.2835 7.94591 17.355 7.97563 17.4303 7.9904C17.5055 8.00518 17.583 8.0047 17.658 7.989C17.6888 7.98376 17.7173 7.96959 17.74 7.94825C17.7628 7.92692 17.7788 7.89935 17.786 7.869C17.822 7.862 17.862 7.854 17.983 7.824C18.0385 7.81086 18.0951 7.80316 18.152 7.801C18.168 7.84 18.206 7.889 18.336 7.893C18.336 7.893 18.367 7.944 18.26 7.934C18.153 7.924 18.126 7.89 18.063 7.897L18.119 8.033C18.2177 8.00288 18.3213 7.99268 18.424 8.003C18.4334 8.00519 18.4432 8.00445 18.4521 8.00087C18.4611 7.99729 18.4687 7.99106 18.474 7.983C18.493 7.956 18.484 7.94 18.467 7.915C18.4556 7.88426 18.4495 7.85179 18.449 7.819C18.51 7.835 18.699 7.796 18.768 7.802C18.7805 7.804 18.7924 7.80883 18.8027 7.81613C18.813 7.82342 18.8216 7.83298 18.8277 7.84408C18.8337 7.85517 18.8372 7.86751 18.8378 7.88015C18.8384 7.89279 18.836 7.90539 18.831 7.917C18.815 7.944 18.671 7.921 18.671 7.921L18.72 8.054C18.7383 8.04211 18.7551 8.02801 18.77 8.012C18.8 7.984 18.922 7.993 18.922 7.972V7.724C18.922 7.7212 18.9214 7.71842 18.9203 7.71585C18.9192 7.71329 18.9175 7.71099 18.9155 7.7091C18.9134 7.70721 18.9109 7.70579 18.9083 7.70491C18.9056 7.70403 18.9028 7.70372 18.9 7.704Z",
  fill: "#FFE15A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.351 4.982H17.249C17.2429 4.98157 17.2372 4.97904 17.2328 4.97484C17.2285 4.97064 17.2257 4.96503 17.225 4.959L17.218 4.921C17.2154 4.9064 17.2107 4.89225 17.204 4.879H17.396C17.3893 4.89226 17.3846 4.9064 17.382 4.921L17.376 4.959C17.3753 4.96519 17.3724 4.97093 17.3678 4.97515C17.3632 4.97937 17.3572 4.9818 17.351 4.982ZM17.359 6.41L17.365 6.44C17.3652 6.44523 17.3674 6.45017 17.3711 6.45387C17.3748 6.45757 17.3798 6.45976 17.385 6.46H17.468C17.4732 6.45976 17.4782 6.45757 17.4819 6.45387C17.4856 6.45017 17.4878 6.44523 17.488 6.44L17.493 6.41C17.4953 6.39781 17.4993 6.38602 17.505 6.375H17.348C17.3534 6.38605 17.3571 6.39785 17.359 6.41ZM17.508 7.594C17.5122 7.60219 17.5153 7.61095 17.517 7.62L17.521 7.643C17.5215 7.64672 17.5232 7.65016 17.526 7.65272C17.5287 7.65528 17.5323 7.65679 17.536 7.657H17.598C17.6017 7.65679 17.6053 7.65528 17.608 7.65272C17.6108 7.65016 17.6125 7.64672 17.613 7.643L17.617 7.62C17.6184 7.61099 17.6211 7.60224 17.625 7.594H17.508Z",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.623 5.428C16.6206 5.41477 16.6208 5.4012 16.6238 5.38808C16.6267 5.37496 16.6323 5.36257 16.6401 5.35164C16.648 5.34072 16.6579 5.33149 16.6694 5.32451C16.6809 5.31753 16.6937 5.31293 16.707 5.311C16.6561 5.30939 16.6061 5.32488 16.565 5.355C16.5603 5.32981 16.5658 5.3038 16.5802 5.28262C16.5946 5.26145 16.6168 5.24685 16.642 5.242C16.6056 5.22457 16.5647 5.21898 16.525 5.226C16.525 5.226 16.549 5.128 16.671 5.167C16.732 5.187 16.734 5.211 16.72 5.229C16.778 5.234 16.75 5.284 16.736 5.304C16.846 5.289 16.774 5.387 16.774 5.387C16.7475 5.38336 16.7206 5.38511 16.6948 5.39216C16.669 5.3992 16.6449 5.4114 16.624 5.428H16.623ZM18.199 5.505C18.208 5.482 18.225 5.423 18.164 5.435C18.179 5.411 18.18 5.382 18.107 5.377C17.979 5.367 17.978 5.469 17.978 5.469C18.0176 5.45144 18.0619 5.44757 18.104 5.458C18.001 5.514 18.044 5.593 18.044 5.593C18.0772 5.55455 18.1222 5.52818 18.172 5.518C18.1597 5.52313 18.1485 5.53066 18.1391 5.54014C18.1297 5.54962 18.1223 5.56087 18.1173 5.57324C18.1122 5.5856 18.1097 5.59885 18.1098 5.61219C18.11 5.62554 18.1127 5.63873 18.118 5.651C18.1345 5.62976 18.1552 5.61209 18.1787 5.59903C18.2023 5.58597 18.2282 5.5778 18.255 5.575C18.255 5.575 18.301 5.465 18.199 5.505ZM19.192 5.542C19.202 5.52 19.22 5.467 19.162 5.474C19.178 5.452 19.181 5.424 19.111 5.414C18.988 5.398 18.981 5.496 18.981 5.496C19.0208 5.481 19.0645 5.47994 19.105 5.493C19.003 5.54 19.038 5.619 19.038 5.619C19.0719 5.58383 19.1166 5.56096 19.165 5.554C19.1528 5.55815 19.1415 5.5647 19.1318 5.57326C19.1222 5.58183 19.1143 5.59224 19.1087 5.60388C19.1031 5.61553 19.0999 5.62817 19.0993 5.64107C19.0986 5.65397 19.1006 5.66686 19.105 5.679C19.16 5.627 19.19 5.627 19.19 5.627C19.19 5.627 19.29 5.511 19.192 5.542ZM16.472 4.745C16.5 4.73744 16.5291 4.73558 16.5578 4.73954C16.5865 4.74349 16.6141 4.75317 16.639 4.768C16.639 4.768 16.745 4.706 16.646 4.673C16.674 4.655 16.729 4.611 16.643 4.578C16.674 4.57 16.763 4.539 16.665 4.473C16.6519 4.46153 16.6366 4.45299 16.6199 4.44794C16.6033 4.44289 16.5858 4.44145 16.5686 4.44373C16.5513 4.446 16.5348 4.45193 16.52 4.46111C16.5053 4.4703 16.4926 4.48254 16.483 4.497C16.511 4.4988 16.5383 4.5065 16.5631 4.5196C16.5879 4.5327 16.6097 4.5509 16.627 4.573L16.621 4.571C16.475 4.528 16.452 4.643 16.452 4.643C16.5043 4.6328 16.5586 4.64055 16.606 4.665C16.5919 4.66097 16.5771 4.65985 16.5625 4.66173C16.5479 4.66361 16.5339 4.66845 16.5213 4.67593C16.5086 4.68342 16.4977 4.69341 16.489 4.70529C16.4804 4.71716 16.4752 4.73067 16.472 4.745ZM17.3 4.954C17.277 4.954 17.258 4.957 17.26 4.99L17.27 5.132C17.272 5.154 17.285 5.17 17.3 5.17C17.315 5.17 17.328 5.154 17.33 5.132L17.34 4.99C17.342 4.957 17.324 4.954 17.3 4.954ZM16.966 6.723C16.977 6.706 17.001 6.665 16.953 6.661C16.964 6.646 16.963 6.626 16.913 6.611C16.813 6.578 16.793 6.659 16.793 6.659C16.8255 6.65279 16.8591 6.65699 16.889 6.671C16.8686 6.67511 16.8507 6.68707 16.8391 6.70429C16.8275 6.7215 16.8232 6.74259 16.827 6.763C16.8604 6.73893 16.9008 6.72662 16.942 6.728C16.9313 6.7297 16.921 6.73351 16.9117 6.73922C16.9025 6.74493 16.8944 6.75243 16.8881 6.76127C16.8818 6.77011 16.8773 6.78012 16.8749 6.79072C16.8724 6.80131 16.8721 6.81229 16.874 6.823C16.8911 6.80925 16.9108 6.79914 16.932 6.79329C16.9531 6.78745 16.9753 6.78599 16.997 6.789C16.997 6.789 17.054 6.711 16.966 6.723ZM18.159 6.886C18.167 6.867 18.181 6.819 18.131 6.829C18.143 6.809 18.144 6.786 18.085 6.781C17.981 6.773 17.98 6.856 17.98 6.856C18.0125 6.84202 18.0487 6.8392 18.083 6.848C18 6.893 18.033 6.958 18.033 6.958C18.0601 6.92624 18.0971 6.90443 18.138 6.896C18.1278 6.90005 18.1185 6.90612 18.1106 6.91384C18.1028 6.92156 18.0966 6.93078 18.0924 6.94095C18.0882 6.95113 18.0861 6.96204 18.0862 6.97304C18.0863 6.98404 18.0886 6.99491 18.093 7.005C18.1065 6.98764 18.1234 6.9732 18.1427 6.96254C18.1619 6.95189 18.1831 6.94524 18.205 6.943C18.205 6.943 18.243 6.853 18.159 6.886ZM18.969 6.916C18.977 6.899 18.993 6.855 18.945 6.86C18.958 6.843 18.96 6.82 18.903 6.812C18.803 6.798 18.798 6.878 18.798 6.878C18.8302 6.86615 18.8654 6.86544 18.898 6.876C18.815 6.915 18.844 6.979 18.844 6.979C18.8718 6.95027 18.9084 6.93162 18.948 6.926C18.938 6.92938 18.9288 6.9347 18.9208 6.94167C18.9129 6.94863 18.9064 6.9571 18.9018 6.96659C18.8971 6.97607 18.8944 6.98638 18.8937 6.99692C18.8931 7.00746 18.8945 7.01802 18.898 7.028C18.943 6.985 18.968 6.985 18.968 6.985C18.968 6.985 19.049 6.89 18.969 6.916ZM16.75 6.266C16.7729 6.25975 16.7969 6.25821 16.8204 6.26148C16.844 6.26474 16.8666 6.27275 16.887 6.285C16.887 6.285 16.974 6.234 16.893 6.207C16.916 6.193 16.961 6.157 16.89 6.13C16.916 6.123 16.988 6.098 16.908 6.044C16.8973 6.03482 16.8848 6.02801 16.8712 6.02401C16.8577 6.02002 16.8435 6.01893 16.8295 6.02081C16.8155 6.0227 16.8021 6.02753 16.7901 6.03497C16.7782 6.04241 16.7679 6.05231 16.76 6.064C16.7829 6.06525 16.8052 6.07133 16.8255 6.08185C16.8459 6.09236 16.8638 6.10707 16.878 6.125L16.873 6.124C16.753 6.089 16.735 6.183 16.735 6.183C16.7777 6.17427 16.8221 6.18026 16.861 6.2C16.8494 6.19672 16.8373 6.19585 16.8254 6.19743C16.8135 6.19901 16.802 6.20302 16.7917 6.2092C16.7814 6.21539 16.7725 6.22362 16.7655 6.23339C16.7585 6.24315 16.7525 6.25425 16.75 6.266ZM17.426 6.436C17.407 6.436 17.392 6.439 17.394 6.466L17.402 6.582C17.403 6.6 17.414 6.613 17.426 6.613C17.439 6.613 17.449 6.6 17.451 6.582L17.458 6.466C17.46 6.439 17.446 6.436 17.426 6.436ZM17.222 7.854C17.23 7.842 17.248 7.811 17.212 7.808C17.221 7.797 17.22 7.782 17.182 7.77C17.108 7.746 17.093 7.806 17.093 7.806C17.1171 7.80175 17.142 7.80525 17.164 7.816C17.1488 7.81914 17.1354 7.82814 17.1268 7.84106C17.1182 7.85397 17.115 7.86976 17.118 7.885C17.1429 7.86677 17.1731 7.85727 17.204 7.858C17.1959 7.85932 17.1882 7.86225 17.1813 7.86661C17.1744 7.87098 17.1684 7.87669 17.1637 7.88341C17.1591 7.89012 17.1558 7.89771 17.1541 7.90571C17.1525 7.91372 17.1524 7.92198 17.154 7.93C17.1666 7.91977 17.1812 7.9122 17.1969 7.90773C17.2125 7.90327 17.2289 7.902 17.245 7.904C17.245 7.904 17.288 7.845 17.222 7.854ZM18.116 7.976C18.121 7.963 18.132 7.926 18.094 7.934C18.104 7.919 18.104 7.902 18.06 7.898C17.982 7.892 17.981 7.954 17.981 7.954C18.0056 7.94334 18.0331 7.94123 18.059 7.948C17.996 7.982 18.021 8.03 18.021 8.03C18.0412 8.00645 18.0686 7.99027 18.099 7.984C18.0914 7.98716 18.0845 7.99181 18.0787 7.99766C18.073 8.00351 18.0684 8.01045 18.0653 8.01809C18.0622 8.02572 18.0607 8.03389 18.0608 8.04211C18.061 8.05034 18.0627 8.05846 18.066 8.066C18.0761 8.05288 18.0887 8.04195 18.1032 8.03387C18.1176 8.02579 18.1335 8.02073 18.15 8.019C18.15 8.019 18.178 7.952 18.116 7.976ZM18.722 8C18.728 7.987 18.74 7.953 18.704 7.958C18.714 7.944 18.715 7.928 18.673 7.921C18.598 7.911 18.593 7.971 18.593 7.971C18.617 7.96165 18.6435 7.96094 18.668 7.969C18.607 7.999 18.628 8.046 18.628 8.046C18.6488 8.02436 18.6763 8.01029 18.706 8.006C18.6985 8.00858 18.6916 8.01263 18.6856 8.01791C18.6797 8.02319 18.6748 8.0296 18.6714 8.03676C18.668 8.04393 18.666 8.0517 18.6656 8.05964C18.6651 8.06758 18.6663 8.07552 18.669 8.083C18.703 8.051 18.721 8.051 18.721 8.051C18.721 8.051 18.782 7.981 18.722 8ZM17.06 7.512C17.0772 7.50724 17.0952 7.50603 17.1129 7.50843C17.1306 7.51084 17.1477 7.51682 17.163 7.526C17.163 7.526 17.226 7.489 17.167 7.469C17.183 7.459 17.219 7.431 17.165 7.41C17.184 7.406 17.239 7.387 17.179 7.346C17.171 7.33911 17.1616 7.33401 17.1514 7.33101C17.1413 7.32801 17.1306 7.32719 17.1201 7.32861C17.1097 7.33003 17.0996 7.33365 17.0906 7.33923C17.0816 7.34481 17.0739 7.35223 17.068 7.361C17.0851 7.36201 17.1018 7.36663 17.1169 7.37456C17.1321 7.38249 17.1454 7.39354 17.156 7.407L17.152 7.406C17.062 7.38 17.049 7.45 17.049 7.45C17.0809 7.44367 17.114 7.44825 17.143 7.463C17.1343 7.46046 17.1252 7.45972 17.1163 7.46084C17.1073 7.46196 17.0987 7.4649 17.0909 7.4695C17.0831 7.47409 17.0763 7.48023 17.071 7.48755C17.0657 7.49486 17.062 7.50318 17.06 7.512ZM17.567 7.64C17.552 7.64 17.541 7.642 17.543 7.662L17.549 7.749C17.549 7.762 17.557 7.772 17.567 7.772C17.577 7.772 17.584 7.762 17.585 7.749L17.591 7.662C17.592 7.642 17.581 7.64 17.567 7.64Z",
  fill: "#82AFFF"
}));
const ForwardRef = forwardRef(JerseyIcon);
export default ForwardRef;