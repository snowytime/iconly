import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    color: "rgb(var(--foreground, 0, 0, 0))",
    viewBox: "0 0 18 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    _createElementVNode("path", {
      d: "M2.39695 14H15.6031C16.4071 14 17.0076 13.8023 17.4046 13.4068C17.8015 13.0165 18 12.4309 18 11.6502V2.35741C18 1.57668 17.8015 0.988593 17.4046 0.593156C17.0076 0.197719 16.4071 0 15.6031 0H2.39695C1.59796 0 0.997455 0.197719 0.59542 0.593156C0.198473 0.983523 0 1.57161 0 2.35741V11.6502C0 12.4309 0.198473 13.0165 0.59542 13.4068C0.997455 13.8023 1.59796 14 2.39695 14Z",
      fill: "currentColor"
    })
  ]))
}