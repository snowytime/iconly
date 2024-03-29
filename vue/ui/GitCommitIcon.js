import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    color: "rgb(var(--foreground, 0, 0, 0))",
    viewBox: "0 0 19 9",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M9.49594 1.76316C8.03915 1.76316 6.85818 2.98848 6.85818 4.5C6.85818 6.01152 8.03915 7.23684 9.49594 7.23684C10.9527 7.23684 12.1337 6.01152 12.1337 4.5C12.1337 2.98848 10.9527 1.76316 9.49594 1.76316ZM5.68854 3.86842C5.98038 1.95938 7.5739 0.5 9.49594 0.5C11.418 0.5 13.0115 1.95938 13.3033 3.86842H18.3913C18.7275 3.86842 19 4.15119 19 4.5C19 4.84881 18.7275 5.13158 18.3913 5.13158H13.3033C13.0115 7.04062 11.418 8.5 9.49594 8.5C7.5739 8.5 5.98038 7.04062 5.68854 5.13158H0.608714C0.272531 5.13158 0 4.84881 0 4.5C0 4.15119 0.272531 3.86842 0.608714 3.86842H5.68854Z",
      fill: "currentColor"
    })
  ]))
}