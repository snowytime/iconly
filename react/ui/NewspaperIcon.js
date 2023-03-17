import * as React from "react";
import { forwardRef } from "react";
const NewspaperIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0 15.1054C0 15.8983 0.197889 16.4956 0.593668 16.8974C0.989446 17.2991 1.58839 17.5 2.3905 17.5H15.5145C16.343 17.5 16.9631 17.2938 17.3747 16.8815C17.7916 16.4745 18 15.864 18 15.0499V2.95802C18 2.13868 17.7916 1.5255 17.3747 1.11847C16.9631 0.706157 16.343 0.5 15.5145 0.5H5.97625C5.14776 0.5 4.52507 0.706157 4.10818 1.11847C3.69657 1.5255 3.49077 2.13868 3.49077 2.95802V6.7402H1.59894C1.09763 6.7402 0.704486 6.87236 0.419525 7.13666C0.139842 7.39568 0 7.76042 0 8.23088V15.1054ZM1.27441 15.1054V8.47668C1.27441 8.33395 1.31398 8.22295 1.39314 8.14366C1.47757 8.05908 1.59367 8.01679 1.74142 8.01679H3.49077V15.1054C3.49077 15.4331 3.38259 15.7001 3.16623 15.9062C2.95515 16.1177 2.69657 16.2234 2.3905 16.2234C2.07388 16.2234 1.80739 16.115 1.59103 15.8983C1.37995 15.6869 1.27441 15.4226 1.27441 15.1054ZM4.49604 16.2234C4.67546 15.8745 4.76517 15.4754 4.76517 15.0261V3.02938C4.76517 2.61707 4.87071 2.30519 5.08179 2.09375C5.29815 1.88231 5.60422 1.77659 6 1.77659H15.4908C15.8865 1.77659 16.19 1.88231 16.4011 2.09375C16.6174 2.30519 16.7256 2.61707 16.7256 3.02938V14.9785C16.7256 15.3909 16.6174 15.7001 16.4011 15.9062C16.19 16.1177 15.8865 16.2234 15.4908 16.2234H4.49604ZM6.82322 5.22575H14.6834C14.8206 5.22575 14.9367 5.17817 15.0317 5.08302C15.1266 4.98259 15.1741 4.86365 15.1741 4.72621C15.1741 4.59406 15.1266 4.48305 15.0317 4.39319C14.9367 4.29804 14.8206 4.25047 14.6834 4.25047H6.82322C6.68074 4.25047 6.56201 4.29804 6.46702 4.39319C6.37203 4.48305 6.32454 4.59406 6.32454 4.72621C6.32454 4.86365 6.37203 4.98259 6.46702 5.08302C6.56201 5.17817 6.68074 5.22575 6.82322 5.22575ZM6.82322 8.01679H14.6834C14.8206 8.01679 14.9367 7.97186 15.0317 7.882C15.1266 7.78685 15.1741 7.67055 15.1741 7.53311C15.1741 7.39568 15.1266 7.27938 15.0317 7.18423C14.9367 7.08909 14.8206 7.04151 14.6834 7.04151H6.82322C6.68074 7.04151 6.56201 7.08909 6.46702 7.18423C6.37203 7.27938 6.32454 7.39568 6.32454 7.53311C6.32454 7.67055 6.37203 7.78685 6.46702 7.882C6.56201 7.97186 6.68074 8.01679 6.82322 8.01679ZM7.29024 13.6702H9.34037C9.64116 13.6702 9.87599 13.5857 10.0449 13.4165C10.219 13.2421 10.3061 13.0042 10.3061 12.7029V10.8158C10.3061 10.5092 10.219 10.2713 10.0449 10.1021C9.87599 9.9277 9.64116 9.84048 9.34037 9.84048H7.29024C6.98417 9.84048 6.74406 9.9277 6.56992 10.1021C6.40106 10.2713 6.31662 10.5092 6.31662 10.8158V12.7029C6.31662 13.0042 6.40106 13.2421 6.56992 13.4165C6.74406 13.5857 6.98417 13.6702 7.29024 13.6702ZM11.7309 10.8158H14.6755C14.8179 10.8158 14.934 10.7708 15.0237 10.681C15.1187 10.5858 15.1662 10.4722 15.1662 10.34C15.1662 10.1973 15.1187 10.0784 15.0237 9.98321C14.934 9.88806 14.8179 9.84048 14.6755 9.84048H11.7309C11.5884 9.84048 11.4697 9.88806 11.3747 9.98321C11.285 10.0784 11.2401 10.1973 11.2401 10.34C11.2401 10.4722 11.285 10.5858 11.3747 10.681C11.4697 10.7708 11.5884 10.8158 11.7309 10.8158ZM11.7309 13.6702H14.6755C14.8179 13.6702 14.934 13.6253 15.0237 13.5354C15.1187 13.4403 15.1662 13.3266 15.1662 13.1945C15.1662 13.0518 15.1187 12.9328 15.0237 12.8377C14.934 12.7425 14.8179 12.695 14.6755 12.695H11.7309C11.5884 12.695 11.4697 12.7425 11.3747 12.8377C11.285 12.9328 11.2401 13.0518 11.2401 13.1945C11.2401 13.3266 11.285 13.4403 11.3747 13.5354C11.4697 13.6253 11.5884 13.6702 11.7309 13.6702Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(NewspaperIcon);
export default ForwardRef;