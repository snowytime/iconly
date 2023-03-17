import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    viewBox: "0 0 36 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    _createElementVNode("path", {
      d: "M36 24H0V0H36",
      fill: "#82AFFF"
    }),
    _createElementVNode("path", {
      d: "M0 10.105H36V13.894H0V10.105Z",
      fill: "#464655"
    }),
    _createElementVNode("path", {
      d: "M36 8.842V10.105H0V8.842H36ZM0 15.158H36V13.895H0V15.158Z",
      fill: "#F5F5F5"
    })
  ]))
}