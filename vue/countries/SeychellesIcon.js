import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    viewBox: "0 0 36 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    _createElementVNode("g", { "clip-path": "url(#clip0_6_1534)" }, [
      _createElementVNode("path", {
        d: "M36 24V16L0 24",
        fill: "#73AF00"
      }),
      _createElementVNode("path", {
        d: "M0 24L12 0H0",
        fill: "#41479B"
      }),
      _createElementVNode("path", {
        d: "M24 0H12L0 24",
        fill: "#FFE15A"
      }),
      _createElementVNode("path", {
        d: "M36 8V0H24L0 24",
        fill: "#FF4B55"
      }),
      _createElementVNode("path", {
        d: "M0 24L36 16V8",
        fill: "#F5F5F5"
      })
    ]),
    _createElementVNode("defs", null, [
      _createElementVNode("clipPath", { id: "clip0_6_1534" }, [
        _createElementVNode("rect", {
          width: "36",
          height: "24",
          fill: "white"
        })
      ])
    ])
  ]))
}