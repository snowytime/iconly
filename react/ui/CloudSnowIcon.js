import * as React from "react";
import { forwardRef } from "react";
const CloudSnowIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 18 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M3.70565 12.5439H13.4901C14.1367 12.5439 14.7332 12.43 15.2799 12.2021C15.8318 11.9742 16.3101 11.6562 16.7148 11.2481C17.1248 10.84 17.4402 10.3683 17.661 9.83305C17.887 9.29777 18 8.72538 18 8.1159C18 7.47992 17.8791 6.89693 17.6373 6.36695C17.4008 5.83166 17.067 5.36792 16.636 4.97573C16.2102 4.57824 15.7109 4.27085 15.138 4.05356C14.565 3.83626 13.9448 3.72762 13.2773 3.72762C12.9514 3.07573 12.5335 2.50865 12.0237 2.02636C11.5191 1.53877 10.9435 1.16248 10.297 0.89749C9.65046 0.632497 8.94612 0.5 8.18397 0.5C7.44284 0.5 6.74376 0.637796 6.08673 0.913389C5.43495 1.18368 4.85151 1.55997 4.3364 2.04226C3.82129 2.52455 3.40342 3.08633 3.08279 3.72762C2.76741 4.3689 2.57819 5.05788 2.51511 5.79456C2.03679 5.93236 1.60841 6.16025 1.22996 6.47824C0.851511 6.79093 0.551905 7.17252 0.331143 7.62301C0.110381 8.0735 0 8.57964 0 9.14142C0 9.76681 0.144547 10.3392 0.43364 10.8586C0.727989 11.3727 1.15112 11.7834 1.70302 12.0908C2.25493 12.3929 2.92247 12.5439 3.70565 12.5439ZM3.68988 11.272C3.14849 11.272 2.69908 11.1792 2.34166 10.9937C1.98423 10.8082 1.71353 10.5591 1.52957 10.2464C1.35085 9.92845 1.2615 9.57336 1.2615 9.18117C1.2615 8.70418 1.40867 8.2696 1.70302 7.87741C1.99737 7.47992 2.48095 7.19107 3.15375 7.01088C3.37451 6.95258 3.52957 6.86513 3.61892 6.74854C3.70828 6.63194 3.76347 6.46234 3.78449 6.23975C3.82654 5.58787 3.97109 4.99163 4.21813 4.45105C4.47043 3.90516 4.79632 3.43347 5.1958 3.03598C5.59527 2.63319 6.04993 2.32315 6.55979 2.10586C7.0749 1.88326 7.61629 1.77197 8.18397 1.77197C9.07227 1.77197 9.85808 2.01046 10.5414 2.48745C11.2247 2.95914 11.7792 3.63487 12.205 4.51464C12.2943 4.71074 12.4047 4.84854 12.5361 4.92803C12.6675 5.00223 12.8515 5.03933 13.088 5.03933C13.866 5.03933 14.5256 5.18243 15.067 5.46862C15.6137 5.74951 16.0289 6.1258 16.3127 6.59749C16.5966 7.06918 16.7385 7.58591 16.7385 8.1477C16.7385 8.72538 16.5992 9.25007 16.3206 9.72176C16.042 10.1934 15.6636 10.5697 15.1853 10.8506C14.707 11.1315 14.1682 11.272 13.569 11.272H3.68988ZM4.15506 16.5109C4.22865 16.5109 4.28647 16.4817 4.32852 16.4234C4.37582 16.3704 4.39685 16.3068 4.39159 16.2326L4.34428 15.4695L4.96715 15.8987C5.02497 15.9411 5.09067 15.9544 5.16426 15.9385C5.23784 15.9226 5.29566 15.8855 5.33771 15.8272C5.37451 15.7689 5.38239 15.7 5.36137 15.6205C5.34034 15.5463 5.29041 15.4907 5.21156 15.4536L4.54139 15.1197L5.21945 14.7778C5.29304 14.746 5.33771 14.693 5.35348 14.6188C5.37451 14.5446 5.37188 14.4757 5.3456 14.4121C5.3088 14.3485 5.25099 14.3114 5.17214 14.3008C5.0933 14.2902 5.02497 14.3035 4.96715 14.3406L4.34428 14.7778L4.39947 14.0146C4.40999 13.9351 4.38896 13.8689 4.3364 13.8159C4.28909 13.7629 4.22865 13.7364 4.15506 13.7364C4.07096 13.7364 4.00526 13.7629 3.95795 13.8159C3.9159 13.8689 3.8975 13.9351 3.90276 14.0146L3.95007 14.7778L3.31932 14.3406C3.2615 14.3035 3.1958 14.2902 3.12221 14.3008C3.04862 14.3114 2.99343 14.3485 2.95664 14.4121C2.9251 14.4757 2.91721 14.5446 2.93298 14.6188C2.94875 14.6877 2.99343 14.7407 3.06702 14.7778L3.74507 15.1197L3.06702 15.4536C2.99343 15.4907 2.94612 15.5463 2.9251 15.6205C2.90407 15.6947 2.91196 15.7636 2.94875 15.8272C2.98555 15.8908 3.04074 15.9279 3.11432 15.9385C3.19317 15.9544 3.2615 15.9438 3.31932 15.9067L3.95007 15.4774L3.91064 16.2326C3.90539 16.3068 3.92378 16.3704 3.96583 16.4234C4.00788 16.4817 4.07096 16.5109 4.15506 16.5109ZM8.523 16.5109C8.59658 16.5109 8.6544 16.4817 8.69645 16.4234C8.74376 16.3704 8.76478 16.3068 8.75953 16.2326L8.71222 15.4695L9.33509 15.8987C9.3929 15.9411 9.45861 15.9544 9.53219 15.9385C9.60578 15.9226 9.6636 15.8855 9.70565 15.8272C9.74244 15.7689 9.75033 15.7 9.7293 15.6205C9.70828 15.5463 9.65834 15.4907 9.5795 15.4536L8.90145 15.1197L9.58739 14.7778C9.66097 14.746 9.70565 14.693 9.72142 14.6188C9.74244 14.5446 9.73982 14.4757 9.71354 14.4121C9.67674 14.3485 9.61892 14.3114 9.54008 14.3008C9.46124 14.2902 9.3929 14.3035 9.33509 14.3406L8.71222 14.7778L8.76741 14.0146C8.77792 13.9351 8.7569 13.8689 8.70434 13.8159C8.65703 13.7629 8.59658 13.7364 8.523 13.7364C8.4389 13.7364 8.37319 13.7629 8.32589 13.8159C8.28384 13.8689 8.26544 13.9351 8.2707 14.0146L8.318 14.7778L7.67937 14.3406C7.62681 14.3035 7.56373 14.2902 7.49014 14.3008C7.41656 14.3114 7.36137 14.3485 7.32457 14.4121C7.28778 14.4757 7.27727 14.5446 7.29304 14.6188C7.31406 14.6877 7.36137 14.7407 7.43495 14.7778L8.11301 15.1197L7.43495 15.4536C7.36137 15.4907 7.31406 15.5463 7.29304 15.6205C7.27201 15.6947 7.27989 15.7636 7.31669 15.8272C7.35348 15.8908 7.40867 15.9279 7.48226 15.9385C7.5611 15.9544 7.62681 15.9438 7.67937 15.9067L8.318 15.4774L8.27858 16.2326C8.27332 16.3068 8.29172 16.3704 8.33377 16.4234C8.37582 16.4817 8.4389 16.5109 8.523 16.5109ZM12.8909 16.5109C12.9645 16.5109 13.0223 16.4817 13.0644 16.4234C13.1117 16.3704 13.1327 16.3068 13.1275 16.2326L13.0723 15.4695L13.703 15.8987C13.7608 15.9411 13.8265 15.9544 13.9001 15.9385C13.9737 15.9226 14.0315 15.8855 14.0736 15.8272C14.1104 15.7689 14.1183 15.7 14.0972 15.6205C14.0762 15.5463 14.0263 15.4907 13.9474 15.4536L13.2694 15.1197L13.9553 14.7778C14.0289 14.746 14.0736 14.693 14.0894 14.6188C14.1104 14.5446 14.1078 14.4757 14.0815 14.4121C14.0447 14.3485 13.9869 14.3114 13.908 14.3008C13.8292 14.2902 13.7608 14.3035 13.703 14.3406L13.0723 14.7778L13.1353 14.0146C13.1459 13.9351 13.1248 13.8689 13.0723 13.8159C13.025 13.7629 12.9645 13.7364 12.8909 13.7364C12.8068 13.7364 12.7411 13.7629 12.6938 13.8159C12.6518 13.8689 12.6334 13.9351 12.6386 14.0146L12.6859 14.7778L12.0473 14.3406C11.9947 14.3035 11.9317 14.2902 11.8581 14.3008C11.7845 14.3114 11.7293 14.3485 11.6925 14.4121C11.6557 14.4757 11.6452 14.5446 11.661 14.6188C11.682 14.6877 11.7293 14.7407 11.8029 14.7778L12.4809 15.1197L11.8029 15.4536C11.7293 15.4907 11.682 15.5463 11.661 15.6205C11.6399 15.6947 11.6478 15.7636 11.6846 15.8272C11.7214 15.8908 11.7766 15.9279 11.8502 15.9385C11.929 15.9544 11.9947 15.9438 12.0473 15.9067L12.6859 15.4774L12.6465 16.2326C12.6413 16.3068 12.6597 16.3704 12.7017 16.4234C12.7438 16.4817 12.8068 16.5109 12.8909 16.5109ZM2.44415 19.5C2.51774 19.5 2.57556 19.4709 2.61761 19.4126C2.66491 19.3543 2.68594 19.288 2.68068 19.2138L2.63338 18.4586L3.25624 18.8879C3.31406 18.925 3.37976 18.9356 3.45335 18.9197C3.52694 18.9091 3.58476 18.872 3.62681 18.8084C3.6636 18.7501 3.67148 18.6812 3.65046 18.6017C3.62944 18.5275 3.5795 18.4718 3.50066 18.4347L2.83049 18.1088L3.50854 17.7669C3.58213 17.7298 3.62681 17.6742 3.64258 17.6C3.6636 17.5258 3.66097 17.4596 3.63469 17.4013C3.5979 17.3377 3.54008 17.2979 3.46124 17.282C3.38239 17.2714 3.31406 17.2847 3.25624 17.3218L2.63338 17.7669L2.68857 16.9958C2.69908 16.9216 2.67806 16.8554 2.62549 16.7971C2.57819 16.7441 2.51774 16.7176 2.44415 16.7176C2.36005 16.7176 2.29435 16.7441 2.24704 16.7971C2.20499 16.8554 2.1866 16.9216 2.19185 16.9958L2.23916 17.7669L1.60841 17.3218C1.55059 17.2847 1.48489 17.2714 1.4113 17.282C1.33771 17.2926 1.28252 17.3324 1.24573 17.4013C1.21419 17.4596 1.20631 17.5232 1.22208 17.5921C1.23784 17.6662 1.28252 17.7245 1.35611 17.7669L2.03417 18.1088L1.35611 18.4427C1.28252 18.4745 1.23522 18.5275 1.21419 18.6017C1.19317 18.6759 1.20105 18.7448 1.23784 18.8084C1.27464 18.8773 1.32983 18.917 1.40342 18.9276C1.48226 18.9382 1.55059 18.925 1.60841 18.8879L2.23916 18.4586L2.19974 19.2138C2.19448 19.288 2.21288 19.3543 2.25493 19.4126C2.29698 19.4709 2.36005 19.5 2.44415 19.5ZM6.81209 19.5C6.88568 19.5 6.9435 19.4709 6.98555 19.4126C7.03285 19.3543 7.05388 19.288 7.04862 19.2138L7.00131 18.4586L7.62418 18.8879C7.682 18.925 7.7477 18.9356 7.82129 18.9197C7.89488 18.9091 7.95269 18.872 7.99474 18.8084C8.03154 18.7501 8.03942 18.6812 8.0184 18.6017C7.99737 18.5275 7.94744 18.4718 7.86859 18.4347L7.19054 18.1088L7.87648 17.7669C7.95007 17.7298 7.99474 17.6742 8.01051 17.6C8.03154 17.5258 8.02891 17.4596 8.00263 17.4013C7.96583 17.3377 7.90802 17.2979 7.82917 17.282C7.75033 17.2714 7.682 17.2847 7.62418 17.3218L7.00131 17.7669L7.0565 16.9958C7.06702 16.9216 7.04599 16.8554 6.99343 16.7971C6.94612 16.7441 6.88568 16.7176 6.81209 16.7176C6.72799 16.7176 6.66229 16.7441 6.61498 16.7971C6.57293 16.8554 6.55453 16.9216 6.55979 16.9958L6.6071 17.7669L5.96846 17.3218C5.9159 17.2847 5.85283 17.2714 5.77924 17.282C5.70565 17.2926 5.65046 17.3324 5.61367 17.4013C5.58213 17.4596 5.57424 17.5232 5.59001 17.5921C5.60578 17.6662 5.65046 17.7245 5.72405 17.7669L6.4021 18.1088L5.72405 18.4427C5.65046 18.4745 5.60315 18.5275 5.58213 18.6017C5.5611 18.6759 5.56899 18.7448 5.60578 18.8084C5.64258 18.8773 5.69777 18.917 5.77135 18.9276C5.8502 18.9382 5.9159 18.925 5.96846 18.8879L6.6071 18.4586L6.56767 19.2138C6.56242 19.288 6.58081 19.3543 6.62286 19.4126C6.66491 19.4709 6.72799 19.5 6.81209 19.5ZM11.18 19.5C11.2536 19.5 11.3114 19.4709 11.3535 19.4126C11.4008 19.3543 11.4218 19.288 11.4166 19.2138L11.3614 18.4586L11.9921 18.8879C12.0499 18.925 12.1156 18.9356 12.1892 18.9197C12.2628 18.9091 12.3206 18.872 12.3627 18.8084C12.3995 18.7501 12.4074 18.6812 12.3863 18.6017C12.3653 18.5275 12.3154 18.4718 12.2365 18.4347L11.5585 18.1088L12.2444 17.7669C12.318 17.7298 12.3627 17.6742 12.3784 17.6C12.3995 17.5258 12.3968 17.4596 12.3706 17.4013C12.3338 17.3377 12.276 17.2979 12.1971 17.282C12.1183 17.2714 12.0499 17.2847 11.9921 17.3218L11.3614 17.7669L11.4244 16.9958C11.435 16.9216 11.4139 16.8554 11.3614 16.7971C11.3141 16.7441 11.2536 16.7176 11.18 16.7176C11.0959 16.7176 11.0302 16.7441 10.9829 16.7971C10.9409 16.8554 10.9225 16.9216 10.9277 16.9958L10.975 17.7669L10.3364 17.3218C10.2838 17.2847 10.2208 17.2714 10.1472 17.282C10.0736 17.2926 10.0184 17.3324 9.9816 17.4013C9.94481 17.4596 9.9343 17.5232 9.95007 17.5921C9.97109 17.6662 10.0184 17.7245 10.092 17.7669L10.77 18.1088L10.092 18.4427C10.0184 18.4745 9.97109 18.5275 9.95007 18.6017C9.92904 18.6759 9.93692 18.7448 9.97372 18.8084C10.0105 18.8773 10.0657 18.917 10.1393 18.9276C10.2181 18.9382 10.2838 18.925 10.3364 18.8879L10.975 18.4586L10.9356 19.2138C10.9304 19.288 10.9488 19.3543 10.9908 19.4126C11.0329 19.4709 11.0959 19.5 11.18 19.5Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CloudSnowIcon);
export default ForwardRef;