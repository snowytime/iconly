import * as React from "react";
import { forwardRef } from "react";
const PianoKeysFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 18 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M3.38169 7.41042V0.00760059H5.91607V7.41042C5.91607 7.68911 5.84229 7.88672 5.69471 8.00326C5.55221 8.1198 5.38926 8.17807 5.20605 8.17807H5.00759V14H4.29769V8.17807H4.09922C3.91601 8.17807 3.75064 8.1198 3.60305 8.00326C3.45547 7.88672 3.38169 7.68911 3.38169 7.41042ZM7.73281 7.41042V0.00760059H10.2672V7.41042C10.2672 7.68911 10.1934 7.88672 10.0458 8.00326C9.90333 8.1198 9.7405 8.17807 9.55729 8.17807H9.35883V14H8.64881V8.17807H8.44271C8.26459 8.17807 8.10176 8.1198 7.95417 8.00326C7.80659 7.88672 7.73281 7.68911 7.73281 7.41042ZM12.0839 7.41042V0.00760059H14.6183V7.41042C14.6183 7.68911 14.5445 7.88672 14.3969 8.00326C14.2545 8.1198 14.0916 8.17807 13.9084 8.17807H13.7099V14H13V8.17807H12.7939C12.6107 8.17807 12.4452 8.1198 12.2977 8.00326C12.1552 7.88672 12.0839 7.68911 12.0839 7.41042ZM2.39699 13.9924H15.603C16.4071 13.9924 17.0077 13.7948 17.4046 13.3996C17.8015 13.0094 18 12.4242 18 11.6439V2.35613C18 1.57582 17.8015 0.988056 17.4046 0.592834C17.0077 0.197611 16.4071 0 15.603 0H2.39699C1.598 0 0.997436 0.197611 0.5954 0.592834C0.198453 0.98299 0 1.57076 0 2.35613V11.6439C0 12.4242 0.198453 13.0094 0.5954 13.3996C0.997436 13.7948 1.598 13.9924 2.39699 13.9924Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(PianoKeysFillIcon);
export default ForwardRef;