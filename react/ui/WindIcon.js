import * as React from "react";
import { forwardRef } from "react";
const WindIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 16 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.710696 4.74295C1.83285 4.37467 2.96279 4.19053 4.10053 4.19053C4.57848 4.19053 5.02266 4.21157 5.43308 4.25366C5.84869 4.29049 6.25651 4.32995 6.65654 4.37204C7.06176 4.40887 7.49036 4.42728 7.94233 4.42728C8.4099 4.42728 8.81252 4.32995 9.1502 4.13529C9.49308 3.94062 9.75544 3.67493 9.93727 3.33822C10.1243 3.0015 10.2178 2.62533 10.2178 2.2097C10.2178 1.77828 10.1191 1.39684 9.92168 1.06539C9.72946 0.733935 9.46711 0.473506 9.13462 0.284104C8.80733 0.0947012 8.44367 0 8.04364 0C7.59686 0 7.19423 0.126268 6.83577 0.378805C6.4773 0.631342 6.21495 0.944382 6.0487 1.31793C5.98636 1.44945 5.96818 1.58362 5.99416 1.72041C6.02533 1.85194 6.10845 1.9519 6.24352 2.02029C6.36821 2.08343 6.49808 2.09395 6.63316 2.05186C6.76823 2.00977 6.87733 1.90981 6.96045 1.75197C7.04877 1.55205 7.18904 1.38369 7.38126 1.2469C7.57867 1.10485 7.79947 1.03382 8.04364 1.03382C8.36574 1.03382 8.63848 1.14168 8.86187 1.35738C9.08527 1.56783 9.19696 1.85194 9.19696 2.2097C9.19696 2.56746 9.08267 2.85682 8.85408 3.07779C8.62549 3.2935 8.32158 3.40135 7.94233 3.40135C7.51114 3.40135 7.09553 3.38294 6.6955 3.34611C6.30067 3.30402 5.89285 3.26456 5.47204 3.22773C5.05124 3.18564 4.59406 3.1646 4.10053 3.1646C3.46152 3.1646 2.82772 3.21984 2.1991 3.33033C1.57049 3.43555 0.970453 3.58023 0.398987 3.76437C0.232742 3.81172 0.118449 3.89853 0.0561075 4.0248C-0.00623417 4.14581 -0.0166245 4.27471 0.0249367 4.4115C0.0613027 4.54829 0.13923 4.65088 0.258718 4.71928C0.383402 4.78767 0.534061 4.79557 0.710696 4.74295ZM12.8985 8.4363C13.5063 8.4363 14.0414 8.31793 14.5038 8.08117C14.9714 7.83916 15.3376 7.5077 15.6026 7.08681C15.8675 6.66591 16 6.18189 16 5.63472C16 5.09808 15.8753 4.62195 15.6259 4.20631C15.3818 3.78542 15.0519 3.45659 14.6363 3.21984C14.2207 2.97783 13.7609 2.85682 13.257 2.85682C12.7842 2.85682 12.3608 2.95941 11.9868 3.1646C11.6127 3.36452 11.3062 3.63811 11.0672 3.98534C10.8282 4.33258 10.6776 4.72191 10.6152 5.15333C10.5893 5.31642 10.6152 5.45847 10.6932 5.57948C10.7763 5.69523 10.888 5.76362 11.0282 5.78467C11.1737 5.80571 11.301 5.77151 11.4101 5.68207C11.5244 5.59263 11.5971 5.45584 11.6283 5.2717C11.675 4.99812 11.7738 4.75874 11.9244 4.55355C12.0803 4.3431 12.2725 4.18001 12.5011 4.06426C12.7297 3.94325 12.9816 3.88275 13.257 3.88275C13.5739 3.88275 13.8622 3.95641 14.122 4.10372C14.3869 4.25103 14.5947 4.45885 14.7454 4.72717C14.9012 4.99023 14.9792 5.29275 14.9792 5.63472C14.9792 6.16084 14.7895 6.58963 14.4103 6.92108C14.0362 7.24728 13.5323 7.41037 12.8985 7.41037C12.3063 7.41037 11.6984 7.34198 11.075 7.20519C10.4516 7.06313 9.80739 6.90267 9.14241 6.72379C8.48263 6.54491 7.79427 6.38707 7.07734 6.25028C6.36561 6.10823 5.62011 6.0372 4.84083 6.0372C4.03559 6.0372 3.26411 6.10297 2.5264 6.2345C1.79388 6.36077 1.08475 6.54491 0.398987 6.78692C0.237938 6.84479 0.123644 6.93687 0.0561075 7.06313C-0.00623417 7.18414 -0.0166245 7.31304 0.0249367 7.44983C0.0613027 7.58662 0.141827 7.68921 0.266511 7.75761C0.391194 7.826 0.539256 7.83127 0.710696 7.77339C1.3445 7.52612 1.99909 7.34724 2.67446 7.23675C3.34983 7.12627 4.07195 7.07103 4.84083 7.07103C5.61491 7.07103 6.34743 7.13942 7.03838 7.27621C7.73453 7.413 8.4047 7.57347 9.0489 7.75761C9.6931 7.93649 10.3321 8.09432 10.9659 8.23112C11.5997 8.36791 12.2439 8.4363 12.8985 8.4363ZM7.95013 14C8.35015 14 8.71122 13.9053 9.03331 13.7159C9.35541 13.5318 9.60997 13.2766 9.797 12.9504C9.98403 12.6242 10.0775 12.2454 10.0775 11.814C10.0775 10.8828 9.62037 10.1672 8.70602 9.66742C7.79167 9.16234 6.46951 8.90981 4.73953 8.90981C4.0174 8.90981 3.2771 8.97557 2.51861 9.1071C1.76531 9.23863 1.05877 9.42014 0.398987 9.65163C0.237938 9.70951 0.123644 9.80158 0.0561075 9.92785C-0.00623417 10.0541 -0.0166245 10.183 0.0249367 10.3145C0.0613027 10.4513 0.141827 10.5539 0.266511 10.6223C0.391194 10.6907 0.539256 10.696 0.710696 10.6381C1.32892 10.4119 1.97831 10.2409 2.65887 10.1251C3.34463 10.0041 4.03818 9.94363 4.73953 9.94363C6.15261 9.94363 7.2254 10.112 7.95792 10.4487C8.69563 10.7802 9.06448 11.2352 9.06448 11.814C9.06448 12.177 8.95539 12.4611 8.73719 12.6663C8.51899 12.8715 8.25664 12.9741 7.95013 12.9741C7.64361 12.9741 7.39684 12.8767 7.20982 12.6821C7.02799 12.4874 6.9085 12.2244 6.85135 11.8929C6.83057 11.7456 6.76823 11.6219 6.66433 11.522C6.56562 11.4168 6.43055 11.3694 6.25911 11.3799C6.08247 11.3957 5.95779 11.4667 5.88506 11.593C5.81233 11.7193 5.78895 11.864 5.81492 12.0271C5.88246 12.5742 6.10585 13.0398 6.4851 13.4239C6.86434 13.808 7.35269 14 7.95013 14Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(WindIcon);
export default ForwardRef;