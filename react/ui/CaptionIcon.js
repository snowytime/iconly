import * as React from "react";
import { forwardRef } from "react";
const CaptionIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 16 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2.16237 13.1295H13.8376C14.5584 13.1295 15.0977 12.9516 15.4555 12.5958C15.8185 12.2347 16 11.6983 16 10.9867V2.65856C16 1.94165 15.8185 1.40267 15.4555 1.0416C15.0977 0.680534 14.5584 0.5 13.8376 0.5H2.16237C1.44677 0.5 0.90747 0.68315 0.544482 1.04945C0.181494 1.41052 0 1.94689 0 2.65856V10.9867C0 11.6983 0.178901 12.2347 0.536704 12.5958C0.899692 12.9516 1.44158 13.1295 2.16237 13.1295ZM2.17793 11.9364C1.85124 11.9364 1.60233 11.8527 1.43121 11.6852C1.26009 11.5126 1.17453 11.2561 1.17453 10.916V2.72135C1.17453 2.38645 1.26009 2.13004 1.43121 1.95212C1.60233 1.7742 1.85124 1.68524 2.17793 1.68524H13.8298C14.1514 1.68524 14.3977 1.7742 14.5688 1.95212C14.7399 2.13004 14.8255 2.38645 14.8255 2.72135V10.916C14.8255 11.2457 14.7399 11.4995 14.5688 11.6774C14.3977 11.8501 14.1514 11.9364 13.8298 11.9364H2.17793ZM15.2611 10.6099L11.2552 6.80298C11.1048 6.66693 10.9415 6.56489 10.7652 6.49686C10.5889 6.4236 10.41 6.38697 10.2285 6.38697C10.047 6.38697 9.87328 6.42098 9.70734 6.48901C9.5414 6.55704 9.37806 6.65908 9.21731 6.79513L6.16821 9.55024L4.92368 8.40424C4.78367 8.27342 4.63588 8.17661 4.48031 8.11381C4.32474 8.04579 4.16399 8.01177 3.99806 8.01177C3.85286 8.01177 3.70766 8.04579 3.56247 8.11381C3.42246 8.17661 3.27986 8.27342 3.13466 8.40424L0.575596 10.7433C0.596338 11.3556 0.731162 11.8187 0.980068 12.1327C1.23416 12.4414 1.6153 12.5958 2.12348 12.5958H13.4332C14.0399 12.5958 14.4962 12.4283 14.8021 12.0934C15.1081 11.7533 15.2611 11.2588 15.2611 10.6099ZM5.06368 6.88148C5.49927 6.88148 5.87263 6.72449 6.18376 6.41052C6.50008 6.09131 6.65824 5.70931 6.65824 5.26452C6.65824 4.97148 6.58564 4.70461 6.44045 4.46389C6.29525 4.21795 6.10079 4.02433 5.85707 3.88305C5.61854 3.73653 5.35408 3.66327 5.06368 3.66327C4.77329 3.66327 4.50624 3.73653 4.26252 3.88305C4.02398 4.02433 3.83212 4.21795 3.68692 4.46389C3.54691 4.70461 3.47691 4.97148 3.47691 5.26452C3.47691 5.56279 3.54691 5.8349 3.68692 6.08085C3.83212 6.32156 4.02398 6.51518 4.26252 6.6617C4.50624 6.80822 4.77329 6.88148 5.06368 6.88148ZM0.583374 16.8187H15.4088C15.5696 16.8187 15.707 16.7611 15.8211 16.646C15.9404 16.5309 16 16.3896 16 16.2221C16 16.0599 15.9404 15.9212 15.8211 15.8061C15.707 15.691 15.5696 15.6334 15.4088 15.6334H0.583374C0.422622 15.6334 0.285205 15.691 0.171123 15.8061C0.057041 15.9212 0 16.0599 0 16.2221C0 16.3896 0.057041 16.5309 0.171123 16.646C0.285205 16.7611 0.422622 16.8187 0.583374 16.8187ZM0.583374 20.5H10.174C10.34 20.5 10.48 20.4424 10.5941 20.3273C10.7082 20.2174 10.7652 20.0788 10.7652 19.9113C10.7652 19.7439 10.7082 19.6026 10.5941 19.4874C10.48 19.3723 10.34 19.3148 10.174 19.3148H0.583374C0.422622 19.3148 0.285205 19.3723 0.171123 19.4874C0.057041 19.6026 0 19.7439 0 19.9113C0 20.0788 0.057041 20.2174 0.171123 20.3273C0.285205 20.4424 0.422622 20.5 0.583374 20.5Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CaptionIcon);
export default ForwardRef;