import * as React from "react";
import { forwardRef } from "react";
const LightbulbSlashIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 14 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M7.36089 0C6.52749 0 5.75879 0.159862 5.05479 0.479587C4.3508 0.799312 3.76068 1.22991 3.28445 1.77138L4.11527 2.59905C4.48797 2.15557 4.95644 1.80748 5.52067 1.55479C6.09008 1.29695 6.70349 1.16803 7.36089 1.16803C7.90442 1.16803 8.41689 1.25827 8.8983 1.43876C9.38488 1.6141 9.81453 1.8642 10.1872 2.18908C10.5599 2.50881 10.8524 2.88784 11.0646 3.32617C11.2769 3.7645 11.383 4.24409 11.383 4.76493C11.383 5.12076 11.3493 5.44306 11.282 5.73184C11.2148 6.01547 11.1216 6.2991 11.0025 6.58272C10.8886 6.8612 10.7592 7.16545 10.6143 7.49549C10.4745 7.82037 10.327 8.19682 10.1717 8.62484L11.1268 9.58401C11.2976 9.10958 11.4658 8.68156 11.6315 8.29996C11.7971 7.91835 11.9498 7.54963 12.0896 7.19381C12.2293 6.83799 12.3406 6.4667 12.4235 6.07993C12.5115 5.68801 12.5555 5.24968 12.5555 4.76493C12.5555 4.0997 12.4209 3.4783 12.1517 2.90073C11.8877 2.32316 11.5176 1.81779 11.0413 1.38462C10.5703 0.946283 10.019 0.60593 9.38747 0.363558C8.76112 0.121186 8.0856 0 7.36089 0ZM4.93056 14.0859H9.78347C9.93876 14.0859 10.0578 14.0473 10.1406 13.9699C10.2235 13.8874 10.2675 13.774 10.2726 13.6296L10.3348 13.1345L9.50394 12.3687L9.43406 12.9179H5.51291C5.43008 12.2475 5.33432 11.6545 5.22561 11.1388C5.12209 10.6231 5.01079 10.1616 4.89173 9.75419C4.77785 9.3468 4.66138 8.98066 4.54232 8.65578C4.42844 8.3309 4.32233 8.0318 4.22397 7.75849C4.12562 7.48002 4.04021 7.20928 3.96774 6.94628C3.95221 6.89471 3.93668 6.84315 3.92115 6.79158C3.9108 6.73485 3.90303 6.67813 3.89786 6.6214L2.1974 4.92737C2.18705 5.09755 2.18963 5.28578 2.20516 5.49205C2.25693 5.97164 2.3501 6.41255 2.48469 6.81478C2.62445 7.21702 2.78492 7.62441 2.9661 8.03696C3.15245 8.44435 3.34139 8.90073 3.53292 9.4061C3.72445 9.91147 3.90045 10.5045 4.06092 11.1852C4.22656 11.8659 4.35338 12.6807 4.44138 13.6296C4.45691 13.7688 4.5035 13.8797 4.58115 13.9622C4.66397 14.0447 4.78044 14.0859 4.93056 14.0859ZM4.8995 15.7568H9.81453C9.94394 15.7568 10.0526 15.7129 10.1406 15.6253C10.2286 15.5376 10.2726 15.4293 10.2726 15.3004C10.2726 15.1766 10.2286 15.0709 10.1406 14.9832C10.0526 14.8956 9.94394 14.8517 9.81453 14.8517H4.8995C4.77009 14.8517 4.66138 14.8956 4.57338 14.9832C4.49056 15.0709 4.44915 15.1766 4.44915 15.3004C4.44915 15.4293 4.49056 15.5376 4.57338 15.6253C4.66138 15.7129 4.77009 15.7568 4.8995 15.7568ZM7.36089 18C7.96136 18 8.48159 17.8633 8.92159 17.59C9.36159 17.3219 9.5997 16.9661 9.63594 16.5226H5.07809C5.10914 16.9661 5.34467 17.3219 5.78467 17.59C6.22984 17.8633 6.75525 18 7.36089 18ZM12.9825 14.3876C13.1016 14.5114 13.2413 14.5733 13.4018 14.5733C13.5674 14.5681 13.7098 14.5062 13.8289 14.3876C13.9427 14.2742 13.9997 14.1349 13.9997 13.9699C14.0049 13.8049 13.9479 13.6631 13.8289 13.5445L1.01717 0.781263C0.898112 0.662656 0.753172 0.60593 0.582349 0.611087C0.416703 0.611087 0.276939 0.667813 0.163058 0.781263C0.0543526 0.894714 0 1.03653 0 1.2067C0 1.37688 0.0543526 1.51612 0.163058 1.62441L12.9825 14.3876Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(LightbulbSlashIcon);
export default ForwardRef;