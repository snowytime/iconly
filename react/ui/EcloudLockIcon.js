import * as React from "react";
import { forwardRef } from "react";
const EcloudLockIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 20 14",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M7.42243 10.504C7.42243 11.0357 7.6664 11.3015 8.15434 11.3015H11.8536C12.3416 11.3015 12.5855 11.0357 12.5855 10.504V7.62831C12.5855 7.13425 12.376 6.8738 11.957 6.84695V5.9931C11.957 5.3272 11.7767 4.79018 11.4161 4.38205C11.0554 3.97392 10.5861 3.76985 10.008 3.76985C9.42456 3.76985 8.95253 3.97392 8.59189 4.38205C8.23124 4.79018 8.05091 5.3272 8.05091 5.9931V6.84695C7.63193 6.8738 7.42243 7.13425 7.42243 7.62831V10.504ZM8.79873 6.83889V5.91254C8.79873 5.4883 8.90745 5.1473 9.1249 4.88953C9.34765 4.63176 9.642 4.50288 10.008 4.50288C10.3686 4.50288 10.6576 4.63176 10.8751 4.88953C11.0979 5.1473 11.2092 5.4883 11.2092 5.91254V6.83889H8.79873ZM15.72 14C16.3193 14 16.8788 13.8953 17.3986 13.6858C17.9183 13.4818 18.3718 13.1972 18.759 12.832C19.1514 12.4668 19.4564 12.0426 19.6738 11.5593C19.8913 11.0759 20 10.5577 20 10.0046C20 9.44074 19.8992 8.91178 19.6977 8.41772C19.4962 7.9183 19.2071 7.47794 18.8305 7.09666C18.454 6.71001 18.0058 6.4066 17.4861 6.18642C17.4861 5.2896 17.3402 4.46529 17.0485 3.71346C16.7568 2.95627 16.3458 2.30111 15.8154 1.74799C15.2904 1.18949 14.6752 0.759877 13.9698 0.459148C13.2697 0.153049 12.5113 0 11.6945 0C10.9732 0 10.3209 0.118143 9.73747 0.35443C9.15937 0.585347 8.64492 0.896816 8.19411 1.28884C7.74861 1.67549 7.36675 2.1051 7.04853 2.57768C6.56059 2.43268 6.07266 2.4112 5.58473 2.51323C5.1021 2.6099 4.66189 2.80859 4.26412 3.10932C3.86635 3.40468 3.54548 3.78059 3.30151 4.23705C3.05754 4.68815 2.93026 5.19563 2.91965 5.75949C2.32034 5.85616 1.80058 6.08707 1.36038 6.45224C0.925484 6.81741 0.588703 7.27656 0.35004 7.82969C0.11668 8.38281 0 8.98696 0 9.64212C0 10.2328 0.119332 10.7913 0.357995 11.3176C0.596659 11.8439 0.930788 12.3084 1.36038 12.7112C1.79528 13.1086 2.30178 13.4227 2.87987 13.6536C3.45797 13.8845 4.08645 14 4.76531 14H15.72ZM15.72 12.7031H4.76531C4.09706 12.7031 3.5004 12.5635 2.97534 12.2842C2.45028 11.9996 2.0366 11.6264 1.73429 11.1646C1.43198 10.6974 1.28083 10.1899 1.28083 9.64212C1.28083 9.1051 1.38425 8.6191 1.59109 8.18412C1.79793 7.74377 2.09759 7.39471 2.49006 7.13694C2.88783 6.87917 3.36781 6.75029 3.92999 6.75029C4.03076 6.75029 4.08115 6.69659 4.08115 6.58918C4.08115 5.96624 4.17926 5.45339 4.3755 5.05063C4.57704 4.6425 4.84222 4.33372 5.17104 4.12428C5.49987 3.90947 5.86317 3.78865 6.26094 3.7618C6.66401 3.72957 7.06974 3.78059 7.47812 3.91484C7.56828 3.9417 7.63458 3.91484 7.67701 3.83429C7.93689 3.37246 8.24715 2.94822 8.6078 2.56156C8.96844 2.17491 9.40069 1.86881 9.90453 1.64327C10.4137 1.41235 11.0103 1.29689 11.6945 1.29689C12.5643 1.29689 13.3333 1.50633 14.0016 1.9252C14.6698 2.3387 15.2002 2.88646 15.5927 3.56847C15.9851 4.25048 16.2026 4.98888 16.245 5.78366C16.2556 5.97161 16.2556 6.17031 16.245 6.37975C16.2397 6.58381 16.2291 6.77982 16.2132 6.96778C16.2026 7.06981 16.245 7.13157 16.3405 7.15305C17.0618 7.31415 17.6372 7.6471 18.0668 8.1519C18.5017 8.65669 18.7192 9.27426 18.7192 10.0046C18.7192 10.504 18.5866 10.9578 18.3214 11.3659C18.0562 11.7741 17.6956 12.099 17.2395 12.3406C16.7887 12.5823 16.2822 12.7031 15.72 12.7031Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(EcloudLockIcon);
export default ForwardRef;