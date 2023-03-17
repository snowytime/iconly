import * as React from "react";
import { forwardRef } from "react";
const PhoneIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M11.1503 15.0002C11.82 15.0002 12.3901 14.9031 12.8604 14.7088C13.3308 14.5196 13.7602 14.2052 14.1488 13.7655C14.1794 13.7349 14.2076 13.7016 14.2331 13.6659C14.2638 13.6352 14.2945 13.6045 14.3252 13.5738C14.5552 13.3182 14.7239 13.0651 14.8313 12.8146C14.9438 12.559 15 12.311 15 12.0708C15 11.7947 14.9182 11.5288 14.7546 11.2732C14.591 11.0125 14.3379 10.7645 13.9954 10.5294L11.7638 8.98027C11.4213 8.7451 11.0583 8.62496 10.6748 8.61984C10.2965 8.61473 9.94632 8.77066 9.62423 9.08763L9.03374 9.67812C8.94683 9.76504 8.86247 9.81361 8.78067 9.82383C8.70399 9.83406 8.62219 9.81105 8.53528 9.75481C8.39724 9.6679 8.22086 9.53753 8.00613 9.36371C7.79652 9.18988 7.57669 9.00072 7.34663 8.79622C7.11656 8.58661 6.90695 8.38723 6.71779 8.19806C6.5184 7.99868 6.32413 7.79673 6.13497 7.59224C5.95092 7.38774 5.77965 7.19091 5.62117 7.00174C5.46779 6.80747 5.33998 6.62853 5.23773 6.46493C5.18661 6.37802 5.16616 6.29622 5.17638 6.21954C5.18661 6.13774 5.23517 6.05338 5.32209 5.96647L5.90491 5.37598C6.22699 5.05389 6.38548 4.70369 6.38037 4.32536C6.37526 3.94193 6.25511 3.57894 6.01994 3.23641L4.47086 1.00481C4.23057 0.662277 3.98262 0.411766 3.72699 0.253279C3.47137 0.0896796 3.20552 0.00532383 2.92945 0.000211352C2.44376 -0.0100136 1.94274 0.214935 1.42638 0.675058C1.39571 0.705733 1.36247 0.736408 1.32669 0.767083C1.29601 0.792645 1.26534 0.818207 1.23466 0.84377C0.800102 1.23232 0.485685 1.66177 0.291411 2.13211C0.097137 2.60246 0 3.16995 0 3.83457C0 4.56565 0.145706 5.34019 0.437117 6.15819C0.73364 6.97618 1.16564 7.81207 1.73313 8.66585C2.30573 9.51453 3.00358 10.3504 3.82669 11.1735C4.6498 11.9915 5.48569 12.6843 6.33436 13.2517C7.18303 13.8243 8.0138 14.2589 8.82669 14.5554C9.64468 14.8519 10.4192 15.0002 11.1503 15.0002ZM11.158 13.8192C10.5087 13.8346 9.81084 13.6914 9.06442 13.3898C8.318 13.0881 7.57157 12.6766 6.82515 12.1551C6.07873 11.6285 5.37321 11.0355 4.70859 10.376C4.04397 9.71136 3.4407 8.99817 2.89877 8.23641C2.36196 7.46954 1.93763 6.70778 1.62577 5.95113C1.31391 5.18937 1.16309 4.48385 1.17331 3.83457C1.18354 3.41023 1.26278 3.02168 1.41104 2.66892C1.5593 2.31105 1.78425 2.00174 2.08589 1.74101C2.11145 1.71545 2.13446 1.695 2.15491 1.67966C2.18047 1.65921 2.20603 1.63876 2.2316 1.61831C2.34407 1.52117 2.4591 1.44704 2.57669 1.39592C2.69939 1.33968 2.81697 1.31156 2.92945 1.31156C3.17485 1.31156 3.36401 1.41637 3.49693 1.62598L4.98466 3.85757C5.06646 3.98027 5.10481 4.10553 5.09969 4.23334C5.09969 4.36115 5.0409 4.48385 4.92331 4.60144L4.24847 5.27628C3.98262 5.53702 3.84969 5.82076 3.84969 6.12751C3.84969 6.42915 3.94683 6.70778 4.1411 6.9634C4.36094 7.25992 4.63957 7.5999 4.97699 7.98334C5.31442 8.36678 5.63139 8.7042 5.92791 8.99561C6.12219 9.18988 6.34458 9.40461 6.59509 9.63978C6.85072 9.86984 7.10378 10.0948 7.35429 10.3146C7.60992 10.5294 7.83742 10.7108 8.03681 10.8591C8.29243 11.0483 8.57106 11.1454 8.8727 11.1505C9.17434 11.1505 9.45808 11.0176 9.72393 10.7517L10.3988 10.0769C10.5164 9.9542 10.6391 9.89285 10.7669 9.89285C10.8947 9.89285 11.0199 9.93119 11.1426 10.0079L13.3742 11.4956C13.4867 11.5723 13.566 11.6592 13.612 11.7563C13.6631 11.8535 13.6887 11.9583 13.6887 12.0708C13.6887 12.3008 13.5864 12.5334 13.3819 12.7686C13.3615 12.7942 13.341 12.8197 13.3206 12.8453C13.3052 12.8658 13.2848 12.8888 13.2592 12.9143C12.9985 13.216 12.6892 13.4409 12.3313 13.5892C11.9734 13.7374 11.5823 13.8141 11.158 13.8192Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(PhoneIcon);
export default ForwardRef;