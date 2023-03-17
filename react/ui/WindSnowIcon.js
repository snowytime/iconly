import * as React from "react";
import { forwardRef } from "react";
const WindSnowIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.710696 6.44907C1.83285 6.08899 2.96279 5.90895 4.10053 5.90895C4.57848 5.90895 5.02266 5.92953 5.43308 5.97068C5.84869 6.00669 6.25651 6.04527 6.65654 6.08642C7.06176 6.12243 7.49036 6.14043 7.94233 6.14043C8.4099 6.14043 8.81252 6.04527 9.1502 5.85494C9.49308 5.66461 9.75544 5.40484 9.93727 5.07562C10.1243 4.7464 10.2178 4.3786 10.2178 3.97222C10.2178 3.55041 10.1191 3.17747 9.92168 2.8534C9.72946 2.52932 9.46711 2.27469 9.13462 2.08951C8.80733 1.90432 8.44367 1.81173 8.04364 1.81173C7.59686 1.81173 7.19423 1.93519 6.83577 2.1821C6.4773 2.42901 6.21495 2.73508 6.0487 3.10031C5.98636 3.22891 5.96818 3.36008 5.99416 3.49383C6.02533 3.62243 6.10845 3.72016 6.24352 3.78704C6.36821 3.84877 6.49808 3.85905 6.63316 3.8179C6.76823 3.77675 6.87733 3.67901 6.96045 3.52469C7.04877 3.32922 7.18904 3.16461 7.38126 3.03086C7.57867 2.89198 7.79947 2.82253 8.04364 2.82253C8.36574 2.82253 8.63848 2.92798 8.86187 3.13889C9.08527 3.34465 9.19696 3.62243 9.19696 3.97222C9.19696 4.32202 9.08267 4.60494 8.85408 4.82099C8.62549 5.03189 8.32158 5.13735 7.94233 5.13735C7.51114 5.13735 7.09553 5.11934 6.6955 5.08333C6.30067 5.04218 5.89285 5.0036 5.47204 4.96759C5.05124 4.92644 4.59406 4.90586 4.10053 4.90586C3.46152 4.90586 2.82772 4.95988 2.1991 5.0679C1.57049 5.17078 0.970453 5.31224 0.398987 5.49228C0.232742 5.53858 0.118449 5.62346 0.0561075 5.74691C-0.00623417 5.86523 -0.0166245 5.99126 0.0249367 6.125C0.0613027 6.25874 0.13923 6.35905 0.258718 6.42593C0.383402 6.4928 0.534061 6.50051 0.710696 6.44907ZM12.8985 10.0602C13.5063 10.0602 14.0414 9.94444 14.5038 9.71296C14.9714 9.47634 15.3376 9.15226 15.6026 8.74074C15.8675 8.32922 16 7.85597 16 7.32099C16 6.7963 15.8753 6.33076 15.6259 5.92438C15.3818 5.51286 15.0519 5.19136 14.6363 4.95988C14.2207 4.72325 13.7609 4.60494 13.257 4.60494C12.7842 4.60494 12.3608 4.70525 11.9868 4.90586C11.6127 5.10134 11.3062 5.36883 11.0672 5.70833C10.8282 6.04784 10.6776 6.4285 10.6152 6.85031C10.5893 7.00977 10.6152 7.14866 10.6932 7.26698C10.7763 7.38014 10.888 7.44702 11.0282 7.46759C11.1737 7.48817 11.301 7.45473 11.4101 7.36728C11.5244 7.27984 11.5971 7.14609 11.6283 6.96605C11.675 6.69856 11.7738 6.46451 11.9244 6.26389C12.0803 6.05813 12.2725 5.89866 12.5011 5.78549C12.7297 5.66718 12.9816 5.60802 13.257 5.60802C13.5739 5.60802 13.8622 5.68004 14.122 5.82407C14.3869 5.96811 14.5947 6.1713 14.7454 6.43364C14.9012 6.69084 14.9792 6.98663 14.9792 7.32099C14.9792 7.83539 14.7895 8.25463 14.4103 8.5787C14.0362 8.89763 13.5323 9.0571 12.8985 9.0571C12.3063 9.0571 11.6984 8.99023 11.075 8.85648C10.4516 8.71759 9.80739 8.5607 9.14241 8.3858C8.48263 8.21091 7.79427 8.05658 7.07734 7.92284C6.36561 7.78395 5.62011 7.71451 4.84083 7.71451C4.03559 7.71451 3.26411 7.77881 2.5264 7.90741C1.79388 8.03086 1.08475 8.21091 0.398987 8.44753C0.237938 8.50412 0.123644 8.59414 0.0561075 8.71759C-0.00623417 8.83591 -0.0166245 8.96193 0.0249367 9.09568C0.0613027 9.22942 0.141827 9.32973 0.266511 9.39661C0.391194 9.46348 0.539256 9.46862 0.710696 9.41204C1.3445 9.17027 1.99909 8.99537 2.67446 8.88735C3.34983 8.77932 4.07195 8.72531 4.84083 8.72531C5.61491 8.72531 6.34743 8.79218 7.03838 8.92593C7.73453 9.05967 8.4047 9.21656 9.0489 9.39661C9.6931 9.5715 10.3321 9.72582 10.9659 9.85957C11.5997 9.99331 12.2439 10.0602 12.8985 10.0602ZM7.95013 15.5C8.35015 15.5 8.71122 15.4074 9.03331 15.2222C9.35541 15.0422 9.60997 14.7927 9.797 14.4738C9.98403 14.1548 10.0775 13.7845 10.0775 13.3627C10.0775 12.4522 9.62037 11.7526 8.70602 11.2639C7.79167 10.7701 6.46951 10.5231 4.73953 10.5231C4.0174 10.5231 3.2771 10.5874 2.51861 10.716C1.76531 10.8446 1.05877 11.0221 0.398987 11.2485C0.237938 11.305 0.123644 11.3951 0.0561075 11.5185C-0.00623417 11.642 -0.0166245 11.768 0.0249367 11.8966C0.0613027 12.0304 0.141827 12.1307 0.266511 12.1975C0.391194 12.2644 0.539256 12.2695 0.710696 12.213C1.32892 11.9918 1.97831 11.8246 2.65887 11.7114C3.34463 11.5931 4.03818 11.534 4.73953 11.534C6.15261 11.534 7.2254 11.6986 7.95792 12.0278C8.69563 12.3519 9.06448 12.7968 9.06448 13.3627C9.06448 13.7176 8.95539 13.9954 8.73719 14.196C8.51899 14.3966 8.25664 14.4969 7.95013 14.4969C7.64361 14.4969 7.39684 14.4017 7.20982 14.2114C7.02799 14.0211 6.9085 13.7639 6.85135 13.4398C6.83057 13.2958 6.76823 13.1749 6.66433 13.0772C6.56562 12.9743 6.43055 12.928 6.25911 12.9383C6.08247 12.9537 5.95779 13.0231 5.88506 13.1466C5.81233 13.2701 5.78895 13.4115 5.81492 13.571C5.88246 14.106 6.10585 14.5612 6.4851 14.9367C6.86434 15.3122 7.35269 15.5 7.95013 15.5ZM13.5765 3.29321C13.6596 3.29321 13.7271 3.26235 13.7791 3.20062C13.8362 3.13374 13.8622 3.05658 13.857 2.96914L13.8102 2.3287L14.3557 2.69136C14.4181 2.73251 14.4908 2.74537 14.5739 2.72994C14.6623 2.71451 14.7298 2.67335 14.7765 2.60648C14.8285 2.52932 14.8389 2.44959 14.8077 2.36728C14.7817 2.27984 14.7246 2.21811 14.6363 2.1821L14.0596 1.8966L14.6519 1.6034C14.7246 1.56739 14.7739 1.50823 14.7999 1.42593C14.8311 1.34362 14.8259 1.26389 14.7843 1.18673C14.748 1.11471 14.683 1.07099 14.5895 1.05556C14.5012 1.03498 14.4207 1.05041 14.3479 1.10185L13.8102 1.46451L13.8648 0.83179C13.87 0.744342 13.844 0.667181 13.7869 0.600309C13.7297 0.533436 13.6596 0.5 13.5765 0.5C13.483 0.5 13.4076 0.530864 13.3505 0.592593C13.2933 0.654321 13.2674 0.731481 13.2726 0.824074L13.3193 1.47222L12.766 1.10185C12.6933 1.05556 12.6154 1.04012 12.5322 1.05556C12.4543 1.06584 12.3946 1.10957 12.353 1.18673C12.3063 1.26389 12.2959 1.34362 12.3218 1.42593C12.3478 1.50309 12.3998 1.56224 12.4777 1.6034L13.0621 1.8966L12.4855 2.1821C12.4024 2.21296 12.3452 2.27212 12.314 2.35957C12.2881 2.44187 12.2985 2.52418 12.3452 2.60648C12.3816 2.67335 12.4413 2.71708 12.5244 2.73765C12.6128 2.75309 12.6933 2.73765 12.766 2.69136L13.3193 2.3287L13.2803 2.96914C13.2803 3.06173 13.3063 3.13889 13.3583 3.20062C13.4154 3.26235 13.4881 3.29321 13.5765 3.29321ZM13.5765 14.358C13.6596 14.358 13.7271 14.3272 13.7791 14.2654C13.8362 14.2037 13.8622 14.1291 13.857 14.0417L13.8102 13.4012L14.3557 13.7639C14.4181 13.805 14.4908 13.8179 14.5739 13.8025C14.6623 13.787 14.7298 13.7433 14.7765 13.6713C14.8285 13.5993 14.8389 13.5195 14.8077 13.4321C14.7817 13.3446 14.7246 13.2855 14.6363 13.2546L14.0596 12.9614L14.6519 12.6682C14.7246 12.6322 14.7739 12.5756 14.7999 12.4985C14.8311 12.4162 14.8259 12.3338 14.7843 12.2515C14.748 12.1847 14.683 12.1435 14.5895 12.1281C14.5012 12.1075 14.4207 12.1204 14.3479 12.1667L13.8102 12.5293L13.8648 11.8966C13.87 11.8092 13.844 11.7346 13.7869 11.6728C13.7297 11.606 13.6596 11.5725 13.5765 11.5725C13.483 11.5725 13.4076 11.6034 13.3505 11.6651C13.2933 11.7269 13.2674 11.8014 13.2726 11.8889L13.3193 12.537L12.766 12.1667C12.6933 12.1204 12.6154 12.1049 12.5322 12.1204C12.4543 12.1358 12.3946 12.1795 12.353 12.2515C12.3063 12.3338 12.2959 12.4162 12.3218 12.4985C12.3478 12.5756 12.3998 12.6322 12.4777 12.6682L13.0621 12.9614L12.4855 13.2469C12.4024 13.2829 12.3452 13.3421 12.314 13.4244C12.2881 13.5067 12.2985 13.589 12.3452 13.6713C12.3816 13.7433 12.4413 13.787 12.5244 13.8025C12.6128 13.8179 12.6933 13.8025 12.766 13.7562L13.3193 13.3935L13.2803 14.0417C13.2803 14.1291 13.3063 14.2037 13.3583 14.2654C13.4154 14.3272 13.4881 14.358 13.5765 14.358Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(WindSnowIcon);
export default ForwardRef;