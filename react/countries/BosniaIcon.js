import * as React from "react";
import { forwardRef } from "react";
const BosniaIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 36 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M36 24H0V0H36",
  fill: "#41479B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M31.034 0V24L7.448 0H31.034Z",
  fill: "#FFE15A"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.413 12.088L14.493 11.418L13.573 12.088C13.5572 12.099 13.5383 12.1048 13.519 12.1044C13.4998 12.1041 13.4811 12.0978 13.4656 12.0863C13.4502 12.0748 13.4387 12.0588 13.4328 12.0404C13.427 12.0221 13.427 12.0023 13.433 11.984L13.774 10.887L12.864 10.204C12.8483 10.1925 12.8365 10.1763 12.8305 10.1577C12.8245 10.1391 12.8245 10.1191 12.8304 10.1005C12.8364 10.082 12.8481 10.0657 12.8638 10.0541C12.8795 10.0426 12.8985 10.0362 12.918 10.036L14.048 10.027L14.406 8.937C14.4114 8.91823 14.4228 8.90171 14.4384 8.88996C14.454 8.87821 14.473 8.87185 14.4925 8.87185C14.512 8.87185 14.531 8.87821 14.5466 8.88996C14.5622 8.90171 14.5736 8.91823 14.579 8.937L14.937 10.027L16.067 10.037C16.0863 10.0375 16.1049 10.0439 16.1203 10.0555C16.1358 10.067 16.1473 10.083 16.1532 10.1014C16.1591 10.1197 16.1592 10.1394 16.1534 10.1578C16.1477 10.1762 16.1363 10.1923 16.121 10.204L15.211 10.887L15.553 11.984C15.559 12.0023 15.559 12.0221 15.5532 12.0404C15.5473 12.0588 15.5358 12.0748 15.5204 12.0863C15.5049 12.0978 15.4862 12.1041 15.467 12.1044C15.4477 12.1048 15.4288 12.099 15.413 12.088ZM12.967 9.353L12.625 8.256L13.535 7.572C13.5503 7.56039 13.5616 7.54434 13.5674 7.52604C13.5732 7.50775 13.5732 7.4881 13.5674 7.46981C13.5616 7.45152 13.5503 7.43547 13.535 7.42386C13.5197 7.41226 13.5012 7.40567 13.482 7.405L12.351 7.395L11.993 6.305C11.9876 6.28622 11.9762 6.26971 11.9606 6.25796C11.945 6.24621 11.926 6.23985 11.9065 6.23985C11.887 6.23985 11.868 6.24621 11.8524 6.25796C11.8368 6.26971 11.8254 6.28622 11.82 6.305L11.462 7.395L10.332 7.405C10.3127 7.40548 10.2941 7.41192 10.2787 7.42345C10.2632 7.43498 10.2517 7.45102 10.2458 7.46936C10.2399 7.48769 10.2398 7.50742 10.2456 7.52581C10.2513 7.54419 10.2627 7.56034 10.278 7.572L11.188 8.256L10.847 9.353C10.8414 9.37126 10.8415 9.39082 10.8475 9.40897C10.8535 9.42712 10.865 9.44296 10.8804 9.45428C10.8958 9.46561 10.9143 9.47186 10.9334 9.47217C10.9525 9.47247 10.9713 9.46682 10.987 9.456L11.907 8.787L12.827 9.456C12.8427 9.46682 12.8615 9.47247 12.8806 9.47217C12.8997 9.47186 12.9182 9.46561 12.9336 9.45428C12.949 9.44296 12.9605 9.42712 12.9665 9.40897C12.9725 9.39082 12.9726 9.37126 12.967 9.353ZM10.38 6.72L10.04 5.623L10.949 4.94C10.9647 4.92846 10.9765 4.91225 10.9825 4.89368C10.9885 4.87512 10.9885 4.85512 10.9826 4.83654C10.9766 4.81795 10.9649 4.80172 10.9492 4.79013C10.9335 4.77855 10.9145 4.77221 10.895 4.772L9.765 4.763L9.407 3.672C9.4016 3.65322 9.39025 3.63671 9.37464 3.62496C9.35904 3.61321 9.34004 3.60685 9.3205 3.60685C9.30097 3.60685 9.28196 3.61321 9.26636 3.62496C9.25075 3.63671 9.23939 3.65322 9.234 3.672L8.876 4.763L7.746 4.773C7.72673 4.77347 7.70809 4.77992 7.69265 4.79145C7.67721 4.80298 7.66573 4.81902 7.6598 4.83736C7.65387 4.85569 7.65379 4.87542 7.65956 4.89381C7.66532 4.91219 7.67666 4.92834 7.692 4.94L8.602 5.623L8.261 6.72C8.25535 6.73826 8.25553 6.75782 8.26152 6.77597C8.2675 6.79412 8.27898 6.80996 8.29437 6.82128C8.30977 6.83261 8.32831 6.83886 8.34741 6.83917C8.36652 6.83947 8.38525 6.83382 8.401 6.823L9.321 6.154L10.241 6.824C10.2568 6.835 10.2757 6.84075 10.295 6.84045C10.3142 6.84014 10.3329 6.8338 10.3484 6.82231C10.3638 6.81082 10.3753 6.79477 10.3812 6.77641C10.387 6.75805 10.386 6.73832 10.38 6.72ZM7.794 4.089L7.454 2.992L8.363 2.309C8.37834 2.29734 8.38968 2.28119 8.39544 2.26281C8.40121 2.24442 8.40113 2.22469 8.3952 2.20636C8.38927 2.18802 8.37779 2.17198 8.36235 2.16045C8.34691 2.14892 8.32826 2.14247 8.309 2.142L7.179 2.132L6.821 1.042C6.81561 1.02322 6.80425 1.00671 6.78864 0.994963C6.77304 0.98321 6.75403 0.976855 6.7345 0.976855C6.71497 0.976855 6.69596 0.98321 6.68036 0.994963C6.66475 1.00671 6.65339 1.02322 6.648 1.042L6.29 2.132L5.16 2.142C5.14074 2.14247 5.12209 2.14892 5.10665 2.16045C5.09121 2.17198 5.07973 2.18802 5.0738 2.20636C5.06787 2.22469 5.06779 2.24442 5.07356 2.26281C5.07932 2.28119 5.09066 2.29734 5.106 2.309L6.016 2.992L5.675 4.089C5.66904 4.10732 5.66898 4.12705 5.67484 4.14541C5.68069 4.16377 5.69216 4.17982 5.70763 4.19131C5.72309 4.2028 5.74178 4.20914 5.76104 4.20945C5.78031 4.20975 5.79918 4.204 5.815 4.193L6.735 3.523L7.655 4.193C7.67082 4.204 7.68969 4.20975 7.70896 4.20945C7.72822 4.20914 7.74691 4.2028 7.76237 4.19131C7.77784 4.17982 7.78931 4.16377 7.79516 4.14541C7.80102 4.12705 7.80096 4.10732 7.795 4.089H7.794ZM25.898 22.51L25.556 21.414L26.466 20.73C26.4813 20.7184 26.4926 20.7023 26.4984 20.684C26.5042 20.6657 26.5042 20.6461 26.4984 20.6278C26.4926 20.6095 26.4813 20.5935 26.466 20.5819C26.4507 20.5703 26.4322 20.5637 26.413 20.563L25.282 20.553L24.924 19.463C24.9186 19.4442 24.9072 19.4277 24.8916 19.416C24.876 19.4042 24.857 19.3979 24.8375 19.3979C24.818 19.3979 24.799 19.4042 24.7834 19.416C24.7678 19.4277 24.7564 19.4442 24.751 19.463L24.394 20.553L23.263 20.563C23.2438 20.5637 23.2253 20.5703 23.21 20.5819C23.1947 20.5935 23.1834 20.6095 23.1776 20.6278C23.1718 20.6461 23.1718 20.6657 23.1776 20.684C23.1834 20.7023 23.1947 20.7184 23.21 20.73L24.12 21.414L23.778 22.51C23.772 22.5283 23.772 22.5481 23.7778 22.5664C23.7837 22.5848 23.7952 22.6008 23.8106 22.6123C23.8261 22.6238 23.8448 22.6301 23.864 22.6304C23.8833 22.6308 23.9022 22.625 23.918 22.614L24.838 21.944L25.758 22.614C25.7738 22.625 25.7927 22.6308 25.812 22.6304C25.8312 22.6301 25.8499 22.6238 25.8654 22.6123C25.8808 22.6008 25.8923 22.5848 25.8982 22.5664C25.904 22.5481 25.904 22.5283 25.898 22.51ZM23.31 19.88L22.97 18.783L23.879 18.1C23.8947 18.0885 23.9065 18.0723 23.9125 18.0537C23.9185 18.0351 23.9185 18.0151 23.9126 17.9965C23.9066 17.978 23.8949 17.9617 23.8792 17.9501C23.8635 17.9386 23.8445 17.9322 23.825 17.932L22.695 17.923L22.337 16.832C22.3316 16.8132 22.3202 16.7967 22.3046 16.785C22.289 16.7732 22.27 16.7669 22.2505 16.7669C22.231 16.7669 22.212 16.7732 22.1964 16.785C22.1808 16.7967 22.1694 16.8132 22.164 16.832L21.806 17.923L20.676 17.933C20.6567 17.9335 20.6381 17.9399 20.6227 17.9515C20.6072 17.963 20.5957 17.979 20.5898 17.9974C20.5839 18.0157 20.5838 18.0354 20.5896 18.0538C20.5953 18.0722 20.6067 18.0883 20.622 18.1L21.532 18.783L21.191 19.88C21.1854 19.8983 21.1855 19.9178 21.1915 19.936C21.1975 19.9541 21.209 19.97 21.2244 19.9813C21.2398 19.9926 21.2583 19.9989 21.2774 19.9992C21.2965 19.9995 21.3152 19.9938 21.331 19.983L22.251 19.314L23.171 19.984C23.1868 19.995 23.2057 20.0008 23.225 20.0004C23.2442 20.0001 23.2629 19.9938 23.2784 19.9823C23.2938 19.9708 23.3053 19.9548 23.3112 19.9364C23.317 19.9181 23.317 19.8983 23.311 19.88H23.31ZM20.724 17.248L20.383 16.151L21.293 15.468C21.3083 15.4563 21.3197 15.4402 21.3254 15.4218C21.3312 15.4034 21.3311 15.3837 21.3252 15.3654C21.3193 15.347 21.3078 15.331 21.2923 15.3195C21.2769 15.3079 21.2583 15.3015 21.239 15.301L20.109 15.291L19.751 14.201C19.7456 14.1822 19.7342 14.1657 19.7186 14.154C19.703 14.1422 19.684 14.1359 19.6645 14.1359C19.645 14.1359 19.626 14.1422 19.6104 14.154C19.5948 14.1657 19.5834 14.1822 19.578 14.201L19.22 15.291L18.09 15.301C18.0707 15.3015 18.0521 15.3079 18.0367 15.3195C18.0212 15.331 18.0097 15.347 18.0038 15.3654C17.9979 15.3837 17.9978 15.4034 18.0036 15.4218C18.0093 15.4402 18.0207 15.4563 18.036 15.468L18.946 16.151L18.604 17.248C18.598 17.2663 18.598 17.2861 18.6038 17.3044C18.6097 17.3228 18.6212 17.3388 18.6366 17.3503C18.6521 17.3618 18.6708 17.3681 18.69 17.3684C18.7093 17.3688 18.7282 17.363 18.744 17.352L19.664 16.682L20.584 17.352C20.5998 17.363 20.6187 17.3688 20.638 17.3684C20.6572 17.3681 20.6759 17.3618 20.6914 17.3503C20.7068 17.3388 20.7183 17.3228 20.7242 17.3044C20.73 17.2861 20.73 17.2663 20.724 17.248ZM18.138 14.617L17.797 13.52L18.707 12.836C18.7223 12.8243 18.7337 12.8082 18.7394 12.7898C18.7452 12.7714 18.7451 12.7517 18.7392 12.7334C18.7333 12.715 18.7218 12.699 18.7063 12.6875C18.6909 12.6759 18.6723 12.6695 18.653 12.669L17.523 12.66L17.165 11.569C17.1596 11.5502 17.1482 11.5337 17.1326 11.522C17.117 11.5102 17.098 11.5039 17.0785 11.5039C17.059 11.5039 17.04 11.5102 17.0244 11.522C17.0088 11.5337 16.9974 11.5502 16.992 11.569L16.634 12.66L15.504 12.669C15.4847 12.6695 15.4661 12.6759 15.4507 12.6875C15.4352 12.699 15.4237 12.715 15.4178 12.7334C15.4119 12.7517 15.4118 12.7714 15.4176 12.7898C15.4233 12.8082 15.4347 12.8243 15.45 12.836L16.36 13.52L16.018 14.617C16.0124 14.6353 16.0125 14.6548 16.0185 14.673C16.0245 14.6911 16.036 14.707 16.0514 14.7183C16.0668 14.7296 16.0853 14.7359 16.1044 14.7362C16.1235 14.7365 16.1423 14.7308 16.158 14.72L17.078 14.051L17.998 14.721C18.0138 14.732 18.0327 14.7378 18.052 14.7374C18.0712 14.7371 18.0899 14.7308 18.1054 14.7193C18.1208 14.7078 18.1323 14.6918 18.1382 14.6734C18.144 14.6551 18.144 14.6353 18.138 14.617ZM5.208 1.458L4.867 0.36L5.347 0H2.95L3.43 0.36L3.09 1.458C3.08435 1.47626 3.08453 1.49582 3.09052 1.51397C3.0965 1.53212 3.10798 1.54796 3.12337 1.55928C3.13877 1.57061 3.1573 1.57686 3.17641 1.57717C3.19552 1.57747 3.21425 1.57182 3.23 1.561L4.15 0.892L5.069 1.562C5.08482 1.573 5.10369 1.57875 5.12296 1.57845C5.14222 1.57814 5.16091 1.5718 5.17637 1.56031C5.19184 1.54882 5.20331 1.53277 5.20916 1.51441C5.21502 1.49605 5.21396 1.47632 5.208 1.458ZM28.998 23.194L27.868 23.185L27.51 22.095C27.5046 22.0762 27.4932 22.0597 27.4776 22.048C27.462 22.0362 27.443 22.0299 27.4235 22.0299C27.404 22.0299 27.385 22.0362 27.3694 22.048C27.3538 22.0597 27.3424 22.0762 27.337 22.095L26.98 23.185L25.85 23.195C25.8307 23.1955 25.8121 23.2019 25.7967 23.2135C25.7812 23.225 25.7697 23.241 25.7638 23.2594C25.7579 23.2777 25.7578 23.2974 25.7636 23.3158C25.7693 23.3342 25.7807 23.3503 25.796 23.362L26.646 24H28.203L29.053 23.362C29.0687 23.3505 29.0805 23.3343 29.0865 23.3157C29.0925 23.2971 29.0925 23.2771 29.0866 23.2585C29.0806 23.24 29.0689 23.2237 29.0532 23.2121C29.0375 23.2006 29.0185 23.1942 28.999 23.194H28.998Z",
  fill: "#F5F5F5"
}));
const ForwardRef = forwardRef(BosniaIcon);
export default ForwardRef;