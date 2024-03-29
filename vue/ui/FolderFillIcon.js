import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    color: "rgb(var(--foreground, 0, 0, 0))",
    viewBox: "0 0 18 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    _createElementVNode("path", {
      d: "M0 12.959C0 13.806 0.206077 14.4399 0.61823 14.8607C1.03567 15.2869 1.65918 15.5 2.48877 15.5H15.749C16.4571 15.5 17.0092 15.2869 17.4055 14.8607C17.8018 14.4399 18 13.806 18 12.959V6.2377H0V12.959ZM0 5.16393H18V4.54098C18 3.69945 17.7913 3.06557 17.3738 2.63934C16.9564 2.21311 16.3355 2 15.5112 2H7.90225C7.63276 2 7.40555 1.96448 7.22061 1.89344C7.03567 1.81694 6.8428 1.69126 6.64201 1.51639L6.15852 1.10656C5.98415 0.953552 5.81506 0.833333 5.65125 0.745902C5.49273 0.65847 5.31572 0.595628 5.12021 0.557377C4.92999 0.519126 4.70542 0.5 4.4465 0.5H2.18758C1.49009 0.5 0.951123 0.704918 0.570674 1.11475C0.190225 1.52459 0 2.14208 0 2.96721V5.16393Z",
      fill: "currentColor"
    })
  ]))
}