import * as React from "react";
import { forwardRef } from "react";
const MoldovaIcon = ({
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
  d: "M12 0H24V24H12V0Z",
  fill: "#FFE15A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.8 9.706H15.397V14.772C15.335 15.2315 15.1251 15.6584 14.799 15.988L14.8 9.706ZM17.986 15.178V18.015L19.381 17.002L18.385 14.975L17.986 15.178ZM15.664 16.072L15.974 16.328L17.38 14.572L17.071 14.316L15.664 16.072ZM18.793 14.572L20.2 16.328L20.508 16.072L19.101 14.316L18.793 14.572ZM20.576 14.772C20.6377 15.2314 20.8472 15.6583 21.173 15.988V9.706H20.576V14.772ZM22.339 12.006L21.742 13.005L22.167 13.268L22.765 12.269L22.339 12.006Z",
  fill: "#FFCD5A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.255 14.189L19.874 14.962L19.256 15.474L18.637 14.701L19.255 14.189ZM16.298 14.962L16.915 15.474L17.535 14.701L16.917 14.189L16.298 14.962ZM15.596 8.559C15.5965 8.49715 15.5849 8.4358 15.5617 8.37845C15.5385 8.3211 15.5042 8.26888 15.4609 8.22478C15.4175 8.18067 15.3659 8.14553 15.3089 8.12138C15.252 8.09722 15.1909 8.08452 15.129 8.084H14.868C14.8061 8.08452 14.745 8.09722 14.6881 8.12138C14.6311 8.14553 14.5795 8.18067 14.5361 8.22478C14.4928 8.26888 14.4585 8.3211 14.4353 8.37845C14.4121 8.4358 14.4005 8.49715 14.401 8.559V9.909H15.198V14.975C15.5238 14.6453 15.7333 14.2184 15.795 13.759V9.706H15.596V8.559ZM21.105 8.084H20.843C20.7811 8.08452 20.72 8.09722 20.6631 8.12138C20.6061 8.14553 20.5545 8.18067 20.5111 8.22478C20.4678 8.26888 20.4335 8.3211 20.4103 8.37845C20.3871 8.4358 20.3755 8.49715 20.376 8.559V9.706H20.177V13.759C20.2389 14.2185 20.4488 14.6454 20.775 14.975V9.908H21.571V8.56C21.5721 8.43525 21.5236 8.31518 21.4362 8.22613C21.3489 8.13707 21.2297 8.08632 21.105 8.085V8.084Z",
  fill: "#FFBE5A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.592 9.908H15C14.9962 9.80103 15.014 9.69439 15.0523 9.59444C15.0906 9.4945 15.1487 9.4033 15.223 9.32628C15.2974 9.24926 15.3865 9.18801 15.485 9.14617C15.5835 9.10434 15.6895 9.08277 15.7965 9.08277C15.9035 9.08277 16.0095 9.10434 16.108 9.14617C16.2065 9.18801 16.2956 9.24926 16.37 9.32628C16.4443 9.4033 16.5024 9.4945 16.5407 9.59444C16.579 9.69439 16.5968 9.80103 16.593 9.908H16.592ZM20.177 9.098C19.9639 9.09985 19.7603 9.1862 19.6109 9.33807C19.4614 9.48995 19.3784 9.69494 19.38 9.908H20.974C20.9756 9.69494 20.8926 9.48995 20.7431 9.33807C20.5937 9.1862 20.3901 9.09985 20.177 9.098ZM22.427 12.058L19.638 16.719L19.894 16.877L22.683 12.217L22.427 12.058Z",
  fill: "#FFAA5A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.303 16.825L15.421 15.438C15.265 15.4496 15.1094 15.4099 14.978 15.325C14.8972 15.2806 14.8261 15.2203 14.7691 15.1478C14.712 15.0753 14.6702 14.992 14.646 14.903C14.768 14.8712 14.8969 14.8793 15.014 14.926C14.9893 14.8615 14.9738 14.7938 14.968 14.725L14.664 14.246C14.5081 14.2579 14.3525 14.2186 14.221 14.134C14.1401 14.0894 14.0689 14.029 14.0119 13.9563C13.9548 13.8837 13.9131 13.8002 13.889 13.711C14.011 13.6792 14.1399 13.6873 14.257 13.734C14.2324 13.6698 14.2169 13.6025 14.211 13.534L13.907 13.055C13.7511 13.0669 13.5955 13.0276 13.464 12.943C13.3831 12.8984 13.3119 12.838 13.2549 12.7653C13.1978 12.6927 13.1561 12.6092 13.132 12.52C13.2543 12.488 13.3836 12.4961 13.501 12.543C13.4525 12.4267 13.4406 12.2983 13.467 12.175C13.5888 12.2012 13.6993 12.2648 13.783 12.357C13.789 12.2294 13.8344 12.1067 13.913 12.006C13.9835 12.0659 14.0414 12.1393 14.0831 12.222C14.1248 12.3046 14.1496 12.3947 14.156 12.487C14.1781 12.6444 14.1497 12.8047 14.075 12.945L14.378 13.423C14.4378 13.457 14.4923 13.4994 14.54 13.549C14.5458 13.421 14.5912 13.298 14.67 13.197C14.7407 13.257 14.7986 13.3306 14.8404 13.4134C14.8821 13.4962 14.9068 13.5865 14.913 13.679C14.9351 13.8364 14.9067 13.9967 14.832 14.137L15.135 14.614C15.1948 14.648 15.2493 14.6904 15.297 14.74C15.3028 14.612 15.3482 14.489 15.427 14.388C15.4976 14.448 15.5555 14.5216 15.5973 14.6044C15.639 14.6872 15.6637 14.7775 15.67 14.87C15.6918 15.0275 15.6631 15.1878 15.588 15.328L16.47 16.715L16.303 16.825Z",
  fill: "#73AF00"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 0V24H24V0H36ZM15.795 13.76C15.795 14.772 17.239 14.637 17.986 15.38C18.733 14.637 20.177 14.772 20.177 13.76V9.907H15.795V13.76ZM15.521 15.206C15.4807 15.2054 15.4412 15.2168 15.4074 15.2387C15.3736 15.2607 15.3472 15.2922 15.3313 15.3292C15.3155 15.3663 15.3111 15.4072 15.3185 15.4467C15.326 15.4863 15.3451 15.5228 15.3734 15.5514C15.4017 15.5801 15.4378 15.5998 15.4773 15.6079C15.5167 15.6159 15.5577 15.6121 15.595 15.5968C15.6322 15.5815 15.6641 15.5555 15.6866 15.5221C15.709 15.4886 15.721 15.4493 15.721 15.409C15.7213 15.3825 15.7163 15.3562 15.7064 15.3317C15.6965 15.3071 15.6818 15.2848 15.6632 15.2659C15.6446 15.2471 15.6225 15.2321 15.5981 15.2218C15.5737 15.2115 15.5475 15.2061 15.521 15.206ZM14.765 14.015C14.7247 14.0144 14.6852 14.0258 14.6514 14.0477C14.6176 14.0697 14.5912 14.1012 14.5753 14.1382C14.5595 14.1753 14.5551 14.2162 14.5625 14.2557C14.57 14.2953 14.5891 14.3318 14.6174 14.3604C14.6457 14.3891 14.6818 14.4088 14.7213 14.4169C14.7607 14.4249 14.8017 14.4211 14.839 14.4058C14.8762 14.3905 14.9081 14.3645 14.9306 14.3311C14.953 14.2976 14.965 14.2583 14.965 14.218C14.9653 14.1915 14.9603 14.1652 14.9504 14.1407C14.9405 14.1161 14.9258 14.0938 14.9072 14.0749C14.8886 14.0561 14.8665 14.0411 14.8421 14.0308C14.8177 14.0205 14.7915 14.0151 14.765 14.015ZM14.008 12.824C13.9676 12.8232 13.928 12.8345 13.894 12.8563C13.8601 12.8782 13.8335 12.9097 13.8175 12.9467C13.8016 12.9838 13.797 13.0248 13.8045 13.0645C13.812 13.1041 13.8311 13.1407 13.8594 13.1694C13.8877 13.1982 13.924 13.2178 13.9635 13.2259C14.0031 13.2339 14.0441 13.23 14.0814 13.2146C14.1187 13.1992 14.1506 13.1731 14.173 13.1395C14.1953 13.1059 14.2072 13.0664 14.207 13.026C14.2071 12.9996 14.2021 12.9734 14.1921 12.949C14.1821 12.9246 14.1674 12.9023 14.1488 12.8836C14.1303 12.8648 14.1082 12.8499 14.0838 12.8397C14.0595 12.8295 14.0334 12.8241 14.007 12.824H14.008Z",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0H12V24H0V0ZM15.795 12.138V13.759C15.795 14.773 17.239 14.637 17.986 15.38C18.733 14.637 20.177 14.772 20.177 13.76V12.138H15.795Z",
  fill: "#41479B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.588 14.975L17.986 15.178V18.015L16.592 17.002L17.588 14.975ZM14.401 16.8C14.7277 16.4703 14.938 16.043 15 15.583V9.706H14.4L14.401 16.8ZM20.974 9.707V15.584C21.0357 16.0434 21.2452 16.4703 21.571 16.8V9.706L20.974 9.707ZM18.336 10.573L18.338 10.362L18.131 10.364L17.986 10.214L17.842 10.364L17.634 10.362L17.637 10.572L17.488 10.72L17.637 10.867L17.634 11.078L17.842 11.076L17.986 11.226L18.131 11.076L18.338 11.078L18.336 10.868L18.484 10.72L18.336 10.573ZM19.764 16.214L20.25 16.61L20.748 15.977L20.261 15.581L19.764 16.214ZM16.791 12.139L16.393 11.936L15.995 12.139L16.393 12.341L16.791 12.139ZM19.181 12.139L19.58 12.341L19.978 12.139L19.58 11.936L19.181 12.139ZM16.791 7.275V7.883H16.991V7.427L17.588 7.883L17.19 9.909H18.982C18.982 9.909 18.782 8.288 18.782 7.68C18.7935 7.57202 18.7809 7.46283 18.7452 7.36029C18.7095 7.25774 18.6515 7.16439 18.5754 7.08693C18.4993 7.00948 18.4069 6.94986 18.305 6.91235C18.2031 6.87484 18.0942 6.86038 17.986 6.87C17.7687 6.85976 17.5555 6.9319 17.389 7.072H16.991V6.87H17.189V6.667H16.991V6.465H16.791V6.667H16.591V6.87H16.791V7.275ZM19.735 13.068C19.6901 13.0424 19.6415 13.0238 19.591 13.013C19.5242 13.0003 19.4555 13.0009 19.389 13.0149C19.3224 13.0289 19.2593 13.0559 19.2032 13.0944C19.1472 13.1328 19.0993 13.1821 19.0623 13.2392C19.0254 13.2962 19.0001 13.3601 18.988 13.427C18.9611 13.5623 18.9888 13.7028 19.0651 13.8178C19.1413 13.9328 19.2599 14.013 19.395 14.041C19.4458 14.0503 19.4978 14.0517 19.549 14.045C19.4517 13.9914 19.3739 13.9083 19.3268 13.8077C19.2797 13.707 19.2658 13.5941 19.287 13.485C19.3074 13.3768 19.3619 13.2779 19.4425 13.2029C19.5231 13.1279 19.6256 13.0806 19.735 13.068ZM15.425 15.978L15.922 16.611L16.409 16.215L15.911 15.582L15.425 15.978ZM18.385 12.747L18.982 12.341L18.92 12.257C19.1129 12.1355 19.2736 11.9692 19.3885 11.7723C19.5034 11.5754 19.5691 11.3537 19.58 11.126C19.5749 10.8935 19.4944 10.6689 19.3507 10.486C19.2069 10.3032 19.0077 10.1719 18.783 10.112C18.783 10.112 19.525 11.245 18.501 11.688L18.385 11.531H18.185L17.986 11.734L17.787 11.531H17.588L17.472 11.689C16.447 11.245 17.19 10.112 17.19 10.112C16.9653 10.1719 16.7661 10.3032 16.6223 10.486C16.4786 10.6689 16.3981 10.8935 16.393 11.126C16.4041 11.3535 16.4698 11.575 16.5847 11.7718C16.6996 11.9685 16.8603 12.1346 17.053 12.256L16.99 12.341L17.588 12.747V13.963L17.388 14.165V14.368L17.986 14.773L18.584 14.368V14.165L18.384 13.963L18.385 12.747ZM16.711 13.967L16.826 13.781L17.036 13.827C17.06 13.8313 17.0848 13.8282 17.107 13.8181C17.1292 13.808 17.1478 13.7913 17.1603 13.7703C17.1728 13.7493 17.1786 13.7251 17.177 13.7007C17.1753 13.6763 17.1662 13.6531 17.151 13.634L17.014 13.466L17.122 13.276C17.134 13.2548 17.1391 13.2304 17.1368 13.2061C17.1344 13.1819 17.1247 13.1589 17.1089 13.1404C17.093 13.1218 17.0719 13.1086 17.0483 13.1024C17.0248 13.0963 16.9999 13.0975 16.977 13.106L16.777 13.186L16.634 13.024C16.6178 13.0053 16.5961 12.9922 16.572 12.9866C16.5479 12.981 16.5226 12.9832 16.4998 12.9929C16.477 13.0025 16.4579 13.0192 16.4452 13.0404C16.4325 13.0616 16.4268 13.0863 16.429 13.111L16.443 13.33L16.247 13.418C16.2245 13.4282 16.2058 13.4451 16.1932 13.4664C16.1807 13.4876 16.1751 13.5122 16.177 13.5368C16.179 13.5614 16.1885 13.5848 16.2042 13.6038C16.22 13.6228 16.2412 13.6365 16.265 13.643L16.473 13.697L16.496 13.915C16.4985 13.9392 16.5084 13.9619 16.5244 13.9802C16.5405 13.9985 16.5618 14.0113 16.5854 14.0169C16.609 14.0225 16.6338 14.0206 16.6563 14.0115C16.6788 14.0024 16.6979 13.9865 16.711 13.966V13.967Z",
  fill: "#FFE15A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.791 7.275L17.389 7.73V7.072L16.99 7.071L16.791 7.275Z",
  fill: "#FF875A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.99 6.463V6.666H17.19V6.869H16.99V7.071L17.389 7.072C17.5555 6.9319 17.7687 6.85976 17.986 6.87C18.0942 6.86022 18.2033 6.87356 18.3053 6.911C18.4074 6.94844 18.4998 7.00804 18.5761 7.08552C18.6523 7.16299 18.7104 7.2564 18.7462 7.35902C18.782 7.46165 18.7945 7.57093 18.783 7.679C18.783 8.287 18.982 9.909 18.982 9.909H19.38C19.3791 9.80342 19.399 9.69868 19.4385 9.60079C19.4781 9.50289 19.5369 9.41338 19.6109 9.33807C19.6849 9.26276 19.7727 9.20312 19.8699 9.16187C19.967 9.12062 20.0714 9.09891 20.177 9.098C20.2446 9.09856 20.3118 9.10797 20.377 9.126V8.692C20.3723 8.61069 20.3842 8.52928 20.4121 8.45276C20.44 8.37624 20.4832 8.30621 20.5391 8.24699C20.595 8.18776 20.6624 8.14057 20.7372 8.10832C20.812 8.07607 20.8926 8.05943 20.974 8.05943C21.0554 8.05943 21.136 8.07607 21.2108 8.10832C21.2856 8.14057 21.353 8.18776 21.4089 8.24699C21.4648 8.30621 21.508 8.37624 21.5359 8.45276C21.5638 8.52928 21.5757 8.61069 21.571 8.692V13.488L21.828 13.058L21.742 13.005L22.341 12.006L22.426 12.059L22.554 12.138L22.766 12.27L22.169 13.269L22.084 13.216L21.571 14.073V16.8C21.2962 16.513 21.0978 16.1606 20.994 15.777C20.908 15.6653 20.8311 15.5469 20.764 15.423L20.536 15.803L20.748 15.977L20.25 16.61L20.118 16.502L19.893 16.878L19.638 16.719L19.883 16.31L19.764 16.214L19.933 15.998L19.41 15.346L19.256 15.474L18.791 14.894C18.6671 14.9442 18.5459 15.0009 18.428 15.064L19.38 17.002L17.986 18.015L16.592 17.002L17.544 15.064C17.4737 15.0257 17.402 14.99 17.329 14.957L16.915 15.474L16.761 15.346L16.238 15.998L16.408 16.214L16.238 16.351L16.47 16.715L16.303 16.825L16.082 16.479L15.922 16.609L15.424 15.976L15.647 15.794L15.529 15.608H15.52C15.487 15.6084 15.4544 15.6003 15.4253 15.5846C15.3963 15.5688 15.3717 15.5459 15.354 15.518C15.3384 15.4938 15.3281 15.4665 15.324 15.438C15.2855 15.4354 15.2474 15.4294 15.21 15.42C15.1424 15.545 15.0648 15.6644 14.978 15.777C14.8743 16.1606 14.6759 16.513 14.401 16.8L14.401 14.214C14.338 14.1946 14.2776 14.1677 14.221 14.134C14.1401 14.0894 14.0689 14.029 14.0119 13.9563C13.9548 13.8837 13.9131 13.8002 13.889 13.711C13.9337 13.6974 13.9793 13.6906 14.026 13.691C14.1049 13.6921 14.183 13.7066 14.257 13.734C14.2324 13.6698 14.2169 13.6025 14.211 13.534L14.015 13.224L14.007 13.225C13.9738 13.2256 13.941 13.2176 13.9117 13.2018C13.8825 13.186 13.8578 13.163 13.84 13.135C13.8248 13.1107 13.8149 13.0834 13.811 13.055C13.688 13.0463 13.5689 13.0079 13.464 12.943C13.3831 12.8984 13.3119 12.838 13.2549 12.7653C13.1978 12.6927 13.1561 12.6092 13.132 12.52C13.1764 12.5065 13.2226 12.4997 13.269 12.5C13.3479 12.501 13.427 12.5156 13.501 12.543C13.4525 12.4267 13.4406 12.2983 13.467 12.175C13.5888 12.2012 13.6993 12.2648 13.783 12.357C13.789 12.2294 13.8344 12.1067 13.913 12.006C13.9835 12.0659 14.0414 12.1393 14.0831 12.222C14.1248 12.3046 14.1496 12.3947 14.156 12.487C14.171 12.6117 14.1562 12.7381 14.113 12.856C14.1375 12.8713 14.1583 12.8918 14.174 12.916C14.1923 12.9457 14.2027 12.9796 14.2041 13.0145C14.2055 13.0493 14.1979 13.0839 14.182 13.115L14.378 13.423L14.401 13.438V8.693C14.3977 8.61248 14.4107 8.53212 14.4393 8.45676C14.4678 8.38139 14.5113 8.31257 14.5671 8.25444C14.6229 8.1963 14.6899 8.15004 14.764 8.11844C14.8382 8.08684 14.9179 8.07055 14.9985 8.07055C15.0791 8.07055 15.1588 8.08684 15.233 8.11844C15.3071 8.15004 15.3741 8.1963 15.4299 8.25444C15.4857 8.31257 15.5292 8.38139 15.5577 8.45676C15.5863 8.53212 15.5993 8.61248 15.596 8.693V9.127C15.6608 9.10874 15.7277 9.09899 15.795 9.098C16.0081 9.09985 16.2117 9.1862 16.3611 9.33807C16.5106 9.48995 16.5936 9.69494 16.592 9.908H17.189L17.588 7.883L17.389 7.73L16.99 7.426V7.882H16.79V6.869H16.592V6.666L16.791 6.667V6.463H16.99ZM20.188 15.674L20.261 15.581L20.301 15.612L20.621 15.076C20.5921 14.9772 20.577 14.8749 20.576 14.772V14.737C20.3468 14.4591 20.2076 14.118 20.177 13.759C20.1732 13.9421 20.1124 14.1195 20.0031 14.2665C19.8937 14.4135 19.7413 14.5227 19.567 14.579L19.874 14.962L19.72 15.09L20.188 15.674ZM15.804 15.667L15.91 15.58L15.984 15.674L16.452 15.09L16.298 14.962L16.551 14.645C16.126 14.465 15.795 14.243 15.795 13.759C15.7806 14.03 15.6944 14.2924 15.545 14.519C15.6129 14.6247 15.6558 14.7452 15.67 14.87C15.6842 14.9948 15.6694 15.1207 15.627 15.239C15.6515 15.2543 15.6723 15.2748 15.688 15.299C15.7061 15.3286 15.7164 15.3623 15.7178 15.397C15.7192 15.4316 15.7117 15.4661 15.696 15.497L15.804 15.667ZM16.99 6.31H16.791C16.7711 6.31 16.7515 6.31394 16.7331 6.32161C16.7148 6.32927 16.6982 6.3405 16.6842 6.35464C16.6703 6.36878 16.6593 6.38555 16.6518 6.40398C16.6444 6.42241 16.6407 6.44213 16.641 6.462V6.512H16.592C16.572 6.512 16.5523 6.51597 16.5339 6.5237C16.5155 6.53142 16.4988 6.54274 16.4849 6.55699C16.4709 6.57124 16.4599 6.58813 16.4525 6.60668C16.4452 6.62522 16.4416 6.64505 16.442 6.665V6.867C16.4417 6.88687 16.4454 6.90659 16.4528 6.92502C16.4603 6.94345 16.4713 6.96022 16.4852 6.97436C16.4992 6.9885 16.5158 6.99973 16.5341 7.00739C16.5525 7.01506 16.5721 7.019 16.592 7.019H16.642V7.881C16.6417 7.90087 16.6454 7.92059 16.6528 7.93902C16.6603 7.95745 16.6713 7.97422 16.6852 7.98836C16.6992 8.0025 16.7158 8.01373 16.7341 8.02139C16.7525 8.02906 16.7721 8.033 16.792 8.033H16.99C17.0099 8.033 17.0295 8.02906 17.0479 8.02139C17.0662 8.01373 17.0828 8.0025 17.0968 7.98836C17.1107 7.97422 17.1217 7.95745 17.1292 7.93902C17.1366 7.92059 17.1403 7.90087 17.14 7.881V7.73L17.3 7.851L17.423 7.946L17.067 9.756H16.73C16.696 9.53183 16.5832 9.32713 16.4118 9.17867C16.2404 9.03021 16.0217 8.94772 15.795 8.946L15.745 8.947V8.692C15.7487 8.59167 15.7321 8.49163 15.6962 8.39785C15.6604 8.30408 15.606 8.2185 15.5363 8.14622C15.4666 8.07394 15.3831 8.01645 15.2907 7.97718C15.1983 7.93791 15.0989 7.91767 14.9985 7.91767C14.8981 7.91767 14.7987 7.93791 14.7063 7.97718C14.6139 8.01645 14.5304 8.07394 14.4607 8.14622C14.391 8.2185 14.3366 8.30408 14.3008 8.39785C14.2649 8.49163 14.2483 8.59167 14.252 8.692V12.239C14.2055 12.0975 14.1177 11.9732 14 11.882C13.9701 11.8603 13.9332 11.8506 13.8965 11.8548C13.8598 11.8591 13.8261 11.877 13.802 11.905C13.7541 11.9615 13.7162 12.0257 13.69 12.095C13.6278 12.0604 13.5602 12.0368 13.49 12.025L13.467 12.022C13.4339 12.0223 13.4018 12.0335 13.3758 12.054C13.3497 12.0744 13.3312 12.1029 13.323 12.135C13.3052 12.2048 13.2991 12.2772 13.305 12.349L13.27 12.348C13.2084 12.3474 13.147 12.3561 13.088 12.374C13.0523 12.3853 13.022 12.4095 13.003 12.4418C12.984 12.4741 12.9776 12.5123 12.985 12.549C13.0129 12.6591 13.0629 12.7623 13.1321 12.8524C13.2012 12.9425 13.2879 13.0175 13.387 13.073C13.4835 13.1317 13.5899 13.1724 13.701 13.193L13.715 13.218C13.7391 13.2558 13.7703 13.2886 13.8071 13.3143C13.8438 13.3401 13.8852 13.3583 13.929 13.368L14.037 13.539H14.027C13.9653 13.5387 13.9039 13.5478 13.845 13.566C13.8093 13.5773 13.779 13.6015 13.76 13.6338C13.741 13.6661 13.7346 13.7043 13.742 13.741C13.77 13.8509 13.8201 13.9539 13.8892 14.0438C13.9583 14.1337 14.045 14.2086 14.144 14.264C14.1787 14.2852 14.2147 14.3039 14.252 14.32V16.799C14.2519 16.8288 14.2606 16.8579 14.277 16.8828C14.2933 16.9077 14.3166 16.9272 14.344 16.939C14.3713 16.9506 14.4015 16.9537 14.4306 16.9478C14.4597 16.9419 14.4863 16.9273 14.507 16.906C14.7942 16.6061 15.0036 16.2405 15.117 15.841C15.1677 15.7743 15.2143 15.707 15.257 15.639C15.305 15.6953 15.3699 15.7346 15.442 15.751L15.449 15.761L15.331 15.857C15.2998 15.8825 15.2799 15.9191 15.2754 15.9591C15.2709 15.9991 15.2822 16.0393 15.307 16.071L15.805 16.704C15.8171 16.7195 15.8322 16.7324 15.8494 16.742C15.8666 16.7516 15.8855 16.7577 15.905 16.76H15.922C15.9558 16.7603 15.9886 16.749 16.015 16.728L16.047 16.702L16.177 16.907C16.1876 16.9236 16.2013 16.938 16.2174 16.9494C16.2336 16.9607 16.2518 16.9687 16.271 16.973C16.2902 16.9774 16.3101 16.9779 16.3295 16.9745C16.3489 16.971 16.3675 16.9637 16.384 16.953L16.48 16.889L16.459 16.933C16.443 16.9653 16.4388 17.0023 16.4472 17.0373C16.4556 17.0724 16.4761 17.1035 16.505 17.125L17.899 18.138C17.9242 18.1565 17.9547 18.1665 17.986 18.1665C18.0173 18.1665 18.0478 18.1565 18.073 18.138L19.467 17.125C19.4961 17.1036 19.5168 17.0726 19.5254 17.0375C19.534 17.0024 19.5299 16.9654 19.514 16.933L18.628 15.131L18.746 15.077L19.141 15.569C19.1532 15.5844 19.1684 15.5972 19.1857 15.6066C19.2029 15.6161 19.2218 15.622 19.2414 15.624C19.2609 15.6261 19.2807 15.6242 19.2995 15.6185C19.3183 15.6129 19.3358 15.6035 19.351 15.591L19.39 15.559L19.742 15.999L19.647 16.119C19.6225 16.1507 19.6114 16.1906 19.6159 16.2304C19.6203 16.2701 19.6401 16.3066 19.671 16.332L19.687 16.345L19.51 16.64C19.4891 16.6746 19.4827 16.716 19.492 16.7552C19.5014 16.7945 19.5258 16.8285 19.56 16.85L19.815 17.007C19.8383 17.0218 19.8654 17.0298 19.893 17.03C19.9052 17.0299 19.9173 17.0282 19.929 17.025C19.9674 17.0154 20.0005 16.9909 20.021 16.957L20.158 16.727C20.1733 16.7394 20.1909 16.7486 20.2098 16.7541C20.2287 16.7596 20.2485 16.7613 20.268 16.7591C20.2876 16.7569 20.3065 16.7508 20.3237 16.7411C20.3408 16.7315 20.3559 16.7185 20.368 16.703L20.865 16.07C20.8824 16.0474 20.8931 16.0204 20.896 15.992C21.0223 16.332 21.2162 16.6429 21.466 16.906C21.4867 16.9273 21.5133 16.9419 21.5424 16.9478C21.5715 16.9537 21.6017 16.9506 21.629 16.939C21.6564 16.9272 21.6797 16.9077 21.696 16.8828C21.7124 16.8579 21.7211 16.8288 21.721 16.799V14.114L22.139 13.417C22.1693 13.4234 22.2009 13.42 22.2293 13.4075C22.2576 13.3949 22.2813 13.3737 22.297 13.347L22.894 12.347C22.9142 12.3126 22.9203 12.2717 22.911 12.2329C22.9017 12.1941 22.8777 12.1604 22.844 12.139L22.632 12.007L22.504 11.928L22.419 11.876C22.396 11.8613 22.3693 11.8533 22.342 11.853C22.3162 11.853 22.2908 11.8598 22.2683 11.8726C22.2459 11.8854 22.2272 11.9038 22.214 11.926L21.721 12.75V8.692C21.721 8.49388 21.6423 8.30388 21.5022 8.16379C21.3621 8.0237 21.1721 7.945 20.974 7.945C20.7759 7.945 20.5859 8.0237 20.4458 8.16379C20.3057 8.30388 20.227 8.49388 20.227 8.692V8.947C20.2103 8.94616 20.1937 8.94583 20.177 8.946C19.9504 8.94795 19.732 9.03056 19.5608 9.179C19.3897 9.32744 19.277 9.532 19.243 9.756H19.115C19.068 9.357 18.933 8.17 18.933 7.679C18.9443 7.55116 18.9278 7.42238 18.8845 7.30156C18.8412 7.18074 18.7722 7.07076 18.6822 6.9792C18.5923 6.88765 18.4835 6.8167 18.3635 6.77126C18.2435 6.72582 18.115 6.70696 17.987 6.716C17.7537 6.71078 17.525 6.78208 17.336 6.919H17.331C17.3364 6.90288 17.3391 6.88599 17.339 6.869V6.666C17.3393 6.64613 17.3356 6.62641 17.3282 6.60798C17.3207 6.58955 17.3097 6.57278 17.2958 6.55864C17.2818 6.5445 17.2652 6.53327 17.2469 6.52561C17.2285 6.51794 17.2089 6.514 17.189 6.514H17.14V6.463C17.1401 6.44317 17.1364 6.42351 17.1289 6.40514C17.1214 6.38677 17.1104 6.37005 17.0965 6.35593C17.0826 6.34182 17.066 6.33059 17.0477 6.32288C17.0294 6.31517 17.0098 6.31013 16.99 6.31ZM15.718 14.517C15.7548 14.4514 15.7881 14.384 15.818 14.315C15.9501 14.481 16.1198 14.6133 16.313 14.701L16.183 14.865C16.1576 14.8961 16.1454 14.936 16.149 14.976C16.1509 14.9959 16.1568 15.0153 16.1662 15.033C16.1757 15.0507 16.1885 15.0663 16.204 15.079L16.242 15.111L15.976 15.443C15.9607 15.4352 15.9441 15.4301 15.927 15.428H15.91C15.8954 15.4279 15.881 15.4299 15.867 15.434C15.8742 15.3568 15.8555 15.2794 15.814 15.214L15.798 15.192C15.8523 14.9646 15.8239 14.7254 15.718 14.517ZM19.798 14.627C19.9369 14.549 20.0583 14.4436 20.155 14.317C20.2282 14.483 20.319 14.6405 20.426 14.787C20.428 14.876 20.4397 14.9646 20.461 15.051L20.234 15.43C20.2208 15.4325 20.208 15.4369 20.196 15.443L19.93 15.111L19.968 15.079C19.9987 15.0531 20.0181 15.0163 20.022 14.9763C20.026 14.9363 20.0141 14.8964 19.989 14.865L19.799 14.626L19.798 14.627ZM16.916 15.625C16.9381 15.6249 16.96 15.6198 16.9799 15.6101C16.9998 15.6004 17.0172 15.5863 17.031 15.569L17.283 15.254L16.602 16.642L16.596 16.632L16.438 16.383L16.501 16.331C16.5319 16.3056 16.5517 16.2691 16.5561 16.2294C16.5606 16.1896 16.5495 16.1497 16.525 16.118L16.431 15.998L16.783 15.558L16.822 15.59C16.8482 15.6125 16.8815 15.6249 16.916 15.625ZM20.732 15.767L20.764 15.713C20.7927 15.7557 20.8227 15.7983 20.854 15.841L20.864 15.879C20.8572 15.8705 20.8495 15.8628 20.841 15.856L20.732 15.767Z",
  fill: "#FFAA5A"
}));
const ForwardRef = forwardRef(MoldovaIcon);
export default ForwardRef;