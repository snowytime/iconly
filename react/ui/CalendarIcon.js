import * as React from "react";
import { forwardRef } from "react";
const CalendarIcon = ({
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
  d: "M2.52082 15.5H13.4872C14.3275 15.5 14.9563 15.2882 15.3738 14.8645C15.7913 14.4462 16 13.8161 16 12.9742V3.0258C16 2.18387 15.7913 1.55378 15.3738 1.13552C14.9563 0.711841 14.3275 0.5 13.4872 0.5H2.52082C1.68055 0.5 1.049 0.711841 0.626192 1.13552C0.208731 1.55378 0 2.18387 0 3.0258V12.9742C0 13.8161 0.208731 14.4462 0.626192 14.8645C1.049 15.2882 1.68055 15.5 2.52082 15.5ZM2.4004 14.1882C2.04716 14.1882 1.77421 14.0904 1.58154 13.8949C1.38886 13.7048 1.29252 13.4223 1.29252 13.0475V5.3642C1.29252 4.98941 1.38886 4.70695 1.58154 4.51684C1.77421 4.32129 2.04716 4.22352 2.4004 4.22352H13.5916C13.9502 4.22352 14.2258 4.32129 14.4185 4.51684C14.6111 4.70695 14.7075 4.98941 14.7075 5.3642V13.0475C14.7075 13.4223 14.6111 13.7048 14.4185 13.8949C14.2258 14.0904 13.9502 14.1882 13.5916 14.1882H2.4004ZM6.43853 7.15671H6.91219C7.05135 7.15671 7.14768 7.12955 7.2012 7.07523C7.26008 7.02091 7.28951 6.92314 7.28951 6.78191V6.3012C7.28951 6.15997 7.26008 6.06491 7.2012 6.01602C7.14768 5.96171 7.05135 5.93455 6.91219 5.93455H6.43853C6.29938 5.93455 6.20037 5.96171 6.1415 6.01602C6.08797 6.06491 6.06121 6.15997 6.06121 6.3012V6.78191C6.06121 6.92314 6.08797 7.02091 6.1415 7.07523C6.20037 7.12955 6.29938 7.15671 6.43853 7.15671ZM9.10386 7.15671H9.57752C9.72203 7.15671 9.82104 7.12955 9.87456 7.07523C9.92808 7.02091 9.95484 6.92314 9.95484 6.78191V6.3012C9.95484 6.15997 9.92808 6.06491 9.87456 6.01602C9.82104 5.96171 9.72203 5.93455 9.57752 5.93455H9.10386C8.96471 5.93455 8.86837 5.96171 8.81485 6.01602C8.76133 6.06491 8.73457 6.15997 8.73457 6.3012V6.78191C8.73457 6.92314 8.76133 7.02091 8.81485 7.07523C8.86837 7.12955 8.96471 7.15671 9.10386 7.15671ZM11.7772 7.15671H12.2429C12.3874 7.15671 12.4864 7.12955 12.5399 7.07523C12.5934 7.02091 12.6202 6.92314 12.6202 6.78191V6.3012C12.6202 6.15997 12.5934 6.06491 12.5399 6.01602C12.4864 5.96171 12.3874 5.93455 12.2429 5.93455H11.7772C11.6327 5.93455 11.5337 5.96171 11.4802 6.01602C11.4267 6.06491 11.3999 6.15997 11.3999 6.3012V6.78191C11.3999 6.92314 11.4267 7.02091 11.4802 7.07523C11.5337 7.12955 11.6327 7.15671 11.7772 7.15671ZM3.77321 9.82102H4.24686C4.38602 9.82102 4.48236 9.79386 4.53588 9.73954C4.5894 9.68523 4.61616 9.58745 4.61616 9.44622V8.97365C4.61616 8.827 4.5894 8.72922 4.53588 8.68034C4.48236 8.62602 4.38602 8.59886 4.24686 8.59886H3.77321C3.6287 8.59886 3.52969 8.62602 3.47617 8.68034C3.42265 8.72922 3.39589 8.827 3.39589 8.97365V9.44622C3.39589 9.58745 3.42265 9.68523 3.47617 9.73954C3.52969 9.79386 3.6287 9.82102 3.77321 9.82102ZM6.43853 9.82102H6.91219C7.05135 9.82102 7.14768 9.79386 7.2012 9.73954C7.26008 9.68523 7.28951 9.58745 7.28951 9.44622V8.97365C7.28951 8.827 7.26008 8.72922 7.2012 8.68034C7.14768 8.62602 7.05135 8.59886 6.91219 8.59886H6.43853C6.29938 8.59886 6.20037 8.62602 6.1415 8.68034C6.08797 8.72922 6.06121 8.827 6.06121 8.97365V9.44622C6.06121 9.58745 6.08797 9.68523 6.1415 9.73954C6.20037 9.79386 6.29938 9.82102 6.43853 9.82102ZM9.10386 9.82102H9.57752C9.72203 9.82102 9.82104 9.79386 9.87456 9.73954C9.92808 9.68523 9.95484 9.58745 9.95484 9.44622V8.97365C9.95484 8.827 9.92808 8.72922 9.87456 8.68034C9.82104 8.62602 9.72203 8.59886 9.57752 8.59886H9.10386C8.96471 8.59886 8.86837 8.62602 8.81485 8.68034C8.76133 8.72922 8.73457 8.827 8.73457 8.97365V9.44622C8.73457 9.58745 8.76133 9.68523 8.81485 9.73954C8.86837 9.79386 8.96471 9.82102 9.10386 9.82102ZM11.7772 9.82102H12.2429C12.3874 9.82102 12.4864 9.79386 12.5399 9.73954C12.5934 9.68523 12.6202 9.58745 12.6202 9.44622V8.97365C12.6202 8.827 12.5934 8.72922 12.5399 8.68034C12.4864 8.62602 12.3874 8.59886 12.2429 8.59886H11.7772C11.6327 8.59886 11.5337 8.62602 11.4802 8.68034C11.4267 8.72922 11.3999 8.827 11.3999 8.97365V9.44622C11.3999 9.58745 11.4267 9.68523 11.4802 9.73954C11.5337 9.79386 11.6327 9.82102 11.7772 9.82102ZM3.77321 12.4853H4.24686C4.38602 12.4853 4.48236 12.4609 4.53588 12.412C4.5894 12.3577 4.61616 12.2572 4.61616 12.1105V11.638C4.61616 11.4913 4.5894 11.3935 4.53588 11.3446C4.48236 11.2903 4.38602 11.2632 4.24686 11.2632H3.77321C3.6287 11.2632 3.52969 11.2903 3.47617 11.3446C3.42265 11.3935 3.39589 11.4913 3.39589 11.638V12.1105C3.39589 12.2572 3.42265 12.3577 3.47617 12.412C3.52969 12.4609 3.6287 12.4853 3.77321 12.4853ZM6.43853 12.4853H6.91219C7.05135 12.4853 7.14768 12.4609 7.2012 12.412C7.26008 12.3577 7.28951 12.2572 7.28951 12.1105V11.638C7.28951 11.4913 7.26008 11.3935 7.2012 11.3446C7.14768 11.2903 7.05135 11.2632 6.91219 11.2632H6.43853C6.29938 11.2632 6.20037 11.2903 6.1415 11.3446C6.08797 11.3935 6.06121 11.4913 6.06121 11.638V12.1105C6.06121 12.2572 6.08797 12.3577 6.1415 12.412C6.20037 12.4609 6.29938 12.4853 6.43853 12.4853ZM9.10386 12.4853H9.57752C9.72203 12.4853 9.82104 12.4609 9.87456 12.412C9.92808 12.3577 9.95484 12.2572 9.95484 12.1105V11.638C9.95484 11.4913 9.92808 11.3935 9.87456 11.3446C9.82104 11.2903 9.72203 11.2632 9.57752 11.2632H9.10386C8.96471 11.2632 8.86837 11.2903 8.81485 11.3446C8.76133 11.3935 8.73457 11.4913 8.73457 11.638V12.1105C8.73457 12.2572 8.76133 12.3577 8.81485 12.412C8.86837 12.4609 8.96471 12.4853 9.10386 12.4853Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CalendarIcon);
export default ForwardRef;