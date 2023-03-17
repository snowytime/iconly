import * as React from "react";
import { forwardRef } from "react";
const FigureBasketballIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 17 18",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M7.96203 3.41032C8.27999 3.41032 8.5688 3.33471 8.82847 3.18349C9.09344 3.02705 9.30276 2.82108 9.45644 2.56556C9.61012 2.30483 9.68696 2.01543 9.68696 1.69734C9.68696 1.38447 9.61012 1.10027 9.45644 0.844758C9.30276 0.589245 9.09344 0.385877 8.82847 0.234655C8.5688 0.0782184 8.27999 0 7.96203 0C7.63878 0 7.34467 0.0782184 7.0797 0.234655C6.82003 0.385877 6.61071 0.589245 6.45173 0.844758C6.29805 1.10027 6.22121 1.38447 6.22121 1.69734C6.22121 2.01543 6.29805 2.30483 6.45173 2.56556C6.61071 2.82108 6.82003 3.02705 7.0797 3.18349C7.34467 3.33471 7.63878 3.41032 7.96203 3.41032ZM0.641045 17.7634C0.794725 17.9042 0.9802 17.9824 1.19747 17.998C1.42004 18.0137 1.61877 17.9355 1.79364 17.7634L5.27529 14.3452C5.38657 14.2462 5.45546 14.1471 5.48196 14.048C5.50846 13.9489 5.51641 13.8238 5.50581 13.6726L5.30708 11.4668C5.30178 11.399 5.32298 11.3521 5.37067 11.326C5.42367 11.2947 5.47401 11.3026 5.5217 11.3495L8.01768 13.4614L9.31336 17.4271C9.38755 17.6565 9.52798 17.8155 9.73465 17.9042C9.94133 17.9928 10.1453 18.0085 10.3467 17.9511C10.5746 17.8833 10.7389 17.7504 10.8396 17.5522C10.9402 17.354 10.9535 17.1481 10.8793 16.9343L9.53593 12.7574C9.51473 12.6948 9.48558 12.6349 9.44849 12.5775C9.41669 12.5202 9.37695 12.468 9.32926 12.4211L6.64251 9.80858L8.36743 6.41391C8.40453 6.3409 8.45752 6.29919 8.52641 6.28876C8.6006 6.27311 8.66949 6.29658 8.73308 6.35915L10.6647 8.2755C10.7548 8.35894 10.8687 8.42412 11.0065 8.47105L14.8776 9.61304C15.0366 9.65997 15.2247 9.64432 15.442 9.56611C15.6593 9.48789 15.8103 9.31841 15.8951 9.05769C15.9587 8.84389 15.9348 8.63791 15.8236 8.43976C15.7176 8.24161 15.5559 8.11124 15.3387 8.04867L11.6742 6.9849L9.58362 4.90429C9.12788 4.45584 8.5688 4.23161 7.90639 4.23161H2.37392C2.21494 4.23161 2.06921 4.27333 1.93673 4.35676C1.80954 4.43498 1.7115 4.54188 1.64261 4.67746L0.0925669 7.71233C-0.0081199 7.91048 -0.0266675 8.11646 0.0369242 8.33026C0.105815 8.53884 0.246247 8.69267 0.458219 8.79174C0.670191 8.88561 0.879514 8.90125 1.08619 8.83867C1.29816 8.77089 1.45714 8.6327 1.56312 8.42412L2.8747 5.85073H4.51219C4.60757 5.85073 4.67647 5.88724 4.71886 5.96024C4.76125 6.03324 4.76125 6.11146 4.71886 6.19489L3.51857 8.56491C3.3066 8.98729 3.17146 9.43574 3.11317 9.91027C3.06018 10.3796 3.09197 10.8437 3.20856 11.3026L3.78088 13.5161L0.625147 16.6058C0.466168 16.757 0.386678 16.9473 0.386678 17.1768C0.391978 17.4062 0.476767 17.6017 0.641045 17.7634ZM15.1081 14.2045C15.4579 14.2045 15.7759 14.121 16.062 13.9542C16.3482 13.7821 16.5761 13.5578 16.7456 13.2815C16.9152 12.9999 17 12.687 17 12.3429C17 12.0039 16.9152 11.6936 16.7456 11.4121C16.5761 11.1305 16.3482 10.9062 16.062 10.7394C15.7759 10.5725 15.4579 10.4891 15.1081 10.4891C14.7637 10.4891 14.4484 10.5725 14.1622 10.7394C13.8761 10.9062 13.6482 11.1305 13.4786 11.4121C13.309 11.6936 13.2242 12.0039 13.2242 12.3429C13.2242 12.687 13.309 12.9999 13.4786 13.2815C13.6482 13.5578 13.8761 13.7821 14.1622 13.9542C14.4484 14.121 14.7637 14.2045 15.1081 14.2045Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(FigureBasketballIcon);
export default ForwardRef;