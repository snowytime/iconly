import * as React from "react";
import { forwardRef } from "react";
const FigureFishingIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 19 16",
  fill: "none",
  color: "rgb(var(--foreground, 0, 0, 0))",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M4.36478 3.44773C4.67767 3.44773 4.96187 3.37147 5.21739 3.21894C5.47813 3.06114 5.68411 2.85076 5.83534 2.58777C5.99179 2.32479 6.07001 2.03287 6.07001 1.71203C6.07001 1.39645 5.99179 1.1098 5.83534 0.852071C5.68411 0.594346 5.47813 0.389218 5.21739 0.236686C4.96187 0.0788955 4.67767 0 4.36478 0C4.0519 0 3.76508 0.0788955 3.50435 0.236686C3.24361 0.389218 3.03502 0.594346 2.87858 0.852071C2.72735 1.1098 2.65173 1.39645 2.65173 1.71203C2.65173 2.03287 2.72735 2.32479 2.87858 2.58777C3.03502 2.85076 3.24361 3.06114 3.50435 3.21894C3.76508 3.37147 4.0519 3.44773 4.36478 3.44773ZM2.64391 13.641C2.93594 13.5358 3.20971 13.4175 3.46524 13.286C3.72076 13.1545 3.98932 13.0335 4.27092 12.9231L4.39607 11.7712C4.40128 11.7291 4.42475 11.7055 4.46647 11.7002C4.5134 11.6897 4.54469 11.7028 4.56034 11.7396L5.03749 12.7022C5.16264 12.6759 5.29562 12.6548 5.43641 12.6391C5.57721 12.6233 5.72844 12.6154 5.8901 12.6154C6.08304 12.6154 6.25774 12.6312 6.41418 12.6627C6.57062 12.689 6.71403 12.7258 6.8444 12.7732L6.05436 10.6272V5.87771C6.05436 5.44116 5.90835 5.06509 5.61632 4.74951C5.3243 4.43393 4.90972 4.27613 4.3726 4.27613H4.00496C3.68686 4.27613 3.35312 4.31821 3.00373 4.40237C2.65434 4.48126 2.31796 4.68113 1.99464 5.00197L0.21902 6.78501C0.0730066 6.93228 0 7.11374 0 7.32939C0 7.54504 0.0730066 7.72387 0.21902 7.86588L2.64391 10.2801V13.641ZM2.64391 8.15779L1.83038 7.32939L2.40143 6.74556C2.44836 6.69823 2.50051 6.68508 2.55787 6.70611C2.61523 6.72715 2.64391 6.77449 2.64391 6.84813V8.15779ZM1.18114 11.432L17.7406 1.18343C17.8449 1.12032 17.9101 1.0309 17.9362 0.915187C17.9623 0.794214 17.9388 0.678501 17.8658 0.568047C17.8032 0.462853 17.7146 0.397107 17.5998 0.370809C17.4851 0.34451 17.3756 0.365549 17.2713 0.433925L0.719636 10.6746C0.615341 10.7429 0.547549 10.835 0.516261 10.9507C0.490187 11.0664 0.513654 11.1795 0.58666 11.2899C0.649237 11.3951 0.737888 11.4609 0.852613 11.4872C0.967337 11.5135 1.07685 11.4951 1.18114 11.432ZM0.923012 16H1.72087C2.24235 16 2.67781 15.9343 3.0272 15.8028C3.3818 15.6713 3.69469 15.5187 3.96585 15.3452C4.23702 15.1769 4.50819 15.027 4.77935 14.8955C5.05052 14.764 5.36862 14.6982 5.73365 14.6982C6.09347 14.6982 6.40897 14.764 6.68013 14.8955C6.9513 15.027 7.22247 15.1769 7.49364 15.3452C7.77002 15.5187 8.0829 15.6713 8.43229 15.8028C8.78689 15.9343 9.22493 16 9.74641 16C10.2679 16 10.7033 15.9343 11.0527 15.8028C11.4073 15.6713 11.7202 15.5187 11.9914 15.3452C12.2625 15.1769 12.5337 15.027 12.8049 14.8955C13.0813 14.764 13.3994 14.6982 13.7592 14.6982C14.119 14.6982 14.4345 14.764 14.7056 14.8955C14.982 15.027 15.2558 15.1769 15.527 15.3452C15.7981 15.5187 16.1084 15.6713 16.4578 15.8028C16.8124 15.9343 17.2504 16 17.7719 16H18.5698C18.6897 16 18.7914 15.9579 18.8748 15.8738C18.9583 15.7896 19 15.687 19 15.5661C19 15.4398 18.9583 15.3346 18.8748 15.2505C18.7914 15.1663 18.6897 15.1243 18.5698 15.1243H17.7719C17.3965 15.1243 17.0679 15.0585 16.7863 14.927C16.5047 14.7955 16.2257 14.643 15.9494 14.4694C15.6782 14.3011 15.3705 14.1512 15.0264 14.0197C14.6822 13.8882 14.2598 13.8225 13.7592 13.8225C13.2586 13.8225 12.8362 13.8882 12.492 14.0197C12.1478 14.1512 11.8375 14.3011 11.5611 14.4694C11.29 14.643 11.0136 14.7955 10.732 14.927C10.4504 15.0585 10.1219 15.1243 9.74641 15.1243C9.37095 15.1243 9.04242 15.0585 8.76082 14.927C8.47922 14.7955 8.20024 14.643 7.92385 14.4694C7.65269 14.3011 7.34502 14.1512 7.00084 14.0197C6.65667 13.8882 6.23427 13.8225 5.73365 13.8225C5.23304 13.8225 4.81064 13.8882 4.46647 14.0197C4.1223 14.1512 3.81202 14.3011 3.53564 14.4694C3.26447 14.643 2.98809 14.7955 2.70649 14.927C2.42489 15.0585 2.09633 15.1243 1.72087 15.1243H0.923012C0.803072 15.1243 0.698777 15.1663 0.610126 15.2505C0.52669 15.3346 0.484972 15.4398 0.484972 15.5661C0.484972 15.687 0.52669 15.7896 0.610126 15.8738C0.698777 15.9579 0.803072 16 0.923012 16Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(FigureFishingIcon);
export default ForwardRef;