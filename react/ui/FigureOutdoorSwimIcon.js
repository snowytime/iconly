import * as React from "react";
import { forwardRef } from "react";
const FigureOutdoorSwimIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 19 14",
  fill: "none",
  color: "rgb(var(--foreground, 0, 0, 0))",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M9.49599 9.75758C9.85453 9.75758 10.1569 9.71306 10.403 9.62402C10.6546 9.53498 10.8847 9.42499 11.0934 9.29405C11.3074 9.15788 11.5295 9.02694 11.7596 8.90123C11.9897 8.7703 12.2626 8.66554 12.5784 8.58698L7.01563 2.92256C6.83369 2.73924 6.61963 2.63711 6.37347 2.61616C6.13266 2.59521 5.90522 2.66068 5.69117 2.81257L2.54457 5.00449C2.27165 5.19304 2.13252 5.4104 2.12717 5.65657C2.12717 5.89749 2.20744 6.10176 2.36798 6.26936C2.49641 6.41077 2.66765 6.49981 2.88171 6.53648C3.10111 6.57314 3.32319 6.51291 3.54795 6.35578L6.10055 4.5881L7.54542 6.04153C7.62569 6.12533 7.6685 6.22222 7.67385 6.33221C7.68455 6.4422 7.62836 6.53909 7.50528 6.6229L4.53528 8.53199C4.70652 8.51627 4.88579 8.5058 5.07309 8.50056C5.26039 8.49532 5.46106 8.49532 5.67512 8.50056C6.12998 8.52151 6.50993 8.59746 6.81496 8.7284C7.11998 8.8541 7.39825 8.99813 7.64977 9.16049C7.90128 9.31762 8.16885 9.45642 8.45247 9.57688C8.73609 9.69734 9.08393 9.75758 9.49599 9.75758ZM0.449514 11.8316H1.26025C1.79538 11.8316 2.24222 11.7688 2.60076 11.6431C2.96465 11.5122 3.28573 11.3603 3.56401 11.1874C3.84763 11.0146 4.12857 10.8653 4.40684 10.7396C4.68511 10.6087 5.00887 10.5432 5.37812 10.5432C5.75271 10.5432 6.07914 10.6087 6.35741 10.7396C6.63568 10.8653 6.91396 11.0146 7.19223 11.1874C7.4705 11.3603 7.7889 11.5122 8.14744 11.6431C8.51134 11.7688 8.96085 11.8316 9.49599 11.8316C10.0365 11.8316 10.486 11.7688 10.8445 11.6431C11.2084 11.5122 11.5295 11.3603 11.8078 11.1874C12.086 11.0146 12.3643 10.8653 12.6426 10.7396C12.9209 10.6087 13.2473 10.5432 13.6219 10.5432C13.9911 10.5432 14.3149 10.6087 14.5932 10.7396C14.8714 10.8653 15.1497 11.0146 15.428 11.1874C15.7062 11.3603 16.0246 11.5122 16.3832 11.6431C16.7471 11.7688 17.1993 11.8316 17.7398 11.8316H18.5505C18.6789 11.8316 18.7859 11.7897 18.8716 11.7059C18.9572 11.6221 19 11.52 19 11.3996C19 11.2738 18.9572 11.1691 18.8716 11.0853C18.7859 11.0015 18.6789 10.9596 18.5505 10.9596H17.7398C17.3545 10.9596 17.0173 10.8941 16.7283 10.7632C16.4394 10.6322 16.1531 10.483 15.8695 10.3154C15.5912 10.1425 15.2755 9.99327 14.9223 9.86756C14.5691 9.73662 14.1356 9.67116 13.6219 9.67116C13.1028 9.67116 12.6667 9.73662 12.3135 9.86756C11.9603 9.99327 11.6419 10.1425 11.3583 10.3154C11.08 10.483 10.7964 10.6322 10.5074 10.7632C10.2184 10.8941 9.88128 10.9596 9.49599 10.9596C9.11069 10.9596 8.77355 10.8941 8.48458 10.7632C8.19561 10.6322 7.90931 10.483 7.62569 10.3154C7.34742 10.1425 7.03169 9.99327 6.6785 9.86756C6.32531 9.73662 5.89185 9.67116 5.37812 9.67116C4.86439 9.67116 4.43093 9.73662 4.07774 9.86756C3.72455 9.99327 3.40614 10.1425 3.12252 10.3154C2.84425 10.483 2.56063 10.6322 2.27165 10.7632C1.98268 10.8941 1.64554 10.9596 1.26025 10.9596H0.449514C0.321082 10.9596 0.214054 11.0015 0.128433 11.0853C0.0428109 11.1691 0 11.2738 0 11.3996C0 11.52 0.0428109 11.6221 0.128433 11.7059C0.214054 11.7897 0.321082 11.8316 0.449514 11.8316ZM0.449514 14H1.26025C1.79538 14 2.24222 13.9345 2.60076 13.8036C2.96465 13.6727 3.28573 13.5208 3.56401 13.3479C3.84763 13.1803 4.12857 13.0311 4.40684 12.9001C4.68511 12.7692 5.00887 12.7037 5.37812 12.7037C5.75271 12.7037 6.07914 12.7692 6.35741 12.9001C6.63568 13.0311 6.91396 13.1803 7.19223 13.3479C7.4705 13.5208 7.7889 13.6727 8.14744 13.8036C8.51134 13.9345 8.96085 14 9.49599 14C10.0365 14 10.486 13.9345 10.8445 13.8036C11.2084 13.6727 11.5295 13.5208 11.8078 13.3479C12.086 13.1803 12.3643 13.0311 12.6426 12.9001C12.9209 12.7692 13.2473 12.7037 13.6219 12.7037C13.9911 12.7037 14.3149 12.7692 14.5932 12.9001C14.8714 13.0311 15.1497 13.1803 15.428 13.3479C15.7062 13.5208 16.0246 13.6727 16.3832 13.8036C16.7471 13.9345 17.1993 14 17.7398 14H18.5505C18.6789 14 18.7859 13.9555 18.8716 13.8664C18.9572 13.7826 19 13.6805 19 13.56C19 13.4396 18.9572 13.3348 18.8716 13.2458C18.7859 13.162 18.6789 13.1201 18.5505 13.1201H17.7398C17.3545 13.1201 17.0173 13.0546 16.7283 12.9237C16.4394 12.798 16.1531 12.6513 15.8695 12.4837C15.5912 12.3109 15.2755 12.159 14.9223 12.0281C14.5691 11.8971 14.1356 11.8316 13.6219 11.8316C13.1028 11.8316 12.6667 11.8971 12.3135 12.0281C11.9603 12.159 11.6419 12.3109 11.3583 12.4837C11.08 12.6513 10.7964 12.798 10.5074 12.9237C10.2184 13.0546 9.88128 13.1201 9.49599 13.1201C9.11069 13.1201 8.77355 13.0546 8.48458 12.9237C8.19561 12.798 7.90931 12.6513 7.62569 12.4837C7.34742 12.3109 7.03169 12.159 6.6785 12.0281C6.32531 11.8971 5.89185 11.8316 5.37812 11.8316C4.86439 11.8316 4.43093 11.8971 4.07774 12.0281C3.72455 12.159 3.40614 12.3109 3.12252 12.4837C2.84425 12.6513 2.56063 12.798 2.27165 12.9237C1.98268 13.0546 1.64554 13.1201 1.26025 13.1201H0.449514C0.321082 13.1201 0.214054 13.162 0.128433 13.2458C0.0428109 13.3348 0 13.4396 0 13.56C0 13.6805 0.0428109 13.7826 0.128433 13.8664C0.214054 13.9555 0.321082 14 0.449514 14ZM6.89523 0.439955C6.89523 0.560419 6.93804 0.66517 7.02366 0.754209C7.11463 0.83801 7.22166 0.87991 7.34474 0.87991C7.70328 0.87991 8.00563 0.921811 8.2518 1.00561C8.49796 1.08941 8.73609 1.2544 8.9662 1.50056C9.13209 1.67864 9.30869 1.76768 9.49599 1.76768C9.68864 1.76768 9.86791 1.67864 10.0338 1.50056C10.2639 1.2544 10.4994 1.08941 10.7402 1.00561C10.9863 0.921811 11.2914 0.87991 11.6553 0.87991C11.7783 0.87991 11.8827 0.83801 11.9683 0.754209C12.0593 0.66517 12.1048 0.560419 12.1048 0.439955C12.1048 0.319491 12.0593 0.217359 11.9683 0.133558C11.8827 0.0445193 11.7757 0 11.6472 0C11.2031 0 10.8151 0.060232 10.4833 0.180696C10.1569 0.30116 9.82777 0.508043 9.49599 0.801347C9.16955 0.508043 8.84045 0.30116 8.50866 0.180696C8.18223 0.060232 7.79425 0 7.34474 0C7.22166 0 7.11463 0.0445193 7.02366 0.133558C6.93804 0.217359 6.89523 0.319491 6.89523 0.439955ZM12.6988 6.57576C13.0252 6.57576 13.3195 6.49981 13.5817 6.34792C13.8493 6.1908 14.0607 5.98391 14.2159 5.72727C14.3764 5.46539 14.4567 5.17471 14.4567 4.85522C14.4567 4.54097 14.3764 4.25552 14.2159 3.99888C14.0607 3.737 13.8493 3.53012 13.5817 3.37823C13.3195 3.2211 13.0252 3.14254 12.6988 3.14254C12.3777 3.14254 12.0834 3.2211 11.8158 3.37823C11.5482 3.53012 11.3369 3.737 11.1817 3.99888C11.0265 4.25552 10.9489 4.54097 10.9489 4.85522C10.9489 5.17471 11.0265 5.46539 11.1817 5.72727C11.3369 5.98391 11.5482 6.1908 11.8158 6.34792C12.0834 6.49981 12.3777 6.57576 12.6988 6.57576Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(FigureOutdoorSwimIcon);
export default ForwardRef;