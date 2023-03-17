import * as React from "react";
import { forwardRef } from "react";
const VideoFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 19 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M1.63567 15H17.3643C17.8639 15 18.2614 14.8507 18.5568 14.5521C18.8523 14.259 19 13.8654 19 13.3713V1.62052C19 1.13192 18.8523 0.741042 18.5568 0.447883C18.2614 0.149294 17.8639 0 17.3643 0H1.63567C1.14146 0 0.743983 0.149294 0.44316 0.447883C0.14771 0.741042 0 1.13192 0 1.62052V13.3713C0 13.8654 0.14771 14.259 0.44316 14.5521C0.743983 14.8507 1.14146 15 1.63567 15ZM1.64372 13.6889C1.35902 13.6889 1.21668 13.5478 1.21668 13.2655V12.3453C1.21668 12.2313 1.25159 12.139 1.32142 12.0684C1.39663 11.9924 1.49331 11.9544 1.61149 11.9544H2.65091C2.76909 11.9544 2.86308 11.9924 2.93292 12.0684C3.00275 12.139 3.03766 12.2313 3.03766 12.3453V13.2899C3.03766 13.4039 3.00275 13.4989 2.93292 13.5749C2.86308 13.6509 2.76909 13.6889 2.65091 13.6889H1.64372ZM1.61149 10.9935C1.49331 10.9935 1.39663 10.9555 1.32142 10.8795C1.25159 10.798 1.21668 10.7058 1.21668 10.6026V9.67427C1.21668 9.55483 1.25159 9.45983 1.32142 9.38925C1.39663 9.31325 1.49331 9.27524 1.61149 9.27524H2.65091C2.76909 9.27524 2.86308 9.31325 2.93292 9.38925C3.00275 9.45983 3.03766 9.55483 3.03766 9.67427V10.6026C3.03766 10.7058 3.00275 10.798 2.93292 10.8795C2.86308 10.9555 2.76909 10.9935 2.65091 10.9935H1.61149ZM1.61149 8.35505C1.49331 8.35505 1.39663 8.31705 1.32142 8.24104C1.25159 8.16504 1.21668 8.07546 1.21668 7.97231V7.04397C1.21668 6.92454 1.25159 6.82953 1.32142 6.75896C1.39663 6.68295 1.49331 6.64495 1.61149 6.64495H2.65091C2.76909 6.64495 2.86308 6.68295 2.93292 6.75896C3.00275 6.82953 3.03766 6.92454 3.03766 7.04397V7.97231C3.03766 8.07546 3.00275 8.16504 2.93292 8.24104C2.86308 8.31705 2.76909 8.35505 2.65091 8.35505H1.61149ZM1.61149 5.74104C1.49331 5.74104 1.39663 5.70304 1.32142 5.62704C1.25159 5.55103 1.21668 5.46145 1.21668 5.35831V4.42182C1.21668 4.30239 1.25159 4.20738 1.32142 4.13681C1.39663 4.0608 1.49331 4.0228 1.61149 4.0228H2.65091C2.76909 4.0228 2.86308 4.0608 2.93292 4.13681C3.00275 4.20738 3.03766 4.30239 3.03766 4.42182V5.35831C3.03766 5.46145 3.00275 5.55103 2.93292 5.62704C2.86308 5.70304 2.76909 5.74104 2.65091 5.74104H1.61149ZM1.61149 3.0456C1.49331 3.0456 1.39663 3.0076 1.32142 2.9316C1.25159 2.85559 1.21668 2.76602 1.21668 2.66287V1.74267C1.21668 1.45494 1.35902 1.31107 1.64372 1.31107H2.65091C2.76909 1.31107 2.86308 1.34908 2.93292 1.42508C3.00275 1.49566 3.03766 1.59066 3.03766 1.7101V2.66287C3.03766 2.76602 3.00275 2.85559 2.93292 2.9316C2.86308 3.0076 2.76909 3.0456 2.65091 3.0456H1.61149ZM16.3491 13.6889C16.2363 13.6889 16.1423 13.6509 16.0671 13.5749C15.9973 13.4989 15.9623 13.4039 15.9623 13.2899V12.3453C15.9623 12.2313 15.9973 12.139 16.0671 12.0684C16.1423 11.9924 16.2363 11.9544 16.3491 11.9544H17.3885C17.5067 11.9544 17.6007 11.9924 17.6705 12.0684C17.7457 12.139 17.7833 12.2313 17.7833 12.3453V13.2655C17.7833 13.5478 17.641 13.6889 17.3563 13.6889H16.3491ZM16.3491 10.9935C16.2363 10.9935 16.1423 10.9555 16.0671 10.8795C15.9973 10.798 15.9623 10.7058 15.9623 10.6026V9.67427C15.9623 9.55483 15.9973 9.45983 16.0671 9.38925C16.1423 9.31325 16.2363 9.27524 16.3491 9.27524H17.3885C17.5121 9.27524 17.6087 9.31325 17.6786 9.38925C17.7484 9.45983 17.7833 9.55483 17.7833 9.67427V10.6026C17.7833 10.7058 17.7457 10.798 17.6705 10.8795C17.6007 10.9555 17.5067 10.9935 17.3885 10.9935H16.3491ZM16.3491 8.35505C16.2363 8.35505 16.1423 8.31705 16.0671 8.24104C15.9973 8.16504 15.9623 8.07546 15.9623 7.97231V7.04397C15.9623 6.92454 15.9973 6.82953 16.0671 6.75896C16.1423 6.68295 16.2363 6.64495 16.3491 6.64495H17.3885C17.5121 6.64495 17.6087 6.68295 17.6786 6.75896C17.7484 6.82953 17.7833 6.92454 17.7833 7.04397V7.97231C17.7833 8.07546 17.7457 8.16504 17.6705 8.24104C17.6007 8.31705 17.5067 8.35505 17.3885 8.35505H16.3491ZM16.3491 5.74104C16.2363 5.74104 16.1423 5.70304 16.0671 5.62704C15.9973 5.55103 15.9623 5.46145 15.9623 5.35831V4.42182C15.9623 4.30239 15.9973 4.20738 16.0671 4.13681C16.1423 4.0608 16.2363 4.0228 16.3491 4.0228H17.3885C17.5121 4.0228 17.6087 4.0608 17.6786 4.13681C17.7484 4.20738 17.7833 4.30239 17.7833 4.42182V5.35831C17.7833 5.46145 17.7457 5.55103 17.6705 5.62704C17.6007 5.70304 17.5067 5.74104 17.3885 5.74104H16.3491ZM3.9401 7.5C3.9401 7.32628 3.9965 7.1797 4.10931 7.06026C4.22749 6.94082 4.37251 6.88111 4.54441 6.88111H14.4553C14.6272 6.88111 14.7725 6.94082 14.8907 7.06026C15.0089 7.1797 15.068 7.32628 15.068 7.5C15.068 7.6683 15.0089 7.81216 14.8907 7.9316C14.7725 8.05103 14.6272 8.11075 14.4553 8.11075H4.54441C4.37251 8.11075 4.22749 8.05103 4.10931 7.9316C3.9965 7.81216 3.9401 7.6683 3.9401 7.5ZM16.3491 3.0456C16.2363 3.0456 16.1423 3.0076 16.0671 2.9316C15.9973 2.85559 15.9623 2.76602 15.9623 2.66287V1.7101C15.9623 1.59066 15.9973 1.49566 16.0671 1.42508C16.1423 1.34908 16.2363 1.31107 16.3491 1.31107H17.3563C17.641 1.31107 17.7833 1.45494 17.7833 1.74267V2.66287C17.7833 2.76602 17.7457 2.85559 17.6705 2.9316C17.6007 3.0076 17.5067 3.0456 17.3885 3.0456H16.3491Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(VideoFillIcon);
export default ForwardRef;