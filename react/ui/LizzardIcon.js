import * as React from "react";
import { forwardRef } from "react";
const LizzardIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 20 22",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M9.14094 0C8.68816 0 8.28331 0.118748 7.92641 0.356243C7.56951 0.593739 7.26055 0.905122 6.99953 1.29039C6.73852 1.67039 6.52278 2.08204 6.35232 2.52537C6.18186 2.96342 6.05401 3.38827 5.96878 3.79993C5.88355 4.20631 5.84093 4.552 5.84093 4.83699C5.84093 5.32254 5.90219 5.70781 6.02471 5.9928C6.15256 6.2778 6.29905 6.49682 6.46418 6.64987C6.63464 6.80293 6.78113 6.91904 6.90365 6.9982C7.0315 7.07209 7.09542 7.14334 7.09542 7.21195C7.09542 7.27528 7.0235 7.35708 6.87968 7.45736L4.3787 9.09608L3.74747 8.30443C3.67289 8.20415 3.6356 8.09332 3.6356 7.97193C3.6356 7.85055 3.67822 7.74499 3.76345 7.65527C3.84868 7.56027 3.97919 7.51277 4.15497 7.51277C4.40534 7.51277 4.6051 7.43889 4.75425 7.29111C4.90873 7.14334 4.98597 6.95862 4.98597 6.73696C4.98597 6.51529 4.90873 6.32794 4.75425 6.17488C4.59977 6.02183 4.41067 5.9453 4.18694 5.9453C3.96321 5.9453 3.77144 6.02183 3.61163 6.17488C3.45715 6.32794 3.37991 6.51529 3.37991 6.73696C3.37991 6.76862 3.37991 6.79765 3.37991 6.82404C3.38524 6.84515 3.39057 6.8689 3.39589 6.89529C3.41187 7.04306 3.37991 7.14598 3.30001 7.20403C3.22543 7.25681 3.1402 7.27264 3.04432 7.25153C2.94843 7.23042 2.87918 7.18292 2.83657 7.10903C2.79395 7.02987 2.81526 6.93223 2.90049 6.81612C3.00703 6.67362 3.0603 6.51529 3.0603 6.34113C3.0603 6.11947 2.9804 5.93211 2.82059 5.77906C2.66611 5.626 2.477 5.54948 2.25327 5.54948C2.03487 5.54948 1.84577 5.626 1.68596 5.77906C1.53148 5.93211 1.45424 6.11947 1.45424 6.34113C1.45424 6.51529 1.50218 6.66835 1.59807 6.80029C1.69395 6.92695 1.81913 7.02459 1.97361 7.0932C2.09613 7.14598 2.16005 7.21459 2.16538 7.29903C2.17603 7.38347 2.1494 7.46 2.08548 7.52861C2.02688 7.59722 1.95497 7.6368 1.86974 7.64736C1.78451 7.65263 1.70727 7.60777 1.63802 7.51277C1.47289 7.27528 1.24649 7.15653 0.95884 7.15653C0.735111 7.15653 0.546006 7.23306 0.391526 7.38611C0.237047 7.53916 0.159807 7.72652 0.159807 7.94818C0.159807 8.16985 0.237047 8.35984 0.391526 8.51817C0.546006 8.67122 0.735111 8.74775 0.95884 8.74775C1.10799 8.74775 1.25182 8.70553 1.39032 8.62109C1.57143 8.51026 1.73923 8.4654 1.89371 8.48651C2.04819 8.50234 2.19734 8.60262 2.34117 8.78733L3.57168 10.3469C3.72616 10.5422 3.91793 10.6767 4.14698 10.7506C4.38137 10.8192 4.61042 10.7929 4.83415 10.6715L5.82495 10.1331L5.50534 10.0777C5.39348 10.4366 5.30825 10.8377 5.24965 11.281C5.19105 11.7244 5.17241 12.2152 5.19372 12.7535L5.60922 12.5477L4.67435 12.041C4.45062 11.9196 4.22156 11.8932 3.98718 11.9619C3.75812 12.0305 3.56635 12.165 3.41187 12.3656L2.18935 13.9252C2.0402 14.1099 1.88838 14.2128 1.7339 14.2339C1.57942 14.2497 1.41163 14.2022 1.23051 14.0914C1.09734 14.007 0.956177 13.9647 0.807024 13.9647C0.583294 13.9647 0.391526 14.0439 0.23172 14.2022C0.0772399 14.3553 0 14.5426 0 14.7643C0 14.9807 0.0772399 15.168 0.23172 15.3264C0.391526 15.4794 0.583294 15.556 0.807024 15.556C1.08935 15.556 1.31308 15.4346 1.47821 15.1918C1.54746 15.1021 1.6247 15.0625 1.70993 15.073C1.79516 15.0783 1.86707 15.1153 1.92567 15.1839C1.98959 15.2472 2.01623 15.3211 2.00557 15.4055C2.00025 15.49 1.93632 15.5612 1.81381 15.6193C1.65933 15.6879 1.53414 15.7882 1.43826 15.9201C1.34238 16.0468 1.29443 16.1946 1.29443 16.3634C1.29443 16.5851 1.37167 16.7725 1.52615 16.9255C1.68596 17.0838 1.87773 17.163 2.10146 17.163C2.31986 17.163 2.5063 17.0838 2.66078 16.9255C2.82059 16.7725 2.90049 16.5851 2.90049 16.3634C2.90049 16.1946 2.84989 16.0362 2.74868 15.8884C2.65812 15.7776 2.63415 15.6853 2.67676 15.6114C2.7247 15.5322 2.79662 15.4821 2.8925 15.461C2.98839 15.4398 3.07362 15.4583 3.14819 15.5164C3.2281 15.5692 3.25739 15.6694 3.23609 15.8172C3.23076 15.8383 3.22543 15.8647 3.2201 15.8964C3.2201 15.9228 3.2201 15.9491 3.2201 15.9755C3.2201 16.1972 3.29734 16.3846 3.45182 16.5376C3.61163 16.6907 3.8034 16.7672 4.02713 16.7672C4.25086 16.7672 4.43996 16.6907 4.59444 16.5376C4.74892 16.3846 4.82616 16.1972 4.82616 15.9755C4.82616 15.7539 4.75159 15.5692 4.60243 15.4214C4.45328 15.2736 4.25086 15.1997 3.99517 15.1997C3.81938 15.1997 3.68887 15.1549 3.60364 15.0651C3.51841 14.9701 3.4758 14.8619 3.4758 14.7406C3.4758 14.6139 3.51308 14.5031 3.58766 14.4081L4.22689 13.6164L6.99953 15.8172C6.95692 16.6511 7.10341 17.4401 7.439 18.1842C7.7746 18.9284 8.25934 19.5855 8.89324 20.1555C9.53247 20.7307 10.2809 21.182 11.1385 21.5092C12.0015 21.8364 12.9364 22 13.9431 22C14.8594 22 15.6611 21.876 16.3482 21.6279C17.0407 21.3852 17.6267 21.0843 18.1061 20.7254C18.5855 20.3666 18.9664 20.0077 19.2487 19.6488C19.5364 19.2899 19.7335 18.997 19.84 18.7701C19.9945 18.4376 20.0371 18.1394 19.9678 17.8755C19.8986 17.6169 19.7574 17.4137 19.5444 17.2659C19.3366 17.1181 19.0942 17.0495 18.8172 17.0601C18.5402 17.0759 18.2739 17.192 18.0182 17.4084C17.6826 17.6934 17.3284 17.9098 16.9555 18.0576C16.5826 18.2106 16.2097 18.3135 15.8368 18.3663C15.4693 18.4191 15.1204 18.4455 14.7901 18.4455C14.4385 18.4455 14.071 18.3822 13.6874 18.2555C13.3092 18.1288 12.9523 17.9441 12.6167 17.7013C12.2865 17.4586 12.0148 17.1656 11.8017 16.8226C11.5886 16.4796 11.4688 16.0969 11.4422 15.6747L14.039 13.6164L14.6703 14.4081C14.7502 14.5031 14.7901 14.6139 14.7901 14.7406C14.7901 14.8619 14.7475 14.9701 14.6623 15.0651C14.577 15.1549 14.4465 15.1997 14.2707 15.1997C14.015 15.1997 13.8126 15.2736 13.6635 15.4214C13.5143 15.5692 13.4397 15.7539 13.4397 15.9755C13.4397 16.1972 13.517 16.3846 13.6715 16.5376C13.8259 16.6907 14.015 16.7672 14.2388 16.7672C14.4625 16.7672 14.6516 16.6907 14.8061 16.5376C14.9659 16.3846 15.0458 16.1972 15.0458 15.9755C15.0458 15.9439 15.0431 15.9148 15.0378 15.8884C15.0378 15.8621 15.0351 15.8357 15.0298 15.8093C15.0138 15.6615 15.0431 15.5612 15.1177 15.5085C15.1976 15.4557 15.2855 15.4398 15.3814 15.461C15.4773 15.4821 15.5465 15.5322 15.5891 15.6114C15.6318 15.6853 15.6078 15.7776 15.5172 15.8884C15.416 16.0362 15.3654 16.1946 15.3654 16.3634C15.3654 16.5851 15.4427 16.7725 15.5971 16.9255C15.7516 17.0838 15.9407 17.163 16.1644 17.163C16.3882 17.163 16.5773 17.0838 16.7318 16.9255C16.8916 16.7725 16.9715 16.5851 16.9715 16.3634C16.9715 16.1946 16.9235 16.0468 16.8276 15.9201C16.7318 15.7882 16.6066 15.6879 16.4521 15.6193C16.3296 15.5612 16.263 15.49 16.2523 15.4055C16.247 15.3211 16.2736 15.2472 16.3322 15.1839C16.3962 15.1153 16.4707 15.0783 16.556 15.073C16.6412 15.0625 16.7184 15.1021 16.7877 15.1918C16.9475 15.4346 17.1712 15.556 17.4589 15.556C17.6826 15.556 17.8717 15.4794 18.0262 15.3264C18.186 15.168 18.2659 14.9807 18.2659 14.7643C18.2659 14.5426 18.186 14.3553 18.0262 14.2022C17.8717 14.0439 17.6826 13.9647 17.4589 13.9647C17.3097 13.9647 17.1659 14.007 17.0274 14.0914C16.8516 14.2022 16.6865 14.2497 16.532 14.2339C16.3775 14.2128 16.2257 14.1099 16.0766 13.9252L14.854 12.3656C14.6996 12.165 14.5051 12.0305 14.2707 11.9619C14.0417 11.8932 13.8153 11.9196 13.5916 12.041L12.6647 12.5398L13.0802 12.7456C13.1015 12.2125 13.0828 11.7244 13.0242 11.281C12.9657 10.8377 12.8804 10.4366 12.7686 10.0777L12.4489 10.1331L13.4397 10.6715C13.6635 10.7929 13.8899 10.8192 14.1189 10.7506C14.3533 10.6767 14.5477 10.5422 14.7022 10.3469L15.9327 8.78733C16.0766 8.60262 16.2257 8.50234 16.3802 8.48651C16.5347 8.4654 16.7025 8.51026 16.8836 8.62109C17.0221 8.70553 17.1659 8.74775 17.3151 8.74775C17.5388 8.74775 17.7279 8.67122 17.8824 8.51817C18.0368 8.35984 18.1141 8.16985 18.1141 7.94818C18.1141 7.72652 18.0368 7.53916 17.8824 7.38611C17.7279 7.23306 17.5388 7.15653 17.3151 7.15653C17.0274 7.15653 16.801 7.27528 16.6359 7.51277C16.5666 7.60777 16.4894 7.65263 16.4042 7.64736C16.3189 7.6368 16.2444 7.59722 16.1804 7.52861C16.1218 7.46 16.0952 7.38347 16.1005 7.29903C16.1112 7.21459 16.1778 7.14598 16.3003 7.0932C16.4548 7.02459 16.5799 6.92695 16.6758 6.80029C16.7717 6.66835 16.8197 6.51529 16.8197 6.34113C16.8197 6.11947 16.7398 5.93211 16.5799 5.77906C16.4255 5.626 16.239 5.54948 16.0206 5.54948C15.7969 5.54948 15.6051 5.626 15.4453 5.77906C15.2908 5.93211 15.2136 6.11947 15.2136 6.34113C15.2136 6.51529 15.2669 6.67362 15.3734 6.81612C15.4586 6.93223 15.4799 7.02987 15.4373 7.10903C15.3947 7.18292 15.3255 7.23042 15.2296 7.25153C15.1337 7.27264 15.0458 7.25681 14.9659 7.20403C14.8913 7.15125 14.862 7.05098 14.878 6.9032C14.8833 6.88209 14.886 6.85834 14.886 6.83195C14.8913 6.80029 14.894 6.76862 14.894 6.73696C14.894 6.51529 14.8141 6.32794 14.6543 6.17488C14.4998 6.02183 14.3107 5.9453 14.087 5.9453C13.8686 5.9453 13.6795 6.02183 13.5196 6.17488C13.3652 6.32794 13.2879 6.51529 13.2879 6.73696C13.2879 6.95862 13.3625 7.14334 13.5117 7.29111C13.6661 7.43889 13.8686 7.51277 14.1189 7.51277C14.2947 7.51277 14.4252 7.56027 14.5104 7.65527C14.5957 7.74499 14.6383 7.85055 14.6383 7.97193C14.6383 8.09332 14.601 8.20415 14.5264 8.30443L13.8952 9.09608L11.3782 7.45736C11.2291 7.35708 11.1545 7.27528 11.1545 7.21195C11.1545 7.14334 11.2184 7.06945 11.3463 6.99028C11.4741 6.91112 11.6233 6.79501 11.7937 6.64196C11.9642 6.48891 12.1133 6.26988 12.2412 5.98489C12.369 5.69989 12.433 5.31726 12.433 4.83699C12.433 4.552 12.3903 4.20631 12.3051 3.79993C12.2252 3.38827 12.0974 2.96342 11.9216 2.52537C11.7511 2.08204 11.5354 1.67039 11.2744 1.29039C11.0133 0.905122 10.7044 0.593739 10.3475 0.356243C9.99591 0.118748 9.59373 0 9.14094 0ZM9.14094 1.21123C9.46056 1.21123 9.74821 1.34317 10.0039 1.60705C10.2596 1.86566 10.4753 2.19288 10.6511 2.5887C10.8322 2.97925 10.9681 3.37771 11.0586 3.7841C11.1545 4.19048 11.2024 4.54144 11.2024 4.83699C11.2024 5.12199 11.1598 5.3542 11.0746 5.53365C10.9947 5.71309 10.8908 5.86614 10.763 5.9928C10.6405 6.11419 10.5179 6.22766 10.3954 6.33321C10.2729 6.43877 10.169 6.56015 10.0838 6.69737C9.99857 6.82932 9.95596 6.9982 9.95596 7.20403C9.95596 7.37819 10.0252 7.57083 10.1637 7.78194C10.3022 7.98777 10.4727 8.2279 10.6751 8.50234C10.8828 8.77678 11.0879 9.09608 11.2903 9.46024C11.4981 9.81912 11.6712 10.2361 11.8097 10.711C11.9482 11.186 12.0175 11.7296 12.0175 12.3418C12.0175 12.7852 11.9615 13.1573 11.8497 13.4581C11.7431 13.7589 11.5487 14.0439 11.2664 14.3131C10.984 14.5769 10.5819 14.8778 10.0598 15.2155C10.0385 15.9175 10.169 16.5402 10.4514 17.0838C10.739 17.6327 11.1252 18.0945 11.61 18.4692C12.1 18.8492 12.6434 19.1369 13.24 19.3321C13.8366 19.5274 14.4332 19.625 15.0298 19.625C15.3015 19.625 15.6318 19.5987 16.0206 19.5459C16.4148 19.4931 16.8276 19.3849 17.2591 19.2213C17.6906 19.063 18.0981 18.8228 18.4816 18.5009C18.5349 18.4534 18.5829 18.4481 18.6255 18.4851C18.6681 18.522 18.6681 18.5774 18.6255 18.6513C18.4923 18.8519 18.2979 19.0762 18.0422 19.3242C17.7918 19.5723 17.4749 19.8098 17.0913 20.0367C16.7131 20.2689 16.263 20.4589 15.741 20.6067C15.2189 20.7545 14.6196 20.8284 13.9431 20.8284C13.0269 20.8284 12.1906 20.6806 11.4342 20.385C10.6831 20.0948 10.0465 19.691 9.52448 19.1738C9.00777 18.6619 8.63489 18.0708 8.40583 17.4005C8.1821 16.7302 8.14215 16.0204 8.28598 15.271C7.73731 14.9279 7.31648 14.6218 7.0235 14.3526C6.73053 14.0782 6.5281 13.7879 6.41624 13.4818C6.3097 13.1704 6.25643 12.7905 6.25643 12.3418C6.25643 11.7296 6.32568 11.186 6.46418 10.711C6.60268 10.2361 6.77314 9.81912 6.97556 9.46024C7.18331 9.09608 7.3884 8.77678 7.59082 8.50234C7.79857 8.2279 7.97169 7.98777 8.11019 7.78194C8.24869 7.57083 8.31794 7.37819 8.31794 7.20403C8.31794 6.9982 8.27532 6.82932 8.19009 6.69737C8.10486 6.56015 8.00099 6.43877 7.87847 6.33321C7.75595 6.22766 7.63077 6.11419 7.50292 5.9928C7.38041 5.86614 7.27653 5.71309 7.1913 5.53365C7.1114 5.3542 7.07145 5.12199 7.07145 4.83699C7.07145 4.54144 7.11672 4.19048 7.20728 3.7841C7.30317 3.37771 7.439 2.97925 7.61479 2.5887C7.7959 2.19288 8.01431 1.86566 8.27 1.60705C8.52569 1.34317 8.816 1.21123 9.14094 1.21123Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(LizzardIcon);
export default ForwardRef;