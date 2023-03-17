import * as React from "react";
import { forwardRef } from "react";
const AmexIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 38 24",
  fill: "none",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  opacity: 0.07,
  d: "M35 0H3C1.3 0 0 1.3 0 3V21C0 22.7 1.4 24 3 24H35C36.7 24 38 22.7 38 21V3C38 1.3 36.6 0 35 0Z",
  fill: "black"
}), /*#__PURE__*/React.createElement("path", {
  d: "M35 1C36.1 1 37 1.9 37 3V21C37 22.1 36.1 23 35 23H3C1.9 23 1 22.1 1 21V3C1 1.9 1.9 1 3 1H35Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.971 10.268L9.745 12.144H8.203L8.971 10.268ZM25.046 10.346H22.069V11.173H24.998V12.412H22.075V13.334H25.052V14.073L27.129 11.828L25.052 9.488L25.046 10.346ZM10.983 8.006H14.978L15.865 9.941L16.687 8H27.057L28.135 9.19L29.25 8H34.013L30.494 11.852L33.977 15.68H29.143L28.065 14.49L26.94 15.68H10.03L9.536 14.49H8.406L7.911 15.68H4L7.286 8H10.716L10.983 8.006ZM19.646 9.084H17.407L15.907 12.62L14.282 9.084H12.06V13.894L10 9.084H8.007L5.625 14.596H7.18L7.674 13.406H10.27L10.764 14.596H13.484V10.661L15.235 14.602H16.425L18.165 10.673V14.603H19.623L19.647 9.083L19.646 9.084ZM28.986 11.852L31.517 9.084H29.695L28.094 10.81L26.546 9.084H20.652V14.602H26.462L28.076 12.864L29.624 14.602H31.499L28.986 11.852Z",
  fill: "#006FCF"
}));
const ForwardRef = forwardRef(AmexIcon);
export default ForwardRef;