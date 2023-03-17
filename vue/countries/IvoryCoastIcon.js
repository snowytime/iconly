import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    viewBox: "0 0 36 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    _createElementVNode("path", {
      d: "M24 0H36V24H24V0Z",
      fill: "#73AF00"
    }),
    _createElementVNode("path", {
      d: "M12 0H24V24H12V0Z",
      fill: "#F5F5F5"
    }),
    _createElementVNode("path", {
      d: "M0 0H12V24H0V0Z",
      fill: "#FF9B55"
    })
  ]))
}