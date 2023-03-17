import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    color: "rgb(var(--foreground, 0, 0, 0))"
  }, [
    _createElementVNode("path", {
      d: "M12 0C5.38125 0 0 5.38125 0 12C0 18.6187 5.38125 24 12 24C14.1 24 16.0688 23.4562 17.775 22.5187L9.075 10.3687V17.2313H7.8V7.8375H9.075L18.5438 22.05C21.825 19.9125 24 16.2188 24 12C24 5.38125 18.6187 0 12 0ZM16.1437 15.8625L14.7375 13.7438V7.8375H16.1437V15.8625Z",
      fill: "currentColor"
    })
  ]))
}