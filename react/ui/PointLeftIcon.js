import * as React from "react";
import { forwardRef } from "react";
const PointLeftIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 17 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M17 7.87551C17 6.47065 16.6176 5.28056 15.8528 4.30525C15.0931 3.32993 13.9537 2.57697 12.4343 2.04636L8.4307 0.644023C8.29211 0.593489 8.14583 0.558115 7.99184 0.537901C7.84299 0.512634 7.70953 0.5 7.59148 0.5C7.14492 0.5 6.80102 0.64655 6.55977 0.93965C6.31853 1.23275 6.19791 1.57133 6.19791 1.95539C6.19791 2.23839 6.28003 2.49359 6.44428 2.72099C6.60854 2.94334 6.84721 3.12021 7.16032 3.2516L8.4615 3.78222C8.49229 3.79232 8.50769 3.81506 8.50769 3.85044C8.50769 3.89086 8.48716 3.91108 8.4461 3.91108H1.70154C1.18826 3.91108 0.775061 4.06268 0.461957 4.36589C0.153986 4.6691 0 5.05568 0 5.52566C0 6.00068 0.153986 6.3898 0.461957 6.693C0.775061 6.99116 1.18826 7.14023 1.70154 7.14023H4.38858C4.33211 7.32721 4.30388 7.51419 4.30388 7.70117C4.30388 8.04985 4.39628 8.35053 4.58106 8.60321C4.77097 8.85083 5.02762 9.02517 5.35099 9.12624C5.31506 9.23741 5.28683 9.35112 5.26629 9.46735C5.24576 9.58358 5.2355 9.70233 5.2355 9.82361C5.2355 10.1521 5.32019 10.4326 5.48957 10.665C5.65896 10.8975 5.8925 11.0592 6.19021 11.1501C6.19534 11.8879 6.45968 12.464 6.98323 12.8784C7.50679 13.2928 8.23308 13.5 9.16213 13.5H10.9253C12.1879 13.5 13.271 13.265 14.1744 12.795C15.0829 12.3251 15.7809 11.6681 16.2686 10.8242C16.7562 9.98027 17 8.99738 17 7.87551ZM15.8913 7.92099C15.8913 8.85588 15.6911 9.6619 15.2908 10.3391C14.8955 11.0162 14.3181 11.5367 13.5584 11.9006C12.8039 12.2644 11.8825 12.4464 10.7944 12.4464H9.32382C8.68221 12.4464 8.18432 12.3503 7.83016 12.1583C7.47599 11.9612 7.2989 11.6858 7.2989 11.3321H8.22282C8.37167 11.3321 8.49229 11.2841 8.58468 11.188C8.67708 11.087 8.72327 10.9707 8.72327 10.8394C8.72327 10.7029 8.67708 10.5842 8.58468 10.4831C8.49229 10.377 8.37167 10.3239 8.22282 10.3239H6.96014C6.75482 10.3239 6.59057 10.2683 6.46738 10.1571C6.34419 10.0409 6.2826 9.88426 6.2826 9.68717C6.2826 9.52041 6.31853 9.36122 6.39039 9.20962H7.91485C8.0637 9.20962 8.18432 9.16161 8.27671 9.0656C8.36911 8.96453 8.4153 8.84577 8.4153 8.70933C8.4153 8.57794 8.36911 8.46171 8.27671 8.36064C8.18432 8.25957 8.0637 8.20904 7.91485 8.20904H6.03622C5.82578 8.20904 5.65639 8.15092 5.52807 8.03469C5.40488 7.91846 5.34329 7.76181 5.34329 7.56472C5.34329 7.48892 5.35355 7.40807 5.37408 7.32216C5.39462 7.23625 5.42028 7.16045 5.45108 7.09475H7.60688C7.74546 7.09475 7.86352 7.04674 7.96104 6.95073C8.05857 6.84966 8.10733 6.7309 8.10733 6.59446C8.10733 6.45296 8.05857 6.33168 7.96104 6.23061C7.86352 6.12954 7.74546 6.07901 7.60688 6.07901H1.62455C1.45516 6.07901 1.31401 6.02847 1.20109 5.92741C1.0933 5.82634 1.0394 5.69242 1.0394 5.52566C1.0394 5.36395 1.0933 5.23256 1.20109 5.13149C1.31401 5.02536 1.45516 4.9723 1.62455 4.9723H10.0091C10.1887 4.9723 10.3376 4.91924 10.4556 4.81312C10.5788 4.707 10.6404 4.57055 10.6404 4.40379C10.6404 4.26229 10.6019 4.1309 10.5249 4.00962C10.4479 3.88834 10.3093 3.78222 10.1091 3.69125L7.64537 2.61487C7.51192 2.55423 7.40413 2.48348 7.322 2.40262C7.24501 2.31672 7.20651 2.20554 7.20651 2.0691C7.20651 1.90739 7.25784 1.78105 7.3605 1.69009C7.46829 1.59407 7.59148 1.54606 7.73006 1.54606C7.85325 1.54606 7.97388 1.56628 8.09193 1.60671L12.0879 3.01662C13.4686 3.50175 14.4464 4.16375 15.0213 5.00262C15.6013 5.83644 15.8913 6.80923 15.8913 7.92099Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(PointLeftIcon);
export default ForwardRef;