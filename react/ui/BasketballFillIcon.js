import * as React from "react";
import { forwardRef } from "react";
const BasketballFillIcon = ({
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
  d: "M0.00784315 7.90191C0.352942 7.42586 0.737256 6.97335 1.16079 6.54438C1.58954 6.11018 2.04183 5.7126 2.51765 5.35164C2.51242 5.33595 2.50719 5.32026 2.50196 5.30456C2.50196 5.28364 2.50196 5.26271 2.50196 5.24179C2.49673 5.09531 2.46798 4.92791 2.41569 4.73958C2.36863 4.54602 2.29804 4.35769 2.20392 4.1746C2.11504 3.98627 2.00523 3.82671 1.87451 3.69593C1.74902 3.56515 1.60262 3.48668 1.4353 3.46052C1.00654 4.07258 0.666667 4.73958 0.415687 5.4615C0.164706 6.18342 0.0261438 6.93935 0 7.72928C0 7.76067 0 7.79206 0 7.82344C0 7.8496 0.00261438 7.87576 0.00784315 7.90191ZM3.34118 4.77097C3.46667 4.68727 3.59216 4.6088 3.71765 4.53556C3.84837 4.45709 3.97907 4.38123 4.10979 4.30799C4.03136 3.60177 4.00262 2.96354 4.02353 2.39333C4.04968 1.82312 4.12548 1.33922 4.25097 0.941638C3.38822 1.40723 2.62484 2.01668 1.96079 2.76999C2.22222 2.84322 2.44445 2.9897 2.62745 3.20942C2.81569 3.4239 2.96732 3.67239 3.08236 3.95488C3.20262 4.23737 3.28889 4.5094 3.34118 4.77097ZM4.94117 3.8921C5.13463 3.80317 5.33071 3.71947 5.5294 3.641C5.7281 3.56253 5.9294 3.48929 6.13333 3.42129C6.12287 3.33758 6.11502 3.2565 6.1098 3.17803C6.10457 3.09956 6.10195 3.01847 6.10195 2.93477C6.10195 2.30701 6.2562 1.74203 6.5647 1.23982C6.87842 0.732385 7.29934 0.319111 7.82744 0C7.8013 0 7.77516 0 7.74901 0C7.7281 0 7.70457 0 7.67842 0C7.23921 0.015694 6.80784 0.0680072 6.38431 0.15694C5.96078 0.240641 5.55293 0.360961 5.16077 0.517901C5.0562 0.8684 4.97515 1.32352 4.91764 1.88328C4.86012 2.4378 4.86796 3.10741 4.94117 3.8921ZM7.0196 3.15449C7.5111 3.02894 8.01306 2.93477 8.52548 2.872C9.0379 2.80399 9.56078 2.76999 10.0941 2.76999C10.8889 2.76999 11.6758 2.84846 12.4549 3.00539C13.234 3.1571 13.9791 3.37682 14.6902 3.66454C14.1255 2.79091 13.4065 2.04806 12.5333 1.436C11.6654 0.818702 10.7085 0.397581 9.66274 0.172634C9.10849 0.329573 8.63006 0.536211 8.22744 0.792545C7.82483 1.04365 7.51633 1.34707 7.30195 1.7028C7.0928 2.05853 6.99345 2.46918 7.00391 2.93477C7.00391 2.97139 7.00653 3.00801 7.01176 3.04463C7.01698 3.08125 7.0196 3.11787 7.0196 3.15449ZM2.50196 6.52084C2.05229 6.91842 1.62092 7.35524 1.20784 7.83129C0.800001 8.30211 0.433987 8.79908 0.109804 9.32222C0.261438 10.2168 0.559478 11.0564 1.00392 11.8411C1.44837 12.6258 1.99739 13.3163 2.65098 13.9127C2.41569 13.353 2.26667 12.767 2.20392 12.155C2.14641 11.5429 2.13856 10.9178 2.18039 10.2795C2.22222 9.64133 2.27713 9.00572 2.3451 8.37273C2.4183 7.73451 2.47059 7.11721 2.50196 6.52084ZM3.42745 5.79107C3.43268 6.50777 3.39347 7.23753 3.30981 7.98038C3.22615 8.72323 3.15556 9.45562 3.09804 10.1775C3.04576 10.8995 3.06144 11.59 3.1451 12.2491C3.22876 12.9031 3.4353 13.5047 3.76471 14.0539C4.09412 14.6085 4.60653 15.0845 5.30195 15.4821C5.72025 15.6495 6.15424 15.7777 6.60391 15.8666C7.05882 15.9555 7.52417 16 7.99999 16C8.45489 16 8.88365 15.966 9.28627 15.898C8.28757 14.6791 7.44574 13.4445 6.76077 12.1942C6.08104 10.9439 5.53725 9.73026 5.1294 8.55321C4.72156 7.37093 4.42875 6.27236 4.25097 5.25748C3.96339 5.42488 3.68889 5.60275 3.42745 5.79107ZM6.37646 4.27661C6.15163 4.35508 5.9294 4.44139 5.70979 4.53556C5.49019 4.62449 5.27319 4.72127 5.05881 4.8259C5.22091 5.80938 5.50326 6.90273 5.90587 8.10593C6.31372 9.30391 6.87319 10.549 7.5843 11.8411C8.30065 13.128 9.19476 14.4018 10.2667 15.6626C11.1242 15.4062 11.9137 15.0165 12.6353 14.4934C13.3569 13.9702 13.9739 13.3503 14.4863 12.6336C14.4654 11.9902 14.2876 11.4147 13.9529 10.9073C13.6183 10.3946 13.1843 9.92382 12.651 9.49485C12.1176 9.06588 11.5399 8.65522 10.9176 8.26287C10.3006 7.87052 9.68888 7.47556 9.08235 7.07798C8.47581 6.67517 7.93202 6.24881 7.45097 5.79892C6.97515 5.3438 6.61699 4.83636 6.37646 4.27661ZM15.1922 11.4644C15.4536 10.9361 15.6523 10.3816 15.7882 9.80088C15.9294 9.21498 16 8.61337 16 7.99608C16 7.46248 15.9477 6.94197 15.8431 6.43453C15.7386 5.92709 15.5869 5.44058 15.3882 4.97499C14.5516 4.54079 13.6967 4.21645 12.8235 4.00196C11.9503 3.78225 11.0405 3.67239 10.0941 3.67239C9.12679 3.67239 8.183 3.78748 7.26274 4.01766C7.47189 4.44662 7.783 4.8442 8.19607 5.2104C8.60914 5.57659 9.07973 5.93232 9.60784 6.27759C10.1412 6.61762 10.6902 6.96551 11.2549 7.32124C11.8248 7.67697 12.3739 8.05624 12.902 8.45905C13.4301 8.86186 13.8954 9.30914 14.298 9.80088C14.7007 10.2926 14.9987 10.8471 15.1922 11.4644Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(BasketballFillIcon);
export default ForwardRef;