import * as React from "react";
import { forwardRef } from "react";
const FigureMonkeyingIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 19 20",
  fill: "none",
  color: "rgb(var(--foreground, 0, 0, 0))",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2.05768 1.6035H3.35062C3.32434 1.46004 3.31909 1.31126 3.33486 1.15717C3.35062 1.00308 3.38479 0.856964 3.43734 0.718816H2.05768C1.93154 0.718816 1.82642 0.763979 1.74232 0.854307C1.65823 0.939322 1.61618 1.04293 1.61618 1.16514C1.61618 1.28735 1.65823 1.39096 1.74232 1.47598C1.82642 1.56099 1.93154 1.6035 2.05768 1.6035ZM6.98506 1.6035H14.2539L14.7506 0.862277C14.7664 0.841024 14.7822 0.81977 14.7979 0.798517C14.8137 0.77195 14.8295 0.745383 14.8452 0.718816H6.40166C6.41743 0.745383 6.4332 0.77195 6.44896 0.798517C6.46473 0.81977 6.4805 0.843681 6.49627 0.870248L6.98506 1.6035ZM17.8963 1.6035H18.5664C18.6873 1.6035 18.7898 1.56099 18.8739 1.47598C18.958 1.39096 19 1.28735 19 1.16514C19 1.04293 18.958 0.939322 18.8739 0.854307C18.7898 0.763979 18.6873 0.718816 18.5664 0.718816H17.8095C17.8621 0.856964 17.8963 1.00308 17.912 1.15717C17.9278 1.30595 17.9225 1.45472 17.8963 1.6035ZM10.6747 5.89938C10.9953 5.89938 11.2844 5.82234 11.5419 5.66825C11.8047 5.51416 12.0123 5.30428 12.1647 5.03861C12.3224 4.77294 12.4012 4.4807 12.4012 4.1619C12.4012 3.83778 12.3224 3.54555 12.1647 3.28519C12.0123 3.01952 11.8047 2.80964 11.5419 2.65555C11.2844 2.49615 10.9953 2.41645 10.6747 2.41645C10.3593 2.41645 10.0703 2.49615 9.80747 2.65555C9.54993 2.80964 9.34232 3.01952 9.18465 3.28519C9.03223 3.54555 8.95602 3.83778 8.95602 4.1619C8.95602 4.4807 9.03223 4.77294 9.18465 5.03861C9.34232 5.30428 9.54993 5.51416 9.80747 5.66825C10.0703 5.82234 10.3593 5.89938 10.6747 5.89938ZM6.49627 12.9689C6.81162 13.3567 7.17427 13.6012 7.58423 13.7021C7.99419 13.8031 8.39364 13.7765 8.78257 13.6224C9.17676 13.463 9.50263 13.1867 9.76017 12.7935L17.029 1.79478C17.1552 1.6035 17.1946 1.39627 17.1473 1.17311C17.1053 0.944635 16.9896 0.766636 16.8004 0.639115C16.6165 0.511593 16.4115 0.471742 16.1855 0.519563C15.9647 0.56207 15.7887 0.678965 15.6573 0.870248L12.3697 5.8675C12.1858 6.15443 11.9414 6.37228 11.6365 6.52105C11.3317 6.66983 11.0111 6.74421 10.6747 6.74421C10.3173 6.74421 9.96515 6.6592 9.61826 6.48917C9.27663 6.31383 8.99018 6.05081 8.75892 5.70013L5.58963 0.870248C5.46349 0.678965 5.29004 0.56207 5.06929 0.519563C4.84855 0.471742 4.64094 0.511593 4.44647 0.639115C4.25726 0.766636 4.139 0.944635 4.0917 1.17311C4.04965 1.39627 4.0917 1.6035 4.21784 1.79478L8.10456 7.68469C8.19391 7.82283 8.23859 7.97692 8.23859 8.14695C8.24385 8.31167 8.19917 8.4631 8.10456 8.60125L7.02448 10.2511L4.65934 8.17883C4.4964 8.03006 4.29931 7.95567 4.06805 7.95567C3.84205 7.95036 3.63707 8.04068 3.45311 8.22665L0.244398 11.4864C0.0814661 11.6511 0 11.8477 0 12.0762C0 12.2994 0.0814661 12.4907 0.244398 12.6501C0.423098 12.8201 0.620194 12.9024 0.835685 12.8971C1.05643 12.8865 1.24039 12.8041 1.38755 12.6501L4.03651 9.98805L6.49627 12.9689ZM8.43569 19.1298C8.56183 18.9385 8.60124 18.7339 8.55394 18.5161C8.5119 18.3035 8.39627 18.1308 8.20705 17.998L5.32158 16.0453L6.91411 14.268C6.73541 14.183 6.56196 14.0741 6.39378 13.9412C6.22559 13.8031 6.06528 13.6437 5.91286 13.463L5.34523 12.7935L3.40581 15.7425C3.27967 15.9284 3.23762 16.133 3.27967 16.3562C3.32172 16.5846 3.43734 16.7653 3.62656 16.8981L7.31618 19.3609C7.50539 19.4884 7.70775 19.5283 7.92324 19.4804C8.14398 19.4326 8.3148 19.3157 8.43569 19.1298Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(FigureMonkeyingIcon);
export default ForwardRef;