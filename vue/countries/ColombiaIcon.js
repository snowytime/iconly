import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    viewBox: "0 0 36 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    _createElementVNode("path", {
      d: "M36 18H0V24H36V18Z",
      fill: "#FF4B55"
    }),
    _createElementVNode("path", {
      d: "M36 12H0V0H36V12Z",
      fill: "#FFE15A"
    }),
    _createElementVNode("path", {
      d: "M0 12H36V18H0V12Z",
      fill: "#41479B"
    })
  ]))
}