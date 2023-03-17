import * as React from "react";
import { forwardRef } from "react";
const TajikistanIcon = ({
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
  d: "M0 16H36V24H0V16Z",
  fill: "#73AF00"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0H36V8H0V0Z",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 8H36V16H0V8Z",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.165 13.992C19.9654 13.8785 19.815 13.695 19.743 13.477L19.682 13.257L19.51 13.403C19.3951 13.5228 19.2462 13.6043 19.0835 13.6367C18.9207 13.6691 18.752 13.6507 18.6 13.584C18.492 13.536 18.3954 13.4654 18.3168 13.3772C18.2382 13.2889 18.1793 13.1848 18.144 13.072V11.79C18.175 11.7189 18.226 11.6584 18.2908 11.6158C18.3556 11.5732 18.4314 11.5503 18.509 11.55C18.5656 11.55 18.6216 11.5622 18.673 11.586L18.853 11.669L18.826 11.469C18.8026 11.266 18.7053 11.0786 18.5527 10.9427C18.4001 10.8067 18.2029 10.7316 17.9985 10.7316C17.7941 10.7316 17.5969 10.8067 17.4443 10.9427C17.2917 11.0786 17.1944 11.266 17.171 11.469L17.144 11.669L17.324 11.586C17.3754 11.5622 17.4314 11.55 17.488 11.55C17.5654 11.5505 17.641 11.5734 17.7056 11.616C17.7702 11.6586 17.821 11.7191 17.852 11.79V13.071C17.8168 13.1837 17.7581 13.2877 17.6796 13.376C17.6012 13.4643 17.5048 13.5348 17.397 13.583C17.2451 13.6498 17.0764 13.6684 16.9137 13.6362C16.7509 13.604 16.602 13.5226 16.487 13.403L16.317 13.258L16.253 13.475C16.1812 13.6934 16.0308 13.8773 15.831 13.991C15.6968 14.0476 15.552 14.0751 15.4064 14.0717C15.2607 14.0682 15.1174 14.0339 14.986 13.971L14.884 14.249C15.0718 14.3245 15.2717 14.3651 15.474 14.369C15.6448 14.3711 15.8136 14.332 15.966 14.255C16.1782 14.1408 16.3495 13.9632 16.456 13.747C16.6073 13.859 16.7862 13.9279 16.9735 13.9464C17.1609 13.9649 17.3497 13.9322 17.52 13.852C17.7118 13.7576 17.8764 13.6158 17.998 13.44C18.1197 13.6158 18.2842 13.7576 18.476 13.852C18.6464 13.9324 18.8355 13.9652 19.023 13.9467C19.2106 13.9282 19.3896 13.8592 19.541 13.747C19.6474 13.9632 19.8187 14.1408 20.031 14.255C20.1827 14.3321 20.3508 14.3715 20.521 14.37C20.7241 14.3661 20.9247 14.3251 21.113 14.249L21.011 13.971C20.8794 14.0341 20.736 14.0684 20.5901 14.0719C20.4443 14.0753 20.2994 14.0488 20.165 13.992ZM17.998 11.602C17.9419 11.5181 17.866 11.4492 17.7771 11.4015C17.6882 11.3537 17.5889 11.3285 17.488 11.328C17.47 11.328 17.453 11.328 17.436 11.33C17.4825 11.2192 17.5607 11.1246 17.6608 11.058C17.7608 10.9915 17.8783 10.956 17.9985 10.956C18.1187 10.956 18.2362 10.9915 18.3362 11.058C18.4363 11.1246 18.5145 11.2192 18.561 11.33C18.4516 11.3213 18.3418 11.3418 18.2429 11.3894C18.144 11.437 18.0594 11.51 17.998 11.601V11.602ZM17.998 14.853C18.8532 14.8381 19.7055 14.9551 20.525 15.2L20.432 15.482C19.6425 15.2472 18.8216 15.1352 17.998 15.15C17.1748 15.1353 16.3542 15.2473 15.565 15.482L15.472 15.2C16.2912 14.9553 17.1432 14.8382 17.998 14.853ZM17.622 14.341C17.6933 14.3008 17.7724 14.2762 17.854 14.269L17.853 14.259C17.8517 14.2017 17.8642 14.1448 17.8894 14.0933C17.9146 14.0418 17.9519 13.9971 17.998 13.963C18.0444 13.9971 18.082 14.0419 18.1074 14.0936C18.1328 14.1453 18.1454 14.2024 18.144 14.26V14.27C18.2251 14.2771 18.3039 14.3013 18.375 14.341C18.3364 14.4065 18.2813 14.4608 18.2153 14.4986C18.1493 14.5363 18.0746 14.5562 17.9985 14.5562C17.9224 14.5562 17.8477 14.5363 17.7817 14.4986C17.7156 14.4608 17.6606 14.4065 17.622 14.341ZM16.248 14.562C16.3099 14.5084 16.3825 14.4685 16.461 14.445L16.458 14.435C16.4455 14.3788 16.4467 14.3203 16.4615 14.2646C16.4763 14.209 16.5043 14.1576 16.543 14.115C16.5951 14.139 16.6406 14.1753 16.6756 14.2208C16.7106 14.2662 16.7341 14.3195 16.744 14.376V14.386C16.8254 14.3763 16.9079 14.3841 16.986 14.409C16.9578 14.4792 16.9135 14.5419 16.8567 14.5919C16.8 14.6419 16.7322 14.6779 16.659 14.697C16.5847 14.7086 16.5087 14.7024 16.4373 14.6789C16.3658 14.6554 16.301 14.6154 16.248 14.562ZM19.538 14.435L19.536 14.445C19.6145 14.4685 19.687 14.5084 19.749 14.562C19.6958 14.6153 19.6308 14.6553 19.5591 14.6786C19.4875 14.7019 19.4114 14.7079 19.337 14.696C19.2641 14.6769 19.1966 14.641 19.14 14.5911C19.0834 14.5413 19.0392 14.4789 19.011 14.409C19.0888 14.3843 19.1709 14.3764 19.252 14.386V14.376C19.262 14.3194 19.2856 14.2661 19.3208 14.2206C19.356 14.1751 19.4017 14.1389 19.454 14.115C19.4927 14.1576 19.5207 14.209 19.5355 14.2646C19.5503 14.3203 19.5505 14.3788 19.538 14.435ZM17.526 9.027C17.519 9.02158 17.5138 9.01413 17.5112 9.00566C17.5086 8.9972 17.5087 8.98813 17.5114 8.9797C17.5141 8.97127 17.5194 8.9639 17.5265 8.95858C17.5336 8.95326 17.5421 8.95027 17.551 8.95L17.861 8.948L17.959 8.648C17.9617 8.63952 17.9671 8.63213 17.9742 8.62688C17.9814 8.62163 17.9901 8.61881 17.999 8.61881C18.0079 8.61881 18.0166 8.62163 18.0238 8.62688C18.0309 8.63213 18.0363 8.63952 18.039 8.648L18.137 8.948L18.447 8.95C18.4559 8.95027 18.4644 8.95326 18.4715 8.95858C18.4786 8.9639 18.4839 8.97127 18.4866 8.9797C18.4893 8.98813 18.4894 8.9972 18.4868 9.00566C18.4842 9.01413 18.479 9.02158 18.472 9.027L18.222 9.215L18.316 9.516C18.3189 9.52441 18.3191 9.53353 18.3165 9.54204C18.3139 9.55055 18.3086 9.55802 18.3015 9.56336C18.2944 9.5687 18.2858 9.57164 18.2769 9.57175C18.268 9.57187 18.2593 9.56915 18.252 9.564L17.999 9.38L17.746 9.564C17.7387 9.56915 17.73 9.57187 17.7211 9.57175C17.7122 9.57164 17.7036 9.5687 17.6965 9.56336C17.6894 9.55802 17.6841 9.55055 17.6815 9.54204C17.6789 9.53353 17.6791 9.52441 17.682 9.516L17.776 9.215L17.526 9.027ZM15.748 9.522C15.741 9.51658 15.7358 9.50913 15.7332 9.50066C15.7306 9.4922 15.7307 9.48313 15.7334 9.4747C15.7361 9.46627 15.7414 9.4589 15.7485 9.45358C15.7556 9.44827 15.7641 9.44527 15.773 9.445L16.083 9.443L16.182 9.143C16.1849 9.13488 16.1903 9.12786 16.1974 9.1229C16.2044 9.11794 16.2129 9.11527 16.2215 9.11527C16.2301 9.11527 16.2386 9.11794 16.2456 9.1229C16.2527 9.12786 16.2581 9.13488 16.261 9.143L16.359 9.443L16.669 9.445C16.6779 9.44527 16.6864 9.44827 16.6935 9.45358C16.7006 9.4589 16.7059 9.46627 16.7086 9.4747C16.7113 9.48313 16.7114 9.4922 16.7088 9.50066C16.7062 9.50913 16.701 9.51658 16.694 9.522L16.444 9.71L16.538 10.011C16.5409 10.0194 16.5411 10.0285 16.5385 10.037C16.5359 10.0456 16.5306 10.053 16.5235 10.0584C16.5164 10.0637 16.5078 10.0666 16.4989 10.0668C16.49 10.0669 16.4813 10.0642 16.474 10.059L16.221 9.875L15.968 10.059C15.9607 10.0642 15.952 10.0669 15.9431 10.0668C15.9342 10.0666 15.9256 10.0637 15.9185 10.0584C15.9114 10.053 15.9061 10.0456 15.9035 10.037C15.9009 10.0285 15.9011 10.0194 15.904 10.011L15.998 9.71L15.748 9.522ZM14.441 10.858C14.434 10.8526 14.4288 10.8451 14.4262 10.8367C14.4236 10.8282 14.4237 10.8191 14.4264 10.8107C14.4291 10.8023 14.4344 10.7949 14.4415 10.7896C14.4486 10.7843 14.4571 10.7813 14.466 10.781L14.776 10.779L14.875 10.479C14.8777 10.4705 14.8831 10.4631 14.8902 10.4579C14.8974 10.4526 14.9061 10.4498 14.915 10.4498C14.9239 10.4498 14.9326 10.4526 14.9398 10.4579C14.9469 10.4631 14.9523 10.4705 14.955 10.479L15.053 10.779L15.363 10.781C15.3719 10.7813 15.3804 10.7843 15.3875 10.7896C15.3946 10.7949 15.3999 10.8023 15.4026 10.8107C15.4053 10.8191 15.4054 10.8282 15.4028 10.8367C15.4002 10.8451 15.395 10.8526 15.388 10.858L15.138 11.046L15.231 11.346C15.2339 11.3544 15.2341 11.3635 15.2315 11.372C15.2289 11.3806 15.2236 11.388 15.2165 11.3934C15.2094 11.3987 15.2008 11.4016 15.1919 11.4018C15.183 11.4019 15.1743 11.3992 15.167 11.394L14.915 11.211L14.662 11.394C14.6548 11.399 14.6463 11.4016 14.6375 11.4015C14.6288 11.4013 14.6203 11.3985 14.6133 11.3933C14.6062 11.3881 14.601 11.3809 14.5982 11.3726C14.5955 11.3643 14.5954 11.3553 14.598 11.347L14.691 11.046L14.441 10.858ZM14.751 13.153C14.7536 13.1613 14.7535 13.1703 14.7508 13.1786C14.748 13.1869 14.7428 13.1941 14.7358 13.1993C14.7287 13.2045 14.7202 13.2073 14.7115 13.2075C14.7027 13.2076 14.6942 13.205 14.687 13.2L14.434 13.017L14.182 13.2C14.1748 13.2054 14.1661 13.2083 14.1572 13.2084C14.1482 13.2085 14.1395 13.2057 14.1322 13.2004C14.1249 13.1952 14.1195 13.1877 14.1168 13.1792C14.1141 13.1707 14.1141 13.1615 14.117 13.153L14.211 12.852L13.961 12.664C13.954 12.6586 13.9488 12.6511 13.9462 12.6427C13.9436 12.6342 13.9437 12.6251 13.9464 12.6167C13.9491 12.6083 13.9544 12.6009 13.9615 12.5956C13.9686 12.5903 13.9771 12.5873 13.986 12.587L14.296 12.585L14.395 12.285C14.3979 12.2769 14.4033 12.2699 14.4104 12.2649C14.4174 12.2599 14.4259 12.2573 14.4345 12.2573C14.4431 12.2573 14.4516 12.2599 14.4586 12.2649C14.4657 12.2699 14.4711 12.2769 14.474 12.285L14.572 12.585L14.882 12.587C14.8909 12.5873 14.8994 12.5903 14.9065 12.5956C14.9136 12.6009 14.9189 12.6083 14.9216 12.6167C14.9243 12.6251 14.9244 12.6342 14.9218 12.6427C14.9192 12.6511 14.914 12.6586 14.907 12.664L14.657 12.852L14.751 13.153ZM19.306 9.522C19.299 9.51664 19.2939 9.50927 19.2912 9.5009C19.2886 9.49252 19.2886 9.48353 19.2912 9.47515C19.2938 9.46676 19.2989 9.45937 19.3059 9.45398C19.3128 9.44859 19.3212 9.44546 19.33 9.445L19.64 9.443L19.74 9.143C19.7431 9.1352 19.7485 9.12852 19.7554 9.12381C19.7624 9.1191 19.7706 9.11659 19.779 9.11659C19.7874 9.11659 19.7956 9.1191 19.8026 9.12381C19.8095 9.12852 19.8149 9.1352 19.818 9.143L19.917 9.443L20.227 9.445C20.2359 9.44527 20.2444 9.44827 20.2515 9.45358C20.2586 9.4589 20.2639 9.46627 20.2666 9.4747C20.2693 9.48313 20.2694 9.4922 20.2668 9.50066C20.2642 9.50913 20.259 9.51658 20.252 9.522L20.002 9.71L20.096 10.011C20.0989 10.0195 20.0989 10.0287 20.0962 10.0372C20.0935 10.0457 20.0881 10.0532 20.0808 10.0584C20.0735 10.0637 20.0648 10.0665 20.0558 10.0664C20.0469 10.0663 20.0382 10.0634 20.031 10.058L19.779 9.875L19.526 10.058C19.5188 10.063 19.5103 10.0656 19.5015 10.0655C19.4928 10.0653 19.4843 10.0625 19.4773 10.0573C19.4702 10.0521 19.465 10.0449 19.4622 10.0366C19.4595 10.0283 19.4594 10.0193 19.462 10.011L19.555 9.71L19.306 9.522ZM20.612 10.858C20.605 10.8526 20.5998 10.8451 20.5972 10.8367C20.5946 10.8282 20.5947 10.8191 20.5974 10.8107C20.6001 10.8023 20.6054 10.7949 20.6125 10.7896C20.6196 10.7843 20.6281 10.7813 20.637 10.781L20.947 10.779L21.046 10.479C21.0487 10.4705 21.054 10.4631 21.0612 10.4579C21.0684 10.4526 21.0771 10.4498 21.086 10.4498C21.0949 10.4498 21.1036 10.4526 21.1108 10.4579C21.1179 10.4631 21.1233 10.4705 21.126 10.479L21.223 10.779L21.534 10.781C21.5429 10.7813 21.5514 10.7843 21.5585 10.7896C21.5656 10.7949 21.5709 10.8023 21.5736 10.8107C21.5763 10.8191 21.5764 10.8282 21.5738 10.8367C21.5712 10.8451 21.566 10.8526 21.559 10.858L21.309 11.046L21.402 11.346C21.4049 11.3544 21.4051 11.3635 21.4025 11.372C21.3999 11.3806 21.3946 11.388 21.3875 11.3934C21.3804 11.3987 21.3718 11.4016 21.3629 11.4018C21.354 11.4019 21.3453 11.3992 21.338 11.394L21.086 11.211L20.833 11.394C20.8258 11.399 20.8173 11.4016 20.8085 11.4015C20.7998 11.4013 20.7913 11.3985 20.7843 11.3933C20.7772 11.3881 20.772 11.3809 20.7692 11.3726C20.7665 11.3643 20.7664 11.3553 20.769 11.347L20.862 11.046L20.612 10.858ZM22.039 12.664L21.789 12.852L21.883 13.152C21.8862 13.1606 21.8865 13.1699 21.884 13.1787C21.8814 13.1874 21.876 13.1951 21.8686 13.2006C21.8613 13.206 21.8524 13.2089 21.8432 13.2088C21.8341 13.2087 21.8252 13.2056 21.818 13.2L21.566 13.017L21.313 13.2C21.3058 13.205 21.2973 13.2076 21.2885 13.2075C21.2798 13.2073 21.2713 13.2045 21.2642 13.1993C21.2572 13.1941 21.252 13.1869 21.2492 13.1786C21.2465 13.1703 21.2464 13.1613 21.249 13.153L21.342 12.852L21.092 12.664C21.085 12.6586 21.0798 12.6511 21.0772 12.6427C21.0746 12.6342 21.0747 12.6251 21.0774 12.6167C21.0801 12.6083 21.0854 12.6009 21.0925 12.5956C21.0996 12.5903 21.1081 12.5873 21.117 12.587L21.427 12.585L21.526 12.285C21.5287 12.2765 21.5341 12.2691 21.5412 12.2639C21.5484 12.2586 21.5571 12.2558 21.566 12.2558C21.5749 12.2558 21.5836 12.2586 21.5908 12.2639C21.5979 12.2691 21.6033 12.2765 21.606 12.285L21.704 12.585L22.014 12.587C22.0229 12.5873 22.0314 12.5903 22.0385 12.5956C22.0456 12.6009 22.0509 12.6083 22.0536 12.6167C22.0563 12.6251 22.0564 12.6342 22.0538 12.6427C22.0512 12.6511 22.046 12.6586 22.039 12.664Z",
  fill: "#FFCD5A"
}));
const ForwardRef = forwardRef(TajikistanIcon);
export default ForwardRef;