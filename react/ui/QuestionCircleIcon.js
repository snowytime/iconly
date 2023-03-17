import * as React from "react";
import { forwardRef } from "react";
const QuestionCircleIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 16 16",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M8 16C9.09281 16 10.1203 15.7909 11.0824 15.3726C12.0497 14.9542 12.902 14.3765 13.6392 13.6392C14.3765 12.902 14.9542 12.0523 15.3726 11.0902C15.7909 10.1229 16 9.09281 16 8C16 6.90719 15.7909 5.87974 15.3726 4.91765C14.9542 3.95033 14.3765 3.09804 13.6392 2.36078C12.902 1.62353 12.0497 1.04575 11.0824 0.627451C10.115 0.20915 9.08497 0 7.99216 0C6.89935 0 5.86928 0.20915 4.90196 0.627451C3.93987 1.04575 3.0902 1.62353 2.35294 2.36078C1.62092 3.09804 1.04575 3.95033 0.627451 4.91765C0.20915 5.87974 0 6.90719 0 8C0 9.09281 0.20915 10.1229 0.627451 11.0902C1.04575 12.0523 1.62353 12.902 2.36078 13.6392C3.09804 14.3765 3.94771 14.9542 4.9098 15.3726C5.87712 15.7909 6.90719 16 8 16ZM8 14.6667C7.07451 14.6667 6.20915 14.4941 5.40392 14.149C4.59869 13.8039 3.8902 13.3281 3.27843 12.7216C2.6719 12.1098 2.19608 11.4013 1.85098 10.5961C1.51111 9.79085 1.34118 8.92549 1.34118 8C1.34118 7.07451 1.51111 6.20915 1.85098 5.40392C2.19608 4.59869 2.6719 3.8902 3.27843 3.27843C3.88497 2.66667 4.59085 2.19085 5.39608 1.85098C6.20131 1.50588 7.06667 1.33333 7.99216 1.33333C8.91765 1.33333 9.78301 1.50588 10.5882 1.85098C11.3987 2.19085 12.1072 2.66667 12.7137 3.27843C13.3255 3.8902 13.8039 4.59869 14.149 5.40392C14.4941 6.20915 14.6667 7.07451 14.6667 8C14.6667 8.92549 14.4941 9.79085 14.149 10.5961C13.8092 11.4013 13.3333 12.1098 12.7216 12.7216C12.1098 13.3281 11.4013 13.8039 10.5961 14.149C9.79085 14.4941 8.92549 14.6667 8 14.6667ZM7.84314 9.62353C8.0366 9.62353 8.18824 9.56863 8.29804 9.45882C8.41307 9.34902 8.47059 9.2183 8.47059 9.06667C8.47059 9.05098 8.47059 9.03529 8.47059 9.01961C8.47059 8.99869 8.47059 8.98301 8.47059 8.97255C8.47059 8.75294 8.53595 8.56471 8.66667 8.40784C8.79739 8.24575 9.00131 8.0732 9.27843 7.8902C9.6549 7.63922 9.96601 7.37778 10.2118 7.10588C10.4575 6.83399 10.5804 6.46275 10.5804 5.99216C10.5804 5.55817 10.4627 5.19216 10.2275 4.89412C9.99739 4.59608 9.69412 4.37124 9.31765 4.21961C8.94118 4.06275 8.53072 3.98431 8.08628 3.98431C7.41177 3.98431 6.86013 4.12288 6.43137 4.4C6.00784 4.6719 5.74118 4.98824 5.63137 5.34902C5.61046 5.41177 5.59477 5.47451 5.58431 5.53726C5.57386 5.6 5.56863 5.66536 5.56863 5.73333C5.56863 5.91111 5.62614 6.04706 5.74118 6.14118C5.85621 6.23007 5.97908 6.27451 6.1098 6.27451C6.24052 6.27451 6.35033 6.24575 6.43922 6.18824C6.53333 6.13072 6.61438 6.0549 6.68235 5.96078L6.82353 5.77255C6.91765 5.62091 7.02484 5.49281 7.1451 5.38824C7.26536 5.27843 7.39869 5.19477 7.5451 5.13726C7.69673 5.07974 7.85882 5.05098 8.03137 5.05098C8.39216 5.05098 8.67974 5.1451 8.89412 5.33333C9.1085 5.51634 9.21569 5.75686 9.21569 6.0549C9.21569 6.32157 9.13203 6.54118 8.96471 6.71373C8.79739 6.88105 8.54118 7.08497 8.19608 7.32549C7.91373 7.51895 7.67843 7.73333 7.4902 7.96863C7.30719 8.20392 7.21569 8.51503 7.21569 8.90196C7.21569 8.91765 7.21569 8.93595 7.21569 8.95686C7.21569 8.97255 7.21569 8.98824 7.21569 9.00392C7.21569 9.41699 7.42484 9.62353 7.84314 9.62353ZM7.81961 11.9608C8.04967 11.9608 8.24837 11.8824 8.41569 11.7255C8.58301 11.5686 8.66667 11.3752 8.66667 11.1451C8.66667 10.915 8.58301 10.7216 8.41569 10.5647C8.24837 10.4078 8.04967 10.3294 7.81961 10.3294C7.58954 10.3294 7.39085 10.4105 7.22353 10.5725C7.06144 10.7294 6.98039 10.9203 6.98039 11.1451C6.98039 11.3699 7.06405 11.5634 7.23137 11.7255C7.39869 11.8824 7.59477 11.9608 7.81961 11.9608Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(QuestionCircleIcon);
export default ForwardRef;