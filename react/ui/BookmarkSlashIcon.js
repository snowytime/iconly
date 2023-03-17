import * as React from "react";
import { forwardRef } from "react";
const BookmarkSlashIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 15 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M12.5572 11.7145V2.77459C12.5572 2.01904 12.3725 1.45105 12.0031 1.07063C11.6337 0.69021 11.0822 0.5 10.3486 0.5H4.24558C3.34547 0.5 2.73413 0.801165 2.41155 1.4035L3.37149 2.3704C3.48595 1.95828 3.79813 1.75221 4.30801 1.75221H10.294C10.6322 1.75221 10.8871 1.83939 11.0588 2.01375C11.2357 2.18811 11.3241 2.44701 11.3241 2.79044V10.4622L12.5572 11.7145ZM2.8642 17.5C3.05151 17.5 3.22841 17.434 3.3949 17.3019C3.56139 17.1751 3.82154 16.9373 4.17534 16.5886L7.22685 13.5373C7.27367 13.4845 7.3205 13.4845 7.36733 13.5373L10.4188 16.5886C10.7726 16.932 11.0302 17.1698 11.1915 17.3019C11.358 17.434 11.5375 17.5 11.73 17.5C11.9901 17.5 12.193 17.4207 12.3387 17.2622C12.4844 17.109 12.552 16.9162 12.5416 16.6837V16.2716L11.1524 14.8608V15.3443C11.1472 15.3601 11.1368 15.3681 11.1212 15.3681C11.1108 15.3733 11.0952 15.3654 11.0744 15.3443L7.71072 12.0315C7.58585 11.9099 7.44797 11.8492 7.29709 11.8492C7.1462 11.8492 7.00832 11.9099 6.88345 12.0315L3.50416 15.3601C3.44693 15.413 3.3923 15.4315 3.34027 15.4156C3.29344 15.4051 3.27003 15.3601 3.27003 15.2809V6.68974L2.03694 5.43753V16.5331C2.03694 16.8396 2.10978 17.0773 2.25546 17.2464C2.40114 17.4155 2.60406 17.5 2.8642 17.5ZM13.9776 16.1368C14.0921 16.2584 14.2326 16.3191 14.3991 16.3191C14.5708 16.3191 14.7138 16.2584 14.8283 16.1368C14.9428 16.0153 15 15.87 15 15.7009C15 15.5371 14.9428 15.3945 14.8283 15.273L1.03018 1.25291C0.91051 1.13667 0.76743 1.07855 0.600937 1.07855C0.434443 1.07327 0.291363 1.13139 0.171696 1.25291C0.0572321 1.36915 0 1.51445 0 1.68881C0 1.85789 0.0572321 2.00054 0.171696 2.11678L13.9776 16.1368Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(BookmarkSlashIcon);
export default ForwardRef;