import * as React from "react";
import { forwardRef } from "react";
const BellFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 15 16",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M1.20028 12.952H13.7997C14.1759 12.952 14.4701 12.8684 14.682 12.7012C14.894 12.534 15 12.311 15 12.0323C15 11.7789 14.9232 11.5332 14.7695 11.295C14.6158 11.0568 14.4223 10.8238 14.1892 10.5957C13.9613 10.3677 13.7334 10.1397 13.5056 9.91164C13.3307 9.73935 13.1929 9.51386 13.0922 9.23516C12.9968 8.95645 12.9253 8.66002 12.8776 8.34584C12.8299 8.03167 12.7955 7.72763 12.7743 7.43373C12.7584 6.46081 12.647 5.5943 12.4403 4.8342C12.239 4.07411 11.9237 3.43563 11.4944 2.91877C11.0652 2.4019 10.4981 2.02185 9.79331 1.77862C9.64493 1.28203 9.37203 0.861441 8.97458 0.516865C8.57712 0.172288 8.08426 0 7.49603 0C6.91309 0 6.42288 0.172288 6.02542 0.516865C5.62797 0.861441 5.35507 1.28203 5.20669 1.77862C4.50187 2.02185 3.93218 2.4019 3.49762 2.91877C3.06837 3.43563 2.75302 4.07411 2.55165 4.8342C2.35027 5.5943 2.24164 6.46081 2.22574 7.43373C2.20455 7.72763 2.1701 8.03167 2.12241 8.34584C2.07471 8.66002 2.00053 8.95645 1.89984 9.23516C1.80445 9.51386 1.66927 9.73935 1.49439 9.91164C1.26651 10.1397 1.03601 10.3677 0.802835 10.5957C0.57496 10.8238 0.3842 11.0568 0.230517 11.295C0.0768338 11.5332 0 11.7789 0 12.0323C0 12.311 0.105978 12.534 0.317954 12.7012C0.529931 12.8684 0.824019 12.952 1.20028 12.952ZM7.49603 16C7.94648 16 8.34919 15.9063 8.70425 15.7188C9.05931 15.5313 9.34287 15.2855 9.55484 14.9815C9.77212 14.6774 9.89929 14.3481 9.93639 13.9933H5.06355C5.09535 14.3481 5.21993 14.6774 5.43721 14.9815C5.65448 15.2855 5.94062 15.5313 6.29569 15.7188C6.65075 15.9063 7.05087 16 7.49603 16Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(BellFillIcon);
export default ForwardRef;