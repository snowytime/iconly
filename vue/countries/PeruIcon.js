import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    viewBox: "0 0 36 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    _createElementVNode("path", {
      d: "M12 0H24V24H12V0Z",
      fill: "#F5F5F5"
    }),
    _createElementVNode("path", {
      d: "M0 0H12V24H0V0ZM24 0V24H36V0H24Z",
      fill: "#FF4B55"
    })
  ]))
}