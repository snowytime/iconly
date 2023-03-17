import * as React from "react";
import { forwardRef } from "react";
const InfoBubbleIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 17 16",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M4.74365 16C4.93391 16 5.10874 15.9484 5.26815 15.8453C5.42756 15.7422 5.62296 15.5876 5.85436 15.3813L8.51543 13.0072H13.4673C14.2335 13.0072 14.8789 12.8706 15.4034 12.5974C15.9279 12.319 16.3238 11.9169 16.5912 11.391C16.8637 10.8652 17 10.2233 17 9.46544V3.54181C17 2.78395 16.8637 2.1421 16.5912 1.61624C16.3238 1.09038 15.9279 0.690833 15.4034 0.417593C14.8789 0.139198 14.2335 0 13.4673 0H3.53267C2.76649 0 2.12114 0.139198 1.59664 0.417593C1.07214 0.690833 0.673624 1.09038 0.401089 1.61624C0.133696 2.1421 0 2.78395 0 3.54181V9.46544C0 10.2233 0.133696 10.8652 0.401089 11.391C0.673624 11.9169 1.07214 12.319 1.59664 12.5974C2.12114 12.8706 2.76649 13.0072 3.53267 13.0072H3.9029V15.0179C3.9029 15.3169 3.97489 15.5541 4.11887 15.7293C4.268 15.9098 4.47626 16 4.74365 16ZM5.05989 14.5848V12.3422C5.05989 12.1308 5.01618 11.9813 4.92877 11.8937C4.84135 11.806 4.69223 11.7622 4.4814 11.7622H3.53267C2.75106 11.7622 2.17256 11.5689 1.79719 11.1822C1.42695 10.7904 1.24183 10.2156 1.24183 9.45771V3.54181C1.24183 2.78911 1.42695 2.21943 1.79719 1.83277C2.17256 1.44095 2.75106 1.24505 3.53267 1.24505H13.4673C14.2438 1.24505 14.8197 1.44095 15.1951 1.83277C15.5705 2.21943 15.7582 2.78911 15.7582 3.54181V9.45771C15.7582 10.2156 15.5705 10.7904 15.1951 11.1822C14.8197 11.5689 14.2438 11.7622 13.4673 11.7622H8.46915C8.25318 11.7622 8.07834 11.7854 7.94465 11.8318C7.81095 11.8782 7.67211 11.9762 7.52813 12.1257L5.05989 14.5848ZM7.25817 10.5172H10.1661C10.3152 10.5172 10.4386 10.4708 10.5363 10.378C10.6391 10.28 10.6906 10.1589 10.6906 10.0145C10.6906 9.87015 10.6391 9.75157 10.5363 9.65877C10.4386 9.56082 10.3152 9.51184 10.1661 9.51184H9.27904V5.8695C9.27904 5.67359 9.23019 5.51893 9.13249 5.40551C9.03993 5.28693 8.90366 5.22765 8.72368 5.22765H7.38158C7.23246 5.22765 7.10647 5.27662 7.00363 5.37458C6.90593 5.46738 6.85708 5.58337 6.85708 5.72257C6.85708 5.86692 6.90593 5.98808 7.00363 6.08603C7.10647 6.17883 7.23246 6.22523 7.38158 6.22523H8.14519V9.51184H7.25817C7.10904 9.51184 6.98563 9.56082 6.88793 9.65877C6.79023 9.75157 6.74138 9.87015 6.74138 10.0145C6.74138 10.1589 6.79023 10.28 6.88793 10.378C6.98563 10.4708 7.10904 10.5172 7.25817 10.5172ZM8.44601 4.029C8.70826 4.029 8.9268 3.93878 9.10163 3.75834C9.28161 3.5779 9.3716 3.35879 9.3716 3.10102C9.3716 2.83809 9.28161 2.6164 9.10163 2.43596C8.9268 2.25036 8.70826 2.15756 8.44601 2.15756C8.1889 2.15756 7.96779 2.25036 7.78267 2.43596C7.60269 2.6164 7.5127 2.83809 7.5127 3.10102C7.5127 3.35879 7.60269 3.5779 7.78267 3.75834C7.96779 3.93878 8.1889 4.029 8.44601 4.029Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(InfoBubbleIcon);
export default ForwardRef;