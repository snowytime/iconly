import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    color: "rgb(var(--foreground, 0, 0, 0))",
    viewBox: "0 0 16 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    _createElementVNode("path", {
      d: "M1.10946 14.0006L6.61714 17.1094C7.54169 17.6302 8.4636 17.6302 9.38286 17.1094L14.8905 14.0006C15.2551 13.7902 15.5298 13.5535 15.7147 13.2904C15.9049 13.0222 16 12.6066 16 12.0437V5.90497C16 5.35789 15.9075 4.95811 15.7226 4.70562C15.5377 4.45312 15.2789 4.22956 14.946 4.03493L9.42249 0.910304C8.947 0.636768 8.47416 0.5 8.00396 0.5C7.53376 0.5 7.05828 0.636768 6.57751 0.910304L1.06191 4.03493C0.723791 4.22956 0.462275 4.45312 0.277365 4.70562C0.092455 4.95811 0 5.35789 0 5.90497V12.0437C0 12.6066 0.0950966 13.0222 0.28529 13.2904C0.475483 13.5535 0.750206 13.7902 1.10946 14.0006Z",
      fill: "currentColor"
    })
  ]))
}