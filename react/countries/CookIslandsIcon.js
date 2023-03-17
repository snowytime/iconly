import * as React from "react";
import { forwardRef } from "react";
const CookIslandsIcon = ({
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
  fill: "#41479B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.7 13.824L20.336 14.455C20.3299 14.4656 20.3206 14.4741 20.3093 14.4791C20.2981 14.4841 20.2856 14.4854 20.2736 14.4828C20.2616 14.4803 20.2507 14.474 20.2425 14.4649C20.2343 14.4557 20.2292 14.4442 20.228 14.432L20.148 13.704L19.445 13.546C19.4334 13.5427 19.4231 13.536 19.4154 13.5268C19.4077 13.5175 19.403 13.5062 19.4018 13.4942C19.4006 13.4823 19.4031 13.4702 19.4088 13.4597C19.4145 13.4491 19.4233 13.4405 19.434 13.435L20.089 13.132L20.019 12.403C20.0179 12.391 20.0206 12.3789 20.0267 12.3685C20.0328 12.3581 20.042 12.3498 20.053 12.3449C20.064 12.3399 20.0762 12.3385 20.0881 12.3409C20.0999 12.3432 20.1107 12.3492 20.119 12.358L20.605 12.898L21.265 12.605C21.2764 12.6005 21.2888 12.5997 21.3007 12.6025C21.3125 12.6054 21.3232 12.6119 21.3312 12.6212C21.3392 12.6304 21.3442 12.6419 21.3454 12.654C21.3466 12.6662 21.344 12.6784 21.338 12.689L20.983 13.326L21.46 13.873C21.4681 13.8822 21.4731 13.8937 21.4744 13.9059C21.4757 13.9181 21.4731 13.9304 21.467 13.9411C21.461 13.9518 21.4518 13.9603 21.4406 13.9655C21.4295 13.9706 21.4171 13.9722 21.405 13.97L20.7 13.824ZM23.802 17.466L23.574 16.771C23.5701 16.7595 23.5628 16.7494 23.5529 16.7423C23.543 16.7352 23.5312 16.7314 23.519 16.7314C23.5068 16.7314 23.495 16.7352 23.4851 16.7423C23.4752 16.7494 23.4679 16.7595 23.464 16.771L23.237 17.466L22.517 17.471C22.5048 17.4716 22.4931 17.476 22.4835 17.4834C22.4738 17.4909 22.4667 17.5011 22.463 17.5127C22.4593 17.5244 22.4593 17.5368 22.4628 17.5485C22.4664 17.5602 22.4734 17.5704 22.483 17.578L23.062 18.013L22.845 18.711C22.8409 18.7227 22.8406 18.7354 22.8443 18.7472C22.8479 18.7591 22.8552 18.7694 22.8652 18.7768C22.8751 18.7842 22.8872 18.7882 22.8996 18.7882C22.9119 18.7882 22.924 18.7843 22.934 18.777L23.519 18.351L24.105 18.777C24.115 18.7843 24.1271 18.7882 24.1394 18.7882C24.1518 18.7882 24.1639 18.7842 24.1738 18.7768C24.1838 18.7694 24.1911 18.7591 24.1947 18.7472C24.1984 18.7354 24.1981 18.7227 24.194 18.711L23.977 18.013L24.555 17.578C24.5646 17.5704 24.5716 17.5602 24.5752 17.5485C24.5787 17.5368 24.5787 17.5244 24.575 17.5127C24.5713 17.5011 24.5642 17.4909 24.5545 17.4834C24.5449 17.476 24.5332 17.4716 24.521 17.471L23.802 17.466ZM22.615 16.003L21.96 15.7L22.03 14.972C22.0313 14.9599 22.0288 14.9477 22.0228 14.9371C22.0168 14.9265 22.0077 14.918 21.9966 14.9129C21.9855 14.9078 21.9731 14.9064 21.9612 14.9087C21.9492 14.9111 21.9383 14.9171 21.93 14.926L21.444 15.466L20.784 15.174C20.7728 15.1697 20.7605 15.169 20.7488 15.1719C20.7372 15.1748 20.7266 15.1811 20.7187 15.1902C20.7108 15.1992 20.7058 15.2104 20.7044 15.2224C20.703 15.2343 20.7053 15.2464 20.711 15.257L21.066 15.894L20.588 16.442C20.5799 16.4512 20.5749 16.4627 20.5736 16.4749C20.5723 16.4871 20.5749 16.4994 20.581 16.5101C20.587 16.5208 20.5962 16.5293 20.6074 16.5345C20.6185 16.5396 20.6309 16.5412 20.643 16.539L21.348 16.392L21.713 17.023C21.7193 17.0332 21.7286 17.0413 21.7396 17.046C21.7507 17.0508 21.7629 17.0519 21.7746 17.0494C21.7864 17.0469 21.7971 17.0408 21.8052 17.0319C21.8133 17.0231 21.8185 17.0119 21.82 17L21.901 16.273L22.604 16.115C22.6159 16.1119 22.6265 16.1052 22.6344 16.0959C22.6424 16.0866 22.6473 16.075 22.6485 16.0628C22.6497 16.0506 22.6471 16.0384 22.6411 16.0277C22.6351 16.017 22.626 16.0084 22.615 16.003ZM31.995 9.349L32.575 9.784L32.357 10.482C32.3526 10.4938 32.3522 10.5068 32.3558 10.5189C32.3594 10.531 32.3669 10.5416 32.3771 10.549C32.3872 10.5565 32.3996 10.5604 32.4122 10.5602C32.4248 10.5601 32.437 10.5558 32.447 10.548L33.032 10.122L33.617 10.548C33.627 10.5558 33.6392 10.5601 33.6518 10.5602C33.6644 10.5604 33.6768 10.5565 33.687 10.549C33.6971 10.5416 33.7046 10.531 33.7082 10.5189C33.7118 10.5068 33.7114 10.4938 33.707 10.482L33.489 9.784L34.069 9.349C34.0786 9.34139 34.0857 9.33101 34.0892 9.31926C34.0927 9.30751 34.0926 9.29496 34.0888 9.2833C34.085 9.27164 34.0777 9.26143 34.0679 9.25405C34.0581 9.24666 34.0463 9.24246 34.034 9.242L33.314 9.237L33.087 8.542C33.0831 8.53047 33.0758 8.52044 33.0659 8.51334C33.056 8.50623 33.0442 8.50241 33.032 8.50241C33.0198 8.50241 33.008 8.50623 32.9981 8.51334C32.9882 8.52044 32.9809 8.53047 32.977 8.542L32.749 9.237L32.029 9.242C32.0168 9.24265 32.0051 9.24699 31.9955 9.25445C31.9858 9.26191 31.9787 9.27212 31.975 9.28374C31.9713 9.29536 31.9712 9.30783 31.9748 9.31949C31.9784 9.33115 31.9854 9.34144 31.995 9.349ZM21.568 8.543L21.932 9.175C21.9382 9.18568 21.9476 9.19412 21.9589 9.19908C21.9702 9.20404 21.9828 9.20527 21.9948 9.2026C22.0068 9.19992 22.0177 9.19348 22.0258 9.1842C22.034 9.17492 22.0389 9.16329 22.04 9.151L22.12 8.424L22.823 8.266C22.8346 8.26281 22.845 8.25621 22.8528 8.24704C22.8606 8.23787 22.8655 8.22656 22.8668 8.21459C22.8681 8.20261 22.8657 8.19052 22.8601 8.1799C22.8544 8.16927 22.8457 8.16059 22.835 8.155L22.18 7.852L22.25 7.122C22.2514 7.10976 22.2488 7.0974 22.2427 7.08671C22.2366 7.07602 22.2272 7.06755 22.216 7.06254C22.2047 7.05753 22.1922 7.05622 22.1801 7.05882C22.1681 7.06142 22.1572 7.06779 22.149 7.077L21.663 7.617L21.003 7.325C20.9918 7.32072 20.9795 7.31998 20.9678 7.32287C20.9562 7.32576 20.9456 7.33215 20.9377 7.34117C20.9298 7.3502 20.9248 7.36144 20.9234 7.37338C20.922 7.38532 20.9243 7.3974 20.93 7.408L21.285 8.045L20.808 8.593C20.7999 8.60221 20.7949 8.61371 20.7936 8.62592C20.7923 8.63812 20.7949 8.65041 20.801 8.66108C20.807 8.67175 20.8162 8.68027 20.8274 8.68546C20.8385 8.69064 20.8509 8.69223 20.863 8.69L21.568 8.543ZM31.134 7.667L31.214 8.395C31.2152 8.40721 31.2203 8.41872 31.2285 8.42785C31.2367 8.43699 31.2476 8.44329 31.2596 8.44585C31.2716 8.44841 31.2841 8.44709 31.2953 8.44208C31.3066 8.43708 31.3159 8.42865 31.322 8.418L31.687 7.788L32.392 7.934C32.4041 7.93623 32.4165 7.93464 32.4276 7.92946C32.4388 7.92427 32.448 7.91575 32.454 7.90508C32.4601 7.89441 32.4627 7.88212 32.4614 7.86992C32.4601 7.85771 32.4551 7.84621 32.447 7.837L31.969 7.289L32.324 6.652C32.3297 6.6414 32.332 6.62932 32.3306 6.61738C32.3292 6.60544 32.3242 6.5942 32.3163 6.58517C32.3084 6.57615 32.2978 6.56976 32.2862 6.56687C32.2745 6.56398 32.2622 6.56472 32.251 6.569L31.591 6.861L31.105 6.321C31.0967 6.31211 31.0858 6.30606 31.0738 6.30371C31.0619 6.30137 31.0495 6.30285 31.0384 6.30794C31.0273 6.31303 31.0182 6.32147 31.0122 6.33207C31.0062 6.34267 31.0037 6.35489 31.005 6.367L31.075 7.095L30.42 7.398C30.409 7.40336 30.3999 7.41196 30.3939 7.42266C30.3879 7.43336 30.3853 7.44563 30.3865 7.45783C30.3877 7.47003 30.3926 7.48157 30.4006 7.49089C30.4085 7.50022 30.4191 7.50689 30.431 7.51L31.134 7.667ZM28.97 6.331L29.335 6.961C29.3411 6.97165 29.3504 6.98008 29.3617 6.98508C29.3729 6.99009 29.3854 6.99141 29.3974 6.98885C29.4094 6.98629 29.4203 6.97999 29.4285 6.97085C29.4367 6.96172 29.4418 6.95021 29.443 6.938L29.523 6.211L30.226 6.053C30.2376 6.04981 30.248 6.04321 30.2558 6.03404C30.2636 6.02487 30.2685 6.01356 30.2698 6.00159C30.2711 5.98961 30.2687 5.97752 30.2631 5.9669C30.2574 5.95627 30.2487 5.94759 30.238 5.942L29.583 5.639L29.653 4.91C29.6546 4.89767 29.6523 4.88514 29.6462 4.87426C29.6402 4.86338 29.6309 4.85473 29.6195 4.84957C29.6082 4.84442 29.5956 4.84304 29.5834 4.84564C29.5712 4.84823 29.5602 4.85467 29.552 4.864L29.066 5.404L28.406 5.112C28.3948 5.10772 28.3825 5.10698 28.3708 5.10987C28.3592 5.11276 28.3486 5.11915 28.3407 5.12817C28.3328 5.1372 28.3278 5.14844 28.3264 5.16038C28.325 5.17232 28.3273 5.1844 28.333 5.195L28.688 5.832L28.21 6.38C28.2019 6.38921 28.1969 6.40071 28.1956 6.41292C28.1943 6.42512 28.1969 6.43741 28.203 6.44808C28.209 6.45875 28.2182 6.46727 28.2294 6.47246C28.2405 6.47764 28.2529 6.47923 28.265 6.477L28.97 6.331ZM20.124 10.751L19.907 11.45C19.9026 11.4618 19.9022 11.4748 19.9058 11.4869C19.9094 11.499 19.9169 11.5096 19.9271 11.517C19.9372 11.5245 19.9496 11.5284 19.9622 11.5282C19.9748 11.5281 19.987 11.5238 19.997 11.516L20.582 11.09L21.167 11.516C21.177 11.5233 21.1891 11.5272 21.2014 11.5272C21.2138 11.5272 21.2259 11.5232 21.2358 11.5158C21.2458 11.5084 21.2531 11.4981 21.2567 11.4862C21.2604 11.4744 21.2601 11.4617 21.256 11.45L21.039 10.752L21.618 10.317C21.6276 10.3094 21.6346 10.2991 21.6382 10.2875C21.6417 10.2758 21.6417 10.2634 21.638 10.2517C21.6343 10.2401 21.6272 10.2299 21.6175 10.2224C21.6079 10.215 21.5962 10.2106 21.584 10.21L20.864 10.205L20.637 9.51C20.6331 9.49847 20.6258 9.48844 20.6159 9.48134C20.606 9.47423 20.5942 9.47041 20.582 9.47041C20.5698 9.47041 20.558 9.47423 20.5481 9.48134C20.5382 9.48844 20.5309 9.49847 20.527 9.51L20.299 10.205L19.579 10.21C19.5668 10.2106 19.5551 10.215 19.5455 10.2224C19.5358 10.2299 19.5287 10.2401 19.525 10.2517C19.5213 10.2634 19.5213 10.2758 19.5248 10.2875C19.5284 10.2991 19.5354 10.3094 19.545 10.317L20.124 10.751ZM31.495 16.867L31.267 16.173C31.2631 16.1615 31.2558 16.1514 31.2459 16.1443C31.236 16.1372 31.2242 16.1334 31.212 16.1334C31.1998 16.1334 31.188 16.1372 31.1781 16.1443C31.1682 16.1514 31.1609 16.1615 31.157 16.173L30.93 16.867L30.21 16.873C30.1978 16.8736 30.1861 16.878 30.1765 16.8854C30.1668 16.8929 30.1597 16.9031 30.156 16.9147C30.1523 16.9264 30.1522 16.9388 30.1558 16.9505C30.1594 16.9622 30.1664 16.9724 30.176 16.98L30.755 17.414L30.538 18.113C30.5342 18.1246 30.5342 18.1371 30.538 18.1488C30.5418 18.1604 30.5491 18.1705 30.559 18.1777C30.5688 18.1849 30.5807 18.1888 30.5929 18.1889C30.6052 18.1889 30.6171 18.1851 30.627 18.178L31.212 17.753L31.798 18.178C31.8079 18.1851 31.8198 18.1889 31.8321 18.1889C31.8443 18.1888 31.8562 18.1849 31.866 18.1777C31.8759 18.1705 31.8832 18.1604 31.887 18.1488C31.8908 18.1371 31.8908 18.1246 31.887 18.113L31.67 17.414L32.248 16.98C32.2576 16.9724 32.2646 16.9622 32.2682 16.9505C32.2717 16.9388 32.2717 16.9264 32.268 16.9147C32.2643 16.9031 32.2572 16.8929 32.2475 16.8854C32.2379 16.878 32.2262 16.8736 32.214 16.873L31.495 16.867ZM33.357 15.012L33.712 14.376C33.7182 14.3653 33.7209 14.3529 33.7197 14.3406C33.7185 14.3283 33.7135 14.3166 33.7053 14.3073C33.6971 14.298 33.6862 14.2916 33.6741 14.2888C33.662 14.2861 33.6494 14.2872 33.638 14.292L32.978 14.585L32.493 14.045C32.4847 14.0362 32.4739 14.0302 32.4621 14.0279C32.4502 14.0255 32.438 14.0269 32.427 14.0319C32.416 14.0368 32.4068 14.0451 32.4007 14.0555C32.3946 14.0659 32.3919 14.078 32.393 14.09L32.463 14.819L31.807 15.122C31.7963 15.1276 31.7876 15.1363 31.7819 15.1469C31.7763 15.1575 31.7739 15.1696 31.7752 15.1816C31.7765 15.1936 31.7814 15.2049 31.7892 15.214C31.797 15.2232 31.8074 15.2298 31.819 15.233L32.522 15.391L32.602 16.118C32.6031 16.1303 32.608 16.1419 32.6162 16.1512C32.6243 16.1605 32.6352 16.1669 32.6472 16.1696C32.6592 16.1723 32.6718 16.171 32.6831 16.1661C32.6944 16.1611 32.7038 16.1527 32.71 16.142L33.075 15.511L33.78 15.657C33.792 15.659 33.8043 15.6572 33.8152 15.6519C33.8261 15.6466 33.8352 15.6381 33.8411 15.6275C33.847 15.6169 33.8495 15.6047 33.8482 15.5926C33.8469 15.5805 33.842 15.5692 33.834 15.56L33.357 15.012ZM29.227 18.338L29.297 17.61C29.2983 17.5979 29.2958 17.5857 29.2898 17.5751C29.2838 17.5645 29.2747 17.556 29.2636 17.5509C29.2525 17.5458 29.2401 17.5444 29.2282 17.5467C29.2162 17.5491 29.2053 17.5551 29.197 17.564L28.711 18.104L28.051 17.812C28.0398 17.8077 28.0275 17.807 28.0158 17.8099C28.0042 17.8128 27.9936 17.8191 27.9857 17.8282C27.9778 17.8372 27.9728 17.8484 27.9714 17.8604C27.97 17.8723 27.9723 17.8844 27.978 17.895L28.333 18.532L27.855 19.08C27.8469 19.0892 27.8419 19.1007 27.8406 19.1129C27.8393 19.1251 27.8419 19.1374 27.848 19.1481C27.854 19.1588 27.8632 19.1673 27.8744 19.1725C27.8855 19.1776 27.8979 19.1792 27.91 19.177L28.615 19.03L28.98 19.661C28.9863 19.6712 28.9956 19.6793 29.0066 19.684C29.0177 19.6888 29.0299 19.6899 29.0416 19.6874C29.0534 19.6849 29.0641 19.6788 29.0722 19.6699C29.0803 19.6611 29.0855 19.6499 29.087 19.638L29.168 18.91L29.871 18.753C29.8829 18.7499 29.8935 18.7432 29.9014 18.7339C29.9094 18.7246 29.9143 18.713 29.9155 18.7008C29.9167 18.6886 29.9141 18.6764 29.9081 18.6657C29.9021 18.655 29.893 18.6464 29.882 18.641L29.227 18.338ZM34.594 12.423L33.939 12.12L34.009 11.391C34.0106 11.3787 34.0083 11.3661 34.0022 11.3553C33.9962 11.3444 33.9869 11.3357 33.9755 11.3306C33.9642 11.3254 33.9516 11.324 33.9394 11.3266C33.9272 11.3292 33.9162 11.3357 33.908 11.345L33.422 11.885L32.762 11.593C32.7508 11.5887 32.7385 11.588 32.7268 11.5909C32.7152 11.5938 32.7046 11.6001 32.6967 11.6092C32.6888 11.6182 32.6838 11.6294 32.6824 11.6414C32.681 11.6533 32.6833 11.6654 32.689 11.676L33.044 12.313L32.567 12.861C32.5589 12.8702 32.5539 12.8817 32.5526 12.8939C32.5513 12.9061 32.5539 12.9184 32.56 12.9291C32.566 12.9398 32.5752 12.9483 32.5864 12.9535C32.5975 12.9586 32.6099 12.9602 32.622 12.958L33.327 12.812L33.691 13.442C33.6971 13.4526 33.7064 13.4611 33.7177 13.4661C33.7289 13.4711 33.7414 13.4724 33.7534 13.4698C33.7654 13.4673 33.7763 13.461 33.7845 13.4519C33.7927 13.4427 33.7978 13.4312 33.799 13.419L33.879 12.692L34.582 12.534C34.5936 12.5308 34.604 12.5242 34.6118 12.515C34.6196 12.5059 34.6245 12.4946 34.6258 12.4826C34.6271 12.4706 34.6247 12.4585 34.6191 12.4479C34.6134 12.4373 34.6047 12.4286 34.594 12.423ZM26.568 18.743L26.922 18.106C26.9277 18.0954 26.93 18.0833 26.9286 18.0714C26.9272 18.0594 26.9222 18.0482 26.9143 18.0392C26.9064 18.0301 26.8958 18.0238 26.8842 18.0209C26.8725 18.018 26.8602 18.0187 26.849 18.023L26.189 18.316L25.704 17.776C25.6957 17.7672 25.6849 17.7612 25.6731 17.7589C25.6612 17.7565 25.649 17.7579 25.638 17.7629C25.627 17.7678 25.6178 17.7761 25.6117 17.7865C25.6056 17.7969 25.6029 17.809 25.604 17.821L25.673 18.55L25.018 18.853C25.0073 18.8585 24.9985 18.8671 24.9928 18.8777C24.9871 18.8882 24.9846 18.9003 24.9858 18.9122C24.987 18.9242 24.9917 18.9355 24.9994 18.9448C25.0071 18.954 25.0174 18.9607 25.029 18.964L25.732 19.122L25.812 19.849C25.8131 19.8613 25.818 19.8729 25.8262 19.8822C25.8343 19.8915 25.8452 19.8979 25.8572 19.9006C25.8692 19.9033 25.8818 19.902 25.8931 19.8971C25.9044 19.8921 25.9138 19.8837 25.92 19.873L26.285 19.242L26.99 19.388C27.0021 19.3902 27.0145 19.3886 27.0256 19.3835C27.0368 19.3783 27.046 19.3698 27.052 19.3591C27.0581 19.3484 27.0607 19.3361 27.0594 19.3239C27.0581 19.3117 27.0531 19.3002 27.045 19.291L26.568 18.743ZM26.743 5.119L26.516 4.424C26.5121 4.41247 26.5048 4.40244 26.4949 4.39534C26.485 4.38823 26.4732 4.38441 26.461 4.38441C26.4488 4.38441 26.437 4.38823 26.4271 4.39534C26.4172 4.40244 26.4099 4.41247 26.406 4.424L26.178 5.119L25.458 5.124C25.4458 5.12465 25.4341 5.12899 25.4245 5.13645C25.4148 5.14391 25.4077 5.15413 25.404 5.16575C25.4003 5.17737 25.4003 5.18983 25.4038 5.20149C25.4074 5.21315 25.4144 5.22344 25.424 5.231L26.003 5.666L25.786 6.364C25.7816 6.37583 25.7812 6.38878 25.7848 6.40087C25.7884 6.41297 25.7959 6.42355 25.8061 6.43102C25.8162 6.43849 25.8286 6.44243 25.8412 6.44224C25.8538 6.44206 25.866 6.43776 25.876 6.43L26.46 6.004L27.046 6.43C27.056 6.43732 27.0681 6.44125 27.0804 6.44121C27.0928 6.44117 27.1049 6.43717 27.1148 6.4298C27.1248 6.42242 27.1321 6.41205 27.1357 6.40022C27.1394 6.38838 27.1391 6.37568 27.135 6.364L26.918 5.666L27.497 5.231C27.5066 5.22344 27.5136 5.21315 27.5172 5.20149C27.5208 5.18983 27.5207 5.17737 27.517 5.16575C27.5133 5.15413 27.5062 5.14391 27.4965 5.13645C27.4869 5.12899 27.4752 5.12465 27.463 5.124L26.743 5.119ZM24.32 6.246L24.675 5.609C24.6809 5.59831 24.6833 5.58607 24.6819 5.57397C24.6805 5.56186 24.6754 5.55047 24.6673 5.54137C24.6592 5.53228 24.6485 5.52592 24.6366 5.52316C24.6247 5.52041 24.6123 5.5214 24.601 5.526L23.942 5.819L23.456 5.279C23.4477 5.27021 23.4369 5.26422 23.4251 5.26186C23.4132 5.25951 23.401 5.2609 23.39 5.26586C23.379 5.27081 23.3698 5.27907 23.3637 5.2895C23.3576 5.29992 23.3549 5.31198 23.356 5.324L23.426 6.053L22.77 6.356C22.7593 6.36159 22.7506 6.37027 22.7449 6.3809C22.7393 6.39152 22.7369 6.40361 22.7382 6.41559C22.7395 6.42756 22.7444 6.43887 22.7522 6.44804C22.76 6.45721 22.7704 6.46381 22.782 6.467L23.484 6.625L23.565 7.352C23.5661 7.36429 23.571 7.37592 23.5792 7.3852C23.5873 7.39448 23.5982 7.40092 23.6102 7.4036C23.6222 7.40627 23.6348 7.40504 23.6461 7.40008C23.6574 7.39512 23.6668 7.38668 23.673 7.376L24.037 6.745L24.742 6.891C24.7541 6.89323 24.7665 6.89164 24.7776 6.88646C24.7888 6.88127 24.798 6.87275 24.804 6.86208C24.8101 6.85141 24.8127 6.83912 24.8114 6.82692C24.8101 6.81471 24.8051 6.80321 24.797 6.794L24.32 6.246ZM10.55 3.833V0H7.449V3.833L1.698 0H0V1.133L4.933 4.42H0V7.578H4.933L0 10.867V12H1.699L7.449 8.167V12H10.552V8.167L16.302 12H18V10.867L13.067 7.58H18V4.42H13.067L18 1.133V0H16.301L10.55 3.833Z",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 6.947H9.931V12H8.069V6.947H0V5.053H8.069V0H9.931V5.053H18V6.947ZM6.828 4.421L0.166 0.001H0V0.664L5.688 4.421H6.828ZM18 0.253V0H17.245L10.552 4.421H11.692L18 0.253ZM0 11.729V12H0.738L7.43 7.579H6.29L0 11.729ZM18 11.423L12.178 7.579H11.038L17.512 12H18V11.423Z",
  fill: "#FF4B55"
}));
const ForwardRef = forwardRef(CookIslandsIcon);
export default ForwardRef;