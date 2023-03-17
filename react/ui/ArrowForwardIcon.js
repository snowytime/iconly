import * as React from "react";
import { forwardRef } from "react";
const ArrowForwardIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 15 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 10.3714C0 11.4003 0.214286 12.298 0.642857 13.0643C1.07672 13.836 1.70635 14.4335 2.53175 14.8569C3.35714 15.2856 4.36243 15.5 5.54762 15.5H7.38095C7.59788 15.5 7.77249 15.4303 7.90476 15.291C8.03704 15.1517 8.10318 14.9829 8.10318 14.7846C8.10318 14.5863 8.03704 14.4175 7.90476 14.2781C7.77249 14.1388 7.59788 14.0691 7.38095 14.0691H5.55556C4.65079 14.0691 3.89153 13.903 3.27778 13.5707C2.66402 13.2438 2.19841 12.7964 1.88095 12.2283C1.56878 11.6602 1.4127 11.0145 1.4127 10.291C1.4127 9.57288 1.56878 8.93783 1.88095 8.38585C2.19841 7.82851 2.66402 7.39443 3.27778 7.0836C3.89153 6.77278 4.65079 6.61736 5.55556 6.61736H11L13.4683 6.50482L13.3254 6.13505L11.3571 7.83923L9.07143 10.0981C9.00794 10.1624 8.96032 10.2347 8.92857 10.3151C8.89683 10.3955 8.88095 10.4866 8.88095 10.5884C8.88095 10.7974 8.94444 10.9689 9.07143 11.1029C9.19841 11.2315 9.36773 11.2958 9.57937 11.2958C9.78042 11.2958 9.95238 11.2208 10.0952 11.0707L14.7619 6.43248C14.8413 6.35745 14.8995 6.27438 14.9365 6.18328C14.9788 6.09218 15 5.99839 15 5.90193C15 5.80011 14.9788 5.70364 14.9365 5.61254C14.8995 5.52144 14.8413 5.43837 14.7619 5.36334L10.0952 0.72508C9.95238 0.575027 9.78042 0.5 9.57937 0.5C9.36773 0.5 9.19841 0.566988 9.07143 0.700965C8.94444 0.829582 8.88095 0.998392 8.88095 1.2074C8.88095 1.30922 8.89683 1.40032 8.92857 1.48071C8.96032 1.56109 9.00794 1.63344 9.07143 1.69775L11.3571 3.96463L13.3254 5.66077L13.4683 5.291L11 5.17846H5.6746C4.46825 5.17846 3.4418 5.39818 2.59524 5.83762C1.74868 6.27706 1.10317 6.888 0.65873 7.67042C0.219577 8.44748 0 9.3478 0 10.3714Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(ArrowForwardIcon);
export default ForwardRef;