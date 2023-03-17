import * as React from "react";
import { forwardRef } from "react";
const HumidifierOnFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 13 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2.58871 2.57004C2.74462 2.45504 2.83871 2.29896 2.87097 2.10182C2.90323 1.90467 2.86559 1.72395 2.75806 1.55966C2.65054 1.40633 2.5 1.31049 2.30645 1.27216C2.11828 1.23382 1.94086 1.27216 1.77419 1.38716C1.61828 1.49669 1.52151 1.65276 1.48387 1.85538C1.44624 2.05801 1.48118 2.23599 1.58871 2.38932C1.70161 2.55361 1.85753 2.65218 2.05645 2.68504C2.25538 2.7179 2.4328 2.67956 2.58871 2.57004ZM4.05645 4.72222C4.26613 4.57984 4.39247 4.38269 4.43548 4.13078C4.47849 3.8734 4.43011 3.63792 4.29032 3.42434C4.14516 3.21624 3.94892 3.09302 3.70161 3.05469C3.4543 3.01088 3.22581 3.06017 3.01613 3.20255C2.81183 3.34493 2.68548 3.54482 2.6371 3.8022C2.58871 4.05411 2.63979 4.28686 2.79032 4.50043C2.94086 4.70853 3.1371 4.83722 3.37903 4.88651C3.62634 4.9358 3.85215 4.88103 4.05645 4.72222ZM6.50806 1.94574C6.70699 1.94574 6.87366 1.87455 7.00806 1.73217C7.14785 1.58431 7.21774 1.41728 7.21774 1.23109C7.21774 1.02846 7.14785 0.855959 7.00806 0.713575C6.86828 0.571192 6.70161 0.5 6.50806 0.5C6.31452 0.5 6.15054 0.571192 6.01613 0.713575C5.88172 0.855959 5.81452 1.02846 5.81452 1.23109C5.81452 1.41728 5.88172 1.58431 6.01613 1.73217C6.15054 1.87455 6.31452 1.94574 6.50806 1.94574ZM6.50806 4.58258C6.76075 4.58258 6.97849 4.49222 7.16129 4.3115C7.34409 4.12531 7.43548 3.90352 7.43548 3.64613C7.43548 3.39422 7.34409 3.17517 7.16129 2.98898C6.97849 2.80278 6.76075 2.70968 6.50806 2.70968C6.26075 2.70968 6.04839 2.80278 5.87097 2.98898C5.69355 3.17517 5.60484 3.39422 5.60484 3.64613C5.60484 3.90352 5.69355 4.12531 5.87097 4.3115C6.04839 4.49222 6.26075 4.58258 6.50806 4.58258ZM10.4274 2.57004C10.5887 2.67956 10.7661 2.7179 10.9597 2.68504C11.1586 2.65218 11.3145 2.55361 11.4274 2.38932C11.5349 2.23599 11.5699 2.05801 11.5323 1.85538C11.5 1.65276 11.4032 1.49669 11.2419 1.38716C11.0753 1.27216 10.8952 1.23382 10.7016 1.27216C10.5134 1.31049 10.3656 1.40633 10.2581 1.55966C10.1505 1.72395 10.1129 1.90467 10.1452 2.10182C10.1774 2.29896 10.2715 2.45504 10.4274 2.57004ZM8.95968 4.72222C9.16398 4.88103 9.38978 4.9358 9.6371 4.88651C9.88441 4.83722 10.0806 4.70853 10.2258 4.50043C10.3763 4.28686 10.4274 4.05411 10.379 3.8022C10.336 3.54482 10.2097 3.34493 10 3.20255C9.78495 3.06017 9.55376 3.01088 9.30645 3.05469C9.06452 3.09302 8.87097 3.21624 8.72581 3.42434C8.58064 3.63792 8.52957 3.8734 8.57258 4.13078C8.62097 4.38269 8.75 4.57984 8.95968 4.72222ZM2.43548 9.01016H10.5645C10.3011 8.61039 10.0296 8.21062 9.75 7.81085C9.47043 7.41108 9.18011 7.00857 8.87903 6.60333C8.66398 6.31309 8.45699 6.08856 8.25806 5.92975C8.05914 5.77093 7.76344 5.69153 7.37097 5.69153H5.62903C5.23656 5.69153 4.94086 5.77093 4.74194 5.92975C4.54839 6.08856 4.3414 6.31309 4.12097 6.60333C3.81989 7.00857 3.52957 7.41108 3.25 7.81085C2.97043 8.21062 2.69892 8.61039 2.43548 9.01016ZM0.0564516 14.136H4.75C4.87366 13.7691 5.09409 13.4679 5.41129 13.2324C5.72849 12.9969 6.09409 12.8792 6.50806 12.8792C6.91667 12.8792 7.27688 12.9969 7.58871 13.2324C7.90591 13.4679 8.12903 13.7691 8.25806 14.136H12.9435C12.8521 13.5719 12.6694 12.9668 12.3952 12.3206C12.1263 11.6744 11.7903 11.0035 11.3871 10.308H1.62097C1.21237 11.0035 0.870968 11.6744 0.596774 12.3206C0.327957 12.9668 0.147849 13.5719 0.0564516 14.136ZM6.50806 15.5735C6.73387 15.5735 6.91935 15.4996 7.06452 15.3517C7.20968 15.1984 7.28226 15.0067 7.28226 14.7767C7.28226 14.5522 7.20968 14.366 7.06452 14.2181C6.91935 14.0648 6.73387 13.9881 6.50806 13.9881C6.27688 13.9881 6.08871 14.0648 5.94355 14.2181C5.79839 14.366 5.72581 14.5522 5.72581 14.7767C5.72581 15.0067 5.79839 15.1984 5.94355 15.3517C6.08871 15.4996 6.27688 15.5735 6.50806 15.5735ZM4.75 19.5H8.25C9.72849 19.5 10.8656 19.1413 11.6613 18.4239C12.457 17.712 12.9032 16.7153 13 15.4339H8.25C8.12097 15.8008 7.89785 16.102 7.58065 16.3374C7.26882 16.5674 6.91129 16.6824 6.50806 16.6824C6.09409 16.6824 5.72849 16.5674 5.41129 16.3374C5.09946 16.102 4.88172 15.8008 4.75806 15.4339H0C0.0967742 16.7153 0.543011 17.712 1.33871 18.4239C2.13441 19.1413 3.27151 19.5 4.75 19.5Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(HumidifierOnFillIcon);
export default ForwardRef;