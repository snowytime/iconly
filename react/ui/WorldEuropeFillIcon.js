import * as React from "react";
import { forwardRef } from "react";
const WorldEuropeFillIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M8.32941 13.9529C8.6902 13.9529 9.03268 13.8379 9.35686 13.6078C9.68628 13.3726 9.98431 13.0928 10.251 12.7686C10.5176 12.4392 10.7425 12.1255 10.9255 11.8275C11.1137 11.5294 11.2471 11.315 11.3255 11.1843C11.5242 10.8601 11.6078 10.549 11.5765 10.251C11.5503 9.94771 11.5373 9.69673 11.5373 9.49804C11.5373 9.40392 11.6052 9.27843 11.7412 9.12157C11.8824 8.96471 12.0209 8.78431 12.1569 8.58039C12.298 8.37647 12.3686 8.16209 12.3686 7.93726C12.3686 7.76471 12.2876 7.60261 12.1255 7.45098C11.9634 7.29412 11.7752 7.14771 11.5608 7.01177C11.3516 6.87059 11.166 6.74248 11.0039 6.62745C10.8418 6.51242 10.7608 6.40523 10.7608 6.30588C10.7608 6.18039 10.8 6.07059 10.8784 5.97647C10.9621 5.88235 11.0536 5.83529 11.1529 5.83529C11.2418 5.83529 11.3542 5.8902 11.4902 6C11.6314 6.1098 11.7804 6.23791 11.9373 6.38431C12.0993 6.52549 12.2562 6.65098 12.4078 6.76078C12.5647 6.87059 12.7033 6.92549 12.8235 6.92549C12.9281 6.92549 13.0065 6.90458 13.0588 6.86275C13.1111 6.81569 13.1556 6.76863 13.1922 6.72157C13.2288 6.67451 13.2758 6.65098 13.3333 6.65098C13.4327 6.65098 13.519 6.76863 13.5922 7.00392C13.6706 7.23399 13.7621 7.51373 13.8667 7.84314C13.9712 8.17255 14.1124 8.48627 14.2902 8.78431C14.4732 9.08235 14.719 9.29935 15.0275 9.4353C15.1948 9.2366 15.3255 9.02222 15.4196 8.79216C15.519 8.56209 15.5686 8.29804 15.5686 8C15.5686 6.98039 15.3726 6.01569 14.9804 5.10588C14.5882 4.19085 14.0444 3.38301 13.349 2.68235C12.6536 1.9817 11.8484 1.43268 10.9333 1.03529C10.0183 0.63268 9.03791 0.431373 7.99216 0.431373C7.21307 0.436601 6.59085 0.52549 6.12549 0.698039C5.66013 0.86536 5.32288 1.07974 5.11373 1.34118C4.90458 1.59739 4.8 1.85621 4.8 2.11765C4.8 2.37386 4.75817 2.58824 4.67451 2.76078C4.59085 2.93333 4.4915 3.08497 4.37647 3.21569C4.26667 3.34118 4.16993 3.46405 4.08627 3.58431C4.00261 3.70458 3.96078 3.84314 3.96078 4C3.96078 4.19346 4.02353 4.35033 4.14902 4.47059C4.27451 4.59085 4.44444 4.65098 4.65882 4.65098C4.88889 4.65098 5.06667 4.60131 5.19216 4.50196C5.32288 4.40261 5.42745 4.28758 5.50588 4.15686C5.58954 4.02614 5.66797 3.91111 5.74118 3.81176C5.81438 3.71242 5.9085 3.66275 6.02353 3.66275C6.13856 3.66275 6.2536 3.70719 6.36863 3.79608C6.48889 3.88497 6.61961 3.97386 6.76078 4.06275C6.90196 4.14641 7.06928 4.18824 7.26275 4.18824C7.39346 4.18824 7.4902 4.15163 7.55294 4.07843C7.62092 4 7.65752 3.90327 7.66275 3.78824C7.6732 3.73595 7.68889 3.69935 7.7098 3.67843C7.73595 3.65229 7.77255 3.63922 7.81961 3.63922C7.98693 3.63922 8.15163 3.6915 8.31373 3.79608C8.47582 3.89543 8.60915 4.0183 8.71373 4.16471C8.82353 4.30588 8.87843 4.43399 8.87843 4.54902C8.87843 4.71111 8.84967 4.84967 8.79216 4.96471C8.73464 5.07451 8.65359 5.12941 8.54902 5.12941C8.42876 5.12941 8.25882 5.09543 8.03922 5.02745C7.82484 4.95948 7.58431 4.8915 7.31765 4.82353C7.05621 4.75033 6.79477 4.71373 6.53333 4.71373C5.94771 4.71373 5.40915 4.83922 4.91765 5.0902C4.43137 5.34118 4.04183 5.6732 3.74902 6.08628C3.45621 6.49935 3.3098 6.95425 3.3098 7.45098C3.3098 8.09412 3.49281 8.59608 3.85882 8.95686C4.22484 9.31765 4.73987 9.49804 5.40392 9.49804C5.81177 9.49804 6.14641 9.62092 6.40784 9.86667C6.67451 10.1072 6.80784 10.4157 6.80784 10.7922C6.80784 11.085 6.81046 11.4118 6.81569 11.7725C6.82614 12.1333 6.87059 12.481 6.94902 12.8157C7.03268 13.1451 7.17909 13.417 7.38824 13.6314C7.60261 13.8458 7.91634 13.9529 8.32941 13.9529ZM10.3059 3.27059C10.1647 3.27059 10.0497 3.29673 9.96078 3.34902C9.87712 3.39608 9.77255 3.41961 9.64706 3.41961C9.5268 3.41961 9.42484 3.38301 9.34118 3.3098C9.26275 3.23137 9.22353 3.12941 9.22353 3.00392C9.22353 2.81569 9.31242 2.6719 9.4902 2.57255C9.66797 2.46797 9.91895 2.41569 10.2431 2.41569C10.5203 2.41569 10.7503 2.47843 10.9333 2.60392C11.1163 2.72941 11.2078 2.88366 11.2078 3.06667C11.2078 3.17124 11.1791 3.26013 11.1216 3.33333C11.0641 3.40131 10.9909 3.43529 10.902 3.43529C10.7608 3.43529 10.6458 3.40915 10.5569 3.35686C10.4732 3.29935 10.3895 3.27059 10.3059 3.27059ZM8 16C9.09281 16 10.1203 15.7909 11.0824 15.3726C12.0497 14.9542 12.902 14.3765 13.6392 13.6392C14.3765 12.902 14.9542 12.0523 15.3726 11.0902C15.7909 10.1229 16 9.09281 16 8C16 6.90719 15.7909 5.87974 15.3726 4.91765C14.9542 3.95033 14.3765 3.09804 13.6392 2.36078C12.902 1.62353 12.0497 1.04575 11.0824 0.627451C10.115 0.20915 9.08497 0 7.99216 0C6.89935 0 5.86928 0.20915 4.90196 0.627451C3.93987 1.04575 3.0902 1.62353 2.35294 2.36078C1.62092 3.09804 1.04575 3.95033 0.627451 4.91765C0.20915 5.87974 0 6.90719 0 8C0 9.09281 0.20915 10.1229 0.627451 11.0902C1.04575 12.0523 1.62353 12.902 2.36078 13.6392C3.09804 14.3765 3.94771 14.9542 4.9098 15.3726C5.87712 15.7909 6.90719 16 8 16ZM8 14.9333C7.0536 14.9333 6.16209 14.7503 5.32549 14.3843C4.48889 14.0235 3.75163 13.5242 3.11373 12.8863C2.47582 12.2484 1.97386 11.5111 1.60784 10.6745C1.24706 9.83791 1.06667 8.94641 1.06667 8C1.06667 7.0536 1.24706 6.16209 1.60784 5.32549C1.97386 4.48889 2.4732 3.75163 3.10588 3.11373C3.74379 2.47582 4.48105 1.97647 5.31765 1.61569C6.15425 1.24967 7.04575 1.06667 7.99216 1.06667C8.93856 1.06667 9.83007 1.24967 10.6667 1.61569C11.5033 1.97647 12.2405 2.47582 12.8784 3.11373C13.5216 3.75163 14.0235 4.48889 14.3843 5.32549C14.7503 6.16209 14.9333 7.0536 14.9333 8C14.9333 8.94641 14.7503 9.83791 14.3843 10.6745C14.0235 11.5111 13.5242 12.2484 12.8863 12.8863C12.2484 13.5242 11.5111 14.0235 10.6745 14.3843C9.83791 14.7503 8.94641 14.9333 8 14.9333Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(WorldEuropeFillIcon);
export default ForwardRef;