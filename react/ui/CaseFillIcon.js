import * as React from "react";
import { forwardRef } from "react";
const CaseFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 18 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2.40259 15H15.5974C16.4009 15 17.0022 14.8039 17.4013 14.4118C17.8004 14.0196 18 13.4288 18 12.6393V5.10836C18 4.31372 17.8004 3.72291 17.4013 3.33591C17.0022 2.94376 16.4009 2.74768 15.5974 2.74768H2.40259C1.60432 2.74768 1.00302 2.94376 0.598704 3.33591C0.199568 3.72291 0 4.31372 0 5.10836V12.6393C0 13.4288 0.199568 14.0196 0.598704 14.4118C1.00302 14.8039 1.60432 15 2.40259 15ZM5.054 3.42105H6.25918V2.05108C6.25918 1.75697 6.34212 1.52993 6.50799 1.36997C6.67387 1.21001 6.90972 1.13003 7.21555 1.13003H10.7844C11.0851 1.13003 11.3184 1.21001 11.4842 1.36997C11.6501 1.52993 11.733 1.75697 11.733 2.05108V3.40557H12.9382V2.13622C12.9382 1.40867 12.7516 0.872033 12.3784 0.526316C12.0052 0.175439 11.4661 0 10.7611 0H7.2311C6.5676 0 6.03888 0.175439 5.64492 0.526316C5.25097 0.872033 5.054 1.40867 5.054 2.13622V3.42105Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CaseFillIcon);
export default ForwardRef;