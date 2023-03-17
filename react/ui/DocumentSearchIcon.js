import * as React from "react";
import { forwardRef } from "react";
const DocumentSearchIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 15 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2.50404 17.9908H6.93053C6.72052 17.8059 6.52666 17.6019 6.34895 17.3789C6.17124 17.1614 6.01508 16.9275 5.88045 16.6773H2.57674C2.1567 16.6773 1.83899 16.5713 1.62359 16.3592C1.40819 16.1471 1.30048 15.8371 1.30048 15.4292V3.07793C1.30048 2.67547 1.40819 2.36546 1.62359 2.14792C1.83899 1.92493 2.1567 1.81344 2.57674 1.81344H11.0178C11.4216 1.81344 11.734 1.92493 11.9548 2.14792C12.1756 2.36546 12.2859 2.67547 12.2859 3.07793V10.1999C12.5337 10.3304 12.7652 10.4881 12.9806 10.673C13.2014 10.8525 13.4033 11.0483 13.5864 11.2604V3.06161C13.5864 2.20774 13.3764 1.5687 12.9564 1.14448C12.5417 0.714828 11.9171 0.5 11.0824 0.5H2.50404C1.67474 0.5 1.05008 0.714828 0.630048 1.14448C0.210016 1.57414 0 2.21318 0 3.06161V15.4292C0 16.283 0.207324 16.9221 0.621971 17.3463C1.042 17.7759 1.66936 17.9908 2.50404 17.9908ZM3.7399 5.14191H9.86268C10.0027 5.14191 10.1212 5.09296 10.2181 4.99506C10.315 4.89173 10.3635 4.76936 10.3635 4.62795C10.3635 4.49199 10.315 4.37777 10.2181 4.28532C10.1212 4.18742 10.0027 4.13847 9.86268 4.13847H3.7399C3.58912 4.13847 3.46527 4.18742 3.36834 4.28532C3.27679 4.37777 3.23102 4.49199 3.23102 4.62795C3.23102 4.76936 3.27679 4.89173 3.36834 4.99506C3.46527 5.09296 3.58912 5.14191 3.7399 5.14191ZM3.7399 7.98089H9.86268C10.0027 7.98089 10.1212 7.93194 10.2181 7.83405C10.315 7.73615 10.3635 7.6165 10.3635 7.4751C10.3635 7.33369 10.315 7.21676 10.2181 7.1243C10.1212 7.02641 10.0027 6.97746 9.86268 6.97746H3.7399C3.58912 6.97746 3.46527 7.02641 3.36834 7.1243C3.27679 7.21676 3.23102 7.33369 3.23102 7.4751C3.23102 7.6165 3.27679 7.73615 3.36834 7.83405C3.46527 7.93194 3.58912 7.98089 3.7399 7.98089ZM9.95961 17.9908C10.6274 17.9908 11.2359 17.8249 11.7851 17.4931C12.3344 17.1668 12.7706 16.7263 13.0937 16.1715C13.4222 15.6168 13.5864 15.0022 13.5864 14.3278C13.5864 13.648 13.4222 13.0307 13.0937 12.476C12.7706 11.9212 12.3344 11.478 11.7851 11.1462C11.2359 10.8144 10.6274 10.6486 9.95961 10.6486C9.29187 10.6486 8.68336 10.8144 8.13409 11.1462C7.58481 11.478 7.14324 11.9239 6.80937 12.4841C6.48088 13.0389 6.31664 13.6534 6.31664 14.3278C6.31664 15.0022 6.48088 15.6168 6.80937 16.1715C7.14324 16.7263 7.58481 17.1668 8.13409 17.4931C8.68336 17.8249 9.29187 17.9908 9.95961 17.9908ZM9.95961 16.8242C9.50188 16.8242 9.08455 16.71 8.70759 16.4815C8.33603 16.2586 8.03716 15.9567 7.81099 15.576C7.58481 15.2007 7.47173 14.7847 7.47173 14.3278C7.47173 13.871 7.58481 13.4549 7.81099 13.0796C8.03716 12.6989 8.33603 12.3944 8.70759 12.166C9.08455 11.9375 9.50188 11.8233 9.95961 11.8233C10.4066 11.8233 10.8158 11.9375 11.1874 12.166C11.5644 12.3944 11.8632 12.6989 12.084 13.0796C12.3102 13.4549 12.4233 13.871 12.4233 14.3278C12.4233 14.7847 12.3102 15.2007 12.084 15.576C11.8632 15.9567 11.567 16.2586 11.1955 16.4815C10.8239 16.71 10.412 16.8242 9.95961 16.8242ZM14.3457 19.5C14.5342 19.5 14.6904 19.432 14.8142 19.2961C14.9381 19.1655 15 18.9969 15 18.7903C15 18.7032 14.9785 18.6135 14.9354 18.521C14.8977 18.434 14.8438 18.3579 14.7738 18.2926L12.5121 16.0002L11.4863 16.9302L13.7561 19.2308C13.9338 19.4103 14.1303 19.5 14.3457 19.5Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(DocumentSearchIcon);
export default ForwardRef;