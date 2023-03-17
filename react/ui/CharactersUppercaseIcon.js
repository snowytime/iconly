import * as React from "react";
import { forwardRef } from "react";
const CharactersUppercaseIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 30 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M0.647649 11.5C0.853251 11.5 1.01262 11.4531 1.12571 11.3592C1.23879 11.2702 1.33131 11.1244 1.40327 10.9218L2.39787 8.29784H6.94683L7.94144 10.9218C8.0134 11.1244 8.10592 11.2702 8.219 11.3592C8.33208 11.4531 8.48884 11.5 8.6893 11.5C8.8949 11.5 9.05682 11.4432 9.17504 11.3295C9.2984 11.2109 9.36008 11.0577 9.36008 10.8699C9.36008 10.7563 9.33181 10.6229 9.27527 10.4697L5.65925 1.219C5.56672 0.986748 5.44079 0.811321 5.28145 0.692722C5.12211 0.569182 4.91908 0.507412 4.67235 0.507412C4.20461 0.507412 3.88078 0.742138 3.70088 1.21159L0.0848111 10.4771C0.0282704 10.6303 0 10.7637 0 10.8774C0 11.0651 0.0565407 11.2159 0.169622 11.3295C0.287844 11.4432 0.447186 11.5 0.647649 11.5ZM2.77567 7.17857L4.64922 2.19003H4.68777L6.56133 7.17857H2.77567ZM11.4495 11.285H15.1966C16.0139 11.285 16.7129 11.164 17.2938 10.9218C17.8797 10.6797 18.3295 10.3412 18.643 9.90633C18.9566 9.47147 19.1134 8.96002 19.1134 8.37197C19.1134 7.88275 18.9977 7.44789 18.7664 7.06739C18.5402 6.68194 18.2241 6.37062 17.8181 6.13342C17.4171 5.89623 16.952 5.75045 16.4225 5.69609V5.64421C16.8286 5.57996 17.191 5.43419 17.5097 5.20687C17.8283 4.97462 18.0776 4.68801 18.2575 4.34704C18.4426 4.00112 18.5351 3.6305 18.5351 3.23518C18.5351 2.73607 18.3937 2.29627 18.111 1.91577C17.8283 1.53032 17.4351 1.22889 16.9314 1.01146C16.4277 0.789084 15.8366 0.677898 15.1581 0.677898H11.4495C11.2336 0.677898 11.0614 0.742138 10.9329 0.87062C10.8044 0.99416 10.7402 1.16217 10.7402 1.37466V10.5883C10.7402 10.8008 10.8044 10.9712 10.9329 11.0997C11.0614 11.2233 11.2336 11.285 11.4495 11.285ZM12.1974 5.26617V1.86388H14.8265C15.5307 1.86388 16.0833 2.00966 16.4842 2.30121C16.8851 2.58783 17.0856 2.96586 17.0856 3.43531C17.0856 4.01348 16.8594 4.46316 16.4071 4.78437C15.9548 5.10557 15.3226 5.26617 14.5104 5.26617H12.1974ZM12.1974 10.1065V6.37062H14.7957C15.7106 6.37062 16.4097 6.53616 16.8928 6.86725C17.3812 7.1934 17.6253 7.66779 17.6253 8.29043C17.6253 8.85377 17.3914 9.29852 16.9237 9.62466C16.4611 9.94587 15.7954 10.1065 14.9268 10.1065H12.1974ZM25.4665 11.4629C26.1244 11.4629 26.7283 11.3765 27.2783 11.2035C27.8283 11.0256 28.3115 10.7711 28.7278 10.44C29.1442 10.1089 29.4783 9.7062 29.7301 9.23181C29.8072 9.0885 29.8664 8.94519 29.9075 8.80189C29.9537 8.65858 29.9769 8.52022 29.9769 8.38679C29.9769 8.20395 29.9152 8.05818 29.7918 7.94946C29.6685 7.8358 29.5143 7.77898 29.3292 7.77898C29.175 7.77898 29.0491 7.81604 28.9514 7.89016C28.8538 7.95934 28.7612 8.08536 28.6739 8.26819C28.4991 8.68823 28.2601 9.04403 27.9568 9.33558C27.6587 9.62713 27.2989 9.84951 26.8774 10.0027C26.4611 10.1509 25.9908 10.2251 25.4665 10.2251C24.716 10.2251 24.0658 10.0521 23.5158 9.7062C22.9658 9.36029 22.5392 8.8686 22.2359 8.23113C21.9378 7.59367 21.7888 6.83513 21.7888 5.95553C21.7888 5.09075 21.9378 4.34209 22.2359 3.70957C22.5392 3.07704 22.9658 2.5903 23.5158 2.24933C24.071 1.90836 24.7212 1.73787 25.4665 1.73787C25.9599 1.73787 26.4148 1.82435 26.8311 1.9973C27.2526 2.17026 27.6176 2.41734 27.926 2.73854C28.2395 3.05481 28.4785 3.42543 28.643 3.8504C28.7304 4.03324 28.8306 4.16667 28.9437 4.25067C29.0568 4.33468 29.1956 4.37668 29.3601 4.37668C29.5502 4.37668 29.7044 4.32233 29.8227 4.21361C29.9409 4.09996 30 3.95171 30 3.76887C30 3.57615 29.9563 3.36366 29.8689 3.1314C29.6685 2.58783 29.3498 2.11837 28.9129 1.72305C28.476 1.32772 27.9594 1.02628 27.3631 0.818733C26.772 0.606244 26.1398 0.5 25.4665 0.5C24.4179 0.5 23.5081 0.722372 22.7371 1.16712C21.9712 1.60692 21.3776 2.23697 20.9561 3.05728C20.5397 3.87264 20.3316 4.84119 20.3316 5.96294C20.3316 7.09456 20.5397 8.073 20.9561 8.89825C21.3776 9.71855 21.9712 10.3511 22.7371 10.7958C23.5081 11.2406 24.4179 11.4629 25.4665 11.4629Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(CharactersUppercaseIcon);
export default ForwardRef;