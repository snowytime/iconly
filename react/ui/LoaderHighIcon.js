import * as React from "react";
import { forwardRef } from "react";
const LoaderHighIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 18 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M9.43373 0C9.31311 0 9.20757 0.0452328 9.1171 0.135698C9.03166 0.221138 8.98894 0.326681 8.98894 0.452328V3.24922C8.98894 3.3799 9.03166 3.48795 9.1171 3.57339C9.20757 3.65883 9.31311 3.70155 9.43373 3.70155C9.5644 3.70155 9.67246 3.65883 9.7579 3.57339C9.84334 3.48795 9.88606 3.3799 9.88606 3.24922V0.452328C9.88606 0.326681 9.84334 0.221138 9.7579 0.135698C9.67246 0.0452328 9.5644 0 9.43373 0ZM11.6652 0.226164C11.5446 0.185957 11.4315 0.193496 11.326 0.24878C11.2204 0.304065 11.1501 0.402069 11.1149 0.542794L10.8586 1.47007C10.8234 1.59069 10.8359 1.70628 10.8963 1.81685C10.9566 1.92239 11.047 1.99024 11.1677 2.0204C11.2883 2.05055 11.4014 2.03799 11.5069 1.9827C11.6175 1.92239 11.6878 1.82942 11.718 1.70377L11.9668 0.776497C12.0019 0.645824 11.9894 0.530229 11.9291 0.429712C11.8738 0.329194 11.7858 0.261345 11.6652 0.226164ZM13.6932 1.13836C13.5826 1.07805 13.467 1.06297 13.3464 1.09313C13.2308 1.12328 13.1403 1.19113 13.075 1.29667L11.6803 3.73171C11.6099 3.84228 11.5923 3.95787 11.6275 4.07849C11.6627 4.19409 11.7331 4.28204 11.8386 4.34235C11.9442 4.40769 12.0572 4.42528 12.1779 4.39512C12.2985 4.35994 12.3889 4.28707 12.4493 4.1765L13.8515 1.749C13.9118 1.63843 13.9269 1.52535 13.8967 1.40976C13.8665 1.29416 13.7987 1.2037 13.6932 1.13836ZM15.51 2.44257C15.4195 2.35211 15.3115 2.30939 15.1858 2.31441C15.0652 2.31441 14.9622 2.35713 14.8767 2.44257L14.1907 3.12106C14.1002 3.21656 14.0525 3.32461 14.0475 3.44523C14.0475 3.56083 14.0952 3.66386 14.1907 3.75432C14.2812 3.84982 14.3867 3.89756 14.5073 3.89756C14.628 3.89756 14.731 3.85233 14.8164 3.76186L15.4874 3.08337C15.5829 2.98285 15.6331 2.8748 15.6382 2.7592C15.6432 2.63858 15.6005 2.53304 15.51 2.44257ZM16.8067 4.25188C16.7413 4.14132 16.6484 4.07095 16.5277 4.0408C16.4121 4.01064 16.2991 4.02572 16.1885 4.08603L13.761 5.48825C13.6504 5.54856 13.5776 5.63902 13.5424 5.75964C13.5122 5.88027 13.5298 5.99586 13.5951 6.10643C13.6555 6.21197 13.7434 6.28234 13.859 6.31752C13.9796 6.34767 14.0952 6.33008 14.2058 6.26474L16.6408 4.86253C16.7464 4.79719 16.8142 4.70673 16.8444 4.59113C16.8796 4.47554 16.867 4.36245 16.8067 4.25188ZM17.7264 6.28736C17.6963 6.16171 17.6259 6.06874 17.5153 6.00843C17.4048 5.94812 17.2942 5.93304 17.1836 5.96319L16.2413 6.21951C16.1206 6.25469 16.0302 6.32506 15.9699 6.4306C15.9096 6.53614 15.8995 6.65928 15.9397 6.8C15.9699 6.89549 16.0327 6.97591 16.1282 7.04124C16.2287 7.10658 16.3468 7.12166 16.4825 7.08647L17.3947 6.83015C17.5254 6.79497 17.6209 6.72461 17.6812 6.61907C17.7415 6.51353 17.7566 6.40296 17.7264 6.28736ZM17.9375 8.49623C17.9375 8.37058 17.8923 8.26504 17.8018 8.1796C17.7164 8.09416 17.6108 8.05144 17.4852 8.05144H14.6883C14.5576 8.05144 14.4495 8.09416 14.3641 8.1796C14.2787 8.26504 14.2359 8.37058 14.2359 8.49623C14.2359 8.62188 14.2787 8.72993 14.3641 8.8204C14.4495 8.90584 14.5576 8.94856 14.6883 8.94856H17.4852C17.6108 8.94856 17.7164 8.90584 17.8018 8.8204C17.8923 8.72993 17.9375 8.62188 17.9375 8.49623ZM17.7264 10.7428C17.7616 10.6171 17.7515 10.5016 17.6963 10.396C17.641 10.2905 17.548 10.2176 17.4173 10.1774L16.4825 9.91353C16.3569 9.88337 16.2413 9.89845 16.1357 9.95876C16.0302 10.0191 15.9623 10.1095 15.9322 10.2302C15.902 10.3558 15.9146 10.4739 15.9699 10.5845C16.0302 10.695 16.1206 10.7654 16.2413 10.7956L17.1685 11.0368C17.2992 11.067 17.4148 11.0544 17.5153 10.9991C17.6209 10.9388 17.6912 10.8534 17.7264 10.7428ZM16.7991 12.7481C16.8595 12.6426 16.8745 12.5295 16.8444 12.4089C16.8142 12.2882 16.7464 12.1978 16.6408 12.1375L14.2058 10.7353C14.0952 10.6699 13.9796 10.6548 13.859 10.69C13.7434 10.7202 13.6555 10.788 13.5951 10.8936C13.5298 11.0041 13.5122 11.1197 13.5424 11.2404C13.5776 11.3559 13.6504 11.4464 13.761 11.5118L16.1885 12.914C16.2991 12.9743 16.4121 12.9894 16.5277 12.9592C16.6433 12.924 16.7338 12.8537 16.7991 12.7481ZM15.5025 14.5725C15.598 14.477 15.6432 14.3664 15.6382 14.2408C15.6382 14.1152 15.598 14.0121 15.5175 13.9317L14.824 13.2532C14.7335 13.1678 14.6255 13.1225 14.4998 13.1175C14.3792 13.1125 14.2711 13.1577 14.1756 13.2532C14.0902 13.3487 14.0475 13.4542 14.0475 13.5698C14.0525 13.6854 14.1002 13.7885 14.1907 13.8789L14.8692 14.5574C14.9647 14.6529 15.0702 14.7007 15.1858 14.7007C15.3065 14.7057 15.412 14.663 15.5025 14.5725ZM13.6856 15.8616C13.7962 15.8013 13.8665 15.7109 13.8967 15.5902C13.9269 15.4696 13.9118 15.3565 13.8515 15.251L12.4493 12.8235C12.3889 12.7079 12.2985 12.635 12.1779 12.6049C12.0572 12.5747 11.9442 12.5898 11.8386 12.6501C11.7331 12.7154 11.6627 12.8084 11.6275 12.929C11.5923 13.0446 11.6099 13.1577 11.6803 13.2683L13.075 15.6958C13.1403 15.8064 13.2308 15.8767 13.3464 15.9069C13.462 15.937 13.575 15.922 13.6856 15.8616ZM11.6652 16.7965C11.8059 16.7613 11.8989 16.6884 11.9442 16.5778C11.9944 16.4723 12.0045 16.3617 11.9743 16.2461L11.7331 15.2962C11.7029 15.1756 11.63 15.0851 11.5144 15.0248C11.4039 14.9645 11.2883 14.952 11.1677 14.9871C11.037 15.0223 10.944 15.0927 10.8887 15.1982C10.8334 15.3088 10.8234 15.4219 10.8586 15.5375L11.13 16.4572C11.1651 16.5829 11.228 16.6758 11.3184 16.7361C11.4139 16.8015 11.5295 16.8216 11.6652 16.7965ZM9.43373 17C9.5644 17 9.67246 16.9548 9.7579 16.8643C9.84334 16.7789 9.88606 16.6733 9.88606 16.5477V13.7508C9.88606 13.6201 9.84334 13.512 9.7579 13.4266C9.67246 13.3412 9.5644 13.2984 9.43373 13.2984C9.31311 13.2984 9.20757 13.3412 9.1171 13.4266C9.03166 13.512 8.98894 13.6201 8.98894 13.7508V16.5477C8.98894 16.6733 9.03166 16.7789 9.1171 16.8643C9.20757 16.9548 9.31311 17 9.43373 17ZM7.17209 16.7889C7.31281 16.8341 7.43846 16.8216 7.54903 16.7512C7.6596 16.6859 7.72996 16.5954 7.76012 16.4798L8.01644 15.5525C8.05162 15.4319 8.03905 15.3163 7.97874 15.2058C7.91843 15.1002 7.82797 15.0324 7.70734 15.0022C7.58672 14.9721 7.47113 14.9846 7.36056 15.0399C7.25502 15.1002 7.18717 15.1932 7.15701 15.3188L6.90823 16.2461C6.87305 16.3768 6.87556 16.4899 6.91577 16.5854C6.961 16.6809 7.04644 16.7487 7.17209 16.7889ZM5.18938 15.8616C5.29493 15.922 5.40801 15.937 5.52863 15.9069C5.64925 15.8767 5.73972 15.8064 5.80003 15.6958L7.20224 13.2683C7.26758 13.1577 7.28266 13.0446 7.24748 12.929C7.21732 12.8084 7.14947 12.7154 7.04393 12.6501C6.93336 12.5898 6.81777 12.5747 6.69714 12.6049C6.58155 12.635 6.49108 12.7079 6.42575 12.8235L5.03107 15.251C4.96573 15.3565 4.94814 15.4671 4.9783 15.5827C5.01348 15.7033 5.08384 15.7963 5.18938 15.8616ZM3.37253 14.565C3.46802 14.6554 3.57357 14.7007 3.68916 14.7007C3.80978 14.7057 3.91281 14.6655 3.99825 14.58L4.68428 13.9016C4.77475 13.801 4.8225 13.693 4.82752 13.5774C4.83255 13.4618 4.78732 13.3588 4.69182 13.2683C4.60638 13.1778 4.50084 13.1326 4.37519 13.1326C4.24955 13.1276 4.144 13.1703 4.05856 13.2608L3.38761 13.9392C3.29212 14.0398 3.24186 14.1453 3.23683 14.2559C3.23683 14.3715 3.28207 14.4745 3.37253 14.565ZM2.07586 12.7481C2.13617 12.8537 2.22664 12.924 2.34726 12.9592C2.46788 12.9894 2.58096 12.9743 2.6865 12.914L5.114 11.5118C5.22959 11.4464 5.30247 11.3559 5.33262 11.2404C5.36278 11.1197 5.3477 11.0067 5.28739 10.9011C5.22205 10.7905 5.12907 10.7202 5.00845 10.69C4.89286 10.6548 4.77978 10.6699 4.66921 10.7353L2.24171 12.1375C2.13114 12.1978 2.06078 12.2882 2.03063 12.4089C2.00047 12.5245 2.01555 12.6375 2.07586 12.7481ZM1.14859 10.7202C1.17874 10.8408 1.2491 10.9313 1.35967 10.9916C1.47024 11.0469 1.58332 11.0619 1.69892 11.0368L2.63373 10.8031C2.75938 10.7679 2.85236 10.7001 2.91267 10.5996C2.97298 10.494 2.98554 10.3784 2.95036 10.2528C2.91518 10.1322 2.84482 10.0417 2.73927 9.98137C2.63373 9.91604 2.51814 9.89845 2.39249 9.9286L1.48783 10.1774C1.34711 10.2176 1.24659 10.2905 1.18628 10.396C1.131 10.4965 1.11843 10.6046 1.14859 10.7202ZM0.9375 8.49623C0.9375 8.62188 0.98022 8.72993 1.06566 8.8204C1.15613 8.90584 1.26418 8.94856 1.38983 8.94856H4.18672C4.3174 8.94856 4.42545 8.90584 4.51089 8.8204C4.59633 8.72993 4.63905 8.62188 4.63905 8.49623C4.63905 8.37058 4.59633 8.26504 4.51089 8.1796C4.42545 8.09416 4.3174 8.05144 4.18672 8.05144H1.38983C1.26418 8.05144 1.15613 8.09416 1.06566 8.1796C0.98022 8.26504 0.9375 8.37058 0.9375 8.49623ZM1.14105 6.27982C1.11592 6.40044 1.13602 6.51353 1.20136 6.61907C1.26669 6.72461 1.35465 6.79497 1.46522 6.83015L2.39249 7.09401C2.51814 7.12417 2.63373 7.10909 2.73927 7.04878C2.84984 6.98847 2.91769 6.89549 2.94282 6.76984C2.97298 6.64922 2.96041 6.53363 2.90513 6.42306C2.84984 6.31249 2.75938 6.24213 2.63373 6.21197L1.70646 5.97827C1.57076 5.94309 1.44763 5.95565 1.33706 6.01596C1.23151 6.07627 1.16618 6.16423 1.14105 6.27982ZM2.0834 4.24435C2.01806 4.35491 2.00047 4.47051 2.03063 4.59113C2.06078 4.70673 2.13114 4.79719 2.24171 4.86253L4.66921 6.26474C4.77978 6.33008 4.89286 6.34767 5.00845 6.31752C5.12907 6.28234 5.22205 6.21197 5.28739 6.10643C5.3477 5.99586 5.36278 5.88027 5.33262 5.75964C5.30247 5.63902 5.22959 5.54856 5.114 5.48825L2.6865 4.08603C2.58096 4.02572 2.46788 4.01064 2.34726 4.0408C2.23166 4.07095 2.14371 4.1388 2.0834 4.24435ZM3.36499 2.43503C3.27453 2.52047 3.23181 2.62602 3.23683 2.75166C3.24689 2.87731 3.29212 2.98285 3.37253 3.06829L4.04349 3.74679C4.13898 3.84228 4.24452 3.89253 4.36012 3.89756C4.48074 3.89756 4.58879 3.84982 4.68428 3.75432C4.76972 3.66888 4.81244 3.56585 4.81244 3.44523C4.81747 3.31959 4.77224 3.20902 4.67675 3.11353L4.00579 2.44257C3.9103 2.34205 3.80224 2.29431 3.68162 2.29933C3.56603 2.29933 3.46049 2.34457 3.36499 2.43503ZM5.18938 1.13082C5.08384 1.19616 5.01348 1.28914 4.9783 1.40976C4.94814 1.52535 4.96573 1.63843 5.03107 1.749L6.42575 4.1765C6.49108 4.28707 6.58155 4.35994 6.69714 4.39512C6.81777 4.42528 6.93085 4.40769 7.03639 4.34235C7.14696 4.28204 7.21732 4.19409 7.24748 4.07849C7.28266 3.95787 7.26758 3.84228 7.20224 3.73171L5.80003 1.29667C5.73469 1.19113 5.64423 1.12328 5.52863 1.09313C5.41304 1.05795 5.29995 1.07051 5.18938 1.13082ZM7.20978 0.203548C7.08414 0.228677 6.99116 0.294013 6.93085 0.399557C6.87556 0.500074 6.86551 0.620695 6.90069 0.761419L7.14947 1.71131C7.17963 1.8269 7.24748 1.91234 7.35302 1.96763C7.46359 2.02291 7.58924 2.03045 7.72996 1.99024C7.86566 1.95004 7.95613 1.88219 8.00136 1.7867C8.05162 1.68618 8.05916 1.57561 8.02397 1.45499L7.76012 0.542794C7.72494 0.407095 7.65457 0.311604 7.54903 0.256319C7.44851 0.196009 7.33543 0.178418 7.20978 0.203548Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(LoaderHighIcon);
export default ForwardRef;