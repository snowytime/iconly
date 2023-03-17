import * as React from "react";
import { forwardRef } from "react";
const MicrobeFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 17 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M8.49988 2.43155C8.76591 2.43155 8.99204 2.33844 9.17827 2.15221C9.36982 1.96066 9.46559 1.73187 9.46559 1.46584C9.46559 1.1998 9.36982 0.973668 9.17827 0.787442C8.99204 0.595895 8.76591 0.500122 8.49988 0.500122C8.23384 0.500122 8.00505 0.595895 7.8135 0.787442C7.62727 0.973668 7.53416 1.1998 7.53416 1.46584C7.53416 1.73187 7.62727 1.96066 7.8135 2.15221C8.00505 2.33844 8.23384 2.43155 8.49988 2.43155ZM11.7883 3.30947C12.0171 3.44249 12.2592 3.47707 12.5146 3.41322C12.7753 3.34406 12.9722 3.19241 13.1052 2.9583C13.2382 2.72951 13.2702 2.48742 13.201 2.23202C13.1318 1.97131 12.9828 1.77444 12.7541 1.64142C12.5199 1.50308 12.2725 1.47116 12.0118 1.54565C11.7564 1.61482 11.5622 1.7638 11.4292 1.99259C11.2962 2.2267 11.2642 2.47145 11.3334 2.72685C11.4026 2.98224 11.5542 3.17645 11.7883 3.30947ZM14.1907 5.71178C14.3237 5.94589 14.5179 6.09754 14.7733 6.16671C15.0287 6.23587 15.2734 6.20395 15.5075 6.07093C15.7363 5.93791 15.8853 5.74371 15.9545 5.48831C16.029 5.2276 15.997 4.98018 15.8587 4.74607C15.7257 4.51728 15.5315 4.3683 15.2761 4.29913C15.0207 4.22996 14.7759 4.26188 14.5418 4.3949C14.3077 4.52792 14.1561 4.72479 14.0869 4.9855C14.0177 5.2409 14.0523 5.48299 14.1907 5.71178ZM15.0686 9C15.0686 9.26603 15.1617 9.49483 15.3479 9.68637C15.5341 9.8726 15.7629 9.96571 16.0343 9.96571C16.3003 9.96571 16.5265 9.8726 16.7127 9.68637C16.9042 9.49483 17 9.26603 17 9C17 8.72864 16.9042 8.49985 16.7127 8.31362C16.5265 8.1274 16.3003 8.03428 16.0343 8.03428C15.7629 8.03428 15.5341 8.1274 15.3479 8.31362C15.1617 8.49985 15.0686 8.72864 15.0686 9ZM14.1907 12.2802C14.0523 12.5143 14.0177 12.7591 14.0869 13.0145C14.1561 13.2699 14.3077 13.4668 14.5418 13.6051C14.7706 13.7381 15.0127 13.77 15.2681 13.7009C15.5288 13.6317 15.7257 13.4801 15.8587 13.2459C15.997 13.0172 16.029 12.7751 15.9545 12.5197C15.8853 12.2643 15.7363 12.0674 15.5075 11.9291C15.2734 11.796 15.0287 11.7641 14.7733 11.8333C14.5179 11.9025 14.3237 12.0514 14.1907 12.2802ZM11.7883 14.6905C11.5542 14.8182 11.4026 15.0098 11.3334 15.2652C11.2642 15.5259 11.2962 15.7733 11.4292 16.0074C11.5622 16.2362 11.7564 16.3852 12.0118 16.4543C12.2725 16.5288 12.5199 16.4969 12.7541 16.3586C12.9828 16.2256 13.1292 16.0313 13.193 15.776C13.2622 15.5206 13.2329 15.2731 13.1052 15.0337C12.9722 14.8049 12.7753 14.6559 12.5146 14.5868C12.2592 14.5176 12.0171 14.5522 11.7883 14.6905ZM8.49988 15.5684C8.23384 15.5684 8.00505 15.6616 7.8135 15.8478C7.62727 16.034 7.53416 16.2628 7.53416 16.5342C7.53416 16.8002 7.62727 17.0263 7.8135 17.2126C8.00505 17.4041 8.23384 17.4999 8.49988 17.4999C8.76591 17.4999 8.99204 17.4041 9.17827 17.2126C9.36982 17.0263 9.46559 16.8002 9.46559 16.5342C9.46559 16.2628 9.36982 16.034 9.17827 15.8478C8.99204 15.6616 8.76591 15.5684 8.49988 15.5684ZM5.21964 14.6905C4.98553 14.5522 4.73812 14.5176 4.4774 14.5868C4.222 14.6559 4.0278 14.8049 3.89478 15.0337C3.76176 15.2678 3.72984 15.5126 3.79901 15.768C3.86818 16.0287 4.01982 16.2256 4.25393 16.3586C4.48272 16.4969 4.72481 16.5288 4.98021 16.4543C5.24092 16.3852 5.43779 16.2362 5.57081 16.0074C5.70383 15.7733 5.73575 15.5285 5.66658 15.2731C5.59741 15.0177 5.44843 14.8235 5.21964 14.6905ZM2.80935 12.2802C2.67633 12.0514 2.48212 11.9025 2.22673 11.8333C1.97133 11.7641 1.72658 11.796 1.49247 11.9291C1.26367 12.0568 1.11203 12.251 1.03754 12.5117C0.968374 12.7724 1.00296 13.0198 1.1413 13.2539C1.27432 13.4827 1.46852 13.6317 1.72392 13.7009C1.97931 13.77 2.22673 13.7381 2.46616 13.6051C2.69495 13.4668 2.84393 13.2699 2.9131 13.0145C2.98227 12.7591 2.94769 12.5143 2.80935 12.2802ZM1.93143 9C1.93143 8.73396 1.83831 8.50783 1.65209 8.3216C1.46586 8.13006 1.23707 8.03428 0.965714 8.03428C0.699677 8.03428 0.470885 8.1274 0.279339 8.31362C0.0931129 8.49985 0 8.72864 0 9C0 9.26603 0.0931129 9.49216 0.279339 9.67839C0.470885 9.86462 0.699677 9.96039 0.965714 9.96571C1.23707 9.96571 1.46586 9.8726 1.65209 9.68637C1.83831 9.49483 1.93143 9.26603 1.93143 9ZM2.80935 5.71976C2.94769 5.48565 2.98227 5.2409 2.9131 4.9855C2.84393 4.72479 2.69495 4.52792 2.46616 4.3949C2.23205 4.26188 1.98463 4.22996 1.72392 4.29913C1.46852 4.3683 1.27432 4.51728 1.1413 4.74607C1.00296 4.98018 0.968374 5.22494 1.03754 5.48033C1.11203 5.73573 1.26367 5.93259 1.49247 6.07093C1.72658 6.20395 1.97133 6.23587 2.22673 6.16671C2.48212 6.09754 2.67633 5.94855 2.80935 5.71976ZM5.21964 3.30947C5.44843 3.17645 5.59741 2.98224 5.66658 2.72685C5.73575 2.47145 5.70383 2.2267 5.57081 1.99259C5.43779 1.7638 5.24092 1.61482 4.98021 1.54565C4.72481 1.47116 4.48272 1.50308 4.25393 1.64142C4.01982 1.77444 3.86818 1.96864 3.79901 2.22404C3.73516 2.47944 3.76708 2.72419 3.89478 2.9583C4.0278 3.19241 4.222 3.34406 4.4774 3.41322C4.73812 3.48239 4.98553 3.44781 5.21964 3.30947ZM8.48391 14.052C9.18625 14.052 9.84336 13.9217 10.4552 13.661C11.0671 13.4002 11.6048 13.0384 12.0677 12.5755C12.5306 12.1126 12.8924 11.5752 13.1531 10.9633C13.4138 10.3515 13.5415 9.69435 13.5362 8.99202C13.5362 8.28968 13.4058 7.63523 13.1451 7.02866C12.8844 6.41678 12.5226 5.87939 12.0597 5.41648C11.5968 4.95358 11.0591 4.59177 10.4473 4.33105C9.83538 4.07034 9.17827 3.93998 8.47593 3.93998C7.7736 3.93998 7.11648 4.07034 6.5046 4.33105C5.89804 4.58645 5.3633 4.9456 4.9004 5.4085C4.43749 5.8714 4.07568 6.4088 3.81497 7.02068C3.55957 7.63257 3.43187 8.28968 3.43187 8.99202C3.43187 9.69967 3.56223 10.3594 3.82295 10.9713C4.08366 11.5832 4.44281 12.1206 4.9004 12.5835C5.3633 13.0411 5.9007 13.4002 6.51258 13.661C7.12447 13.9217 7.78158 14.052 8.48391 14.052Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(MicrobeFillIcon);
export default ForwardRef;