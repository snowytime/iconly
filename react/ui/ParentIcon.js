import * as React from "react";
import { forwardRef } from "react";
const ParentIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 16 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M5.54114 3.28565C5.84771 3.28565 6.12618 3.2145 6.37655 3.0722C6.62691 2.92481 6.82619 2.72661 6.97436 2.47758C7.12254 2.22855 7.19663 1.95157 7.19663 1.64664C7.19663 1.3417 7.12254 1.06472 6.97436 0.815695C6.82619 0.566667 6.62691 0.36846 6.37655 0.221076C6.12618 0.0736921 5.84771 0 5.54114 0C5.23457 0 4.9561 0.0736921 4.70573 0.221076C4.45536 0.36846 4.25609 0.566667 4.10791 0.815695C3.95974 1.06472 3.88565 1.3417 3.88565 1.64664C3.88565 1.95157 3.95974 2.22855 4.10791 2.47758C4.25609 2.72661 4.45536 2.92481 4.70573 3.0722C4.9561 3.2145 5.23457 3.28565 5.54114 3.28565ZM2.89695 17C3.26484 17 3.5101 16.7764 3.63273 16.3291C3.68382 16.1411 3.7528 15.8768 3.83966 15.5363C3.92652 15.2009 4.02105 14.8299 4.12324 14.4233C4.22543 14.0167 4.32762 13.6152 4.42981 13.2188C4.53711 12.8173 4.6342 12.4565 4.72106 12.1363C4.80792 11.8161 4.8769 11.5798 4.92799 11.4274C5.01486 11.1529 5.09916 10.9573 5.18092 10.8404C5.26267 10.7235 5.38274 10.665 5.54114 10.665C5.69953 10.665 5.81961 10.7235 5.90136 10.8404C5.98311 10.9573 6.06742 11.1529 6.15428 11.4274C6.20538 11.5798 6.27436 11.8161 6.36122 12.1363C6.44808 12.4565 6.54261 12.8173 6.6448 13.2188C6.74699 13.6152 6.84918 14.0167 6.95137 14.4233C7.05867 14.8299 7.15575 15.2009 7.24261 15.5363C7.32948 15.8768 7.39845 16.1411 7.44955 16.3291C7.57218 16.7764 7.81744 17 8.18532 17C8.43058 17 8.61708 16.906 8.74482 16.7179C8.87767 16.5299 8.90832 16.3164 8.83679 16.0776C8.82657 16.042 8.7908 15.8997 8.72949 15.6507C8.66817 15.4016 8.59153 15.0865 8.49956 14.7054C8.4127 14.3242 8.31562 13.9126 8.20832 13.4704C8.10613 13.0283 8.00649 12.5963 7.90941 12.1744C7.81233 11.7475 7.72802 11.3689 7.65649 11.0386C7.58495 10.7031 7.53641 10.4567 7.51086 10.2991C7.48021 10.0907 7.45466 9.83916 7.43422 9.54439C7.41378 9.24963 7.3959 8.94215 7.38057 8.62197C7.37035 8.30179 7.36269 7.99686 7.35758 7.70718C7.35247 7.41241 7.34991 7.16592 7.34991 6.96771C7.34991 6.90673 7.37546 6.86861 7.42656 6.85336C7.47765 6.83812 7.52364 6.8559 7.56451 6.90673L8.43058 8.11121C8.47657 7.88251 8.60175 7.66652 8.80613 7.46323C9.01051 7.25486 9.27365 7.14813 9.59556 7.14305L8.40759 5.42018C8.19299 5.11016 7.95539 4.85859 7.69481 4.66547C7.43933 4.46726 7.13787 4.32242 6.79042 4.23094C6.44297 4.13438 6.02654 4.0861 5.54114 4.0861C5.05573 4.0861 4.63675 4.13438 4.28419 4.23094C3.93674 4.32242 3.63273 4.46726 3.37214 4.66547C3.11666 4.85859 2.88418 5.11016 2.67469 5.42018L0.689633 8.32466C0.648757 8.38057 0.60788 8.43901 0.567004 8.5C0.531237 8.55591 0.498025 8.61181 0.467368 8.66771C0.385615 8.8151 0.367732 8.98027 0.413718 9.16323C0.464813 9.34111 0.589997 9.48087 0.789269 9.58251C0.937445 9.66891 1.09329 9.6994 1.25679 9.67399C1.42541 9.64858 1.56592 9.57235 1.67833 9.44529C1.73453 9.38431 1.83161 9.25725 1.96957 9.06413C2.11264 8.871 2.27614 8.64484 2.46009 8.38565C2.64403 8.12646 2.83053 7.86726 3.01958 7.60807C3.20863 7.3438 3.37469 7.11002 3.51776 6.90673C3.55353 6.8559 3.59696 6.84066 3.64805 6.86099C3.70426 6.87623 3.73236 6.91435 3.73236 6.97534C3.73236 7.17354 3.72981 7.41749 3.7247 7.70718C3.71959 7.99686 3.70937 8.30179 3.69404 8.62197C3.68382 8.94215 3.66849 9.24963 3.64805 9.54439C3.62762 9.83916 3.59951 10.0907 3.56375 10.2991C3.5382 10.4567 3.48966 10.7031 3.41813 11.0386C3.34659 11.3689 3.26228 11.7475 3.1652 12.1744C3.07323 12.5963 2.9736 13.0283 2.8663 13.4704C2.7641 13.9126 2.66702 14.3242 2.57505 14.7054C2.48308 15.0865 2.40644 15.4016 2.34512 15.6507C2.28892 15.8997 2.25571 16.042 2.24549 16.0776C2.17395 16.3164 2.20206 16.5299 2.32979 16.7179C2.46264 16.906 2.65169 17 2.89695 17ZM11.9868 8.55336C12.324 8.55336 12.6127 8.43393 12.8529 8.19507C13.0981 7.9562 13.2208 7.66906 13.2208 7.33363C13.2208 6.99821 13.0981 6.71106 12.8529 6.4722C12.6127 6.23333 12.324 6.1139 11.9868 6.1139C11.6496 6.1139 11.3609 6.23333 11.1208 6.4722C10.8806 6.71106 10.7605 6.99821 10.7605 7.33363C10.7605 7.66906 10.8806 7.9562 11.1208 8.19507C11.3609 8.43393 11.6496 8.55336 11.9868 8.55336ZM10.2853 17C10.4284 17 10.5561 16.9543 10.6686 16.8628C10.7861 16.7764 10.8678 16.6392 10.9138 16.4511C10.9547 16.3088 11.0109 16.0954 11.0824 15.8108C11.154 15.5312 11.2281 15.2288 11.3047 14.9036C11.3864 14.5834 11.4631 14.2886 11.5346 14.0193C11.6062 13.7499 11.6598 13.5543 11.6956 13.4323C11.7518 13.2747 11.7901 13.1807 11.8105 13.1502C11.8361 13.1146 11.8693 13.0969 11.9102 13.0969C11.9511 13.0969 11.9817 13.1146 12.0021 13.1502C12.0277 13.1807 12.066 13.2747 12.1171 13.4323C12.158 13.5543 12.2116 13.7499 12.2781 14.0193C12.3496 14.2886 12.4262 14.5834 12.508 14.9036C12.5897 15.2288 12.6664 15.5312 12.7379 15.8108C12.8095 16.0954 12.8657 16.3088 12.9065 16.4511C12.9525 16.6392 13.0317 16.7764 13.1441 16.8628C13.2565 16.9543 13.3868 17 13.535 17C13.7496 17 13.9131 16.9161 14.0255 16.7484C14.1379 16.5807 14.1686 16.3978 14.1175 16.1996C14.1124 16.1741 14.0843 16.0547 14.0332 15.8413C13.9821 15.6329 13.9182 15.3737 13.8416 15.0637C13.77 14.7587 13.696 14.4411 13.6193 14.1108C13.5478 13.7855 13.4814 13.4907 13.42 13.2265C13.3638 12.9622 13.3255 12.7691 13.3051 12.6471C13.2744 12.4641 13.2514 12.2405 13.2361 11.9762C13.2208 11.7069 13.2131 11.5061 13.2131 11.374C13.2131 11.313 13.2387 11.2749 13.2898 11.2596C13.346 11.2444 13.3919 11.2622 13.4277 11.313L14.4087 12.7233C14.5109 12.8707 14.6361 12.952 14.7843 12.9673C14.9325 12.9825 15.0602 12.9495 15.1675 12.8682C15.2697 12.797 15.3387 12.6979 15.3744 12.5709C15.4102 12.4387 15.3796 12.3015 15.2825 12.1592L14.0102 10.2076C13.7905 9.8722 13.5171 9.63333 13.1901 9.49103C12.8682 9.34365 12.531 9.26996 12.1784 9.26996H11.9102C11.6496 9.26996 11.4478 9.2293 11.3047 9.14798C11.1616 9.06158 11.0032 8.92691 10.8295 8.74395L10.0171 7.88251C9.9149 7.77578 9.77694 7.72496 9.60322 7.73004C9.4295 7.73004 9.28643 7.79611 9.17402 7.92825C9.06672 8.03498 9.00029 8.16203 8.97475 8.30942C8.95431 8.45172 8.98752 8.58894 9.07438 8.72108C9.10504 8.76682 9.1919 8.87354 9.33497 9.04126C9.47804 9.20897 9.64665 9.40718 9.84081 9.63587C10.0401 9.86457 10.2317 10.0933 10.4156 10.322C10.477 10.3982 10.5229 10.477 10.5536 10.5583C10.5894 10.6345 10.6072 10.7286 10.6072 10.8404C10.6072 10.9674 10.6047 11.1428 10.5996 11.3664C10.5945 11.59 10.5843 11.8212 10.5689 12.0601C10.5587 12.2939 10.5408 12.4895 10.5153 12.6471C10.4948 12.7691 10.454 12.9622 10.3926 13.2265C10.3364 13.4907 10.27 13.7855 10.1934 14.1108C10.1167 14.4411 10.0426 14.7587 9.97111 15.0637C9.89957 15.3737 9.83826 15.6329 9.78716 15.8413C9.73607 16.0547 9.70541 16.1741 9.69519 16.1996C9.6441 16.3978 9.67475 16.5807 9.78716 16.7484C9.89957 16.9161 10.0656 17 10.2853 17Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ParentIcon);
export default ForwardRef;