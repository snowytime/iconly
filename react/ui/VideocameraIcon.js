import * as React from "react";
import { forwardRef } from "react";
const VideocameraIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 19 13",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2.99515 13H11.0206C11.9576 13 12.6897 12.7338 13.2171 12.2013C13.7495 11.6636 14.0158 10.9124 14.0158 9.94769V3.0444C14.0158 2.08496 13.7495 1.33901 13.2171 0.806569C12.6897 0.268856 11.9576 0 11.0206 0H2.99515C2.09916 0 1.3747 0.268856 0.821746 0.806569C0.273915 1.33901 0 2.08496 0 3.0444V9.94769C0 10.9124 0.263676 11.6636 0.791027 12.2013C1.3235 12.7338 2.05821 13 2.99515 13ZM3.21019 11.806C2.58044 11.806 2.09404 11.6373 1.75101 11.2999C1.40798 10.9625 1.23646 10.4511 1.23646 9.76581V3.23418C1.23646 2.54886 1.40798 2.03751 1.75101 1.70012C2.09404 1.35746 2.58044 1.18613 3.21019 1.18613H10.8056C11.4353 1.18613 11.9217 1.35746 12.2648 1.70012C12.6078 2.03751 12.7793 2.54886 12.7793 3.23418V9.76581C12.7793 10.4511 12.6078 10.9625 12.2648 11.2999C11.9217 11.6373 11.4353 11.806 10.8056 11.806H3.21019ZM13.8391 4.28589V5.78832L17.4947 2.68066C17.5306 2.6543 17.5613 2.63321 17.5869 2.6174C17.6176 2.59631 17.6483 2.58577 17.6791 2.58577C17.7661 2.58577 17.8096 2.64903 17.8096 2.77555V10.2245C17.8096 10.3457 17.7661 10.4063 17.6791 10.4063C17.6483 10.4063 17.6176 10.3984 17.5869 10.3826C17.5613 10.3615 17.5306 10.3404 17.4947 10.3193L13.8391 7.21168V8.7062L16.9188 11.3948C17.0724 11.5266 17.2311 11.6346 17.3949 11.719C17.5587 11.7981 17.72 11.8376 17.8787 11.8376C18.2167 11.8376 18.488 11.7216 18.6928 11.4897C18.8976 11.2577 19 10.9572 19 10.5882V2.4118C19 2.04278 18.8976 1.7423 18.6928 1.51034C18.488 1.27839 18.2167 1.16241 17.8787 1.16241C17.72 1.16241 17.5587 1.20458 17.3949 1.28893C17.2311 1.368 17.0724 1.47344 16.9188 1.60523L13.8391 4.28589Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(VideocameraIcon);
export default ForwardRef;