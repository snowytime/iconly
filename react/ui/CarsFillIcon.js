import * as React from "react";
import { forwardRef } from "react";
const CarsFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 25 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M15.7201 13.2787C16.379 13.2787 17.0746 13.2706 17.8067 13.2544C18.5389 13.2383 19.2553 13.2167 19.9561 13.1898C20.6621 13.1575 21.3105 13.1225 21.9015 13.0848C22.4924 13.0471 22.9735 13.0067 23.3448 12.9637C23.873 12.899 24.2809 12.7186 24.5686 12.4225C24.8562 12.1263 25 11.7197 25 11.2027V9.7811C25 9.32337 24.966 8.92488 24.898 8.58562C24.8353 8.24098 24.7307 7.92057 24.5842 7.62439C24.4378 7.32283 24.2443 7.0105 24.0038 6.6874L23.3448 5.80695C23.2455 5.32229 23.1278 4.84303 22.9918 4.36914C22.8611 3.89526 22.7277 3.46984 22.5918 3.09289C22.461 2.71594 22.3512 2.42784 22.2623 2.22859C22.0531 1.77087 21.7524 1.40738 21.3602 1.13813C20.968 0.868875 20.5104 0.699246 19.9874 0.629241C19.8149 0.602316 19.5194 0.580775 19.101 0.56462C18.6879 0.548465 18.1885 0.537695 17.6028 0.53231C17.0223 0.52154 16.3947 0.516155 15.7201 0.516155C15.0403 0.516155 14.4075 0.52154 13.8218 0.53231C13.2413 0.54308 12.7445 0.556543 12.3313 0.572698C11.9182 0.588853 11.6227 0.607701 11.4449 0.629241C10.922 0.693861 10.4644 0.863489 10.0722 1.13813C9.67995 1.40738 9.37925 1.77087 9.17007 2.22859C9.08116 2.42784 8.96873 2.71594 8.83276 3.09289C8.70202 3.46984 8.56866 3.89526 8.4327 4.36914C8.30196 4.84303 8.18691 5.32229 8.08754 5.80695L7.42862 6.6874C7.18806 7.0105 6.99456 7.32283 6.84813 7.62439C6.7017 7.92057 6.5945 8.24098 6.52651 8.58562C6.46376 8.92488 6.43238 9.32337 6.43238 9.7811V11.2027C6.43238 11.7197 6.5762 12.1263 6.86382 12.4225C7.15145 12.7186 7.55936 12.899 8.08754 12.9637C8.46407 13.0067 8.94519 13.0471 9.53091 13.0848C10.1218 13.1225 10.7677 13.1575 11.4685 13.1898C12.1745 13.2167 12.8935 13.2383 13.6257 13.2544C14.3578 13.2706 15.056 13.2787 15.7201 13.2787ZM9.67211 5.12843C9.73486 4.83764 9.8133 4.528 9.90744 4.19952C10.0068 3.87103 10.1088 3.56677 10.2134 3.28675C10.318 3.00135 10.4121 2.78056 10.4958 2.62439C10.6056 2.43592 10.7233 2.29591 10.8488 2.20436C10.9795 2.11282 11.1521 2.05089 11.3665 2.01858C11.6593 1.9755 12.1535 1.94319 12.8491 1.92165C13.5498 1.89472 14.5069 1.88126 15.7201 1.88126C16.9334 1.88126 17.8878 1.89203 18.5833 1.91357C19.2788 1.93511 19.7757 1.97011 20.0737 2.01858C20.2829 2.05089 20.4503 2.11282 20.5758 2.20436C20.7065 2.29591 20.8268 2.43592 20.9366 2.62439C21.0255 2.77517 21.1197 2.99327 21.219 3.27868C21.3236 3.5587 21.423 3.86564 21.5171 4.19952C21.6112 4.528 21.6923 4.83764 21.7603 5.12843C21.7969 5.27921 21.7838 5.38691 21.7211 5.45153C21.6635 5.51077 21.5589 5.535 21.4073 5.52423C20.9732 5.49731 20.4973 5.47038 19.9796 5.44346C19.4619 5.41653 18.8579 5.39499 18.1676 5.37884C17.4773 5.36268 16.6614 5.3546 15.7201 5.3546C14.7736 5.3546 13.9551 5.36268 13.2648 5.37884C12.5745 5.39499 11.9705 5.41653 11.4528 5.44346C10.935 5.47038 10.4592 5.49731 10.0251 5.52423C9.87344 5.535 9.76885 5.51077 9.71133 5.45153C9.6538 5.38691 9.64073 5.27921 9.67211 5.12843ZM10.0565 11.0977C9.70087 11.0977 9.40278 10.9739 9.16222 10.7262C8.92166 10.4731 8.80138 10.1634 8.80138 9.79725C8.80138 9.42569 8.92166 9.11605 9.16222 8.86834C9.40278 8.62062 9.70087 8.49677 10.0565 8.49677C10.4173 8.49677 10.718 8.62062 10.9586 8.86834C11.1991 9.11605 11.3194 9.42569 11.3194 9.79725C11.3194 10.1634 11.1991 10.4731 10.9586 10.7262C10.718 10.9739 10.4173 11.0977 10.0565 11.0977ZM13.6414 10.7746C13.3746 10.7746 13.155 10.6885 12.9824 10.5162C12.8151 10.3438 12.7314 10.1177 12.7314 9.83764C12.7314 9.563 12.8151 9.33953 12.9824 9.1672C13.155 8.99488 13.3746 8.90872 13.6414 8.90872H17.791C18.0577 8.90872 18.2748 8.99488 18.4421 9.1672C18.6147 9.33953 18.701 9.563 18.701 9.83764C18.701 10.1177 18.6147 10.3438 18.4421 10.5162C18.2748 10.6885 18.0577 10.7746 17.791 10.7746H13.6414ZM21.3759 11.0977C21.0151 11.0977 20.7144 10.9739 20.4738 10.7262C20.2332 10.4731 20.113 10.1634 20.113 9.79725C20.113 9.42569 20.2332 9.11605 20.4738 8.86834C20.7144 8.62062 21.0151 8.49677 21.3759 8.49677C21.7315 8.49677 22.0296 8.62062 22.2702 8.86834C22.5107 9.11605 22.631 9.42569 22.631 9.79725C22.631 10.1634 22.5107 10.4731 22.2702 10.7262C22.0296 10.9739 21.7315 11.0977 21.3759 11.0977ZM7.47568 15.5H8.40132C8.69417 15.5 8.93996 15.3977 9.13869 15.1931C9.33741 14.9884 9.43677 14.7353 9.43677 14.4338V12.4225L6.43238 10.9523V14.4338C6.43238 14.7353 6.53174 14.9884 6.73047 15.1931C6.93442 15.3977 7.18283 15.5 7.47568 15.5ZM23.0311 15.5H23.9567C24.2496 15.5 24.4953 15.3977 24.6941 15.1931C24.898 14.9884 25 14.7353 25 14.4338V10.9523L21.9956 12.4225V14.4338C21.9956 14.7353 22.095 14.9884 22.2937 15.1931C22.4924 15.3977 22.7382 15.5 23.0311 15.5ZM3.23972 5.20113C3.30248 4.91034 3.38092 4.6007 3.47505 4.27221C3.57442 3.94373 3.67639 3.63947 3.78099 3.35945C3.88558 3.07404 3.97971 2.85326 4.06338 2.69709C4.16797 2.50862 4.28564 2.36861 4.41638 2.27706C4.54712 2.18551 4.71708 2.12359 4.92626 2.09128C5.17728 2.05358 5.56427 2.02396 6.08723 2.00242C6.61542 1.98088 7.32141 1.96473 8.20521 1.95396C8.29934 1.66317 8.41178 1.40199 8.54252 1.17044C8.67849 0.933495 8.86152 0.710016 9.09162 0.5C7.99341 0.51077 7.09392 0.526925 6.39316 0.548465C5.69763 0.570005 5.23219 0.594238 4.99686 0.621163C4.4739 0.680398 4.01632 0.850027 3.6241 1.13005C3.23188 1.40468 2.93118 1.77087 2.722 2.22859C2.62786 2.42246 2.51543 2.71055 2.38469 3.09289C2.25395 3.46984 2.12059 3.89526 1.98463 4.36914C1.85389 4.84303 1.74145 5.32229 1.64732 5.80695L0.996235 6.6874C0.755674 7.0105 0.56218 7.32283 0.415752 7.62439C0.269323 7.92596 0.162117 8.24906 0.0941324 8.5937C0.0313775 8.93296 0 9.33145 0 9.78918L0.00784437 11.2108C0.0130739 11.7278 0.156887 12.1344 0.439285 12.4305C0.726911 12.7213 1.13482 12.899 1.66301 12.9637C2.06568 13.0121 2.59387 13.0579 3.24757 13.101C3.90127 13.1387 4.60464 13.171 5.3577 13.1979V9.78918C5.3577 9.33145 5.38908 8.93296 5.45184 8.5937C5.51982 8.24906 5.62703 7.92596 5.77345 7.62439C5.91988 7.32283 6.11076 7.0105 6.34609 6.6874L7.00502 5.80695L7.11484 5.44346C6.59711 5.45423 6.12907 5.46769 5.7107 5.48384C5.29756 5.5 4.91842 5.51885 4.57327 5.54039C4.22811 5.55654 3.90127 5.57539 3.59272 5.59693C3.44106 5.6077 3.33386 5.58347 3.2711 5.52423C3.21358 5.45961 3.20312 5.35191 3.23972 5.20113ZM2.95733 10.6616C2.62786 10.6616 2.35331 10.5485 2.13367 10.3223C1.91403 10.0907 1.8042 9.80802 1.8042 9.47415C1.8042 9.1349 1.91403 8.85218 2.13367 8.62601C2.35331 8.39984 2.62786 8.28675 2.95733 8.28675C3.28156 8.28675 3.5535 8.39984 3.77314 8.62601C3.99278 8.85218 4.1026 9.1349 4.1026 9.47415C4.1026 9.80802 3.99278 10.0907 3.77314 10.3223C3.5535 10.5485 3.28156 10.6616 2.95733 10.6616ZM1.05899 15.5H1.97678C2.27487 15.5 2.52066 15.3977 2.71415 15.1931C2.91288 14.9884 3.01224 14.7353 3.01224 14.4338V12.1801L0.00784437 10.7181V14.4418C0.00784437 14.7434 0.107206 14.9938 0.30593 15.1931C0.509884 15.3977 0.760904 15.5 1.05899 15.5Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CarsFillIcon);
export default ForwardRef;