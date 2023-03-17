import * as React from "react";
import { forwardRef } from "react";
const WaterWavesIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 16 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M8 2.65808C8.41611 2.65808 8.76879 2.60657 9.05804 2.50354C9.35236 2.39536 9.60609 2.26401 9.81922 2.10947C10.0374 1.94977 10.2353 1.79266 10.4129 1.63812C10.5956 1.48358 10.7808 1.3548 10.9686 1.25177C11.1564 1.14359 11.372 1.0895 11.6156 1.0895C11.8592 1.0895 12.0723 1.14359 12.255 1.25177C12.4428 1.3548 12.6254 1.48358 12.803 1.63812C12.9807 1.79266 13.1811 1.94977 13.4044 2.10947C13.6327 2.26401 13.9068 2.39536 14.2265 2.50354C14.5461 2.60657 14.9445 2.65808 15.4215 2.65808H15.4596C15.6067 2.65808 15.7336 2.60657 15.8402 2.50354C15.9467 2.39536 16 2.26401 16 2.10947C16 1.96008 15.9467 1.83387 15.8402 1.73084C15.7336 1.62267 15.6067 1.56858 15.4596 1.56858H15.4215C15.0105 1.56858 14.6705 1.49388 14.4015 1.34449C14.1326 1.19511 13.856 1.01739 13.5718 0.811333C13.3232 0.625885 13.039 0.445589 12.7193 0.270444C12.4047 0.0901481 12.0368 0 11.6156 0C11.1792 0 10.7986 0.0952994 10.4738 0.285898C10.1541 0.471346 9.86996 0.659369 9.62131 0.849968C9.35744 1.05087 9.10625 1.22086 8.86775 1.35995C8.62924 1.49903 8.34 1.56858 8 1.56858C7.66001 1.56858 7.36822 1.49903 7.12464 1.35995C6.88614 1.22086 6.63749 1.05087 6.37869 0.849968C6.13004 0.659369 5.84333 0.471346 5.51856 0.285898C5.19886 0.0952994 4.82081 0 4.3844 0C3.96321 0 3.59277 0.0901481 3.27307 0.270444C2.95845 0.445589 2.67682 0.625885 2.42816 0.811333C2.13892 1.01739 1.85982 1.19511 1.59087 1.34449C1.32192 1.49388 0.984459 1.56858 0.578497 1.56858H0.540438C0.388202 1.56858 0.258801 1.62267 0.152236 1.73084C0.0507453 1.83387 0 1.96008 0 2.10947C0 2.26401 0.0507453 2.39536 0.152236 2.50354C0.258801 2.60657 0.388202 2.65808 0.540438 2.65808H0.578497C1.05043 2.65808 1.44624 2.60657 1.76594 2.50354C2.09071 2.39536 2.36473 2.26401 2.58801 2.10947C2.81129 1.94977 3.01174 1.79266 3.18934 1.63812C3.36695 1.48358 3.5471 1.3548 3.72978 1.25177C3.91754 1.14359 4.13574 1.0895 4.3844 1.0895C4.62797 1.0895 4.84364 1.14359 5.0314 1.25177C5.21916 1.3548 5.40184 1.48358 5.57945 1.63812C5.76213 1.79266 5.96004 1.94977 6.17317 2.10947C6.39137 2.26401 6.6451 2.39536 6.93435 2.50354C7.22867 2.60657 7.58389 2.65808 8 2.65808ZM8 7.32518C8.41611 7.32518 8.76879 7.27366 9.05804 7.17064C9.35236 7.06246 9.60609 6.9311 9.81922 6.77656C10.0374 6.62202 10.2353 6.46748 10.4129 6.31294C10.5956 6.15325 10.7808 6.02189 10.9686 5.91887C11.1564 5.81069 11.372 5.7566 11.6156 5.7566C11.8592 5.7566 12.0723 5.81069 12.255 5.91887C12.4428 6.02189 12.6254 6.15325 12.803 6.31294C12.9807 6.46748 13.1811 6.62202 13.4044 6.77656C13.6327 6.9311 13.9068 7.06246 14.2265 7.17064C14.5461 7.27366 14.9445 7.32518 15.4215 7.32518H15.4596C15.6067 7.32518 15.7336 7.27366 15.8402 7.17064C15.9467 7.06246 16 6.93368 16 6.78429C16 6.62975 15.9467 6.50097 15.8402 6.39794C15.7336 6.28976 15.6067 6.23567 15.4596 6.23567H15.4215C15.0105 6.23567 14.6705 6.16098 14.4015 6.01159C14.1326 5.8622 13.856 5.68448 13.5718 5.47843C13.3232 5.29813 13.039 5.11784 12.7193 4.93754C12.4047 4.75724 12.0368 4.6671 11.6156 4.6671C11.1792 4.6671 10.7986 4.7624 10.4738 4.95299C10.1541 5.14359 9.86996 5.33162 9.62131 5.51706C9.35744 5.71797 9.10625 5.88796 8.86775 6.02704C8.62924 6.16613 8.34 6.23567 8 6.23567C7.66001 6.23567 7.36822 6.16613 7.12464 6.02704C6.88614 5.88796 6.63749 5.71797 6.37869 5.51706C6.13004 5.33162 5.84333 5.14359 5.51856 4.95299C5.19886 4.7624 4.82081 4.6671 4.3844 4.6671C3.96321 4.6671 3.59277 4.75724 3.27307 4.93754C2.95845 5.11784 2.67682 5.29813 2.42816 5.47843C2.13892 5.68448 1.85982 5.8622 1.59087 6.01159C1.32192 6.16098 0.984459 6.23567 0.578497 6.23567H0.540438C0.388202 6.23567 0.258801 6.28976 0.152236 6.39794C0.0507453 6.50097 0 6.62975 0 6.78429C0 6.93368 0.0507453 7.06246 0.152236 7.17064C0.258801 7.27366 0.388202 7.32518 0.540438 7.32518H0.578497C1.05043 7.32518 1.44624 7.27366 1.76594 7.17064C2.09071 7.06246 2.36473 6.9311 2.58801 6.77656C2.81129 6.62202 3.01174 6.46748 3.18934 6.31294C3.36695 6.15325 3.5471 6.02189 3.72978 5.91887C3.91754 5.81069 4.13574 5.7566 4.3844 5.7566C4.62797 5.7566 4.84364 5.81069 5.0314 5.91887C5.21916 6.02189 5.40184 6.15325 5.57945 6.31294C5.76213 6.46748 5.96004 6.62202 6.17317 6.77656C6.39137 6.9311 6.6451 7.06246 6.93435 7.17064C7.22867 7.27366 7.58389 7.32518 8 7.32518ZM8 12C8.41611 12 8.76879 11.9459 9.05804 11.8377C9.35236 11.7347 9.60609 11.6059 9.81922 11.4514C10.0374 11.2917 10.2353 11.1346 10.4129 10.98C10.5956 10.8255 10.7808 10.6967 10.9686 10.5937C11.1564 10.4855 11.372 10.4314 11.6156 10.4314C11.8592 10.4314 12.0723 10.4855 12.255 10.5937C12.4428 10.6967 12.6254 10.8255 12.803 10.98C12.9807 11.1346 13.1811 11.2917 13.4044 11.4514C13.6327 11.6059 13.9068 11.7347 14.2265 11.8377C14.5461 11.9459 14.9445 12 15.4215 12H15.4596C15.6067 12 15.7336 11.9459 15.8402 11.8377C15.9467 11.7296 16 11.6008 16 11.4514C16 11.302 15.9467 11.1758 15.8402 11.0728C15.7336 10.9646 15.6067 10.9105 15.4596 10.9105H15.4215C15.0105 10.9105 14.6705 10.8358 14.4015 10.6864C14.1326 10.537 13.856 10.3593 13.5718 10.1533C13.3232 9.9678 13.039 9.78751 12.7193 9.61236C12.4047 9.43207 12.0368 9.34192 11.6156 9.34192C11.1792 9.34192 10.7986 9.43722 10.4738 9.62782C10.1541 9.81326 9.86996 9.99871 9.62131 10.1842C9.35744 10.3902 9.10625 10.5628 8.86775 10.7019C8.62924 10.841 8.34 10.9105 8 10.9105C7.66001 10.9105 7.36822 10.841 7.12464 10.7019C6.88614 10.5628 6.63749 10.3902 6.37869 10.1842C6.13004 9.99871 5.84333 9.81326 5.51856 9.62782C5.19886 9.43722 4.82081 9.34192 4.3844 9.34192C3.96321 9.34192 3.59277 9.43207 3.27307 9.61236C2.95845 9.78751 2.67682 9.9678 2.42816 10.1533C2.13892 10.3593 1.85982 10.537 1.59087 10.6864C1.32192 10.8358 0.984459 10.9105 0.578497 10.9105H0.540438C0.388202 10.9105 0.258801 10.9646 0.152236 11.0728C0.0507453 11.1758 0 11.302 0 11.4514C0 11.6008 0.0507453 11.7296 0.152236 11.8377C0.258801 11.9459 0.388202 12 0.540438 12H0.578497C1.05043 12 1.44624 11.9459 1.76594 11.8377C2.09071 11.7347 2.36473 11.6059 2.58801 11.4514C2.81129 11.2917 3.01174 11.1346 3.18934 10.98C3.36695 10.8255 3.5471 10.6967 3.72978 10.5937C3.91754 10.4855 4.13574 10.4314 4.3844 10.4314C4.62797 10.4314 4.84364 10.4855 5.0314 10.5937C5.21916 10.6967 5.40184 10.8255 5.57945 10.98C5.76213 11.1346 5.96004 11.2917 6.17317 11.4514C6.39137 11.6059 6.6451 11.7347 6.93435 11.8377C7.22867 11.9459 7.58389 12 8 12Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(WaterWavesIcon);
export default ForwardRef;