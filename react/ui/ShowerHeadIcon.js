import * as React from "react";
import { forwardRef } from "react";
const ShowerHeadIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M11.1316 0.876183L8.12073 9.13719C8.06832 9.28336 8.07356 9.42692 8.13645 9.56786C8.20458 9.70881 8.31202 9.80538 8.45877 9.85758C8.60551 9.91501 8.74963 9.90979 8.89114 9.84192C9.03264 9.77406 9.1296 9.66966 9.182 9.52871L12.2007 1.2677C12.2532 1.11631 12.2453 0.970147 12.1772 0.829201C12.1143 0.688254 12.0095 0.59168 11.8627 0.539478C11.716 0.482055 11.5692 0.487276 11.4225 0.555139C11.281 0.623002 11.184 0.730016 11.1316 0.876183ZM1.57226 14.1643C1.97057 14.3052 2.34529 14.2948 2.69643 14.133C3.05281 13.9659 3.30175 13.6892 3.44325 13.3029L5.96673 6.44356L5.55008 6.70196C5.78068 7.23964 6.12658 7.72251 6.58777 8.15057C7.05421 8.57341 7.61236 8.88401 8.26223 9.08238L8.60027 8.13491C7.81414 7.85302 7.20096 7.44062 6.76072 6.89772C6.32049 6.35481 6.08989 5.72055 6.06893 4.99494L5.76234 4.88532C5.69421 4.85922 5.62607 4.86183 5.55794 4.89315C5.49505 4.92447 5.45051 4.97406 5.4243 5.04192L2.55492 12.8801C2.49203 13.0367 2.39508 13.1411 2.26406 13.1933C2.13828 13.2403 2.01249 13.2403 1.88671 13.1933C1.77141 13.1463 1.68494 13.0706 1.62729 12.9662C1.56964 12.8566 1.56702 12.7287 1.61943 12.5825L5.02337 3.2801C5.11771 3.00343 5.2959 2.80506 5.55794 2.68499C5.81999 2.55971 6.08989 2.54666 6.36766 2.64584L6.82361 2.81028C7.30577 2.24649 7.89799 1.89152 8.60027 1.74535C9.30779 1.59918 10.0625 1.66966 10.8643 1.95677L11.2024 1.01713C10.3271 0.698695 9.48598 0.602121 8.67888 0.727406C7.87179 0.847471 7.16689 1.17113 6.56419 1.69837L6.42269 1.64356C5.94053 1.47129 5.48457 1.50522 5.05482 1.74535C4.63031 1.98548 4.31324 2.38744 4.1036 2.95122L0.691795 12.2928C0.550291 12.6843 0.563394 13.0576 0.731101 13.4126C0.898809 13.7675 1.1792 14.0181 1.57226 14.1643ZM2.16972 13.8041L1.35214 13.5065L0 17.2103L0.817576 17.5L2.16972 13.8041ZM11.6269 8.91794C11.7527 8.80832 11.8182 8.6752 11.8234 8.5186C11.8339 8.36199 11.7867 8.22104 11.6819 8.09576C11.5666 7.97047 11.4303 7.90522 11.2731 7.9C11.1159 7.89478 10.9744 7.94698 10.8486 8.05661C10.7281 8.17667 10.6652 8.31501 10.6599 8.47161C10.6547 8.62822 10.7097 8.76395 10.825 8.87879C10.9351 8.99364 11.0661 9.05628 11.2181 9.06672C11.3753 9.07716 11.5116 9.02757 11.6269 8.91794ZM13.0891 10.4997C13.2096 10.39 13.2725 10.2543 13.2777 10.0925C13.283 9.93067 13.228 9.78711 13.1127 9.66183C13.0131 9.5522 12.8821 9.49478 12.7196 9.48956C12.5624 9.48434 12.4235 9.53654 12.3029 9.64617C12.1929 9.75579 12.1326 9.88891 12.1221 10.0455C12.1117 10.2021 12.1588 10.3352 12.2636 10.4449C12.3842 10.5649 12.5231 10.6328 12.6803 10.6484C12.8375 10.6589 12.9738 10.6093 13.0891 10.4997ZM14.5356 12.0657C14.6456 11.9561 14.7059 11.8256 14.7164 11.6742C14.7268 11.5228 14.6797 11.3845 14.5749 11.2592C14.4648 11.1392 14.3285 11.0791 14.1661 11.0791C14.0088 11.0739 13.8726 11.1287 13.7573 11.2436C13.6472 11.3532 13.5843 11.4863 13.5686 11.6429C13.5581 11.7943 13.6053 11.93 13.7101 12.0501C13.8202 12.1701 13.9564 12.2302 14.1189 12.2302C14.2814 12.2302 14.4203 12.1754 14.5356 12.0657ZM12.751 6.04421C12.8087 5.89804 12.8008 5.75449 12.7275 5.61354C12.6593 5.46737 12.5493 5.36819 12.3973 5.31599C12.2453 5.26378 12.0959 5.269 11.9492 5.33165C11.8077 5.39429 11.7081 5.50131 11.6505 5.65269C11.598 5.8093 11.6033 5.9633 11.6662 6.11468C11.7343 6.26607 11.8444 6.36786 11.9964 6.42007C12.1483 6.47749 12.2977 6.46966 12.4444 6.39657C12.5912 6.32349 12.6934 6.20604 12.751 6.04421ZM14.7635 6.80375C14.8212 6.65237 14.8133 6.5062 14.7399 6.36525C14.6718 6.21909 14.5618 6.1199 14.4098 6.0677C14.2578 6.01028 14.1137 6.01289 13.9774 6.07553C13.8411 6.13817 13.7442 6.2478 13.6865 6.4044C13.6341 6.55057 13.6394 6.69674 13.7023 6.8429C13.7651 6.98385 13.8726 7.08042 14.0246 7.13263C14.1766 7.19005 14.3233 7.18744 14.4648 7.1248C14.6063 7.05693 14.7059 6.94992 14.7635 6.80375ZM16.7917 7.51631C16.8494 7.37015 16.8415 7.22659 16.7682 7.08564C16.7 6.93948 16.5926 6.83768 16.4459 6.78026C16.2886 6.72806 16.1366 6.73589 15.9899 6.80375C15.8484 6.86639 15.7488 6.9708 15.6912 7.11697C15.6388 7.26835 15.644 7.42235 15.7069 7.57896C15.775 7.73034 15.8851 7.83214 16.0371 7.88434C16.189 7.94176 16.3384 7.93393 16.4852 7.86085C16.6371 7.78777 16.7393 7.67292 16.7917 7.51631ZM13.7416 3.1783C13.7101 3.0217 13.6315 2.89902 13.5057 2.81028C13.3852 2.71631 13.2437 2.67977 13.0812 2.70065C12.9187 2.72675 12.7877 2.79723 12.6881 2.91207C12.5886 3.02692 12.5519 3.16525 12.5781 3.32708C12.5991 3.48369 12.6724 3.61158 12.7982 3.71077C12.924 3.80473 13.0681 3.84388 13.2306 3.82822C13.393 3.80734 13.5214 3.73426 13.6158 3.60897C13.7154 3.47847 13.7573 3.33491 13.7416 3.1783ZM15.8641 2.89641C15.8484 2.73458 15.775 2.60669 15.644 2.51272C15.513 2.41876 15.3689 2.37961 15.2116 2.39527C15.0544 2.42659 14.926 2.50489 14.8264 2.63018C14.7268 2.75546 14.6875 2.89902 14.7085 3.06085C14.7295 3.20701 14.8055 3.32969 14.9365 3.42887C15.0675 3.52284 15.2116 3.56199 15.3689 3.54633C15.5261 3.52023 15.6545 3.44453 15.7541 3.31925C15.8536 3.19396 15.8903 3.05302 15.8641 2.89641ZM17.9945 2.62235C17.9631 2.46052 17.8871 2.33002 17.7666 2.23083C17.646 2.13165 17.5071 2.0925 17.3499 2.11338C17.1874 2.12904 17.059 2.20212 16.9647 2.33263C16.8704 2.46313 16.8337 2.60408 16.8546 2.75546C16.8756 2.91729 16.9464 3.0478 17.0669 3.14698C17.1927 3.24095 17.3342 3.27749 17.4914 3.25661C17.6539 3.24095 17.7823 3.17047 17.8766 3.04519C17.9762 2.91468 18.0155 2.77374 17.9945 2.62235Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ShowerHeadIcon);
export default ForwardRef;