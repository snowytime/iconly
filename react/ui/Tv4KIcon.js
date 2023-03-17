import * as React from "react";
import { forwardRef } from "react";
const Tv4KIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 20 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2.056 13.7853H17.944C18.6213 13.7853 19.1333 13.6118 19.48 13.2648C19.8267 12.9178 20 12.4052 20 11.7272V2.55005C20 1.87738 19.8267 1.36753 19.48 1.02052C19.1333 0.673507 18.6213 0.5 17.944 0.5H2.056C1.37867 0.5 0.866667 0.673507 0.52 1.02052C0.173333 1.36753 0 1.87738 0 2.55005V11.7272C0 12.4052 0.173333 12.9178 0.52 13.2648C0.866667 13.6118 1.37867 13.7853 2.056 13.7853ZM2.08 12.496C1.81867 12.496 1.62133 12.4319 1.488 12.3038C1.35467 12.1703 1.288 11.9728 1.288 11.7112V2.57407C1.288 2.31248 1.35467 2.11762 1.488 1.98949C1.62133 1.85602 1.81867 1.78929 2.08 1.78929H17.92C18.1867 1.78929 18.384 1.85602 18.512 1.98949C18.6453 2.11762 18.712 2.31248 18.712 2.57407V11.7112C18.712 11.9728 18.6453 12.1703 18.512 12.3038C18.384 12.4319 18.1867 12.496 17.92 12.496H2.08ZM5.976 16.5H14.024C14.2 16.5 14.352 16.4359 14.48 16.3078C14.608 16.185 14.672 16.0329 14.672 15.8513C14.672 15.6752 14.608 15.523 14.48 15.3949C14.352 15.2668 14.2 15.2027 14.024 15.2027H5.976C5.8 15.2027 5.648 15.2668 5.52 15.3949C5.392 15.523 5.328 15.6752 5.328 15.8513C5.328 16.0329 5.392 16.185 5.52 16.3078C5.648 16.4359 5.8 16.5 5.976 16.5ZM7.672 10.6702C7.848 10.6702 7.984 10.6168 8.08 10.51C8.176 10.3979 8.224 10.2431 8.224 10.0455V9.22873H8.8C8.94933 9.22873 9.06933 9.18602 9.16 9.1006C9.25067 9.00984 9.296 8.88972 9.296 8.74024C9.296 8.5961 9.25067 8.47864 9.16 8.38789C9.06933 8.29713 8.94933 8.25175 8.8 8.25175H8.224V4.40791C8.224 4.17301 8.14133 3.98348 7.976 3.83934C7.81067 3.69519 7.59467 3.62312 7.328 3.62312C7.072 3.62312 6.856 3.67384 6.68 3.77527C6.504 3.87137 6.34133 4.03153 6.192 4.25576C6 4.54938 5.79733 4.85369 5.584 5.16867C5.376 5.48365 5.168 5.79863 4.96 6.11361C4.752 6.42326 4.552 6.72756 4.36 7.02653C4.17333 7.32015 4.00267 7.59509 3.848 7.85135C3.77333 7.9688 3.72 8.07824 3.688 8.17968C3.66133 8.28111 3.648 8.38789 3.648 8.5C3.648 8.71889 3.71733 8.89506 3.856 9.02853C3.99467 9.16199 4.184 9.22873 4.424 9.22873H7.128V10.0455C7.128 10.2377 7.176 10.3899 7.272 10.502C7.368 10.6141 7.50133 10.6702 7.672 10.6702ZM7.128 8.25175H4.744V8.2037C4.856 8.00617 4.984 7.79263 5.128 7.56306C5.272 7.3335 5.424 7.09593 5.584 6.85035C5.744 6.59943 5.90667 6.34585 6.072 6.08959C6.24267 5.82799 6.41067 5.57174 6.576 5.32082C6.74667 5.0699 6.912 4.82432 7.072 4.58408H7.128V8.25175ZM10.864 10.6301C11.0453 10.6301 11.184 10.5767 11.28 10.47C11.3813 10.3579 11.432 10.2004 11.432 9.9975V8.4039L12.392 7.4029L14.616 10.3579C14.6907 10.454 14.768 10.5234 14.848 10.5661C14.928 10.6088 15.016 10.6301 15.112 10.6301C15.2667 10.6301 15.392 10.5821 15.488 10.486C15.5893 10.3846 15.64 10.2591 15.64 10.1096C15.64 10.0349 15.624 9.96013 15.592 9.88538C15.5653 9.81064 15.528 9.74124 15.48 9.67718L13.2 6.6982L15.296 4.53604C15.36 4.47731 15.4053 4.41592 15.432 4.35185C15.4587 4.28779 15.472 4.21572 15.472 4.13564C15.472 4.00751 15.424 3.89806 15.328 3.80731C15.232 3.71655 15.1147 3.67117 14.976 3.67117C14.8853 3.67117 14.808 3.68986 14.744 3.72723C14.68 3.75926 14.6053 3.81798 14.52 3.9034L11.528 6.94645H11.432V4.3038C11.432 4.10093 11.3813 3.94611 11.28 3.83934C11.184 3.72723 11.0453 3.67117 10.864 3.67117C10.6933 3.67117 10.56 3.72723 10.464 3.83934C10.368 3.95145 10.32 4.10627 10.32 4.3038V9.9975C10.32 10.195 10.368 10.3498 10.464 10.462C10.56 10.5741 10.6933 10.6301 10.864 10.6301Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(Tv4KIcon);
export default ForwardRef;