import * as React from "react";
import { forwardRef } from "react";
const TransmitterIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 21 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M6.91339 14.5C7.85302 14.5 8.73753 14.3165 9.56693 13.9496C10.4016 13.5826 11.1365 13.0774 11.7717 12.4339C12.4121 11.7904 12.9134 11.0459 13.2756 10.2003C13.6378 9.3547 13.8189 8.45594 13.8189 7.50399C13.8189 6.54672 13.6378 5.64796 13.2756 4.80769C12.9134 3.96211 12.4121 3.21757 11.7717 2.57407C11.1365 1.92526 10.4016 1.41738 9.56693 1.05043C8.73228 0.683476 7.84252 0.5 6.89764 0.5C5.95801 0.5 5.07087 0.683476 4.23622 1.05043C3.40682 1.41738 2.67454 1.92526 2.03937 2.57407C1.4042 3.21757 0.905512 3.96211 0.543307 4.80769C0.181102 5.64796 0 6.54672 0 7.50399C0 8.45594 0.181102 9.3547 0.543307 10.2003C0.905512 11.0459 1.4042 11.7904 2.03937 12.4339C2.67979 13.0774 3.4147 13.5826 4.24409 13.9496C5.07874 14.3165 5.9685 14.5 6.91339 14.5ZM6.89764 13.2236C6.11549 13.2236 5.3832 13.0774 4.70079 12.7849C4.01837 12.4924 3.41995 12.0856 2.90551 11.5644C2.39108 11.0379 1.9895 10.429 1.70079 9.73761C1.41207 9.04625 1.26772 8.30171 1.26772 7.50399C1.26772 6.70627 1.41207 5.96173 1.70079 5.27037C1.9895 4.57901 2.39108 3.97274 2.90551 3.45157C3.41995 2.93039 4.01575 2.52355 4.69291 2.23105C5.37533 1.93324 6.10761 1.78433 6.88976 1.78433C7.67717 1.78433 8.41207 1.93324 9.09449 2.23105C9.7769 2.52355 10.3753 2.93039 10.8898 3.45157C11.4094 3.97274 11.8136 4.57901 12.1024 5.27037C12.3963 5.96173 12.5433 6.70627 12.5433 7.50399C12.5433 8.30171 12.399 9.04625 12.1102 9.73761C11.8215 10.429 11.4199 11.0379 10.9055 11.5644C10.3911 12.0856 9.79003 12.4924 9.10236 12.7849C8.41995 13.0774 7.68504 13.2236 6.89764 13.2236ZM6.92126 5.40598C7.25722 5.40598 7.54593 5.28632 7.7874 5.04701C8.02887 4.80237 8.14961 4.50722 8.14961 4.16154C8.14961 3.81054 8.02887 3.51538 7.7874 3.27607C7.54593 3.03143 7.25722 2.90912 6.92126 2.90912C6.5748 2.90912 6.28084 3.03143 6.03937 3.27607C5.7979 3.51538 5.67717 3.81054 5.67717 4.16154C5.67717 4.50722 5.7979 4.80237 6.03937 5.04701C6.28084 5.28632 6.5748 5.40598 6.92126 5.40598ZM15.748 10.6869C15.8793 10.8358 16.0446 10.9103 16.2441 10.9103C16.4488 10.9049 16.622 10.8119 16.7638 10.6311C17.105 10.2003 17.3701 9.71899 17.5591 9.18718C17.748 8.65005 17.8425 8.08898 17.8425 7.50399C17.8425 6.91899 17.748 6.36059 17.5591 5.82877C17.3701 5.29164 17.105 4.80769 16.7638 4.37692C16.622 4.19611 16.4488 4.1057 16.2441 4.1057C16.0446 4.10038 15.8793 4.17217 15.748 4.32108C15.622 4.46467 15.5774 4.62156 15.6142 4.79174C15.6509 4.96192 15.7297 5.13476 15.8504 5.31026C16.0866 5.60807 16.2625 5.94577 16.378 6.32336C16.4987 6.69563 16.5591 7.08917 16.5591 7.50399C16.5591 7.9188 16.4987 8.315 16.378 8.69259C16.2625 9.06486 16.0866 9.39991 15.8504 9.69772C15.7297 9.8679 15.6509 10.0407 15.6142 10.2162C15.5774 10.3864 15.622 10.5433 15.748 10.6869ZM17.9528 12.9604C18.084 13.1093 18.2441 13.1811 18.4331 13.1758C18.6273 13.1705 18.8005 13.0854 18.9528 12.9205C19.6089 12.1972 20.1129 11.3729 20.4646 10.4476C20.8215 9.5169 21 8.53571 21 7.50399C21 6.47227 20.8215 5.49107 20.4646 4.5604C20.1129 3.62972 19.6089 2.80541 18.9528 2.08746C18.8005 1.91728 18.6273 1.83219 18.4331 1.83219C18.2441 1.82688 18.084 1.89867 17.9528 2.04758C17.8268 2.19117 17.7769 2.35071 17.8032 2.52621C17.8346 2.70171 17.9239 2.87189 18.0709 3.03675C18.5958 3.63238 19 4.31045 19.2835 5.07094C19.5722 5.83143 19.7165 6.64245 19.7165 7.50399C19.7165 8.36021 19.5722 9.17122 19.2835 9.93704C19 10.6975 18.5958 11.3756 18.0709 11.9712C17.9239 12.1361 17.8346 12.3063 17.8032 12.4818C17.7769 12.6573 17.8268 12.8168 17.9528 12.9604Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(TransmitterIcon);
export default ForwardRef;